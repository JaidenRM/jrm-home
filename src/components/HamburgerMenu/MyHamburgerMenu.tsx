import React, { useState } from 'react';
import { MyHamburger } from './MyHamburger';
import { MySideMenu } from './MySideMenu';

export const MyHamburgerMenu = () => {
    //hooks
    const [isOpen, setIsOpen] = useState(false);

    //render
    return (
        <>
            <MyHamburger 
                isOpen={isOpen} 
                setIsOpen={setIsOpen}
            />
            <MySideMenu 
                isOpen={isOpen}
            />
        </>
    );
}