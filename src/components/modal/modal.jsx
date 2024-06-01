import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useId } from "react-id-generator";

import { ModalTest } from "./modal-test";
import { ModalQuest } from "./modal-quest";
import { addQuestion, addTest } from "../../redux/test/test-actions";

import styles from "./modal.module.css";

export const Modal = ({ onOpenModal, params }) => {
  const dispatch = useDispatch();
  const [nameValue, setNameValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [valueQuestion, setValueQuestion] = useState({});
  const path = useLocation();
  const [htmlId] = useId();

  const onChangeAvatar = (e) => {
    console.log(e.target.files[0]);
  };

  const onChangeValue = (e) => {
    e.target.id === "1"
      ? setNameValue(e.target.value)
      : setDescriptionValue(e.target.value);
  };

  const onChangeQuestions = (e) => {
    if (e.target.id === "3") {
      setValueQuestion({ ...valueQuestion, answer1: e.target.value });
    } else if (e.target.id === "4") {
      setValueQuestion({ ...valueQuestion, answer2: e.target.value });
    } else if (e.target.id === "5") {
      setValueQuestion({ ...valueQuestion, answer3: e.target.value });
    } else if (e.target.id === "6") {
      setValueQuestion({ ...valueQuestion, answer4: e.target.value });
    }
  };

  const onAddTest = () => {
    dispatch(
      addTest({ id: htmlId, name: nameValue, description: descriptionValue })
    );

    onOpenModal();
  };

  const onAddQuestion = () => {
    dispatch(
      addQuestion({
        testId: params.questionId,
        id: htmlId,
        title: nameValue,
        descr: descriptionValue,
        answer: [
          { answerName: valueQuestion?.answer1, id: htmlId + 1 },
          { answerName: valueQuestion?.answer2, id: htmlId + 2 },
          { answerName: valueQuestion?.answer3, id: htmlId + 3 },
          { answerName: valueQuestion?.answer4, id: htmlId + 4, right: true },
        ],
      })
    );
    onOpenModal();
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.box}>
          {!path.pathname.includes("question") && (
            <ModalTest onChangeValue={onChangeValue} />
          )}
          {path.pathname.includes("question") && (
            <ModalQuest
              onChangeAvatar={onChangeAvatar}
              onChangeValue={onChangeValue}
              onChangeQuestions={onChangeQuestions}
            />
          )}
          <button
            className={styles.btnAdd}
            onClick={
              path.pathname.includes("question") ? onAddQuestion : onAddTest
            }
          >
            Добавить {path.pathname.includes("question") ? "вопрос" : "тест"}
          </button>
          <button className={styles.btnClose} onClick={onOpenModal}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
