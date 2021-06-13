import React, { FC, ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom';
import useDropdown from 'react-dropdown-hook'
import styled from 'styled-components'
import {Colors} from '../../styledHelpers/Colors'

// Assets
import houseLogo from '../../assets/icons/house2.svg'
import dropdownArrow from '../../assets/icons/arrow-down.svg'
import logoutIcon from '../../assets/icons/logout.svg'
import peopleLogo from '../../assets/icons/people.svg'
import entitiesLogo from '../../assets/icons/entities.svg'
import administrationLogo from '../../assets/icons/administration.svg'
import clientContractLogo from '../../assets/icons/comments.svg'
import corporateLogo from '../../assets/icons/comments.svg'
import groupNormsLogo from '../../assets/icons/network.svg'
import privacyIcon from '../../assets/icons/privacy.svg'
import settingsIcon from '../../assets/icons/settings.svg'
import avatarLogo from '../../assets/avatar.jpg'
import publicationsLogo from '../../assets/icons/publications.svg'

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
    top: 46px;
    background-color: ${Colors.White};
    width: 100%;
    border: ${Colors.Silver} solid 1px;
    border-top: 0;
    border-radius: 6px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
`;

const Filter = styled.input`
    background-color: ${Colors.White};
    border: ${Colors.Silver} solid 1px;
    border-radius: 3px;
    margin: .5em;
    padding: 6px 3px;
`;

const Container = styled.div`
    overflow: auto;
    max-height: 300px;
    padding: .5em;
    padding-top: 0;
`;

const AccountSection = styled.div`
    border-top: ${Colors.Silver} solid 1px;
    border-bottom: ${Colors.Silver} solid 1px;
    padding: .5em;
`;

const SectionTitle = styled.h3`
    color: ${Colors.Gray};
    font-size: .9em;
    font-weight: bold;
    padding: 3px 0px;
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

const Nav = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
`;

const NavItem = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-content: center;
    color: ${Colors.Gray};
    padding: 3px 0px;
    transition: all .3s;
    text-decoration: none;
    &:hover { background-color: #cfcfcf; }
`;

const NavItemText = styled.span`
    align-self: center;
    padding: 6px 3px;
`;

const NavItemIcon = styled.img`
    align-self: flex-start;
    justify-self: center;
    padding: .3em;
    width: 25px;
`;

const SeeProfile = styled.a`
    font-size: .8em;
    color: ${Colors.SecondaryText};
`;

const platforms: Array<NavItemProps> = [
    {
        title: 'Home',
        to: '/',
        icon: houseLogo,
    },
    {
        title: 'Publications',
        to: '/publications',
        icon: publicationsLogo,
    },
    {
        title: 'People',
        to: '/people',
        icon: peopleLogo,
    },
    {
        title: 'Entities',
        to: '/entities',
        icon: entitiesLogo,
    },
    {
        title: 'Administration',
        to: '/administration',
        icon: administrationLogo,
    }
];

const workspaces : Array<NavItemProps> = [
    {
        title: 'Client contracts',
        to: '/clientContracts',
        icon: clientContractLogo,
    },
    {
        title: 'Supplier contract',
        to: '/supplierContracts',
        icon: clientContractLogo,
    },
    {
        title: 'Corporate',
        to: '/corporate',
        icon: corporateLogo,
    },
    {
        title: 'Group norms',
        to: '/groupNorms',
        icon: groupNormsLogo,
    },
    {
        title: 'Real estate contracts',
        to: '/realestateContracts',
        icon: clientContractLogo,
    }
];

const accounts : Array<NavItemProps> = [
    {
        title: 'Privacy',
        to: '/privacy',
        icon: privacyIcon,
    },
    {
        title: 'Profile',
        to: '/profile',
        icon: settingsIcon,
    }
]

interface NavItemProps {
    title: string,
    to: string,
    icon: string,
}

const NavElement: FC<NavItemProps> = ({icon, to, title, ...props}) => {
    return (
        <NavItem to={to}>
            <NavItemIcon src={icon} alt={title} />
            <NavItemText>
                {props.children == null ? title : props.children}
            </NavItemText>
        </NavItem>
    );
}

const Navigation: FC = (props) => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
    const [filterText, setFilterText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setFilterText(text);
    }
    
    return (
        <MainWrapper ref={wrapperRef} >
            <Wrapper onClick={toggleDropdown}>
                <MenuLogo src={houseLogo} />
                <Menu>
                    <MenuItem>Home</MenuItem>
                </Menu>
                <DropdownButton>
                    <img src={dropdownArrow} alt="Dropdown menu icon" />
                </DropdownButton>
            </Wrapper>
            {dropdownOpen &&
            <Dropdown>
                <Filter type="text" placeholder="Filter..." value={filterText} onChange={inputHandler} autoFocus />
                <Container>
                    <SectionTitle>Platform</SectionTitle>
                    <Nav>
                        {
                            platforms.map((item) => (
                                item.title.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()) &&
                                <NavElement to={item.to} title={item.title} icon={item.icon} key={item.to} />
                            ))
                        }
                    </Nav>

                    <SectionTitle>Workspaces</SectionTitle>
                    <Nav>
                        {
                            workspaces.map(item => (
                                item.title.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()) &&
                                <NavElement to={item.to} title={item.title} icon={item.icon} key={item.to} />
                            ))
                        }
                    </Nav>
                </Container>
                <AccountSection>
                    <SectionTitle>Account</SectionTitle>
                    <Nav>
                        <NavElement to="/profile" icon={avatarLogo} title="Bartosz Chowaniak">
                            <p>Bartosz Chowaniak</p>
                            <SeeProfile>See profile</SeeProfile>
                        </NavElement>
                        {
                            accounts.map(item => (
                                item.title.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()) &&
                                <NavElement to={item.to} icon={item.icon} title={item.title} key={item.to} />
                            ))
                        }
                    </Nav>
                </AccountSection>
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