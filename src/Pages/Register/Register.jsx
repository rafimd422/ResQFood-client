import { Link } from 'react-router-dom'
import regpic from './../../assets/regpage.json'
import { Player } from '@lottiefiles/react-lottie-player'

const Register = () => {
  return (
    <div className='lg:h-screen max-h-fit flex items-center xl:justify-around flex-row-reverse lg:justify-between justify-center flex-wrap'>



<div className='xl:w-[680px] sm:w-[400px] md:w-[460px]'
>
<Player 
  autoplay
  loop
  src={regpic}
/>
</div>



 <div className="w-full max-w-md h-fit p-4 rounded-md shadow sm:p-8 ">
     <h2 className="mb-3 text-3xl font-bold text-center">Register Now</h2>
 

     <form className="space-y-8">
         <div className="space-y-4">
             <div className="space-y-2">
                 <label for="name" className="block text-sm">Name</label>
                 <input type="text" name="name" id="name" required placeholder="Enter Your Name" className="w-full px-3 py-2 border rounded-md border-gray-700  focus:border-blue-400" />
             </div>
             <div className="space-y-2">
                 <label for="photo" className="block text-sm">Photo URL</label>
                 <input type="url" name="photo" id="photo" placeholder="Your Photo URL" className="w-full px-3 py-2 border rounded-md border-gray-700  focus:border-blue-400" />
             </div>
             <div className="space-y-2">
                 <label for="email" className="block text-sm">Email address</label>
                 <input type="email" name="email" id="email" placeholder="Enter Your Email" className="w-full px-3 py-2 border rounded-md border-gray-700  focus:border-blue-400" />
             </div>
             <div className="space-y-2">
                 <div className="flex justify-between">
                     <label for="password" className="text-sm">Password</label>
                 </div>
                 <input type="password" name="password" id="password" placeholder="Enter Your Password" className="w-full px-3 py-2 border rounded-md border-gray-700  focus:border-blue-400" />
             </div>
 
         </div>
         <button type="button" className="w-full px-8 py-3 font-semibold rounded-md hover:bg-gray-900 bg-gray-800 text-white">Sign in</button>
     </form>

     <div className="flex items-center w-full my-4">
         <hr className="w-full text-gray-400" />
         <p className="px-3 text-gray-400">OR</p>
         <hr className="w-full text-gray-400" />
     </div>

     <div className="my-6 space-y-4">
         <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri border-gray-400 focus:ri">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                 <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
             </svg>
             <p>Continue with Google</p>
         </button>
     </div>
     <p className="text-sm text-center text-gray-400">Already have account? Please
         <Link to={'/login'} rel="noopener noreferrer" className="focus:underline hover:underline text-green-600"> Log in</Link>
     </p>
 </div>
 
     </div>
  )
}

export default Register
