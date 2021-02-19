import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import propToStyle from '../../../theme/utils/propToStyle';

const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

CardContainer.Image = styled.img`
  ${propToStyle('background-image')}
  width: 100%;
`;

CardContainer.Title = styled.h4`
  margin: 0;
  padding: 10px 0;
  text-align: center;
`;

function Card({ image, title, ...props }) {
  return (
    <CardContainer {...props}>
      <CardContainer.Image src={image} />
      <CardContainer.Title>{title}</CardContainer.Title>
    </CardContainer>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

Card.defaultProps = {
  image: '',
  title: '',
};

export default Card;
