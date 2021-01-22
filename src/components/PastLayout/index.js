import React, {useState, useEffect} from 'react';
import PastCard from '../PastCard';
import {Section, Pagination, BtnContainer, Text} from './styles';
import getPastLaunches from '../../services/getPastLaunches';
// import Spinner from '../Spinner';

const PastLayout = () => {
  const [pastlaunches, setpastlaunches] = useState({docs: []});
  const [docs, setdocs] = useState(pastlaunches.docs);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setLoading(true);
    getPastLaunches().then((data) => {
      setpastlaunches(data);
      setPage(data.page);
      setLoading(false);
    });
  }, []);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (page === 0) return;
    setdocs(pastlaunches.docs);
    getPastLaunches(page).then((nextPagelaunch) => {
      setpastlaunches(nextPagelaunch);
      setdocs(docs.concat(nextPagelaunch.docs));
    });
  }, [page]);

  // if (loading) {
  //   return <Spinner />;
  // }

  return (
    <Section>
      {docs.map((item, index) => {
        return (
          <PastCard
            key={item.id + 1}
            title={item.name}
            detail={item.details}
            image={item.links.patch.small}
            number={item.flight_number}
            date={item.date_local}
            succes={item.success ? 'succes' : 'fail'}
          />
        );
      })}
      <BtnContainer>
        {!pastlaunches.nextPage ? (
          <Text>Not more results available</Text>
        ) : (
          <Pagination onPress={handleNextPage}>
            <Text>view more</Text>
          </Pagination>
        )}
      </BtnContainer>
    </Section>
  );
};

export default PastLayout;
