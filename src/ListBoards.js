import React from "react";
import reactDom from "react-dom";

function ListBoards(boards){
    const boardsData = boards.slice(0, 7);

    const elemx = (
        <div>
      <h1 style={{ textAlign: "center" }}>Boards List</h1>
      <div
        style={{
          // border: "2px solid red",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {boardsData.map((singleBoard) => {
          return (
            <div
              key={singleBoard.boardId}
            //   onClick={(e) => handleClick(e, singleBoard)}
              style={{
                border: "2px solid black",
                margin: "2rem",
                padding: "1rem",
                backgroundColor: "whitesmoke",
                width: "80%",
                height: "18rem",
                borderRadius: ".8rem",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  // border: "2px solid green",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <img
                  style={{ height: "70%" }}
                  src={singleBoard.boardIcon}
                  alt=""
                />
              </div>
              <h3 style={{ textAlign: "center", fontSize: "1.6rem" }}>
                {singleBoard.boardShortName}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
      );
      reactDom.render(elemx, document.getElementById('root'));
}

export default ListBoards;