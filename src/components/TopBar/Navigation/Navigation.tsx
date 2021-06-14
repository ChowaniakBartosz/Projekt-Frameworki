import { FC } from 'react'
import styled from 'styled-components'
import useDropdown from 'react-dropdown-hook'

// Components
import Dropdown from './Dropdown/Dropdown'

// Assets
import homeIcon from 'assets/icons/house2.svg'
import dropdownArrowIcon from 'assets/icons/arrow-down.svg'

const Wrapper = styled.nav`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    min-width: 200px;
`;

const Button = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 0.5em;

    &:hover {
        cursor: pointer;
    }
`;

const ButtonIcon = styled.img`
    min-width: 32px;
`;

const ButtonLabel = styled.p`
    flex-grow: 1;
    // Disabling selecting text in navigation
    user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
`;

const DropdownArrow = styled.button`
    justify-self: flex-end;
    margin: 0;
    border: 0;
    background-color: transparent;
`;

const Navigation: FC = (props) => {
    // Dropdown hook
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    return (
        <Wrapper ref={wrapperRef} >
            <Button onClick={toggleDropdown}>
                <ButtonIcon src={homeIcon} />
                <ButtonLabel>
                    Home
                </ButtonLabel>
                <DropdownArrow>
                    <img src={dropdownArrowIcon} alt="Dropdown menu icon" />
                </DropdownArrow>
            </Button>
            {dropdownOpen &&
            <Dropdown/>
            }
        </Wrapper>
    );
} 

export default Navigation;