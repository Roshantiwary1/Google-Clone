import User from './User';

const Header = () => {
  return (
    <header className='flex justify-between sm:p-5 p-2 text-sm text-gray-700'>
     <div className="flex sm:space-x-5 space-x-2 items-center">
        <a href='https://about.google/' target="_blank" rel="noreferrer" className='link'>About</a>
        <a href='https://store.google.com/' target="_blank" rel="noreferrer" className='link'>Store</a>
     </div>
     <div className="flex sm:space-x-4 space-x-2 items-center">
        <a href='https://mail.google.com' target="_blank" rel="noreferrer" className='link'>Gmail</a>
        <a  target="_blank" rel="noreferrer" className='link'>Images</a>
        <User/>
     </div>
    </header>
  )
}

export default Header
