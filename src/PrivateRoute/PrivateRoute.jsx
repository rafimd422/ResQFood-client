
import { useContext } from 'react';
import Login from './../Pages/Login/Login';
import { AuthContext } from '../Context/OurContext';
import Swal from 'sweetalert2';
import { Player } from '@lottiefiles/react-lottie-player';
import load from './../assets/errorpic.json'
const PrivateRoute = ({children}) => {


const {user,loading} = useContext(AuthContext)

if(loading){
        return (
          <div className="h-screen w-screen flex justify-center items-center fixed bg-white">
            <Player
              autoplay
              loop
              src={load}
              style={{ height: "600px", width: "560px" }}
            />
          </div>
        );
}

if(user !== null){
    return children;
}else{
    Swal.fire({
        icon: 'error',
        title: 'You have to log in first',
      })  
    return <Login />
}


}

export default PrivateRoute
