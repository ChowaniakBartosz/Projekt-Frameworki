import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled helpers
import { Colors } from 'styledHelpers/Colors';
import { Center } from 'styledHelpers/Components'

const Badge = styled.p`
    background-color: ${Colors.BadgeBackground};
    color: ${Colors.White};
    text-align: center;
    font-size: 10px;
    border-radius: 12px;
    padding: 3px 8px;
    position: absolute;
    top: 0;
    right: -6px;
`;

const Wrapper = styled(Link)`
    background-color: ${Colors.PrimaryBackground};
    width: 24px;
    height: 24px;
    padding: .6em;
    border-radius: 50%;
    position: relative;
    display: flex;
`;

interface IMenuItem {
    to: string,
    src: string,
    alt: string,
    count?: number
}

const MenuItem: FC<IMenuItem> = ({to, src, alt, count}) => {
    return (
        <Wrapper to={to}>
            <Center>
                <img src={src} alt={alt} />
            </Center>
            {count &&
                <Badge>3</Badge>
            }
        </Wrapper>
    )
}

export default MenuItem
