import React from "react";
import "./FriendCard.css";

const FriendCard = props => ( 
    <div className="card col-md-3">
        <div className="img-container">
            <img alt="FriendCard" data-id={props.id} src={props.image} />
        </div>
    </div>
);

export default FriendCard;