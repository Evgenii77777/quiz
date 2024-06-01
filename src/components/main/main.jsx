import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Modal } from "../modal";
import { questionsData } from "./assets/questionsData";
import { addAllTest, editText } from "../../redux/test/test-actions";

import styles from "./main.module.css";

export const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addAllTest(questionsData));
  }, [dispatch]);
  const allTest = useSelector((state) => state.test.test);
  const [isModal, setIsModal] = useState(false);
  const [value, setValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const onOpenModal = () => {
    setIsModal(!isModal);
  };

  const onClickInput = (e) => {
    e.preventDefault();
  };

  const onChangeEdit = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
    setValue(e.target.id);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Тесты</h1>
      <ul>
        {allTest?.map((el) => (
          <li className={styles.item} key={el.id}>
            <NavLink to={`question/${el.id}`}>
              <div className={styles.edit}>
                {(!isEdit || Number(el.id) !== Number(value)) && (
                  <h2>{el.name}</h2>
                )}
                {isEdit && Number(el.id) === Number(value) && (
                  <input
                    className={styles.input}
                    type="text"
                    value={el.name}
                    onChange={(e) =>
                      dispatch(editText({ text: e.target.value, id: value }))
                    }
                    onClick={(e) => onClickInput(e)}
                  />
                )}
                <button
                  className={styles.btnEdit}
                  onClick={(e) => onChangeEdit(e)}
                  id={el.id}
                >
                  {isEdit && Number(el.id) === Number(value)
                    ? "Сохранить"
                    : "Изменить"}
                </button>
              </div>
              <p>{el.description}</p>
            </NavLink>
          </li>
        ))}
      </ul>
      <button className={styles.btnOpen} type="button" onClick={onOpenModal}>
        Добавить тест
      </button>
      {isModal && <Modal onOpenModal={onOpenModal} />}
    </main>
  );
};
