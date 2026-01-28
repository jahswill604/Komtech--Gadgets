// Komtech Gadgets - Product Categories

export const categories = [
    {
        id: 'smartphones',
        name: 'Smartphones',
        icon: 'Smartphone',
        description: 'Latest smartphones from top brands',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400'
    },
    {
        id: 'tablets',
        name: 'Tablets',
        icon: 'Tablet',
        description: 'Tablets for work and entertainment',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400'
    },
    {
        id: 'smartwatches',
        name: 'Smartwatches',
        icon: 'Watch',
        description: 'Wearables and fitness trackers',
        image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400'
    },
    {
        id: 'accessories',
        name: 'Accessories',
        icon: 'Cable',
        description: 'Cases, chargers, and more',
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400'
    },
    {
        id: 'power-banks',
        name: 'Power Banks',
        icon: 'Battery',
        description: 'Portable charging solutions',
        image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400'
    },
    {
        id: 'audio',
        name: 'Audio',
        icon: 'Headphones',
        description: 'Earbuds, headphones & speakers',
        image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400'
    },
    {
        id: 'gaming',
        name: 'Gaming',
        icon: 'Gamepad2',
        description: 'Gaming accessories and controllers',
        image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=400'
    }
];

export const brands = [
    { id: 'apple', name: 'Apple', logo: '🍎' },
    { id: 'samsung', name: 'Samsung', logo: '📱' },
    { id: 'xiaomi', name: 'Xiaomi', logo: '🔶' },
    { id: 'tecno', name: 'Tecno', logo: '📲' },
    { id: 'infinix', name: 'Infinix', logo: '💫' },
    { id: 'oppo', name: 'Oppo', logo: '🟢' },
    { id: 'anker', name: 'Anker', logo: '🔋' },
    { id: 'oraimo', name: 'Oraimo', logo: '⚡' }
];

export const priceRanges = [
    { id: 'under-100k', label: 'Under ₦100,000', min: 0, max: 100000 },
    { id: '100k-300k', label: '₦100,000 - ₦300,000', min: 100000, max: 300000 },
    { id: '300k-500k', label: '₦300,000 - ₦500,000', min: 300000, max: 500000 },
    { id: '500k-1m', label: '₦500,000 - ₦1,000,000', min: 500000, max: 1000000 },
    { id: 'over-1m', label: 'Over ₦1,000,000', min: 1000000, max: Infinity }
];

export const sortOptions = [
    { id: 'featured', label: 'Featured' },
    { id: 'newest', label: 'Newest' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
    { id: 'rating', label: 'Highest Rated' },
    { id: 'popular', label: 'Most Popular' }
];
