import Link from "next/link";

export default function Button1({ href, text }) {
    if (!href || !text) return null;

    return (
        <Link href={href} className="text-white rounded-full border border-white px-[22px] py-[14px] text-[1.10rem] hover:bg-white hover:text-[#1B1B1B] transition-all duration-400">
            <p>{text}</p>
        </Link>
    )
}