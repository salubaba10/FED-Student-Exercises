import { useReducer } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";

// declare a reducer function which accepts the current state and the action object
const reducer = (state, action) => {
  // if the action type is SET_VALUE
  if (action.type === "SET_VALUE") {
    // update the state for value passed in the action payload
    return {
      ...state,
      value: +action.payload,
    };
  }

  // if the action type is mm-cm
  if (action.type === "mm-cm") {
    // calculate the result for the mm to cm
    const result = state.value * 10;

    // update the state for result and operation
    return {
      ...state,
      result,
      operation: "mm-cm",
    };
  }

  // if the action type is cm-m
  if (action.type === "cm-m") {
    // calculate the result for the cm to m
    const result = state.value * 100;

    // update the state for result and operation
    return {
      ...state,
      result,
      operation: "cm-m",
    };
  }

  // if the action type is m-km
  if (action.type === "m-km") {
    // calculate the result for the m to km
    const result = state.value * 1000;

    // update the state for result and operation
    return {
      ...state,
      result,
      operation: "m-km",
    };
  }

  // else return the new state as the previous state
  return state;
};

export const Converter = () => {
  // the useReducer hook accepts the reducer function as the first argument and an object as the initial state as the second argument and returns a tuple (array of  2 items) where the first item is the new state value returned from the reducer function and the second item as a dispatch function which can be used to dispatch any action
  const [state, dispatch] = useReducer(reducer, {
    value: 0,
    result: 0,
    operation: undefined,
  });

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          padding: 5,
          margin: 5,
          border: "1px solid black",
        }}
      >
        <TextField
          fullWidth
          sx={{ my: 2 }}
          type="number"
          label="Enter your number"
          // on change we dispatch an action SET_VALUE with a payload as the value from the text input
          onChange={({ target }) => {
            dispatch({ type: "SET_VALUE", payload: target.value });
          }}
        />
        <ButtonGroup>
          <Button
            sx={{ textTransform: "lowercase" }}
            // on change we dispatch an action mm-cm
            onClick={() => {
              dispatch({ type: "mm-cm" });
            }}
            variant={state.operation === "mm-cm" ? "contained" : "outlined"}
          >
            mm - cm
          </Button>
          <Button
            sx={{ textTransform: "lowercase" }}
            // on change we dispatch an action cm-m
            onClick={() => {
              dispatch({ type: "cm-m" });
            }}
            variant={state.operation === "cm-m" ? "contained" : "outlined"}
          >
            cm - m
          </Button>
          <Button
            sx={{ textTransform: "lowercase" }}
            // on change we dispatch an action m-km
            onClick={() => {
              dispatch({ type: "m-km" });
            }}
            variant={state.operation === "m-km" ? "contained" : "outlined"}
          >
            m - km
          </Button>
        </ButtonGroup>
      </Box>
      {state.result ? (
        <Box
          sx={{
            textAlign: "center",
            padding: 5,
            margin: 5,
            border: "1px solid black",
          }}
        >
          <Typography variant="h3" gutterBottom>
            Result: {state.result}
          </Typography>
        </Box>
      ) : null}
    </>
  );
};
