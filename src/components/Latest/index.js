import React, {useState, useEffect} from 'react';
import {Section, Title, Main, Image, Info, Bullets, TitleText, InfoName, InfoText, BulletItem} from './styles';
import getLatestLaunch from '../../services/getLatestLaunch';
import getOneRocket from '../../services/getOneRocket';
// import Spinner from '../Spinner';

const Latest = () => {
  const [latest, setLatest] = useState({links: {patch: {}}});
  const [rocketUsed, setRocketUsed] = useState({});
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState('');

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const today = new Date(latest.date_local);
  useEffect(() => {
    setLoading(true);
    getLatestLaunch().then((data) => {
      setLatest({...data});
      setLoading(false);
    });
    if (latest.rocket) {
      return getOneRocket(latest.rocket).then((data) =>
        setRocketUsed({...data}),
      );
    }
  }, []);

  useEffect(() => {
    setDate(today.toLocaleDateString('en-US'));
  }, [latest]);

  // if (loading) {
  //   return <Spinner />;
  // }

  return (
    <Section>
      <Title>
        <TitleText>latest mission</TitleText>
      </Title>
      <Main>
        <Image
          source={{uri: `${latest.links.patch.large}`}}
        />

        <Info>
          <InfoName>{latest.name}</InfoName>
          <InfoText>{latest.details}</InfoText>
        </Info>
        <Bullets>
          <BulletItem>Date: {date}</BulletItem>
          <BulletItem>succes: {latest.success ? 'yes' : 'fail'}</BulletItem>
          <BulletItem>rocket: {rocketUsed.name || 'falcon'}</BulletItem>
        </Bullets>
      </Main>
    </Section>
  );
};

export default Latest;
