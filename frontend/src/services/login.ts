import axios from 'axios';

const login = async () => {
  const { data } = await axios.post('http://localhost:8081/login', {
    username: 'user',
    password: 'password'
  });

  return data;
};

export default { login };
