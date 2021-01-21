import styled from 'styled-components/native';

export const Section = styled.View`
  width: 80%;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 40px;
  border: 1px solid #fff;
`;
export const Title = styled.View`
  background-color: #fff;
  text-align: center;
  padding: 15px;
`;
export const TitleText = styled.Text`
    color: #000;
    text-transform: uppercase;
    font-size: 30px;
    margin: 0;
`;
export const Main = styled.View`
  padding: 30px;
  align-items: center;
  justify-content: center;
  
`;

export const Image = styled.Image`
  width: 200px;
  height:200px;
`;

export const Info = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
  text-align: center;

`;
export const InfoName = styled.Text`
    font-size: 24px;
    text-transform: uppercase;
    margin: 0;
    padding-bottom: 20px;
    color: #fff;

 
`;
export const InfoText = styled.Text`
    font-size: 14px;
    margin: 0;
    color: #fff;
`;

export const Bullets = styled.View`
  flex-direction: column;
  padding-top: 30px;
 
`;

export const BulletItem= styled.Text`
    font-size: 14px;
    margin: 0;
    padding-left: 0px;
    padding-bottom: 10px;
    text-transform: capitalize;
    text-align: center;
    color: #fff;
`;
