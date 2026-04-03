import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            <div className="relative mt-[50px] mb-[20px] opacity-70 hover:opacity-100 transition-all duration-500">
                <Image src="/footer.png" alt="logo" width={3000} height={400} className="w-full" />
                <h2 className="text-white text-[4rem] font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center whitespace-nowrap">VIDÍME SE NA KOLE!</h2>
            </div>
        </footer>
    );
}