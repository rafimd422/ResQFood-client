import { Link } from "react-router-dom";
import errorPic from '../../assets/lottieflow-404-12-5-000000-easey.json'
import { Player } from "@lottiefiles/react-lottie-player";

const ErrorPage = () => {
  return (
<div className="grid h-screen px-4 bg-white place-content-center">

<Player
  autoplay
  loop
  src={errorPic}
  style={{ height: '300px', width: '300px' }}
>
</Player>

  <div className="text-center">
    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Uh-oh!
    </p>

    <p className="mt-4 text-gray-500">We can't find that page.</p>

    <Link to={'/'}
      className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
    >
      Go Back Home
    </Link>
  </div>
</div>
  );
}

export default ErrorPage;
