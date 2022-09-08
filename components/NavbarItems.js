export default function NavbarItems({Icon, title}) {
    return (
      <div className="flex text-[#9C7821] flex-col items-center ml-10 cursor-pointer group w-12 sm:w-20 hover:text-white">
          <Icon className="h-10 w-6 mb-1 group-hover:animate-bounce"/>
          <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
      </div>
    );
    
  }