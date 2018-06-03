import React, { Component } from "react";
import { scale } from "d3";
import { RadarChart } from "../utils/radarChart";

class Graph extends Component {
  componentDidMount() {
    const margin = { top: 100, right: 100, bottom: 100, left: 100 },
      width =
        Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
      height = Math.min(
        width,
        window.innerHeight - margin.top - margin.bottom - 20
      ),
      color = scale.ordinal().range(["#EDC951", "#CC333F", "#00A0B0"]),
      radarChartOptions = {
        w: width,
        h: height,
        margin: margin,
        maxValue: 0.5,
        levels: 5,
        roundStrokes: false,
        color: color
      },
      data = [
        [
          //iPhone
          { axis: "Battery Life", value: 0.22 },
          { axis: "Brand", value: 0.28 },
          { axis: "Contract Cost", value: 0.29 },
          { axis: "Design And Quality", value: 0.17 },
          { axis: "Have Internet Connectivity", value: 0.22 },
          { axis: "Large Screen", value: 0.02 },
          { axis: "Price Of Device", value: 0.21 },
          { axis: "To Be A Smartphone", value: 0.5 }
        ],
        [
          //Samsung
          { axis: "Battery Life", value: 0.27 },
          { axis: "Brand", value: 0.16 },
          { axis: "Contract Cost", value: 0.35 },
          { axis: "Design And Quality", value: 0.13 },
          { axis: "Have Internet Connectivity", value: 0.2 },
          { axis: "Large Screen", value: 0.13 },
          { axis: "Price Of Device", value: 0.35 },
          { axis: "To Be A Smartphone", value: 0.38 }
        ],
        [
          //Nokia Smartphone
          { axis: "Battery Life", value: 0.26 },
          { axis: "Brand", value: 0.1 },
          { axis: "Contract Cost", value: 0.3 },
          { axis: "Design And Quality", value: 0.14 },
          { axis: "Have Internet Connectivity", value: 0.22 },
          { axis: "Large Screen", value: 0.04 },
          { axis: "Price Of Device", value: 0.41 },
          { axis: "To Be A Smartphone", value: 0.3 }
        ]
      ];

    RadarChart(".radarChart", data, radarChartOptions);
  }

  render() {
    return <div className="radarChart"></div>;
  }
}

export default Graph;
