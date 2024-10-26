// Footer.js
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #007bff;
  color: #ffffff;
  padding: 2rem;
  text-align: center;
  margin-top: 2rem;
  position: absolute;
  bottom: 0 auto;
  width: 100%;
`;

const Footer = () => (
  <FooterWrapper>
    <p>&copy; 2024 Bootstrap Shop. All rights reserved.</p>
  </FooterWrapper>
);

export default Footer;
