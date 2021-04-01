import React, { useEffect, useState } from "react"
import add from "../../../../assets/images/faq/Small add btn.svg"
import subtract from "../../../../assets/images/faq/Small collapse btn.svg"
import "./style.scss"

const AnswerDropDown = ({ subtitle, idx, index, setIndex }) => {
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    if (idx !== index) {
      setOpenModal(false)
    }
  }, [index])

  const handleModal = () => {
    setOpenModal(prev => !prev)
    setIndex(idx)
  }
  return (
    <>
      <div className="answerdrop-container-div">
        {!openModal ? (
          <div className="btn-add">
            <img src={add} alt="add" onClick={handleModal} />
          </div>
        ) : (
          <div className="btn-collapse">
            <img src={subtract} alt="minus" onClick={handleModal} />
          </div>
        )}
        <ul className="innerdrop-container-subtitle" key={`${"faqs" + idx}`}>
          {subtitle.question}
        </ul>
      </div>
      {openModal && (
        <div className="answerdrop">
          <div className="answerdrop-div">
            <p className="answer">{subtitle.answer}</p>
          </div>
        </div>
      )}
    </>
  )
}
export default AnswerDropDown
