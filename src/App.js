import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Banner from './components/Banner/Banner';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/banner'>
            <Banner></Banner>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route path='/projectsDetails/:projectId'>
              <ProjectDetails></ProjectDetails>
          </Route>
          <Route exact path='/contact'>
            <Contact></Contact>
          </Route>
          <Route exact path='/experience'>
            <Experience></Experience>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
