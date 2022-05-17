// import logo from './logo.svg';
import './App.css';
import Button from './components/button'
import Link from './components/link';
import Logo from './components/logo';

let arr = [
  {category:"Services"},
  {category:"Projects"},
  {category:"About"},
  
]

function App() {
  return (

    <div className='box'> 
      <Logo></Logo>
    <div className='link'>
     {arr.map((a,i)=>
     (
       <Link{...a} key={i}/>
     ))}

    </div>
<Button></Button>
    </div>
  );
}


export default App;
