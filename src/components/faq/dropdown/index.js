import React, { useState } from "react"
import InnerDropDown from "./innerdropdown"
import "./style.scss"

function Dropdown() {
  const [index,setIndex] = useState(-1);
  return (
    
    <div className="dropdown">
     <div className="drop-info-container">
        {faq.map((item, idx) => {
          console.log("index", idx, item)
          return (
            <div>
              <div className="dropcontainer">
              {" "}
              <InnerDropDown item={item} idx={idx} index={index} setIndex={setIndex} />
            </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Dropdown

const faq = [
  {
    title: "Über unseren Service",
    subtitle: [
      {
        question: "What is prio.one?",
        answer:
          "Mit prio.one starten wir unsere eigene kleine Revolution des Gesundheitssystems: Wir bieten einen Verschreibungsservice für die Antibabypille, dank dem du den Gang zu Arzt und Apotheke endlich den Rücken kehren kannst. Mit prio.one landet deine, auf Basis deiner Bedürfnisse gewählte, Antibabypille ganz unkompliziert direkt in deinen Briefkasten – und weil wir (und ihr) Geschenke lieben, legen wir noch bunte Goodies dazu.",
      },
      {
        question: "How does Femy Club work?",
        answer:
        "Mit prio.one starten wir unsere eigene kleine Revolution des Gesundheitssystems: Wir bieten einen Verschreibungsservice für die Antibabypille, dank dem du den Gang zu Arzt und Apotheke endlich den Rücken kehren kannst. Mit prio.one landet deine, auf Basis deiner Bedürfnisse gewählte, Antibabypille ganz unkompliziert direkt in deinen Briefkasten – und weil wir (und ihr) Geschenke lieben, legen wir noch bunte Goodies dazu.",
      },
      {
        question: "Who is Femy Club for?",
        answer:
        "Mit prio.one starten wir unsere eigene kleine Revolution des Gesundheitssystems: Wir bieten einen Verschreibungsservice für die Antibabypille, dank dem du den Gang zu Arzt und Apotheke endlich den Rücken kehren kannst. Mit prio.one landet deine, auf Basis deiner Bedürfnisse gewählte, Antibabypille ganz unkompliziert direkt in deinen Briefkasten – und weil wir (und ihr) Geschenke lieben, legen wir noch bunte Goodies dazu.",
      },
      {
        question: "Is shipping free?",
        answer:
        "Mit prio.one starten wir unsere eigene kleine Revolution des Gesundheitssystems: Wir bieten einen Verschreibungsservice für die Antibabypille, dank dem du den Gang zu Arzt und Apotheke endlich den Rücken kehren kannst. Mit prio.one landet deine, auf Basis deiner Bedürfnisse gewählte, Antibabypille ganz unkompliziert direkt in deinen Briefkasten – und weil wir (und ihr) Geschenke lieben, legen wir noch bunte Goodies dazu.",
      },
      {
        question: "Where is Femy Club available?",
        answer:
        "Mit prio.one starten wir unsere eigene kleine Revolution des Gesundheitssystems: Wir bieten einen Verschreibungsservice für die Antibabypille, dank dem du den Gang zu Arzt und Apotheke endlich den Rücken kehren kannst. Mit prio.one landet deine, auf Basis deiner Bedürfnisse gewählte, Antibabypille ganz unkompliziert direkt in deinen Briefkasten – und weil wir (und ihr) Geschenke lieben, legen wir noch bunte Goodies dazu.",
      },
      {
        question: "How much does Femy Club cost?",
        answer:
        "Mit prio.one starten wir unsere eigene kleine Revolution des Gesundheitssystems: Wir bieten einen Verschreibungsservice für die Antibabypille, dank dem du den Gang zu Arzt und Apotheke endlich den Rücken kehren kannst. Mit prio.one landet deine, auf Basis deiner Bedürfnisse gewählte, Antibabypille ganz unkompliziert direkt in deinen Briefkasten – und weil wir (und ihr) Geschenke lieben, legen wir noch bunte Goodies dazu.",
      },
      {
        question: "What information does Femy Club need from me?",
        answer:
        "Mit prio.one starten wir unsere eigene kleine Revolution des Gesundheitssystems: Wir bieten einen Verschreibungsservice für die Antibabypille, dank dem du den Gang zu Arzt und Apotheke endlich den Rücken kehren kannst. Mit prio.one landet deine, auf Basis deiner Bedürfnisse gewählte, Antibabypille ganz unkompliziert direkt in deinen Briefkasten – und weil wir (und ihr) Geschenke lieben, legen wir noch bunte Goodies dazu.",
      },
      {
        question: "Does Femy Club accept health insurance plans?",
        answer:
        "Mit prio.one starten wir unsere eigene kleine Revolution des Gesundheitssystems: Wir bieten einen Verschreibungsservice für die Antibabypille, dank dem du den Gang zu Arzt und Apotheke endlich den Rücken kehren kannst. Mit prio.one landet deine, auf Basis deiner Bedürfnisse gewählte, Antibabypille ganz unkompliziert direkt in deinen Briefkasten – und weil wir (und ihr) Geschenke lieben, legen wir noch bunte Goodies dazu.",
      },
    ],
 
  },
  {
    title: "Versand und Lieferung",
    subtitle: [
      {
        question: "What is prio.one?",
      },
      {
        question: "How does Femy Club work?",
      },
      {
        question: "Who is Femy Club for?",
      },
      {
        question: "Is shipping free?",
      },
      {
        question: "Where is Femy Club available?",
      },
      {
        question: "How much does Femy Club cost?",
      },
      {
        question: "What information does Femy Club need from me?",
      },
      {
        question: "Does Femy Club accept health insurance plans?",
      },
    ],
  
  },
  {
    title: "Verschreibungen",
    subtitle: [
      {
        question: "What is prio.one?",
      },
      {
        question: "How does Femy Club work?",
      },
      {
        question: "Who is Femy Club for?",
      },
      {
        question: "Is shipping free?",
      },
      {
        question: "Where is Femy Club available?",
      },
      {
        question: "How much does Femy Club cost?",
      },
      {
        question: "What information does Femy Club need from me?",
      },
      {
        question: "Does Femy Club accept health insurance plans?",
      },
    ],
  
  },
  {
    title: "Refills",
    subtitle: [
      {
        question: "What is prio.one?",
      },
      {
        question: "How does Femy Club work?",
      },
      {
        question: "Who is Femy Club for?",
      },
      {
        question: "Is shipping free?",
      },
      {
        question: "Where is Femy Club available?",
      },
      {
        question: "How much does Femy Club cost?",
      },
      {
        question: "What information does Femy Club need from me?",
      },
      {
        question: "Does Femy Club accept health insurance plans?",
      },
    ],

  },
  {
    title: "Side Effects",
    subtitle: [
      {
        question: "What is prio.one?",
      },
      {
        question: "How does Femy Club work?",
      },
      {
        question: "Who is Femy Club for?",
      },
      {
        question: "Is shipping free?",
      },
      {
        question: "Where is Femy Club available?",
      },
      {
        question: "How much does Femy Club cost?",
      },
      {
        question: "What information does Femy Club need from me?",
      },
      {
        question: "Does Femy Club accept health insurance plans?",
      },
    ],
 
  },
  {
    title: "Privacy and Security",
    subtitle: [
      {
        question: "What is prio.one?",
      },
      {
        question: "How does Femy Club work?",
      },
      {
        question: "Who is Femy Club for?",
      },
      {
        question: "Is shipping free?",
      },
      {
        question: "Where is Femy Club available?",
      },
      {
        question: "How much does Femy Club cost?",
      },
      {
        question: "What information does Femy Club need from me?",
      },
      {
        question: "Does Femy Club accept health insurance plans?",
      },
    ],
  
  },
  {
    title: "Payments",
    subtitle: [
      {
        question: "What is prio.one?",
      },
      {
        question: "How does Femy Club work?",
      },
      {
        question: "Who is Femy Club for?",
      },
      {
        question: "Is shipping free?",
      },
      {
        question: "Where is Femy Club available?",
      },
      {
        question: "How much does Femy Club cost?",
      },
      {
        question: "What information does Femy Club need from me?",
      },
      {
        question: "Does Femy Club accept health insurance plans?",
      },
    ],
 
  },
  {
    title: "Medication",
    subtitle: [
      {
        question: "What is prio.one?",
      },
      {
        question: "How does Femy Club work?",
      },
      {
        question: "Who is Femy Club for?",
      },
      {
        question: "Is shipping free?",
      },
      {
        question: "Where is Femy Club available?",
      },
      {
        question: "How much does Femy Club cost?",
      },
      {
        question: "What information does Femy Club need from me?",
      },
      {
        question: "Does Femy Club accept health insurance plans?",
      },
    ],
 
  },
]
