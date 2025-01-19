import php from "@/assets/php.png"
import mysql from "@/assets/mysql.png"
import java from "@/assets/java.png"
import js from "@/assets/java-script.png"
import wordpress from "@/assets/wordpress.png"

import studentmanagement from "@/assets/studentmanagement.png"
import lostfound from "@/assets/lost-and-found.png"
import chatapp from "@/assets/chatapplication.png"
import ecommerce from "@/assets/ecommerce.png"
import blog from "@/assets/blog.png"
import otp from "@/assets/otp.png"
import employeemanagement from "@/assets/employeemanagement.png"
import stopwatch from "@/assets/stopwatch.png"
import passwordgenerator from "@/assets/passwordgenerator.png"
import hangman from "@/assets/hangman.png"
import quiz from "@/assets/quiz.png"
import idea from "@/assets/idea.png"
import anonymous from "@/assets/anonymous.png"
import musicacademy from "@/assets/musicacademy.png"

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

import { CardProps } from "@/components/CommonCard"
import { TechnicalSkillsType } from "@/components/home/TechnicalSkills"

import { MapPinHouse, Mail, Phone, Twitter, Github, Linkedin, Youtube } from "lucide-react"

import { useTranslation } from 'react-i18next';

export const MenuItemsList = () => {
    const { t } = useTranslation();

    const items = [
        {
            id: 'home',
            label: t('home'),
            path: '/'
        },
        {
            id: 'about',
            label: t('about'),
            path: '/about'
        },
        {
            id: 'projects',
            label: t('projects'),
            path: '/projects'
        },
    ];

    return items;
};


export const TechnicalSkillsInfo: TechnicalSkillsType[] = [
    {
        id: 1001,
        title: 'Javascript',
        content: 'MERN Stack, NEXTjs',
        pic: js
    },
    {
        id: 1002,
        title: 'Java',
        content: 'Core Java',
        pic: java
    },
    {
        id: 1003,
        title: 'PHP',
        content: 'Web Development',
        pic: php
    },
    {
        id: 1004,
        title: 'Wordpress',
        content: 'Content Management',
        pic: wordpress
    },
    {
        id: 1005,
        title: 'SQL',
        content: 'Relational Database Management',
        pic: mysql
    },

]

export const OtherSkillsInfo = () => {

    const { t } = useTranslation();

    const items = [
        {
            id: 1,
            title: t('quick learner'),
            pic: agility,
            rating: 4.5
        },
        {
            id: 2,
            title: t('communication'),
            pic: communication,
            rating: 5
        },
        {
            id: 3,
            title: t('time management'),
            pic: time,
            rating: 4
        },
        {
            id: 4,
            title: t('critical thinking'),
            pic: criticalThinking,
            rating: 4.5
        },
        {
            id: 5,
            title: t('analytical skills'),
            pic: mathematical,
            rating: 4
        },
    ]
    return items;
}

export const FooterContactComponent = () => {
    const { t } = useTranslation()
    const items = [
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
            value: t('address')
        },
    ]
    return items
}

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

export const EducationalBackgroundComponentInfo = () => {
    const { t } = useTranslation()

    const items = [
        {
            id: 101,
            label: t('school'),
            value: t('pashupatiAcademy'),
            location: t('address'),
            year: '2006-2018',
            pic: school
        },
        {
            id: 102,
            label: t('highSchool'),
            value: t('kathmanduBernhardtCollege'),
            location: t('balkhuKathmandu'),
            year: '2018-2020',
            pic: highschool
        },
        {
            id: 103,
            label: 'IELTS',
            value: '7.5 Overall',
            year: '2022',
            pic: ielts
        },
        {
            id: 104,
            label: t('bachelors'),
            value: t('divyagyanCollege'),
            location: t('putalisadakKathmandu'),
            year: `2022 - ${t('now')}`,
            pic: bachelors
        },

    ]
    return items;
}

export const ProfessionalExperienceComponent = () => {
    const { t } = useTranslation()
    const items = [
        {
            id: 1,
            label: t('nothing'),
            pic: nothing
        }
    ]
    return items;
}

export const PHPProjects: CardProps[] = [
    {
        id: 101,
        label: "Finderz",
        pic: lostfound,
        description: 'Finderz is a lost and found management system where the users can posts of the items they have found with its detailed description and images. It also provides features for writing reviews, sending messages and a admin panel to manage all the contents. It allows multiple users to use the system seamlessly.',
        technologies: "HTML,CSS,JS,PHP,PHPMailer",
        github: 'https://github.com/rajib010/studentManagement-Php'
    },
    {
        id: 102,
        label: "Student Management System",
        pic: studentmanagement,
        description: 'Basic Project that enables adding, removing, updating students/courses information with features like reset passwords, send mail to students, keeping payments information',
        technologies: "JS, PHP, Bootstrap, AJAX",
        github: 'https://github.com/rajib010/studentManagement-Php'
    }
]

export const NEXTProjects: CardProps[] = [
    {
        id: 101,
        label: "Anonymous Messenger",
        pic: anonymous,
        description: 'Anonymous Messenger is a web message app to send and recieve messages anonymously. Built using NEXT Js and with other libraries like ZOD, Shade CN ,Resend Email, NEXT Auth etc for better user experience.',
        github: 'https://github.com/rajib010/anonymous-messenger'
    },
    {
        id: 102,
        label: "Music Academy",
        pic: musicacademy,
        description: 'This is a music academy website created while learning NEXT Js. This encorporates the use of Aceternity UI library for enchanced components.',
        github: 'https://github.com/rajib010/music-academy'
    },
    {
        id: 103,
        label: "Idea Hub",
        pic: idea,
        description: 'This is a idea sharing platform where the users can share their ideas hoping to meet for the sponsors to fund them. I have incorpoated the use of sanity for backend, Shadcn for frontend components and next auth for user authentication.',
        github: 'https://github.com/rajib010/idea-hub2.0'
    },
]

export const MERNProjects: CardProps[] = [
    {
        id: 1001,
        label: "Chat Application",
        pic: chatapp,
        description: 'Real time chat application that enables users to send and recieve messages. Users can create a new account or login with an existing ones. It has a user-friendly interface and offers much more features.',
        technologies: "Zustand, Tailwind, Socket, DaisyUi",
        github: 'https://github.com/rajib010/MERN-ChatApplication'
    },
    {
        id: 1002,
        label: "Mero Pasal",
        pic: ecommerce,
        description: 'An E-Commerce platform which allows users to search for and purchase items. It ecorporates features like adding to cart, checking out and adding multiple user locations. It also has an admin panel to add, update and delete the products.',
        technologies: "Redux, Tailwind, React-Router, Toaster, Axios, Cloudinary, ShadCN",
        github: 'https://github.com/rajib010/mero_pasal'
    },
    {
        id: 1003,
        label: "Blog Application",
        pic: blog,
        description: 'A simple blog application which enables users to read the blogs and publish them also. Users can read the blogs without logging into the system but has to be logged in inorder to publish the blogs.',
        technologies: "Zustand, Daisy Ui, Tailwind, React-Router, Toaster, Axios, Cloudinary",
        github: 'https://github.com/rajib010/MERN-BlogApp'
    }
]

export const REACTMINIPROJECTS: CardProps[] = [
    {
        id: 101,
        label: "Quiz Application",
        pic: quiz,
        description: 'A dynamic quiz application built with React, TypeScript, and Tailwind CSS. This app allows users to take quizzes, view their scores, and get instant feedback on their answers. It supports multiple quiz categories, time-limited questions, and score tracking.',
        github: 'https://github.com/rajib010/Quiz-App'
    },
    {
        id: 102,
        label: "Stopwatch",
        pic: stopwatch,
        description: 'The stopwatch app is a robust and feature-rich tool designed using React, offering both functionality and flexibility. It allows users to track time with precision while providing essential controls like pause, reset, and a unique feature to set a time limit for counting.',
        github: 'https://github.com/rajib010/Stop-Watch'
    },
    {
        id: 103,
        label: "Employee Management",
        pic: employeemanagement,
        description: 'The employee management app is a comprehensive solution for efficiently handling employee data, built with React for seamless performance and scalability. Its intuitive interface allows users to manage employee information effortlessly, making it a practical tool for businesses and organizations of any size.',
        github: 'https://github.com/rajib010/Employee_management'
    },
    {
        id: 104,
        label: "Password Generator",
        pic: passwordgenerator,
        description: 'The password generator app built with React is a highly functional and user-centric tool designed to create secure passwords effortlessly. Its intuitive interface allows users to customize password characteristics, ensuring a balance between security and usability.',
        github: 'https://github.com/rajib010/Password-Generator'
    },
    {
        id: 105,
        label: "Hangman",
        pic: hangman,
        description: 'The Hangman game developed with React and TypeScript is an engaging and interactive application that combines entertainment with a seamless user experience. This project showcases a strong understanding of both React and TypeScript, resulting in a well-structured and type-safe implementation..',
        github: 'https://github.com/rajib010/HangMan-TypeScript'
    },
    {
        id: 106,
        label: "OTP Login",
        pic: otp,
        description: 'The app allows users to log in by entering an OTP (One-Time Password), ensuring enhanced security compared to traditional password-based systems. It includes features like OTP input validation, seamless navigation, and real-time error handling, delivering a smooth user experience.',
        github: 'https://github.com/rajib010/OTP-Login'
    },
]