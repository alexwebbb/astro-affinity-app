export const nameToIndex = {
  aries: 0,
  taurus: 1,
  gemini: 2,
  cancer: 3,
  leo: 4,
  virgo: 5,
  libra: 6,
  scorpio: 7,
  sagittarius: 8,
  capricorn: 9,
  aquarius: 10,
  pisces: 11
};

export const indexToName = [
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
];

export const affinities = [
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
];

export function getSign(birthdate) {
    const day = new Date(birthdate).getDay() + 1,
          month = new Date(birthdate).getMonth() + 1;
  
    const dateSpans = [
      { name: "capricorn", m0: 12, d0: 22, m1: 1, d1: 20 },
      { name: "aquarius", m0: 1, d0: 21, m1: 2, d1: 18 },
      { name: "pisces", m0: 2, d0: 19, m1: 3, d1: 20 },
      { name: "aries", m0: 3, d0: 21, m1: 4, d1: 20 },
      { name: "taurus", m0: 5, d0: 21, m1: 6, d1: 20 },
      { name: "cancer", m0: 6, d0: 22, m1: 7, d1: 22 },
      { name: "leo", m0: 7, d0: 23, m1: 8, d1: 23 },
      { name: "virgo", m0: 8, d0: 24, m1: 9, d1: 23 },
      { name: "libra", m0: 9, d0: 24, m1: 10, d1: 23 },
      { name: "scorpio", m0: 10, d0: 24, m1: 11, d1: 22 },
      { name: "sagittarius", m0: 11, d0: 23, m1: 12, d1: 21 }
    ];
  
    // return dateSpans[0].toLocaleString();
  
    return dateSpans.find(sign => {
      if (
        (month === sign.m0 && day >= sign.d0) ||
        (month === sign.m1 && day <= sign.d1)
      ) {
        return true;
      } else {
        return false;
      }
    }).name;
  }
