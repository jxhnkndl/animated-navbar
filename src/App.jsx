import Hero from './components/Hero';
import FromBottom from './components/FromBottom';
import FromLeft from './components/FromLeft';
import FromRight from './components/FromRight';
import FromLeftPartial from './components/FromLeftPartial';

function App() {
  return (
    <div>
      {/* <FromBottom /> */}
      {/* <FromTop /> */}
      {/* <FromRight /> */}
      {/* <FromLeft /> */}
      <FromLeftPartial />
      <Hero />
    </div>
  );
}

export default App;
