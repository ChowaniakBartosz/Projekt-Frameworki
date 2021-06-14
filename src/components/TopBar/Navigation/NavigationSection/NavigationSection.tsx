import { Dispatch, FC, SetStateAction } from 'react'
import styled from 'styled-components';
import { Colors } from 'styledHelpers/Colors';
import NavigationItem, { INavigationItemProps } from '../NavigationItem/NavigationItem';

const Wrapper = styled.div`
    overflow: auto;
    max-height: 300px;
    padding: .5em;
    border-bottom: 1px solid ${Colors.PrimaryBackground};
`;

const SectionTitle = styled.h2`
    color: ${Colors.Gray};
    font-size: .9em;
    font-weight: bold;
    padding: 3px 0px;
`;

const SectionItems = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
`;

interface INavigationSectionProps {
    title: string,
    sectionItems: INavigationItemProps[],
    filterText: string,
}

const NavigationSection: FC<INavigationSectionProps> = ({title, sectionItems, filterText, ...props}) => {
    return (
        <Wrapper>
            <SectionTitle>{title}</SectionTitle>
            {props.children}
            <SectionItems>
                {
                    sectionItems.map((item) => (
                        item.title.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()) &&
                        <NavigationItem to={item.to} title={item.title} icon={item.icon} key={item.to} />
                    ))
                }
            </SectionItems>
        </Wrapper>
    )
}

export default NavigationSection;
