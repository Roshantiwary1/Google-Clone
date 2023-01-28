import User from './User';

const Header = () => {
  return (
    <header className='flex justify-between sm:p-5 p-2 text-sm text-gray-700'>
     <div className="flex sm:space-x-5 space-x-2 items-center">
        <p className='link'>About</p>
        <p className='link'>Store</p>
     </div>
     <div className="flex sm:space-x-4 space-x-2 items-center">
        <p className='link'>Gmail</p>
        <p className='link'>Images</p>
        <User/>
     </div>
    </header>
  )
}

export default Header
