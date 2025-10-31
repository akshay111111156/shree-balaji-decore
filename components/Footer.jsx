import { useRouter } from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    const router = useRouter();

    const handleHomeClick = (e) => {
        e.preventDefault();
        if (router.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            router.push('/').then(() => {
                window.scrollTo({ top: 0 });
            });
        }
    };

    return (
        <footer className="bg-[#202132] text-white">
            {/* Main Section */}
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Left Column */}
                <div className="pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                        <img src="/images/logo.png" alt="Shree Balaji Decore" className="h-16" />
                        <h2 className="text-2xl font-extrabold uppercase tracking-wide">
                            Shree Balaji Decore
                        </h2>
                    </div>
                    <p className="text-gray-200 mb-4 leading-relaxed font-normal">
                        Our years of experience and hard work have helped us become
                        one of India's leading manufacturers of 100% virgin cast acrylic sheets.
                    </p>
                    <div className="flex space-x-4 text-gray-300 h-12 items-center">
                        <a href="#" className="hover:text-red-500 transition-colors">
                            <FontAwesomeIcon icon={faFacebookF} className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-red-500 transition-colors">
                            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                        </a>
                        <a href="https://github.com/akshay111111156" className="hover:text-red-500 transition-colors">
                            <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Middle Column - Quick Links */}
                <div className="flex flex-col items-center pb-4">
                    <h3 className="font-bold text-3xl mb-8">Quick Links</h3>
                    <div className="grid grid-cols-2 gap-x-12 text-lg font-bold">
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faChevronRight} className="text-red-500 mr-2 w-4 h-4" />
                                <a
                                    href="/"
                                    onClick={handleHomeClick}
                                    className="hover:text-red-500 cursor-pointer"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faChevronRight} className="text-red-500 mr-2 w-4 h-4" />
                                <a href="#products" className="hover:text-red-500">Our Products</a>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faChevronRight} className="text-red-500 mr-2 w-4 h-4" />
                                <a href="/contact" className="hover:text-red-500">Contact Us</a>
                            </li>
                        </ul>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faChevronRight} className="text-red-500 mr-2 w-4 h-4" />
                                <a href="/about" className="hover:text-red-500">About Us</a>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faChevronRight} className="text-red-500 mr-2 w-4 h-4" />
                                <a href="/application" className="hover:text-red-500">Catalog</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Column - Contact Info */}
                <div className="pb-4">
                    <h3 className="font-bold text-3xl mb-8">Contact Us</h3>
                    <p className="flex items-center mb-4 text-lg font-bold">
                        <FontAwesomeIcon icon={faPhone} className="text-red-500 mr-3 w-5 h-5 hover:text-white transition-colors" />
                        <a href="tel:+917002735942" className="hover:text-red-500">
                            +91 7002735942
                        </a>
                        &nbsp; | &nbsp;
                        <a href="tel:+919391048635" className="hover:text-red-500">
                            +91 9391048635
                        </a>
                    </p>
                    <p className="flex items-center mb-4 text-lg font-bold">
                        <FontAwesomeIcon icon={faEnvelope} className="text-red-500 mr-3 w-5 h-5 hover:text-white transition-colors" />
                        <a href="mailto:akshaykumar151656@gmail.com" className="hover:text-red-500">
                            akshaykumar151656@gmail.com
                        </a>
                    </p>
                    <p className="flex items-start text-lg font-bold">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500 mr-3 mt-1 w-5 h-5 hover:text-white transition-colors" />
                        <a
                            href="https://www.google.com/maps?q=shree+balaji+decore+jiyaguda,hyderabad,TS-500087"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-red-500"
                        >
                            Shree Balaji Decore, Jiyaguda, Hyderabad, Telangana - 500087
                        </a>
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#2D3748] text-gray-300 text-sm flex flex-col md:flex-row justify-between items-center px-6 py-3 border-t border-gray-700">
                <div className="space-x-4 mb-2 md:mb-0">
                    <a href="/terms" className="hover:text-white font-bold">Terms & Conditions</a>
                    <a href="/privacy" className="hover:text-white font-bold">Privacy Policy</a>
                </div>
                <p className="font-bold">
                    Copyright © {new Date().getFullYear()} SHREE BALAJI DECORE | All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
