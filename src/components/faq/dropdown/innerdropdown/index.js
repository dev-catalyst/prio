import React, { useEffect, useState } from "react"
import "./style.scss"
import add from "../../../../assets/images/faq/Big add btn.svg"
import subtract from "../../../../assets/images/faq/Big collapse btn.svg"

import AnswerDropDown from "../answerdrop"

const InnerDropDown = ({ item, idx, index, setIndex }) => {
  const [openModal, setOpenModal] = useState(false)
  const [index2, setIndex2] = useState(-1)

  useEffect(() => {
    if (idx !== index) {
      setOpenModal(false)
    }
  }, [index])
  const handleModal = e => {
    setOpenModal(prev => !prev)
    setIndex(idx)
  }

  return (
    <React.Fragment>
      <div className="dropdown-container-div" key={`${"faq" + idx}`}>
       
        <ul className="dropdown-container-title">{item.title}</ul>
        {!openModal ? (
          <div className="btn-inner-add">
            <img src={add} alt="add" onClick={handleModal} />
          </div>
        ) : (
          <div className="btn-inner-collapse">
            <img src={subtract} alt="minus" onClick={handleModal} />
          </div>
        )}
      </div>
      {openModal && (
        <div className="innerdrop">
          <div className="innerdrop-container">
            <div>
              {item.question_answers && item.question_answers.map((subtitle, index) => {
                return (
                  <div
                    className="innerdrop-container-div"
                    key={`${"faq" + index}`}
                  >
                    <AnswerDropDown
                      subtitle={subtitle}
                      idx={index}
                      index={index2}
                      setIndex={setIndex2}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}
export default InnerDropDown
