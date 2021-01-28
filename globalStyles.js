import styled from 'styled-components/native';

export const Button = styled.Pressable`
  background-color: ${({theme}) => theme.body};
  border: none;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius:50;
  z-index: 999;
  position:absolute;
`;
export const Text = styled.Text`
  color: ${({theme}) => theme.text};
  font-size:16px;
`;
export const Header = styled.View`
  background-color: ${({theme}) => theme.body};
  z-index:999;
border-radius:50;
  width:50px;
  height:50px;
  justify-content:center;
  align-items:center
`;
