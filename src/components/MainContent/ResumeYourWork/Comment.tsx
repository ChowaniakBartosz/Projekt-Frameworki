import { FC } from 'react'
import styled from 'styled-components'
import {Colors} from 'styledHelpers/Colors'

import ResumeButton from './ResumeButton'
import logo from 'assets/icons/network.svg'
import corporateLogo from 'assets/icons/entities.svg'

const Wrapper = styled.li`
    background-color: ${Colors.White};
    padding: .5em 1em;
    box-shadow: 0px 3px 3px ${Colors.Silver};
    border-radius: 3px;
`;

const Title = styled.h3`
    font-size: 1.2em;
    color: ${Colors.BadgeBackground};

    &:first-letter {
        text-transform: capitalize;
    }
`;

const Content = styled.p`
    margin-top: .8em;
    color: ${Colors.Gray};

    &:first-letter {
        text-transform: capitalize;
    }
`;

const Footer = styled.div`
    padding-top: .6em;
    display: flex;
`;

interface CardProps {
    title : string,
    content? : string;
}
const Card: FC<CardProps> = ({title, content, ...props}) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Content>
                { content != null ? content : props.children }
            </Content>
            <Footer>
                <ResumeButton icon={logo} text="Company" />
                <ResumeButton icon={corporateLogo} text="Corporate" />
                <ResumeButton text="Updated 1 day ago by Unknown User" />
            </Footer>
        </Wrapper>
    )
}
export default Card; 