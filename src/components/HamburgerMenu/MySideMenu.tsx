import styled from 'styled-components';
import { WheelMenuOption } from '../../models/WheelMenuOption';
import { HAMBURGER_BASE_REM_SIZE } from '../../constants/uiConstants';

const StyledMenu = styled.nav<IMenuProps>`
    width: 100vw;
    height: 100vh;
    left: 0%;
    top: 0%;
    position: fixed;
    -webkit-backface-visibility: hidden;
    transition: transform 0.3s ease-in-out;
    background: ${({ theme }) => theme.primaryDark};
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        
    }
`;

const StyledInnerMenu = styled.div<IMenuProps>`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 2rem;
    width: 100vw;
    height: calc(100vh - ${({ controllerSize }) => controllerSize * 2}rem);
    margin-top: ${({ controllerSize }) => controllerSize * 2}rem;
    background: ${({ theme }) => theme.primaryDark};

    @media (max-width: ${({ theme }) => theme.mobile}) {
        
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
        text-align: center;
        
        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 1.5rem;
        }

        &:hover {
            color: ${({ theme }) => theme.primaryHover};
        }
    }
`;

const PositionHamburger = styled.div<IMenuProps>`
    position: relative;
    left: ${ 
        props => props.isOpen ? 
            `calc(50% + ${props.controllerSize * 0.1}rem)` :
            `calc(${props.customSizePx ? `${props.customSizePx[1]}px` : '50%'} - ${HAMBURGER_BASE_REM_SIZE / 2}rem)`
    };
    bottom: ${({customSizePx, isOpen, controllerSize}) => isOpen ? `calc(100% - ${controllerSize}rem)` : (customSizePx ? `calc(${customSizePx[0]}px + ${HAMBURGER_BASE_REM_SIZE / 2}rem)` : '50%')};

    div {
        background-color: ${({theme, isOpen}) => isOpen ? theme.primaryLight : theme.primaryDark};
    }

    ${props => props.isOpen ? 
        `@media (max-width: ${props.theme.mobile}) {
            
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