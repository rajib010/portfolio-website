import React, { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Input } from './ui/input';
import { FooterContactComponent, FooterSocialLinks } from '@/config';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const Footer = () => {
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const { t } = useTranslation();
  const FooterContact = FooterContactComponent();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim() || !senderEmail.trim()) {
      toast({
        title: t('emptymessage'),
        variant: 'destructive',
      });
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: senderEmail,
          to: 'pokhrelrajib016@gmail.com',
          subject: 'Message from Visitor',
          text: message,
        }),
      });

      if (response.ok) {
        toast({
          title: 'Message sent successfully ✅',
          variant: 'default',
          className: 'border-2 border-green-500',
        });
        setMessage('');
        setSenderEmail('');
      } else {
        const errorData = await response.json();
        toast({
          title: `Failed to send message: ${errorData.error.message}`,
          variant: 'destructive',
          className: 'border-2 border-red-500',
        });
      }
    } catch (error) {
      toast({
        title: 'An error occurred',
        variant: 'destructive',
        className: 'border-2 border-red-500',
      })
      console.log(error);
      
    } finally {
      setIsSending(false);
    }
  };

  return (
    <footer className='w-full bg-slate-100 shadow-top dark:bg-black py-3 px-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {/* Left contents */}
        <div className="flex flex-col">
          <p className="font-bold mb-2 md:text-xl">{t('getintouch')}</p>
          {FooterContact &&
            FooterContact.map((item) => (
              <p className="mb-4 text-[15px]" key={item.id}>
                <item.icon className="inline mr-4" />
                {item.value}
              </p>
            ))}
        </div>

        {/* Central contents */}
        <div className="flex flex-col">
          <p className="font-bold mb-2 md:text-xl">{t('sociallinks')}</p>
          {FooterSocialLinks &&
            FooterSocialLinks.map((item) => (
              <p className="mb-4 text-[15px]" key={item.id}>
                <item.icon className="inline mr-4" />
                <Link to={item.url} target="_blank">
                  {item.label}
                </Link>
              </p>
            ))}
        </div>
        {/* Other footer content */}
        <div className='flex flex-col'>
          <p className='font-bold mb-2 md:text-xl'>{t('sendamessage')}</p>
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              className='text-black mb-3 dark:text-white border-black dark:border-white'
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              placeholder='Your Email'
              required
            />
            <Textarea
              className='text-black dark:text-white border-black dark:border-white'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Message Content'
              required
            />
            <Button
              type='submit'
              disabled={isSending}
              className={`max-w-[20vw] my-3 ${isSending ? 'bg-gray-400' : 'bg-green-700 hover:bg-green-900'} text-black dark:text-white`}
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
