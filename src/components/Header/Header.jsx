import { useNavigate } from "react-router-dom";
import ai from "../../assets/ai.png";
import people from "../../assets/people.png";


function Header() {
  const navigate = useNavigate();

  return (
    <>
    <div className="flex px-16 pt-12 max-lg:flex-wrap-reverse ">
      <div className="px-4">
        <h1 className='bg-text text-7xl font-semibold py-8 text-start'><strong>MeOW</strong><br/> Explore, engage, and be inspired!</h1>
        <p className="text-[#81afdd] mb-7">
        Embark on a journey through captivating narratives and thought-provoking insights at <strong>MeOW</strong>. Explore a world of diverse topics, from lifestyle and tech to travel and beyond. Uncover inspiration in every click and join a community that celebrates the beauty of words. Start your adventure today!
        </p>
        <div>
        <div className="flex">
          <input className="border-none bg-[#132c44] text-white w-full p-4 h-16 rounded-l-lg" placeholder="Enter Your Email"  type="text"/>
          <button className=" bg-[#ff4820] text-white m-0 p-4 w-1/5 h-16 text-sm rounded-r-lg" onClick={() => navigate("/login")}>Get Started</button>
        </div>
        <div className="py-12 flex">
          <img src={people} alt="poeple" />
          <p className="text-white">Connect with lots and lots of peoples....</p>
        </div>
        </div>
      </div>
      <div>
        <img src={ai} alt="ai" className="w-full"/>
      </div>
    </div>
    
    </>
  )
}

export default Header
