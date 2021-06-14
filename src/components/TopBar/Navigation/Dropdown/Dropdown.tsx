import styled from "styled-components";

// StyledHelpers
import { Colors } from "styledHelpers/Colors";

// Components
import NavigationSection from '../NavigationSection/NavigationSection';
import NavigationFilter from '../NavigationFilter/NavigationFilter';

// Navigation items
import NavigationItems from '../NavigationItems/NavigationItems'
import { useState } from "react";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 42px;
    background-color: ${Colors.White};
    width: 100%;
    border: ${Colors.Silver} solid 1px;
    border-top: 0;
    border-radius: 6px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
`;

const Dropdown = () => {
    // Filter state
    const [filterText, setFilterText] = useState<string>('');

    return (
        <Wrapper>
                <NavigationFilter value={filterText} setFilterText={setFilterText} />
                {NavigationItems.map(({title, items}) => (
                    <NavigationSection title={title} sectionItems={items} filterText={filterText}/>
                ))}
        </Wrapper>
    )
}

export default Dropdown
