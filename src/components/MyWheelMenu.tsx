import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { PIE_CHART_DATA as PieChartData } from "../constants/testData"

/********************************************************
 * Class Goals
 * ======================================================
 *  - To showcase z options with a two-pronged menu
 *  - x options will be on an outer ring
 *  - y options will be in a center hamburger-esque menu
 *  - z = x + y
 ********************************************************/

interface WheelMenuProps {
    options: any, //decide on class implementation
    maxOuterOptions: number,
}

const defaultProps: WheelMenuProps = {
    options: PieChartData,
    maxOuterOptions: 4,
}

export const MyWheelMenu = (props: WheelMenuProps) => {
    return (
        <PieChart
            data={props.options}
            label={({ dataEntry }) => dataEntry.value }
            labelPosition={65}
            startAngle={320}
            lineWidth={50}
            radius={25}
            center={[25, 25]}
        />
    );
}

MyWheelMenu.defaultProps = defaultProps;