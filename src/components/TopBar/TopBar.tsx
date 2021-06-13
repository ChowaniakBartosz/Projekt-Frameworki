import React, {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

// Assets
import logo from '../../assets/logo.png';
import bellIcon from '../../assets/icons/bell.svg';
import homeIcon from '../../assets/icons/house.svg';
import commentsIcon from '../../assets/icons/comments.svg';
import privacyIcon from '../../assets/icons/privacy.svg'
import peopleIcon from '../../assets/icons/people.svg'
import configIcon from '../../assets/icons/cog.svg'

// Components
import Navigation from './Navigation/Navigation';
import SearchBar from './SearchBar/SearchBar';
import { Link } from 'react-router-dom';


const Wrapper = styled.div`
    background-color: ${Colors.White};
    width: 100%;
    box-shadow: 0px 3px 24px ${Colors.Silver};
	z-index: 999;
    position: relative;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: .3em;
    padding-left: 2em;
    padding-right: 2em;
`;

const LeftSide = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
`;

const BrandLogo = styled.img`
    max-width: 36px;
`;

const RightSide = styled.div`
    justify-self: flex-end;
    display: flex;
    justify-content: flex-end;
    align-content: center;
`;

const MenuItem = styled.div`
    background-color: ${Colors.PrimaryBackground};
    min-width: 26px;
    min-height: 26px;
    margin: .2em;
    padding: .6em;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-content: center;
`;

const Badge = styled.p`
    background-color: ${Colors.BadgeBackground};
    color: ${Colors.White};
    text-align: center;
    font-size: 10px;
    border-radius: 12px;
    padding: 3px 8px;
    position: absolute;
    top: 0;
    right: -6px;
`;

const TopBar: FC = () => {
	return (
		<Wrapper>
            <Container>
                <LeftSide>
                    {/* Zrobić component logo */}
                    <Link to="/">
                        <BrandLogo src={logo}  alt="MyCompanyName" title="MyCompanyName" />
                    </Link>
                    <Navigation/>
                </LeftSide>
                <SearchBar />

                {/* Zrobić osobny komponent Menu czy coś */}
                <RightSide>
                    <MenuItem>
                        <img src={homeIcon} alt="Home icon" />
                    </MenuItem>

                    <MenuItem>
                        <img src={commentsIcon} alt="Comments icon" />
                        <Badge>3</Badge>
                    </MenuItem>

                    <MenuItem>
                        <img src={bellIcon} alt="Bell icon" />
                        <Badge>3</Badge>
                    </MenuItem>
                </RightSide>
            </Container>
		</Wrapper>
	);
} 

export default TopBar;