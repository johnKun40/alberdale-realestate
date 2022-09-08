import { AiOutlineHome, AiFillBuild } from 'react-icons/ai';
import { MdOutlineContacts, MdOutlineRoomService } from 'react-icons/md';
import NavbarItems from './NavbarItems';
import logo from '../public/logo1.png';
import Image from 'next/image';

function Navbar() {
  return (
    <nav className='bg-transparent'>
        <div className='sticky flex flex-col sm:flex-row m-2 justify-between items-center h-auto'>
            <Image className='object-contain cursor-pointer' src={logo} width={200} height={140} alt='logo' />

            <div className="flex justify-evenly max-w-2xl">
                <NavbarItems title='HOME' Icon={AiOutlineHome}  />
                <NavbarItems title='SERVICES' Icon={MdOutlineRoomService} />
                <NavbarItems title='ABOUT' Icon={AiFillBuild} />
                <NavbarItems title='CONTACT' Icon={MdOutlineContacts} />
            </div>


        </div>
    </nav>
  )
}

export default Navbar