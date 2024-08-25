import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './components/Layouting/Layout';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4';
import Screen5 from './components/Screen5';
import Screen6 , {getGitInfo} from './components/Screen6';

const routting =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>

    
      <Route path='' element={<Screen1/>}/>
      <Route path='clour' element={<Screen2/>}/>
      <Route path='generatepassword' element={<Screen3/>}/>
      <Route path='currency' element={<Screen4/>}/>

      <Route path='user/' element={<Screen5/>}>
      {/* here after user/ is userId like this  user/userId   i can change it like user/ahmad*/}
      <Route path=':userId' element={<Screen5/>}/>
      {/* Sandwhiching is done here */}
      </Route>


      // using loader makes loadding even when cursor is hover on it 
      <Route loader={getGitInfo} path='github' element={<Screen6/>}/>
    </Route>
  )
)

/*<Route path="/" element={<Layout />}>
      <Route path="" element={<Screen1 />} />

     //  Wrap Screen2, Screen3, Screen4, Screen5 with UserContextProvider 
      <Route
        element={
          <UserContextProvider>
            <Route path="clour" element={<Screen2 />} />
            <Route path="generatepassword" element={<Screen3 />} />
            <Route path="currency" element={<Screen4 />} />
            <Route path="user">
              <Route path="" element={<Screen5 />} />
              <Route path=":userId" element={<Screen5 />} />
            </Route>
          </UserContextProvider>
        }
      />

      // Screen6 with loader 
      <Route loader={getGitInfo} path="github" element={<Screen6 />} />
    </Route>
*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routting} />
  </React.StrictMode>
);


