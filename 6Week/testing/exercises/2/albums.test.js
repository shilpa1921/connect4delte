const { getAlbumNames } = require("./albums");
const spotify = require("./spotify");

jest.mock("./spotify");

test("album names are in alphabetical order", () => {
    spotify.search.mockResolvedValue(
        {
            albums: {
                items: [
                    {
                        name: "Album One",
                    },
                ],
            },
        },
        {
            albums: {
                items: [
                    {
                        name: "Balbum Two",
                    },
                ],
            },
        },
        {
            albums: {
                items: [
                    {
                        name: "Calbum Three",
                    },
                ],
            },
        }
    );

    return getAlbumNames("meat loaf").then((albumNames) => {
        expect(albumNames).toEqual(albumNames.sort());
    });
});
