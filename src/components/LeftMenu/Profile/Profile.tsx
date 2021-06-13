import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from 'styledHelpers/Colors';

// Assets
import avatar from 'assets/avatar.jpg';
import networkIcon from 'assets/icons/network.svg';
import publicationIcon from 'assets/icons/publications.svg';
import plusIcon from 'assets/icons/plus.svg';

import IMenuItem from 'interfaces/IMenuItem';

const Wrapper = styled.section`
    background-color: ${Colors.White};
    border-radius: 6px;
    box-shadow: 0px 3px 6px ${Colors.Silver};
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
`;

const Photo = styled.img`
    width: 40%;
    border-radius: 50%;
    align-self: center;
`;

const Title = styled(Link)`
    font-size: 1.3em;
    color: ${Colors.SecondaryText};
    text-align: center;
    padding: .6em;
    font-weight: bold;
    text-decoration: none;

    &:hover {
        color: ${Colors.PrimaryText};
    }
`;

const Subtitle = styled.p`
    text-align: center;
    color: gray;
    font-size: 0.8em;
`;

const Menu = styled.ul`
    border-top: ${Colors.PrimaryBackground} solid 1px;
    padding: 1em 2em;
`;

const MenuItem = styled.li`
    display: flex;
    justify-content: flex-start;
    align-content: center;
    flex-wrap: nowrap;
    margin-bottom: .8em;
`;

const MenuIcon = styled.img`
    width: 24px;
    align-self: flex-start;
    flex-grow: 0;
`;

const MenuText = styled.p`
    flex-grow: 1;
    font-size: 1em;
    padding-left: .5em;
    color: ${Colors.PrimaryText};
`;

const MenuAction = styled.a`
    align-self: flex-end;
    margin: 0;
    padding: 4px 8px;
    background-color: #fff;
    border: ${Colors.PrimaryText} solid 1px;
    border-radius: 3px;
    box-shadow: 0px 2px 3px ${Colors.Silver};
    display: flex;
    justify-content: center;
    align-content: center;
`;

const Item: FC<IMenuItem> = (props) => {
    return (
        <MenuItem>
            <MenuIcon src={props.icon} />
            <MenuText>{props.text}</MenuText>
            <MenuAction>
                <img src={props.buttonIcon} alt="Button icon" />
            </MenuAction>
        </MenuItem>
    );
}

const Profile: FC = () => {
    return (
        <Wrapper>
            <Container>
            <Photo src={avatar} alt="Profile picture" />
            <Title to="/profile">Bartosz Chowaniak</Title>
            <Subtitle>Job title - Company</Subtitle>
            </Container>

            <Menu>
                <Item to="/network" icon={networkIcon} 
                    text="Your network"
                    buttonIcon={networkIcon} />

                <Item to="/publications" icon={publicationIcon} 
                    text="Your publications"
                    buttonIcon={plusIcon} />
            </Menu>
        </Wrapper>
    );
} 

export default Profile;