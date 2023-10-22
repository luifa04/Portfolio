import Navigation from './screens/navigationBar/NavigationBar'
import './App.css';
import Particles from './Particles';
import Header from './screens/header/Header'
import AboutMe from './screens/aboutMe/AboutMe'
import Technologies from './screens/technologies/Technologies';
import Portfolio from './screens/portfolio/Portfolio';
import ContactMe from './screens/contactMe/ContactMe';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <Particles />
      <AboutMe />
      <Technologies />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;
