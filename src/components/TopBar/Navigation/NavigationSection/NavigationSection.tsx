import { Dispatch, FC, SetStateAction } from 'react'
import styled from 'styled-components';
import { Colors } from 'styledHelpers/Colors';
import NavigationItem, { INavigationItemProps } from '../NavigationItem/NavigationItem';

const Wrapper = styled.div`
    overflow: auto;
    max-height: 300px;
    border-bottom: 1px solid ${Colors.PrimaryBackground};
`;

const Title = styled.h2`
    color: ${Colors.Gray};
    font-size: .9em;
    font-weight: bold;
    padding: 0.5em 0.7em 0.4em;
`;

const SectionItems = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
`;

const SeeProfile = styled.a`
    font-size: .8em;
    color: ${Colors.SecondaryText};
`;

interface INavigationSectionProps {
    title?: string,
    sectionItems: INavigationItemProps[],
    filterText: string,
}

const NavigationSection: FC<INavigationSectionProps> = ({title, sectionItems, filterText, ...props}) => {
    const sectionTitle = title;

    return (
        <Wrapper>
            {title && 
                <Title>{title}</Title>
            }
            {props.children}
            <SectionItems>
                {
                    sectionItems.map(({to, title, icon}) => (
                        title.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()) &&
                        <NavigationItem to={to} title={title} icon={icon} key={to} />
                    ))
                }
            </SectionItems>
        </Wrapper>
    )
}

export default NavigationSection;
