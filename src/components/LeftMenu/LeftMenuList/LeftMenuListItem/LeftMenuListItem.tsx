import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "styledHelpers/Colors";

const Wrapper = styled.li`
`;

const ListItem = styled(Link)`
    display: flex;
    text-decoration: none;
    font-size: 1em;
    gap: 0.7em;
    padding: 1em;
    align-items: center;
    color: ${Colors.PrimaryText};

    &:hover {
        color: ${Colors.Silver};
    }
`;

const ListItemIcon = styled.img`
    width: 24px;
`;

const ListItemLabel = styled.span`
    flex-grow: 1;
    font-size: 1em;
`;

const ListItemButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: ${Colors.PrimaryText} solid 1px;
    border-radius: 3px;
    padding: 0.4em 0.6em;
`;

export interface ILeftMenuListItem {
    text: string,
    path: string,
    icon: string,
    buttonIcon? : string
}

export const LeftMenuListItem: FC<ILeftMenuListItem> = ({text, path, icon, buttonIcon}) => {
    return (
        <Wrapper>
            <ListItem to={path}>
                <ListItemIcon src={icon} />
                <ListItemLabel>{text}</ListItemLabel>
                {buttonIcon &&
                    <ListItemButton>
                        <img src={buttonIcon} alt="Button icon" />
                    </ListItemButton>
                }
            </ListItem>
        </Wrapper>
    );
}