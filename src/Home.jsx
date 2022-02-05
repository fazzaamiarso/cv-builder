import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="flex flex-col items-center gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <Link to="/editor/add" className="text-blue-500 text-xl hover:scale-110">
        Go to Editor <span className="ml-1">➡</span>
      </Link>
    </div>
  );
};

export default Home;
