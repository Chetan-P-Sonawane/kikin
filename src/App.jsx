import './App.css'
import Calculate from './components/Calculate'
import Doinggood from './components/Doinggood'
import Faqs from './components/Faqs'
import Features from './components/Features'
import Footer from './components/Footer'
import Good from './components/Good'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import WhoWeFund from './components/WhoWeFund'

function App() {

  return (
    <>
      <Navbar />
      <Landing />
      <Good />
      <Features />
      <Calculate />
      <WhoWeFund />
      <Doinggood />
      <Faqs />
      <Footer />
    </>
  )
}

export default App
