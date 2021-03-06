import React from "react"
import rightArrow from "../../../../assets/images/home/right-arrow.svg"

function RightArrow({ style, onClick }) {
  return (
    <div
      className="team-right-arrow"
      style={{
        ...style,
        position: "absolute",
        bottom: "0",
        transform: "translateX(100%) translateY(200%)",
        left: "135px",
        width: "60px",
        height: "60px",
        cursor: "pointer",
        backgroundColor: "#transparent",
        zIndex: "10",
        borderRadius: "100%",
        border: "2px solid #C25A3F",
      }}
      onClick={onClick}
    >
      <img
        src={rightArrow}
        style={{
          transform: "translateX(40%) translateY(35%)",
        }}
      />
    </div>
  )
}

export default RightArrow
