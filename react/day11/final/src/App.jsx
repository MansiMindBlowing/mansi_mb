import './index.css';

// import UserCard from "./components/UserCard";  
import Accordian from './components/Accordion';
// import { useState } from 'react';
import Dropdown from './components/Dropdown';
import { UserProvider } from './components/UserContext';
import Header from './components/Header';
import Profile from './components/Profile';

const App = ()=>{

  // const[selection, setSelection] = useState(null);

  // const handleSelect = (option)=>{
  //   setSelection(option);
  // }

  // const items = [
  //   {label:'Can I use React in my project',
  //    content:'Ofcourse u can use whatever the fuck you want to use duhh Ofcourse u can use whatever the fuck you want to use duhh'
  //   },
  //   {
  //     label:'Can I use React in my project',
  //    content:'Ofcourse u can use whatever the fuck you want to use duhh Ofcourse u can use whatever the fuck you want to use duhh'
  //   },
  //   {
  //     label:'Can I use React in my project',
  //    content:'Ofcourse u can use whatever the fuck you want to use duhh Ofcourse u can use whatever the fuck you want to use duhh'
  //   }
  // ]

  // const options = [{label:'red', value:'red'},
  //                   {label:'green', value:'green'},
  //                   {label:'blue', value:'blue'}
  // ]

  return (
    // <div>
    //      {/* <Accordian items={items}/>
    //      <Dropdown options={options} selection={selection} onSelect={handleSelect}/> */}

        
    // </div>
    <UserProvider>
      <Header/>
      <Profile/>
    </UserProvider>
 
  )
}
export default App;