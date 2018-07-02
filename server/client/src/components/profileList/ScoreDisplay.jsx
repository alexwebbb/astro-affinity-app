import React from "react";

import * as chineseZodiac from "../../utils/chineseZodiac";
import * as westernZodiac from "../../utils/westernZodiac";

export default (cSign, wSign, cSignPrimary, wSignPrimary) => {
  const cScore = chineseZodiac.getAffinity(cSignPrimary, cSign),
    wScore = westernZodiac.getAffinity(wSignPrimary, wSign);

  return (
    <div>
      <p>hello</p>
      <p>
          Chinese: {cScore}
      </p>
      <p>
          Western: {wScore}
      </p>
    </div>
  );
};
