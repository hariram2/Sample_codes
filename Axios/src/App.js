import axios from 'axios'
import './index.css';


function App() {

/////////////////////////////////////////////////////////////////
    //****************//  Get Method  //****************// 
/////////////////////////////////////////////////////////////////

  const getAxios = () => {

    // axios
    // ({
    //   method: 'get',
    //   url: 'https://ghibliapi.herokuapp.com/people?_limit=3'
    // })
    //   .then(res => showOutput(res))
    //   .catch(err => console.error(err));

    axios
    .get('https://ghibliapi.herokuapp.com/people?_limit=5')
    .then(res => showOutput(res))
    .catch(err => console.error(err));
  }

/////////////////////////////////////////////////////////////////
  //****************//  Post Method  //****************// 
/////////////////////////////////////////////////////////////////

  const postAxios = () => {

  //1// 
  //       axios({
  //   method: 'post',
  //   url: 'https://ghibliapi.herokuapp.com/people',
  //   data: {
  //     title: 'Hey! I am Inserted new data using method = 1',
  //     name: 'Mark Antony'
  //   }
  // })
  //   .then(res => showOutput(res))
  //   .catch(err => console.error(err));

  //2//

  axios
  .post('https://ghibliapi.herokuapp.com/people', {
        title: 'Hey! I am Inserted new data using method = 2',
        name: 'Octavius - Rome'
  })
  .then(res => showOutput(res))
  .catch(err => console.error(err));
  
  }

/////////////////////////////////////////////////////////////////
  //****************//  PUT/PATCH method  //****************//
//////////////////////////////////////////////////////////////////

  const updateAxios = () => {

    //PUT

    axios
    .put('https://jsonplaceholder.typicode.com/todos/1', {
      title: 'Using PUT method, we inserted data',
      status: true
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));

    //PATCH

    // axios
    // .patch('https://jsonplaceholder.typicode.com/todos/1', {
    //   title: 'Using PATCH method, we inserted data',
    //   completed: true
    // })
    // .then(res => showOutput(res))
    // .catch(err => console.error(err));
    
  }


  /////////////////////////////////////////////////////////
  //****************//  Delete Method  //****************//
  ///////////////////////////////////////////////////////// 

  const deleteAxios = () => {
    axios
    .delete('https://jsonplaceholder.typicode.com/todos/1', {})
    .then(res => showOutput(res))
    .catch(err => console.error(err));
  }


  ////////////////////////////////////////////////////////////
  //****************//  Simultaneous Data  //****************//
  ///////////////////////////////////////////////////////////

  const simAxios = () => {
    axios
    .all([
      axios.get('https://ghibliapi.herokuapp.com/locations?_limit=3'),
      axios.get('https://ghibliapi.herokuapp.com/species?_limit=3')
    ])
    .then(axios.spread((locations, species) => showOutput(locations)))
    .catch(err => console.error(err));
  }


    ////////////////////////////////////////////////////////////
  //****************//  Custom Headers  //****************//
  ///////////////////////////////////////////////////////////

  const headerAxios = () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Security Token - Generated successfully'
      }
    }
    axios
    .post('https://jsonplaceholder.typicode.com/todos', 
    { 
      title: 'New Header is implemented',
      status: 'Cmpleted'
    },
    config
    )
    .then(res => showOutput(res))
    .catch(err => console.error(err));
  }


    ////////////////////////////////////////////////////////////
//****************//  Transforming Requests & Response  //****************//
//Before a request is made or when a response is received, Axios provides a 
//mechanism to manipulate the data. This is done via two configuration options
// 1.
    ///////////////////////////////////////////////////////////


 const transformAxios = () => {
  const options = {
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      title: "We can transform our request and response using axios transform response"
    },
    transformResponse: axios.defaults.transformResponse.concat(data => {
      data.title = data.title.toUpperCase();
      return data;
    })
  }
    axios(options).then(res => showOutput(res));
  }


      ////////////////////////////////////////////////////////////
//****************//  Error Handling  //****************//
    ///////////////////////////////////////////////////////////

    const errorAxios = () => {
      axios
      .get('https://jsonplaceholder.typicode.com/todosss')
      .then(res => showOutput(res))
      .catch(err => {
        if(err.response){
          // SErver response with a status other than 200 range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else if  (err.request){
          //Request was made but no response
          console.error(err.request);
        } else {
          console.error(err.message);
        }
      });
    }


  /////////////////////////////////////////////////////////////////////////
//****************//  Intercepting Requests & Responses  //****************//
  ////////////////////////////////////////////////////////////////////////

  axios.interceptors.request.use(
    config => {
      console.log(
        `${config.method.toUpperCase()} request send to 
        ${config.url} at 
        ${new Date().getTime()}`
      );
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );


//////////////////////////////////////////////////////////////////////////////////////////////////


  return (
    <div className="App">
        <div className="container my-5">
            <div className="text-center axios__btn">
              <h1 className="display-4 text-center mb-3">Axios</h1>
              <button className="btn btn-primary my-3" onClick={getAxios}>GET</button>
              <button className="btn btn-info" onClick={postAxios}>POST</button>
              <button className="btn btn-warning" onClick={updateAxios}>PUT/PATCH</button>
              <button className="btn btn-danger" onClick={deleteAxios}>DELETE</button>
              <button className="btn btn-secondary" onClick={simAxios}>Sim Requests</button>
              <button className="btn btn-secondary" onClick={headerAxios}>Custom Headers</button>
              <button className="btn btn-secondary" onClick={transformAxios}>Transform</button>
              <button className="btn btn-secondary" onClick={errorAxios}> Error Handling</button>
            </div>
            <hr />
            <div id="res"></div>
        </div>
    </div>
  );
}

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

export default App;
