import React, { useState } from 'react';
import styled from 'styled-components';
import { WheelMenuOption } from '../../models/WheelMenuOption';
import { MyHamburger } from './MyHamburger';
import { MySideMenu } from './MySideMenu';

const HamburgerDiv = styled.div<IStyledProps>`
    background-color: transparent;
    padding: 1rem 2rem;
    margin: 0 auto;
    position: absolute;
    left: ${props => props.isOpen ? '-5rem' : 'calc(50% - 3rem)'};
    top: calc(50% - 2rem);
    transition: color 0.3s linear;
`;

interface IStyledProps {
    isOpen: boolean
}

interface IMenuProps {
    options: WheelMenuOption[]
}

export const MyHamburgerMenu = (props: IMenuProps) => {
    //hooks
    const [isOpen, setIsOpen] = useState(false);

    //render
    return (
        <>
            <HamburgerDiv isOpen={isOpen}>
                <MyHamburger
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    size={2}
                />
            </HamburgerDiv>
            <MySideMenu 
                isOpen={isOpen}
                menuOptions={props.options}
            />
        </>
    );
}