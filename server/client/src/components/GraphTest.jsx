import React, { Component } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

const wChart = {
  aries: [5, 2, 5, 2, 4, 1, 3, 3, 4, 3, 5, 1],
  taurus: [2, 4, 1, 5, 3, 4, 3, 3, 1, 4, 2, 5],
  gemini: [5, 1, 4, 1, 5, 2, 4, 1, 3, 2, 4, 1],
  cancer: [2, 5, 1, 4, 3, 5, 1, 4, 2, 5, 2, 4],
  leo: [4, 3, 5, 3, 4, 1, 5, 3, 4, 2, 2, 3],
  virgo: [1, 4, 2, 5, 1, 4, 2, 5, 1, 4, 2, 2],
  libra: [3, 3, 4, 1, 5, 2, 4, 2, 5, 2, 4, 3],
  scorpio: [3, 3, 1, 4, 3, 5, 2, 4, 2, 5, 2, 4],
  sagittarius: [4, 1, 3, 2, 4, 1, 5, 2, 4, 1, 5, 2],
  capricorn: [3, 4, 2, 5, 2, 4, 2, 5, 1, 4, 2, 5],
  aquarius: [5, 2, 4, 2, 2, 2, 4, 2, 5, 2, 4, 3],
  pisces: [1, 5, 1, 4, 3, 2, 3, 4, 2, 5, 3, 4]
};

const easternChart = {
  rat: [4, 4.5, 3, 2, 5, 4, 1, 2, 5, 3, 3, 4],
  ox: [4.5, 3, 2, 4, 2, 4, 2, 1, 3, 5, 2, 3],
  tiger: [3, 2, 3, 3, 3, 2, 5, 3, 1, 3, 5, 4.5],
  rabbit: [2, 4, 3, 4, 2, 4, 3, 5, 3, 1, 4.5, 5],
  dragon: [5, 2, 3, 2, 3, 4, 3, 4, 5, 4.5, 1, 4],
  snake: [4, 5, 2, 4, 4, 3, 3, 4, 4.5, 5, 3, 1],
  horse: [1, 2, 5, 3, 3, 3, 4, 4.5, 3, 3, 5, 3],
  sheep: [2, 1, 3, 5, 4, 4, 4.5, 3, 3, 3, 3, 5],
  monkey: [5, 3, 1, 3, 5, 4.5, 3, 3, 3, 3, 3, 4],
  rooster: [3, 5, 3, 1, 4.5, 5, 3, 3, 3, 2, 2, 3],
  dog: [3, 2, 5, 4.5, 1, 3, 5, 3, 3, 2, 3, 3],
  pig: [4, 3, 4.5, 5, 4, 1, 3, 5, 4, 3, 3, 3]
};

const data = [
  { subject: "Aries", A: wChart.aries[0], B: 110, fullMark: 5 },
  { subject: "Taurus", A: 98, B: 130, fullMark: 5 },
  { subject: "Gemini", A: 86, B: 130, fullMark: 5 },
  { subject: "Cancer", A: 99, B: 100, fullMark: 5 },
  { subject: "Leo", A: 85, B: 90, fullMark: 5 },
  { subject: "Virgo", A: 65, B: 85, fullMark: 5 },
  { subject: "Libra", A: 120, B: 110, fullMark: 5 },
  { subject: "Scorpio", A: 98, B: 130, fullMark: 5 },
  { subject: "Sagittarius", A: 86, B: 130, fullMark: 5 },
  { subject: "Capricorn", A: 99, B: 100, fullMark: 5 },
  { subject: "Aquarius", A: 85, B: 90, fullMark: 5 },
  { subject: "Pisces", A: 65, B: 85, fullMark: 5 }
];

class Graph extends Component {

  createPie() {

    const data = [];

    


    return data;
  }

  render() {
    return (
      <div>
        <RadarChart
          cx={300}
          cy={250}
          outerRadius={150}
          width={600}
          height={500}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="Aries"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            name="Tiger"
            dataKey="B"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>

        <RadarChart
          cx={300}
          cy={250}
          outerRadius={150}
          width={600}
          height={500}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </div>
    );
  }
}

export default Graph;
