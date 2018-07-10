import { select } from "d3";
import fix from "./fix";

// http://bl.ocks.org/xiaoxinghu/6ffd42cf0b76fd4819b7

export default (parent, k) => {
  const selection = select("." + parent);

  if (selection) {
    let r = 240, // radius of the ball
      h = 0,
      zero = 0,
      one = 0,
      text = "N/A",
      clipSelector = "clip-in-" + parent;

    if (k >= 0) {
      const fixed = fix(k);
      h = r * 2 * (1 - fixed);
      zero = 1;
      one = k;
      text = parseInt(k * 100, 10) + "%";
    }

    selection.selectAll("svg").remove();
    selection
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", "0 0 " + r * 2 + " " + r * 2)
      .call(function(e) {
        const defs = e.append("defs");
        defs
          .append("clipPath")
          .attr("id", clipSelector)
          .append("rect")
          .attr("x", "-" + r)
          .attr("y", "-" + r)
          .attr("width", r * 2)
          .attr("height", h);

        const g = e
          .append("g")
          .attr("transform", "translate(" + r + "," + r + ")");
        g.append("circle")
          .attr("r", r)
          .attr("class", "na");
        g.append("circle")
          .attr("r", r)
          .style("fill-opacity", zero)
          .attr("class", "zero");
        g.append("circle")
          .attr("r", r)
          .style("fill-opacity", one)
          .attr("class", "one");
        g.append("circle")
          .attr("r", r)
          .style("fill", "#333")
          .style("fill-opacity", 0.5)
          .attr("clip-path", "url(#" + clipSelector + ")");
        g.append("text")
          .attr("class", "value")
          .attr("text-anchor", "middle")
          .attr("font-size", "100")
          .style("fill", "white")
          .style("fill-opacity", 0.7)
          .text(text);
      });
  }
};
