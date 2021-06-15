import { FC } from 'react'
import styled from 'styled-components'
import {Colors} from 'styledHelpers/Colors'

import ResumeButton from './ResumeButton'
import logo from 'assets/icons/network.svg'
import corporateLogo from 'assets/icons/entities.svg'

const Container = styled.div`
    background-color: ${Colors.White};
    padding: .5em 1em;
    margin-top: .8em;
    box-shadow: 0px 3px 3px ${Colors.Silver};
    border-radius: 3px;
    position: relative;
`;

const Title = styled.h3`
    font-size: 1.2em;
    color: ${Colors.BadgeBackground};
`;

const Content = styled.p`
    margin-top: .8em;
    color: ${Colors.Gray};
`;

const Footer = styled.div`
    padding-top: .6em;
    display: flex;
`;

interface CardProps {
    title : string,
    content? : string;
}
const Card: FC<CardProps> = (props) => {
    return (
        <Container>
            <Title>{ props.title }</Title>
            <Content>
                { props.content != null ? props.content : props.children }
            </Content>
            <Footer>
                <ResumeButton icon={logo} text="Company" />
                <ResumeButton icon={corporateLogo} text="Corporate" />
                <ResumeButton text="Updated 1 day ago by Unknown User" />
            </Footer>
        </Container>
    )
}
export default Card; 