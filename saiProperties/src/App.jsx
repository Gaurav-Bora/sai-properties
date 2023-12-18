
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import About from './pages/About';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/contact';
import Enquiry from './pages/enquiry';
import OurTeam from './pages/ourTeam';
import Property from './pages/property';
import Services from './pages/services';
import Login from './pages/login';
import Signup from './pages/signup';

function App() {
  return (
    <div className='container-fluid'>
      <NavigationBar/>
      <Routes>
      <Route path="/front" element={<Home />} />
        <Route path="/front/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/front/about" element={<About />} />
        <Route path="/front/contact" element={<Contact />} />
        <Route path="/front/enquiry" element={<Enquiry />} />
        <Route path="/front/ourTeam" element={<OurTeam />} />
        <Route path="/front/property" element={<Property />} />
        <Route path="/front/services" element={<Services />} />
        <Route path="/front/login" element={<Login />} />
        <Route path="/front/signup" element={<Signup />} />
        

      </Routes>
    </div>
  );
}

export default App;

