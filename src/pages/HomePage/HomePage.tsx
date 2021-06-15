import React, { Component, FC, ChangeEvent, MouseEvent } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import {Colors} from 'styledHelpers/Colors'
import {FlexRow, SectionTitle} from 'styledHelpers/Components'

// Components
import Publications from 'components/MainContent/LatestPublications/LatestPublications';
import {Workspaces} from 'components/MainContent/Workspaces/Workspaces'
import ResumeYourWork from 'components/MainContent/ResumeYourWork/ResumeYourWork'

interface IHomePageProps {
}

class HomePage extends Component<IHomePageProps> {
    constructor(props : IHomePageProps) {
        super(props);
    }

    render() {
        return (
            <>
                <Publications />
                <Workspaces />
                <ResumeYourWork />
            </>
        );
    }
}

export default HomePage;