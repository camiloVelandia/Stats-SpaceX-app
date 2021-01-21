import React, {useState, useEffect} from 'react';
import PastCard from '../PastCard';
import {Section} from './styles';
import getAllLaunches from '../../services/getAllLaunches';

const PastLayout = () => {
  const [launches, setlaunches] = useState([]);

  useEffect(() => {
    getAllLaunches().then((data) => setlaunches(data));
  }, []);

  return (
    <Section>
      {launches.map((item, index) => {
        if (index > launches.length - 3) {
          return (
            <PastCard
              key={item.id}
              title={item.name}
              detail={item.details}
              image={item.links.patch.small}
              number={item.flight_number}
              date={item.date_local}
              succes={item.succes ? 'succes' : 'fail'}
            />
          );
        }
      })}
    </Section>
  );
};

export default PastLayout;
