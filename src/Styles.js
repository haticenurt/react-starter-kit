import logo from './logo.svg';
import styles from './App.module.css'
import Test from './Test'; // Doğru import
import Title from './Components'
import Bootstrap from './Bootstrap';
import './tailwind.css'
import './style.scss'
import Tailwind from './Tailwind';

function Styles() {
  useEffect(()=>{
   
    if(process.env.NODE_ENV ==='production'){
      //analitigi bilgilendir
    }
  },[])
  return (
    <div className= 'App_App__dyl1Z'>

    <Title>{process.env.NODE_ENV}</Title>
    <Title theme='dark'>{process.env.NODE_ENV}</Title>
    <p className='env'> 
      {process.env.REACT_APP_API_URL}
      <span>
        test
      </span>
    </p>
    <Test/>
    {process.env.NODE_ENV==='production'&&  (
      <>
      <img src='/logo192.png' alt=''/>
      <img src={logo} alt=''/>
      </>
    )}
    <Bootstrap/>
    <Tailwind/>
    </div>
  );
}

export default Styles;
