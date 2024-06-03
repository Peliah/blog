import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components';
import AuthForm from './Pages/AuthForm';
import { createContext, useState, useEffect } from 'react';
import { retrieveData } from './Utils/Sessions';
import { Editor } from './Pages';

export const UserContext = createContext({})

function App() {
  const [userAuth, setUserAuth] = useState({});

  useEffect(() => {
    let userSession = retrieveData("user");
    console.log(userSession);
    setUserAuth(JSON.parse(userSession));
  }, [])
  return (
    <div className="App">
      <UserContext.Provider value={{ userAuth, setUserAuth }}>
        <Routes>
          <Route path='/editor' element={<Editor />} />
          <Route path='/' element={<Navbar />}>
            <Route path='/sign-in' element={<AuthForm type={'sign-in'} />} />
            <Route path='/sign-up' element={<AuthForm type={'sign-up'} />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
