
import { Outlet,Navigate } from 'react-router-dom'

const AuthLayout = () => {
  const IsAuth =  false;
  return (
    <>
      {IsAuth ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col">
            
            <Outlet />

          </section>

          <img
            src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4d630a69-6243-49f8-af7b-be1bf39c56b4/width=1480/Link%20to%20image_00008_.jpeg"
            alt="logo"
            className="hidden md:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
}

export default AuthLayout