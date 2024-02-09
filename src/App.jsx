/* eslint-disable */
// import { useState } from "react";
import { Navbar, Banner, Shipping, Main, Footer } from "./components";
import "./App.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Banner />
        <Shipping />
        <Main />
      </Container>
      <Footer />
    </div>
  );
}

const Container = ({ children }) => (
  <main className="container">{children}</main>
);

export default App;
