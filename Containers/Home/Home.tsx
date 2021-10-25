import * as React from 'react';
import * as Redux from 'react-redux';
import {Text} from 'react-native';
import {Container} from '../../Components';
import {fetchVeichles} from '../../Stores/Veichles/actions';
import {getVeichlesSelector} from '../../Stores/Veichles/selectors';

const Home = () => {
  const dispatch = Redux.useDispatch();
  const vechs = Redux.useSelector(getVeichlesSelector);
  console.log({vechs});

  React.useEffect(() => {
    dispatch(fetchVeichles());
  }, [dispatch]);

  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
};

export default Home;
