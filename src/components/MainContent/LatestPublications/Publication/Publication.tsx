import React, { FC } from 'react'
import styled from 'styled-components'

// Assets
import CityImage from 'assets/office.jpg'
import {Colors} from 'styledHelpers/Colors'


const Wrapper = styled.div`
display: flex;
margin: .2em;
`;

const Image = styled.img`
    width: 64px;
    height: 64px;
`;

const Content = styled.div`
    padding: .4em;
    color: ${Colors.PrimaryText};
    display: flex;
    flex-direction: column;
`;

const InformationContainer = styled.div`
    justify-self: flex-end;
    color: ${Colors.Gray};
    margin-top: .6em;
    font-size: .8em;
`;

const Publication: FC = () => {
    return (
        <Wrapper>
            <Image src={CityImage} alt="City image" />
            <Content>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatum deleniti impedit, blanditiis corporis ad excepturi, </h3>
                <InformationContainer>
                    1 Styczeń 2021
                </InformationContainer>
            </Content>
        </Wrapper>
    );
} 

export default Publication;