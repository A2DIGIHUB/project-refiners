import { motion } from 'framer-motion';
import { PlayCircle, Youtube, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Watch = () => {
    return (
        <div className="pt-32 pb-20">
            <div className="container-custom">
                <div className="max-w-3xl mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-secondary"
                    >
                        Watch Online
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
                        Join us live or catch up on previous services.
                    </p>
                </div>

                {/* Live Stream */}
                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <h2 className="text-sm font-bold text-red-500 uppercase tracking-widest">Live Now</h2>
                    </div>

                    <div className="aspect-video bg-black rounded-2xl flex items-center justify-center relative overflow-hidden group shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                        <div className="relative z-10 text-center text-white">
                            <PlayCircle size={80} className="mx-auto mb-6 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="text-3xl font-bold mb-2">Sunday Service</h3>
                            <p className="text-gray-300 mb-6">Live every Sunday at 9:00 AM & 11:00 AM</p>
                            <button className="btn bg-primary text-white px-8 py-3 hover:bg-red-800">
                                Join Live Stream
                            </button>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    <Link to="/sermons" className="p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-all group">
                        <Youtube size={32} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold mb-2 text-secondary">Sermon Archive</h3>
                        <p className="text-gray-500">Browse past messages and series</p>
                    </Link>

                    <Link to="/events" className="p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-all group">
                        <Calendar size={32} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold mb-2 text-secondary">Upcoming Events</h3>
                        <p className="text-gray-500">See what's happening this week</p>
                    </Link>

                    <Link to="/visit" className="p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-all group">
                        <PlayCircle size={32} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold mb-2 text-secondary">Plan a Visit</h3>
                        <p className="text-gray-500">Join us in person this Sunday</p>
                    </Link>
                </div>

                {/* Recent Services */}
                <div>
                    <h2 className="text-3xl font-bold mb-10 text-secondary">Recent Services</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: "The Power of Prayer", date: "Jan 28, 2026", duration: "45 min" },
                            { title: "Walking in Faith", date: "Jan 21, 2026", duration: "52 min" },
                            { title: "God's Grace", date: "Jan 14, 2026", duration: "48 min" },
                            { title: "New Beginnings", date: "Jan 7, 2026", duration: "50 min" }
                        ].map((service, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="aspect-video bg-gray-200 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                                    <PlayCircle size={48} className="text-primary opacity-80 group-hover:scale-125 transition-transform duration-300" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-primary transition-colors">{service.title}</h3>
                                <div className="flex gap-4 text-sm text-gray-500">
                                    <span>{service.date}</span>
                                    <span>•</span>
                                    <span>{service.duration}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Watch;
