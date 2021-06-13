import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

// Assets
import logo from 'assets/logo.png';

const Image = styled.img`
    max-width: 36px;
`;

const Logo: FC = () => {
    return (
        <Link to="/">
            <Image src={logo}  alt="Company's logo" title="MyCompanyName" />
        </Link>
    )
}

export default Logo
