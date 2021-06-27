import { FC } from 'react'

import styled from 'styled-components'
import { Colors } from 'styledHelpers/Colors';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 6px;
    box-shadow: 0px 3px 6px ${Colors.Silver};
    gap: 0.7em;
    box-sizing: border-box;
    padding: 1em;
`;

const Title = styled.h2`
    display: flex;
    font-weight: bold;
    font-size: 1.1em;
    color: rgb(75, 13, 245);
`;

const Description = styled.p`
    display: flex;
    font-size: 0.9em;
    line-height: 1.2em;
    color: gray;
`;

const Metadata = styled.p`
    display: flex;
    font-size: 0.8em;

    & span {
        color: green;
        margin-right: 0.3em;
    }
`;

const WorkspaceListItem: FC = () => {
    return (
        <Wrapper>
            <Title>World company SAS</Title>
            <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro libero ea distinctio adipisci reprehenderit et voluptatum vitae eveniet iusto eaque quasi blanditiis deleniti, quod rerum? Error quod mollitia iure officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro libero ea distinctio adipisci reprehenderit et voluptatum vitae eveniet iusto eaque quasi blanditiis deleniti, quod rerum? Error quod mollitia iure officiis.
            </Description>
            <Metadata>
            <span>SAS</span> - Updated 3 days ago by John Doe
            </Metadata>
        </Wrapper>
    )
}

export default WorkspaceListItem