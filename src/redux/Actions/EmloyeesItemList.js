export const ADD_ITEM_EMPLOYEES = "EMPLOYEES:: ADD_ITEM"
export const REMOVE_ITEM_EMPLOYEES = "EMPLOYEES::REMOVE_ITEM"
export const CHANGE_TITLE_EMPLOYEES = "EMPLOYEES:: CHANGE_TITLE"

export const addItemEmployees = (itemId, name, title="") => ({
    type: ADD_ITEM_EMPLOYEES,
    payload: {
        id: itemId,
        name,
        title
    }
})

export const removeItemEmployees = (itemId) => ({
    type: REMOVE_ITEM_EMPLOYEES,
    payload: {
        id: itemId,
    }

})

export const changeDescriptionEmployees = (id, title) => ({
    type: CHANGE_TITLE_EMPLOYEES,
    payload: {
        id,
        title,
    }
})