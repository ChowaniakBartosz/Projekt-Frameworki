import { ChangeEvent, Component, MouseEvent } from 'react'
import styled from 'styled-components';
import { FlexRow, SectionTitle } from 'styledHelpers/Components';

// Assets
import FilterIcon from 'assets/icons/search.png'
import DropdownArrow from 'assets/icons/arrow-down.svg'
import { Colors } from 'styledHelpers/Colors';
import axios from 'axios';

// Components
import Card from 'components/MainContent/ResumeYourWork/Resume'

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
`;

const FilterInput = styled.input`
    margin: 0;
    padding: 0.5em;
    border: ${Colors.PrimaryBackground} solid 1px;
    background-color: ${Colors.White};
    border-radius: 3px;
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const FollowedButton = styled.div`
    display: flex;
    color: ${Colors.BadgeBackground};
    align-items: center;
    justify-content: center;
    gap: 0.5em;
`;

const RightWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
`;

const Container = styled.section`
    display: flex;
    flex-direction: column;
`;

interface IComments {
    comments : Array<IComment>,
    filterPattern : string
}

interface IComment {
    postId: number;
    id: number;
    name: string,
    email: string,
    body: string
}

export class ResumeYourWork extends Component {
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

    filterButtonHandle(e: ChangeEvent<HTMLInputElement>) : void {
        e.preventDefault();

        if (e.target != null) {
            this.setState({
                filterPattern: e.target.value
            });
        }
    }

    render() {
        return (
            <Wrapper>
                <TitleWrapper>
                    <SectionTitle>Resume your work</SectionTitle>
                    <RightWrapper>
                        <FilterInput type="text" placeholder="Filter resumes" onChange={this.filterButtonHandle.bind(this)}/>
                        <FollowedButton>
                            <span>All items</span>
                            <img src={DropdownArrow} alt="Dropdown" />
                        </FollowedButton>
                    </RightWrapper>
                </TitleWrapper>

                <Container>
                    {
                        this.state.comments.map((item: IComment) => (

                            item.name.toLocaleLowerCase().includes(this.state.filterPattern.toLocaleLowerCase()) &&
                            <Card title={item.name} content={item.body} />
                        ))
                    }
                    {/* <ReactPaginate pageCount={500} pageRangeDisplayed={100} marginPagesDisplayed={10} /> */}
                </Container>
            </Wrapper>
        )
    }
}

export default ResumeYourWork