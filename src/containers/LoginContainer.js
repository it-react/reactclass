import React from "react";
import Login from "../components/login";

class LoginContainer extends React.Component {
  render() {
    const OnLoginUser = (login) => {
      console.log(login, "Params");
    };

    return <Login onLogin={OnLoginUser} />;
  }
}

export default LoginContainer;
