import getData from "./getData";

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

  newProfiles.sort((a, b) => {
    return b[sortIndex].score - a[sortIndex].score;
  });

  if (reverse) {
    newProfiles.reverse();
  }

  newProfiles.splice(0, 0, primaryProfile);

  return { primary: profiles[pIndex], newProfiles };
};
