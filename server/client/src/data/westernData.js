export const getWesternSigns = () => {

    return {
        nameToIndex: {
            "aries": 0,
            "taurus": 1,
            "gemini": 2,
            "cancer": 3,
            "leo": 4,
            "virgo": 5,
            "libra": 6,
            "scorpio": 7,
            "sagittarius": 8,
            "capricorn": 9,
            "aquarius": 10,
            "pisces": 11
        },
        indexToName: [
            "aries",
            "taurus",
            "gemini",
            "cancer",
            "leo",
            "virgo",
            "libra",
            "scorpio",
            "sagittarius",
            "capricorn",
            "aquarius",
            "pisces"
        ],
        affinities: [
            [5, 2, 5, 2, 4, 1, 3, 3, 4, 3, 5, 1],
            [2, 4, 1, 5, 3, 4, 3, 3, 1, 4, 2, 5],
            [5, 1, 4, 1, 5, 2, 4, 1, 3, 2, 4, 1],
            [2, 5, 1, 4, 3, 5, 1, 4, 2, 5, 2, 4],
            [4, 3, 5, 3, 4, 1, 5, 3, 4, 2, 2, 3],
            [1, 4, 2, 5, 1, 4, 2, 5, 1, 4, 2, 2],
            [3, 3, 4, 1, 5, 2, 4, 2, 5, 2, 4, 3],
            [3, 3, 1, 4, 3, 5, 2, 4, 2, 5, 2, 4],
            [4, 1, 3, 2, 4, 1, 5, 2, 4, 1, 5, 2],
            [3, 4, 2, 5, 2, 4, 2, 5, 1, 4, 2, 5],
            [5, 2, 4, 2, 2, 2, 4, 2, 5, 2, 4, 3],
            [1, 5, 1, 4, 3, 2, 3, 4, 2, 5, 3, 4]
        ],
    };
}