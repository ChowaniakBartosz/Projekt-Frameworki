import React from 'react'
import styled from 'styled-components';

// Styled helpers
import { Colors } from 'styledHelpers/Colors';

// Assets
import homeIcon from 'assets/icons/house.svg';
import commentsIcon from 'assets/icons/comments.svg';
import bellIcon from 'assets/icons/bell.svg';

// Components
import MenuItem from './MenuItem/MenuItem';

const Wrapper = styled.div`
    display: flex;
    gap: 0.5em;
`;

function Menu() {
    return (
        <Wrapper>
            <MenuItem to="/" src={homeIcon} alt="Home icon" />
            <MenuItem to="/comments" src={commentsIcon} alt="Comments icon" count={2} />
            <MenuItem to="/notifications" src={bellIcon} alt="Bell icon" count={3} />
        </Wrapper>
    )
}

export default Menu
