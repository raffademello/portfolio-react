import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import Container from "@material-ui/core/Container";
import Footer from "./components/Footer";
import SideMenu from "./components/SideMenu";
import ReactGa from 'react-ga'


export default class App extends Component {
  componentDidMount(){
    document.title = "Rafael de Melo - Desenvolvedor Web"
    ReactGa.initialize('G-4SDJPG6MVE')
    // to report page view
    ReactGa.pageview(window.location.pathname + window.location.search);
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

