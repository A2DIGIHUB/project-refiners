import { Facebook, Instagram, Youtube, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10">
            <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                {/* Brand */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <div className="bg-primary text-white p-1 rounded">
                            <span className="font-bold text-lg">RC</span>
                        </div>
                        <h3 className="text-xl font-bold">Refiners-City</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        A place of transformation, refining hearts and building community through faith and love.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors"><Youtube size={20} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link to="/ministries" className="hover:text-white transition-colors">Our Ministries</Link></li>
                        <li><Link to="/sermons" className="hover:text-white transition-colors">Sermons</Link></li>
                        <li><Link to="/events" className="hover:text-white transition-colors">Events Calendar</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="font-bold text-lg mb-4">Visit Us</h4>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-primary mt-1 shrink-0" />
                            <span>123 Faith Avenue,<br />City Name, ST 12345</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-primary shrink-0" />
                            <span>(555) 123-4567</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-primary shrink-0" />
                            <span>hello@refiners-city.com</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="font-bold text-lg mb-4">Stay Connected</h4>
                    <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for updates.</p>
                    <form className="flex flex-col gap-2">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-primary border border-gray-700"
                        />
                        <button className="btn btn-primary w-full">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="container-custom pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Refiners-City Church. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
