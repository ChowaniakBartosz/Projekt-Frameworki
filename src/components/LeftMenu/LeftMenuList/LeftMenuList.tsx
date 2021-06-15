import { FC } from "react"
import styled from "styled-components";
import { LeftMenuListItem, ILeftMenuListItem } from "./LeftMenuListItem/LeftMenuListItem";

const List = styled.ul`
    display: flex;
    flex-direction: column;
`;

interface ILeftMenuList {
    listItems: ILeftMenuListItem[]
}

const LeftMenuList: FC<ILeftMenuList> = ({listItems}) => {
    return (
        <List>
            {
                listItems.map(({path, icon, text, ...props}) => (
                    <LeftMenuListItem path={path} icon={icon} text={text} {...props} />
                ))
            }
        </List>
    )
}

export default LeftMenuList
