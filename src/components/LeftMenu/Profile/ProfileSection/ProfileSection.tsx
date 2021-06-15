import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "styledHelpers/Colors";

// Assetis
import avatar from 'assets/avatar.jpg';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding: 2em;
border-bottom: ${Colors.PrimaryBackground} solid 1px;
gap: 0.5em;
`;

const Route = styled(Link)`
display: flex;
flex-direction: column;
text-decoration: none;
gap: 1em;
`;

const ProfilePicture = styled.img`
width: 140px;
border-radius: 50%;
align-self: center;
`;

const Username = styled.span`
    text-align: center;
    color: ${Colors.SecondaryText};
    font-size: 1.3em;
    font-weight: bold;

    &:hover {
    color: ${Colors.PrimaryText};
    }
`;

const Label = styled.span`
text-align: center;
color: gray;
font-size: 0.8em;
`;

function ProfileSection() {
    return (
        <Wrapper>
                <Route to="/profile">
                    <ProfilePicture src={avatar} alt="Profile picture" />
                    <Username>
                        Bartosz Chowaniak
                    </Username>
                </Route>
                <Label>Job title - Company</Label>
        </Wrapper>
    )
}

export default ProfileSection
