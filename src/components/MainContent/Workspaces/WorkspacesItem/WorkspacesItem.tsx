import React, { FC } from 'react'
import styled from 'styled-components'
import {Colors} from 'styledHelpers/Colors'

import ContractImage from 'assets/contract.jpg'
import Icon from 'assets/icons/ecosystem.svg';


const Wrapper = styled.div`
    margin: .4em;
    border-radius: 6px;
    position: relative;
    background-color: ${Colors.White};
    width: 16em;
    height: 12em;
    box-shadow: 0px 3px 3px ${Colors.Silver};
    display: flex;
    flex-direction: column;
`;

const Image = styled.div`
    width: 100%;
    height: 40%;
    background-image: url(${ContractImage});
    background-size: cover;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    z-index: 1;
`;

const Content = styled.div`
    flex-grow: 2;
    padding: .5em;
    position: relative;
`;

const CardIconContainer = styled.div`
    display: flex;
    z-index: 2;
    padding: 1em;
    background-color: ${Colors.White};
    box-shadow: 0px 3px 3px ${Colors.Silver};
    border-radius: 3px;
    position: absolute;
    top: -1.5em;
    width: 3em;
    height: 3em;
`;

const CardIcon = styled.img`
    opacity: 0.3;
`;

const Title = styled.h2`
    color: ${Colors.PrimaryText};
    font-size: 1.2em;
    margin-left: 4.6em;
`;

const LastUpdate = styled.span`
    font-size: .8em;
    color: ${Colors.Gray};
    margin: .5em;
`;

export interface IWorkspacesItem {
    lastUpdate : string,
    title : string,
    icon : string
}

export const WorkspacesItem: FC<IWorkspacesItem> = ({title, icon, lastUpdate}) => {
    return (
        <Wrapper>
            <Image />
            <Content>
                <CardIconContainer>
                    <CardIcon src={icon} alt="icon" />
                </CardIconContainer>
                <Title>{title}</Title>
            </Content>
            <LastUpdate>Last update {lastUpdate} days ago</LastUpdate>
        </Wrapper>
    );
} 