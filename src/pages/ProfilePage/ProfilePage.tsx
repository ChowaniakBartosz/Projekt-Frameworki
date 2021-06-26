import React, { Component } from 'react'
import styled from 'styled-components'
import HeaderButton from './HeaderButton'
import ProfileView from './ProfileView'
import {Colors} from 'styledHelpers/Colors'

import { SectionTitle } from 'styledHelpers/Components';


// import icons
import tmpIcon from 'assets/icons/comments.svg'
import pencilIcon from 'assets/icons/pencil.svg'
import fileIcon from 'assets/icons/file.svg'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-basis: 100%;
    
    background-color: ${Colors.White};
    padding: 1em;
    box-shadow: 0px 3px 3px ${Colors.Silver};
    border-radius: 6px;
`;

const TopButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1em;

    & > span {
        display: flex;
        gap: 1em;
        align-items: center;
    }

    & button {
        background: none;
        border: none;
    }
`;

const ProfileSection = styled.div`
    display: flex;
    align-items: flex-end;
    border-bottom: #ccc solid 1px;
    padding: 2em 1em;
    position: relative;
    gap: 2em;
`;

const TagSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
    position: relative;
`;

const GrayTitle = styled.h3`
    font-size: 1.2em;
    color: #a5a8b4;
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1em 0em;
`;

const Tag = styled.span`
    color: #5a9eb0;
    background-color: #e6f0f3;
    padding: .4em;
    margin: 0 .4em;
    border-radius: 5px;

    &:first-child {
        margin-left: 0;
    }
`;

const EditableText = styled.input`
    background: none;
    border: none;
    font-size: 1em;
`;

const Name = styled(EditableText)`
    font-weight: bold;
`;
const CorporationName = styled(EditableText)`
    font-weight: bold;

`;
const City = styled(EditableText)`

`;
const JobTitle = styled(EditableText)`

`;
const UserMail = styled(EditableText)`

`;
const UserPhone = styled(EditableText)`

`;

const EditButton = styled.button`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 1em;
    right: 0;
    background: none;
    border: none;

    &:hover {
        cursor: pointer;
    }
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 0.5em;
`;

const UserContact = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 0.5em;
`;

const EditableSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;

    & > div {
        display: flex;
        border-bottom: #ccc solid 1px;
        padding: 1em 0;
    }
`;

const PanelInformations = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;
const Proposals = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

const Columns = styled.div`
    display: flex;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 0.5em;

    b {
        font-weight: bold;
        border-bottom: 1px solid silver;
        padding-bottom: 0.5em;
    }
`;

const InternalReviews = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;
const AmountOfFees = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

const GrayBg = styled.div`
    padding: 1em;
    background: #e5e5e5;
    border-radius: 5px;
`;

class Profile extends Component {
    render() {
        return (
            <Wrapper>
                <TopButtons>
                    <span>
                        <button>
                            <img src={tmpIcon} alt="tmp icon" />
                        </button>
                        Message
                    </span>
                    <span>
                        <button>
                            <img src={tmpIcon} alt="tmp icon" />
                        </button>
                        Create a request
                    </span>
                    <span>
                        <button>
                            <img src={tmpIcon} alt="tmp icon" />
                        </button>
                        Add to a cluster
                    </span>
                    <button>
                        <img src={tmpIcon} alt="tmp icon" />
                    </button>
                </TopButtons>
                <ProfileSection>
                    <ProfileView />
                    <UserInfo>
                        <Name disabled value="Humberta swift" />
                        <CorporationName disabled value="Clifford Chance" />
                        <City disabled value="New-york" />
                        <JobTitle disabled value="Partner" />
                    </UserInfo>
                    <UserContact>
                        <UserMail disabled value="humbertaswift@gmail.com" />
                        <UserPhone disabled value="+33 (0)6 12 34 56 78" />
                    </UserContact>
                    <EditButton>
                        <img src={pencilIcon} alt="temporary icon" />
                    </EditButton>
                </ProfileSection>

                <EditableSection>
                    <TagSection>
                        <GrayTitle>Expertise</GrayTitle>
                        <Tags>
                            <Tag>Mergers and acquisition</Tag>
                        </Tags>

                        <GrayTitle>Specialties</GrayTitle>
                        <Tags>
                            <Tag>Cross border operation</Tag>
                            <Tag>Transaction over 500M/$</Tag>
                        </Tags>

                        <GrayTitle>Admission to practice law</GrayTitle>
                        <Tags>
                            <Tag>Paris bar association</Tag>
                            <Tag>Tunisian bar association</Tag>
                        </Tags>

                        <GrayTitle>Counties</GrayTitle>
                        <Tags>
                            <Tag>Tunisia</Tag>
                        </Tags>

                        <EditButton>
                            <img src={pencilIcon} alt="temporary icon" />
                        </EditButton>
                    </TagSection>
                    <PanelInformations>
                        <SectionTitle>Panel Informations</SectionTitle>

                        <GrayTitle>Hourly fee</GrayTitle>
                        <span>610€/hour (Negociated)</span>

                        <GrayTitle>Terms & conditions</GrayTitle>
                        <span>Monthly 10k$ retainer - see with Jeanny Smith</span>
                        {/* Attachment */}
                        <GrayBg>
                            <img src={fileIcon} alt="file icon" height="15"/>
                            Attachment.jpg
                        </GrayBg>

                        <SectionTitle>Services & projects</SectionTitle>
                        <span>Corporate M&A and international acquisitions</span>

                        <SectionTitle>Internal correspondants</SectionTitle>
                        <GrayBg>item1 message profile</GrayBg>
                        <GrayBg>item2 message profile</GrayBg>

                    </PanelInformations>
                    <Proposals>
                        <SectionTitle>Proposals</SectionTitle>
                        <Columns>
                            <Column>
                                <b>Name</b>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                            </Column>
                            <Column>
                                <b>Entity</b>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                            </Column>
                            <Column>
                                <b>Location</b>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                            </Column>
                            <Column>
                                <b>Expertise</b>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                            </Column>
                            <Column>
                                <b>Date</b>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                            </Column>
                            <Column>
                                <b>Firm</b>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                            </Column>
                        </Columns>
                        <a href="#">See more</a>
                    </Proposals>
                    <InternalReviews>
                        <SectionTitle>Internal reviews</SectionTitle>
                        <Columns>
                            <Column>
                                <b>Name</b>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                            </Column>
                            <Column>
                                <b>Entity</b>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                            </Column>
                            <Column>
                                <b>Location</b>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                            </Column>
                            <Column>
                                <b>Expertise</b>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                            </Column>
                            <Column>
                                <b>Date</b>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                            </Column>
                        </Columns>
                        <a href="#">See more</a>
                    </InternalReviews>
                    <AmountOfFees>
                        <SectionTitle>Amount of fees</SectionTitle>
                        <Columns>
                            <Column>
                                <b>Year</b>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                            </Column>
                            <Column>
                                <b>Cost center</b>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                            </Column>
                            <Column>
                                <b>Total amount</b>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                            </Column>
                            <Column>
                                <b>Law firm</b>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                            </Column>
                        </Columns>
                    </AmountOfFees>
                </EditableSection>
            </Wrapper>
        )
    }
}
export default Profile; 