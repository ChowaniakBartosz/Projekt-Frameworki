import { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { Colors } from "styledHelpers/Colors";

const Input = styled.input`
    background-color: ${Colors.White};
    border: ${Colors.Silver} solid 1px;
    border-radius: 3px;
    margin: .5em;
    padding: 6px 3px;
`;

const NavigationFilter = (props: any) => { // naprawic typ, na razie tak zrobione do zdebugowania
    const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        props.setFilterText(text);
    }

    return (
        <Input type="text" placeholder="Filter..." value={props.value} onChange={handleFilter} autoFocus /> // maybe create common input
    )
}

export default NavigationFilter
