import React from 'react';

import Box from '../src/components/foundation/Box';
import Grid from '../src/components/foundation/Grid';
import Text from '../src/components/foundation/Text';

import Menu from '../src/components/commons/Menu';
import Cover from '../src/components/commons/Cover';
import Avatar from '../src/components/commons/Avatar';
import SectionTitle from '../src/components/commons/SectionTitle';
import Card from '../src/components/commons/Card';
import Footer from '../src/components/commons/Footer';

import WrapperProjects from '../src/components/projects/WrapperProjects';
import HighlightedCard from '../src/components/projects/HighlightedCard';

export default function Home() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Cover>
        <Menu />

        <Grid.Container>
          <Grid.Row paddingTop={30} paddingBottom={50}>
            <Grid.Col value={{ xs: 12, md: 5 }}>
              <Avatar
                alt="Imagem de dois celulares com telas da aplicação."
                src="img/avatar.jpg"
              />
            </Grid.Col>
            <Grid.Col
              value={{ xs: 12, md: 5 }}
              display={{ xs: 'block', md: 'flex' }}
              alignItems="flex-start"
              justifyContent="center"
              flexDirection="column"
              marginTop={{ xs: 30 }}
            >
              <Text
                variant="title"
                tag="h1"
                display="inline"
                color="white"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Danilo Augusto
              </Text>
              <Text
                variant="paragraph1"
                tag="p"
                color="white"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Estudante de Ciência da Computação <br />
                Desenvolvedor no Instituto Alpha Lumen <br />
                <br />
                Estou constantemente colocando em prática meus conhecimentos e
                sempre buscando estudar novas tecnologias.
              </Text>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Cover>

      <WrapperProjects margin={{ md: '30px 30px' }}>
        <SectionTitle>MEUS PROJETOS</SectionTitle>

        <Grid.Container>
          <Grid.Row marginBottom="70px">
            <HighlightedCard
              image="img/project1.png"
              title="Alura Pokemon Quiz"
              href="https://github.com/daniloamsilva/alura_pokemon_quiz"
              description="Desenvolvido durante a Imersão React da Alura com Next.JS. Um quiz para colocar a prova seus conhecimentos sobre os monstrinhos de bolso. Este projeto foi um dos dez premiados com uma bolsa de estudos para o Bootcamp JAMStack da Alura :)."
            />
          </Grid.Row>

          <Grid.Row marginTop="30px" marginBottom="70px">
            <Grid.Col
              value={{ xs: 12, md: 4 }}
              padding={{ md: '0 10px' }}
              marginBottom={{ sm: '20px' }}
            >
              <Card
                image="img/project2.png"
                title="Instalura"
                href="https://github.com/daniloamsilva/instalura"
              />
            </Grid.Col>
            <Grid.Col
              value={{ xs: 12, md: 4 }}
              padding={{ md: '0 10px' }}
              marginBottom={{ sm: '20px' }}
            >
              <Card
                image="img/project3.jpg"
                title="Proffy"
                href="https://github.com/daniloamsilva/proffy_web"
              />
            </Grid.Col>
            <Grid.Col
              value={{ xs: 12, md: 4 }}
              padding={{ md: '0 10px' }}
              marginBottom={{ sm: '20px' }}
            >
              <Card
                image="img/project4.png"
                title="Happy"
                href="https://github.com/daniloamsilva/happy_web"
              />
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </WrapperProjects>

      <Footer />
    </Box>
  );
}
