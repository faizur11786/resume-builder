import { useState } from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify";



const AddExperience = () => {

    const [expData, setExpData] = useState( {
        title: "",
        company: "",
        year: "",
        designation: ""
    } )


    const dispatch = useDispatch();


    const submitHandler = () => {
        const { title, company, year, designation } = expData;
        if ( !title ) {
            toast.error( "Please Enter Title " )
            return
        } else if ( !company ) {
            toast.error( "Please Enter Company Name " );
            return
        } else if ( !year ) {
            toast.error( "Please Enter Year " );
            return
        } else if ( !designation ) {
            toast.error( "Please Enter Designation " );
            return
        } else {
            dispatch( { type: "SAVE_USER_EXP", payload: expData } )
        }
    }

    return (
        <>
            <button type="button" className="btn btn-light" data-toggle="modal" data-target="#expModal">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" /></svg>{" "}Add More</button>

            <div className="modal fade" id="expModal" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="expModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="expModalLabel">Add Experience</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group mb-3">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text" className="form-control"
                                    value={expData.title}
                                    onChange={e => setExpData( { ...expData, title: e.target.value } )}
                                    id="title" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="company">Company</label>
                                <input
                                    type="text" className="form-control"
                                    value={expData.company}
                                    onChange={e => setExpData( { ...expData, company: e.target.value } )}
                                    id="company" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="designation">Designation</label>
                                <input
                                    type="text" className="form-control"
                                    value={expData.designation}
                                    onChange={e => setExpData( { ...expData, designation: e.target.value } )}
                                    id="designation" />
                            </div>


                            <div className="form-group mb-3">
                                <label htmlFor="year">Year</label>
                                <input
                                    type="data"
                                    className="form-control"
                                    value={expData.year}
                                    onChange={e => setExpData( { ...expData, year: e.target.value } )}
                                    id="year" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-dark" onClick={submitHandler}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddExperience
