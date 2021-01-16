import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  background-color:rgba(0,0,0,.5);
  justify-content:center;
  align-items:center;
  position:relative
`;
export const Overlay = styled.View`
  flex: 1;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right:0;
  opacity: 0.6;
  background-color: #000;
`;
export const Box = styled.View`
  border-radius:10;
  opacity: 0.8;
  background-color: #000;
  width:80%;
  z-index:1;
`;
export const Title = styled.Text`
  color: #fff;
  text-align:center;
  font-size:50px;
  font-weight:700;
`;
export const Number = styled.Text`
  color: #fff;
  
`;