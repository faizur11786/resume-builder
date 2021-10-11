import React, { useState } from 'react'
import Select from "react-select";
import { useDispatch } from "react-redux";

const AddSkills = () => {

    const skillOptions = [
        { value: 'Html', label: 'Html' },
        { value: 'CSS', label: 'CSS' },
        { value: 'PHP', label: 'PHP' },
        { value: 'JavaScript', label: 'JavaScript' },
    ];

    const dispatch = useDispatch();

    const changeHandler = e => {
        dispatch( { type: "SAVE_USER_DATA", payload: { skills: e } } )
    }


    return (
        <div className="form--section">
            <div className="section--head">
                <h4>Skills</h4>
            </div>
            <div className="section--body">
                <Select
                    isMulti
                    name="colors"
                    options={skillOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={e => changeHandler( e )}
                />
            </div>
        </div>
    )
}

export default AddSkills
