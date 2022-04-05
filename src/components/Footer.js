import React from "react";
import { getCurrentDate } from "../utils/getCurrentDate";
import Container from "@material-ui/core/Container";

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="md">
        <p>Rafael de Melo - {getCurrentDate()} - Todos os direitos reservados </p>
      </Container>
    </footer>
  );
};

export default Footer;
