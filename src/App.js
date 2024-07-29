import { useState, useEffect } from 'react';
import {Header, Footer} from "./components/imports"
import './App.css';
import { useDispatch } from 'react-redux';
import authService from "./appwrite/auth";
import {login, logout} from "./store/authSlice"
import { Outlet } from 'react-router-dom';

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData) dispatch(login({userData}))
      else dispatch(logout())
    })
    .finally(() => setLoading(false))
  }, [dispatch])

  return loading ? (null) : (
    <div className='min-h-screen flex flex-col bg-gray-200'>
        <Header />
        <main className='flex-grow'>
          <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default App;
