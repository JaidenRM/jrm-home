import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { DataEntry } from "react-minimal-pie-chart/types/commonTypes";
import { PIE_CHART_DATA as PieChartData } from "../constants/testData"
import { WheelMenuOption } from "../models/WheelMenuOption";

/********************************************************
 * Class Goals
 * ======================================================
 *  - To showcase z options with a two-pronged menu
 *  - x options will be on an outer ring
 *  - y options will be in a center hamburger-esque menu
 *  - z = x + y
 ********************************************************/

interface WheelMenuProps {
    options: WheelMenuOption[],
    innerHoleCoverage: number,
}

const defaultProps: WheelMenuProps = {
    options: PieChartData,
    innerHoleCoverage: 50,
}

export const MyWheelMenu = (props: WheelMenuProps) => {
    const outerData: DataEntry[] = [];
    const lineWidth: number = Math.max(100 - props.innerHoleCoverage, 0);

    props.options
        .filter(opt => opt.onOuterWheel)
        .forEach(opt => outerData.push(opt.ToDataEntry()));

    return (
        <PieChart
            data={outerData}
            label={({ dataEntry }) => dataEntry.title }
            labelStyle={{ fontSize: 3 }}
            labelPosition={100 - lineWidth/2}
            startAngle={320}
            lineWidth={lineWidth}
            //probably will remove these as it is only based on viewBoxSize not actual size
            radius={25} //<-
            center={[25, 25]} //<-
        />
    );
}

MyWheelMenu.defaultProps = defaultProps;