import Navbar from './navbar'
import Page from './page'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer'
import { Tooltip, Toast, Popover } from 'bootstrap';

function App() {

  return (
    <>
      <Navbar />
      <Page />
      <Footer />
    </>
  )
}

export default App;
