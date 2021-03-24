import React from "react"
import leftArrow from "../../assets/images/home/left-arrow-grey.svg"

function LeftArrow({ style, onClick }) {
  return (
    <div
      className="trustpilot-left-arrow"
      style={{
        ...style,
        position: "absolute",
        top: "50%",
        left: "0",
        transform: "translateY(-50%)",
        width: "36px",
        height: "36px",
        cursor: "pointer",
        backgroundColor: "transparent",
        zIndex: "10",
        borderRadius: "100%",
        border: "2px solid #a5a5a5",
        opacity: "0.6",
      }}
      onClick={onClick}
    >
      <img
        src={leftArrow}
        style={{
          height: "24px",
          width: "24px",
          transform: "translateX(15%) translateY(15%)",
        }}
      />
    </div>
  )
}

export default LeftArrow
