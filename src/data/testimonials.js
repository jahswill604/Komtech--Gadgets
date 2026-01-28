// Komtech Gadgets - Customer Testimonials

export const testimonials = [
    {
        id: 1,
        name: "Chukwuemeka Obi",
        location: "Port Harcourt",
        avatar: "CO",
        rating: 5,
        review: "Best gadget store in Port Harcourt! I bought my iPhone 15 Pro Max here and the service was excellent. They even helped me transfer all my data. Highly recommended!",
        product: "iPhone 15 Pro Max",
        date: "2024-01-15"
    },
    {
        id: 2,
        name: "Blessing Adaeze",
        location: "Port Harcourt",
        avatar: "BA",
        rating: 5,
        review: "Komtech Gadgets delivered my Samsung Galaxy Tab to my doorstep the same day I ordered. The prices are competitive and the products are 100% authentic.",
        product: "Samsung Galaxy Tab S9+",
        date: "2024-01-10"
    },
    {
        id: 3,
        name: "Ifeanyi Nnamdi",
        location: "Rivers State",
        avatar: "IN",
        rating: 4,
        review: "Great experience shopping here. The staff are knowledgeable and helped me choose the right phone for my budget. Will definitely come back!",
        product: "Tecno Phantom X2 Pro",
        date: "2024-01-08"
    },
    {
        id: 4,
        name: "Amara Johnson",
        location: "Port Harcourt",
        avatar: "AJ",
        rating: 5,
        review: "I've been buying from Komtech for over a year now. They always have the latest gadgets and their after-sales support is top-notch. True professionals!",
        product: "AirPods Pro",
        date: "2024-01-05"
    },
    {
        id: 5,
        name: "Emmanuel Peters",
        location: "Port Harcourt",
        avatar: "EP",
        rating: 4,
        review: "Purchased an Anker power bank and screen protectors. Quality products at fair prices. The shop location is easy to find on Old Aba Road.",
        product: "Anker PowerCore 26800mAh",
        date: "2023-12-28"
    },
    {
        id: 6,
        name: "Chidinma Eze",
        location: "Rivers State",
        avatar: "CE",
        rating: 5,
        review: "Finally found a trustworthy gadget store! Unlike others, Komtech sells only original products. My Xiaomi phone is working perfectly after 6 months.",
        product: "Xiaomi 14 Pro",
        date: "2023-12-20"
    }
];

export const getAverageRating = () => {
    const total = testimonials.reduce((sum, t) => sum + t.rating, 0);
    return (total / testimonials.length).toFixed(1);
};

export const getTotalReviews = () => testimonials.length;
