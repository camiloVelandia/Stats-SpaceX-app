import React from 'react';
import Banner from '../../components/Banner';
import RocketLayout from '../../components/RocketLayout';
import {ScrollView, Text} from 'react-native';
import {Container} from './styles';

const RocketScreen = () => {
  return (
    <Container>
      <ScrollView>
        <Banner
          title={'rockets'}
          backImage={require('statSpaceX/src/assets/images/rocket.jpg')}
        />
        <RocketLayout />    
      </ScrollView>
    </Container>
  );
};

export default RocketScreen;