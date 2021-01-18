import styled from 'styled-components/native';

export const Section = styled.View`
  height: 40vh;
  margin-top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: url(${(props) => props.backImage || '/images/rocket.jpg'}); */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;
