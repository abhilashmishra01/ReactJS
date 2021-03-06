import React from "react";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import RadioButtons from "./RadioButtons";
import CheckboxGroup from "./CheckboxGroup";
//import DatePicker from "./DatePicker";

function HelperController(props){
    const {control,...rest} = props;
    switch(control){
        case "input":
                return <Input {...rest}></Input>
        case "textarea":
                return <TextArea {...rest}></TextArea>
        case "select":
                return <Select {...rest}></Select>
        case "radio":
                return <RadioButtons {...rest}></RadioButtons>
        case "checkbox":
                return <CheckboxGroup {...rest}></CheckboxGroup>

        /* case "date":
                return <DatePicker {...rest}></DatePicker> */
       default:
                return null;
    }
}
export default HelperController;