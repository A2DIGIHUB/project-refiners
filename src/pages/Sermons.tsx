import { motion } from 'framer-motion';
import { Youtube, Mic, PlayCircle, Video } from 'lucide-react';

const Sermons = () => {
    return (
        <div className="pt-32 pb-20">
            <div className="container-custom">
                <div className="max-w-3xl mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-secondary"
                    >
                        Watch & Listen
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
                        Catch up on recent messages or join us live.
                    </p>
                </div>

                {/* Live Stream Section */}
                <div className="mb-24">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <h2 className="text-sm font-bold text-red-500 uppercase tracking-widest">Live Broadcast</h2>
                    </div>

                    <div className="aspect-video bg-black rounded-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-2xl">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510590337019-5ef2d3977e2e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity"></div>
                        <div className="relative z-10 text-center text-white">
                            <Video size={64} className="mx-auto mb-4 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="text-2xl font-bold">Join Service Live</h3>
                            <p className="text-gray-300 mt-2">Sundays 9:00 AM & 11:00 AM</p>
                        </div>
                    </div>
                </div>

                {/* Platforms */}
                <div>
                    <h2 className="text-3xl font-bold mb-10 text-secondary">Streaming Platforms</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: <Youtube size={32} />, name: "YouTube", desc: "Watch full services and highlights.", color: "hover:text-red-600", border: "hover:border-red-600/30" },
                            { icon: <Mic size={32} />, name: "Spotify", desc: "Listen to audio messages on the go.", color: "hover:text-green-600", border: "hover:border-green-600/30" },
                            { icon: <PlayCircle size={32} />, name: "Apple Podcasts", desc: "Subscribe and never miss a sermon.", color: "hover:text-purple-600", border: "hover:border-purple-600/30" }
                        ].map((platform, idx) => (
                            <a href="#" key={idx} className={`p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-all duration-300 group ${platform.border}`}>
                                <div className={`mb-6 text-gray-400 group-${platform.color} transition-colors`}>{platform.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-secondary">{platform.name}</h3>
                                <p className="text-gray-500">{platform.desc}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sermons;
