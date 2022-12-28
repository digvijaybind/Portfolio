/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { PaperPlaneRight } from "phosphor-react";

import { ButtonPrimary, Container } from "../../styles/styles";
import { Content, ImgHome, HomeText } from "./styles";

export function HomeHero() {
  return (
    <Container>
      <Content>
        <HomeText>
          <div className="cubo-animation"></div>

          <h1>Digvijay bind</h1>
          <h2>
            <Typewriter
              options={{
                strings: ["Front-End Developer.", "System artitech"],
                autoStart: true,
                loop: true,
                skipAddStyles: true,
              }}
            />
          </h2>

          <ButtonPrimary>
            <Link href={"#projects"}>
              <a>
                <b>See my Portfolio </b>
                <PaperPlaneRight
                  style={{ marginBottom: "-0.3rem" }}
                  size={22}
                  weight="bold"
                />
              </a>
            </Link>
          </ButtonPrimary>
        </HomeText>
        <ImgHome>
          <img src="/projects/portfolio/home.webp" alt="Home" />
        </ImgHome>
      </Content>
    </Container>
  );
}
