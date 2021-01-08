import { useLayoutEffect, useState } from "react"

const useWindowPosition=(id)=>{
    const [animations,setAnimations]=useState(false);

    useLayoutEffect(()=>{
        function updatePosition(){
            const offetSetHeight=window.document.getElementById(id).offsetHeight;
            if(window.pageYOffset> offetSetHeight *0.7){
                setAnimations(true)
            }
        }
        window.addEventListener('scroll',updatePosition);
        updatePosition();
        return ()=>window.removeEventListener('scroll',updatePosition);
    },[id])
 return animations;
}
export default useWindowPosition;