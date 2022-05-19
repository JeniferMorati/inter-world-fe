import styled from "styled-components";
import DatePicker from "react-datepicker";

export const DatePickerContainer = styled(DatePicker)`
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    color: #4f4f4f;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #bdbdbd;
    appearance: none;
    border-radius: .25rem;
    div.form-notch {
      border: 5px solid red;
    }
`;
