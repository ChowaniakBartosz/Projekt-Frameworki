import React, { FC } from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

// Modules
import Profile from '../Profile/Profile';

// Assets
import publicationIcon from '../../assets/icons/publications.svg'
import ekosystemIcon from '../../assets/icons/ecosystem.svg'
import entitiesIcon from '../../assets/icons/entities.svg'
import IMenuItem from '../../interfaces/IMenuItem';


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
    width: 32px;
    color: ${Colors.PrimaryText};
`;

const MenuText = styled.p`
    padding: 1em;
    padding-left: 0px;
    font-size: 1.2em;
    color: ${Colors.PrimaryText};
`;

const Item: FC<IMenuItem> = (props) => {
    return (
        <MenuItem>
            <MenuIcon src={props.icon} />
            <MenuText>{props.text}</MenuText>
        </MenuItem>
    );
}

const LeftMenu: FC = () => {
    return (
        <Wrapper>
            <Profile />

            <Menu>
                <Item icon={publicationIcon} text="Publications" />
                <Item icon={ekosystemIcon} text="Ecosystem" />
                <Item icon={entitiesIcon} text="Entities" />
            </Menu>
        </Wrapper>
    );
} 

export default LeftMenu;