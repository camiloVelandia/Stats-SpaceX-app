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
  font-size:30px;
  text-transform:capitalize;
  font-weight:700;
  margin-top:40px;
`;
export const ResultContainer = styled.ScrollView`
  margin-top:30px;
  padding:0 20px;
`;
export const NotFound = styled.Text`
  color: ${({theme}) => theme.text};
  padding-top:20px;
`;
