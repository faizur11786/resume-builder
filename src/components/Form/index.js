import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import AddEducation from '../Modals/AddEducation';
import AddExperience from '../Modals/AddExperience';
import AddSkills from "../Skills";

const Form = () => {

    const [basicDetails, setDasicDetails] = useState( {
        name: '',
        email: "",
        phone: "",
        address: ""
    } )

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
                        <div className="list--item">
                            <div className="list--details">
                                <h5>University at Buffalo</h5>
                                <p>Noida, Uttar Pradesh, India</p>
                            </div>
                        </div>
                        <AddExperience />
                    </div>

                </div>
            </div>
            <div className="form--section">
                <div className="section--head">
                    <h4> Education</h4>
                </div>
                <div className="section--body">
                    <div className="list--group">
                        <div className="list--item">
                            <div className="list--details">
                                <h5>University at Buffalo</h5>
                                <p>Noida, Uttar Pradesh, India</p>
                            </div>
                        </div>
                        <AddEducation />
                    </div>

                </div>
            </div>
            <button type="button" className="btn btn-dark btn-block" onClick={submitHandler}>Submit</button>
        </form>
    )
}

export default Form
