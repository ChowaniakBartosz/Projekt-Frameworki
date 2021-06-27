import {FC} from 'react'
import styled from 'styled-components';

import WorkspaceHeading from 'components/Workspace/WorkspaceHeading/WorkspaceHeading';
import WorkspaceSlider from 'components/Workspace/WorkspaceSlider/WorkspaceSlider';
import WorkspaceList from 'components/Workspace/WorkspaceList/WorkspaceList';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 1 100%;
    gap: 3em;
`;

const WorkspacePage: FC = () => {
    return (
        <Wrapper>
            <WorkspaceHeading />
            <WorkspaceSlider />
            <WorkspaceList />
        </Wrapper>
    )
}

export default WorkspacePage;