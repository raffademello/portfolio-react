import React, { Component } from "react";
import {slide as Menu} from 'react-burger-menu';
import { Link } from "react-router-dom";

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
          menuOpen : false
        }
      }
    
      handleStateChange(state){
        this.setState({menuOpen:state.isOpen})
      }
    
      closeMenu(){
        this.setState({menuOpen:false})
      }

      render() {
          console.log(this.state.menuOpen);
        return (
            <>
            <Menu 
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}>
                <Link to="/" onClick={() => this.closeMenu()}>Home</Link>
                <Link to="/portfolio" onClick={() => this.closeMenu()}>Portfolio</Link>
                <Link to="/contato" onClick={() => this.closeMenu()}>Contato</Link>
            </Menu>
        </>
    )}
}