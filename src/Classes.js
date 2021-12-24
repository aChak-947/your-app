import React from "react";
import reactDom from "react-dom";

function Classes(classList){
    //console.log(classList.length);

    const displayElement = (
        <div>
      <h1 style={{ textAlign: "center" }}>Classes List</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {classList.map((singleClass) => {
          return (
            <div
              key={singleClass.classId}
            //   onClick={(e) => handleClick(e, singleClass)}
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
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <img
                  style={{ height: "70%" }}
                  src={singleClass.classIcon}
                  alt=""
                />
              </div>
              <h3 style={{ textAlign: "center", fontSize: "1.6rem" }}>
                {singleClass.classNameInRoman}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
    );
    reactDom.render(displayElement, document.getElementById('root'));
}

export default Classes;