import foto1 from "../../../pages/questions-page/assets/brush.webp";
import foto2 from "../../../pages/questions-page/assets/brush_2.webp";
import foto3 from "../../../pages/questions-page/assets/brush_3.webp";
import foto4 from "../../../pages/questions-page/assets/brush_8.webp";

export const questionsData = [
  {
    id: 1,
    name: "Тест 1",
    description: "Описание теста 1",
    questions: [
      {
        id: 11,
        title: "Вопрос 1",
        img: foto1,
        descr: "Описание вопроса 1",
        answer: [
          { answerName: "Ответ 1", id: 111, right: true },
          { answerName: "Ответ 2", id: 112 },
          { answerName: "Ответ 3", id: 113 },
          { answerName: "Ответ 4", id: 114 },
        ],
      },
      {
        id: 12,
        title: "Вопрос 2",
        img: foto2,
        descr: "Описание вопроса 2",
        answer: [
          { answerName: "Ответ 21", id: 211 },
          { answerName: "Ответ 22", id: 212, right: true },
          { answerName: "Ответ 23", id: 213 },
          { answerName: "Ответ 24", id: 214 },
        ],
      },
      {
        id: 13,
        title: "Вопрос 3",
        img: foto3,
        descr: "Описание вопроса 3",
        answer: [
          { answerName: "Ответ 31", id: 311 },
          { answerName: "Ответ 32", id: 312 },
          { answerName: "Ответ 33", id: 313, right: true },
          { answerName: "Ответ 34", id: 314 },
        ],
      },
      {
        id: 14,
        title: "Вопрос 4",
        img: foto4,
        descr: "Описание вопроса 4",
        answer: [
          { answerName: "Ответ 41", id: 411 },
          { answerName: "Ответ 42", id: 412 },
          { answerName: "Ответ 43", id: 413 },
          { answerName: "Ответ 44", id: 414, right: true },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Тест 2",
    description: "Описание теста 2",
    questions: [
      {
        id: 15,
        title: "Вопрос 5",
        img: foto1,
        descr: "Описание вопроса 5",
        answer: [
          { answerName: "Ответ 51", id: 511 },
          { answerName: "Ответ 52", id: 512, right: true },
          { answerName: "Ответ 53", id: 513 },
          { answerName: "Ответ 54", id: 514 },
        ],
      },
      {
        id: 16,
        title: "Вопрос 6",
        img: foto2,
        descr: "Описание вопроса 6",
        answer: [
          { answerName: "Ответ 61", id: 611 },
          { answerName: "Ответ 62", id: 612 },
          { answerName: "Ответ 63", id: 613, right: true },
          { answerName: "Ответ 64", id: 614 },
        ],
      },
      {
        id: 17,
        title: "Вопрос 7",
        img: foto3,
        descr: "Описание вопроса 7",
        answer: [
          { answerName: "Ответ 71", id: 711, right: true },
          { answerName: "Ответ 72", id: 712 },
          { answerName: "Ответ 73", id: 713 },
          { answerName: "Ответ 74", id: 714 },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Тест 3",
    description: "Описание теста 3",
    questions: [
      {
        id: 19,
        title: "Вопрос 9",
        img: foto1,
        descr: "Описание вопроса 9",
        answer: [
          { answerName: "Ответ 91", id: 911 },
          { answerName: "Ответ 92", id: 912 },
          { answerName: "Ответ 93", id: 913 },
          { answerName: "Ответ 94", id: 914, right: true },
        ],
      },
      {
        id: 20,
        title: "Вопрос 10",
        img: foto2,
        descr: "Описание вопроса 10",
        answer: [
          { answerName: "Ответ 101", id: 1011 },
          { answerName: "Ответ 102", id: 1012 },
          { answerName: "Ответ 103", id: 1013 },
          { answerName: "Ответ 104", id: 1014, right: true },
        ],
      },
    ],
  },
];
