"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function BikeCard({ href, image, name, description, index }) {
    return (
        <motion.div
            className="bg-[#282828] rounded-[1.5rem] p-[31px] flex flex-col gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
        >
            <div className="relative w-full aspect-[4/3] rounded-[1rem] overflow-hidden bg-[#141414]">
                {image && (
                    <Image src={image} alt={name} fill className="object-cover" />
                )}
            </div>

            <div className="flex flex-col gap-1">
                <h3 className="text-white text-[1.1rem] font-bold">{name}</h3>
                <p className="text-[#AAAAAA] text-[1rem]">{description}</p>
            </div>

            <Link
                href={href}
                className="w-full text-center text-white border border-white rounded-full py-3 text-[1rem] hover:bg-white hover:text-black transition-colors duration-300"
            >
                Detail
            </Link>
        </motion.div>
    );
}

export default function Bike_card() {
    return (
        <div>
            <motion.h2
                className="text-white text-[.625rem] rounded-full border border-white w-fit px-4 py-2 mb-[3rem] ml-[71px] mt-[200px]"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                CO SEDÍ VŠEM
            </motion.h2>

            <motion.h2
                className="text-white text-[1.75rem] mb-[1rem] ml-[71px] font-bold"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
            >
                TYTO 3 KOLA SEDNOU KAŽDÉMU
            </motion.h2>

            <motion.p
                className="text-white text-[1.25rem] w-[690px] mb-[2rem] ml-[71px]"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                Tyto kousky doporučíme každému
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-[71px]">
                <BikeCard href="/" image="/nomad.jpg" name="Santa Cruz Nomad" description="Enduro beast" index={0} />
                <BikeCard href="/" image="/slash.jpg" name="Trek Slash" description="All-mountain ripper" index={1} />
                <BikeCard href="/" image="/stumpjumper.jpg" name="Specialized Stumpjumper" description="Trail classic" index={2} />
            </div>
        </div>
    );
}