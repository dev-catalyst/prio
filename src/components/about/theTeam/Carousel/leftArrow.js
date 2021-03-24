import React from "react"
import leftArrow from "../../../../assets/images/home/left-arrow.svg"

function LeftArrow({ style, onClick }) {
  return (
    <div
      className="team-about-left-arrow"
      style={{
        ...style,
        position: "absolute",
        top: "-210px",
        transform: "translateX(150%) translateY(200%)",
        right: "215px",
        width: "63px",
        height: "63px",
        cursor: "pointer",
        backgroundColor: "transparent",
        zIndex: "10",
        borderRadius: "100%",
        border: "1.5px solid #C25A3F",
      }}
      onClick={onClick}
    >
      <img
        src={leftArrow}
        style={{
          transform: "translateX(37%) translateY(40%)",
        }}
      />
    </div>
  )
}

export default LeftArrow
