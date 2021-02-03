import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.body};
  margin-top:40px;
`;
export const Input = styled.TextInput`
  border: 1px solid ${({theme}) => theme.text};
  border-radius: 15px;
  width: 80%;
  padding: 5px 20px;
  color: ${({theme}) => theme.text};
`;
