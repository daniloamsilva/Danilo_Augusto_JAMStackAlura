import React from 'react';

import MenuWrapper from './styles/MenuWrapper';
import Text from '../../foundation/Text';

const links = [
  {
    texto: 'Meus Projetos',
    url: '/',
    active: true,
  },
  {
    texto: 'Sobre Mim',
    url: '/about',
    active: false,
  },
  {
    texto: 'Contatos',
    url: '/contact',
    active: false,
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
            text-decoration="none"
            key={link.url}
            href={link.url}
            border-bottom={link.active ? '2px solid white' : ''}
          >
            {link.texto}
          </Text>
        ))}
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

export default Menu;
