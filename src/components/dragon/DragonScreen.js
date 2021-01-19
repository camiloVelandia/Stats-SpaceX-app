import React from 'react';
import {Container} from './styles';
import Banner from '../../components/Banner';
import CapsulesLayout from '../../components/CapsuleLayout';
import {ScrollView} from 'react-native';


const DragonScreen = (props) => {
  return (
    <Container>
      <ScrollView>
      <Banner title={'Dragons'} backImage={require('statSpaceX/src/assets/images/Dragon.jpg')} />
      <CapsulesLayout />
      </ScrollView>
    </Container>
  );
};

export default DragonScreen;