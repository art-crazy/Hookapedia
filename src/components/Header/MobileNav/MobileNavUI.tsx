'use client'

import React from 'react';
import styles from './MobileNavUI.module.scss';
import {NavItemUI} from '@/components/Navigation';

interface MobileNavUIProps {
    currentPath?: string;
}

const MobileNavUI: React.FC<MobileNavUIProps> = ({ currentPath }) => {
    return (
        <nav className={styles.mobileNav}>
            <NavItemUI type="collections" className={styles.mobileNavItem} currentPath={currentPath} />
            <NavItemUI type="mix" className={styles.mobileNavItem} currentPath={currentPath} />
        </nav>
    );
};

export default MobileNavUI;
