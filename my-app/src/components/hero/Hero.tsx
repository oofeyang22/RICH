"use client"
import Image from 'next/image';
import styles from './hero.module.css';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <motion.div
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        viewport={{ once: true }}
        >
            <div className={styles.heroContainer}>
            <div className={styles.heroImage}>
                <Image
                 src="/sheep.png" 
                 alt="RICH"
                 width = {204}
                 height = {306}
                />
            </div>
            <p className={styles.heroText}>Meet RICH</p>
            <p className={styles.heroPitch}>The sheep that's about to make you wealthy beyond your
                wildest dreams
            </p>
            <div className={styles.Rich}>
                <div className={styles.flex}>
                    <p className={styles.get}>Get RICH Now!</p>
                    <Image                  
                    src="/money-bag.png" 
                    alt="money"
                    width={25}
                    height={25}
                    className= {styles.img}/>
                </div>
            </div>
        </div>
        </motion.div>

    )
}

export default Hero;