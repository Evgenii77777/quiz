export const ModalQuest = ({ onChangeValue, onChangeQuestions }) => (
  <>
    <label>
      Название
      <input id="1" type="text" onChange={onChangeValue} />
    </label>

    <label>
      Описание
      <input id="2" type="text" onChange={onChangeValue} />
    </label>
    <ul>
      <li>
        <label>
          Ответ 1
          <input id="3" type="text" onChange={onChangeQuestions} />
        </label>
      </li>
      <li>
        <label>
          Ответ 2
          <input id="4" type="text" onChange={onChangeQuestions} />
        </label>
      </li>
      <li>
        <label>
          Ответ 3
          <input id="5" type="text" onChange={onChangeQuestions} />
        </label>
      </li>
      <li>
        <label>
          Ответ 4
          <input id="6" type="text" onChange={onChangeQuestions} />
        </label>
      </li>
    </ul>
  </>
);
