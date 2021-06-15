import { Component } from 'react'
import styled from 'styled-components'

// Components
import Publications from 'components/MainContent/LatestPublications/LatestPublications';
import {Workspaces} from 'components/MainContent/Workspaces/Workspaces'
import ResumeYourWork from 'components/MainContent/ResumeYourWork/ResumeYourWork'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 1 100%;
`;

interface IHomePageProps {
}

class HomePage extends Component<IHomePageProps> {
    constructor(props : IHomePageProps) {
        super(props);
    }

    render() {
        return (
            <Wrapper>
                <Publications />
                <Workspaces />
                <ResumeYourWork />
            </Wrapper>
        );
    }
}

export default HomePage;