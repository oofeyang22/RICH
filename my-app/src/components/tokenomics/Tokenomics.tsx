"use client"
import styles from './tokenomics.module.css';
import { motion } from 'framer-motion';
const allocations = [
    {
        no: `1B`,
        text: `Total Supply`
    },
    {
        no: `40%`,
        text: `Presale`
    },
    {
        no: `25%`,
        text: `Liquidity Pool`
    },
    {
        no: `10%`,
        text: `Marketing`
    },
    {
        no: `5%`,
        text: `Team`
    },
    {
        no: `20%`,
        text: `Burn`
    },
]

const Tokenomics = () => {
    return (
        <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 6 }}
        viewport={{ once: true }}
        >
        <section className= {styles.tokenContainer} id="tokenomics">
            <div className={styles.fullLine}/>
            <div>
                <p className={styles.bigText}>Tokenomics</p>
            </div>
            <div className= {styles.gridBox}>
                {
                allocations.map((alloc) => (
                    <div key={alloc.no} className={styles.glass}>
                        <div >
                            <p className= {styles.col}>{alloc.no}</p>
                            <p>{alloc.text} </p>
                        </div>
                    </div>
                ))
               }
            </div>

        </section>
        </motion.div>

    )
}

export default Tokenomics;