import React, { FC } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import {Colors} from 'styledHelpers/Colors';

// Modules
import Profile from './Profile/Profile';

// Assets
import publicationIcon from 'assets/icons/publications.svg'
import ekosystemIcon from 'assets/icons/ecosystem.svg'
import entitiesIcon from 'assets/icons/entities.svg'
import IMenuItem from 'interfaces/IMenuItem';
import IMenuInterface from 'interfaces/IMenuItem';


const Wrapper = styled.div`
    width: 300px;
`;

const Menu = styled.ul`
    padding: 1em;
`;

const MenuItem = styled.li`
    display: flex;
    justify-content: flex-start;
    align-content: center;
`;

const MenuIcon = styled.img`
    padding: 1em;
    width: 24px;
    color: ${Colors.PrimaryText};
`;

const MenuText = styled(Link)`
    padding: 1em;
    padding-left: 0px;
    font-size: 1em;
    color: ${Colors.PrimaryText};
    text-decoration: none;

    &:hover {
        color: ${Colors.Silver};
    }
`;

const Item: FC<IMenuItem> = ({text, to, icon, ...props}) => {
    return (
        <MenuItem>
            <MenuIcon src={icon} />
            <MenuText to={to}>{text}</MenuText>
        </MenuItem>
    );
}

const LeftMenu: FC = () => {
    const menuItems : Array<IMenuItem> = [
        {
            text: 'Publications',
            to: '/publications',
            icon: publicationIcon,
        },
        {
            text: 'Ecosystem',
            to: '/ecosystem',
            icon: ekosystemIcon,
        },
        {
            text: 'Entities',
            to: '/entities',
            icon: entitiesIcon,
        }
    ];

    return (
        <Wrapper>
            <Profile />

            <Menu>
                {
                    menuItems.map(item => (
                        <Item to={item.to} icon={item.icon} text={item.text} />
                    ))
                }
            </Menu>
        </Wrapper>
    );
} 

export default LeftMenu;