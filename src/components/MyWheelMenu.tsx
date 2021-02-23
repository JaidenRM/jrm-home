import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { LabelRenderProps } from "react-minimal-pie-chart/types/Label";
import styled, { CSSProperties } from "styled-components";
import { PIE_CHART_DATA as PieChartData } from "../constants/testData"
import { WheelMenuOption } from "../models/WheelMenuOption";
import { describeArc } from "../utils/pathUtils";
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
    radius: number,
    hamburgerSize: number,
    textStyling: CSSProperties,
}

const defaultProps: IWheelMenuProps = {
    options: PieChartData,
    innerHoleCoverage: 50,
    radius: 350,
    hamburgerSize: 4,
    textStyling: {
        fontSize: '2.5rem',
        fontFamily: 'cursive'
    }
}

const SvgDiv = styled.div<IWheelMenuProps>`
    height: ${({radius}) => radius * 2.4}px;
    width: ${({radius}) => radius * 2.4}px;
    padding: ${({radius}) => radius * 0.2}px;
`;

function GenerateTextSvg(label: LabelRenderProps, data: WheelMenuOption, radius: number, textStyle: CSSProperties) {
    const path: string = describeArc(
        label.x,
        label.y,
        radius * (data.isHovered ? 1.2 : 1),
        label.dataEntry.startAngle,
        label.dataEntry.startAngle + label.dataEntry.degrees
    );

    return (
        <svg overflow="visible">
            <path fill="none" stroke="transparent" d={path} id={label.dataIndex.toString()}/>
            <text>
                <textPath href={`#${label.dataIndex}`} startOffset="50%" textAnchor="middle">
                    <a href={data.url} target="_blank" rel="noreferrer" style={textStyle}>{data.label}</a>
                </textPath>
            </text>
        </svg>
    );
}

export const MyWheelMenu = (props: IWheelMenuProps) => {
    //Just care about updating the state for the re-render 
    //eslint-disable-next-line
    const [isHovered, setIsHovered] = useState(false);

    const lineWidth: number = Math.max(100 - props.innerHoleCoverage, 0);
    const pieOptions = props.options.filter(opt => opt.onOuterWheel);

    return (
        <SvgDiv {...props}>
            {/* pass 50% value here so we can calculate the actual center as a property 
                 WIP!!!!
            */}
            <MyHamburgerMenu
                options={props.options.filter(opt => !opt.onOuterWheel)}
                customSizePx={[props.radius, props.radius]}
                hamburgerSize={props.hamburgerSize}
            />
            <PieChart
                data={pieOptions.map(opt => opt.ToDataEntry())}
                label={label => GenerateTextSvg(label, pieOptions[label.dataIndex], props.radius, props.textStyling)}
                labelPosition={100 - lineWidth/2}
                startAngle={270}
                lineWidth={lineWidth}
                paddingAngle={10}
                radius={props.radius}
                rounded
                animate
                onClick={(e, i) => {
                    if(pieOptions[i].url)
                        window.open(pieOptions[i].url, '_blank');
                }}
                onMouseOver={ (e, i) => {
                    e.currentTarget.setAttribute('opacity', pieOptions[i].url ? '0.5' : '1');
                    e.currentTarget.setAttribute('cursor', pieOptions[i].url ? 'pointer' : 'default');
                    pieOptions[i].isHovered = true;
                    setIsHovered(true);
                }}
                onMouseOut={ (e, i) => {
                    e.currentTarget.setAttribute('opacity', '1');
                    e.currentTarget.setAttribute('cursor', 'default');
                    pieOptions[i].isHovered = false;
                    setIsHovered(false);
                }}
                style={{overflow: "visible"}}
                viewBoxSize={[props.radius * 2, props.radius * 2]}
                center={[props.radius, props.radius]}
            />
        </SvgDiv>
    );
}

MyWheelMenu.defaultProps = defaultProps;