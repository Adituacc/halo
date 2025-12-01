import { Memory } from './types';

export const PARTNER_NAME = "My Love"; // Change this to the specific name

// REPLACE THIS URL with your uploaded image path (e.g., "/my-photo.jpg")
export const USER_PHOTO = "https://images.unsplash.com/photo-1620215769493-9c8cb2433e38?q=80&w=1000&auto=format&fit=crop"; 

export const MEMORIES: Memory[] = [
  {
    id: 1,
    date: "First Date",
    title: "Where It All Began",
    description: "The coffee shop where we talked for 4 hours straight. I knew then that you were special.",
    image: "https://picsum.photos/id/338/600/400"
  },
  {
    id: 2,
    date: "Our First Trip",
    title: "Adventures Together",
    description: "Getting lost in the city but not caring because I was with you.",
    image: "https://picsum.photos/id/1036/600/400"
  },
  {
    id: 3,
    date: "The Big Move",
    title: "Building a Home",
    description: "Moving boxes, pizza on the floor, and our first night in our own place.",
    image: "https://picsum.photos/id/1029/600/400"
  },
  {
    id: 4,
    date: "Today",
    title: "The Ride of a Lifetime",
    description: "Every road has led me to this moment. I'm ready for our greatest adventure yet.",
    image: USER_PHOTO
  }
];

export const LETTER_CONTENT = `
My Dearest ${PARTNER_NAME},

From the moment we met, my life has been brighter, happier, and full of love. You are my best friend, my confidante, and my greatest adventure.

We have built so many beautiful memories together, and I cannot imagine a future without you by my side. You challenge me to be better, you comfort me when I am down, and you make even the simplest days feel magical.

I promise to love you, to honor you, and to cherish you for all the days of my life.

With all my heart,
Me
`;