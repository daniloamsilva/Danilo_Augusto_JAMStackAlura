import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.main.color};

  a {
    color: ${({ theme }) => theme.colors.primary.main.contrastText};
    text-decoration: none;
    transition: 0.3s;

    font-size: 30px;
    margin: 0 20px;

    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
`;

export default function Footer(props) {
  return (
    <FooterWrapper {...props}>
      <a
        href="https://github.com/daniloamsilva"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-github" />
      </a>
      <a
        href="https://www.linkedin.com/in/daniloamsilva"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin" />
      </a>
    </FooterWrapper>
  );
}
