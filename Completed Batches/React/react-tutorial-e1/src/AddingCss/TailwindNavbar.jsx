const TailwindNavbar = () => {
  return (
    <nav className="h-[100px] flex bg-black">
        <aside className="nav_one basis-[20%] flex justify-center items-center">
            <img src="https://pngimg.com/d/squid_game_PNG35.png" alt="logo" className="h-[90px]"/>
        </aside>
        <aside className="nav_two basis-[80%] flex justify-end items-center pr-[100px] gap-[100px]">
            <a href="" className="text-2xl text-white">Home</a>
            <a href="" className="text-2xl text-white">About</a>
            <a href="" className="text-2xl text-white">Contact</a>
        </aside>
    </nav>
  )
}

export default TailwindNavbar