import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { PIE_CHART_DATA as PieChartData } from "../constants/fakeData";

interface PieChartProps {}

export const MyPieChart = (props: PieChartProps) => {
    return (
        <PieChart
            data={PieChartData}
        />
    );
}
