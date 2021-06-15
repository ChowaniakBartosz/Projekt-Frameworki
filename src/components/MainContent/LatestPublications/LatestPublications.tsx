import styled from 'styled-components';
import React, { FC } from 'react';

// Components
import Publication from './Publication/Publication';

// Assets
import {Colors} from 'styledHelpers/Colors';
import CityImage from 'assets/city.jpg';
import { SectionTitle } from 'styledHelpers/Components';

const Wrapper = styled.section`
    background-color: ${Colors.White};
    box-shadow: 0px 3px 3px ${Colors.Silver};
    border-radius: 6px;
    width: 100%;
    position: relative;
    display: flex;
`;

const BrandImage = styled.div`
    background-image: url(${CityImage});
    background-repeat: no-repeat;
    align-self: flex-start;
    min-width: 300px;
    min-height: 300px;
    position: relative;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
`;

const BrandTitle = styled.h3`
    color: ${Colors.White};
    font-size: 1.2em;
    position: absolute;
    bottom: 2em;
    left: .4em;
`;

const Content = styled.div`
    align-self: flex-start;
    flex-grow: 2;
    padding: .8em;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 2;
`;

const MorePublication = styled.a`
    justify-self: flex-end;
    margin-top: .6em;
    font-size: 1em;
    color: ${Colors.SecondaryText};
`;

const LatestPublications: FC = () => {
    return (
        <Wrapper>
            <BrandImage>
                <BrandTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit.</BrandTitle>
            </BrandImage>

            <Content>
                <SectionTitle>Latest publications</SectionTitle>
                <Container>
                    <Publication />
                    <Publication />
                    <Publication />
                </Container>
                <MorePublication>See more publications</MorePublication>
            </Content>
        </Wrapper>
    );
} 

export default LatestPublications;