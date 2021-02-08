import React from 'react';
import Banner from '../../components/Banner';
import {Container} from './styles';
import {ScrollView} from 'react-native';
import HistoryLaunch from '../../components/HistoryLaunch';
import GridStats from '../../components/GridStats';
const LaunchesScreen = (props) => {
  return (
    <Container>
      <ScrollView>
        <Banner
          title={'Stats'}
          backImage={require('statSpaceX/src/assets/images/stats-2.jpeg')}
        />
        <HistoryLaunch />
        <GridStats />
      </ScrollView>
    </Container>
  );
};

export default LaunchesScreen;
