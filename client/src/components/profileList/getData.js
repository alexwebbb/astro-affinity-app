import parseDate from "../../utils/parseDate";
import ZODIAC, { CHINESE, WESTERN } from "../../utils/zodiac";

export default (birthdate, birthdatePrimary) => {
    const date = parseDate(birthdate).toDateString(),
      cSign = ZODIAC[CHINESE].getSign(birthdate),
      wSign = ZODIAC[WESTERN].getSign(birthdate),
      cSignPrimary = ZODIAC[CHINESE].getSign(birthdatePrimary),
      wSignPrimary = ZODIAC[WESTERN].getSign(birthdatePrimary),
      cScore = ZODIAC[CHINESE].getAffinity(cSignPrimary, cSign),
      wScore = ZODIAC[WESTERN].getAffinity(wSignPrimary, wSign),
      combinedScore = (cScore + wScore) / 2;

    return {
      birthdate: date,
      cSign,
      wSign,
      cSignPrimary,
      wSignPrimary,
      cScore,
      wScore,
      combinedScore
    };
  }