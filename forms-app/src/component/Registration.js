import React,{useContext} from "react";
import HelperController from "./HelperController";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {contextData} from "../context/context";

function Registration(){

    const {formData,setFormData} = useContext(contextData);





    const initialValues = {
        "fname":"",
        "lname":"",
        "email":""
    };
    const validationSchema = Yup.object({
        "fname":Yup.string().required("can't be left empty").max(15,"Max character reached !").min(5,"Minimum 5 characters are required"),
        "lname":Yup.string().required("can't be left empty").max(10,"Max character reached !").min(5,"Minimum 5 characters are required"),
        "email":Yup.string().required("please enter valid email address").email("Enter Valid Email").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"invalid email format")
    })
    const onSubmit = values=>{
        //console.log(values);
        setFormData({values})
    }

    return(
        <div className="master-form">
            <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                    {
                        formik=>{
                            //console.log(formik);
                            return(
                                <Form>
                                    <HelperController control="input"
                                                    type="text"
                                                    name="fname"
                                                    label="First Name"></HelperController>

                                    <HelperController control="input"
                                                    type="text"
                                                    name="lname"
                                                    label="Last Name"></HelperController>
                                    <HelperController control="input"
                                                    type="email"
                                                    name="email"
                                                    label="Email"></HelperController>

                                <br></br>

                                <button type="submit" disabled={!formik.isValid} className="btn btn-primary btn-sm">Next</button>
                                </Form>
                            )
                        }
                    }
            </Formik>
        </div>
    )
}
export default Registration;