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
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${(props: IMenuProps) => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};

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
    isOpen: boolean
}

export const MySideMenu = (props: IMenuProps) => {
    return (
        <StyledMenu {...props}>
            <a href="/">
                <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
                About us
            </a>
            <a href="/">
                <span role="img" aria-label="price">&#x1f4b8;</span>
                Pricing
                </a>
            <a href="/">
                <span role="img" aria-label="contact">&#x1f4e9;</span>
                Contact
                </a>
        </StyledMenu>
    );
}