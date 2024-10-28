
import Navbar from '../components/all/Navbar';

import Home from './page/Home';

const RootLayout = () => {
  return (
    <main className='w-full h-screen flex flex-col bg-white'>
      <div className='w-full fixed top-0 left-0'>
        <Navbar/>
      </div>
      <Home></Home>
      

    </main>
  );
};

export default RootLayout;
