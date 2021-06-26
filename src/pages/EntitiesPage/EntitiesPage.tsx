import { FC } from 'react'
import styled from 'styled-components'
import { Colors } from 'styledHelpers/Colors';

import Entities from 'components/MainContent/Entities/Entities'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 1 100%;
`;

const EntitiesPage: FC = () => {
    return (
        <Wrapper>
            <Entities />
        </Wrapper>
    );
}

export default EntitiesPage;