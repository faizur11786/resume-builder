import React from 'react'
import { connect } from 'react-redux'
import Form from '../../components/Form'
import Layout from '../../layout'

const Home = ( props ) => {
    console.log( "props", props );
    const { address, email, name, phone, skills } = props.data
    return (
        <Layout>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-6">
                        <Form />
                    </div>
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
                                <h4>Skills</h4>
                                <ul>
                                    {skills?.map( ( item, index ) => (
                                        <li>{item.label}</li>
                                    ) )}
                                </ul>
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
        data: state.app.data
    } )
}


export default connect( mapStateToProps, {} )( Home )
