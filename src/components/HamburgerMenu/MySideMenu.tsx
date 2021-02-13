import styled from 'styled-components';
import { WheelMenuOption } from '../../models/WheelMenuOption';

const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.primaryDark};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transition: transform 0.3s ease-in-out;
    transform: translate(-50%, -50%);

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;
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

interface IMenuProps {
    isOpen: boolean,
    menuOptions: WheelMenuOption[]
}

export const MySideMenu = (props: IMenuProps) => {    
    return (
        props.isOpen 
        ? 
            <StyledMenu {...props}>
                {props.menuOptions.map(opt => {
                    return (
                        <a href="/">
                            <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
                            {opt.label ?? opt.scale}
                        </a>
                    );
                })}
            </StyledMenu>
        :
            <></>    
    );
}