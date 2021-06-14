import { FC } from 'react'
import styled from 'styled-components';

// StyledHelpers
import { Colors } from 'styledHelpers/Colors';

// Components
import NavigationItem, { INavigationItem } from '../NavigationItem/NavigationItem';

const Wrapper = styled.section`
    border-bottom: 1px solid ${Colors.PrimaryBackground};
    overflow: auto;
    max-height: 220px;
`;

const Title = styled.h2`
    color: ${Colors.Gray};
    font-size: .9em;
    font-weight: bold;
    padding: 0.5em 0.7em;
`;

const SectionItems = styled.ul`
    display: flex;
    flex-direction: column;
`;

interface INavigationSection {
    title?: string,
    sectionItems: INavigationItem[],
    filterText: string,
}

const NavigationSection: FC<INavigationSection> = ({title, sectionItems, filterText, ...props}) => {
    return (
        <Wrapper>
            {title && 
                <Title>{title}</Title>
            }
            <SectionItems>
                {
                    sectionItems.map(({path, title, icon}) => (
                        title.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()) &&
                        <NavigationItem path={path} title={title} icon={icon} key={path} />
                    ))
                }
            </SectionItems>
        </Wrapper>
    )
}

export default NavigationSection;
