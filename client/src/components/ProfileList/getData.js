import parseDate from "../../utils/parseDate";
import ZODIAC, { CHINESE, WESTERN, COMBINED } from "../../utils/zodiac";

export default (birthdate, birthdatePrimary) => {
  const date = parseDate(birthdate).toDateString(),
    data = [CHINESE, WESTERN].reduce((a, name) => {
      const sign = ZODIAC[name].getSign(birthdate),
        signPrimary = ZODIAC[name].getSign(birthdatePrimary),
        score = ZODIAC[name].getAffinity(signPrimary, sign);
      a[name] = { sign, signPrimary, score };
      return a;
    }, {});
  data[COMBINED] = {
    score:
      Object.values(data).reduce((a, { score }) => a + score, 0) /
      Object.keys(data).length
  };

  return {
    birthdate: date,
    ...data
  };
};
