import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  background-color: ${({theme}) => theme.body};
  margin-top: 30px;
`;
export const Input = styled.TextInput`
  border: 1px solid ${({theme}) => theme.text};
  border-radius: 15px;
  width: 90%;
  padding: 5px 20px;
  color: ${({theme}) => theme.text};
  margin :0 auto;
`;
