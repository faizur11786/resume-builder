import { useState } from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify";



const AddEducation = () => {

    const [eduData, setEduData] = useState( {
        instutite: "",
        degree: "",
        year: "",
    } )


    const dispatch = useDispatch();


    const submitHandler = () => {
        const { instutite, degree, year, } = eduData;
        if ( !instutite ) {
            toast.error( "Please Enter Instutite " )
            return
        } else if ( !degree ) {
            toast.error( "Please Enter Degree " );
            return
        } else if ( !year ) {
            toast.error( "Please Enter Year " );
            return
        } else {
            dispatch( { type: "SAVE_USER_EDU", payload: eduData } )
        }
    }

    return (
        <>
            <button type="button" className="btn btn-light" data-toggle="modal" data-target="#eduModakl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" /></svg>{" "}Add More</button>

            <div className="modal fade" id="eduModakl" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="eduModaklLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="eduModaklLabel">Add Education</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group mb-3">
                                <label htmlFor="instutite">Instutite</label>
                                <input
                                    type="text" className="form-control"
                                    value={eduData.instutite}
                                    onChange={e => setEduData( { ...eduData, instutite: e.target.value } )}
                                    id="instutite" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="degree">Degree</label>
                                <input
                                    type="text" className="form-control"
                                    value={eduData.degree}
                                    onChange={e => setEduData( { ...eduData, degree: e.target.value } )}
                                    id="degree" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="year">Year</label>
                                <input
                                    type="text" className="form-control"
                                    value={eduData.year}
                                    onChange={e => setEduData( { ...eduData, year: e.target.value } )}
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

export default AddEducation
