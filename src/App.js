import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { useContext, useEffect } from 'react'
import { AppContext } from './context/Appcontext'
import './App.css';

export default function App() {
  const{fetchBlogPosts}=useContext(AppContext);
  useEffect(()=>{
    fetchBlogPosts();
  },[])
  return <div className='w-full h-full flex flex-col gap-1 '>
    <Header/>

    <Blogs/>

    <Pagination/>
  </div>;
}
