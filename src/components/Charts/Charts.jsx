import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const Charts = () => {
  const studentMark = [
    {
      id: 1,
      name: "Rana",
      math: 78,
      science: 85,
      english: 82,
    },
    {
      id: 2,
      name: "Mishal",
      math: 65,
      science: 70,
      english: 68,
    },
    {
      id: 3,
      name: "Emtiaz",
      math: 90,
      science: 92,
      english: 95,
    },
    {
      id: 4,
      name: "Asad",
      math: 55,
      science: 60,
      english: 58,
    },
    {
      id: 5,
      name: "Riyad",
      math: 85,
      science: 87,
      english: 90,
    },
    {
      id: 6,
      name: "Rafi",
      math: 72,
      science: 75,
      english: 78,
    },
    {
      id: 7,
      name: "Biplob",
      math: 88,
      science: 90,
      english: 89,
    },
  ];
  return (
    <div>
      <LineChart width={700} height={300} data={studentMark}>
        <XAxis dataKey="name" />
        <YAxis />
       <Line type="monotone" dataKey="math" stroke="green" />
       <Line type="dotted" dataKey="english" stroke="blue" />
       <Line type="monotone" dataKey="science" stroke="red" />

      </LineChart>
    </div>
  );
};

export default Charts;
