import { action, reducer } from "./constants";

const logReducer = (reducer: reducer) => {
  // don't log them if not using dev mode
  if (process.env.NODE_ENV !== "development") {
    return reducer;
  }

  return (state: any, action: action) => {
    const prevState = { ...state };
    const nextState = reducer(state, action);

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

const logTime = () => {
  const time = new Date();

  const isPm = (time.getHours() > 12 && true) || false;
  const hour = (isPm && time.getHours() - 12) || time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const milliseconds = time.getMilliseconds();

  return `${hour}:${minutes}:${seconds} ${(!isPm && "am") ||
    "pm"} ${milliseconds}`;
};

export default logReducer;
