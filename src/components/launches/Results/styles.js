import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.body};
`;
export const Title = styled.Text`
  justify-content: center;
  color: ${({theme}) => theme.text};
  font-size:35px;
  text-transform:capitalize;
  font-weight:700;
`;
