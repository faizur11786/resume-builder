import React from 'react'
import { connect } from 'react-redux'
import Layout from '../../layout'

const ViewResume = ( props ) => {
    console.log( "props", props.data );
    const {  basic, education, experience } = props.data;
    const { address, email, name, phone, skills, } = basic
    return (
        <Layout>
            <div className="container">
                <div className="row py-5 justify-content-center">
                    <div className="col-md-6">
                        <div className="view">
                            <div className="view--header">
                                <div>
                                    <h1>{name}</h1>
                                    <p>{address}</p>
                                </div>
                                <div>
                                    <p>{phone}</p>
                                    <p>{email}</p>
                                </div>
                            </div>
                            <div className="view--body">
                                <div className="view--section">
                                    <h4>Skills</h4>
                                    <ul>
                                        {skills?.map( ( item, index ) => (
                                            <li>{item.label}</li>
                                        ) )}
                                    </ul>
                                </div>
                                <div className="view--section">
                                    <h4>Experience</h4>
                                    <div className="list--group">
                                        {experience ? (
                                            <>
                                                {experience.map( ( item, index ) => (
                                                    <div className="list--item" key={index}>
                                                        <div className="list--details">
                                                            <h5>{item.title}</h5>
                                                            <p><b>{item.company}</b>{` ${item.designation} ${ item.year }` }</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </>
                                        ) : "NA"}
                                    </div>
                                </div>
                                <div className="view--section">
                                    <h4>Education</h4>
                                    <div className="list--group">
                                        {education ? (
                                            <>
                                                {education.map( ( item, index ) => (
                                                    <div className="list--item" key={index}>
                                                        <div className="list--details">
                                                            <h5>{item.instutite}</h5>
                                                            <p><b>{item.degree}</b>{` ${item.year}`}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </>
                                        ) : "NA"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

const mapStateToProps = state => {
    return ( {
        data: state.app
    } )
}


export default connect( mapStateToProps, {} )( ViewResume )
