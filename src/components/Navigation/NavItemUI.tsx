'use client'

import React from 'react';
import styles from './NavItemUI.module.scss';
import {RecipesIcon, CollectionsIcon} from "@/components/icons";
import Link from 'next/link';

interface NavItemProps {
  type: 'mix' | 'collections';
  className?: string;
  iconClassName?: string;
  currentPath?: string;
}

const NavItemUI: React.FC<NavItemProps> = ({ type, className, iconClassName, currentPath }) => {
  const config = {
    mix: {
      href: '/recepty',
      label: 'Все рецепты',
      icon: RecipesIcon,
      activePath: '/recepty'
    },
    collections: {
      href: '/',
      label: 'Подборки',
      icon: CollectionsIcon,
      activePath: '/'
    }
  };

  const { href, label, icon: Icon, activePath } = config[type];
  const isActive = currentPath?.startsWith(activePath) && (activePath === '/' ? currentPath === '/' : true);

  return (
      <Link
          href={href}
          className={`${styles.navItem} ${isActive ? styles.active : ''} ${className || ''}`}
          aria-label={label}
          aria-current={isActive ? 'page' : undefined}
      >
        <Icon className={`${styles.icon} ${iconClassName || ''}`} aria-hidden="true" />
        <span>{label}</span>
      </Link>
  );
};

export default NavItemUI;
