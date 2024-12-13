import php from "@/assets/php.png"
import mysql from "@/assets/mysql.png"
import java from "@/assets/java.png"
import js from "@/assets/java-script.png"
import wordpress from "@/assets/wordpress.png"


export const MenuItemsList = [
    {
        id: 'home',
        label: 'Home',
        path: '/'
    },
    {
        id: 'about',
        label: 'About',
        path: '/about'
    },
    {
        id: 'contact',
        label: 'Contact',
        path: '/contact'
    },
    {
        id: 'projects',
        label: 'Projects',
        path: '/projects'
    },
]


export const TechnicalSkillsInfo = [
    {
        id: 1,
        title: 'Javascript',
        content: 'MERN Stack, NEXTjs',
        projects: '5+',
        pic: js
    },
    {
        id: 2,
        title: 'Java',
        content: 'Core Java',
        projects: '0',
        pic: java
    },
    {
        id: 3,
        title: 'PHP',
        content: 'Web Development',
        projects: '2',
        pic: php
    },
    {
        id: 4,
        title: 'Wordpress',
        content: 'Content Management',
        projects: '0',
        pic: wordpress
    },
    {
        id: 5,
        title: 'SQL',
        content: 'Relational Database Management',
        projects: '2',
        pic: mysql
    },

]


