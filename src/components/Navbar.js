import React, { useState, useEffect } from 'react';
import { Check, Cog, House, Menu, Moon, Sun } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { MenuItemsList } from '@/config';
import { DropdownMenu, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuContent } from './ui/dropdown-menu';
import { Badge } from './ui/badge';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
const MenuItems = ({ setIsSheetOpen }) => {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        setIsSheetOpen(false);
        navigate(path);
    };
    return (React.createElement("ul", { className: "w-full mt-7 max-w-[550px] flex justify-between flex-col mb-3 md:mt-0 md:max-w-[400px] md:flex-row md:items-center" }, MenuItemsList &&
        MenuItemsList.map((menuItem) => (React.createElement("li", { key: menuItem.id, className: "cursor-pointer relative w-60 text-white font-semibold text-xl group border m-5 rounded-md center p-2 shadow-lg translate hover:-translate-y-1 hover:opacity-90 md:w-20 md:border-none md:m-0 md:p-1", onClick: () => handleNavigate(menuItem.path) },
            menuItem.label,
            React.createElement("span", { className: "absolute left-0 bottom-0 h-1 w-full bg-orange-400 transition-transform duration-500 scale-x-0 origin-left group-hover:scale-x-100 hidden md:flex" }))))));
};
const ThemeToggleButton = ({ isDarkMode, toggleTheme }) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleSwitchChange = (checked) => {
        setIsChecked(checked);
        console.log('Switch value', checked);
    };
    return (React.createElement("div", { className: "center w-full p-1" },
        React.createElement(Switch, { id: 'dark-mode', checked: isChecked, onCheckedChange: handleSwitchChange }),
        React.createElement(Label, { htmlFor: 'dark-mode', className: 'ml-2' }, isChecked ? React.createElement(Moon, null) : React.createElement(Sun, null))));
};
const HeaderRightContent = ({ selectedLanguage, changeLanguage, isDarkMode, toggleTheme }) => {
    return (React.createElement("div", null,
        React.createElement(DropdownMenu, null,
            React.createElement(DropdownMenuTrigger, { asChild: true },
                React.createElement("div", { className: "w-60 mx-5 p-1 rounded-md max-w-[450px] center border md:w-20 md:border-none" },
                    React.createElement(Cog, { className: "nav-icon" }))),
            React.createElement(DropdownMenuContent, { className: "bg-gray-800 text-white rounded-md shadow-lg p-2", side: "bottom", sideOffset: 5, align: "start", "data-small-screen-side": "right" },
                React.createElement(DropdownMenuLabel, { asChild: true, className: "text-sm font-bold text-gray-400 px-4" },
                    React.createElement(ThemeToggleButton, { isDarkMode: isDarkMode, toggleTheme: toggleTheme })),
                React.createElement(DropdownMenuSeparator, { className: "h-px bg-gray-600 my-2" }),
                React.createElement(DropdownMenuLabel, { asChild: true, className: 'center' },
                    React.createElement(Badge, { className: "px-4 py-2 text-center hover:bg-gray-700 rounded cursor-pointer", onClick: changeLanguage },
                        selectedLanguage,
                        " ",
                        React.createElement(Check, { className: "ml-2 w-4 h-4 font-bold text-green-400" })))))));
};
export const Navbar = () => {
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    // Get initial theme and language from localStorage
    const initialTheme = localStorage.getItem('theme') === 'dark';
    const initialLanguage = localStorage.getItem('language') || 'English';
    const [isDarkMode, setIsDarkMode] = useState(initialTheme);
    const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);
    const toggleTheme = () => {
        setIsDarkMode((prev) => {
            const newTheme = !prev;
            localStorage.setItem('theme', newTheme ? 'dark' : 'light');
            return newTheme;
        });
    };
    const changeLanguage = () => {
        const newLanguage = selectedLanguage === 'English' ? 'Nepali' : 'English';
        setSelectedLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    };
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768 && isSheetOpen) {
                setIsSheetOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isSheetOpen]);
    return (React.createElement("nav", { className: "w-full fixed top-0 px-12 py-5 bg-black flex flex-row justify-between z-30" },
        React.createElement("div", { className: "md:px-10" },
            React.createElement(Link, { to: '/' },
                React.createElement(House, { className: "nav-icon" }))),
        React.createElement("div", { className: "w-full max-w-[800px] hidden md:flex flex-col md:flex-row justify-between" },
            React.createElement(MenuItems, { setIsSheetOpen: setIsSheetOpen }),
            React.createElement(HeaderRightContent, { selectedLanguage: selectedLanguage, changeLanguage: changeLanguage, isDarkMode: isDarkMode, toggleTheme: toggleTheme })),
        React.createElement("div", { className: "md:hidden" },
            React.createElement(Sheet, { open: isSheetOpen, onOpenChange: setIsSheetOpen },
                React.createElement(SheetTrigger, null,
                    React.createElement(Menu, { className: "nav-icon" })),
                React.createElement(SheetContent, { side: 'left', className: "p-4 bg-gray-800 flex flex-col items-start w-72" },
                    React.createElement("div", { className: "w-full max-w-[800px]" },
                        React.createElement(MenuItems, { setIsSheetOpen: setIsSheetOpen }),
                        React.createElement(HeaderRightContent, { selectedLanguage: selectedLanguage, changeLanguage: changeLanguage, isDarkMode: isDarkMode, toggleTheme: toggleTheme })))))));
};
