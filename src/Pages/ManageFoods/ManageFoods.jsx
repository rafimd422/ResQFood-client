import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async';
import { AuthContext } from './../../Context/OurContext';
import { useQuery } from '@tanstack/react-query';
import load from './../../assets/errorpic.json'
import { Player } from '@lottiefiles/react-lottie-player';
import axios from 'axios';




const ManageFoods = () => {

const { user } = useContext(AuthContext)
const url = `http://localhost:5000/foods?email=${user?.email}`;
const { data: myFoods, isLoading } = useQuery({
  queryKey: ["Manage-Foods"],
  queryFn: () => axios.get(url),
  refetchOnMount: true,
  refetchOnWindowFocus: 'always',
});


   if(isLoading){
		return <div className='h-screen w-screen flex justify-center items-center fixed bg-white'>
			<Player
		autoplay
		loop
		src={load}
		style={{ height: '600px', width: '560px' }}
	  />
			</div>
	}


  console.log(myFoods?.data?.length)


  return (
<>
<Helmet>
<title>ResQFood | Manage Foods</title>
</Helmet>

<div>
  {myFoods?.data?.length}
</div>
</>
  )
}

export default ManageFoods
