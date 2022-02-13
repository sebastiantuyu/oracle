
class HandleEnvoiroment {
    URL = process.env.NODE_ENV === 'production' ? 'einstein.herokuapp.com/api/' : process.env.REACT_APP_EINSTEIN_URL; 
}

const APIService = new HandleEnvoiroment();
export default APIService;