import { ADD_ITEM, CHANGE_TITLE, REMOVE_ITEM } from "../Actions/ItemList"


const defaultState = {
    list: [],
    descriptions: []
}

export const listItemReducer = (state=defaultState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                list: [...(state.list || []), { id: action.payload.id, name: action.payload.name }],
                descriptions: [...(state.descriptions || []), { id: action.payload.id, title: action.payload.title }]
            }
        case REMOVE_ITEM:
            return {
                ...state,
                list: state.list.filter((item) => item.id !== action.payload.id),
                descriptions: state.descriptions.filter((item) => item.id !== action.payload.id)
            }
        case CHANGE_TITLE:
            return {
                ...state,
                descriptions: [ ...state.descriptions.filter((item)=> item.id !== action.payload.id), action.payload ]
            }
        default:
            return state
    }

}