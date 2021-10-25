import axios from '../../Services/axiosConfig';
import Data from '../vehicleList.json';

export const fetchVeichles = async () => {
  // some mock call
  await axios.get('/users');
  return Data;
};

export default {
  fetchVeichles,
};
