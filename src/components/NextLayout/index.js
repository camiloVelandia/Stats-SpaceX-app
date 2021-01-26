import React, {useState, useEffect} from 'react';
import NextCard from '../NextCard';
import {Section, Loader} from './styles';
import getUpcomingLaunches from '../../services/getUpcomingLaunches';

const NextLayout = () => {
  const [upcominglaunches, setupcominglaunches] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUpcomingLaunches().then((data) => {
      setupcominglaunches(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader size='large' color='#fff' />;
  }

  return (
    <Section>
      {upcominglaunches.map((item) => {
        return (
          <NextCard
            key={item.id}
            name={item.name}
            details={item.details}
            image={item.links.patch.large}
            date={item.date_local}
            number={item.flight_number}
          />
        );
      })}
    </Section>
  );
};

export default NextLayout;
