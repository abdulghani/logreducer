import { Reducer } from "react";
import { Action } from "./constants";

const logReducer = (reducer: Reducer<any, Action>) => {
  // don't log them if not using dev mode
  if (
    process.env.NODE_ENV !== "development" ||
    typeof navigator === "undefined"
  ) {
    return reducer;
  }

  return (state: any, action: Action) => {
    const prevState: any = { ...state };
    const nextState: any = reducer(state, action);

    console.groupCollapsed(
      `%cAction: %c${action.type} %c${logTime()}`,
      "color: #9e9e9e",
      "color: white",
      "color: #9e9e9e"
    );
    console.log("%cPrev state: ", "color: #00A7F7", prevState);
    console.log("%cAction:", "color: #9e9e9e", action);
    console.log("%cNext state: ", "color: #47B04B", nextState);
    console.groupEnd();

    return nextState;
  };
};

const logTime = (): string => {
  const time: Date = new Date();

  const isPm: boolean = (time.getHours() > 12 && true) || false;
  const hour: number = (isPm && time.getHours() - 12) || time.getHours();
  const minutes: number = time.getMinutes();
  const seconds: number = time.getSeconds();
  const milliseconds: number = time.getMilliseconds();

  return `${hour}:${minutes}:${seconds} ${
    (!isPm && "am") || "pm"
  } ${milliseconds}`;
};

export default logReducer;
