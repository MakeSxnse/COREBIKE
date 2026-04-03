"use client";
import Image from "next/image";

export default function Footer2() {
    return (
        <footer className="flex ml-[71px] mr-[71px] bg-[#1B1B1B] rounded-[1rem] p-[2rem] mt-[2rem] mb-[4rem]">
            <Image
                src="/LOGO_bila.svg"
                alt="logo"
                width={129}
                height={40}
                className="cursor-pointer hover:scale-99 hover:opacity-10 transition-all duration-500"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
        </footer>
    )
}