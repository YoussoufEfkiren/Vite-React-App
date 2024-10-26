// TitleSection.js
import styled from 'styled-components';

const TitleSectionWrapper = styled.section`
  background-color: #343a40;
  color: #ffffff;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  text-align: center;
`;

const TitleSection = () => (
  <TitleSectionWrapper>
    <h1>Shop with Style</h1>
    <p>Discover our exclusive collection</p>
  </TitleSectionWrapper>
);

export default TitleSection;
