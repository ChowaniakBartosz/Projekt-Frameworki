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
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    z-index: 1;
`;

const CardIcon = styled.img`
    width: 3em;
    z-index: 2;
    padding: 1em;
    background-color: ${Colors.White};
    box-shadow: 0px 3px 3px ${Colors.Silver};
    border-radius: 3px;
    position: absolute;
    top: -2em;
`;

const Content = styled.div`
    flex-grow: 2;
    padding: .6em;
    position: relative;
`;

const Title = styled.h1`
    position: relative;
    left: 4.4em;
    color: ${Colors.PrimaryText};
    font-size: 1.2em;
`;

const UpdateInformation = styled.p`
    font-size: .8em;
    color: ${Colors.Gray};
    margin: .6em;
`;

export interface IWorkspacesItemProps {
    lastUpdate : string,
    title : string,
    icon : string
}

export const WorkspacesItem: FC<IWorkspacesItemProps> = ({title, icon, lastUpdate}) => {
    return (
        <Wrapper>
            <Image />
            <Content>
                <CardIcon src={icon} alt="icon" />
                <Title>{title}</Title>
            </Content>
            <UpdateInformation>Last update {lastUpdate} days ago</UpdateInformation>
        </Wrapper>
    );
} 