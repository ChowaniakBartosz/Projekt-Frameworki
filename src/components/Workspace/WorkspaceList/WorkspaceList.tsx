import { FC } from 'react'

import styled from 'styled-components'
import { Colors } from 'styledHelpers/Colors';

import WorkspaceListItem from './WorkspaceListItem/WorkspaceListItem'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    gap: 1em;
`;

const Bar = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
`;

const Title = styled.h2`
    font-size: 1.4em;
    flex-grow: 1;
`;

const Search = styled.input`
    padding: 0.4em 0.5em;
    border: 1px solid silver;
    border-radius: 3px;
`;

const FilterButton = styled.ul`
    box-sizing: border-box;
    border: 2px solid rgb(75, 13, 245);
    border-radius: 3px;
    padding: 0.3em 0.5em;
    color: rgb(75, 13, 245);
`;

const Tag = styled.span`
    padding: 0.3em 0.5em;
    background: #e5e5e5;
    border-radius: 5px;
    font-weight: 700;
    color: silver;
    font-size: 0.9em;
`;

const WorkspaceList: FC = () => {
    return (
        <Wrapper>
            <Bar>
                <Title>Latest updates</Title>
                <Search placeholder="Filter..."></Search>
                <FilterButton>
                    <li>Followed</li>
                    {/* <li>All</li> */}
                </FilterButton>
            </Bar>
            <Bar>
                <Tag>ALL</Tag>
                <Tag>SAS</Tag>
                <Tag>SARL</Tag>
                <Tag>Secondary business</Tag>
                <Tag>Communities</Tag>
                <Tag>POA</Tag>
                <Tag>Survey</Tag>
                <Tag>...</Tag>
            </Bar>
            <WorkspaceListItem />
            <WorkspaceListItem />
            <WorkspaceListItem />
            <WorkspaceListItem />
            <WorkspaceListItem />
            <WorkspaceListItem />
        </Wrapper>
    )
}

export default WorkspaceList