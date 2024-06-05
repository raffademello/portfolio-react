import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import parse from "html-react-parser";
import ReactGa from 'react-ga'

import metaspeed from "../assets/images/metaspeed-asics.jpg";
import logoONR from "../assets/images/icone-onr.png"
import editais from "../assets/images/editais.jpg";
import soc from "../assets/images/soc.jpg";
import petfriendsLogo from "../assets/images/img-petfriends-logo.png";
import perretti from "../assets/images/perretti.jpg";
import onr from "../assets/images/onr-registradores.jpg";
import portfolioimg from "../assets/images/portfolio-react.jpg";
import arisp from "../assets/images/arisp.jpg";
import ararisp from "../assets/images/ar-arisp.jpg";
import oficioeletronico from "../assets/images/oficio-eletronico.jpg";
import capaPetFriends from "../assets/images/capa-petfriends.png"
import AsiscWebSite from "../assets/images/Metaspeed-ASICS-Lab.png";
import EditaiscWebSite from "../assets/images/Editais-Online.png";
import SocWebSite from "../assets/images/soc-website.png";
import ArispWebsite from "../assets/images/Arisp.png"
import PortfolioWebSite from "../assets/images/portfolio-website.png";
import RegistradoresWebSite from "../assets/images/registradores-website.png";
import PerrettiWebSite from "../assets/images/perretti-website.png";
import OficioWebSite from "../assets/images/oficio-website.png";
import ArArispWebSite from "../assets/images/Ar-Arisp.png";
import FICWebSite from "../assets/images/fic-website.png";
import AsicsDiaDasMaesWebSite from "../assets/images/asics-dia-das-maes.png";
import AsicsTecnologiasWebSite from "../assets/images/asics-tecnologias.png";
import AsicsLabWebSite from "../assets/images/asics-lab.png";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    width: "100%",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: "20px 0",
    "& > * + *": {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  media: {
    height: 140,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  descriptionModal: {
    color: "#111111",
    textAlign: "left",
    fontWeight: "bold"
  },
  titleProject: {
    fontSize: "20px",
    color: "#26a69a"
  },
  titlePortifolio:{
    fontSize:"30px",
    color: "#26a69a",
    margin:"15px 0"
  },
  "@media (max-width: 600px)": {
    titlePortifolio: {
      fontSize:'18px',
      textAlign:'center',
      marginBottom:'20px',
      marginTop:'0',
      display:'inline-block'
    }
}
}));

const Portfolio = () => {
  const [open, setOpen] = useState(false); /* open Modal */
  const [titleProject, settitleProject] = useState("");
  const [detailsProject, setdetailsProject] = useState("");
  const [websiteImgDetails, setwebsiteImgDetails] = useState("");
  const [linkProject, setlinkProject] = useState("");
  const [loading, setLoading] = useState(false);

  const portfoliosReact = [
    {
      title: "Asics Lab",
      description: "uma plataforma interativa que possui um comparador de modelos, cupons de descontos exclusivos, dicas de como escolher o tênis ideal, além de outras interações. Atuei na manutenção geral do website e na implementação das traduções para exibição em diferentes países. Desenvolvido com React JS + Gatsby.",
      imageUrl: AsicsLabWebSite,
      websiteImgDetails: AsicsLabWebSite,
      link: "https://lab.asics.com/br/",
    },
    {
      title: "FIC ONR",
      description: "Sistema de Gerenciamento do Recolhimento das Cotas de Participações no Fundo para Implementação e Custeio do Serviço de Registro Eletrônico de Imóveis. Desenvolvido com React JS, Typescript e TailWind",
      imageUrl: FICWebSite,
      websiteImgDetails: FICWebSite,
      link: "https://fic.srei.onr.org.br/auth/",
    },
    {
      title: "Asics MetaSpeed",
      description: "Landing Page responsivo desenvolvido em React + Gatsby Js.<br>\n ",
      imageUrl: AsiscWebSite,
      websiteImgDetails: AsiscWebSite,
      link: "https://lab.asics.com.br/metaspeed/",
    },
    {
      title: "LP Dia das mães ",
      description: "Landing Page responsivo desenvolvido em React + Gatsby Js.<br>\n ",
      imageUrl: AsicsDiaDasMaesWebSite,
      websiteImgDetails: AsicsDiaDasMaesWebSite,
      link: "https://lab.asics.com/br/dia-das-maes/",
    },
    {
      title: "LP Asics Tecnologias",
      description: "Landing Page responsivo desenvolvido em React + Gatsby Js.<br>\n ",
      imageUrl: AsicsTecnologiasWebSite,
      websiteImgDetails: AsicsTecnologiasWebSite,
      link: "https://lab.asics.com/br/tecnologias/",
    }, 
    {
      title: "Editais ONR",
      description: "Sistema Desenvolvido em React + Redux + .NET Core.<br>\n Neste projeto atuei na parte de frontend, cuidando de questões como layout, validaçao de campos e de alguns fluxos no redux. ",
      imageUrl: EditaiscWebSite,
      websiteImgDetails: EditaiscWebSite,
      link: "https://onr-portaleditaisonline-develop-swqmewq6ja-rj.a.run.app/",
    },
    {
      title: "Portfolio",
      description: "Portfólio desenvolvido em ReactJS, Sass + CSS3. O Código está disponível para avaliação no meu github (portfolio-react)",
      imageUrl: PortfolioWebSite,
      websiteImgDetails: PortfolioWebSite,
      link: "https://github.com/raffademello/portfolio-react",
    },

  ];

  const portifoliosWP = [
    {
      title: "Petfriends",
      description: "Website desenvolvido em Wordpress + Elementor. Atuei no desenvolvimento total do projeto",
      imageUrl: capaPetFriends,
      websiteImgDetails: capaPetFriends,
      link: "https://petfriends.com.br/turma-da-monica-pets/",
    },
    {
      title: "J Perretti",
      description: "Website desenvolvido em Wordpress + Elementor. Atuei no desenvolvimento total do projeto",
      imageUrl: PerrettiWebSite,
      websiteImgDetails: PerrettiWebSite,
      link: "http://perreti.tpix.com.br/",
    },
    {
      title: "SOC",
      description: "Website desenvolvido em Wordpress + Elementor. Atuei no desenvolvimento total do projeto",
      imageUrl: SocWebSite,
      websiteImgDetails: SocWebSite,
      link: "https://www.soc.com.br/",
    },
  ]

  const portifoliosNET = [
    {
      title: "ONR Registradores",
      description: "Website institucional desenvolvido em .NET. Atuei na implementação do layout em HTML5, Sass + CSS3 e Javascript",
      imageUrl: RegistradoresWebSite,
      websiteImgDetails: RegistradoresWebSite,
      link: "http://registradores.onr.org.br/",
    },
    {
      title: "Arisp",
      description: "Website institucional desenvolvido em .NET. Atuei na implementação do layout em HTML5, Sass + CSS3 e Javascript",
      imageUrl: ArispWebsite,
      websiteImgDetails: ArispWebsite,
      link: "https://www.arisp.com.br/",
    },
    {
      title: "AR Arisp",
      description: "Website institucional desenvolvido em .NET. Atuei na implementação do layout em HTML5, Sass + CSS3 e Javascript",
      imageUrl: ArArispWebSite,
      websiteImgDetails: ArArispWebSite,
      link: "https://ar.arisp.com.br/",
    },
    {
      title: "Ofício Eletrônico",
      description: "Sistema que disponibiliza informações registrais a autoridades públicas ou servidores designados.<br>\n Projeto desenvolvido em .NET MVC. Atuei na implementaçao do layout, que foi desenvolvido em HTML5, CSS3 e javascript. ",
      imageUrl: OficioWebSite,
      websiteImgDetails: OficioWebSite,
      link: "https://oficioeletronico.com.br/",
    },
  ]

  const handleOpen = (titleProject, detailsProject, websiteImgDetails, linkProject) => {
    setOpen(true);
    settitleProject(titleProject);
    setdetailsProject(detailsProject);
    setwebsiteImgDetails(websiteImgDetails);
    setlinkProject(linkProject);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  if (loading) {
    return <LinearProgress color="secondary" />;
  } else {
    return (
      <>
      <Typography variant="h5" gutterBottom>
        Últimos Projetos
      </Typography>
        <Typography
          gutterBottom
          variant="h2"
          component="subtitle1"
          className={classes.titlePortifolio}
        >
          <b>Projetos desenvolvidos em React JS</b>
        </Typography>
        <div className="display-projects mb-4">
          {portfoliosReact.map((row) => (
            <Card className={classes.root} key={row.id}>
              <CardActionArea onClick={() => handleOpen(row.title, row.description, row.websiteImgDetails, row.link)}>
                <CardMedia
                  className={classes.media}
                  image={row.imageUrl}
                  title={row.title}
                />
                <CardContent className="d-flex flex-column" align="center">
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="subtitle1"
                    className={classes.titleProject}
                  >
                    <b>{row.title}</b>
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/*<CardActions className="d-flex justify-content-center">
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleOpen(row.title, row.description, row.websiteImgDetails, row.link)}
                >
                  Detalhes
                </Button>
              </CardActions>*/}
            </Card>
          ))}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title"
            fullWidth
            className="modal-projects"
          >
            <DialogTitle id="max-width-dialog-title"
              className={classes.titleModal}>
              {titleProject}
            </DialogTitle>
            <CardMedia
              image={websiteImgDetails}
              title="Asics Metaspeed"
            />
            <DialogContent>
              <DialogTitle className="description-info-modal" id="max-width-dialog-title text-left">
                Descrição
              </DialogTitle>
              <DialogContentText className={classes.descriptionModal}>{parse(detailsProject)} Clique <a target="_blank" href={linkProject}>aqui</a> para acessar.</DialogContentText>
            </DialogContent>

            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Fechar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <Typography
          gutterBottom
          variant="h2"
          component="subtitle1"
          className={classes.titlePortifolio}
        >
          <b>Projetos desenvolvidos em Wordpress</b>
        </Typography>
        <div className="display-projects odd mb-4">
          {portifoliosWP.map((row) => (
            <Card className={classes.root} key={row.id}>
              <CardActionArea onClick={() => handleOpen(row.title, row.description, row.websiteImgDetails, row.link)}>
                <CardMedia
                  className={classes.media}
                  image={row.imageUrl}
                  title="Contemplative Reptile"
                />
                <CardContent className="d-flex flex-column" align="center">
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="subtitle1"
                    className={classes.titleProject}
                  >
                    <b>{row.title}</b>
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/*<CardActions className="d-flex justify-content-center">
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleOpen(row.title, row.description, row.websiteImgDetails, row.link)}
                >
                  Detalhes
                </Button>
              </CardActions>*/}
            </Card>
          ))}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title"
            fullWidth
            className="modal-projects"
          >
            <DialogTitle id="max-width-dialog-title"
              className={classes.titleModal}>
              {titleProject}
            </DialogTitle>
            <CardMedia
              image={websiteImgDetails}
              title="Asics Metaspeed"
            />
            <DialogContent>
              <DialogTitle className="description-info-modal" id="max-width-dialog-title text-left">
                Descrição
              </DialogTitle>
              <DialogContentText className={classes.descriptionModal}>{parse(detailsProject)} Clique <a target="_blank" href={linkProject}>aqui</a> para acessar.</DialogContentText>
            </DialogContent>

            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Fechar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <Typography
          gutterBottom
          variant="h2"
          component="subtitle1"
          className={classes.titlePortifolio}
        >
          <b>Projetos desenvolvidos em .NET</b>
        </Typography>
        <div className="display-projects">
          {portifoliosNET.map((row) => (
            <Card className={classes.root} key={row.id}>
              <CardActionArea onClick={() => handleOpen(row.title, row.description, row.websiteImgDetails, row.link)}>
                <CardMedia
                  className={classes.media}
                  image={row.imageUrl}
                  title="Contemplative Reptile"
                />
                <CardContent className="d-flex flex-column" align="center">
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="subtitle1"
                    className={classes.titleProject}
                  >
                    <b>{row.title}</b>
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/*<CardActions className="d-flex justify-content-center">
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleOpen(row.title, row.description, row.websiteImgDetails, row.link)}
                >
                  Detalhes
                </Button>
              </CardActions>*/}
            </Card>
          ))}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title"
            fullWidth
            className="modal-projects"
          >
            <DialogTitle id="max-width-dialog-title"
              className={classes.titleModal}>
              {titleProject}
            </DialogTitle>
            <CardMedia
              image={websiteImgDetails}
              title="Asics Metaspeed"
            />
            <DialogContent>
              <DialogTitle className="description-info-modal" id="max-width-dialog-title text-left">
                Descrição
              </DialogTitle>
              <DialogContentText className={classes.descriptionModal}>{parse(detailsProject)} Clique <a target="_blank" href={linkProject}>aqui</a> para acessar.</DialogContentText>
            </DialogContent>

            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Fechar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </>
    );
  }
};

export default Portfolio;
