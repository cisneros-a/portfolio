import { createContext } from "react";

const Context = createContext({
  isIntroDone: true,
  setIsIntroDone: () => {},
});

export default Context;
