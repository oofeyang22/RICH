import { FaRegCopyright } from "react-icons/fa";
import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className= {styles.footContainer}>
            <div className={styles.fullLine}/>
            <div className={styles.align}>
                <p>2025 <span className={styles.span}><FaRegCopyright /></span> RICH. ALL RIGHTS RESERVED</p>
            </div>
        </div>
    )
}

export default Footer;