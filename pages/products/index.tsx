import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { products, Product } from "../../data/products";

type Tab = "all" | "acrylic" | "louvers" | "solid";

export default function ProductsPage() {
    const router = useRouter();
    const { category } = router.query;

    const [activeTab, setActiveTab] = useState<Tab>("all");
    const [selectedProduct, setSelectedProduct] =
        useState<Product | null>(null);

    useEffect(() => {
        if (
            category === "acrylic" ||
            category === "louvers" ||
            category === "solid"
        ) {
            setActiveTab(category);
        }
    }, [category]);

    const filteredProducts =
        activeTab === "all"
            ? products
            : products.filter(p => p.category === activeTab);

    return (
        <>
            <Navbar />

            {/* LISTING PAGE */}
            <div className="bg-[#0f172a] min-h-screen px-4 pt-6 pb-20 text-white">
                {/* PAGE HEADER WITH BACK BUTTON */}
                <div className="flex items-center justify-between mb-4">

                    {/* BACK BUTTON */}
                    <button
                        onClick={() => router.back()}
                        className="text-2xl font-bold text-white px-2"
                        aria-label="Go back"
                    >
                        ←
                    </button>

                    {/* TITLE */}
                    <h1 className="text-xl font-bold text-center flex-1">
                        Our Product Range
                    </h1>

                    {/* RIGHT SPACER (for perfect centering) */}
                    <div className="w-8" />
                </div>


                {/* FILTER TABS */}
                <div className="flex justify-center gap-2 mb-6 flex-wrap">
                    {["all", "acrylic", "louvers", "solid"].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as Tab)}
                            className={`px-4 py-1.5 rounded-full text-xs font-semibold ${activeTab === tab
                                ? "bg-green-600"
                                : "bg-slate-700"
                                }`}
                        >
                            {tab.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* PRODUCT GRID */}
                <div className="grid grid-cols-2 gap-4">
                    {filteredProducts.map(item => (
                        <div
                            key={item.id}
                            className="bg-slate-800 rounded-xl overflow-hidden shadow-lg"
                        >
                            <div className="h-32 bg-black">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-3">
                                <h3 className="text-sm font-semibold leading-tight">
                                    {item.title}
                                </h3>

                                <p className="text-xs text-gray-400 mt-1">
                                    Starting from ₹{item.price}
                                </p>

                                <div className="flex items-center justify-between mt-3">
                                    <button
                                        onClick={() => setSelectedProduct(item)}
                                        className="text-green-400 text-sm font-semibold"
                                    >
                                        View Details →
                                    </button>

                                    <a
                                        href={`https://wa.me/91XXXXXXXXXX?text=Hi, I want quotation for ${item.title} (Code: ${item.code})`}
                                        target="_blank"
                                        className="bg-green-600 p-2 rounded-full"
                                    >
                                        <img
                                            src="/images/whatsapp.jpg"
                                            className="w-4 h-4"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* DETAIL MODAL */}
            {selectedProduct && (
                <div className="fixed inset-0 z-50 bg-black/70 flex items-end">
                    <div className="bg-[#f5f6f7] w-full rounded-t-3xl max-h-[95vh] overflow-y-auto">

                        {/* HEADER */}
                        <div className="flex items-center px-4 py-4">
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="text-2xl font-bold text-gray-800 mr-3"
                            >
                                ←
                            </button>
                            <h2 className="text-lg font-bold text-gray-900">
                                Acrylic 3D LED Letters – Promotional
                            </h2>
                        </div>

                        {/* IMAGE */}
                        <div className="px-4">
                            <div className="bg-white rounded-xl overflow-hidden shadow">
                                <img
                                    src={selectedProduct.image}
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                        </div>

                        {/* INFO */}
                        <div className="px-4 mt-4">
                            <div className="bg-white rounded-xl p-4 shadow">

                                <h3 className="text-xl font-bold text-gray-900">
                                    {selectedProduct.title}
                                </h3>

                                <p className="text-green-600 font-semibold mt-1">
                                    Code: {selectedProduct.code}
                                </p>

                                <div className="mt-4 space-y-2 text-sm text-gray-700">
                                    <p>✔ Thickness: {selectedProduct.thickness}</p>
                                    <p>✔ Height: {selectedProduct.height}</p>
                                    <p>✔ LED Backlit</p>
                                    <p>✔ Material: {selectedProduct.material}</p>
                                    <p>✔ Usage: {selectedProduct.usage}</p>
                                </div>

                                <p className="mt-4 text-lg font-bold text-gray-900">
                                    Starting from ₹{selectedProduct.price} / inch
                                </p>

                                <a
                                    href={`https://wa.me/91XXXXXXXXXX?text=Hi, I want quotation for Product Code: ${selectedProduct.code}`}
                                    target="_blank"
                                    className="mt-4 block bg-green-600 text-white text-center py-3 rounded-xl font-semibold"
                                >
                                    Get Price on WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* WHATSAPP MESSAGE BOX */}
                        {/* WHATSAPP MESSAGE BOX */}
                        <div className="px-4 mt-4 mb-6">
                            <div className="bg-[#f0f2f5] rounded-2xl px-4 py-3 shadow flex items-center gap-4">

                                {/* MESSAGE TEXT */}
                                <div className="flex-1 text-sm text-gray-800 leading-snug pl-1">
                                    <p className="font-semibold mb-1">
                                        Hi, I want quotation for
                                    </p>
                                    <p>Product Code: {selectedProduct.code}</p>
                                    <p>Size:</p>
                                    <p>Quantity:</p>
                                    <p>City:</p>
                                </div>

                                {/* WHATSAPP SEND BUTTON */}
                                <a
                                    href={`https://wa.me/917702126018?text=Hi, I want quotation for Product Code: ${selectedProduct.code}%0ASize:%0AQuantity:%0ACity:`}
                                    target="_blank"
                                    className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-md active:scale-95 transition"
                                >
                                    <img
                                        src="/images/whatsapp.jpg"
                                        alt="WhatsApp"
                                        className="w-6 h-6 object-contain"
                                    />
                                </a>

                            </div>
                        </div>



                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}
