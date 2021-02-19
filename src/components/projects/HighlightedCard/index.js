import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import propToStyle from '../../../theme/utils/propToStyle';

const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;

  ${propToStyle('display')}
  ${propToStyle('margin')}

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
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

function HighlightedCard({ image, title, description, ...props }) {
  return (
    <CardContainer
      {...props}
      display={{ md: 'flex' }}
      margin={{ md: '0 10px' }}
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
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

HighlightedCard.defaultProps = {
  image: '',
  title: '',
  description: '',
};

export default HighlightedCard;
