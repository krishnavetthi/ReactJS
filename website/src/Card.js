import React from "react";

const Card = ({title,buttonText,text,link}) => {
    return(
        <div className="card" style={{width: "18rem"}}>
              <img
                src={link}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  {text}
                </p>
                <a href="#" className="btn btn-success">{buttonText}</a>
              </div>
            </div>
    )
}

export default Card;