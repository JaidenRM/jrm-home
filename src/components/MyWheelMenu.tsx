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

function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
    var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
  
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
}

function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number): string {

    var start = polarToCartesian(x, y, radius, startAngle);
    var end = polarToCartesian(x, y, radius, endAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 1, end.x, end.y
    ].join(" ");

    return d;       
}

function GenerateTextSvg(label: LabelRenderProps, data: WheelMenuOption) {
    const path: string = describeArc(label.x, label.y, 50, label.dataEntry.startAngle - 30, label.dataEntry.startAngle + label.dataEntry.degrees - 30);
    return (
        <svg overflow="visible">
            <path fill="none" stroke="transparent" d={path} id={label.dataIndex.toString()}/>
            <text>
                <textPath href={`#${label.dataIndex}`} startOffset={50} textAnchor="middle">
                    <a href={data.url} target="_blank" rel="noreferrer">{data.label}</a>
                </textPath>
            </text>  
        </svg>   
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
                startAngle={0}
                lineWidth={lineWidth}
                rounded
                paddingAngle={10}
                animate
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