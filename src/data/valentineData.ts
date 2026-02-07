export interface ValentineDay {
    id: number;
    date: string; // Format: "February 7"
    title: string;
    message: string;
    type: 'rose' | 'lotus' | 'chocolate' | 'teddy' | 'promise' | 'hug' | 'kiss' | 'valentine';
    color: string;
}

export const valentineData: ValentineDay[] = [
    {
        id: 1,
        date: "February 7",
        title: "Rose Day",
        message: "Smriti, your smile blooms softer than any rose I've ever seen.",
        type: 'rose',
        color: "bg-rose-100"
    },
    {
        id: 2,
        date: "February 8",
        title: "Propose Day",
        message: "To the one who makes every moment feel like a quiet, beautiful promise.",
        type: 'lotus',
        color: "bg-pink-100"
    },
    {
        id: 3,
        date: "February 9",
        title: "Chocolate Day",
        message: "You bring a sweetness to life that no chocolate could ever match.",
        type: 'chocolate', // We'll map this to a specific flower or generic lotus if needed, but keeping type for potential icon use
        color: "bg-amber-100"
    },
    {
        id: 4,
        date: "February 10",
        title: "Teddy Day",
        message: "Sending you the warmth of a thousand comforting hugs.",
        type: 'teddy',
        color: "bg-orange-100"
    },
    {
        id: 5,
        date: "February 11",
        title: "Promise Day",
        message: "I promise to always value the light you bring into this world.",
        type: 'promise',
        color: "bg-blue-100"
    },
    {
        id: 6,
        date: "February 12",
        title: "Hug Day",
        message: "Wishing I could wrap you in a hug as warm as your heart.",
        type: 'hug',
        color: "bg-red-100"
    },
    {
        id: 7,
        date: "February 13",
        title: "Kiss Day",
        message: "A gentle thought for you, sending love and light your way.",
        type: 'kiss',
        color: "bg-fuchsia-100"
    },
    {
        id: 8,
        date: "February 14",
        title: "Valentine's Day",
        message: "Smriti, you are the magic in every ordinary day. Happy Valentine's Day.",
        type: 'valentine',
        color: "bg-rose-200"
    }
];
