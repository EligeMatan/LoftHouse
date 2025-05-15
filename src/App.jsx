import '@/styles/scss/App.scss';
import FirstScreen from '@/components/FirstScreen';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Appartaments from './components/Appartaments';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <FirstScreen />
      <Testimonials />
      <Appartaments />
      <Footer />
    </>
  )
}

export default App;
