import logo from './logo.svg';
//import styling sheet
import './App.css';
import {Route, Link, Routes} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd'
//using index.js in components folder allows us to import components on one line using {} notation using 'export {default as ...} from '...''
import {Navbar, Cryptocurrencies, Exchanges, News, Cryptodetails, Homepage} from './components';

function App() {
  return (
  <div className='app'>
    <div className='navbar'>
    <Navbar/>
    </div>
    <div className='main'>
      <Layout>
        <div className='routes'>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
              

            <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
              
    {/**********************************************:coinId means that the route becomes dynamic************************************** */}
            <Route path="/crypto/:coinId" element={<Cryptodetails/>}/>


            <Route path="/exchanges" element={  <Exchanges/>}/>
            

            <Route path="/news" element={ <News/>}/>
             
    
          </Routes>
        </div>
      </Layout>
      <div className='footer'>
    <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
      Cryptoverse<br/>
      All rights reserved
    </Typography.Title>
    <Space>
      <Link to='/'>Home</Link>
      <Link to='/exchanges'>Exchange</Link>
      <Link to='/news'>News</Link>
    </Space>
    </div>
    </div>
  </div>
  );
}

export default App;
