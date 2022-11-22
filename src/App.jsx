import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContainer, BottomContainer, CardDetail, CardsContainer, ErrorPage, SearchBar, Theme } from "./components";
import store from "./store/store";

const App = () => {
  return (
    <Theme>
      <BrowserRouter>
        <AppContainer>
          <Provider store={store}>
            <SearchBar />
            <BottomContainer>
              <Routes>
                <Route path="/" element={<CardsContainer />} />
                <Route path="pokemon/:pokemon" element={<CardDetail />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </BottomContainer>
          </Provider>
        </AppContainer>
      </BrowserRouter>
    </Theme>
  );
};

export default App;
