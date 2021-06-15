import React, { FC } from 'react'
import styled from 'styled-components'
import {Colors} from 'styledHelpers/Colors'
import {WorkspacesItem, IWorkspacesItemProps} from './WorkspacesItem/WorkspacesItem'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import "./styles/swiper.css";

// Assets
import CardIcon from 'assets/icons/entities2.svg'
import { SectionTitle } from 'styledHelpers/Components';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    overflow-x: hidden !important;
`;

const Workspaces: FC = () => {
    // to juz istnieje, mozna importowac z nawigacji
    const workspaces: Array<IWorkspacesItemProps> = [
        {
            title: "Client contract",
            icon: CardIcon,
            lastUpdate: "1",
        },
        {
            title: "Supplier contract",
            icon: CardIcon,
            lastUpdate: "2",
        },
        {
            title: "Corporate",
            icon: CardIcon,
            lastUpdate: "3",
        },
        {
            title: "Group Norms",
            icon: CardIcon,
            lastUpdate: "4",
        }
    ];

    return (
        <>
            <Container>
                <SectionTitle>Workspaces</SectionTitle>
                <Swiper spaceBetween={5} slidesPerView={'auto'}>
                    {
                        workspaces.map(({icon, title, lastUpdate}) => (
                            <SwiperSlide>
                                <WorkspacesItem icon={icon} title={title} lastUpdate={lastUpdate} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Container>
        </>
    );
} 

export default Workspaces;