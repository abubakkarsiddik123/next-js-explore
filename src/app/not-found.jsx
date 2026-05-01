import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      

    <Image src='/not-found.jpg' alt="404 pic" width='500' height='500'/>

      <h1 className="text-7xl font-bold text-gray-800">404</h1>

      <p className="text-2xl text-gray-600 mt-4">
        Page Not Found
      </p>

      <p className="text-gray-500 mt-2 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Go Back Home
      </Link>

    </div>
  );
};

export default NotFound;