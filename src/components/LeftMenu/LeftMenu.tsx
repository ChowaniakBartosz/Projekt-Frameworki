import { FC } from 'react';
import styled from 'styled-components';

// Components
import Profile from './Profile/Profile';
import LeftMenuList from './LeftMenuList/LeftMenuList'
// Interfaces
import {ILeftMenuListItem} from './LeftMenuList/LeftMenuListItem/LeftMenuListItem'

// Assets
import publicationIcon from 'assets/icons/publications.svg'
import ekosystemIcon from 'assets/icons/ecosystem.svg'
import entitiesIcon from 'assets/icons/entities.svg'


const Wrapper = styled.aside`
    display: flex;
    flex-direction: column;
    flex: 0 0 300px;
    gap: 1em;
`;

const LeftMenu: FC = () => {
    const menuItems : Array<ILeftMenuListItem> = [
        {
            text: 'Publications',
            path: '/publications',
            icon: publicationIcon,
        },
        {
            text: 'Ecosystem',
            path: '/ecosystem',
            icon: ekosystemIcon,
        },
        {
            text: 'Entities',
            path: '/entities',
            icon: entitiesIcon,
        }
    ];

    return (
        <Wrapper>
            <Profile />
            <LeftMenuList listItems={menuItems} />
        </Wrapper>
    );
} 

export default LeftMenu;