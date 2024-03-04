import Navbar from './components/Navbar/Navbar';
import './App.css';
import Hero from './components/hero/Hero';
import Companies from './components/companies/Companies';
import Pricing from './components/pricing/Pricing';
import Graph from './components/Graph/Graph';
import Status from './components/status/Status';
import Subscribe from './components/subscribe/Subscribe';
import Footer from './components/footer/Footer';
// import earnings from './components/earnings/earnings';


function App() {
  return (
   <> 
      <Navbar/>
      <Hero/>
      <Companies/>
      <Pricing/>
      <Graph/>
      <Status/>
      <Subscribe/>
      <Footer/>
   </>
  );
}

export default App;
