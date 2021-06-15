import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled helpers
import { Colors } from "styledHelpers/Colors";

const Route = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${Colors.Gray};
    padding: 0.5em;
    transition: all .3s;
    text-decoration: none;
    gap: 0.5em;
    min-height: 25px;

    &:hover {
        background-color: #cfcfcf;
    }
`;

const Label = styled.span`
`;

const Icon = styled.img`
    width: 25px;
`;

export interface INavigationItem {
    title: string,
    path: string,
    icon: string,
}

export const NavigationItem: FC<INavigationItem> = ({icon, path, title, ...props}) => {
    return (
        <Route to={path}>
            <Icon src={icon} alt={title} />
            <Label>
                {props.children == null ? title : props.children}
            </Label>
        </Route>
    );
}

export default NavigationItem;