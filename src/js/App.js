import logo from '../logo.svg';
import '../css/App.scss';
import {Route, Routes} from 'react-router-dom'
import Layout from '../components/Layout'


function App() {
  return (
      <>
          <Routes>
              <Route path='/' element={<Layout />} >

              </Route>
          </Routes>
      </>
  );
}

export default App;
