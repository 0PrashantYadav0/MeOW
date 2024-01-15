import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Button from '../Button'
import { useSelector } from 'react-redux';
import LogoutBtn from '../LogoutBtn'
import Logo from '../Logo';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status)


  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Contact Us",
      slug: "/contact",
      active:true
    },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  const navBtn = [
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  }
  ]

  const MenuBlock = ({toggleMenu}) =>{
    return (<div className='absolute right-0 top-20 hidden max-lg:block z-20'>
        {toggleMenu && 
        <div className='bg-[#031B34] text-white p-8 text-end flex flex-col justify-end items-end'>
          {navItems.map((item) => item.active ? (
            <p className='py-2 text-xl' key={item.slug}>
              <Link to={item.slug} onClick={()=>{setToggleMenu(false)}}>
                {item.name}
              </Link>
            </p>
          ): null)}
          <div className='hidden max-sm:block'>
            {navBtn.map((btn) => btn.active ? (
              <Button className='block w-full'
              onClick={() => navigate(btn.slug)}>
                 { btn.name }
              </Button>
            ): null)}
            {authStatus && (
              <p>
                <LogoutBtn />
              </p>
            )}
          </div>
        </div>}
    </div>)
}

  return (
    <>
     <div className='w-full flex justify-between items-center p-2 text-white'>
      <div className='p-4 text-2xl'>
        <Logo/>
      </div>
      <div className='flex justify-evenly gap-20 max-lg:hidden'>
      {navItems.map((item) => item.active ? (
            <p key={item.slug}>
              <Link to={item.slug}>
                {item.name}
              </Link>
            </p>
          ): null)} 
      </div>
      <div className='flex justify-evenly gap-12 px-10 max-sm:hidden max-lg:pr-20'>
      {navBtn.map((btn) => btn.active ? (
              <Button onClick={() => navigate(btn.slug)} key={btn.slug}>
                 { btn.name }
              </Button>
            ): null)}
            {authStatus && (
              <>
                <LogoutBtn />
              </>
            )}
      </div>
     </div>
     <div>
      {toggleMenu ? ( 
        <RiCloseLine
        className='absolute right-6 top-6 hidden max-lg:block'
              color="#fff"
              size={27}
              onClick={() => setToggleMenu((prev) => !prev)}
            />
        ) : (
        <RiMenu3Line
        className='absolute right-6 top-6 hidden  max-lg:block'
              color="#fff"
              size={27}
              onClick={() => setToggleMenu((prev) => !prev)}
          />
        )}
        <MenuBlock toggleMenu={toggleMenu}/>
      </div>
    </>
  )
}

export default Navbar
