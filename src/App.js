import './App.css'
import { LoadingButton } from "@mui/lab";

// use Button istead of make separate Btn COMPONENT =>
// import Btn from './components/Btns/Btn';

import { Button as Btn} from "@mui/base";
function App() {
  return (
    <div className="text-center">
      <div className='mt-6'>
        <Btn className='
        text-3xl
        p-3
        duration-200
        text-[#3498db] 
        hover:rounded 
        hover:bg-[#2980b9] 
        hover:bg-opacity-10'>TEXT</Btn>
      </div>
      <div className='mt-6'> 
        <Btn className='
        text-3xl
        p-3
        duration-200
        text-[#ecf0f1]
        rounded 
        bg-[#9b59b6] 
        hover:bg-[#663a77]'>CONTAINED</Btn>
      </div>
      <div className='mt-6'> 
        <Btn className='
        text-3xl
        p-3
        duration-200
        border
        border-[#e74c3c]
        text-[#e74c3c]
        rounded 
        hover:bg-[#e74c3c]
        hover:bg-opacity-10'>OUTLINED</Btn>
      </div>
      <div className='mt-6'> 
        <Btn className='
        text-3xl
        p-3
        text-[#bdc3c7]
        rounded 
        bg-[#bdc3c7]
        opacity-80
        bg-opacity-30'>DISABLED</Btn>
      </div>
      <div className='mt-6'> 
        <Btn className='
        text-3xl
        p-3
        text-[#bdc3c7]
        border-4
        border-[#bdc3c7]
        rounded 
        opacity-80
        border-opacity-30'>DISABLED</Btn>
      </div>
      <div className='mt-6'> 
        <Btn className='
        text-3xl
        p-3
        duration-200
        rounded 
        text-[#fff]
        bg-[#2e7d32]
        hover:bg-[#1c4e1f]
        '>SUCCSSES</Btn>
      </div>
      <div className='mt-6'> 
      <LoadingButton className='p-3' loading variant="outlined" >
        <span>loading</span>
      </LoadingButton>
      </div>
      <div className='mt-6'> 
      <LoadingButton className='p-3' loading loadingIndicator="Loading…" variant="outlined">
      <span >Loading…</span>
      </LoadingButton>
      </div>
      <div className='mt-6'> 
      <Btn className='
        text-3xl
        hover:p-3
        duration-200
        rounded 
        border-b-4
        text-[#000]
        hover:border
        hover:border-solid
        hover:border-[#000]
        '>COMPLEX</Btn>
      </div>
    </div>
  );
}

export default App;
