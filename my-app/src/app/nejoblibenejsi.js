"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Nejoblibenejsi() {
    return (
        <div>
            <motion.h2
                className="text-white text-[.625rem] rounded-full border border-white w-fit px-4 py-2 mb-[3rem] ml-[71px] mt-[100px]"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                TÝDENÍ TOPKA
            </motion.h2>

            <motion.h2
                className="text-white text-[1.75rem] mb-[1rem] ml-[71px] font-bold"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                NEJOBLÍBENĚJŠÍ BIKE
            </motion.h2>

            <motion.p
                className="text-white text-[1.25rem] ml-[71px]"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
            >
                Tento krasavec se tento týden doporučuje nejvíce
            </motion.p>

            <motion.div
                className="mx-[71px] mt-[2rem] relative"
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                <Image src="nejoblibenejsi.svg" alt="Nejoblíbenější bike" width={500} height={300} className="w-full" />

                <motion.h2
                    className="text-white text-[1.75rem] font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                >
                    SANTA CRUZ
                </motion.h2>

                <motion.p
                    className="text-white text-[1.25rem] absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.05 }}
                >
                    Nomad
                </motion.p>
            </motion.div>
        </div>
    );
}