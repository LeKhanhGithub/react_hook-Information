import React from 'react'
import userImg from '../../assets/user.jpg'
import {  useParams, useLocation } from "react-router-dom";
import './user.css';

const User = () => {
    const { contactId } = useParams();
    const location = useLocation();
    return (
        <div className="cart__infor-container_infor-detail">
            <div className="card">
                <div className="cart_infor-detail_img">
                    <img src = {userImg} alt = "imageUser" />
                </div>
                <div className = " cart__infor-detail_content">
                    <h2>{location.state.name}</h2>
                    <h4><span>Email </span> { location.state.email}</h4>
                    <p><span>Bio </span>hello toi ten la le cong khanh, bay gio toi rat vui vi da lamf duoc react route. toi vui qua cac ban a. hello toi ten la le cong khanh, bay gio toi rat vui vi da lamf duoc react route. toi vui qua cac ban a</p>
                </div>
            </div>
            
        </div>
    )
}

export default User
