import Link from "next/link";

export default function NotFound(){
  return (
     <div className='bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100  flex items-center justify-center min-h-screen'>
      <div className='text-center px-6'>
        <h1 className='text-7xl font-bold mb-4'>404</h1>
        <h2 className='text-xl  text-gray-600 dark:text-gray-200  mb-6'>This is not the web page you are looking for.</h2>
        <Link href='/' className='inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition'>
          GO HOME
        </Link>
      </div>
    </div>
  );
}
