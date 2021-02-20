import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import propToStyle from '../../../theme/utils/propToStyle';

const CardContainer = styled.a`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  text-decoration: none;
  color: black;

  ${propToStyle('display')}
  ${propToStyle('margin')}

  &:hover {
    box-shadow: 0 15px 16px 0 rgba(0, 0, 0, 0.2);
    transform: translate(0, -5px);
    cursor: pointer;
  }
`;

CardContainer.Informations = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

CardContainer.Image = styled.img`
  ${propToStyle('background-image')}
  ${propToStyle('width')}
`;

CardContainer.Title = styled.h2`
  margin: 0;
  padding: 10px 0;
`;

CardContainer.Description = styled.p`
  margin: 0;
  padding: 10px 0;
`;

function HighlightedCard({ image, title, description, href, ...props }) {
  return (
    <CardContainer
      href={href}
      target="_blank"
      display={{ md: 'flex' }}
      margin={{ md: '0 10px' }}
      {...props}
    >
      <CardContainer.Image src={image} width={{ xs: '100%', md: '50%' }} />
      <CardContainer.Informations>
        <CardContainer.Title>{title}</CardContainer.Title>
        <CardContainer.Description>{description}</CardContainer.Description>
      </CardContainer.Informations>
    </CardContainer>
  );
}

HighlightedCard.propTypes = {
  href: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

HighlightedCard.defaultProps = {
  href: '',
  image: '',
  title: '',
  description: '',
};

export default HighlightedCard;
