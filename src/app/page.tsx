import React from "react";
import Image from "next/image";
import { listings } from "@/data/listings";
import ListingCard from "@/components/cards";
import NavBar from "@/components/navbar";
import BottomLinks from "@/components/bottomLinks";
import SearchBar from "@/components/searchBar";

export default function Home() {
  return (
    <div>
      <NavBar/>

      <div className="relative w-full h-[500px]">
        <Image
          src="/home.jpg"
          alt="Marketplace"
          fill
          className="object-cover"
        />
        
        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 ">
          <h1 className="text-white text-3xl font-bold">Welcome to CommonGround</h1>
          <SearchBar/>
        </div>
      </div>
        
      <div className="bg-black">
      <h1 className="text-white text-3xl font-mono font-extrabold ml-8 p-4">Listings near me 📍</h1>

      <div className="flex flex-wrap gap-6 justify-center p-8">
        {listings.map((listing) => (
        <ListingCard key={listing.id} {...listing} />
        ))}
       </div>
      </div>
    <BottomLinks/>
    </div>
  );
}
