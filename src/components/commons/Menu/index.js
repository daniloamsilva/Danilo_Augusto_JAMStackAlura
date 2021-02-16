import React from 'react';

import MenuWrapper from './styles/MenuWrapper';
import Text from '../../foundation/Text';

const links = [
  {
    texto: 'Projetos',
    url: '/',
  },
  {
    texto: 'Sobre Mim',
    url: '/about',
  },
  {
    texto: 'Contatos',
    url: '/contact',
  },
];

function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Text tag="p" variant="titleXS" color="white">
          DAugusto
        </Text>
      </MenuWrapper.LeftSide>
      <MenuWrapper.RightSide>
        {links.map(link => (
          <Text
            tag="a"
            variant="paragraph2"
            color="white"
            margin-left="20px"
            key={link.url}
            href={link.url}
          >
            {link.texto}
          </Text>
        ))}
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

export default Menu;
