import { FC, useState } from "react";
import styled from "styled-components";

// StyledHelpers
import { Colors } from "styledHelpers/Colors";

// Components
import NavigationSection from '../NavigationSection/NavigationSection';
import NavigationFilter from '../NavigationFilter/NavigationFilter';

// Navigation items
import navigationItems from '../navigationItems/navigationItems'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 2.3em;
    background-color: ${Colors.White};
    flex-basis: 100%;

    border: ${Colors.Silver} solid 1px;
    border-top: 0;
    border-radius: 6px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
`;

const Dropdown = () => {
    // Filter state
    const [filterText, setFilterText] = useState<string>('');
    
    const handleFilterChange = (props: string) => {
        setFilterText(props)
    }

    return (
        <Wrapper>
                <NavigationFilter value={filterText} onChangeFn={handleFilterChange} />

                {/* List all sections */}
                {navigationItems.map(({title, items}) => (
                    <NavigationSection title={title} sectionItems={items} filterText={filterText}/> //>
                ))}
        </Wrapper>
    )
}

export default Dropdown
