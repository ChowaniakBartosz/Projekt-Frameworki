import styled from 'styled-components';
import React, { FC, useEffect, useState } from 'react';

// Components
import Publication from './Publication/Publication';

// Assets
import {Colors} from 'styledHelpers/Colors';
import CityImage from 'assets/city.jpg';
import { SectionTitle } from 'styledHelpers/Components';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Wrapper = styled.section`
    display: flex;
    box-shadow: 0px 3px 6px ${Colors.Silver};
    border-radius: 6px;
`;

const BackgroundImage = styled.div`
    display: flex;
    background-image: url(${CityImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    flex-basis: 30%;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
`;

const BackgroundImageGradient = styled.div`
    display: flex;
    align-items: flex-end;
    height: 100%;
    background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, #575757 100%);   /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0)), color-stop(100%,#575757)); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,#575757 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top, rgba(255,255,255,0) 0%,#575757 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top, rgba(255,255,255,0) 0%,#575757 100%); /* IE10+ */
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,#575757 100%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#575757',GradientType=0 ); /* IE6-9 */
`;

const BackgroundImageCaption = styled.span`
    display: flex;
    color: ${Colors.White};
    font-size: 1.2em;
    flex-basis: 80%;
    position: relative;
    bottom: 1.5em;
    left: 1em;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 1em;
    background-color: ${Colors.White};
    gap: 1em;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
`;

const Content = styled.ul`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 1.2em;
`;

const Route = styled(Link)`
    justify-self: flex-end;
    margin-top: .6em;
    font-size: 1em;
    color: ${Colors.SecondaryText};
    text-decoration: none;

    &:hover {
        color: ${Colors.Silver};
    }
`;
//przeniesc
interface IPublication {
    userId: number,
    id: number,
    title: string,
    body: string,
}

const LatestPublications: FC = () => {
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            setPublications(response.data);
        })
        .catch(error => {
            console.log(error.data);
        })
    });

    return (
        <Wrapper>
            <BackgroundImage>
                <BackgroundImageGradient>
                    <BackgroundImageCaption>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </BackgroundImageCaption>
                </BackgroundImageGradient>
            </BackgroundImage>
            <Container>
                <SectionTitle>Latest publications</SectionTitle>
                <Content>
                    {
                    publications
                    .slice(0, 3)
                    .map((item: IPublication) => (
                        <Publication
                        title={item.title}
                        // image={CityImage}
                        text={item.body}
                        date="1 Styczeń 2021"
                        />
                    ))}
                </Content>
                <Route to="/publications">See more publications</Route>
            </Container>
        </Wrapper>
    );
} 

export default LatestPublications;