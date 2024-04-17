import './App.css'

import Button from './components/Btns/Button';

function App() {
  return (
    <div className="d-flex justify-around">
      <Button className='ml-3 mt-6' variant={'text'}>TEXT</Button>
      <Button className='ml-6 mt-6' variant={'contained'}>contained</Button>
      <Button className='ml-6 mt-6' variant={'outlined'}>outlined</Button>
      <Button className='ml-6 mt-6'>Primary</Button>
      <Button className='ml-6 mt-6' disabled>disabled</Button>
      <Button className='ml-6 mt-6' variant={'contained'} disabled>disabled</Button>
      <Button className='ml-6 mt-6' variant={'outlined'} disabled>disabled</Button>
      <Button className='ml-6 mt-6' href={'#text-buttons'}>Link</Button>
      <Button className='ml-6 mt-6' color={'secondary'}>secondary</Button>
      <Button className='ml-6 mt-6' variant={'contained'} color={'secondary'}>secondary</Button>  
      <Button className='ml-6 mt-6' variant={'outlined'} color={'secondary'}>secondary</Button>  
      <Button className='ml-6 mt-6' color={'success'}>success</Button>  
      <Button className='ml-6 mt-6' variant={'contained'} color={'success'}>success</Button>  
      <Button className='ml-6 mt-6' variant={'outlined'} color={'success'}>success</Button>  
      <Button className='ml-6 mt-6' color={'error'}>error</Button>  
      <Button className='ml-6 mt-6' variant={'contained'} color={'error'}>error</Button>  
      <Button className='ml-6 mt-6' variant={'outlined'} color={'error'}>error</Button> 

      <Button className='ml-3 mt-6' size={'small'} variant={'text'}>small</Button>
      <Button className='ml-6 mt-6' size={'medium'} variant={'contained'}>medium</Button>
      <Button className='ml-6 mt-6' size={'large'} variant={'outlined'}>Large</Button> 
    </div>
  );
}

export default App;
