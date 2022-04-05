import React, { Component } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Icon,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import formValidation from "../services/formValidation";

const inicialState = {
  nome: "",
  email: "",
  assunto: "",
  mensagem: "",
  errors: [],
};

export default class Contato extends Component {
  state = inicialState;
  constructor() {
    super();
    this.validator = new formValidation();
  }
  
  handleOnChange = (event) => {
    const valor = event.target.value;
    const nomeCampo = event.target.name;
    this.setState({
      [nomeCampo]: valor,
    });
  };

  handleSubmit = event => {
    try{
      event.preventDefault();
      const data = {
        nome: this.state.nome,
        email: this.state.email,
        assunto: this.state.assunto,
        mensagem: this.state.mensagem,
      }
      this.validator.validate(data);
      this.handleCleanInput();
    }catch (error) {
      const errors = error.errors;
      this.setState({
        errors: errors
      });
    }
  }

  handleCleanInput = () => {
    this.setState(inicialState);
  };

  render() {
    return (
      <>
        <h2 className="mb-2">Entre em contato</h2>
        <small>Dúvidas, orçamentos e parcerias, estou a disposição</small>
        {this.state.errors && this.state.errors.length > 0 && (
          <Grid container spacing={1} className="mt-4 grid-error">
            {this.state.errors.map(msg => {
                return (
                  <Grid item xs={12} spacing={1}>
                    {msg}
                  </Grid>
                );
              })}
          </Grid>
        )}
        <form autoComplete="false" className="my-4">
          <Grid container spacing={2} className="justify-content-around">
            <Grid item xs={12} md={6}>
              <FormControl>
                <TextField
                  id="nome"
                  label="Nome" variant="outlined"
                  aria-describedby="Name Field"
                  value={this.state.nome}
                  name="nome"
                  onChange={this.handleOnChange}
                />
              </FormControl>
              <FormControl>
                <TextField
                  id="email"
                  label="E-mail" variant="outlined"
                  aria-describedby="Email field"
                  className="my-3"
                  value={this.state.email}
                  name="email"
                  onChange={this.handleOnChange}
                />
              </FormControl>
              <FormControl>
                <TextField
                  id="assunto"
                  label="Assunto" variant="outlined"
                  aria-describedby="Assunto Field"
                  value={this.state.assunto}
                  name="assunto"
                  onChange={this.handleOnChange}
                />
              </FormControl>
              <FormControl>
                <TextField
                  id="mensagem"
                  placeholder="Digite aqui a sua mensagem"
                  label="Mensagem" variant="outlined"
                  multiline
                  margin="normal"
                  size="larger"
                  value={this.state.mensagem}
                  name="mensagem"
                  onChange={this.handleOnChange}
                />
              </FormControl>
              <FormControl>
                <div className="d-flex justify-content-end mt-2">
                  <Button variant="contained" className="mr-3" color="primary" onClick={this.handleCleanInput}>
                    Limpar
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSubmit}
                  >
                    Enviar
                  </Button>
                </div>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="contact-info d-flex flex-column">
                <h3>Contato</h3>
                <p><AccountCircleIcon/> Rafael de Melo
                </p>
                <p>
                  <EmailIcon/>
                  contato@rmsites.com.br
                </p>
                <p>
                  <PhoneIcon/> (13) 99185-1159
                </p>

              </div>
            </Grid>
          </Grid>
        </form>
      </>
    );
  }
}
