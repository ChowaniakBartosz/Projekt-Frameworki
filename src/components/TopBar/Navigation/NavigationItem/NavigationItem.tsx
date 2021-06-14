import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "styledHelpers/Colors";

const Item = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-content: center;
    color: ${Colors.Gray};
    padding: 3px 0.5em;
    transition: all .3s;
    text-decoration: none;

    &:hover {
        background-color: #cfcfcf;
    }
`;

const Label = styled.span`
    align-self: center;
    padding: 6px 3px;
`;

const Icon = styled.img`
    align-self: flex-start;
    justify-self: center;
    padding: .3em;
    width: 25px;
`;

export interface INavigationItemProps {
    title: string,
    to: string,
    icon: string,
}

export const NavigationItem: FC<INavigationItemProps> = ({icon, to, title, ...props}) => {
    return (
        <Item to={to}>
            <Icon src={icon} alt={title} />
            <Label>
                {props.children == null ? title : props.children}
            </Label>
        </Item>
    );
}

export default NavigationItem;