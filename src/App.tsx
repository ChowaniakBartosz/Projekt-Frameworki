import React, { FC } from 'react';
import {BrowserRouter as Router, Switch,	Route, Link} from "react-router-dom"; // Routing
import styled from 'styled-components';

// Styled Helpers
import {Colors} from 'styledHelpers/Colors';
import {FlexColumn, FlexRow} from 'styledHelpers/Components';

// Components
import TopBar from 'components/TopBar/TopBar';
import LeftMenu from 'components/LeftMenu/LeftMenu';
import Footer from 'components/Footer/Footer';

// Pages
import HomePage from 'pages/HomePage/HomePage';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import PublicationsPage from 'pages/PublicationsPage/PublicationsPage';
import MockPage from 'pages/MockPage/MockPage';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${Colors.Background};
`;

const Container = styled.div`
  display: flex;
  padding: 2em;
  gap: 1em;
`;

const Content = styled.main`
display: flex;
flex-basis: 100%;
`;

const App: FC = () => {
  return (
    <Router>
      <Wrapper>
        <FlexColumn>
          <TopBar />
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
                <Route exact path="/supplierContract">
                  <MockPage />
                </Route>
                <Route exact path="/clientContract">
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
          {/* <Footer /> */}
        </FlexColumn>
      </Wrapper>
    </Router>
    );
}

export default App;
