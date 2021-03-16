import React from "react"
import leftArrow from "../../../../assets/images/home/left-arrow.svg"

function LeftArrow({ style, onClick }) {
  return (
    <div
      className="team-left-arrow"
      style={{
        ...style,
        position: "absolute",
        bottom: "0",
        transform: "translateX(150%) translateY(200%)",
        left: "30px",
        width: "60px",
        height: "60px",
        cursor: "pointer",
        backgroundColor: "transparent",
        zIndex: "10",
        borderRadius: "100%",
        border: "2px solid #C25A3F",
      }}
      onClick={onClick}
    >
      <img
        src={leftArrow}
        style={{
          transform: "translateX(35%) translateY(35%)",
        }}
      />
    </div>
  )
}

export default LeftArrow
