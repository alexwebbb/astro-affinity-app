export const nameToIndex = {
  rat: 0,
  ox: 1,
  tiger: 2,
  rabbit: 3,
  dragon: 4,
  sanke: 5,
  horse: 6,
  sheep: 7,
  monkey: 8,
  rooster: 9,
  dog: 10,
  pig: 11
};

export const indexToName = [
  "rat",
  "ox",
  "tiger",
  "rabbit",
  "dragon",
  "sanke",
  "horse",
  "sheep",
  "monkey",
  "rooster",
  "dog",
  "pig"
];

export const affinities = [
  [4, 4.5, 3, 2, 5, 4, 1, 2, 5, 3, 3, 4],
  [4.5, 3, 2, 4, 2, 4, 2, 1, 3, 5, 2, 3],
  [3, 2, 3, 3, 3, 2, 5, 3, 1, 3, 5, 4.5],
  [2, 4, 3, 4, 2, 4, 3, 5, 3, 1, 4.5, 5],
  [5, 2, 3, 2, 3, 4, 3, 4, 5, 4.5, 1, 4],
  [4, 5, 2, 4, 4, 3, 3, 4, 4.5, 5, 3, 1],
  [1, 2, 5, 3, 3, 3, 4, 4.5, 3, 3, 5, 3],
  [2, 1, 3, 5, 4, 4, 4.5, 3, 3, 3, 3, 5],
  [5, 3, 1, 3, 5, 4.5, 3, 3, 3, 3, 3, 4],
  [3, 5, 3, 1, 4.5, 5, 3, 3, 3, 2, 2, 3],
  [3, 2, 5, 4.5, 1, 3, 5, 3, 3, 2, 3, 3],
  [4, 3, 4.5, 5, 4, 1, 3, 5, 4, 3, 3, 3]
];

export const getSign = birthdate => {
  const birthyear = new Date(birthdate).getFullYear();

  const startDate = 1901,
    dateKey = [
      { name: "rat", offset: 1 },
      { name: "ox", offset: 0 },
      { name: "tiger", offset: 11 },
      { name: "rabbit", offset: 10 },
      { name: "dragon", offset: 9 },
      { name: "snake", offset: 8 },
      { name: "horse", offset: 7 },
      { name: "sheep", offset: 6 },
      { name: "monkey", offset: 5 },
      { name: "rooster", offset: 4 },
      { name: "dog", offset: 3 },
      { name: "boar", offset: 2 }
    ];

  let yearOffset = (startDate - birthyear) % 12;

  if (yearOffset < 0) {
    yearOffset += 12;
  }

  return dateKey.find(sign => {
    return yearOffset === sign.offset;
  }).name;
};
