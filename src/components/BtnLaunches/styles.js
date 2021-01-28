import styled from 'styled-components/native';

export const Section = styled.View`
  width: 80%;
  margin: 0 auto;
  margin-top: 0px;
  margin-bottom: 0px;
  display: flex;
  justify-content: space-between;
`;
export const Btn = styled.Pressable`
  width: 60%;
  margin:0 auto;
  margin-bottom: 40px;
  border: 1px solid ${({theme}) => theme.text};
  text-align: center;
  padding: 20px 0;
`;
export const Text = styled.Text`
text-transform: capitalize;
  color: ${({theme}) => theme.text};
  text-align:center
`;
