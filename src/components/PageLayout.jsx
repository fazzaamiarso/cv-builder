import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const PageLayout = () => {
  return (
    <>
      <div className="fixed -z-10 w-screen h-screen bg-transparent top-0 ">
        <div className="w-screen h-24 bg-[#502ACD]"></div>
      </div>
      <Outlet />
      <ToastContainer
        role="alert"
        hideProgressBar={true}
        autoClose={2000}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        bodyClassName="text-gray-800"
      />
    </>
  );
};

export default PageLayout;
