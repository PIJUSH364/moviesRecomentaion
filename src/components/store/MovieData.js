import axios from 'axios';

const fetchData = async () => {
  axios
    .get(
      'https://api.themoviedb.org/3/movie/popular?api_key=b6d57f45c1ed674f27d2d36fd0ed479c&language=en-US&page=1'
    )
    .then(function (response) {
        
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
//   const data = await response.json();
//   return data.results;
};

export default fetchData;
