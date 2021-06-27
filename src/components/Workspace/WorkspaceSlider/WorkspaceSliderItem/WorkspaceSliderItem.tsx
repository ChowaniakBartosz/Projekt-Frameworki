import {FC} from 'react'
import styled from 'styled-components';
import { Colors } from 'styledHelpers/Colors';

import Icon from 'assets/icons/ecosystem.svg';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 1 100%;
    background: white;
    border-radius: 6px;
    box-shadow: 0px 3px 6px ${Colors.Silver};
    min-height: 100px;
    padding: 1em;
    gap: 0.8em;
    background-image: url(${Icon});
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: right top;
`;

const ContentIcon = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const ContentTitle = styled.h2`
    display: flex;
    font-weight: bold;
`;

const ContentDescription = styled.p`
    display: flex;
    color: gray;
    line-height: 1.5em;
`;

const WorkspacePage: FC = () => {
    return (
        <Wrapper>
            <ContentIcon>
                <img src={Icon} alt="icon" height="32" />
            </ContentIcon>
            <ContentTitle>Title</ContentTitle>
            <ContentDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste alias, in voluptas magni corporis illo accusantium ex fugit, quis dolorum totam doloremque necessitatibus officiis obcaecati. Eligendi nisi magni ullam recusandae.
            </ContentDescription>
        </Wrapper>
    )
}

export default WorkspacePage;