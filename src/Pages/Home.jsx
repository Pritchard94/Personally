import Navigation from '../Components/Navigation'
import Banner from '../Components/Home/Banner'
import Digest from '../Components/Home/Digest'
import Design from '../Components/Home/Design'
import Tutorial from '../Components/Home/Tutorial'
import Newsletter from '../Components/Newsletter'

const Home = () => {
  return (
    <div>
        <Navigation/>
        <Banner/>
        <Digest />
        <Design/>
        <Tutorial/>
        <Newsletter/>
      
    </div>
  )
}

export default Home
