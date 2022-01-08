import React from 'react'
import './child.css'

const Child = ({ infor, giveId }) => {


    return (
        <div className="cart__infor-item">
            <div className = "text">
                <h3>{ infor.name }</h3>
                <p>{ infor.email }</p>
            </div>
            <div className="delete" onClick = {() => giveId(infor.id)}>
                <p>Delete</p>
            </div>
        </div>
    )
}

export default Child
