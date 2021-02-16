import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const MenuWrapper = styled.nav`
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 28px;
  padding-right: 28px;

  ${breakpointsMedia({
    md: css`
      justify-content: flex-start;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 16px 16px;
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`;

MenuWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
  display: flex;
  align-items: center;

  ${breakpointsMedia({
    md: css`
      width: 131px;
      height: 32px;
    `,
  })}

  ${breakpointsMedia({
    md: css`
      order: initial;
      padding-right: 16px;
    `,
  })}
`;

MenuWrapper.RightSide = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  order: 2;
  justify-content: flex-end;

  ${breakpointsMedia({
    md: css`
      order: initial;
    `,
  })}
`;

export default MenuWrapper;
