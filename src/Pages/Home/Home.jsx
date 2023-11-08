
import Reviews from './Review/Reviews';
import Banner from './Banner/Banner';
import { Helmet } from 'react-helmet-async';
import FeaturedFoods from './FeaturedFood/FeaturedFoods';
import Sponsors from './Sponsors/Sponsors';
const Home = () => {
  return (
<>
<Helmet>
        <title>ResQFood | Home
        </title>
      </Helmet>
<Banner />
<FeaturedFoods />
<Reviews/>
<Sponsors />

</>
  )
}

export default Home
