import React,{useContext} from "react";
import { globalData } from "./global";
import HelperController from "./HelperController";
import { Formik, Form } from "formik";
import * as Yup from "yup";


function SecondStep(){

    const {setCurrentStep} = useContext(globalData)

    const gender_options = [
        {"key":"Male","value":"Male"},
        {"key":"Female","value":"Female"}
    ]

    const country = [
        {key:"-----select country-----",value:""},
        {key:"India",value:"India"},
        {key:"USA",value:"USA"},
        {key:"UK",value:"UK"},
        {key:"Japan",value:"Japan"},
        {key:"Australia",value:"Australia"},
        {key:"France",value:"France"}

    ]

    const checkbox_options = [
        {key:"Angular",value:"Angular"},
        {key:"ReactJS",value:"ReactJS"},
        {key:"VueJS",value:"VueJS"},
        {key:"NodeJS",value:"NodeJS"},
        {key:"ExpressJS",value:"ExpressJS"},
        {key:"MongoDB",value:"MongoDB"}
    ]


    const initialValues={
        "gender":"",
        "address":"",
        "country":"",
        "skills":[]
    }

    const validationSchema = Yup.object({
        "gender":Yup.string().required("Required !"),
        "address":Yup.string().required("please provide address for communication"),
        "country":Yup.string().required("please seact a country")
    })

    const onSubmit = values=>{
        console.log(values);
    }


    return(
        <React.Fragment>

            <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                {
                    formik=>{
                        return( 
                        <Form>
                            <HelperController control="radio"
                                              name="gender"
                                              label="gender"
                                              options={gender_options}></HelperController>

                            <HelperController control="textarea"
                                                    name="address"
                                                    label="Address"></HelperController>

                            <HelperController control="select"
                                                    name="country"
                                                    label="Country"
                                                    options={country}></HelperController>

                            <HelperController control="checkbox"
                                                      name="skills"
                                                      label="Select Subjects"
                                                      options={checkbox_options}></HelperController>

                            <br></br><br></br>
                            <br></br><br></br>

                            <button type="submit" className="btn btn-primary btn-sm">Next</button>
                            {/* <button onClick={()=>setCurrentStep(3)}>Next</button> */}
                            <button onClick={()=>setCurrentStep(1)} className="btn btn-warning btn-sm">Previous</button>                  
                        </Form>
                        )
                    }
                }

            </Formik>

        </React.Fragment>
    )
}
export default SecondStep;