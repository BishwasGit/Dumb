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
        message: "Smriti = Pagal 😆 your smile blooms softer than any rose I've ever seen. Stay the same crazy, bright person who makes normal days feel a little more colorful.",
        type: 'rose',
        color: "bg-rose-100"
    },
    {
        id: 2,
        date: "February 8",
        title: "Propose Day",
        message: "To pagal who always keeps her promise… I officially propose that you continue being my favorite person to annoy, laugh with, and share random nonsense conversations with forever 🤝",
        type: 'lotus',
        color: "bg-pink-100"
    },
    {
        id: 3,
        date: "February 9",
        title: "Chocolate Day",
        message: "You bring a sweetness to life that no chocolate could ever match. Also, you still owe me chocolate for tolerating your drama and mood swings 😌",
        type: 'chocolate',
        color: "bg-amber-100"
    },
    {
        id: 4,
        date: "February 10",
        title: "Teddy Day",
        message: "Sending you the warmth of a thousand comforting hugs. And if life gets messy, just remember — I’m always around to listen, roast you, and then support you again.",
        type: 'teddy',
        color: "bg-orange-100"
    },
    {
        id: 5,
        date: "February 11",
        title: "Promise Day",
        message: "I promise to always value the light you bring into this world, to support you when things get tough, and to never let you forget how weird and awesome you are.",
        type: 'promise',
        color: "bg-blue-100"
    },
    {
        id: 6,
        date: "February 12",
        title: "Hug Day",
        message: "Wishing I could wrap you in a hug as warm as your heart. For now, just imagine a friendly ‘stay strong, pagal’ type hug from a distance.",
        type: 'hug',
        color: "bg-red-100"
    },
    {
        id: 7,
        date: "February 13",
        title: "Kiss Day",
        message: "A gentle thought for you, sending positivity and good vibes your way. Stay confident, keep smiling, and keep being the chaos you are 😄",
        type: 'kiss',
        color: "bg-fuchsia-100"
    },
    {
        id: 8,
        date: "February 14",
        title: "Valentine's Day",
        message: "Smriti, you make ordinary days more fun just by being around. Lucky to have a friend who can make me laugh, argue, and still be my go-to person at the end of the day.",
        type: 'valentine',
        color: "bg-rose-200"
    }
];

