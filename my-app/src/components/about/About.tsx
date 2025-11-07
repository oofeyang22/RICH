"use client"
import styles from './about.module.css';
import { motion } from 'framer-motion';

const Bios = [
    {text: `Rich isn't just another memecoin - it's a revolution led by the
        most entrepreneurial sheep in the crypto space. Born the idea, that evrybody deserves to be
        weaithy, RICH combines the power of memes with serious wealth-building potential.`},
    {text: `Join the successful flock of investors who have discovered that
        sometimes the best investment comes in unexpected packages. With Rich,
        you are not just buying a token - you are investing in a community-driven
        movement towards prosperity.`}    
]
const About = () => {
    return(
        <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        >
        <section className={styles.aboutContainer} id="about">

            <div className={styles.fullLine}/>
            <p className={styles.Rich}>About RICH</p>
            {
                Bios.map((bio) => (<p key={bio.text} className={styles.text}>{bio.text}</p>)
                )
            }
        </section>
        </motion.div>

    )
}

export default About;