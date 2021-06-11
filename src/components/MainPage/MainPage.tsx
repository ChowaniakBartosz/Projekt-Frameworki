import React, { FC } from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

// Components
import TopBar from '../TopBar/TopBar';
import LeftMenu from '../LeftMenu/LeftMenu';
import Publications from '../Publications/Publications';
import Workspaces from '../Workspaces/Workspaces';
import Footer from '../Footer/Footer';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${Colors.Background};
`;

const ContainerWrapper = styled.div`
  flex: 1 0 auto;
`;

const Container = styled.div`
  padding: 1.5em 2em;
  display: flex;
`;

const Content = styled.main`
  flex-grow: 2;
	margin: 0em 3em 1em 1em;
`;

const MainPage: FC = () => {
  return (
      <Wrapper>
        <TopBar />
        <ContainerWrapper>
          <Container>
            <LeftMenu />
            <Content>
              <Publications />
              <Workspaces />
            </Content>
          </Container>
        </ContainerWrapper>
        {/* <Footer /> */}
      </Wrapper>
    );
}

export default MainPage;
