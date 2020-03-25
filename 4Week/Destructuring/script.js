(function() {
    // task1
    let arr = [10, 20, 30];
    let newArr = [...arr];

    const reversArr = arr => newArr.reverse();

    var result = reversArr(arr);
    console.log("Reversed Arry", result);

    // task2

    const concatTwoArray = (arr1, arr2) => [...arr1, ...arr2];

    var concatResult = concatTwoArray([10, 20, 30], [50, 60]);
    console.log("concatnated Array", concatResult);

    // task3
    var city1 = {
        name: "Berlin",
        country: "germany",
        numPeople: "3557k"
    };

    function logInfo(city1) {
        // const name = city.name;
        // const country = city.country;
        // const numPeople = city.population;

        const { name, country, numPeople } = city1;

        console.log(`${name} is in ${country} and has ${numPeople} in it.`);
    }
    logInfo(city1);

    // task4
    // let getNameAndCountry = ({ name, country }) => [name, country];
    // let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
    //     let [, country] = getNameAndCountry(city2);
    //     return {
    //         ...city1,
    //         country
    //     };
    // };

    var city2 = {
        name: "Banglore",
        country: "Indian"
    };
    function getNameAndCountry(city2) {
        var arr = [city2.name, city2.country];
        return arr;
    }
    var result = getNameAndCountry(city2);
    console.log("Result", result);

    function getRelocatedCity(city1, city2) {
        if (typeof city2 == "undefined") {
            city2 = { country: "Germany" };
        }
        var arrcity1 = [city1.name, city1.country, city1.numPeople];
        var arr = [];
        arr = getNameAndCountry(city2);
        return {
            city1info: arrcity1,
            country: arr[1]
        };
    }
    var result1 = getRelocatedCity(city1, city2);
    console.log("Results of return object:", result1);
})();
