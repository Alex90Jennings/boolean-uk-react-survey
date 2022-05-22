import { useState } from "react";
import Checkbox from "./Checkbox";
import RadioButton from "./RadioButton";

const initialData = {
  color: "",
  spendTime: {
    swimming: false,
    bathing: false,
    chatting: false,
    noTime: false,
  },
  review: "",
  username: "",
  email: "",
};

function Form({ submitForm }) {
  const [answerData, setAnswerData] = useState(initialData);
  console.log(answerData);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    switch (name) {
      case "color":
        setAnswerData({ ...answerData, color: value });
        break;
      case "spend-time":
        const updatedSpendTime = { ...answerData.spendTime, [value]: checked };
        setAnswerData({ ...answerData, spendTime: updatedSpendTime });
        break;
      case "review":
        setAnswerData({ ...answerData, review: value });
        break;
      case "username":
        setAnswerData({ ...answerData, username: value });
        break;
      case "email":
        setAnswerData({ ...answerData, email: value });
        break;
      default:
        setAnswerData({ ...answerData });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answerData);
    submitForm(answerData);
    setAnswerData(initialData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <RadioButton answerData={answerData} handleChange={handleChange} />
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <Checkbox answerData={answerData} handleChange={handleChange} />
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          value={answerData.review}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          value={answerData.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Leave us your email pretty please??
        <input
          type="email"
          name="email"
          value={answerData.email}
          onChange={handleChange}
        />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}

export default Form;
