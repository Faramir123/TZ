import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router';
import { changeDescriptionEmployees } from '../redux/Actions/EmloyeesItemList';
import Input from './Input';


function Emploeeys() {
 const {emplId} = useParams()
    const dispatch = useDispatch()
    const { listempl, descriptionsempl } = useSelector(state => state.employees)
    console.log("listemplempl", listempl)
    console.log("listemplempl", descriptionsempl)
    //вводим описание через Input  в карточке
    const handleDescriptionChange = (title) => dispatch(changeDescriptionEmployees(emplId, title))
    //Находим по ID необходимый Item из массива DESCRIPTIONS
    const findItemFromStore = (emplId, descript) => {
        const itemfind = Object.values(descript).find((item) => item.id == emplId)
        return itemfind  
    }
    const thisDescriptionItem = findItemFromStore(emplId, descriptionsempl)
    const thisListItem = findItemFromStore(emplId, listempl)

    return (
    <div key={thisListItem.id}>
            <h2>Information of {thisListItem.name}</h2>
        <Input onSubmit={handleDescriptionChange} />    
        <div>Description: {thisDescriptionItem.title} </div>
    </div>
    )
}

export default Emploeeys;
