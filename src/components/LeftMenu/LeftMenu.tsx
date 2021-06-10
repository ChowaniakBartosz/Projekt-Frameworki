import React, { FC } from 'react';
import styled from 'styled-components';

// Modules
import Profile from '../Profile/Profile';

// Assets
import publicationIcon from '../../assets/icons/publications.svg'
import ekosystemIcon from '../../assets/icons/ecosystem.svg'
import entitiesIcon from '../../assets/icons/entities.svg'


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
    color: #3f465e;
`;

const MenuText = styled.p`
    padding: 1em;
    padding-left: 0px;
    font-size: 1.2em;
    color: #3f465e;
`;

interface IProps {
    icon : string,
    text : string
}

const Item: FC<IProps> = (props) => {
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
                <Item icon={ekosystemIcon} text="Ekosystem" />
                <Item icon={entitiesIcon} text="Entities" />
            </Menu>
        </Wrapper>
    );
} 

export default LeftMenu;