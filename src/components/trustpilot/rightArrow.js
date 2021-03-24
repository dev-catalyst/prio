import React from "react"
import rightArrow from "../../assets/images/home/right-arrow-grey.svg"

function RightArrow({ style, onClick }) {
  return (
    <div
      className="trustpilot-right-arrow"
      style={{
        ...style,
        position: "absolute",
        top: "50%",
        right: "0",
        transform: "translateY(-50%)",
        width: "36px",
        height: "36px",
        cursor: "pointer",
        backgroundColor: "#transparent",
        zIndex: "10",
        borderRadius: "100%",
        border: "2px solid #a5a5a5",
        opacity: "0.6",
      }}
      onClick={onClick}
    >
      <img
        src={rightArrow}
        style={{
          height: "24px",
          width: "24px",
          transform: "translateX(23%) translateY(15%)",
        }}
      />
    </div>
  )
}

export default RightArrow
