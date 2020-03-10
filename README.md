# logReducer function for reducer
this is a simple function for reducer. it's a pure function, not a react component or react hook (which is good/not for react concurrent mode).

# Usage
```javascript
  import logReducer from "@abdulghani/logreducer"
  import reducer from "somewhere"

  const loggedReducer = logReducer(reducer);

  const MyApp = () => {
    const [state, dispatch] = useReducer(loggedReducer);

    // render function
  }
```