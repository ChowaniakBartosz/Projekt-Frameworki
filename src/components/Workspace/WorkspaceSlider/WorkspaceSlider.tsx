import { FC } from 'react'

import styled from 'styled-components'
import { Colors } from 'styledHelpers/Colors';

import WorkspaceSliderItem from './WorkspaceSliderItem/WorkspaceSliderItem';

const Wrapper = styled.div`
    display: flex;
    gap: 1em;
`;

const WorkspaceSlider: FC = () => {
    return (
        <Wrapper>
            <WorkspaceSliderItem />
            <WorkspaceSliderItem />
            <WorkspaceSliderItem />
        </Wrapper>
    )
}

export default WorkspaceSlider