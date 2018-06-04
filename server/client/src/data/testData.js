const westernSignsRaw = function () {

    // bad bc cant guarantee order
    const data = {
        aries: [5, 2, 5, 2, 4, 1, 3, 3, 4, 3, 5, 1],
        taurus: [2, 4, 1, 5, 3, 4, 3, 3, 1, 4, 2, 5],
        gemini: [5, 1, 4, 1, 5, 2, 4, 1, 3, 2, 4, 1],
        cancer: [2, 5, 1, 4, 3, 5, 1, 4, 2, 5, 2, 4],
        leo: [4, 3, 5, 3, 4, 1, 5, 3, 4, 2, 2, 3],
        virgo: [1, 4, 2, 5, 1, 4, 2, 5, 1, 4, 2, 2],
        libra: [3, 3, 4, 1, 5, 2, 4, 2, 5, 2, 4, 3],
        scorpio: [3, 3, 1, 4, 3, 5, 2, 4, 2, 5, 2, 4],
        sagittarius: [4, 1, 3, 2, 4, 1, 5, 2, 4, 1, 5, 2],
        capricorn: [3, 4, 2, 5, 2, 4, 2, 5, 1, 4, 2, 5],
        aquarius: [5, 2, 4, 2, 2, 2, 4, 2, 5, 2, 4, 3],
        pisces: [1, 5, 1, 4, 3, 2, 3, 4, 2, 5, 3, 4]
    };

    // overly verbose but maybe necessary
    const data2 = [{
            name: aries,
            affinities: [5, 2, 5, 2, 4, 1, 3, 3, 4, 3, 5, 1]
        },
        {
            name: taurus,
            affinities: [2, 4, 1, 5, 3, 4, 3, 3, 1, 4, 2, 5]
        },
        {
            name: gemini,
            affinities: [5, 1, 4, 1, 5, 2, 4, 1, 3, 2, 4, 1]
        },
        {
            name: cancer,
            affinities: [2, 5, 1, 4, 3, 5, 1, 4, 2, 5, 2, 4]
        },
        {
            name: leo,
            affinities: [4, 3, 5, 3, 4, 1, 5, 3, 4, 2, 2, 3]
        },
        {
            name: virgo,
            affinities: [1, 4, 2, 5, 1, 4, 2, 5, 1, 4, 2, 2]
        },
        {
            name: libra,
            affinities: [3, 3, 4, 1, 5, 2, 4, 2, 5, 2, 4, 3]
        },
        {
            name: scorpio,
            affinities: [3, 3, 1, 4, 3, 5, 2, 4, 2, 5, 2, 4]
        },
        {
            name: sagittarius,
            affinities: [4, 1, 3, 2, 4, 1, 5, 2, 4, 1, 5, 2]
        },
        {
            name: capricorn,
            affinities: [3, 4, 2, 5, 2, 4, 2, 5, 1, 4, 2, 5]
        },
        {
            name: aquarius,
            affinities: [5, 2, 4, 2, 2, 2, 4, 2, 5, 2, 4, 3]
        },
        {
            name: pisces,
            affinities: [1, 5, 1, 4, 3, 2, 3, 4, 2, 5, 3, 4]
        }
    ];

    const data3 = {
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

    const data4 = {
        order: {
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