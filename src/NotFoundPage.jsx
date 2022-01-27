import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl">Ooops.. no page found</h1>
      <Link to="/" className="text-blue-500">
        Go back home
      </Link>
    </div>
  );
};

export default NotFoundPage;
