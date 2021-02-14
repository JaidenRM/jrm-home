import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { LabelRenderProps } from "react-minimal-pie-chart/types/Label";
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

interface IOption {
    option: WheelMenuOption
    key: string
}

function GenerateTextSvg(label: LabelRenderProps, data: WheelMenuOption) {
    return (
        <text {...label}>
            <a href={data.url} target="_blank" rel="noreferrer">{data.label}</a>
        </text>     
    );
}

export const MyWheelMenu = (props: IWheelMenuProps) => {
    const lineWidth: number = Math.max(100 - props.innerHoleCoverage, 0);
    const pieOptions = props.options.filter(opt => opt.onOuterWheel);

    return (
        <StyledDiv>
            <MyHamburgerMenu
                options={props.options.filter(opt => !opt.onOuterWheel)}            
            />
            <PieChart
                data={pieOptions.map(opt => opt.ToDataEntry())}
                label={label => GenerateTextSvg(label, pieOptions[label.dataIndex])}
                labelStyle={{ fontSize: 3 }}
                labelPosition={100 - lineWidth/2}
                startAngle={320}
                lineWidth={lineWidth}
                rounded={true}
                paddingAngle={10}
                animate={true}
                onClick={(e, i) => {
                    if(pieOptions[i].url) 
                        window.open(pieOptions[i].url, '_blank');
                }}
                onMouseOver={ (e, i) => e.currentTarget.setAttribute('opacity', pieOptions[i].url ? '0.5' : '1') }
                onMouseOut={ (e, i) => e.currentTarget.setAttribute('opacity', '1') }
            />
        </StyledDiv>
    );
}

MyWheelMenu.defaultProps = defaultProps;