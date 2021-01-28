import styled from 'styled-components/native';

export const Section = styled.View`
  width: 80%;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 40px;
  border: 1px ${({theme}) => theme.text};
`;

export const Title = styled.Text`
  background-color: ${({theme}) => theme.text};
  color: ${({theme}) => theme.body};
  padding: 20px 0;
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0;
  text-align: center;
`;
export const Container = styled.View`
  text-align: center;
  padding: 40px;
`;
