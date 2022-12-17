
import Student from './student';
import Teacher from './teacher';
import Home from './home';
import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
     
    

      <BrowserRouter>
      <Routes>
     
        <Route path='/' element={<Home/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/teacher' element={<Teacher/>}/>
      </Routes>

      </BrowserRouter>
      
     

 
    
    </div>
  );
}


export default App;
