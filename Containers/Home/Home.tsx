import * as React from 'react';
import * as Redux from 'react-redux';
import {Container, CarList} from '../../Components';
import {fetchVeichles} from '../../Stores/Veichles/actions';
import {getVeichlesSelector} from '../../Stores/Veichles/selectors';

const Home = () => {
  const dispatch = Redux.useDispatch();
  const veichles = Redux.useSelector(getVeichlesSelector);

  React.useEffect(() => {
    dispatch(fetchVeichles());
  }, [dispatch]);

  return (
    <Container>
      <CarList veichles={veichles} />
    </Container>
  );
};

export default Home;
