// CTA_Sekce.js
"use client";
import Link from "next/link";
import Button2 from "./button2";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CTA_Sekce() {
    return(
        <div className="mt-[100px] ml-[71px] mr-[71px]">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-white text-[.625rem] rounded-full border border-white w-fit px-4 py-2 mb-[4rem]"
            >O CO JDE</motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
                className="text-white text-[1.25rem] w-[690px] mb-[2rem]"
            >Náš CORE Navigator je tvůj digitální průvodce výběrem kola. Během pár kliknutí zanalyzujeme tvůj jezdecký styl a z tisíců možností ti naservírujeme 3 top biky přesně na míru. Šetříme tvůj čas, abys mohl být co nejdřív v sedle.</motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <Button2 href="/" text="Jdeme na to" className="w-fit" icon={<Image src="sipka.svg" alt="sipka" width={20} height={20} />}/>
            </motion.div>
        </div>
    )
}