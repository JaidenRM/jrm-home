import styled from 'styled-components';

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

const ControllerDiv = styled.div<IMenuProps>`
    background-color: white;
    padding: 1rem 2rem;
    margin: 0 auto;
    position: absolute;
    left: ${props => props.isOpen ? '-5rem' : 'calc(50% - 3rem)'};
    top: calc(50% - 2rem);
    transition: color 0.3s linear;
`;

const MenuOptions: React.ReactNode[] = [
    <a href="/">
        <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        About us
    </a>,
    <a href="/">
        <span role="img" aria-label="price">&#x1f4b8;</span>
        Pricing
    </a>,
    <a href="/">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contact
    </a>
]

interface IMenuProps {
    isOpen: boolean,
    controller: React.ReactNode
}

// function RenderMenu(menuItems: React.ReactNode[], controller: React.ReactNode): React.ReactNode[] {
//     const halfway = menuItems.length / 2;
//     const middleElement = 
//         <ControllerDiv>
//             {controller}
//         </ControllerDiv>;

//     menuItems.splice(halfway, 0, middleElement);
//     return menuItems;

// }

export const MySideMenu = (props: IMenuProps) => {    
    return (
        <>
            {
                props.isOpen ? <>
                    <ControllerDiv {...props}>
                        {props.controller}
                    </ControllerDiv>
                    <StyledMenu {...props}>
                        {MenuOptions}
                    </StyledMenu></>
                :
                    <ControllerDiv {...props}>
                        {props.controller}
                    </ControllerDiv>
            }
        </>
    );
}