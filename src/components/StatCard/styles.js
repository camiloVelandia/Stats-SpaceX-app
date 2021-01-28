import styled from 'styled-components/native';

export const Section = styled.View`
  margin-bottom: 40px;
  border: 1px ${({theme}) => theme.text};
`;
export const TitleView = styled.View`
  text-align: center;
  background-color:${({theme}) => theme.text};
  padding:20px;
`;
export const TitleText = styled.Text`
  margin: 0;
  font-size: 28px;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  color: ${({theme}) => theme.body};
  background-color: ${({theme}) => theme.text};
`;
export const Container = styled.View`
  text-align: center;
  padding: 40px 50px;
`;
