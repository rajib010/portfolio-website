import React, { useState } from 'react';
import { FooterContactComponent, FooterSocialLinks } from '@/config';
import { Link } from 'react-router-dom';
import { Separator } from './ui/separator';
import { Input } from './ui/input';
import { Button } from './ui/button';
import emailjs from '@emailjs/browser';
import { toast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const { t } = useTranslation();
  const FooterContact = FooterContactComponent();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) {
      toast({
        title:t('emptymessage'),
        variant:'destructive'
      });
      return;
    }

    setIsSending(true);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      { message },
      import.meta.env.VITE_PUBLIC_KEY
    )
      .then(
        (response) => {
          toast({
            title: "Message sent successfully ✅",
            variant: 'default',
            className: 'border-2 border-green-500',
          })
          setMessage('');
          setIsSending(false);
        },
        (error) => {
          console.error('Failed to send message:', error);
          alert('An error occurred. Please try again.');
          setIsSending(false);
        }
      );
  };

  return (
    <footer className='w-full bg-slate-100 shadow-top dark:bg-black py-3 px-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {/* left contents */}
        <div className='flex flex-col'>
          <p className='font-bold mb-2 md:text-xl'>{t('getintouch')}</p>
          {FooterContact &&
            FooterContact.map((item) => (
              <p className='mb-4 text-[15px]' key={item.id}>
                <item.icon className='inline mr-4' />
                {item.value}
              </p>
            ))}
        </div>

        {/* central contents */}
        <div className='flex flex-col'>
          <p className='font-bold mb-2 md:text-xl'>{t('sociallinks')}</p>
          {FooterSocialLinks &&
            FooterSocialLinks.map((item) => (
              <p className='mb-4 text-[15px]' key={item.id}>
                <item.icon className='inline mr-4' />
                <Link to={item.url} target='_blank'>
                  {item.label}
                </Link>
              </p>
            ))}
        </div>

        {/* right contents */}
        <div className='flex flex-col'>
          <p className='font-bold mb-2 md:text-xl'>{t('sendamessage')}</p>
          <form onSubmit={handleSubmit}>
            <Input
              className='text-black dark:text-white border-black dark:border-white'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              type='submit'
              disabled={isSending}
              className={`max-w-[20vw] my-3 ${isSending ? 'bg-gray-400' : 'bg-green-700 hover:bg-green-900'}
                        text-black dark:text-white`}
            >
              {isSending ? `${t('sending')}` : `${t('send')}`}
            </Button>
          </form>
        </div>
      </div>
      <Separator className='bg-black dark:bg-white' />
      <p className='center italic text-sm mt-2'>© 2024 Rajib Pokhrel. Feel free to connect for opportunities. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
