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
    user-select: none; // Disabling selecting in navigation
`;

const ButtonLabel = styled.span`
    flex-grow: 1;
    user-select: none; // Disabling selecting in navigation
`;

const DropdownArrow = styled.img`
    justify-self: flex-end;
    user-select: none; // Disabling selecting in navigation
`;

const Navigation: FC = () => {
    // Dropdown hook
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    return (
        <Wrapper ref={wrapperRef} >
            <Button onClick={toggleDropdown}>
                <ButtonIcon src={homeIcon} />
                <ButtonLabel>
                    Home
                </ButtonLabel>
                <DropdownArrow src={dropdownArrowIcon} alt="Dropdown menu icon" />
            </Button>
            {dropdownOpen &&
            <Dropdown/>
            }
        </Wrapper>
    );
} 

export default Navigation;