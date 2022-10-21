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
    </div>
  );
}

export default App;
