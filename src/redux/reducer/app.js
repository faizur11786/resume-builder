let initialState = {
    basic: "",
    experience: [],
    education: []
}

export default function foo ( state = initialState, action ) {

    switch ( action.type ) {
        case "SAVE_USER_DATA":
            return { ...state, basic: { ...state.basic, ...action.payload } }
        case "REMOVE_USER_DATA":
            return { ...state, basic: {}, education: [], experience: [] }
        case "SAVE_USER_EXP":
            return { ...state, experience: [...state.experience, action.payload] }
        case "SAVE_USER_EDU":
            return { ...state, education: [...state.education, action.payload] }
        default:
            return state
    }
}