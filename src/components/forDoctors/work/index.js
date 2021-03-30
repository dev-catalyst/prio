import React from "react"
import line from "../../../assets/images/forDoctors/Vector 1338.svg"
import linePhone from "../../../assets/images/forDoctors/Vector 1338 phone.png"
import info from "../../../assets/images/forDoctors/Group 1453.svg"
import doc1 from "../../../assets/images/forDoctors/image 210.png"
import doc2 from "../../../assets/images/forDoctors/image 204.png"
import "./style.scss"

function Work() {
  return (
    <div className="forDoctors-work">
      <div className="container">
        <h2>Why work with prio.one</h2>

        <div className="forDoctors-work-rowWrapper forDoctors-work-row1">
          <img src={line} alt="line" />
          <div className="forDoctors-work-row-col7">
            <img src={info} alt="info" />
            <img src={linePhone} alt="line" />
            <h1>01</h1>
            <div className="forDoctors-work-row-col-content">
              <h3>
                Komplementärer Service <br />
                und Kooperation
              </h3>
              <p>
                Unser Fokus liegt in der digitalen Beratung und Aufklärung von
                jungen Frauen. Wir möchten Ängste nehmen, Fragen beantworten,
                aufklären. Durch unser Ärzteteam bieten wir direkten, schnellen
                und digitalen Zugang zu ärztlichem Rat sowie gynäkologischen
                Arzneimitteln. So können wir zum einen Arztpraxen entlasten und
                zum anderen Bewusstsein schaffen, wann sich eine Frau unbedingt
                ihrem Arzt oder ihrer Ärztin vorstellen sollte.
              </p>
            </div>
          </div>
          <div className="forDoctors-work-row-col5">
            <img src={doc1} alt="doctor 1" />
          </div>
        </div>

        <div className="forDoctors-work-rowWrapper forDoctors-work-row2">
          <img src={line} alt="line" />
          <div className="forDoctors-work-row-col7">
            <img src={info} alt="info" />
            <img src={linePhone} alt="line" />
            <h1>02</h1>
            <div className="forDoctors-work-row-col-content">
              <h3>
                Informierte, <br />
                selbstbestimmte Patientin
              </h3>
              <p>
                Wir möchten durch unser Angebot die Eigenverantwortung für die
                persönliche Gesundheit fördern. Dabei sind Aufklärung, Förderung
                der Selbstbeobachtung und das Erlernen des Deutens von Symptomen
                wichtige Aspekte für das gesundheitliche “Self-Empowerment”. Wir
                sind davon überzeugt, dass eine aufgeklärte Patientin, die ihre
                Daten und Befunde selbst verwaltet, sich mitverantwortlich für
                den Behandlungserfolg fühlt.
              </p>
            </div>
          </div>
        </div>

        <div className="forDoctors-work-rowWrapper forDoctors-work-row3">
          <img src={line} alt="line" />
          <div className="forDoctors-work-row-col5">
            <img src={doc2} alt="doctor 2" />
          </div>
          <div className="forDoctors-work-row-col7">
            <img src={info} alt="info" />
            <img src={linePhone} alt="line" />
            <h1>03</h1>
            <div className="forDoctors-work-row-col-content">
              <img src={line} alt="line" />
              <h3>
                Ein verbesserter <br />
                Patientinnen Dialog
              </h3>
              <p>
                Durch die technischen Lösungen, die wir im Rahmen unserer
                Gesundheits-App anbieten, wollen wir durch die Bereitstellung
                der betreffenden Daten eine verbesserte Kommunikation zwischen
                Arzt und Patientin ermöglichen. Unsere prio.one App bietet
                Patientinnen die Möglichkeit, ihre eingetragenen Daten in einer
                einseitigen Übersicht auszudrucken oder an ihren Arzt oder ihre
                Ärztin zu schicken. Ziel ist es, eine datenbasierte Behandlung
                zu ermöglichen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
