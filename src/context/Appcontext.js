import { createContext, useState } from "react";
import {baseUrl} from '../baseUrl';


export const AppContext=createContext();

//children means tag inside appcontextprovdier is the children 
export default function AppContextProvider({children})
{
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const [page,setPage]=useState(1);
   
    const[totalPages,setTotalPages]=useState(null);

    

    //api filling 
    async function fetchBlogPosts(page=1){
      setLoading(true);
      let url=`${baseUrl}?page=${page}`;
      try{
          const result=await fetch(url);
          const data=await result.json();
          console.log(data);
          setPage(data.page);
          setPosts(data.posts);
          console.log(posts);
          setTotalPages(data.totalPages)
      }
      catch(error)
      {
           //alert('Error in fetching data ');
           setPage(1);
           setPosts([]);
           setTotalPages(null);
      }
      setLoading(false);
    }


    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }
   

    //value is object in which all the required data is here 
    const value={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        handlePageChange,
        fetchBlogPosts
    };

    //now we have to return appContext provider 
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
//usecontext hook is used to get the AppContext 