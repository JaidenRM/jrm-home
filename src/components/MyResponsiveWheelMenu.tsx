import { CSSProperties } from "react";
import { WheelMenuOption } from "../models/WheelMenuOption";
import { useWindowSize } from "../utils/customHooks";
import { largestSquareInCircle, largestTextSizeOnSegment } from "../utils/pathUtils";
import { MyWheelMenu } from "./MyWheelMenu";

/********************************************************
 * Class Goals
 * ======================================================
 *  - Sizing should suit the viewport
 *  - Current focus will be around maxing the menu to the viewport
 ********************************************************/

interface IResponsiveProps {
    options: WheelMenuOption[],
    innerHoleCoverage: number,
    maxHamburgerSize: number,
    //could change to [number, number] for multiple options based on screen size
    fitXCharacters: number, 
    padding: number
}

const defaultProps: IResponsiveProps = {
    innerHoleCoverage: 50,
    options: [],
    maxHamburgerSize: Number.MAX_SAFE_INTEGER,
    fitXCharacters: 15,
    padding: 20,
}

export const MyResponsiveWheelMenu = (props: IResponsiveProps) => {
    const size = useWindowSize();
    const padding = 1 - props.padding / 100;
    const radius = Math.min(size.width, size.height) / 2.0 * padding;
    let squareLength = largestSquareInCircle(radius * 2.0 * props.innerHoleCoverage/100.0) / (16.0 * 2.0);
    squareLength = squareLength > props.maxHamburgerSize ? props.maxHamburgerSize : squareLength;

    const cssProps: CSSProperties = {
        fontSize: largestTextSizeOnSegment(
            radius, 
            props.options.filter(opt => opt.onOuterWheel).length,
            props.fitXCharacters
        ),
        fontFamily: 'cursive'
    }

    return (
        <MyWheelMenu
            options={props.options}
            innerHoleCoverage={props.innerHoleCoverage}
            radius={radius}
            hamburgerSize={squareLength}
            textStyling={cssProps}
        />
    );
}

MyResponsiveWheelMenu.defaultProps = defaultProps;