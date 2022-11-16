import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContainer, CardsContainer, SearchBar, Theme } from "./components";
import store from "./store/store";

const App = () => {
  return (
    <Theme>
      <BrowserRouter>
      <AppContainer>
        <Provider store={store}>
          <SearchBar />
          <Routes>
            <Route path="/" element={<CardsContainer/>}/>
          </Routes>
        </Provider>
      </AppContainer>
      </BrowserRouter>
    </Theme>
  );
};

export default App;
