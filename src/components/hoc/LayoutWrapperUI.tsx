import styles from './LayoutWrapperUI.module.scss';
import {ComponentType, ReactNode} from 'react';
import {FooterUI} from "@/components/Footer";

interface LayoutProps {
    children: ReactNode;
    HeaderChild: ComponentType;
    siteName: string;
}

export const LayoutWrapperUI = ({ children, HeaderChild, siteName }: LayoutProps) => (
    <>
        <HeaderChild />
        <main className={styles.main}>{children}</main>
        <FooterUI siteName={siteName} />
    </>
);
