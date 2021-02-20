import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import propToStyle from '../../../theme/utils/propToStyle';

const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;

  &:hover {
    box-shadow: 0 15px 16px 0 rgba(0, 0, 0, 0.2);
    transform: translate(0, -5px);
    cursor: pointer;
  }
`;

CardContainer.Link = styled.a`
  text-decoration: none;
  color: black;
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

function Card({ image, title, href, ...props }) {
  return (
    <CardContainer {...props}>
      <CardContainer.Link href={href} target="_blank">
        <CardContainer.Image src={image} />
        <CardContainer.Title>{title}</CardContainer.Title>
      </CardContainer.Link>
    </CardContainer>
  );
}

Card.propTypes = {
  href: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};

Card.defaultProps = {
  href: '',
  image: '',
  title: '',
};

export default Card;
