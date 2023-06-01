import { useEffect } from "react";

 const useTitle = title =>{

    useEffect( () =>{
        // document.title = title;
        document.title = `toyMart | ${title}`;
    } , [title])
 };

 export default useTitle;