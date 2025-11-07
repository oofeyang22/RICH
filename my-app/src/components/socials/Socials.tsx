"use client"
import Image from 'next/image';
import styles from './socials.module.css';
import { motion } from 'framer-motion';

const icons = [
    {
        logo: `/x.png`
    },
    {
        logo: `/tele.png`
    },
    {
        logo: `/discord.png`
    },
    {
        logo: `/gmail.png`
    }
]
const Socials = () => {
    return (
        <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        >
        <section className= {styles.commContainer} id="socials">
            <div className={styles.fullLine}/>
            <div>
                <p className={styles.bigText}>Join Our Community</p>
            </div>
            <div>
                <p className= {styles.text}>Follow RICH on social media and
                    be part of the movement changing
                    lives. Stay updated with the latest developments.
                </p>
            </div>
            <div className= {styles.row}>
            {
                icons.map((icon) => (
                        <div key={icon.logo}>
                            <Image src={icon.logo} alt="logo" width={60} height={60}/>
                        </div>
                ))
            }
            </div>

            <div><p className= {styles.ca}>CA: 0X54trhthp67htfsdijhkklo65fugh12s4h</p></div>
        </section>
        </motion.div>

    )
}

export default Socials;