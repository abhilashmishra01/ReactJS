import React,{useContext} from "react";
import HelperController from "./HelperController";
import { Formik, Form, FieldArray, Field } from "formik";
import * as Yup from "yup";
import {contextData} from "../context/context";

function Registration(){

    const country = [
        {key:"-----select country-----",value:""},
        {key:"India",value:"India"},
        {key:"USA",value:"USA"},
        {key:"UK",value:"UK"},
        {key:"Japan",value:"Japan"},
        {key:"Australia",value:"Australia"},
        {key:"France",value:"France"}

    ]

    const {formData,setFormData} = useContext(contextData);

    const initialValues = {
        "fname":"",
        "lname":"",
        "email":"",
        "phonenumbers":[""],
        "address":"",
        "country":""
    };
    const validationSchema = Yup.object({
        "fname":Yup.string().required("can't be left empty").max(15,"Max character reached !").min(5,"Minimum 5 characters are required"),
        "lname":Yup.string().required("can't be left empty").max(10,"Max character reached !").min(5,"Minimum 5 characters are required"),
        "email":Yup.string().required("please enter valid email address").email("Enter Valid Email").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"invalid email format"),
        "address":Yup.string().required("please provide address for communication"),
        "country":Yup.string().required("please seact a country")
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

                                    <label htmlFor="Phone Numbers">Phone Numbers</label>
                                    <FieldArray name="phonenumbers">
                                        {
                                            (fieldarrayprops)=>{
                                                const {form,push,remove} = fieldarrayprops;
                                                const {values} = form;
                                                const {phonenumbers} = values;
                                                //console.log(phonenumbers);
                                                return <div>
                                                    {phonenumbers.map((element,index)=>(
                                                        <div key={index}>
                                                            <Field name={`phonenumbers[${index}]`} type="number" className="array-styles"></Field>
                                                            {
                                                                index>0?(<button onClick={()=>remove(index)}className="btn btn-danger btn-sm">-</button>):null
                                                            }
                                                            {
                                                                index>0?null:<button onClick={()=>push("")} className="btn btn-success btn-sm">+</button>
                                                            }
                                                            
                                                        </div>
                                                    ))}
                                                </div>
                                            }
                                        }
                                    </FieldArray>
                                    
                                    <HelperController control="textarea"
                                                    name="address"
                                                    label="Address"></HelperController>

                                    <HelperController control="select"
                                                    name="country"
                                                    label="Country"
                                                    options={country}></HelperController>

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