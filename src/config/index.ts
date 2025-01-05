import php from "@/assets/php.png"
import mysql from "@/assets/mysql.png"
import java from "@/assets/java.png"
import js from "@/assets/java-script.png"
import wordpress from "@/assets/wordpress.png"
import agility from "@/assets/agility.png"
import communication from "@/assets/communication.png"
import time from "@/assets/time.png"
import criticalThinking from "@/assets/criticalthinking.png"
import mathematical from "@/assets/mathematical.png"

import bachelors from "@/assets/bachelors.png"
import school from "@/assets/school.png"
import highschool from "@/assets/highschool.png"
import ielts from "@/assets/ielts.png"

import nothing from "@/assets/nothing.png"



import { MapPinHouse, Mail, Phone, Twitter, Github, Linkedin, Youtube } from "lucide-react"



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
        id: 'projects',
        label: 'Projects',
        path: '/projects'
    },
]


export const TechnicalSkillsInfo = [
    {
        id: 'js',
        title: 'Javascript',
        content: 'MERN Stack, NEXTjs',
        projects: '5+',
        pic: js
    },
    {
        id: 'java',
        title: 'Java',
        content: 'Core Java',
        projects: '0',
        pic: java
    },
    {
        id: 'php',
        title: 'PHP',
        content: 'Web Development',
        projects: '2',
        pic: php
    },
    {
        id: 'wordpress',
        title: 'Wordpress',
        content: 'Content Management',
        projects: '0',
        pic: wordpress
    },
    {
        id: 'sql',
        title: 'SQL',
        content: 'Relational Database Management',
        projects: '2',
        pic: mysql
    },

]

export const OtherSkillsInfo = [
    {
        id: 1,
        title: 'Quick Learner',
        pic: agility,
        rating: 4.5
    },
    {
        id: 2,
        title: 'Communication',
        pic: communication,
        rating: 5
    },
    {
        id: 3,
        title: 'Time Management',
        pic: time,
        rating: 4
    },
    {
        id: 4,
        title: 'Critical Thinking',
        pic: criticalThinking,
        rating: 4.5
    },
    {
        id: 5,
        title: 'Analytical Skills',
        pic: mathematical,
        rating: 4
    },
]

export const FooterContact = [
    {
        id: 'email',
        value: 'pokhrelrajib016@gmail.com',
        icon: Mail
    },
    {
        id: 'phone',
        icon: Phone,
        value: '9844075750'
    },
    {
        id: 'address',
        icon: MapPinHouse,
        value: 'Shivasatakshi-08, Jhapa'
    },
]

export const FooterSocialLinks = [
    {
        id: 'twitter',
        url: 'https://x.com/rajib_974',
        label: 'Twitter',
        icon: Twitter,
    },
    {
        id: 'linkedin',
        url: 'https://www.linkedin.com/in/rajib-pokhrel-838944241/',
        label: 'LinkedIn',
        icon: Linkedin
    },
    {
        id: 'github',
        url: 'https://www.github.com/rajib010',
        label: 'GitHub',
        icon: Github,
    },
    {
        id: 'youtube',
        url: 'https://www.youtube.com/@acid3282',
        label: 'Youtube',
        icon: Youtube
    },
]

export const EducationalBackground = [
    {
        id: 'school',
        label: 'School',
        value: 'Pashupati Academy',
        location: 'Shivasatakshi-08, Jhapa',
        year: '2006-2018',
        pic:school
    },
    {
        id: 'highschool',
        label: 'High School',
        value: 'Kathmandu Bernhardt College',
        location: 'Balkhu, Kathmandu',
        year: '2018-2020',
        pic:highschool
    },
    {
        id: 'ielts',
        label: 'IELTS',
        value: '7.5 Overall',
        year: '2022',
        pic:ielts
    },
    {
        id: 'bachelors',
        label: 'Bachelors',
        value: 'Divyagyan College',
        location: 'Putalisadak, Kathmandu',
        year: '2022-Now',
        pic:bachelors
    },

]

export const ProfessionalExperience = [
    {
        id:'no',
        label:'not any',
        pic:nothing
    }
]