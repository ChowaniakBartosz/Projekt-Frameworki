import React, { FC } from 'react'

// Components
import Publications from '../Publications/Publications';
import Workspaces from '../Workspaces/Workspaces';

const HomePage: FC = () => {
    return (
        <>
            <Publications />
            <Workspaces />
        </>
    )
}

export default HomePage;