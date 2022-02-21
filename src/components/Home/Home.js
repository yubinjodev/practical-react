import {useEffect,useState} from "react";
import { Animated } from "react-animated-css";
import { Loading } from "../Loading/Loading";

export const Home = ()=> {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return(
    <div>
      <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
          />
        </head>
      
        <Animated animationIn="fadeIn" 
        animationOut="fadeOut" 
        animationInDuration={2000} 
        animationOutDuration={2000} 
        isVisible={true}>
          
        {loading? <Loading/>:<h1 className="homescreen">Welcome to Yubin's Portfolio</h1>}
        
      </Animated>
    </div>
  )
}
