import styled from 'styled-components';

const StyledBurger = styled.button`
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    
    &:focus {
        outline: none;
    }
    
    div {
        width: 2rem;
        height: 0.25rem;
        background: ${(props) => props.isOpen ? props.theme.primaryLight : props.theme.primaryDark };
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
            transform: ${(props: IHamburgerProps) => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
          }
      
          :nth-child(2) {
            opacity: ${(props: IHamburgerProps) => props.isOpen ? '0' : '1'};
            transform: ${(props: IHamburgerProps) => props.isOpen ? 'translateX(20px)' : 'translateX(0)'};
          }
      
          :nth-child(3) {
            transform: ${(props: IHamburgerProps) => props.isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
          }
    }
`;

interface IHamburgerProps {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

export const MyHamburger = (props: IHamburgerProps) => {
    return(
        <StyledBurger 
            {...props}
            onClick={() => props.setIsOpen(!props.isOpen)}
        >
            <div/>
            <div/>
            <div/>
        </StyledBurger>
    );
}

