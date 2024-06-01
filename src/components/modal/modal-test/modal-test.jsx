export const ModalTest = ({ onChangeValue }) => (
  <>
    <label>
      Название
      <input id="1" type="text" onChange={onChangeValue} />
    </label>
    <label>
      Описание
      <input id="2" type="text" onChange={onChangeValue} />
    </label>
  </>
);
