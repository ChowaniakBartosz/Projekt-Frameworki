import styled from 'styled-components';
import { Colors } from './Colors';

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const JustifyCenter = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`;

export const AlignCenter = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
`;

export const SectionTitle = styled.h2`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.4em;
    color: ${Colors.PrimaryText};
    margin: 0.5em 0;
`;