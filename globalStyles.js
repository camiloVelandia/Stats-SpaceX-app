import styled from 'styled-components/native';

export const ThemeMode = styled.View`
  z-index: 999;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 3px;
  right: 15px;
`;
export const Button = styled.Pressable`
  background-color: ${({theme}) => theme.body};
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 1px solid #d9d9d9fc;
`;
export const Text = styled.Text`
  color: ${({theme}) => theme.text};
  font-size:16px;
`;
export const Container = styled.View`
  height:100%;
  position: relative;
  top:0;
  z-index:0
`;
export const Content = styled.View`
  height:100%;
  position: relative;
`;

