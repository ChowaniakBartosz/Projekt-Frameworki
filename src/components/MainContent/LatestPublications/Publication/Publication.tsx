import { FC } from 'react'
import styled from 'styled-components'

// Assets
import {Colors} from 'styledHelpers/Colors'
import work from 'assets/work.jpg'

const Wrapper = styled.li`
    display: flex;
    gap: 1em;
`;

const Title = styled.h3`
    font-weight: 700;
    margin-bottom: 0.2em;
    
    &:first-letter {
        text-transform: capitalize;
    }
`;

const Body = styled.p`
    margin-bottom: 0.5em;
    
    &:first-letter {
        text-transform: capitalize;
    }
`;

const Thumbnail = styled.div`
    width: 64px;
    height: 64px;
    background-image: url(${work});
    background-size: cover;
    flex-shrink: 0;
`;

const Content = styled.div`
    color: ${Colors.PrimaryText};
    display: flex;
    flex-direction: column;
`;

const InformationContainer = styled.div`
    justify-self: flex-end;
    color: ${Colors.Gray};
    font-size: .8em;
`;

interface IPublication {
    title: string,
    text: string,
    // image: string,
    date: string,
}

const Publication: FC<IPublication> = ({title, text, date, ...props}) => {
    return (
        <Wrapper>
            <Thumbnail />
            <Content>
                <Title>
                    {title}
                </Title>
                <Body>
                    {text}
                </Body>
                <InformationContainer>
                    {date}
                </InformationContainer>
            </Content>
        </Wrapper>
    );
} 

export default Publication;