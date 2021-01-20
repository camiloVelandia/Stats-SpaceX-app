import React from 'react';
import Banner from '../../components/Banner';
import {Container} from './styles';

// import Latest from '../../components/Latest';
// import RecentLayout from '../../components/RecentLayout';
// import BtnLaunches from '../../components/BtnLaunches';
import {ScrollView} from 'react-native';


const LaunchesScreen = () => {
  return (
    <Container>
      <ScrollView>
        <Banner
          title={'launches'}
          backImage={require('statSpaceX/src/assets/images/starlink1.webp')}
        />
        {/* <Latest /> */}
      {/* <RecentLayout /> */}
      {/* <BtnLaunches /> */}
      </ScrollView>
    </Container>
  );
};

export default LaunchesScreen;