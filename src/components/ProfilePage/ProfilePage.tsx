import React, { FC } from 'react'
import styled from 'styled-components'
import {Colors} from '../../styledHelpers/Colors'


// import icons
import messageIcon from '../../assets/icons/house.svg'
import commentsIcon from '../../assets/icons/comments.svg'
import editIcon from '../../assets/icons/plus.svg'


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${Colors.White};
    padding: 1em;
    box-shadow: 0px 3px 3px ${Colors.Silver};
    border-radius: 6px;
    min-height: 500px;
`;

const ProfilePage: FC = () => {
    return (
        <Wrapper>
            <h2>Profile here</h2>
        </Wrapper>
    )
}

export default ProfilePage;