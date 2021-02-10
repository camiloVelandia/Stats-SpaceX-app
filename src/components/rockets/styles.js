import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  position: relative;
  width: 100%;
  background-color: ${({theme}) => theme.body};
`;
