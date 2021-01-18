import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 40px;
  border: 1px solid #fff;
  border-radius: 25px;
  padding: 30px 20px;
  background-color: #000;
`;

export const Info = styled.View`
  /* border: 1px solid ${({theme}) => theme.text};
  padding: 40px 15px; */
`;
export const Letter = styled.Text`
  /* border: 1px solid ${({theme}) => theme.text};
  padding: 40px 15px; */
`;
export const Name = styled.Text`
  /* text-transform: uppercase;
  font-weight: 600;
  font-size: 28px; */
`;
export const Lists = styled.View`
  /* padding: 40px 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; */
`;

export const Text = styled.Text`
  /* font-size: 14px; */
`;
export const Figure = styled.Image`
  /* font-size: 14px;
  max-width: 224px;
  max-height: 224px;
  height: 100%;
  margin: 0 auto;
  margin-top: 60px;
  & img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  } */
`;

export const Ul = styled.Text`
  /* text-align: center;
  margin: 0;
  list-style-position: inside;
  padding: 0;
  margin-top: 30px;
  width: 100%;
  & h2 {
    text-transform: capitalize;
    font-size: 24px;
    margin: 0;
    padding-bottom: 10px;
  }
  & li {
    text-transform: capitalize;
    font-size: 14px;
  } */
`;

export const Status = styled.View`
  /* margin-top: 60px;
  & p {
    margin: 0 auto;
    display: flex;
    border: 2px solid ${({theme}) => theme.succes};
    color: ${({theme}) => theme.succes};
    text-transform: uppercase;
    font-size: 16px;
    padding: 10px 40px;
    width: fit-content;
  }
  @media (min-width: 768px) {
    & p {
      font-size: 24px;
    }
  } */
`;
