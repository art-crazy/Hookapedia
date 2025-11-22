'use client';

import React, {useEffect, useRef, useState} from 'react';
import {Button} from '@/components/UI/Button';
import styles from './ShareButtonUI.module.scss';
import {VkIcon, TelegramIcon, WhatsAppIcon, OkIcon, CopyIcon, ShareIcon} from '@/components/icons';

interface ShareButtonProps {
  url: string;
  title: string;
}

const ShareButtonUI: React.FC<ShareButtonProps> = ({ url, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const fullUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${url}`
    : url;

  const shareOptions = [
    {
      name: 'ВКонтакте',
      icon: <VkIcon />,
      action: () => window.open(`https://vk.com/share.php?url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(title)}`, '_blank')
    },
    {
      name: 'Одноклассники',
      icon: <OkIcon />,
      action: () => window.open(`https://connect.ok.ru/offer?url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(title)}`, '_blank')
    },
    {
      name: 'Telegram',
      icon: <TelegramIcon />,
      action: () => window.open(`https://t.me/share/url?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`, '_blank')
    },
    {
      name: 'WhatsApp',
      icon: <WhatsAppIcon />,
      action: () => window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + fullUrl)}`, '_blank')
    },
    {
      name: 'Скопировать ссылку',
      icon: <CopyIcon />,
      action: async () => {
        try {
          await navigator.clipboard.writeText(fullUrl);
          alert('Ссылка скопирована!');
        } catch (err) {
          console.error('Failed to copy:', err);
        }
      }
    }
  ];

  return (
    <div className={styles.container} ref={dropdownRef} role="group" aria-label="Поделиться">
      <Button onClick={() => setIsOpen(!isOpen)} aria-label="Открыть меню поделиться">
        <ShareIcon className={styles.shareIcon} aria-hidden="true" />
        Поделиться
      </Button>

      {isOpen && (
        <ul className={styles.dropdown}>
          {shareOptions.map((option, index) => (
            <li key={index}>
              <button
                className={styles.option}
                onClick={() => {
                  option.action();
                  setIsOpen(false);
                }}
                aria-label={option.name}
              >
                <span className={styles.icon} aria-hidden="true">{option.icon}</span>
                <span>{option.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShareButtonUI;
