import styled from 'styled-components/native';

export const Section = styled.ImageBackground`
  height: 180px;
  width:400px;
  justify-content: center;
  align-items: center;
  /* background-image: url(${(props) =>
    props.backImage || '/images/rocket.jpg'}); */
`;
export const Title = styled.Text`
  color: #fff;
  z-index:1;
  font-size:24px;
  font-weight:700;
  text-transform:uppercase
`;
export const Overlay = styled.View`
  height:100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0.7;
  background-color: #000;
`;
