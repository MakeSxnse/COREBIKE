// Co_te_ceka.js
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Co_te_ceka() {
    return (
        <div className="mt-[100px] flex flex-col items-center justify-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-white text-[.625rem] rounded-full border border-white w-fit px-4 py-2 mb-[4rem]"
            >CO TĚ ČEKÁ</motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
                className="text-white text-[1.25rem] w-[690px] text-center"
            >Ušetři desítky hodin studováním tabulek a nech si od nás vybrat bike, který přesně odpovídá tvému stylu i rozpočtu.</motion.p>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <Image src="postup.svg" alt="Co tě čeká" width={800} height={400} className="mt-[5rem]" />
            </motion.div>
        </div>
    )
}