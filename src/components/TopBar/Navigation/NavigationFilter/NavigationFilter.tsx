import { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { Colors } from "styledHelpers/Colors";

const Wrapper = styled.div`
    padding: 0.5em;
`;

const Input = styled.input`
    background-color: ${Colors.White};
    border: ${Colors.Silver} solid 1px;
    border-radius: 3px;
    padding: 0.5em;
`;

interface INavigationFilter {
    value: string,
    onChangeFn: (props: string) => void,
    placeholder?: string
}

const NavigationFilter: FC<INavigationFilter> = ({value, onChangeFn, ...props}) => {
    const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        onChangeFn(text);
    }

    return (
        <Wrapper>
            <Input
            type="text"
            placeholder={props.placeholder ? props.placeholder : "Filter..."}
            value={value}
            onChange={handleFilter}
            autoFocus
            />
        </Wrapper>
    )
}

export default NavigationFilter
