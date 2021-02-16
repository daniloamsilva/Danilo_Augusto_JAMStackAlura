import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import propToStyle from '../../../theme/utils/propToStyle';

export const TextStyleVariatsMap = {
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.paragraph1.lineHeight};
  `,
  smallestException: css`
    font-size: ${({ theme }) =>
      theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.smallestException.lineHeight};
  `,
};

const TextBase = styled.span`
  ${props => TextStyleVariatsMap[props.variant]}
  ${propToStyle('textAlign')}
  ${propToStyle('color')}
  ${propToStyle('margin-left')}
`;

function Text({ tag, variant, color, children, ...props }) {
  return (
    <TextBase as={tag} variant={variant} color={color} {...props}>
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  color: 'black',
};

export default Text;
