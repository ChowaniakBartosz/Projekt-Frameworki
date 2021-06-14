import {FC} from 'react';
import styled from 'styled-components';

// Styled Helpers
import {Colors} from 'styledHelpers/Colors';
import {FlexRow} from 'styledHelpers/Components';

// Components
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import SearchBar from './SearchBar/SearchBar';
import Menu from './Menu/Menu';

const Wrapper = styled.header`
    background-color: ${Colors.White};
    box-shadow: 0px 0px 15px -5px ${Colors.Silver};
    z-index: 999;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-basis: 100%;
    padding: .3em 2em;
    gap: 1em;
`;

const LeftWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 2em;
`;

const RightWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const TopBar: FC = () => {
	return (
		<Wrapper>
            <FlexRow>
                <Container>
                    <LeftWrapper>
                        <Logo />
                        <Navigation/>
                    </LeftWrapper>
                    <SearchBar />
                    <RightWrapper>
                        <Menu />
                    </RightWrapper>
                </Container>
            </FlexRow>
		</Wrapper>
	);
} 

export default TopBar;