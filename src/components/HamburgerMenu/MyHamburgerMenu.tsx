import React, { useState } from 'react';
import { MyHamburger } from './MyHamburger';
import { MySideMenu } from './MySideMenu';

export const MyHamburgerMenu = () => {
    //hooks
    const [isOpen, setIsOpen] = useState(false);

    //components
    const controller = <MyHamburger isOpen={isOpen} setIsOpen={setIsOpen} />;

    //render
    return (
        <MySideMenu 
            isOpen={isOpen}
            controller={controller}
        />
    );
}