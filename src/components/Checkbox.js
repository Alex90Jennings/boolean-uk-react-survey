function Checkbox({ answerData, handleChange }) {
  return (
    <ul>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="swimming"
            checked={answerData.spendTime.swimming}
            onChange={handleChange}
          />
          Swimming
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="bathing"
            checked={answerData.spendTime.bathing}
            onChange={handleChange}
          />
          Bathing
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="chatting"
            checked={answerData.spendTime.chatting}
            onChange={handleChange}
          />
          Chatting
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="noTime"
            checked={answerData.spendTime.noTime}
            onChange={handleChange}
          />
          I don't like to spend time with it
        </label>
      </li>
    </ul>
  );
}

export default Checkbox;
