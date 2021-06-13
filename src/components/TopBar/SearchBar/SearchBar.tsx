import React, { FC } from 'react'
import styled from 'styled-components'
import {Colors} from '../../../styledHelpers/Colors';

// Assets
import searchLogo from '../../../assets/icons/search.svg';

const Wrapper = styled.form`
    display: flex;
    flex: 1 1 auto;
    position: relative;
    align-items: center;
    max-width: 500px;
`;

const Input = styled.input`
    color: ${Colors.SearchText};
    border: ${Colors.PrimaryBackground} solid 1px;
    width: 100%;
    border-radius: 6px;
    padding: 8px 4px;
    margin: 0;
    text-align: center;
`;

const SearchButton = styled.button`
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-content: center;
    position: absolute;
    right: 0.2em;
`;

const SearchBar: FC = () => {
    return (
        <Wrapper>
            <Input placeholder="Search Legalcluster" />
            <SearchButton>
                <img src={searchLogo} alt="Search icon" />
            </SearchButton>
        </Wrapper>
    );
}

export default SearchBar;