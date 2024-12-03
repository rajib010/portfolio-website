import { Cog, House, Moon, Sun } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuItemsList } from '@/config'
import { DropdownMenu, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuContent } from './ui/dropdown-menu';
import { Badge } from './ui/badge';

const MenuItems = () => {
  return (
    <ul className="w-full max-w-[550px] flex justify-between md:items-center flex-col mb-3 md:mb-2 md: md:max-w-[400px] md:flex-row">
      {MenuItemsList &&
        MenuItemsList.map((menuItem) => (
          <li
            className="relative w-20 text-white font-semibold text-xl group"
            key={menuItem.id}
          >
            <Link
              to={menuItem.path}
              className="relative inline-block pb-2"
            >
              {menuItem.label}
              <span
                className="absolute left-0 bottom-0 h-1 w-full bg-orange-400 transition-transform duration-500 scale-x-0 origin-left group-hover:scale-x-100"
              ></span>
            </Link>
          </li>
        ))}
    </ul>
  );
};

const HeaderRightContent = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const changeLanguage = () => {
    setSelectedLanguage((prevLanguage) =>
      prevLanguage === 'English' ? 'Nepali' : 'English'
    );
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Cog className="nav-icon" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="bg-gray-800 text-white rounded-md shadow-lg py-2 w-48"
          side="bottom" // Default position
          sideOffset={5}
          align="start"
          // Use Tailwind's responsive utilities for positioning
          data-small-screen-side="right" // Custom attribute for styling logic
        >
          <DropdownMenuLabel className="text-sm font-bold text-gray-400 px-4">
            Settings
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="h-px bg-gray-600 my-2" />
          <DropdownMenuLabel asChild>
            <Badge
              className="block px-4 py-2 text-left hover:bg-gray-700 rounded cursor-pointer"
              onClick={changeLanguage}
            >
              {selectedLanguage}
            </Badge>
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};


export const Navbar = () => {
  return (
    <nav className='w-full sticky top-0 px-12 py-5 bg-black flex flex-row justify-between'>
      <div className='md:px-10'>
        <Link to={'/'}>
          <House className='nav-icon' />
        </Link>
      </div>
      <div className='w-full max-w-[800px] hidden md:flex flex-col md:flex-row justify-between  '>
        <MenuItems />
        <HeaderRightContent />
      </div>
    </nav>
  )
}

