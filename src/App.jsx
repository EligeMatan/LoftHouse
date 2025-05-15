import '@/styles/scss/App.scss';
import FirstScreen from '@/components/FirstScreen';
import Testimonials from './components/Testimonials';
import Appartaments from './components/Appartaments';
import Cta from './components/Cta';
import Video from './components/Video';
import Maps from './components/Maps';
import Question from './components/Question';
import Footer from './components/Footer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <FirstScreen />
      <Testimonials />
      <Appartaments />
      <Cta />
      <Video />
      <Maps />
      <Question />
      <Footer />
    </>
  )
}

export default App;
