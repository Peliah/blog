import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar, SideBar } from './Components';
import AuthForm from './Pages/AuthForm';
import { createContext, useState, useEffect } from 'react';
import { retrieveData } from './Utils/Sessions';
import { BlogPage, Editor, Home, ManageBlogs, PageNotFound, Profile } from './Pages';

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
            <Route index element={<Home />} />
            <Route path='/dasboard' element={<SideBar />}>
              <Route path='/dashboards/blogs' element={<ManageBlogs />} />
            </Route>
            <Route path='/sign-in' element={<AuthForm type={'sign-in'} />} />
            <Route path='/sign-up' element={<AuthForm type={'sign-up'} />} />
            <Route path='user/:id' element={<Profile />} />
            <Route path='blog/:page' element={<BlogPage />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
