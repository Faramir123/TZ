import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Route } from 'react-router';
import { changeDescription } from '../redux/Actions/ItemList';
import IsItemExists from '../hooks/IsItemExists'
import Input from './Input';
import Home from '../pages/Home';

function CartItem() {
    const {itemId} =useParams()
    const dispatch = useDispatch()
    const {list, descriptions} = useSelector(state => state.spisok)
 
    //вводим описание через Input  в карточке
    const handleDescriptionChange = (title) => dispatch(changeDescription(itemId, title))
    //Находим по ID необходимый Item из массива DESCRIPTIONS
    const findItemFromStore = (itemId, descript) => {
        const itemfind = Object.values(descript).find((item) => item.id == itemId)
        return itemfind  
    }
    const thisDescriptionItem = findItemFromStore(itemId, descriptions)
    const thisListItem = findItemFromStore(itemId, list)


   /*  //Проверка на существование карточки
    const isCartItemExists = IsItemExists({itemId})
    if (!isCartItemExists) {
        return <Route path="*" element={<main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>}/>
    } */

    return (
    <div key={thisListItem.id}>
            <h2>Information of {thisListItem.name}</h2>
        <Input onSubmit={handleDescriptionChange} />    
        <div>Description: {thisDescriptionItem.title} </div>
    </div>
    )
}

export default CartItem;
