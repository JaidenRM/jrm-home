import React, { useState } from 'react';
import { WheelMenuOption } from '../../models/WheelMenuOption';
import { MyHamburger } from './MyHamburger';
import { MySideMenu } from './MySideMenu';

interface IMenuProps {
    options: WheelMenuOption[],
    customSizePx?: [number, number]
}

export const MyHamburgerMenu = (props: IMenuProps) => {
    //hooks
    const [isOpen, setIsOpen] = useState(false);

    //internal vars
    const size = 4;
    const controller = 
        <MyHamburger
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            size={size}
        />;

    //render
    return (
        <MySideMenu 
            isOpen={isOpen}
            menuOptions={props.options}
            menuController={controller}
            controllerSize={size}
            customSizePx={props.customSizePx}
        />
    );
}