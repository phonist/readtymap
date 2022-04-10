import { UI } from './interface/ui'

export const ADD_LISTEN = 'ADD_LISTEN';
export const REMOVE_LISTEN = 'REMOVE_LISTEN';
export const ADD_SEARCH = 'ADD_SEARCH';
export const REMOVE_SEARCH = 'REMOVE_SEARCH';

//typescript: interface for redux's state
interface UIStateTypeAction {
    loading: boolean,
    searching: boolean,
    listening: boolean
}

export type UIStateType = UIStateTypeAction

interface AddListenActionType {
    type: typeof ADD_LISTEN;
    payload: UI
}

export type AddListenType = AddListenActionType

interface RemoveListenActionType {
    type: typeof REMOVE_LISTEN;
    payload: UI
}

export type RemoveListenType = RemoveListenActionType

interface AddSearchActionType {
    type: typeof ADD_SEARCH;
    payload: UI
}

export type AddSearchType = AddSearchActionType

interface RemoveSearchActionType {
    type: typeof REMOVE_SEARCH;
    payload: UI
}

export type RemoveSearchType = RemoveSearchActionType