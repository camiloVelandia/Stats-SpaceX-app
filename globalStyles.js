import styled from 'styled-components/native';

export const Button = styled.Pressable`
  background-color: ${({theme}) => theme.body};
  border: none;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
export const Text = styled.Text`
  color: ${({theme}) => theme.text};
  font-size:16px;
`;
export const Header = styled.View`
  background-color: ${({theme}) => theme.body};
  /* position:absolute;
  z-index:99999;
  left:20px;
  top:20px; */
`;
