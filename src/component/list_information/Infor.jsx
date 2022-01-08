import React from 'react'
import {Child} from '../../component'
import './Infor.css'
const Infor = ({ information, deleteItem }) => {

    const deleteInfor = (id) => {
        deleteItem(id);
    }
    
    return (
        <div className = 'cart__infor section__padding' >
            {information.map((item) => 
                <Child infor={item} giveId={deleteInfor}/>
            )}
        </div>
    )
}

export default Infor
