import React, { Component } from "react";
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

export default class Home extends Component {
  componentDidMount() {
    $(".skillbar").each(function () {
      $(this)
        .find(".skillbar-bar")
        .animate(
          {
            width: $(this).attr("data-percent"),
          },
          500
        );
    });
  }

  render() {
    const skills = [
      "HTML5",
      "Bootstrap",
      "CSS3",
      "Sass",
      "Jquery",
      "React",
      "Gulp",
      "Grunt",
      "PHP",
      "Wordpress",
      "SEO",
      "Photoshop",
      "DEV OPS",
    ];

    /*const listskills = skills.map((skill) => (
      <div className="skillbar clearfix " data-percent="100%">
        <div className="skillbar-title">
          <span>{skill}</span>
        </div>
        <div className="skillbar-bar"></div>
        <div className="skill-bar-percent"></div>
      </div>
    ));*/
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
              href="https://www.flickr.com/photos/raffademello/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFlickr} size="2x" />
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
            <h3>Detalhes pessoais</h3>
            <p>
              Rafael de Melo, programador full stack com foco em frontend.{" "}
              <br />
              Formado em Sistemas de Informa????o na Faculdade do Litoral Paulista
              (FALS). <br />
              <br />
              <h3>Conhecimentos e Habilidades</h3>
              <strong>Frontend:</strong>
              <br />
              <br />
              Capacidade de propor e construir solu????es criativas de Front-end
              para atender aos requisitos definidos pelo Product Owner. Sempre
              com aten????o aos detalhes do layout desenvolvido, atuando em
              diferentes dispositivos (responsivo) e otimizado aos padr??es do
              Google Page Speed.<br /><br />
              - Javascript;<br />
              - ReactJS/Redux;<br />
              - Viv??ncia com Hooks<br />
              - JSX<br />
              - React Material UI<br />
              - HTML5 (boas pr??ticas e SEO)<br />
              - SASS/CSS/Compass<br />
              - Gulp/Grunt<br />
              - GIT<br />
              - Conhecimento em DEVOPS (Configura????o e manuten????o de ambiente Linux - LAMP) <br />
              - Utiliza????o de APIs REST <br />
              - Bootstrap <br />
              - Jquery <br /><br />

              <strong>Wordpress:</strong>
              <br /><br />
              - Desenvolvimento de temas, utilizando custom post type e advanced custom fields.<br />
              - Desenvolvimento de websites utilizando Page Builder Elementor<br />
              - Experi??ncia com PHP Estruturado e MVC<br />
              - Experi??ncia com banco de dados MySQL;<br />
              - Desenvolvimento de Temas customizados (PSD para HTML) <br />
              - Interatividade com API do facebook, Twitter e Instagram. <br />
              - Uso de ferramentas para otimiza????o de desempenho e performance<br /><br />
              <strong>.NET:</strong>
              <br /><br />
              - Experi??ncia frontend em projetos .NET Estruturado e MVC, atuando na manuten????o dos projeto, acessando todo o fluxo MCV com o objetivo de resolver problemas gerais. <br /><br />
              <strong>DEV OPS:</strong>
              <br />
              <br />- Configura????o de e-mail comercial usando o pr??prio dom??nio
              e integrando ao servidor de hospedagem.<br />
              - Cria????o e configura????o de Droplet Linux <br />
              - Linux: SSH, Cria????o de usu??rios, permiss??es, grupos. Configura????o de postfix, Dovecote Mais
              Informa????es no meu{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/raffademello/"
              >
                Perfil
              </a>{" "}
              do Linkedin.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
