import React from 'react';

import Box from '../src/components/foundation/Box';
import Grid from '../src/components/foundation/Grid';
import Text from '../src/components/foundation/Text';

import Menu from '../src/components/commons/Menu';
import Cover from '../src/components/commons/Cover';
import Avatar from '../src/components/commons/Avatar';
import SectionTitle from '../src/components/commons/SectionTitle';

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
            <Grid.Col value={{ xs: 12, md: 6 }}>
              <Avatar
                alt="Imagem de dois celulares com telas da aplicação."
                src="img/avatar.jpg"
              />
            </Grid.Col>
            <Grid.Col
              offset={{ xs: 0, md: 0 }}
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s.
              </Text>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Cover>

      <WrapperProjects margin={{ md: '30px 30px' }}>
        <SectionTitle>MEUS PROJETOS</SectionTitle>

        <Grid.Container border="2px solid black" border-radius="10px">
          <Grid.Row>
            <Grid.Col value={{ xs: 12, sm: 12, md: 6 }}>
              <HighlightedCard.CardImage
                background-image='url("img/project1.png")'
                width="100%"
                height="100%"
                border-radius="10px"
              />
            </Grid.Col>
            <Grid.Col value={{ xs: 12, sm: 12, md: 6 }} padding="15px">
              <HighlightedCard.CardTitle>
                Nome do projeto
              </HighlightedCard.CardTitle>
              <HighlightedCard.CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                vitae mollis augue, in auctor velit. Vestibulum eu consequat
                lorem, sit amet sagittis arcu. Quisque vestibulum nulla ut metus
                elementum convallis. Nam congue venenatis lobortis. Donec
                gravida venenatis odio, quis luctus elit convallis ac. Integer
                non nisi a nisi lobortis sodales. Donec id efficitur augue.
              </HighlightedCard.CardText>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </WrapperProjects>
    </Box>
  );
}
