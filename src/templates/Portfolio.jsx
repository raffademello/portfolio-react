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

import metaspeed from "../assets/images/metaspeed-asics.jpg";
import editais from "../assets/images/editais.jpg";
import soc from "../assets/images/soc.jpg";
import blanc from "../assets/images/blanc.jpg";
import perretti from "../assets/images/perretti.jpg";
import onr from "../assets/images/onr-registradores.jpg";
import portfolioimg from "../assets/images/portfolio-react.jpg";
import arisp from "../assets/images/arisp.jpg";
import ararisp from "../assets/images/ar-arisp.jpg";
import oficioeletronico from "../assets/images/oficio-eletronico.jpg";

import AsiscWebSite from "../assets/images/Metaspeed-ASICS-Lab.png";
import EditaiscWebSite from "../assets/images/Editais-Online.png";
import SocWebSite from "../assets/images/soc-website.png";
import ArispWebsite from "../assets/images/Arisp.png"
import PortfolioWebSite from "../assets/images/portfolio-website.png";
import RegistradoresWebSite from "../assets/images/registradores-website.png";
import PerrettiWebSite from "../assets/images/perretti-website.png";
import OficioWebSite from "../assets/images/oficio-website.png";
import ArArispWebSite from "../assets/images/Ar-Arisp.png";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    width: "100%",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding:"20px 0",
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
  descriptionModal:{
    color:"#111111",
    textAlign:"left",
    fontWeight:"bold"
  },
  titleProject:{
    fontSize:"20px",
    color:"#26a69a"
  }
}));

const Portfolio = () => {
  const [open, setOpen] = useState(false); /* open Modal */
  const [titleProject, settitleProject] = useState("");
  const [detailsProject, setdetailsProject] = useState("");
  const [websiteImgDetails,setwebsiteImgDetails] = useState("");
  const [linkProject, setlinkProject] = useState("");
  const [loading, setLoading] = useState(false);

  const portfolios = [
    {
      title: "Asics MetaSpeed",
      description: "Landing Page responsivo desenvolvido em React + Gatsby Js.<br>\n ",
      imageUrl: metaspeed,
      websiteImgDetails: AsiscWebSite,
      link: "https://lab.asics.com.br/metaspeed/",
    },
    {
      title: "Editais ONR",
      description: "Sistema Desenvolvido em React + Redux + .NET Core.<br>\n Neste projeto atuei na parte de frontend, cuidando de questões como layout, validaçao de campos e de alguns fluxos no redux. ",
      imageUrl: editais,
      websiteImgDetails: EditaiscWebSite,
      link: "https://onr-portaleditaisonline-develop-swqmewq6ja-rj.a.run.app/",
    },
    {
      title: "SOC",
      description: "Website desenvolvido em Wordpress + Elementor. Atuei no desenvolvimento total do projeto",
      imageUrl: soc,
      websiteImgDetails: SocWebSite,
      link: "https://www.soc.com.br/",
    },
    {
      title: "Blanc Hospital",
      description: "Sistema desenvolvido em React + redux e .NET Core. Atuei na implementação do layout e ajustes no fluxo em Redux.",
      imageUrl: blanc,
      websiteImgDetails: AsiscWebSite,
      link: "https://blanchospital.com.br/",
    },
    {
      title: "Portfolio",
      description: "Portfólio desenvolvido em React, Sass + CSS3",
      imageUrl: portfolioimg,
      websiteImgDetails: PortfolioWebSite,
      link: "https://lab.asics.com.br/metaspeed/",
    },
    {
      title: "ONR Registradores",
      description: "Website institucional desenvolvido em .NET. Atuei na implementação do layout em HTML5, Sass + CSS3 e Javascript",
      imageUrl: onr,
      websiteImgDetails: RegistradoresWebSite,
      link: "https://lab.asics.com.br/metaspeed/",
    },
    {
      title: "J Perretti",
      description: "Website desenvolvido em Wordpress + Elementor. Atuei no desenvolvimento total do projeto",
      imageUrl: perretti,
      websiteImgDetails: PerrettiWebSite,
      link: "https://lab.asics.com.br/metaspeed/",
    },
    {
      title: "Arisp",
      description: "Website institucional desenvolvido em .NET. Atuei na implementação do layout em HTML5, Sass + CSS3 e Javascript",
      imageUrl: arisp,
      websiteImgDetails: ArispWebsite,
      link: "https://www.arisp.com.br/",
    },
    {
      title: "AR Arisp",
      description: "Website institucional desenvolvido em .NET. Atuei na implementação do layout em HTML5, Sass + CSS3 e Javascript",
      imageUrl: ararisp,
      websiteImgDetails: ArArispWebSite,
      link: "https://ar.arisp.com.br/",
    },
    {
      title: "Ofício Eletrônico",
      description: "Sistema que disponibiliza informações registrais a autoridades públicas ou servidores designados.<br>\n Projeto desenvolvido em .NET MVC. Atuei na implementaçao do layout, que foi desenvolvido em HTML5, CSS3 e javascript. ",
      imageUrl: oficioeletronico,
      websiteImgDetails: OficioWebSite,
      link: "https://oficioeletronico.com.br/",
    },
  ];

  const handleOpen = (titleProject, detailsProject,websiteImgDetails,linkProject) => {
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
        <h2>
          Portfolio
        </h2>
        <p>
          Últimos projetos
        </p>
        <div className="display-projects">
          {portfolios.map((row) => (
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
