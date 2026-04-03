"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const rows = [
    { label: "Druh odpružení", a: "Vzduch", b: "Pružina" },
    { label: "Materiál rámu", a: "Karbon", b: "Hliník" },
    { label: "Cena", a: "129 000 Kč", b: "118 000 Kč" },
    { label: "Oblíbenější", a: "✓", b: null },
];

export default function Porovnani() {
    return (
        <div className="flex flex-col items-center mt-[200px]">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-white text-[.625rem] rounded-full border border-white w-fit px-4 py-2 mb-[3rem]"
            >POROVNÁNÍ</motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
                className="text-white text-[1.25rem] text-center mb-[4rem]"
            >
                Po vyhodnocení si můžete jakékoli kolo porovnat s jakýmkoli<br />jiným z databáze
            </motion.p>

            <div className="flex items-center gap-[4rem] w-full px-[71px]">
                <div className="flex flex-1">
                    {/* Labels sloupec */}
                    <div className="flex flex-col pr-[2rem]">
                        <div className="h-[5rem]" />
                        {rows.map((row) => (
                            <div key={row.label} className="border-t border-transparent py-[1.5rem] text-right">
                                <span className="text-white text-[1.1rem]">{row.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Kolo A */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="group flex flex-col bg-[#2a2a2a] rounded-[30px] px-[1.5rem] w-[350px] mr-[3rem] hover:bg-[#7FFF76] transition-all duration-500 hover:translate-y-[-5px]"
                    >
                        <div className="h-[5rem] flex items-center justify-center">
                            <span className="text-white group-hover:text-[#1B1B1B] transition-colors duration-500 text-[1rem] font-bold">Santa Cruz nomad</span>
                        </div>
                        {rows.map((row) => (
                            <div key={row.label} className="border-t border-[#3a3a3a] group-hover:border-[#1B1B1B] py-[1.5rem] text-center transition-colors duration-500">
                                {row.a === "✓"
                                    ? <span className="text-green-400 group-hover:text-[#1B1B1B] transition-colors duration-500 text-xl">✓</span>
                                    : <span className="text-white group-hover:text-[#1B1B1B] transition-colors duration-500">{row.a}</span>
                                }
                            </div>
                        ))}
                    </motion.div>

                    {/* Kolo B */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="group flex flex-col bg-[#2a2a2a] rounded-[30px] px-[1.5rem] w-[350px] hover:bg-[#7FFF76] transition-all duration-500 hover:translate-y-[-5px]"
                    >
                        <div className="h-[5rem] flex items-center justify-center">
                            <span className="text-white group-hover:text-[#1B1B1B] transition-colors duration-500 text-[1rem] font-bold">Commencal Absolute</span>
                        </div>
                        {rows.map((row) => (
                            <div key={row.label} className="border-t border-[#3a3a3a] group-hover:border-[#488843] py-[1.5rem] text-center transition-colors duration-500">
                                {row.b
                                    ? <span className="text-white group-hover:text-[#1B1B1B] transition-colors duration-500">{row.b}</span>
                                    : <span className="text-[#3a3a3a] group-hover:text-[#1B1B1B] transition-colors duration-500">—</span>
                                }
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Obrázek kola */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="relative w-[500px] h-[450px] flex-shrink-0 mt-[3rem]"
                >
                    <Image src="/kolo.svg" alt="Kolo" fill className="object-contain" />
                </motion.div>
            </div>
        </div>
    );
}