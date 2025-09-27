import Image from "next/image";

type ListingCardProps = {
    title: string;
    price: number;
    location: string;
    image: string;
  };

export default function ListingCard({ title, price, location, image }: ListingCardProps) {
  return (
    <div className="relative bg-white rounded-2xl shadow-md overflow-hidden w-72 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <Image
        src={image}
        alt={title}
        width={288}  // matches Tailwind w-72
        height={160} // matches Tailwind h-40
        className="object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-600">{location}</p>
        <p className="text-green-600 font-semibold mt-2">
          {price > 0 ? `$${price}` : "Free"}
        </p>
      </div>
    </div>
  );
}
