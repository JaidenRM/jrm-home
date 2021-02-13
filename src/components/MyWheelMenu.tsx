import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { DataEntry } from "react-minimal-pie-chart/types/commonTypes";
import styled from "styled-components";
import { PIE_CHART_DATA as PieChartData } from "../constants/testData"
import { WheelMenuOption } from "../models/WheelMenuOption";
import { MyHamburgerMenu } from "./HamburgerMenu/MyHamburgerMenu";

/********************************************************
 * Class Goals
 * ======================================================
 *  - To showcase z options with a two-pronged menu
 *  - x options will be on an outer ring
 *  - y options will be in a center hamburger-esque menu
 *  - z = x + y
 ********************************************************/

interface IWheelMenuProps {
    options: WheelMenuOption[],
    innerHoleCoverage: number,
}

const defaultProps: IWheelMenuProps = {
    options: PieChartData,
    innerHoleCoverage: 50,
}

const StyledDiv = styled.div`
    position: relative;

    .center-me {
        position: absolute;
        top: calc(50% - 1rem);
        left: calc(50% - 3rem);
        padding-top: 0%;
        text-align: center;
        font-size: 13px;
    }
`;

export const MyWheelMenu = (props: IWheelMenuProps) => {
    const outerData: DataEntry[] = [];
    const lineWidth: number = Math.max(100 - props.innerHoleCoverage, 0);

    props.options
        .filter(opt => opt.onOuterWheel)
        .forEach(opt => outerData.push(opt.ToDataEntry()));

    return (
        <StyledDiv>
            
                <MyHamburgerMenu/>
            
            <PieChart
                data={outerData}
                label={({ dataEntry }) => dataEntry.title }
                labelStyle={{ fontSize: 3 }}
                labelPosition={100 - lineWidth/2}
                startAngle={320}
                lineWidth={lineWidth}
                style={{position: "relative", zIndex: -30, backgroundColor: 'rgba(0,0,0,0)'}}
            />
        </StyledDiv>
    );
}

MyWheelMenu.defaultProps = defaultProps;