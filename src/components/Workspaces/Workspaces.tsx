import React, { FC } from 'react'
import styled from 'styled-components'
import {Colors} from '../../styledHelpers/Colors'
import WorkspaceCard from './WorkspaceCard/WorkspaceCard'

// Assets
import CardIcon from '../../assets/icons/entities2.svg'


const Title = styled.h2`
    color: ${Colors.PrimaryText};
    font-size: 1.4em;
    margin: 1em;
`;

const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-content: center;
    width: 100%;
    max-width: 100%;
`;

const Workspaces : React.FC = () => {
    return (
        <>
            <Title>Workspaces</Title>
            <Container>
                <WorkspaceCard icon={CardIcon} title="Client contract" lastUpdate="3" />
                <WorkspaceCard icon={CardIcon} title="Supplier contract" lastUpdate="2" />
                <WorkspaceCard icon={CardIcon} title="Corporate" lastUpdate="4" />
            </Container>
        </>
    );
} 

export default Workspaces;