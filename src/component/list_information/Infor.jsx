import React from 'react'
import {Child} from '../../component'
import './Infor.css'
const Infor = ({ information, handleItem }) => {

    const handleInfor = (id, action) => {
        handleItem(id, action);
    }
    
    return (
        <div className = 'cart__infor section__padding' >
            {information.map((item) => 
                <Child infor={item} giveId={handleInfor}/>
            )}
            
        </div>
    )
}

export default Infor
