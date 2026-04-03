"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer2() {
    return (
        <footer className="flex items-center justify-between ml-[71px] mr-[71px] bg-[#1B1B1B] rounded-[1rem] p-[2rem] mt-[2rem] mb-[4rem]">
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="cursor-pointer"
            >
                <Image
                    src="/LOGO_bila.svg"
                    alt="logo"
                    width={129}
                    height={40}
                    className="hover:scale-99 hover:opacity-10 transition-all duration-500"
                />
            </button>
            <p className="text-[#AAAAAA] text-[1rem] whitespace-nowrap">
                Vyplněním dotazníku souhlasíte se zpracováním osobních údajů dle{" "}
                <Link href="/zasady-ochrany-osobnich-udaju" className="text-white underline hover:opacity-70 transition-opacity duration-200">
                    zásad ochrany osobních údajů
                </Link>
            </p>
        </footer>
    )
}