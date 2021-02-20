import styled from 'styled-components';

import propToStyle from '../../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('diplay')}
  ${propToStyle('flexWrap')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
`;

export default Box;
