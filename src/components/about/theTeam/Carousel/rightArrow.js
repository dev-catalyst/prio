import React from "react"
import rightArrow from "../../../../assets/images/home/right-arrow.svg"

function RightArrow({ style, onClick }) {
  return (
    <div
      className="team-about-right-arrow"
      style={{
        ...style,
        position: "absolute",
        top: "-210px",
        transform: "translateX(100%) translateY(200%)",
        right: "100px",
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
        src={rightArrow}
        style={{
          transform: "translateX(47%) translateY(40%)",
        }}
      />
    </div>
  )
}

export default RightArrow
