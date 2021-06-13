import React, { Component, FC, ChangeEvent, MouseEvent } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import {Colors} from 'styledHelpers/Colors'
import {FlexRow} from 'styledHelpers/Components'

// Components
import Publications from 'components/MainContent/LatestPublications/LatestPublications';
import {Workspaces, Title} from 'components/MainContent/Workspaces/Workspaces'
import Card from 'components/MainContent/ResumeYourWork/Resume'

// Assets
import FilterIcon from 'assets/icons/search.png'
import DropdownArrow from 'assets/icons/arrow-down.svg'


const ResumesTitle = styled.div`
    display: flex;
    align-content: center;
    position: relative;
`;

const FilterWrapper = styled.form`
    justify-self: flex-end;
    align-content: center;
    position: relative;
    display: flex;
    height: 30px;
`;

const FilterInput = styled.input`
    margin: 0;
    padding: 0 0.5em;
    border: ${Colors.PrimaryBackground} solid 1px;
    background-color: ${Colors.White};
    border-radius: 3px;
`;

const FilterButton = styled.button`
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-content: center;
    position: absolute;
    right: 0;
`;

const FollowedButton = styled.div`
    align-self: center;
    color: ${Colors.BadgeBackground};
    display: flex;
    align-content: center;
    justify-content: center;
    position: relative;
    left: 1em;
    > img { margin: 6px; }
`;

const RightContainer = styled.div`
    position: absolute;
    right: 0;
    display: flex;
    align-self: center;
`;

const Container = styled.section`
    display: flex;
    flex-direction: column;
`;

interface IHomePageProps {
}

interface IPosts {
    comments : Array<IPost>,
    filterPattern : string
}

interface IPost {
    postId: number;
    id: number;
    name: string,
    email: string,
    body: string
}

class HomePage extends Component<IHomePageProps, IPosts> {
    constructor(props : IHomePageProps) {
        super(props);
    }

    state = {
        comments: [],
        filterPattern: ''
    }

    componentDidMount(): void {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                this.setState({
                    comments: response.data
                });
            })
            .catch(error => {
                console.log(error.data);
            })
    }

    filterButtonHandle(e: MouseEvent<HTMLButtonElement>) : void {
        e.preventDefault();

        const input : HTMLInputElement | null = document.querySelector('input[type="text"]');
        if (input != null) {
            this.setState({
                filterPattern: input.value
            });
        }
    }

    render() {
        return (
            <>
                <Publications />
                <Workspaces />

                <FlexRow>
                    <Title>Resume your work</Title>
                    <RightContainer>
                        <FilterWrapper>
                            <FilterInput type="text" placeholder="Filter resumes" />
                            <FilterButton onClick={this.filterButtonHandle.bind(this)}>
                                <img src={FilterIcon} alt="Filter" />
                            </FilterButton>
                        </FilterWrapper>
                        <FollowedButton>
                            <span>All items</span>
                            <img src={DropdownArrow} alt="Dropdown" />
                        </FollowedButton>
                    </RightContainer>
                </FlexRow>

                <Container>
                    {
                        this.state.comments.map((item: IPost) => (

                            item.name.toLocaleLowerCase().includes(this.state.filterPattern.toLocaleLowerCase()) &&
                            <Card title={item.name} content={item.body} />
                        ))
                    }
                    {/* <ReactPaginate pageCount={500} pageRangeDisplayed={100} marginPagesDisplayed={10} /> */}
                </Container>
            </>
        );
    }
}

export default HomePage;