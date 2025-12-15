import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Check if we are on the home page
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Ministries', path: '/ministries' },
        { name: 'Events', path: '/events' },
        { name: 'Sermons', path: '/sermons' },
        { name: 'Contact', path: '/contact' },
    ];

    // Determine navbar style based on route and scroll state
    // If not home, always use the "scrolled" (white bg) style, but maybe transparent if at top?
    // User asked for fix: "it's on all the pages except the home page".
    // Best approach: On non-home pages, use a style that guarantees visibility.
    // Minimalistic design typically means black text on white bg.

    const isTransparent = isHome && !scrolled;
    const navbarBg = isTransparent ? 'bg-transparent' : 'bg-white/80 backdrop-blur-md shadow-sm';
    const textColor = isTransparent ? 'text-white' : 'text-secondary';
    const logoBg = isTransparent ? 'bg-white text-primary' : 'bg-primary text-white';

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${navbarBg} py-3 md:py-4`}
        >
            <div className="container-custom flex justify-between items-center px-4 md:px-8">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className={`p-2 rounded-lg transition-colors ${logoBg}`}>
                        <span className="font-bold text-xl">RC</span>
                    </div>
                    <span className={`font-bold text-xl tracking-tight transition-colors ${textColor}`}>
                        Refiners-City
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`font-medium text-sm uppercase tracking-wide transition-colors hover:text-primary ${isTransparent ? 'text-white/90' : 'text-gray-600'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/give"
                        className={`btn flex items-center gap-2 ${isTransparent
                            ? 'bg-white text-primary hover:bg-gray-100'
                            : 'bg-primary text-white hover:bg-red-800'
                            }`}
                    >
                        <Heart size={18} className="fill-current" />
                        Give
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`md:hidden p-2 rounded-md ${textColor}`}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 absolute top-full left-0 w-full shadow-lg overflow-hidden"
                    >
                        <div className="container-custom py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="font-medium text-secondary hover:text-primary py-2 border-b border-gray-50"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/give" className="btn btn-primary w-full flex justify-center gap-2">
                                <Heart size={18} /> Give Online
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
