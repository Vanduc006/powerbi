import { useState } from 'react'
import React from 'react';
import { ClerkProvider, SignedIn, SignedOut, SignIn, UserButton } from '@clerk/clerk-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './sections/Navbar';
import Contents from './sections/Contents';

function App() {
  return (

    <main>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>


                <SignedIn>
                  {/* Hiển thị nếu người dùng đã đăng nhập */}
                  <div>
                    <Navbar>

                    </Navbar>
                  </div>
                  {/* <div className='mt-20'>
                    <Contents>
                      
                    </Contents>


                  </div> */}
                  

                </SignedIn>


                <div className='flex justify-center'>
                  <SignedOut>
                    {/* Hiển thị nếu người dùng chưa đăng nhập */}
                    <SignIn/>
                  </SignedOut>
                </div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </main>

  );
}

export default App;