import styled from 'styled-components/native';

export const Section = styled.View`
  margin-bottom: 20px;
  border: 1px solid ${({theme}) => theme.text};
  text-align: center;
  width: 100%;
 
`;
export const Title = styled.Text`
  background-color: ${({theme}) => theme.text};
  color: ${({theme}) => theme.body};
  padding: 20px;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0;
`;
export const Figure = styled.Image`
  width: 228px;
  height: 218px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
`;
export const Name = styled.Text`
  font-size: 24px;
  margin-top: 30px;
  margin-bottom: 30px;
  text-transform: uppercase;
  padding: 0 20px;
  margin: 0;
  color: ${({theme}) => theme.text};
  font-weight:700;
`;
export const Text = styled.Text`
color: ${({theme}) => theme.text};
  padding: 20px 20px;
  text-align: justify;
  padding-bottom: 30px;
  margin: 0;
`;
export const Info = styled.View`
  padding: 0 20px;
  padding-bottom: 20px;
  justify-content: space-between;
`;
export const Bullet = styled.View`
  display:flex;
  flex-direction:row;
  text-align:center;
  align-items:center;
  justify-content:center;
`;
export const BulletInfo = styled.Text`
    margin: 0;
    text-align: center;
    font-size: 12px;
    padding: 5px 5px;
    text-transform: uppercase;
    color: ${({theme}) => theme.text};
  
`;
export const BulletProp = styled.Text`
    color: ${({theme}) => theme.text};
    margin: 0;
    text-align: center;
    font-size: 12px;
    padding: 0 5px;
    text-transform:uppercase
`;
