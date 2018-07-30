import getData from "./getData";
import { CHINESE, WESTERN, COMBINED } from "../../utils/zodiac";

export default (profiles, auth, sortIndex, reverse) => {
  let pIndex = profiles.findIndex(({ _id }) => {
    return _id === auth.primary;
  });

  if (pIndex < 0) {
    pIndex = 0;
  }

  const newProfiles = profiles.map((v, i) => {
    return {
      index: i,
      ...v,
      ...getData(v.birthdate, profiles[pIndex].birthdate)
    };
  });

  const primaryProfile = newProfiles.splice(pIndex, 1)[0];

  switch (sortIndex) {
    case CHINESE:
      newProfiles.sort((a, b) => {
        return b.cScore - a.cScore;
      });
      break;
    case WESTERN:
      newProfiles.sort((a, b) => {
        return b.wScore - a.wScore;
      });
      break;
    case COMBINED:
      newProfiles.sort((a, b) => {
        return b.combinedScore - a.combinedScore;
      });
      break;
    default:
      break;
  }

  if (reverse) {
    newProfiles.reverse();
  }

  newProfiles.splice(0, 0, primaryProfile);

  return { primary: profiles[pIndex], newProfiles };
};
