
import Reviews from './Review/Reviews';
import Banner from './Banner/Banner';
import { Helmet } from 'react-helmet-async';
const Home = () => {
  return (
<>
<Helmet>
        <title>ResQFood | Home
        </title>
      </Helmet>
<Banner />
<Reviews/>
</>
  )
}

export default Home
