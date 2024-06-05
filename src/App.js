import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import Container from "@material-ui/core/Container";
import Footer from "./components/Footer";
import SideMenu from "./components/SideMenu";
import ReactGA from "react-ga4";


export default class App extends Component {
  componentDidMount(){
    document.title = "Rafael de Melo - Desenvolvedor Web"
    ReactGA.initialize("G-4SDJPG6MVE");
    ReactGA.send(document.location.pathname);
  }
  render() {
    return (
      <>
        <HashRouter>
            <SideMenu pageWrapId={"page-wrap"}/>
              <div class="page-wrap">
              <Navbar />
              <Container maxWidth="md">
                <Routes />
              </Container>
            </div>
          <Footer />
        </HashRouter>
      </>
    )
  }
}

