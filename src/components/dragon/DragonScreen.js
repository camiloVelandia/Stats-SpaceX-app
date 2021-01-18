import React from 'react';
import {Container} from './styles';
// import Banner from '../../components/Banner';
import CapsulesLayout from '../../components/CapsuleLayout';

const DragonScreen = (props) => {
  return (
    <Container>
      {/* <Banner title={'Dragons'} backImage="/images/cap.jpg" /> */}
      <CapsulesLayout />
    </Container>
  );
};

export default DragonScreen;