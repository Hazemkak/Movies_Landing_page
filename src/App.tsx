import React from "react";
import MovieContainer from "./components/movies/MovieContainer";
import Navbar from "./components/partials/Navbar";
import Sidebar from "./components/partials/Sidebar";
import "./styles/global.css";
import "./styles/main.css";
import "./styles/Details.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Sidebar />
        <MovieContainer />
      </Provider>
    </>
  );
}

export default App;
