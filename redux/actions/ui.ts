import { UI } from '../types/interface/UI';
import { 
    AddListenType, RemoveListenType, AddSearchType, RemoveSearchType, 
    ADD_LISTEN   , REMOVE_LISTEN   , ADD_SEARCH   , REMOVE_SEARCH
} from '../types/ui';

export const addListening = () : AddListenType => ({
    type: ADD_LISTEN
});

export const removeListening = () : RemoveListenType => ({
    type: REMOVE_LISTEN
});

export const addSearching = () : AddSearchType => ({
    type: ADD_SEARCH
});

export const removeSearching = () : RemoveListenType => ({
    type: REMOVE_SEARCH
});