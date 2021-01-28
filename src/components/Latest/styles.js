import styled from 'styled-components/native';

export const Section = styled.View`
  width: 80%;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 40px;
  border: 1px solid ${({theme}) => theme.text};
`;
export const Title = styled.View`
  background-color: ${({theme}) => theme.text};
  text-align: center;
  padding: 15px;
`;
export const TitleText = styled.Text`
  color: ${({theme}) => theme.body};
  text-transform: uppercase;
  font-size: 30px;
  margin: 0;
`;
export const Main = styled.View`
  padding: 20px;
  align-items: center;
  justify-content: center;
  
`;

export const Image = styled.Image`
  width: 200px;
  height:200px;
  margin-bottom:30px;
`;

export const Info = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding-left: 0px;
  text-align: center;

`;
export const InfoName = styled.Text`
    font-size: 24px;
    text-transform: uppercase;
    margin: 0;
    padding-bottom: 15px;
    color: ${({theme}) => theme.text};
    font-weight:700;
`;
export const InfoText = styled.Text`
    font-size: 14px;
    margin: 0;
    color: ${({theme}) => theme.text};
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
    color: ${({theme}) => theme.text};
`;
export const Loader = styled.ActivityIndicator`
  margin-top: 60px;
`;