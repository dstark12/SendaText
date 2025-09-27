"use client"
import Link from "next/link";

export default function BottomLinks(){
    return(
    <div className="w-auto h-auto justify-center bg-gray-700 text-white">
        <div className="columns-2 p-4">
            <div className = "flex flex-col justify-center items-center">
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/blog">Blog</Link>
            </div>
            <div className = "flex flex-col justify-center items-center">
                <Link href="/login">Login</Link>
                <Link href="/hosts">Hosts</Link>
                <Link href="/renters">Renters</Link>
            </div>
        </div>
    </div>
    )
}