import { FC } from 'react'
import styled from 'styled-components'
import { Colors } from 'styledHelpers/Colors';
import {SectionTitle} from 'styledHelpers/Components'

import EntitiesItem from './EntitiesItem/EntitiesItem'

import editIcon from 'assets/icons/pencil.svg'
import dropdownIcon from 'assets/icons/arrow-down.svg'
import closeIcon from 'assets/icons/close.svg'
import fullscreenIcon from 'assets/icons/fullscreen.svg'
import shareIcon from 'assets/icons/share.svg'
import crosshairIcon from 'assets/icons/crosshair.svg'
import sortIcon from 'assets/icons/sort.svg'
import filterIcon from 'assets/icons/filter.svg'
import moreIcon from 'assets/icons/more.svg'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
    gap: 1em;
    background: white;
    border-radius: 6px;
    box-shadow: 0px 3px 6px ${Colors.Silver};
`;

const TopBar = styled.div`
    display: flex;
    gap: 0.5em;
    align-items: center;
`;

const ViewSwitcher = styled.div`
    display: flex;
    margin-left: auto;
    border: 1px solid gray;
    border-radius: 5px;

    & ul {
        display: flex;

        & li {
            padding: 0.2em 0.5em;
        }
    }

    & li:first-child {
        flex-shrink: 1;
        border-right: 1px solid gray;
        font-weight: bold;
    }
`;

const ButtonBar = styled.div`
    display: flex;
    gap: 1em;
    align-items: center;

    & input {
        margin-left: auto;
        padding: 0.4em 0.5em;
        border-radius: 5px;
        border: 1px solid silver;
    }

    & img {
        margin-right: 0.5em;
    }

    & li.followedBtn {
        border: 1px solid silver;
        padding: 0.4em 0.5em;
        border-radius: 5px;
    }
`;

const FiltersSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    padding: 1em 0;

    & > span {
        color: silver;
        margin-bottom: 0.5em;
    }
`;

const FiltersRow = styled.div`
    display: flex;
    gap: 2em;
    align-items: center;

    span {
        display: flex;
        gap: 0.5em;
        align-items: center;
    }

    input {
        padding: 0.5em;
    }
`;

const EntitiesSection = styled.div`
    display: flex;
    gap: 0.5em;
    flex-wrap: wrap;
`;

const Entities: FC = () => {
    return (
        <Wrapper>
                <TopBar>
                    <SectionTitle>
                        Entities
                    </SectionTitle>
                    <img src={editIcon} alt="edit icon" height="15" />
                    <ViewSwitcher>
                        <ul>
                            <li>Mosaic</li>
                            <li>List</li>
                        </ul>
                    </ViewSwitcher>
                </TopBar>
                <ButtonBar>
                    <ul>
                        <li>
                        <img src={crosshairIcon} alt="" height="14" />
                            All
                        </li>
                    </ul>
                    <img src={moreIcon} alt="" height="14" />
                    <span>
                        <img src={sortIcon} alt="" height="14" />
                        Sort
                    </span>
                    <span>
                    <img src={filterIcon} alt="" height="14" />
                        Filters
                    </span>
                    <img src={fullscreenIcon} alt="fullscreen Icon" height="14" />
                    <span>
                        <img src={shareIcon} alt="share icon" height="14" />
                        Share
                    </span>
                    <input placeholder="Search" />
                    <ul>
                        <li className="followedBtn">Followed</li>
                        {/* <li>All</li> */}
                    </ul>
                </ButtonBar>
                {true && // later on change it to checking if filer button was clicked
                    <FiltersSection>
                        <span>Rows are filtered by the following conditions starting from the top.</span>
                        <FiltersRow>
                            <img src={closeIcon} alt="close icon" height="16" />
                            <span>
                                Where
                            </span>
                            <span>
                                Company
                                <img src={dropdownIcon} alt="dropdown icon" />
                            </span>
                            <span>
                                Contains
                                <img src={dropdownIcon} alt="dropdown icon" />
                            </span>
                            <input disabled placeholder="Type"></input>
                        </FiltersRow>
                    </FiltersSection>
                }
                <EntitiesSection>
                    <EntitiesItem />
                    <EntitiesItem />
                    <EntitiesItem />
                    <EntitiesItem />
                    <EntitiesItem />
                    <EntitiesItem />
                    <EntitiesItem />
                    <EntitiesItem />
                    <EntitiesItem />
                    <EntitiesItem />
                    <EntitiesItem />
                    <EntitiesItem />
                    <EntitiesItem />
                    <EntitiesItem />
                    <EntitiesItem />
                    <EntitiesItem />
                </EntitiesSection>
        </Wrapper>
    );
}

export default Entities;