export function getWesternSign(day, month) {
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

  return dateSpans.find(sign => {
    return (
      (month === sign.m0 && day >= sign.d0) ||
      (month === sign.m1 && day <= sign.d1)
    );
  }).name;
}
