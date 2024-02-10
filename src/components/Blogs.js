import React ,{useContext} from 'react'
import { AppContext } from '../context/Appcontext';
import Spinner from './Spinner'

//now consuming of data so we consume through useContext 


const Blogs = () => {
    //consume 
    const{loading,posts}=useContext(AppContext);
  return (
    <div className=' h-full w-11/12 max-w-[670px] mx-auto py-8 flex flex-col justify-center items-center gap-y-7 mt-[66px] mb-[70px]'>
     {
         loading?(<Spinner/>):(
             posts.length===0 ? (
                 <div>
                     <p>No Post Found </p>
                 </div>
             ):
             (posts.map((post)=>(
                 <div key={post.id}>
                   <p className='font-bold text-lg'>{post.title}</p>
                   <p className='text-sm mt-[4px]'>
                       By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                   </p>
                   
                   <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
                   <p className='text-md mt-[10px]'>{post.content}</p>


                   <div className='flex gap-x-3'>
                   {
                       post.tags.map((tag,index)=>{
                           return <span key={index} className='text-blue-600 font-bold underline  text-xs mt-[5px]'>{`#${tag}`}</span>
                       })
                   }
                   </div>


                 </div>
             )))
         )
     }
    </div>
  )
}

export default Blogs

