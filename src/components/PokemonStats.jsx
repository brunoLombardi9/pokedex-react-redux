import { Box } from "@mui/material";
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

  return (
    <Box
      width={{ sm: "50%", md: "100%" }}
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Bar data={statsData} />
    </Box>
  );
};

export default PokemonStats;
