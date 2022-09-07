import { AiOutlineHome, AiFillBuild } from 'react-icons/ai';
import { MdOutlineContacts } from 'react-icons/md';
import NavbarItems from './NavbarItems';
import logo from '../public/logo1.png';
import Image from 'next/image';

function Navbar() {
  return (
    <nav>
        <div className='flex flex-col sm:flex-row m-2 justify-between items-center h-auto'>
            <Image className='object-contain' src={logo} width={200} height={170} alt='logo' />

            <div className="flex flex-grow justify-evenly max-w-2xl">
                <NavbarItems title='HOME' Icon={AiOutlineHome}  />
                <NavbarItems title='ABOUT' Icon={AiFillBuild} />
                <NavbarItems title='CONTACT' Icon={MdOutlineContacts} />
            </div>


        </div>
    </nav>
  )
}

export default Navbar