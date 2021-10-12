import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import AddEducation from '../Modals/AddEducation';
import AddExperience from '../Modals/AddExperience';
import AddSkills from "../Skills";

const Form = ( props ) => {


    const history = useHistory()


    console.log( "props", props );
    const [basicDetails, setDasicDetails] = useState( {
        name: '',
        email: "",
        phone: "",
        address: ""
    } )

    const { education, experience } = useSelector( state => state.app )
    console.log( education, experience );
    const dispatch = useDispatch()


    const submitHandler = () => {
        const { name, email, phone, address } = basicDetails;
        if ( !name ) {
            toast.error( "Please Enter Name " )
            return
        } else if ( !email ) {
            toast.error( "Please Enter Email " );
            return
        } else if ( !phone ) {
            toast.error( "Please Enter Phone " );
            return
        } else if ( !address ) {
            toast.error( "Please Enter Address " );
            return
        } else {
            console.log( "yes" );
            dispatch( { type: "SAVE_USER_DATA", payload: basicDetails } )
            history.push( "/viewer" )
        }
    }



    return (
        <form>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text" className="form-control"
                        value={basicDetails.name}
                        onChange={e => setDasicDetails( { ...basicDetails, name: e.target.value } )}
                        id="name" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={basicDetails.email}
                        onChange={e => setDasicDetails( { ...basicDetails, email: e.target.value } )}
                        id="email" />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="number"
                        className="form-control"
                        value={basicDetails.phone}
                        onChange={e => setDasicDetails( { ...basicDetails, phone: e.target.value } )}
                        id="phone" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="address">Address </label>
                    <input
                        type="text"
                        className="form-control"
                        value={basicDetails.address}
                        onChange={e => setDasicDetails( { ...basicDetails, address: e.target.value } )}
                        id="address" />
                </div>
            </div>
            <AddSkills />
            <div className="form--section">
                <div className="section--head">
                    <h4>Experience</h4>
                </div>
                <div className="section--body">
                    <div className="list--group">
                        {experience ? (
                            <>
                                {experience?.map( ( item, index ) => (
                                    <div className="list--item" key={index}>
                                        <div className="list--details">
                                            <h5>{item.company}</h5>
                                            <p><b>{item.designation}</b>{` - ${item.year}`}</p>
                                        </div>
                                    </div>
                                ) )}
                                <AddExperience />
                            </>
                        ) : (
                            <AddExperience />
                        )}
                    </div>
                </div>
            </div>
            <div className="form--section">
                <div className="section--head">
                    <h4>Education</h4>
                </div>
                <div className="section--body">
                    <div className="list--group">
                        {education ? (
                            <>
                                {education?.map( ( item, index ) => (
                                    <div className="list--item" key={index}>
                                        <div className="list--details">
                                            <h5>{item.instutite}</h5>
                                            <p><b>{item.degree}</b>{` ${item.year}`}</p>
                                        </div>
                                    </div>
                                ) )}
                                <AddEducation />
                            </>
                        ) : (
                            <AddEducation />
                        )}

                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-dark btn-block" onClick={submitHandler}>Submit</button>
        </form>
    )
}

export default Form
