import { ADD_ITEM_EMPLOYEES, CHANGE_TITLE_EMPLOYEES, REMOVE_ITEM_EMPLOYEES } from "../Actions/EmloyeesItemList"


const defaultState = {
    listempl: [],
    descriptionsempl: []
}

export const EmployeesReducer = (state=defaultState, action) => {
    switch (action.type) {
        case ADD_ITEM_EMPLOYEES:
            return {
                ...state,
                listempl: [...(state.listempl || []), { id: action.payload.id, name: action.payload.name }],
                descriptionsempl: [...(state.descriptionsempl || []), { id: action.payload.id, title: action.payload.title }]
            }
        case REMOVE_ITEM_EMPLOYEES:
            return {
                ...state,
                listempl: state.listempl.filter((item) => item.id !== action.payload.id),
                descriptionsempl: state.descriptionsempl.filter((item) => item.id !== action.payload.id)
            }
        case CHANGE_TITLE_EMPLOYEES:
            return {
                ...state,
                descriptionsempl: [ ...state.descriptionsempl.filter((item)=> item.id !== action.payload.id), action.payload ]
            }
        default:
            return state
    }

}