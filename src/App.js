import './App.css';
import Header from './Header/Header';
import {BrowserRouter, Route ,Routes} from "react-router-dom" ;
import AddStudents from './AddStudents/AddStudents';
import ManageStudents from './ManageStudents/ManageStudents';
import View from './View/View';


function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}
        <Route path="/" element={<AddStudents />}/>
        <Route path="/AddStudents" element={<AddStudents />}/>
        <Route path="/ManageStudents" element={<ManageStudents />}/>
        <Route path="/View/:id" element={<View />}/>
        {/* logout */}
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
