import { ChangeEvent, Component, MouseEvent } from 'react'
import styled from 'styled-components';
import { FlexRow, SectionTitle } from 'styledHelpers/Components';

// Pagination
import ReactPaginate from 'react-paginate'
import './styles/pagination.css'; // styling

// Assets
import FilterIcon from 'assets/icons/search.png'
import DropdownArrow from 'assets/icons/arrow-down.svg'
import { Colors } from 'styledHelpers/Colors';
import axios from 'axios';

// Components
import Card from 'components/MainContent/ResumeYourWork/Comment'

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

const FilterInput = styled.input`
    margin: 0;
    padding: 0.5em;
    border: ${Colors.PrimaryBackground} solid 1px;
    background-color: ${Colors.White};
    border-radius: 3px;
`;

const Heading = styled.div`
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

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
`;

interface IComments {
    comments : Array<IComment>,
    filterText : string
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
        filterComments: '',
        currentPage: 1
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

    
    
    render() {
        const filteredComments: never[] = this.state.comments
        .filter((item: IComment) => (
            item.name
            .toLocaleLowerCase()
            .includes(
                this.state.filterComments
                .toLowerCase()
        )));

        const filterButtonHandle = (e: ChangeEvent<HTMLInputElement>): void => {
            e.preventDefault();
    
            if (e.target != null) {
                this.setState({
                    filterComments: e.target.value
                });
            }
        }
    
        const changePage = (data: any): void => {
            this.setState({
                currentPage: (data.selected+1)
            });
        }
                
        return (
            <Wrapper>
                <Heading>
                    <SectionTitle>Resume your work</SectionTitle>
                    <RightWrapper>
                        <FilterInput type="text" placeholder="Filter resumes" onChange={filterButtonHandle.bind(this)}/>
                        <FollowedButton>
                            <span>All items</span>
                            <img src={DropdownArrow} alt="Dropdown" />
                        </FollowedButton>
                    </RightWrapper>
                </Heading>
                <List>
                    {
                        filteredComments.slice((this.state.currentPage-1)*10, (this.state.currentPage*10)).map((item: IComment) =>
                            <Card title={item.name} content={item.body} />
                            )
                    }
                </List>
                <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                breakLabel="..."
                breakClassName="break-me"
                pageCount={Math.ceil(filteredComments.length/10)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={changePage}
                containerClassName="pagination"
                activeClassName="active"
                />
            </Wrapper>
        )
    }
}

export default ResumeYourWork
