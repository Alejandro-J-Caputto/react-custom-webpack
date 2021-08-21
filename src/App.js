import React from "react";
import logo from './assets/img/react-logo.png'
export const App = () => {
  return (
    <div>
      <h1>Welcome {new Date().toString()} updated again and again por patata </h1>
      <img src={logo} alt="" />
      <p>testeando</p>
    </div>
  );
};
