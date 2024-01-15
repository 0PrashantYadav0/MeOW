import { useNavigate } from "react-router-dom";
import ai from "../../../GSlogo.webp";
import people from "../../assets/people.png";
import Links from "../Links";


function Header() {
  const navigate = useNavigate();

  return (
    <>
    <div className="flex px-16 pt-12 max-lg:flex-wrap-reverse max-md:p-2 ">
      <div className="px-4">
        <h1 className='bg-text text-7xl font-semibold py-8 text-start max-lg:text-4xl'><strong>MeOW</strong><br/> Explore, engage, and be inspired!</h1>
        <p className="text-[#81afdd] mb-7">
        Welcome to MeOW – where joy finds a voice! Share your moments of positivity and inspiration in brief posts. Celebrate the good things in life, no matter how small. Join our community, spread smiles, and create a MeOWmentum of optimism together! 🌟 #MeOWmoments #PositivityUnleashed
        </p>
        <div>
        <div className="flex">
          <input className="border-none bg-[#0e1d2b] text-white w-full p-4 h-16 rounded-l-lg" placeholder="Enter Your Email"  type="text"/>
          <button className=" bg-[#ff4820] text-white m-0 p-4 w-1/3 h-16 text-sm rounded-r-lg" onClick={()=> {
              navigate("/login")
              window.scrollTo(0, 0);
            }}>Get Started</button>
        </div>
        <div className="py-12 flex">
          <img src={people} alt="poeple" className="max-md:w-full"/>
          <p className="text-white py-2 pl-2 text-sm max-md:text-xs">Connect with lots and lots of peoples....</p>
        </div>
        </div>
      </div>
      <div className="w-full">
        <img src={ai} alt="ai" className="w-full"/>
      </div>
    </div>
    <Links /> 
    
    </>
  )
}

export default Header
