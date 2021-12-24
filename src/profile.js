import React from "react";
import reactDom from "react-dom";
import ListBoards from "./ListBoards";

function ProfilePage(email, obj){
    const elemx = (
        <div className="pf-p">
          <div className="profile">
            <h1>Welcome!</h1>
            <div className="body1">
              <br></br>
              <h2>Your email: {email}</h2>
              <br></br>
              <h2>Your username: {obj.codename}</h2>
              <br></br>
              <button onClick={()=> ListBoards(obj.boards)}>View All Boards</button>
            </div>
          </div>
        </div>
      );
      reactDom.render(elemx, document.getElementById('root'));
}

export default ProfilePage;