import './App.css'
import { LoadingButton } from "@mui/lab";
import TextBtn from './components/Btns/TextBtn';
import ContainedBtn from './components/Btns/ContainedBtn';
import OutLinedBtn from './components/Btns/OutLinedBtn';
import DisabledBtn from './components/Btns/DisabledBtn';
import SuccesBtn from './SuccessBtn';
import ComplexBtn from './components/Btns/ComplexBtn';
function App() {
  return (
    <div className="text-center">
      <div className='mt-6'>
        <TextBtn className='
        text-3xl
        p-3
        duration-200
        text-[#3498db] 
        hover:rounded 
        hover:bg-[#2980b9] 
        hover:bg-opacity-10'/>
      </div>
      <div className='mt-6'> 
        <ContainedBtn className='
        text-3xl
        p-3
        duration-200
        text-[#ecf0f1]
        rounded 
        bg-[#9b59b6] 
        hover:bg-[#663a77]'/>
      </div>
      <div className='mt-6'> 
        <OutLinedBtn className='
        text-3xl
        p-3
        duration-200
        border
        border-[#e74c3c]
        text-[#e74c3c]
        rounded 
        hover:bg-[#e74c3c]
        hover:bg-opacity-10'/>
      </div>
      <div className='mt-6'> 
        <DisabledBtn className='
        text-3xl
        p-3
        text-[#bdc3c7]
        rounded 
        bg-[#bdc3c7]
        opacity-80
        bg-opacity-30'/>
      </div>
      <div className='mt-6'> 
        <DisabledBtn className='
        text-3xl
        p-3
        text-[#bdc3c7]
        border-4
        border-[#bdc3c7]
        rounded 
        opacity-80
        border-opacity-30'/>
      </div>
      <div className='mt-6'> 
        <SuccesBtn className='
        text-3xl
        p-3
        duration-200
        rounded 
        text-[#fff]
        bg-[#2e7d32]
        hover:bg-[#1c4e1f]
        '/>
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
      <ComplexBtn className='
        text-3xl
        hover:p-3
        duration-200
        rounded 
        border-b-4
        text-[#000]
        hover:border
        hover:border-solid
        hover:border-[#000]
        '/>
      </div>
    </div>
  );
}

export default App;
