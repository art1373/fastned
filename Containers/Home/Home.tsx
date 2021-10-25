import * as React from 'react';
import * as Redux from 'react-redux';
import {Container} from '../../Components';
import {fetchVeichles} from '../../Stores/Veichles/actions';
import {getVeichlesSelector} from '../../Stores/Veichles/selectors';
import CarList from '../../Components/CarList/CarList';

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
