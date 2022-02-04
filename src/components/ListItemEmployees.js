import React from 'react';
import Input from './Input';
import Item from './Item'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { addItemEmployees, removeItemEmployees } from '../redux/Actions/EmloyeesItemList';


function ListItems() {

    const dispatch = useDispatch()
    const listempl = useSelector(state => state.employees.listempl)
    
    
    const handleThemeAdd = (nameTheme) => {
        dispatch(addItemEmployees(`${Date.now()}`, nameTheme, ""))
    }
    const handleRemoveTheme = (themeId) => dispatch(removeItemEmployees(themeId))
    return (
        <div>
            <Input onSubmit={handleThemeAdd}/>
            <div>
                {listempl.length?
                    (<div className="listItem">{
                       Object.values(listempl).map((theme) => (
                            <div className="item" key={theme.id}>
                        <Item
                            key={theme.id}
                            name={theme.name}
                            id={theme.id}
                            />
                               <button
                                   className="btnDelete"
                               onClick={()=>handleRemoveTheme(theme.id)}
                               >удалить</button>
                               <button className="btnChange">
                                   <Link to={`/employees/${theme.id}`}>
                                       изменить
                                    </Link>
                                </button>
                        </div>
                        )
                        )
                    }
                </div>)
                        : null}
            </div>
        </div>
    )
}

export default ListItems;
