import { useRef, useEffect } from 'react';


export const useIsMount = (executionFun,dep) => {
  
  const isMountRef = useRef(true);
  useEffect(() => {
    if(isMountRef.current){
     
      isMountRef.current=false
     
    }
    else{
      executionFun()
    }
  }, [...dep]);
  
}
export default useIsMount
