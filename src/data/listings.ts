export type Listing = {
  id: number;
  title: string;
  price: number;
  location: string;
  image: string;
};

export const listings: Listing[] = [
    {
      id: 1,
      title: "Gym",
      price: 25,
      location: "Newark, DE",
      image: "/gym.jpg",
    },
    {
      id: 2,
      title: "Office Space",
      price: 10,
      location: "Wilmington, DE",
      image: "/small-office.jpg",
    },
    {
      id: 3,
      title: "Lecure Hall",
      price: 0,
      location: "University of Delaware",
      image: "/lecture.jpg",
    },
  ];