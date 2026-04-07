"use client";
import Image from "next/image";
import Button1 from "./button1";
import Button2 from "./button2";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="relative flex w-full h-[calc(100vh-6rem)] items-center justify-between select-none overflow-hidden">
            {/* Background */}
            <Image
                src="hero_bg.svg"
                alt="Hero background"
                fill
                priority
                className="object-fill z-0 ml-[100px] border-none"
                style={{ objectPosition: "60% center" }}
            />

            {/* Levá část s textem */}
            <div className="flex flex-col gap-0 ml-[71px] leading-tight z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-white text-[4rem] font-bold"
                >NAJDI SVÉ NOVÉ MTB,</motion.h1>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="bg-gradient-to-r from-[#7FFF76] to-[#0D5408] bg-clip-text text-transparent text-[4rem] font-bold"
                >DO MINUTY!</motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-white text-[1.25rem] mt-[1.5rem]"
                >Nech AI ti vybrat kolo na míru podle tvých představ</motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="flex gap-5 mt-[2rem]"
                >
                    <Button1 href="/" text="Vyzkoušet" />
                    <Button2 href="/" text="Zjistit více" icon={<Image src="sipka.svg" alt="sipka" width={20} height={20} />} />
                </motion.div>
            </div>
        </div>
    );
}
