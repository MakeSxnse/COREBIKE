"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "Kolik mě to bude stát?",
        answer: "Používání webu je zcela zdarma. Žádné skryté poplatky ani předplatné."
    },
    {
        question: "Jste propojení s nějakou konkrétní značkou?",
        answer: "Ne, jsme nezávislí. Doporučujeme kola od různých značek podle toho, co nejlépe sedí tobě."
    },
    {
        question: "Musím o kolech něco vědět, abych mohl web použít?",
        answer: "Vůbec ne. Stačí odpovědět na pár jednoduchých otázek a my se postaráme o zbytek."
    },
    {
        question: "Co když se mi vybraná 3 kola nebudou líbit?",
        answer: "Nevadí — můžeš si výběr zopakovat a upravit své preference. Výsledky se vždy přizpůsobí."
    },
    {
        question: "Jak často aktualizujete nabídku kol?",
        answer: "Nabídku aktualizujeme pravidelně, aby odpovídala aktuálnímu trhu a novinkám od výrobců."
    },
];

function FAQItem({ question, answer, index }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            className="border-b border-white/10 cursor-pointer"
            onClick={() => setOpen(!open)}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="flex items-center justify-between py-[2rem]">
                <h3 className="text-white text-[1.25rem] font-medium">{question}</h3>
                <motion.span
                    className="text-white text-[1.5rem] select-none"
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    +
                </motion.span>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, y: -10 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -10 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-[#AAAAAA] text-[1rem] pb-[2rem]">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQ() {
    return (
        <div className="ml-[71px] mr-[71px]">
            <motion.h2
                className="text-white text-[.625rem] rounded-full border border-white w-fit px-4 py-2 mb-[3rem] mt-[150px]"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                FAQ
            </motion.h2>

            {faqs.map((faq, index) => (
                <FAQItem key={faq.question} {...faq} index={index} />
            ))}
        </div>
    );
}