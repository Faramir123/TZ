export const ADD_ITEM = "DEPARTMENTS:: ADD_ITEM"
export const REMOVE_ITEM = "DEPARTMENTS::REMOVE_ITEM"
export const CHANGE_TITLE = "DEPARTMENTS:: CHANGE_TITLE"



export const addItem = (itemId, name, title="") => ({
    type: ADD_ITEM,
    payload: {
        id: itemId,
        name,
        title
    }
})

export const removeItem = (itemId) => ({
    type: REMOVE_ITEM,
    payload: {
        id: itemId,
    }

})

export const changeDescription = (id, title) => ({
    type: CHANGE_TITLE,
    payload: {
        id,
        title,
    }
})