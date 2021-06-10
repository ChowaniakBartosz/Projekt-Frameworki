import React, { FC } from 'react';
import styled from 'styled-components';

// Assets
import avatar from '../../assets/avatar.jpg';
import networkIcon from '../../assets/icons/network.svg';
import publicationIcon from '../../assets/icons/publications.svg';
import plusIcon from '../../assets/icons/plus.svg';

const Wrapper = styled.section`
    background-color: white;
    border-radius: 6px;
    box-shadow: 0px 3px 6px silver;
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

const Title = styled.h3`
    font-size: 1.4em;
    color: #5f6fb5;
    text-align: center;
    padding: .6em;
    font-weight: bold;
`;

const Subtitle = styled.p`
    text-align: center;
    color: gray;
    font-size: 1em;
`;

const Menu = styled.ul`
    border-top: #e8e8e8 solid 1px;
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
    width: 26px;
    align-self: flex-start;
    flex-grow: 0;
`;

const MenuText = styled.p`
    flex-grow: 1;
    font-size: 1.2em;
    padding-left: .5em;
    color: #3f465e;
`;

const MenuAction = styled.a`
    align-self: flex-end;
    margin: 0;
    padding: 4px 8px;
    background-color: #fff;
    border: #3f465e solid 1px;
    border-radius: 3px;
    box-shadow: 0px 2px 3px silver;
    display: flex;
    justify-content: center;
    align-content: center;
`;

interface IProps {
    text : string,
    icon : string,
    buttonIcon : string
}

const Item: FC<IProps> = (props) => {
    return (
        <MenuItem>
            <MenuIcon src={props.icon} />
            <MenuText>{props.text}</MenuText>
            <MenuAction>
                <img src={props.buttonIcon} />
            </MenuAction>
        </MenuItem>
    );
}

const Profile: FC = () => {
    return (
        <Wrapper>
            <Container>
            <Photo src={avatar} />
            <Title>Bartosz Chowaniak</Title>
            <Subtitle>Job title - Company</Subtitle>
            </Container>

            <Menu>
                <Item icon={networkIcon} 
                    text="Your network"
                    buttonIcon={networkIcon} />

                <Item icon={publicationIcon} 
                    text="Your publications"
                    buttonIcon={plusIcon} />
            </Menu>
        </Wrapper>
    );
} 

export default Profile;