import React, { FC } from 'react';
import styled from 'styled-components';

import TopBar from '../TopBar/TopBar';
import LeftMenu from '../LeftMenu/LeftMenu';
import Footer from '../Footer/Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #efefef;
  font-family: Arial, Helvetica, sans-serif;
`;

const ContainerWrapper = styled.div`
  flex: 1 0 auto;
`;

const Container = styled.div`
  padding: 1.5em 2em;
  display: flex;
`;

const Content = styled.main`
  flex-grow: 3;
`;

const MainPage: FC = () => {
  return (
      <Wrapper>
        <TopBar />
        <ContainerWrapper>
          <Container>
            <LeftMenu />
            <Content>
              <h1>Content</h1>
            </Content>
          </Container>
        </ContainerWrapper>
        {/* <Footer /> */}
      </Wrapper>
    );
}

export default MainPage;
