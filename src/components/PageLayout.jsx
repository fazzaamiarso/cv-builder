import { Outlet } from 'react-router-dom';

const PageLayout = () => {
  return (
    <>
      <div className="fixed -z-10 w-screen h-screen bg-transparent top-0 ">
        <div className="w-screen h-24 bg-[#502ACD]"></div>
      </div>
      <Outlet />
    </>
  );
};

export default PageLayout;
