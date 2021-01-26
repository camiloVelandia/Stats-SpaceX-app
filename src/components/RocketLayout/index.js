import React, {useState, useEffect} from 'react';
import RocketCard from '../RocketCard';
import {Container, Loader} from './styles';
import getRocketInfo from '../../services/getRocketInfo';

const RocketLayout = () => {
  const [rocket, setRocket] = useState([]);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    setLoading(true);
    getRocketInfo().then((data) => {
      setRocket(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader color='#fff' size='large' />;
  }

  return (
    <Container>
      {rocket.map((item) => (
        <RocketCard
          key={item.id}
          name={item.name}
          info={item.description}
          image={item.flickr_images[1]}
          status={item.active ? 'active' : 'disabled'}
          boosters={item.boosters}
          company={item.company}
          country={item.country}
          costLaunch={item.cost_per_launch}
          stages={item.stages}
          succesRate={item.success_rate_pct}
          engineLoss={item.engines.engine_loss_max}
          layout={item.engines.layout}
          number={item.engines.number}
          type={item.engines.type}
          version={item.engines.version}
          propellant1={item.engines.propellant_1}
          fflight={item.first_flight}
        />
      ))}
    </Container>
  );
};

export default RocketLayout;
