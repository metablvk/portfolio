import {Outlet} from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-8">
        <Outlet />
      </div>
    </>
  );
}

export default App;
