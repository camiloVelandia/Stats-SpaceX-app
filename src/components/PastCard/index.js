import React, {useState, useEffect} from 'react';
import {Section, Title, Figure, Name, Text, Info, Bullet, BulletProp, BulletInfo} from './styles';

const PastCard = (props) => {
  const [date, setDate] = useState('');

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const today = new Date(props.date);

  useEffect(() => {
    setDate(today.toLocaleDateString('en-US'));
  }, []);

  return (
    <Section>
      <Title>recent missions</Title>
      <Figure source={{uri: `${props.image}`} || require('statSpaceX/src/assets/images/escudo.png' )}/>
      <Name>{props.title}</Name>
      <Text>{props.detail}</Text>
      <Info>
        <Bullet>
          <BulletProp>
            date:
          </BulletProp>
          <BulletInfo>{date}</BulletInfo>
        </Bullet>
        <Bullet>
          <BulletProp>
            flight number:
          </BulletProp>
          <BulletInfo>{props.number}</BulletInfo>
        </Bullet>
        <Bullet>
          <BulletProp>
            succes:
          </BulletProp>
          <BulletInfo>{props.succes}</BulletInfo>
        </Bullet>
      </Info>
    </Section>
  );
};

export default PastCard;
