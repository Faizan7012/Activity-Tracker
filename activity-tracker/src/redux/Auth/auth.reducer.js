import {
  AUTH_ERROR,
  AUTH_LOADING,
  AUTH_LOGOUT,
  AUTH_SIGNIN_SUCCESS,
} from "./auth.types";
import jwt from "jwt-decode";

let ACTIVITYTRACKER = JSON.parse(localStorage.getItem("ACTIVITYTRACKER")) || {
  token: "",
  username: "",
  email: "",
};

if (ACTIVITYTRACKER.token !== "") {
  const Decoded_Email = jwt(ACTIVITYTRACKER.token) || "";

  if (Decoded_Email) {
    ACTIVITYTRACKER.email = Decoded_Email.email;
  }
}

let initState = {
  loading: false,
  error: false,
  isAuth: ACTIVITYTRACKER.token === "" ? false : true,
  token: ACTIVITYTRACKER.token,
  data: {
    token: ACTIVITYTRACKER.token,
    username: ACTIVITYTRACKER.username,
    email: ACTIVITYTRACKER.email,
  },
  email: ACTIVITYTRACKER.email,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTH_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case AUTH_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case AUTH_SIGNIN_SUCCESS: {
      let decoded = jwt(action.token.token);
      return {
        ...state,
        loading: false,
        error: false,
        token: action.token.token,
        isAuth: true,
        data: action.token,
        email: decoded.email,
      };
    }
    case AUTH_LOGOUT: {
      return {
        ...state,
        loading: false,
        error: false,
        isAuth: false,
        token: "",
        data: "",
        email: "",
      };
    }
    default: {
      return state;
    }
  }
};
