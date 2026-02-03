import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Ministries = () => {
    const ministries = [
        {
            name: "Pastor School",
            desc: "Equipping and training future leaders to shepherd God's people with wisdom and integrity.",
            img: "/images/ministries/general.png"
        },
        {
            name: "G12",
            desc: "A discipleship model focused on multiplication and spiritual growth through small groups.",
            img: "/images/about/community.png"
        },
        {
            name: "The Stage",
            desc: "Creative arts ministry using drama, music, and media to communicate the Gospel.",
            img: "/images/ministries/youth.png"
        },
        {
            name: "Jesus Brothers",
            desc: "Men's ministry building strong, godly men who lead with courage and conviction.",
            img: "/images/ministries/general.png"
        },
        {
            name: "Girls Plus Christ",
            desc: "Empowering young women to discover their identity and purpose in Christ.",
            img: "/images/ministries/kids.png"
        }
    ];

    const branches = [
        {
            name: "Refiners City - Headquarters",
            location: "123 Faith Avenue, City Name, ST 12345",
            pastor: "Senior Pastor"
        },
        {
            name: "Refiners City - North Campus",
            location: "Coming Soon",
            pastor: "Branch Pastor"
        },
        {
            name: "Refiners City - South Campus",
            location: "Coming Soon",
            pastor: "Branch Pastor"
        }
    ];

    return (
        <div className="pt-32 pb-20">
            <div className="container-custom">
                <div className="max-w-3xl mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-secondary"
                    >
                        Ministries
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
                        Find your place to connect, grow, and serve.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-32">
                    {ministries.map((min, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="overflow-hidden rounded-xl mb-6 aspect-[4/3] bg-gray-100">
                                <img src={min.img} alt={min.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors">{min.name}</h3>
                            <p className="text-gray-500 leading-relaxed mb-4">{min.desc}</p>
                            <span className="text-primary font-bold text-sm tracking-widest uppercase border-b-2 border-transparent group-hover:border-primary transition-all">Learn More</span>
                        </motion.div>
                    ))}
                </div>

                {/* Branch Churches Section */}
                <div className="border-t border-gray-100 pt-20">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-secondary">Our Branches</h2>
                        <p className="text-xl text-gray-500">Spreading the Gospel across the globe</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {branches.map((branch, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-all hover:border-primary/20"
                            >
                                <MapPin size={32} className="text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-secondary">{branch.name}</h3>
                                <p className="text-gray-600 mb-2">{branch.location}</p>
                                <p className="text-sm text-gray-500">{branch.pastor}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ministries;
