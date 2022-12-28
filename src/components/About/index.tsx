/* eslint-disable @next/next/no-img-element */
import { DownloadSimple, User } from "phosphor-react";
import { Container, Title } from "../../styles/styles";
import { ButtonPrimary } from "../../styles/styles";
import { AboutContainer } from "./styles";

export function About() {
  return (
    <Container id="about">
      <Title>
        About
        <span>
          <User /> About
        </span>
      </Title>
      <AboutContainer>
        <div className="AboutImg">
          <img
            className="AboutImg"
            src="/Digvijay.webp"
            alt="Imagem de perfil Digvijay"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <p>
              I am full stack developer front end focused, i am have 2.5 +year
              experience in React and 1 year experience in Vue.js
            </p>
            <p>
              I have play crueil role in many defi projects , i have experience
              working as founding engineer also .
            </p>
            <p>
              Atualmente estou estudando e desenvolvendo projetos web, de modo a
              ampliar meus conhecimentos e assim aprimorar ainda mais as
              habilidades que possuo.
            </p>
          </div>
          <a href="/pdf/Digvijay-CV.pdf" download>
            <ButtonPrimary>
              <b>Download CV</b> <DownloadSimple weight="bold" />
            </ButtonPrimary>
          </a>
        </div>
      </AboutContainer>
    </Container>
  );
}
