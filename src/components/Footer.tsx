import React, { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Input } from './ui/input';
import { FooterContactComponent, FooterSocialLinks } from '@/config';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const { t } = useTranslation();
  const FooterContact = FooterContactComponent();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim() || !email.trim()) {
      toast({
        title: t('emptymessage'),
        variant: 'destructive',
      });
      return;
    }

    setIsSending(true);

    const templateParams = {
      email,
      message,
    };

    try {
      await axios.post(
        'https://email-send-hjlu4bu01-rajib-pokhrels-projects.vercel.app/send-mail',
        templateParams,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      toast({
        title: t('messagesent'),
        variant: 'default',
        className: 'border-2 border-green-500',
      });

      setMessage('');
      setEmail('');
    } catch (error: any) {
      toast({
        title: t('messagefailed'),
        description:
          error.response?.data?.message || error.message || 'Something went wrong!',
        variant: 'destructive',
        className: 'border-2 border-red-500',
      });
      console.error('EmailJS Error:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <footer className="w-full bg-slate-100 shadow-top dark:bg-black py-3 px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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

        {/* Message form */}
        <div className="flex flex-col">
          <p className="font-bold mb-2 md:text-xl">{t('sendamessage')}</p>
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              className="text-black mb-3 dark:text-white border-black dark:border-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
            />
            <Textarea
              className="text-black dark:text-white border-black dark:border-white"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message Content"
              required
            />
            <Button
              type="submit"
              disabled={isSending}
              className={`max-w-[20vw] my-3 ${
                isSending ? 'bg-gray-400' : 'bg-green-700 hover:bg-green-900'
              } text-black dark:text-white`}
            >
              {isSending ? `${t('sending')}` : `${t('send')}`}
            </Button>
          </form>
        </div>
      </div>
      <Separator className="bg-black dark:bg-white" />
      <p className="center italic text-sm mt-2">
        © 2024 Rajib Pokhrel. Feel free to connect for opportunities. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
