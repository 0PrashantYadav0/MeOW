import React from 'react'
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import MainHeader from '../components/Header/MainHeader';
import Bar from '../components/Bar';

function Home() {
  const authStatus = useSelector((state) => state.auth.status)

  return (
    <>
    { !authStatus && (
      <Header/>
    )}
    <MainHeader />
    { !authStatus && (
      <Bar />
    )}
    </>
  )
}

export default Home
