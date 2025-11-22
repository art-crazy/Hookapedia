import styles from "./ReceptyContent.module.scss";
import {ReactNode} from "react";

export const ReceptyContent = ({children}: {children: ReactNode}) => {
    return (
        <div className={styles.content}>{children}</div>
    )
}
