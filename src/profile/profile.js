import React from "react";
import propTypes from "prop-types"

const Profile = (props) => {
    const btn={ 
        border: "none",
        color: "white", 
        padding: "14px 28px", 
        cursor: "pointer" ,
        backgroundColor: "#f44336"


}
return (
    <>
    
    <div className="container">
    {props.children}
        <div className="over">
            <div className="text">
    
              <h5>My Full Name is : </h5>  
              <p>{props.name}</p> <br />
              
              <h5>My Profession is : </h5> 
             <p>{props.profession} </p> 
            </div>
            
        </div>
    </div>
        <p><b>Bio : </b>{props.bio}</p> <br /><br /><br /><br />
   
        <button style={btn} onClick={() => props.alertMyInput(`Hello Mr : ${props.name}`)}>
              Say Hello for {props.name} 
        </button>

    </>
)}
Profile.propType = {
    name : propTypes.string,
    bio :  propTypes.string,
    profession:  propTypes.string,
}
export default Profile;