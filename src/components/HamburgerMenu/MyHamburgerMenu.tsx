import React, { useState } from 'react';
import { WheelMenuOption } from '../../models/WheelMenuOption';
import { MyHamburger } from './MyHamburger';
import { MySideMenu } from './MySideMenu';

interface IMenuProps {
    options: WheelMenuOption[],
    customSizePx?: [number, number],
    hamburgerSize: number,
}

export const MyHamburgerMenu = (props: IMenuProps) => {
    //hooks
    const [isOpen, setIsOpen] = useState(false);

    //internal vars
    const controller = 
        <MyHamburger
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            size={props.hamburgerSize}
        />;

    //render
    return (
        <MySideMenu 
            isOpen={isOpen}
            menuOptions={props.options}
            menuController={controller}
            controllerSize={props.hamburgerSize}
            customSizePx={props.customSizePx}
        />
    );
}