import React, { useState } from 'react';
import { FooterContact, FooterSocialLinks } from '@/config';
import { Link } from 'react-router-dom';
import { Separator } from './ui/separator';
import { Input } from './ui/input';
import { Button } from './ui/button';
import emailjs from '@emailjs/browser';
import { toast } from '@/hooks/use-toast';
const Footer = () => {
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    console.log(import.meta.env);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!message.trim()) {
            alert('Please enter a message.');
            return;
        }
        setIsSending(true);
        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, { message }, import.meta.env.VITE_PUBLIC_KEY)
            .then((response) => {
            toast({
                title: "Message sent successfully ✅",
                variant: 'default',
                className: 'border-2 border-green-500',
            });
            setMessage('');
            setIsSending(false);
        }, (error) => {
            console.error('Failed to send message:', error);
            alert('An error occurred. Please try again.');
            setIsSending(false);
        });
    };
    return (React.createElement("footer", { className: 'w-full bg-black text-white py-3 px-20' },
        React.createElement("div", { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' },
            React.createElement("div", { className: 'flex flex-col' },
                React.createElement("p", { className: 'font-bold mb-2 md:text-xl' }, "Get in touch"),
                FooterContact &&
                    FooterContact.map((item) => (React.createElement("p", { className: 'mb-4 text-[15px]', key: item.id },
                        React.createElement(item.icon, { className: 'inline mr-4' }),
                        item.value)))),
            React.createElement("div", { className: 'flex flex-col' },
                React.createElement("p", { className: 'font-bold mb-2 md:text-xl' }, "Social Links"),
                FooterSocialLinks &&
                    FooterSocialLinks.map((item) => (React.createElement("p", { className: 'mb-4 text-[15px]', key: item.id },
                        React.createElement(item.icon, { className: 'inline mr-4' }),
                        React.createElement(Link, { to: item.url, target: '_blank' }, item.label))))),
            React.createElement("div", { className: 'flex flex-col' },
                React.createElement("p", { className: 'font-bold mb-2 md:text-xl' }, "Send a message"),
                React.createElement("form", { onSubmit: handleSubmit },
                    React.createElement(Input, { className: 'text-black', value: message, onChange: (e) => setMessage(e.target.value) }),
                    React.createElement(Button, { type: 'submit', disabled: isSending, className: `max-w-[20vw] my-3 ${isSending ? 'bg-gray-400' : 'bg-green-700 hover:bg-green-900'}` }, isSending ? 'Sending...' : 'Send')))),
        React.createElement(Separator, null),
        React.createElement("p", { className: 'center italic text-sm mt-2' }, "All rights reserved.")));
};
export default Footer;
