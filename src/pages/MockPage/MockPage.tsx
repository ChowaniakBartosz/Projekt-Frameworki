import { FC } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 1 100%;
    align-items: center;
    color: silver;
    margin-top: 100px;

    & h2 {
        font-size: 200px;
        font-weight: bold;
    }

    & p {
        font-size: 24px;
    }
`;

const MockPage: FC = () => {
    return (
        <Wrapper>
            <h2>404</h2>
            <p>This page doesn't exist...</p>
        </Wrapper>
    )
}

export default MockPage;