// // import logo from './logo.svg';
// // import './App.css';
// // import Navbar from './Pages/Navbar';
// // import '../node_modules/bootstrap/dist/css/bootstrap.css';
// // import '../node_modules/bootstrap/dist/js/bootstrap.js';
// // import './CSS/Custom.css';
// // import Main from './Pages/Main.js';
// // import Group from './Pages/Group.js';
// // import Aboutus from './Pages/Aboutus.js';
// // import Application from './Pages/Application.js';
// // import Service from './Pages/Service.js';
// // import { BrowserRouter, Route, Routes } from 'react-router-dom';
// // import Products from './Pages/Products.js';
// // import Home from './Pages/Home.js';

// // function App() {
// //   return (
// //     <div className="App">
// //       <Navbar/>
// //       {/* <Main/>
// //       <Group/>
// //       <Aboutus/>
// //       <Application/>
// //       <Service/> */}

// //       <BrowserRouter>
// //         <Routes>
// //           <Route path='/' element={<Home/>}></Route>
// //           <Route path="/products" element={<Products/>}></Route>
// //         </Routes>
// //       </BrowserRouter>
// //     </div>
// //   );
// // }

// // export default App;
// import './App.css';
// import Navbar from './Pages/Navbar';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.js';
// import './CSS/Custom.css';
// import Main from './Pages/Main.js';
// import Group from './Pages/Group.js';
// import Aboutus from './Pages/Aboutus.js';
// import Application from './Pages/Application.js';
// import Service from './Pages/Service.js';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Products from './Pages/Products.js';
// import Home from './Pages/Home.js';
// import Touch from './Pages/Touch.js';
// import Profile from './Pages/Profile.js';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
        
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/aboutus" element={<Aboutus />} />
//           <Route path="/application" element={<Application />} />
//           <Route path="/service" element={<Service />} />
//           <Route path="/touch" element={<Touch/>}/>
//           <Route path='/profile' element={<Profile/>}/>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
// App.js
import './App.css';
import Navbar from './Pages/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './CSS/Custom.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.js';
import Products from './Pages/Products.js';
import Aboutus from './Pages/Aboutus.js';
import Application from './Pages/Application.js';
import Service from './Pages/Service.js';
import Touch from './Pages/Touch.js';
import Profile from './Pages/Profile.js';
import ScrollToTop from './Pages/ScrollToTop.js';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        
        {/* Define the routes for your app */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/application" element={<Application />} />
          <Route path="/service" element={<Service />} />
          <Route path="/touch" element={<Touch />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
