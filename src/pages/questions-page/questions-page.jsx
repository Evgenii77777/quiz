import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import { Modal } from "../../components/modal";

import styles from "./questions-page.module.css";
import { addAllTest } from "../../redux/test/test-actions";
import { questionsData } from "../../components/main/assets/questionsData";

export const QuestionsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const allTest = useSelector((state) => state.test.test);
  useEffect(() => {
    if (!allTest) {
      dispatch(addAllTest(questionsData));
    }
  }, [allTest, dispatch]);
  const [value, setValue] = useState("");
  const [check, setCheck] = useState([]);
  const [checkValue, setCheckValue] = useState([]);
  const [isModal, setIsModal] = useState(false);

  const question = allTest?.filter((el) => el.id === Number(params.questionId));

  const onChangeValue = (event) => {
    setValue(event.target.value);
  };

  const onChangeCheck = (event) => {
    setCheck([...check, event.target.id]);
    setCheckValue([...checkValue, value]);
  };

  const onOpenModal = () => {
    setIsModal(!isModal);
  };

  return (
    <section>
      {isModal && (
        <Modal
          question={question[0]}
          params={params}
          onOpenModal={onOpenModal}
        />
      )}
      <h1 className={styles.title}>{question && question[0]?.name}</h1>
      <ul>
        {question &&
          question[0]?.questions?.map((el) => (
            <li className={styles.item} key={el.id}>
              <h2>{el.title}</h2>
              {el.img && (
                <img className={styles.imgQuestion} src={el.img} alt="foto" />
              )}
              <p>{el.descr}</p>
              <ul>
                {el?.answer.map((e) => (
                  <li
                    key={e.id}
                    className={cn({
                      [styles.rigthAnswer]:
                        checkValue.includes(String(e.id)) &&
                        check.includes(String(el.id)) &&
                        e.right,
                      [styles.failAnswer]:
                        checkValue.includes(String(e.id)) &&
                        check.includes(String(el.id)) &&
                        !e.right,
                    })}
                  >
                    <input
                      type="radio"
                      name="radio"
                      value={e.id}
                      onChange={onChangeValue}
                    />
                    {e.answerName}
                  </li>
                ))}
              </ul>
              <button
                className={styles.btnAnswer}
                type="button"
                onClick={onChangeCheck}
                id={el.id}
                disabled={check.includes(String(el.id))}
              >
                Ответить
              </button>
            </li>
          ))}
      </ul>
      <button
        type="button"
        className={styles.btnAddQuestion}
        onClick={onOpenModal}
      >
        Добавить вопрос
      </button>
    </section>
  );
};
