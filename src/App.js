import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Headline from './components/Headline';
import Works from './components/Works';

function App() {
  return (
    <div className="App  bg-navy">
      <div className="flex flex-col h-screen">
        <Header />
        <Headline />
      </div>
      <Works />
      <About />
      <Contact />
    </div>
  );
}

export default App;
