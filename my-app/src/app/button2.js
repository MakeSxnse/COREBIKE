import Link from "next/link";

export default function Button1({ href, text, icon }) {
    if (!href || !text) return null;

    return (
        <Link 
            href={href} 
            className="inline-block text-[#1B1B1B] rounded-full pl-[22px] pr-[12px] py-[14px] text-[1.10rem] bg-gradient-to-r from-[#7FFF76] to-[#0D5408] transition-all duration-100"
        >
            <div className="flex items-center justify-center gap-[10px] hover:gap-[18px] transition-all duration-300">
                <span>{text}</span>
                {/* Sem přijde ikonka, pokud ji pošleš v props */}
                {icon && <span className="flex items-center">{icon}</span>}
            </div>
        </Link>
    );
}