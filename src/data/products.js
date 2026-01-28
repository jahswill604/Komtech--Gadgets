// Komtech Gadgets - Product Data
// All prices in Nigerian Naira (₦)

export const products = [
    // SMARTPHONES - iPhone
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        brand: "Apple",
        category: "Smartphones",
        price: 1850000,
        originalPrice: 2100000,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
        images: [
            "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800",
            "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=800"
        ],
        rating: 4.9,
        reviews: 128,
        stock: 5,
        specs: {
            display: "6.7-inch Super Retina XDR",
            processor: "A17 Pro chip",
            storage: "256GB",
            camera: "48MP + 12MP + 12MP",
            battery: "4422mAh"
        },
        description: "Experience the most powerful iPhone ever with the revolutionary A17 Pro chip, titanium design, and pro-level camera system.",
        isNew: true,
        isFeatured: true
    },
    {
        id: 2,
        name: "iPhone 15",
        brand: "Apple",
        category: "Smartphones",
        price: 1150000,
        originalPrice: 1300000,
        image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500",
        images: [
            "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=800"
        ],
        rating: 4.8,
        reviews: 89,
        stock: 12,
        specs: {
            display: "6.1-inch Super Retina XDR",
            processor: "A16 Bionic chip",
            storage: "128GB",
            camera: "48MP + 12MP",
            battery: "3349mAh"
        },
        description: "The new iPhone 15 with Dynamic Island, 48MP camera, and USB-C connectivity.",
        isNew: true,
        isFeatured: true
    },
    {
        id: 3,
        name: "iPhone 14",
        brand: "Apple",
        category: "Smartphones",
        price: 850000,
        originalPrice: 950000,
        image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=500",
        images: [
            "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=800"
        ],
        rating: 4.7,
        reviews: 156,
        stock: 8,
        specs: {
            display: "6.1-inch Super Retina XDR",
            processor: "A15 Bionic chip",
            storage: "128GB",
            camera: "12MP + 12MP",
            battery: "3279mAh"
        },
        description: "iPhone 14 delivers impressive performance with all-day battery life and advanced safety features.",
        isNew: false,
        isFeatured: false
    },

    // SMARTPHONES - Samsung
    {
        id: 4,
        name: "Samsung Galaxy S24 Ultra",
        brand: "Samsung",
        category: "Smartphones",
        price: 1650000,
        originalPrice: 1900000,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
        images: [
            "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800"
        ],
        rating: 4.8,
        reviews: 94,
        stock: 7,
        specs: {
            display: "6.8-inch Dynamic AMOLED 2X",
            processor: "Snapdragon 8 Gen 3",
            storage: "256GB",
            camera: "200MP + 12MP + 50MP + 10MP",
            battery: "5000mAh"
        },
        description: "Galaxy AI brings powerful productivity features. With a built-in S Pen and titanium frame.",
        isNew: true,
        isFeatured: true
    },
    {
        id: 5,
        name: "Samsung Galaxy S24+",
        brand: "Samsung",
        category: "Smartphones",
        price: 1050000,
        originalPrice: 1200000,
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500",
        images: [
            "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800"
        ],
        rating: 4.7,
        reviews: 67,
        stock: 10,
        specs: {
            display: "6.7-inch Dynamic AMOLED 2X",
            processor: "Exynos 2400",
            storage: "256GB",
            camera: "50MP + 12MP + 10MP",
            battery: "4900mAh"
        },
        description: "Premium Galaxy experience with stunning display and AI-powered features.",
        isNew: true,
        isFeatured: false
    },
    {
        id: 6,
        name: "Samsung Galaxy A54 5G",
        brand: "Samsung",
        category: "Smartphones",
        price: 380000,
        originalPrice: 420000,
        image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500",
        images: [
            "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800"
        ],
        rating: 4.5,
        reviews: 234,
        stock: 25,
        specs: {
            display: "6.4-inch Super AMOLED",
            processor: "Exynos 1380",
            storage: "128GB",
            camera: "50MP + 12MP + 5MP",
            battery: "5000mAh"
        },
        description: "Awesome Galaxy A series with 5G speed and water-resistant design.",
        isNew: false,
        isFeatured: true
    },

    // SMARTPHONES - Xiaomi
    {
        id: 7,
        name: "Xiaomi 14 Pro",
        brand: "Xiaomi",
        category: "Smartphones",
        price: 750000,
        originalPrice: 850000,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
        images: [
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800"
        ],
        rating: 4.6,
        reviews: 78,
        stock: 9,
        specs: {
            display: "6.73-inch LTPO AMOLED",
            processor: "Snapdragon 8 Gen 3",
            storage: "256GB",
            camera: "50MP Leica + 50MP + 50MP",
            battery: "4880mAh"
        },
        description: "Flagship killer with Leica optics and flagship Snapdragon performance.",
        isNew: true,
        isFeatured: true
    },
    {
        id: 8,
        name: "Redmi Note 13 Pro+",
        brand: "Xiaomi",
        category: "Smartphones",
        price: 320000,
        originalPrice: 380000,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
        images: [
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
        ],
        rating: 4.5,
        reviews: 145,
        stock: 30,
        specs: {
            display: "6.67-inch AMOLED 120Hz",
            processor: "MediaTek Dimensity 7200",
            storage: "256GB",
            camera: "200MP + 8MP + 2MP",
            battery: "5000mAh"
        },
        description: "200MP camera champion with stunning display and fast charging.",
        isNew: true,
        isFeatured: false
    },

    // SMARTPHONES - Tecno
    {
        id: 9,
        name: "Tecno Phantom X2 Pro",
        brand: "Tecno",
        category: "Smartphones",
        price: 420000,
        originalPrice: 480000,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500",
        images: [
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800"
        ],
        rating: 4.4,
        reviews: 89,
        stock: 12,
        specs: {
            display: "6.8-inch AMOLED 120Hz",
            processor: "MediaTek Dimensity 9000",
            storage: "256GB",
            camera: "64MP + 13MP + 2MP",
            battery: "5160mAh"
        },
        description: "Premium Tecno flagship with retractable portrait lens and flagship performance.",
        isNew: true,
        isFeatured: true
    },
    {
        id: 10,
        name: "Tecno Camon 20 Premier",
        brand: "Tecno",
        category: "Smartphones",
        price: 280000,
        originalPrice: 320000,
        image: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=500",
        images: [
            "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=800"
        ],
        rating: 4.3,
        reviews: 167,
        stock: 20,
        specs: {
            display: "6.67-inch AMOLED",
            processor: "MediaTek Dimensity 8050",
            storage: "512GB",
            camera: "50MP RGBW + 50MP + 2MP",
            battery: "5000mAh"
        },
        description: "Camera-focused smartphone with RGBW sensor for stunning low-light photography.",
        isNew: false,
        isFeatured: false
    },

    // SMARTPHONES - Infinix
    {
        id: 11,
        name: "Infinix Zero 30 5G",
        brand: "Infinix",
        category: "Smartphones",
        price: 320000,
        originalPrice: 380000,
        image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=500",
        images: [
            "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800"
        ],
        rating: 4.4,
        reviews: 112,
        stock: 15,
        specs: {
            display: "6.78-inch AMOLED 144Hz",
            processor: "MediaTek Dimensity 8020",
            storage: "256GB",
            camera: "108MP + 13MP + 2MP",
            battery: "5000mAh"
        },
        description: "First 4K selfie video phone with 144Hz curved AMOLED display.",
        isNew: true,
        isFeatured: false
    },
    {
        id: 12,
        name: "Infinix Hot 40 Pro",
        brand: "Infinix",
        category: "Smartphones",
        price: 145000,
        originalPrice: 165000,
        image: "https://images.unsplash.com/photo-1609692814858-f7cd2f0afa4f?w=500",
        images: [
            "https://images.unsplash.com/photo-1609692814858-f7cd2f0afa4f?w=800"
        ],
        rating: 4.2,
        reviews: 245,
        stock: 35,
        specs: {
            display: "6.78-inch IPS LCD 120Hz",
            processor: "MediaTek Helio G99",
            storage: "256GB",
            camera: "108MP + 2MP",
            battery: "5000mAh"
        },
        description: "Budget champion with flagship-level 108MP camera and gaming performance.",
        isNew: false,
        isFeatured: true
    },

    // TABLETS
    {
        id: 13,
        name: "iPad Pro 12.9-inch (M2)",
        brand: "Apple",
        category: "Tablets",
        price: 1650000,
        originalPrice: 1850000,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
        images: [
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800"
        ],
        rating: 4.9,
        reviews: 56,
        stock: 4,
        specs: {
            display: "12.9-inch Liquid Retina XDR",
            processor: "Apple M2 chip",
            storage: "256GB",
            camera: "12MP + 10MP + LiDAR",
            battery: "10 hours"
        },
        description: "The ultimate iPad experience with M2 chip and stunning Liquid Retina XDR display.",
        isNew: false,
        isFeatured: true
    },
    {
        id: 14,
        name: "Samsung Galaxy Tab S9+",
        brand: "Samsung",
        category: "Tablets",
        price: 950000,
        originalPrice: 1100000,
        image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500",
        images: [
            "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800"
        ],
        rating: 4.7,
        reviews: 43,
        stock: 6,
        specs: {
            display: "12.4-inch Dynamic AMOLED 2X",
            processor: "Snapdragon 8 Gen 2",
            storage: "256GB",
            camera: "13MP + 8MP",
            battery: "10090mAh"
        },
        description: "Premium Android tablet with Galaxy AI and S Pen included.",
        isNew: true,
        isFeatured: false
    },

    // SMARTWATCHES
    {
        id: 15,
        name: "Apple Watch Ultra 2",
        brand: "Apple",
        category: "Smartwatches",
        price: 950000,
        originalPrice: 1100000,
        image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500",
        images: [
            "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800"
        ],
        rating: 4.9,
        reviews: 34,
        stock: 3,
        specs: {
            display: "49mm Always-On Retina",
            processor: "S9 SiP",
            battery: "36 hours",
            features: "GPS, Cellular, Dive Computer"
        },
        description: "The most rugged and capable Apple Watch for extreme adventures.",
        isNew: true,
        isFeatured: true
    },
    {
        id: 16,
        name: "Samsung Galaxy Watch 6 Classic",
        brand: "Samsung",
        category: "Smartwatches",
        price: 420000,
        originalPrice: 480000,
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500",
        images: [
            "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800"
        ],
        rating: 4.6,
        reviews: 67,
        stock: 10,
        specs: {
            display: "47mm Super AMOLED",
            processor: "Exynos W930",
            battery: "40 hours",
            features: "Rotating bezel, BIA sensor"
        },
        description: "Classic design meets cutting-edge technology with rotating bezel control.",
        isNew: true,
        isFeatured: false
    },

    // ACCESSORIES - Chargers
    {
        id: 17,
        name: "Apple 20W USB-C Power Adapter",
        brand: "Apple",
        category: "Accessories",
        subcategory: "Chargers",
        price: 28000,
        originalPrice: 32000,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
        images: [
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800"
        ],
        rating: 4.7,
        reviews: 189,
        stock: 50,
        specs: {
            output: "20W",
            connector: "USB-C",
            compatibility: "iPhone, iPad, AirPods"
        },
        description: "Official Apple fast charger for quick and efficient charging.",
        isNew: false,
        isFeatured: false
    },
    {
        id: 18,
        name: "Samsung 45W Super Fast Charger",
        brand: "Samsung",
        category: "Accessories",
        subcategory: "Chargers",
        price: 22000,
        originalPrice: 28000,
        image: "https://images.unsplash.com/photo-1625895197185-efcec01cffe0?w=500",
        images: [
            "https://images.unsplash.com/photo-1625895197185-efcec01cffe0?w=800"
        ],
        rating: 4.6,
        reviews: 234,
        stock: 45,
        specs: {
            output: "45W PD",
            connector: "USB-C",
            compatibility: "Galaxy S/Note/Tab series"
        },
        description: "Super fast charging for compatible Samsung devices.",
        isNew: false,
        isFeatured: true
    },

    // POWER BANKS
    {
        id: 19,
        name: "Anker PowerCore 26800mAh",
        brand: "Anker",
        category: "Power Banks",
        price: 65000,
        originalPrice: 75000,
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500",
        images: [
            "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800"
        ],
        rating: 4.8,
        reviews: 312,
        stock: 20,
        specs: {
            capacity: "26800mAh",
            output: "30W PD",
            ports: "2x USB-A, 1x USB-C"
        },
        description: "Massive capacity power bank to keep all your devices charged for days.",
        isNew: false,
        isFeatured: true
    },
    {
        id: 20,
        name: "Oraimo Traveler 10000mAh",
        brand: "Oraimo",
        category: "Power Banks",
        price: 18000,
        originalPrice: 22000,
        image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500",
        images: [
            "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=800"
        ],
        rating: 4.4,
        reviews: 456,
        stock: 60,
        specs: {
            capacity: "10000mAh",
            output: "18W",
            ports: "2x USB-A, 1x USB-C"
        },
        description: "Compact and reliable power bank perfect for daily use.",
        isNew: false,
        isFeatured: false
    },

    // AUDIO - Earbuds
    {
        id: 21,
        name: "AirPods Pro (2nd Gen)",
        brand: "Apple",
        category: "Audio",
        subcategory: "Earbuds",
        price: 320000,
        originalPrice: 380000,
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500",
        images: [
            "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800"
        ],
        rating: 4.9,
        reviews: 178,
        stock: 15,
        specs: {
            driver: "Custom Apple driver",
            anc: "Active Noise Cancellation",
            battery: "6 hours (30 hours with case)"
        },
        description: "Immersive audio experience with industry-leading Active Noise Cancellation.",
        isNew: false,
        isFeatured: true
    },
    {
        id: 22,
        name: "Samsung Galaxy Buds2 Pro",
        brand: "Samsung",
        category: "Audio",
        subcategory: "Earbuds",
        price: 180000,
        originalPrice: 220000,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
        images: [
            "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800"
        ],
        rating: 4.7,
        reviews: 134,
        stock: 22,
        specs: {
            driver: "2-way speaker",
            anc: "Intelligent ANC",
            battery: "5 hours (18 hours with case)"
        },
        description: "Premium Galaxy audio with high-quality 24-bit Hi-Fi sound.",
        isNew: false,
        isFeatured: false
    },

    // CASES & PROTECTION
    {
        id: 23,
        name: "iPhone 15 Pro Max Clear Case",
        brand: "Apple",
        category: "Accessories",
        subcategory: "Cases",
        price: 15000,
        originalPrice: 18000,
        image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=500",
        images: [
            "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=800"
        ],
        rating: 4.5,
        reviews: 89,
        stock: 40,
        specs: {
            material: "Polycarbonate + TPU",
            protection: "MagSafe compatible",
            features: "Scratch-resistant coating"
        },
        description: "Show off your iPhone while keeping it protected with crystal-clear case.",
        isNew: true,
        isFeatured: false
    },
    {
        id: 24,
        name: "Tempered Glass Screen Protector",
        brand: "Generic",
        category: "Accessories",
        subcategory: "Screen Protectors",
        price: 3500,
        originalPrice: 5000,
        image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=500",
        images: [
            "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=800"
        ],
        rating: 4.3,
        reviews: 567,
        stock: 100,
        specs: {
            hardness: "9H",
            thickness: "0.33mm",
            features: "Anti-fingerprint, Bubble-free"
        },
        description: "Premium tempered glass protection for all smartphone models.",
        isNew: false,
        isFeatured: false
    },

    // GAMING
    {
        id: 25,
        name: "Xbox Wireless Controller",
        brand: "Microsoft",
        category: "Gaming",
        price: 85000,
        originalPrice: 95000,
        image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=500",
        images: [
            "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=800"
        ],
        rating: 4.8,
        reviews: 234,
        stock: 18,
        specs: {
            connectivity: "Bluetooth + USB-C",
            compatibility: "Xbox, PC, Android, iOS",
            battery: "40 hours"
        },
        description: "Premium wireless gaming controller with textured grips and hybrid D-pad.",
        isNew: false,
        isFeatured: true
    }
];

// Helper function to get featured products
export const getFeaturedProducts = () => products.filter(p => p.isFeatured);

// Helper function to get new arrivals
export const getNewArrivals = () => products.filter(p => p.isNew);

// Helper function to get products by category
export const getProductsByCategory = (category) =>
    products.filter(p => p.category === category);

// Helper function to get products by brand
export const getProductsByBrand = (brand) =>
    products.filter(p => p.brand === brand);

// Helper function to format price in Naira
export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price).replace('NGN', '₦');
};
