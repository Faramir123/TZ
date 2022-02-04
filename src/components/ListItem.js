import React from 'react';
import Input from './Input';
import Item from './Item'
import { Route, useParams } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from '../redux/Actions/ItemList';
import { Link } from 'react-router-dom';


function ListItems() {

    const dispatch = useDispatch()
    const list = useSelector(state => state.spisok.list)
    
    
    const handleThemeAdd = (nameTheme) => {
        dispatch(addItem(`${Date.now()}`, nameTheme, ""))
    }
    const handleRemoveTheme = (themeId) => dispatch(removeItem(themeId))
    return (
        <div>
            <Input onSubmit={handleThemeAdd}/>
            <div>
                {list.length?
                    (<div className="listItem">{
                       Object.values(list).map((theme) => (
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
                                   <Link to={`/departments/${theme.id}`}>
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
