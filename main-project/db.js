const spicedPg = require("spiced-pg");
const db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/doctorsite"
);

module.exports.addData = (first_name, last_name, emailadd, password) => {
    return db.query(
        `
    INSERT INTO users (first_name, last_name, email, password)
    VALUES($1, $2, $3, $4) RETURNING id`,
        [first_name, last_name, emailadd, password]
    );
};

module.exports.addDataToDoctorinfo = (
    first_name,
    last_name,
    emailadd,
    qulification,
    specialization,
    address,
    pincode,
    city,
    password,
    category
) => {
    return db.query(
        `
    INSERT INTO doctor_info (first_name, last_name, email,quelification, specialization, address, pincode, city,  password,category)
    VALUES($1, $2, $3, $4, $5, $6,$7,$8,$9,$10 ) RETURNING id`,
        [
            first_name,
            last_name,
            emailadd,
            qulification,
            specialization,
            address,
            pincode,
            city,
            password,
            category,
        ]
    );
};

module.exports.getDoctorinfo = (id) => {
    return db.query(`SELECT * FROM doctor_info WHERE id = $1;`, [id]);
};
module.exports.getMorePost = (id) => {
    return db.query(
        `SELECT *, (
            SELECT id FROM doctor_info ORDER BY id ASC LIMIT 1
        ) AS lowest_id FROM doctor_info WHERE id < $1 ORDER BY id DESC LIMIT 3;`,
        [id]
    );
};
module.exports.getpassdoc = (email) => {
    return db
        .query(`SELECT * FROM doctor_info WHERE email = $1;`, [email])
        .then((results) => {
            console.log("result from getpass in db.js", results);
            return results;
        })
        .catch((err) => {
            console.log("errrrrrrr", err);
        });
};

module.exports.searchByCategory = (category) => {
    return db
        .query(
            `SELECT * FROM doctor_info WHERE category = $1 order by created_at DESC;`,
            [category]
        )
        .then((results) => {
            console.log("result from getpass in db.js", results);
            return results;
        })
        .catch((err) => {
            console.log("errrrrrrr in category", err);
        });
};
module.exports.getpass = (email) => {
    return db
        .query(`SELECT * FROM users WHERE email = $1;`, [email])
        .then((results) => {
            console.log("result from getpass in db.js", results);
            return results;
        })
        .catch((err) => {
            console.log("errrrrrrr", err);
        });
};

module.exports.addCode = (email, code) => {
    return db.query(
        `INSERT INTO reset_codes (email, code) VALUES ($1, $2) RETURNING email;`,
        [email, code]
    );
};

module.exports.checkCode = (email) => {
    return db.query(
        `SELECT * FROM reset_codes WHERE (CURRENT_TIMESTAMP - created_at < INTERVAL '10 minutes') AND (email = $1) ORDER BY id DESC LIMIT 1;`,
        [email]
    );
};

module.exports.updatePassword = (email, password) => {
    return db.query(`UPDATE users SET password = $2 WHERE email = $1;`, [
        email,
        password,
    ]);
};

module.exports.saveProfilePic = (user_id, url) => {
    return db.query(
        `UPDATE doctor_info
        SET pic_url = $2
        WHERE id=$1 RETURNING *`,
        [user_id, url]
    );
};
module.exports.getDoctor = (id) => {
    return db.query(`SELECT * FROM  doctor_info WHERE id = $1;`, [id]);
};

module.exports.saveUserBio = (user_id, bio) => {
    return db.query(
        `UPDATE users
        SET bio = $2
        WHERE id=$1
        RETURNING bio`,
        [user_id, bio]
    );
};

module.exports.recentjoiners = () => {
    return db.query(
        `SELECT * FROM doctor_info order by created_at DESC LIMIT 3`
    );
};

module.exports.getMatchingActors = (val, id) => {
    return db.query(
        `SELECT * FROM doctor_info WHERE id != $2 AND first_name ILIKE $1;`,
        [val + "%", id]
    );
};

module.exports.friendshipmatch = (userId, id) => {
    return db.query(
        `SELECT * FROM friendships WHERE (receiver_id = $1 AND sender_id = $2) OR (receiver_id = $2 AND sender_id = $1)`,
        [userId, id]
    );
};

module.exports.addFriendsRow = (receiver_id, sender_id) => {
    return db.query(
        `INSERT INTO friendships (receiver_id, sender_id) VALUES ($1, $2) RETURNING *;`,
        [receiver_id, sender_id]
    );
};

module.exports.acceptFriend = (receiver_id, sender_id) => {
    return db.query(
        `UPDATE friendships SET accepted = TRUE 
        WHERE (receiver_id = $1 AND sender_id = $2) 
        OR (receiver_id = $2 AND sender_id = $1);`,
        [receiver_id, sender_id]
    );
};

module.exports.cancelFriend = (receiver_id, sender_id) => {
    return db.query(
        `DELETE FROM friendships WHERE 
        (receiver_id = $1 AND sender_id = $2) 
        OR (receiver_id = $2 AND sender_id = $1);`,
        [receiver_id, sender_id]
    );
};

// SELECT * FROM friendships
// WHERE (receiver_id = $1 AND sender_id = $2)
// OR (receiver_id = $2 AND sender_id = $1)
