import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Form from '../../components/Form'
import Layout from '../../layout'

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type:"REMOVE_USER_DATA"})
    }, [])
    return (
        <Layout>
            <div className="container">
                <div className="row py-5 justify-content-center">
                    <div className="col-md-6">
                        <Form />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home
