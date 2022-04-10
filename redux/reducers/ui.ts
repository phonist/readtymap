import { 
    AddListenType, RemoveListenType, AddSearchType, RemoveSearchType, UIStateType,
    ADD_LISTEN   , REMOVE_LISTEN   , ADD_SEARCH   , REMOVE_SEARCH
} from '../types/ui';

const initialState: UIStateType = {
    loading: false,
    searching: false,
    listening: false
}

export const uiReducer = (
    state = initialState, 
    action: AddListenType | RemoveListenType | AddSearchType | RemoveSearchType
): UIStateType => {
    switch (action.type) {
        case ADD_LISTEN:
            return {
                ...state,
                listening: true
            }
        case REMOVE_LISTEN:
            return {
                ...state,
                listening: false
            }
        case ADD_SEARCH:
            return {
                ...state,
                searching: true
            }
        case REMOVE_SEARCH:
            return {
                ...state,
                searching: false
            }
        default:
            return state;
    }
}