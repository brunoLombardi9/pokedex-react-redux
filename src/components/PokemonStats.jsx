import { Grid } from "@mui/material";
import { Chart as ChartJS } from "chart.js/auto";
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import typeStyles from "../../utilities/typeStyles";

const PokemonStats = ({ stats, types }) => {
  const [statsData, setStatsData] = useState({
    labels: stats.map((stat) => stat.stat.name),
    datasets: [
      {
        label: "Stats",
        data: stats.map((stat) => stat.base_stat),
        borderWidth: "1.2",
        borderColor: "black",
        backgroundColor: types.map(
          (type) => typeStyles[type.type.name].backgroundColor
        ),
      },
    ],
  });

  return <Bar data={statsData} />;
};

export default PokemonStats;
