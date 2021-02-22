import styled from 'styled-components';
import { WheelMenuOption } from '../../models/WheelMenuOption';
import { HAMBURGER_BASE_REM_SIZE } from '../../constants/uiConstants';

const StyledMenu = styled.nav<IMenuProps>`
    position: absolute;
    left: 50%;
    top: ${ ({ customSizePx }) => customSizePx ? `${customSizePx[0] * 0.2}px` : '0px'};
    transition: transform 0.3s ease-in-out;
    transform: translate('50%, 50%');
`;

const StyledInnerMenu = styled.nav<IMenuProps>`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    padding: 2rem;
    background: ${({ theme }) => theme.primaryDark};
    height: ${ ({ customSizePx }) => customSizePx ? `${customSizePx[0] * 2}px` : '100vh' };

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 100vw;
    }

    a {
        font-size: 2rem;
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: ${({ theme }) => theme.primaryLight};
        text-decoration: none;
        transition: color 0.3s linear;
        
        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 1.5rem;
            text-align: center;
        }

        &:hover {
            color: ${({ theme }) => theme.primaryHover};
        }
    }
`;

const PositionHamburger = styled.div<IMenuProps>`
    position: ${props => props.isOpen ? 'absolute' : 'relative' };
    left: ${ 
        props => props.isOpen ? 
            `-${HAMBURGER_BASE_REM_SIZE * props.controllerSize / 2 + 1}rem` :
            `calc(${props.customSizePx ? `${props.customSizePx[1]}px` : '50%'} - ${HAMBURGER_BASE_REM_SIZE / 2}rem)`
    };
    top: ${({customSizePx}) => customSizePx ? `${customSizePx[0]}px` : '50%'};

    ${props => props.isOpen ? 
        `@media (max-width: ${props.theme.mobile}) {
            top: ${props.controllerSize * HAMBURGER_BASE_REM_SIZE / 4 + 1}rem;
            left: 50%;

            div {
                background-color: ${props.theme.primaryLight};
            }
        }`    
        : ''
    }
`;

interface IMenuProps {
    isOpen: boolean,
    menuOptions: WheelMenuOption[],
    menuController: React.ReactNode,
    controllerSize: number,
    customSizePx?: [number, number]
}

export const MySideMenu = (props: IMenuProps) => {    
    return (
        props.isOpen 
        ? 
            <StyledMenu {...props}>
                <StyledInnerMenu {...props}>
                    {props.menuOptions.map(opt => {
                        return (
                            <a href="/">
                                <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
                                {opt.label ?? opt.scale}
                            </a>
                        );
                    })}
                </StyledInnerMenu>
                <PositionHamburger {...props}>
                    {props.menuController}
                </PositionHamburger>
            </StyledMenu>
        :
            <PositionHamburger {...props}>
                {props.menuController}
            </PositionHamburger>   
    );
}