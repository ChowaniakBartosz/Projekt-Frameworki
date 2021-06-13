import React, { FC } from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

// Routing
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

// Components
import TopBar from '../TopBar/TopBar';
import LeftMenu from '../LeftMenu/LeftMenu';
import Footer from '../Footer/Footer';

// Pages
import PublicationsPage from '../PublicationsPage/PublicationsPage';
import HomePage from '../HomePage/HomePage';
import MockPage from '../MockPage/MockPage';
import ProfilePage from '../ProfilePage/ProfilePage';


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
    <Router>
      <Wrapper>
        <TopBar />
        <ContainerWrapper>
          <Container>
            <LeftMenu />
            <Switch>
              <Content>
                <Route exact path="/profile">
                  <ProfilePage />
                </Route>
                <Route exact path="/realestateContracts">
                  <MockPage />
                </Route>
                <Route exact path="/groupNorms">
                  <MockPage />
                </Route>
                <Route exact path="/corporate">
                  <MockPage />
                </Route>
                <Route exact path="/supplierContracts">
                  <MockPage />
                </Route>
                <Route exact path="/clientContracts">
                  <MockPage />
                </Route>
                <Route exact path="/administration">
                  <MockPage />
                </Route>
                <Route exact path="/entities">
                  <MockPage />
                </Route>
                <Route exact path="/people">
                  <MockPage />
                </Route>
                <Route exact path="/ecosystem">
                  <MockPage />
                </Route>
                <Route exact path="/publications">
                  <PublicationsPage />
                </Route>
                <Route exact path="/">
                  <HomePage />
                </Route>
              </Content>
            </Switch>
          </Container>
        </ContainerWrapper>
        {/* <Footer /> */}
      </Wrapper>
    </Router>
    );
}

export default MainPage;
