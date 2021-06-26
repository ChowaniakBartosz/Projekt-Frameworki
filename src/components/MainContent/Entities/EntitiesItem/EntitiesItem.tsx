import { FC } from 'react'
import styled from 'styled-components';
import { Colors } from 'styledHelpers/Colors';

import EntityImage from 'assets/office.jpg';

const Wrapper = styled.div`
    display: flex;
    width: 24.5%;
    height: 100px;
    border-radius: 6px;
    box-shadow: 0px 3px 6px ${Colors.Silver};
`;

const Image = styled.div`
    display: flex;
    aspect-ratio: 1;
    background-image: url(${EntityImage});
    background-size: cover;
    background-position: center;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5em;
    gap: 0.5em;
`;

const EntityTitle = styled.h3`
    font-weight: bold;
`;

const EntityDecription = styled.p`

`;

const EntitiesItem: FC = () => {
    return (
        <Wrapper>
            <Image />
            <Content>
                <EntityTitle>Entity title</EntityTitle>
                <EntityDecription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatem beatae quaerat minima.
                </EntityDecription>
            </Content>
        </Wrapper>
    )
}

export default EntitiesItem