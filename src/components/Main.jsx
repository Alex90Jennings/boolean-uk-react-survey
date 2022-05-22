import { useState } from "react";
import AnswersList from "./AnswersList";
import Form from "./Form.jsx";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswersList] = useState([]);

  const submitForm = (newAnswer) => {
    setAnswersList([...answersList, newAnswer]);
  };

  console.log("answers list: " + answersList);

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList} />
      </section>
      <section className="main__form">
        {<Form submitForm={submitForm} />}
      </section>
    </main>
  );
}

export default Main;
