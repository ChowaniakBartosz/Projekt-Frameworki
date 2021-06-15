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
    min-width: 200px;
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5em;
    padding: 0 0.5em;

    &:hover {
        cursor: pointer;
    }
`;

const ButtonIcon = styled.img`
    min-width: 24px;
    user-select: none;
`;

const ButtonLabel = styled.span`
    flex-grow: 1;
    user-select: none;
`;

const DropdownArrow = styled.img`
    user-select: none;
`;

const Navigation: FC = () => {
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