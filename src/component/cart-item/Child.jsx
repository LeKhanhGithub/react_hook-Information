import React from 'react'
import './child.css'
import { Link} from "react-router-dom";

const Child = ({ infor, giveId }) => {

    const view = 1;
    const deleteitem = 2;
    return (

        <div className="cart__infor-item">
            <Link to = {`/${infor.id}`} state = {infor} >
                <div className = "text" onClick = {() => giveId(infor.id, view)}>
                    <h3>{ infor.name }</h3>
                    <p>{ infor.email }</p>
                </div>
            </Link>
                
            <div className="delete" onClick = {() => giveId(infor.id, deleteitem)}>
                <p>Delete</p>
            </div>
        </div>
    )
}

export default Child
