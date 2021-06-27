import { FC } from 'react'

import styled from 'styled-components'
import { Colors } from 'styledHelpers/Colors';

import backgroundImage from 'assets/office.jpg'; 

import Icon from 'assets/icons/ecosystem.svg';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 6px;
    box-shadow: 0px 3px 6px ${Colors.Silver};
`;

const Image = styled.div`
    display: flex;
    height: 200px;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`;

const Content = styled.div`
    display: flex;
    padding: 1em;
    gap: 1em;
`;

const ContentIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
    height: 100px;
`;

const ContentText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

const ContentTitle = styled.h2`
    display: flex;
    font-weight: bold;
`;

const ContentDescription = styled.p`
    display: flex;
    color: gray;
`;

const WorkspaceHeading: FC = () => {
    return (
        <Wrapper>
            <Image />
            <Content>
                <ContentIcon>
                    <img src={Icon} alt="icon" height="70" />
                </ContentIcon>
                <ContentText>
                    <ContentTitle>Corporate holdings</ContentTitle>
                    <ContentDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, id laudantium non sed quam ullam dolorum ea quia esse excepturi sit quis recusandae voluptatum adipisci quae cum cumque voluptates rem!</ContentDescription>
                </ContentText>
            </Content>
        </Wrapper>
    )
}

export default WorkspaceHeading