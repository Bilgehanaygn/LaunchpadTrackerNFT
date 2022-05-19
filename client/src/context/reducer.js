import types from '../actions/types';

export const initialState = {
    allAppeals: [],
    isFetched: false,
    searchInput: "",
    openModal: {showModal: false, modalAppeal: {projectName:"", appealType:"", applicantName:"", status:0, result:0}, isCreate:true}
};

const reducer = (state, action) => {

    switch(action.type){
        case types.FETCH_APPEALS:
            return {
                ...state,
                allAppeals: action.payload,
                isFetched: true
            };
        case types.CHANGE_SEARCH_INPUT:
            return {
                ...state,
                searchInput: action.payload
            };
        case types.ADD_NEW_CREATED:
            return {
                ...state,
                allAppeals: [...state.allAppeals, action.payload]
            };
        case types.DELETE_APPEAL:
            return {
                ...state,
                allAppeals: state.allAppeals.filter((appeal) => appeal._id !== action.payload),
            };
        case types.UPDATE_APPEAL:
            let newAllAppeals = state.allAppeals.filter((appeal) => {return appeal._id !== action.payload._id});
            newAllAppeals.push(action.payload);
            return {
                ...state,
                allAppeals: newAllAppeals
            }
        case types.SHOW_MODAL:
            return {
                ...state,
                openModal: {showModal: action.payload.showModal, modalAppeal: action.payload.modalAppeal, isCreate: action.payload.isCreate}
            };
        default:
            return {...state};
    }
}

export default reducer;