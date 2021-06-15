import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from 'styledHelpers/Colors';

// Assets
import networkIcon from 'assets/icons/network.svg';
import publicationIcon from 'assets/icons/publications.svg';
import plusIcon from 'assets/icons/plus.svg';

// Components
import LeftMenuList from '../LeftMenuList/LeftMenuList'
import { ILeftMenuListItem } from '../LeftMenuList/LeftMenuListItem/LeftMenuListItem';
import ProfileSection from './ProfileSection/ProfileSection';

const Wrapper = styled.div`
    background-color: ${Colors.White};
    border-radius: 6px;
    box-shadow: 0px 3px 6px ${Colors.Silver};
`;

const Profile: FC = () => {
    const menuItems : Array<ILeftMenuListItem> = [
        {
            text: 'Your network',
            path: '/network',
            icon: networkIcon,
            buttonIcon: networkIcon,
        },
        {
            text: 'Your publications',
            path: '/publications',
            icon: publicationIcon,
            buttonIcon: plusIcon,
        }
    ];

    return (
        <Wrapper>
            <ProfileSection />
            <LeftMenuList listItems={menuItems} />
        </Wrapper>
    );
} 

export default Profile;