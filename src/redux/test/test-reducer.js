import { createReducer } from "@reduxjs/toolkit";
import { addAllTest, addQuestion, addTest, editText } from "./test-actions";

export const testReducer = createReducer({}, (builder) => {
  builder.addCase(addAllTest, (state, { payload }) => {
    state.test = [...payload];
  });
  builder.addCase(addTest, (state, { payload }) => {
    state.test = [...state.test, payload];
  });
  builder.addCase(addQuestion, (state, { payload }) => {
    state.test = state.test.map((el) =>
      String(el.id) !== payload.testId
        ? el
        : {
            ...el,
            questions: el.questions ? [...el.questions, payload] : [payload],
          }
    );
  });
  builder.addCase(editText, (state, { payload }) => {
    state.test = state.test.map((el) =>
      el.id === Number(payload.id) ? { ...el, name: payload.text } : el
    );
  });
});
