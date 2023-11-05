import React, {useState, useEffect} from 'react';
import './itemList.css';
import Spinner from '../spinner';




function ItemList ({getData, renderItem, onItemSelected}) {
    
    const [itemlist, updateList] = useState([])

    useEffect(() => {
        getData()
            .then( (data) => {
                updateList(data)
            })
    }, [])
    function renderItems(arr) {
        return arr.map((item) => {
            const {id} =item;
            const label = renderItem(item);
            return (
                <li 
                    key={id}
                    className="list-group-item"
                    onClick={() => onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    if(!itemlist) {
        return <Spinner />
    }
    const items = renderItems(itemlist);

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}
export default ItemList;