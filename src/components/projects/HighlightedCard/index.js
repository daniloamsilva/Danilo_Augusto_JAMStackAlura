import styled from 'styled-components';

import propToStyle from '../../../theme/utils/propToStyle';

const HighlightedCard = styled.div`
  display: flex;

  border: 2px solid black;
  margin: 0 30px;
`;

HighlightedCard.CardImage = styled.div`
  ${propToStyle('background-image')}
  ${propToStyle('width')}
  ${propToStyle('height')}
  ${propToStyle('border-radius')}
  background-size: cover;
  background-position: center;
`;

HighlightedCard.CardTitle = styled.h1`
  margin-bottom: 30px;
`;

HighlightedCard.CardText = styled.p``;

export default HighlightedCard;
