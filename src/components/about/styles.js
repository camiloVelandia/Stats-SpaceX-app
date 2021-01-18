import styled from 'styled-components/native';

export const Section = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
  
`;
export const Overlay = styled.View`
  flex: 1;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0.7;
  background-color: #000;
`;
export const Container = styled.View`
  border-radius: 20px;
  opacity: 0.8;
  background-color: #000;
  width: 90%;
  padding: 40px 20px;
  z-index: 1;
  text-align: center;
  margin:30px 0;
  
`;
export const Article = styled.View`
  margin: 40px 0;
  width: 100%;
`;
export const Title = styled.Text`
  margin: 0;
  font-size: 40px;
  text-transform: uppercase;
  color: #fff;
  font-weight:700;
  text-align:center;
`;
export const Letter = styled.Text`
  color: #fff;
  margin: 0;
  font-size: 18px;
  max-width: 700px;
  padding-top: 30px;
`;

export const Item = styled.View`
  margin-top: 30px;
`;
export const ItemTitle = styled.Text`
    font-size: 20px;
    font-weight: 400;
    text-transform: uppercase;
    color: #fff;
    font-weight:700;
    padding-bottom:10px
`;
export const ItemLi = styled.Text`
  color: #fff;
  padding-bottom: 4px;
  width:100%;
  justify-content:flex-end;
`;
export const Links = styled.Text`
  color: blue;
  padding-bottom: 4px;
  width:100%;
  margin:0;
  padding:0;
  left:0;
  right:0;
`;
