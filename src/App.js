import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Headline from './components/Headline';
import Works from './components/Works';

function App() {
  return (
    <div className={`App bg-navy ${window.innerHeight < 700 ? 'flex flex-col' : ''}`}>
      <div className={`flex flex-col ${window.innerHeight > 700 ? 'h-screen' : ''}`}>
        <Header />
        <Headline />
      </div>
      <Works />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
