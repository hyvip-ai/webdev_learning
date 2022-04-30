import { Main } from "../types/main";
import { v4 as uuid } from "uuid";

export const blogs: Main[] = [
  {
    id: uuid(),
    title: "Let vs Var vs Const in Javascript",
    url: "https://medium.com/@larry.sassainsworth/let-vs-var-vs-const-in-javascript-8b898f868394",
  },
];
