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
    padding-bottom: 10em;
`;

const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1em;
    margin-bottom: 0.5em;
`;

const FilterWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const FilterInput = styled.input`
    margin: 0;
    padding: 0.5em;
    padding-right: 1.8em;
    border: ${Colors.PrimaryBackground} solid 1px;
    background-color: ${Colors.White};
    border-radius: 3px;
    width: 140px;
`;

const ClearFilterButton = styled.button`
    display: flex;
    align-items: center;
    width: 20px;
    height: 20px;
    padding: 0;
    margin: 0;
    opacity: 0.5;
    font-size: 1.2em;
    background: transparent;
    border: none;
    position: absolute;
    right: 0;

    &:hover {
        opacity: 1;
    }
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
    margin-bottom: 2em;
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
                        <FilterWrapper>
                            <FilterInput type="text" placeholder="Filter resumes..." value={this.state.filterComments} onChange={filterButtonHandle}/>
                            {this.state.filterComments !== '' &&
                                <ClearFilterButton
                                title="Clear filter"
                                onClick={() =>
                                    this.setState({
                                    filterComments: ''
                                })}>
                                    &#10006;
                                </ClearFilterButton>
                            }
                        </FilterWrapper>
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
