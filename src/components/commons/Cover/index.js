import styled from 'styled-components';

const Cover = styled.div`
  background-color: ${({ theme }) => theme.colors.background.main.color};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 10px 10px grey;
`;

export default Cover;
