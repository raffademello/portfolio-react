import React, { useEffect, Component } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faTwitterSquare } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitterSquare,
  faLinkedin,
  faFlickr,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Typography from "@material-ui/core/Typography";
import profile_pic from "../assets/images/linkedin.png";
import $ from "jquery";
import ReactGa from 'react-ga'

export default class Home extends Component {

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center align-items-center my-4 flex-column">
          <div
            className="picture"
            style={{ backgroundImage: `url(${profile_pic})` }}
          ></div>
        </div>

        <div className="about-resume">
          <h1>Rafael de Melo</h1>
          <p>Fullstack com foco em frontend</p>
          <div className="social">
            <a
              className="mx-3"
              href="https://www.linkedin.com/in/raffademello/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              className="ml-3"
              href="https://github.com/raffademello?tab=repositories"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
        <div className="home-resume">
          <div className="resume d-flex flex-column">
            <h3>Info</h3>
            <p>
              Rafael de Melo, desenvolvedor full stack com foco em frontend.{" "}
              <br />
              Natural de São Vicente{"(SP)"},  pós graduado em Sistemas de Informação pela Faculdade do Litoral Paulista
              (FALS). <br /><br />
              - 13 anos de experiência em desenvolvimento de websites e sistemas, com foco em otimização e responsividade<br />
              - Sólido conhecimento em HTML, CSS e JAVASCRIPT.<br />
              - Excelente atendimento ao cliente e aos colaboradores.<br />
              - Boa vivência com linguagens de programação backend como PHP e .NET<br />
              - Inúmeros projetos desenvolvidos utilizando React JS e APIS.<br />
              - Inúmeros projetos utilizando Wordpress com e sem o page builder Elementor. Além da vicência com Custom Post Types e Advanced Custom Fields.<br />
              - Experiência com banco de dados<br />
              - Apoio a novos colaboradores sobre implementação de melhores práticas<br />
              - Vivência em reuniões diárias utilizando metologia Scrum<br />
              - Vivência com ferramentas de gerenciamento de tarefas como JIRA e AZURE
              <br /><br />
              Para mais informações como experiências profissionais e skills, acesse o meu <a
                target="_blank"
                href="https://rmsites.com.br/melo_cv.docx"
              >
                CV
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
