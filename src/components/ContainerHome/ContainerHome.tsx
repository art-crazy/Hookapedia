import styles from './ContainerHome.module.scss';
import {ReactNode} from "react";

export const ContainerHome = ({children}: {children: ReactNode}) => {
    return (
        <div className={styles.home}>{children}</div>
    )
}
