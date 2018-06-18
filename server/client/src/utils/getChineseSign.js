export function getChineseSign(birthdate) {
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
}
