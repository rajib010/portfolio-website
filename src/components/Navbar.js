import React, { useState, useEffect } from 'react';
import { Check, Cog, House, Menu, Moon, Sun } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { MenuItemsList } from '@/config';
import { DropdownMenu, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuContent, } from './ui/dropdown-menu';
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
    return (React.createElement("ul", { className: "nav-menu-ul" }, MenuItemsList?.map((menuItem) => (React.createElement("li", { key: menuItem.id, className: "nav-menu-li", onClick: () => handleNavigate(menuItem.path) }, menuItem.label)))));
};
const ThemeToggleButton = ({ isDarkMode, toggleTheme }) => {
    return (React.createElement("div", { className: "center w-full p-1" },
        React.createElement(Switch, { className: `${isDarkMode ? 'bg-blue-500' : 'bg-slate-950'}`, id: "dark-mode", checked: isDarkMode, onCheckedChange: toggleTheme }),
        React.createElement(Label, { htmlFor: "dark-mode", className: "ml-2" }, isDarkMode ? React.createElement(Moon, { className: 'dropdown-icon' }) : React.createElement(Sun, { className: 'dropdown-icon' }))));
};
const HeaderRightContent = ({ selectedLanguage, changeLanguage, isDarkMode, toggleTheme, }) => {
    return (React.createElement("div", null,
        React.createElement(DropdownMenu, null,
            React.createElement(DropdownMenuTrigger, { asChild: true },
                React.createElement("div", { className: "w-60 mx-5 p-1 rounded-md max-w-[450px] center border border-black dark:border-white md:w-20 md:border-none" },
                    React.createElement(Cog, { className: "nav-icon" }))),
            React.createElement(DropdownMenuContent, { className: "bg-slate-200 dark:bg-slate-900 text-white rounded-md shadow-lg p-2", side: "bottom", sideOffset: 5, align: "start", "data-small-screen-side": "right" },
                React.createElement(DropdownMenuLabel, { asChild: true },
                    React.createElement(ThemeToggleButton, { isDarkMode: isDarkMode, toggleTheme: toggleTheme })),
                React.createElement(DropdownMenuSeparator, { className: "h-px bg-gray-600 my-2" }),
                React.createElement(DropdownMenuLabel, { asChild: true, className: "center" },
                    React.createElement(Badge, { className: "language-badge", onClick: changeLanguage },
                        selectedLanguage,
                        " ",
                        React.createElement(Check, { className: "ml-2 w-4 h-4 font-bold text-green-400" })))))));
};
export const Navbar = () => {
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const initialTheme = localStorage.getItem('theme') === 'dark';
    const initialLanguage = localStorage.getItem('language') || 'English';
    const [isDarkMode, setIsDarkMode] = useState(initialTheme);
    const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
            setIsDarkMode(true);
        }
        else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);
    const toggleTheme = () => {
        setIsDarkMode((prev) => {
            const newTheme = !prev;
            if (newTheme) {
                localStorage.setItem('theme', 'dark');
                document.body.classList.add('dark');
                document.body.classList.remove('light');
            }
            else {
                localStorage.setItem('theme', 'light');
                document.body.classList.add('light');
                document.body.classList.remove('dark');
            }
            return newTheme;
        });
    };
    const changeLanguage = () => {
        const newLanguage = selectedLanguage === 'English' ? 'Nepali' : 'English';
        setSelectedLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    };
    //hide sheet on md or larger
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768 && isSheetOpen) {
                setIsSheetOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isSheetOpen]);
    return (React.createElement("nav", { className: "navbar" },
        React.createElement("div", { className: "md:px-10" },
            React.createElement(Link, { to: "/" },
                React.createElement(House, { className: "nav-icon" }))),
        React.createElement("div", { className: "w-full max-w-[800px] hidden md:flex flex-col md:flex-row justify-between" },
            React.createElement(MenuItems, { setIsSheetOpen: setIsSheetOpen }),
            React.createElement(HeaderRightContent, { selectedLanguage: selectedLanguage, changeLanguage: changeLanguage, isDarkMode: isDarkMode, toggleTheme: toggleTheme })),
        React.createElement("div", { className: "md:hidden" },
            React.createElement(Sheet, { open: isSheetOpen, onOpenChange: setIsSheetOpen },
                React.createElement(SheetTrigger, null,
                    React.createElement(Menu, { className: "nav-icon" })),
                React.createElement(SheetContent, { side: "left", className: "p-4 dark:bg-gray-800 bg-slate-300  flex flex-col items-start w-72" },
                    React.createElement(MenuItems, { setIsSheetOpen: setIsSheetOpen }),
                    React.createElement(HeaderRightContent, { selectedLanguage: selectedLanguage, changeLanguage: changeLanguage, isDarkMode: isDarkMode, toggleTheme: toggleTheme }))))));
};
