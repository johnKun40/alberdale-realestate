export default function NavbarItems({Icon, title}) {
    return (
      <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-[#9C7821]">
          <Icon className="h-10 w-6 mb-1 group-hover:animate-bounce"/>
          <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
      </div>
    );
    
  }