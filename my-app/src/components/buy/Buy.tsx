"use client";
import Image from 'next/image';
import styles from './buy.module.css';
import { motion } from 'framer-motion';

const steps = [
    {
        tip: `Get a wallet`,
        text: `Download MetaMask or your preferred
              crypto wallet from app store`
    },
    {
        tip: `Buy ETH`,
        text: `Purchase Ethereum from any major
              exchange like Coinbase, Binance, or directly
              through your wallet`
    },
    {
        tip: `Swap for RICH`,
        text: `Visit Uniswap. connect your wallet and
              swap your ETH for RICH tokens using
              our contract address`
    }
]

const Buy = () => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 4 }}
        viewport={{ once: true }}
        >
        <section className={styles.buyContainer} id="how-to-buy">
            <div className={styles.fullLine}/>
            <div>
                <p className={styles.bigText}>How To Buy RICH</p>
            </div>
            <div className= {styles.rowBox}>
                <div>
                    <Image
                    src="/sheep2.png" 
                    alt="RICH"
                    width = {340}
                    height = {480}
                    />
                </div>
                <div>
                {
                    steps.map((step) => (
                        <div key={step.text} className={styles.colBox}>
                            <div>
                                {step.tip}
                            </div>
                            <div>
                                {step.text}
                            </div>
                        </div>
                    ))
                }
                </div>

            </div>
        </section>
        </motion.div>
        
    )
};

export default Buy;