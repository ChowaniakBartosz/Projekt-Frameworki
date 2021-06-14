import React, { FC, ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import useDropdown from 'react-dropdown-hook'

// Styled helpers
import {Colors} from 'styledHelpers/Colors'

// Assets
import dropdownArrowIcon from 'assets/icons/arrow-down.svg'
// Platform
import homeIcon from 'assets/icons/house2.svg'
import publicationsIcon from 'assets/icons/publications.svg'
import peopleIcon from 'assets/icons/people.svg'
import entitiesIcon from 'assets/icons/entities.svg'
import administrationIcon from 'assets/icons/administration.svg'
// Workspaces
import contractIcon from 'assets/icons/comments.svg'
import corporateIcon from 'assets/icons/comments.svg'
import groupNormsIcon from 'assets/icons/network.svg'
// Account
import profilePicture from 'assets/avatar.jpg'
import privacyIcon from 'assets/icons/privacy.svg'
import profileSettingsIcon from 'assets/icons/settings.svg'
import logoutIcon from 'assets/icons/logout.svg'

// Components
import NavigationSection from './NavigationSection/NavigationSection';
import { NavigationItem, INavigationItemProps } from './NavigationItem/NavigationItem';
import NavigationFilter from './NavigationFilter/NavigationFilter';

const MainWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    min-width: 200px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    &:hover {
        cursor: pointer;
    }
`;

const MenuLogo = styled.img`
    min-width: 32px;
`;

const Menu = styled.ul`
    padding: .5em;
    flex-grow: 2;
`;

const MenuItem = styled.li`
    // Disabling selecting text in navigation
    user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
`;

const DropdownButton = styled.button`
    justify-self: flex-end;
    margin: 0;
    padding: 6px 8px;
    border: 0;
    background-color: transparent;
`;

const Dropdown = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 42px;
    background-color: ${Colors.White};
    width: 100%;
    border: ${Colors.Silver} solid 1px;
    border-top: 0;
    border-radius: 6px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
`;

const LogoutSection = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    padding: .5em;
`;

const LogoutText = styled.div`
    color: ${Colors.Gray};
    margin-left: .4em;
`;

const SeeProfile = styled.a`
    font-size: .8em;
    color: ${Colors.SecondaryText};
`;

const platform: Array<INavigationItemProps> = [
    {
        title: 'Home',
        to: '/',
        icon: homeIcon,
    },
    {
        title: 'Publications',
        to: '/publications',
        icon: publicationsIcon,
    },
    {
        title: 'People',
        to: '/people',
        icon: peopleIcon,
    },
    {
        title: 'Entities',
        to: '/entities',
        icon: entitiesIcon,
    },
    {
        title: 'Administration',
        to: '/administration',
        icon: administrationIcon,
    }
];

const workspaces : Array<INavigationItemProps> = [
    {
        title: 'Client contract',
        to: '/clientContract',
        icon: contractIcon,
    },
    {
        title: 'Supplier contract',
        to: '/supplierContract',
        icon: contractIcon,
    },
    {
        title: 'Corporate',
        to: '/corporate',
        icon: corporateIcon,
    },
    {
        title: 'Group Norms',
        to: '/groupNorms',
        icon: groupNormsIcon,
    },
    {
        title: 'Real estate contracts',
        to: '/realestateContracts',
        icon: contractIcon,
    }
];

const account : Array<INavigationItemProps> = [
    {
        title: 'Privacy',
        to: '/privacy',
        icon: privacyIcon,
    },
    {
        title: 'Profile',
        to: '/profile',
        icon: profileSettingsIcon,
    }
]

const Navigation: FC = (props) => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const [filterText, setFilterText] = useState<string>('');
    
    return (
        <MainWrapper ref={wrapperRef} >
            <Wrapper onClick={toggleDropdown}>
                <MenuLogo src={homeIcon} />
                <Menu>
                    <MenuItem>Home</MenuItem>
                </Menu>
                <DropdownButton>
                    <img src={dropdownArrowIcon} alt="Dropdown menu icon" />
                </DropdownButton>
            </Wrapper>
            {dropdownOpen &&
            <Dropdown>
                <NavigationFilter value={filterText} setFilterText={setFilterText} />
                <NavigationSection title="Platform" sectionItems={platform} filterText={filterText} />
                <NavigationSection title="Workspaces" sectionItems={workspaces} filterText={filterText} />
                <NavigationSection title="Account" sectionItems={account} filterText={filterText}>
                    <NavigationItem to="/profile" icon={profilePicture} title="Bartosz Chowaniak">
                        <p>Bartosz Chowaniak</p>
                        <SeeProfile>See profile</SeeProfile>
                    </NavigationItem>
                </NavigationSection>
                {/* <Container>
                    <SectionTitle>Platform</SectionTitle>
                    <Nav>
                        {
                            platform.map((item) => (
                                item.title.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()) &&
                                <NavigationItem to={item.to} title={item.title} icon={item.icon} key={item.to} />
                            ))
                        }
                    </Nav>

                    <SectionTitle>Workspaces</SectionTitle>
                    <Nav>
                        {
                            workspaces.map(item => (
                                item.title.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()) &&
                                <NavigationItem to={item.to} title={item.title} icon={item.icon} key={item.to} />
                            ))
                        }
                    </Nav>
                </Container>
                <AccountSection>
                    <SectionTitle>Account</SectionTitle>
                    <Nav>
                        <NavigationItem to="/profile" icon={profilePicture} title="Bartosz Chowaniak">
                            <p>Bartosz Chowaniak</p>
                            <SeeProfile>See profile</SeeProfile>
                        </NavigationItem>
                        {
                            account.map(item => (
                                item.title.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()) &&
                                <NavigationItem to={item.to} icon={item.icon} title={item.title} key={item.to} />
                            ))
                        }
                    </Nav>
                </AccountSection>*/}
                <LogoutSection>
                    <img src={logoutIcon} alt="Logout" />
                    <LogoutText>Logout</LogoutText>
                </LogoutSection> 
            </Dropdown>
            }
        </MainWrapper>
    );
} 

export default Navigation;