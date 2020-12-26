import React from 'react';
import Layout from '../Components/Layout/Layout';
import Main from './MainController/Main';

const App=(props)=>{
  return(
   <React.Fragment>
       <Layout>
          <Main/>
       </Layout>
   </React.Fragment>
  );
} 

export default App;