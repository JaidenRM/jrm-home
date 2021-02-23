import { CSSProperties } from "react";
import { WheelMenuOption } from "../models/WheelMenuOption";
import { useWindowSize } from "../utils/customHooks";
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
}

export const MyResponsiveWheelMenu = (props: IResponsiveProps) => {
    const size = useWindowSize();

    return (
        <MyWheelMenu
            options={props.options}
            innerHoleCoverage={props.innerHoleCoverage}
        />
    );
}