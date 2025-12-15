import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Users, Heart, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden bg-secondary">
                {/* Background Image/Overlay */}
                <div className="absolute inset-0 bg-[url('/images/home/hero.png')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>

                <div className="relative z-10 container-custom px-4 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="px-4"
                    >
                        <h2 className="text-lg md:text-2xl font-medium tracking-wider mb-4 text-red-400 uppercase">Welcome Home</h2>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">Refiners-City</h1>
                        <p className="max-w-xl mx-auto text-base sm:text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                            A place to encounter God, experience transformation, and find your purpose.
                            Join us this Sunday as we worship together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-sm sm:max-w-none mx-auto">
                            <Link to="/visit" className="btn btn-primary text-base md:text-lg px-6 md:px-8 py-3 flex items-center justify-center gap-2">
                                Plan a Visit <ArrowRight size={20} />
                            </Link>
                            <Link to="/watch" className="btn bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 text-base md:text-lg px-6 md:px-8 py-3 flex items-center justify-center gap-2">
                                <PlayCircle size={20} /> Watch Online
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Service Times & Location */}
            <section className="py-20 bg-surface">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-20">
                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-center text-center border-t-4 border-primary"
                        >
                            <Clock size={48} className="text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">Service Times</h3>
                            <p className="text-gray-600">Sundays at 9:00 AM & 11:00 AM</p>
                            <p className="text-gray-600">Wednesdays at 7:00 PM</p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-primary p-8 rounded-xl shadow-xl flex flex-col items-center text-center text-white"
                        >
                            <MapPin size={48} className="mb-4" />
                            <h3 className="text-xl font-bold mb-2">Location</h3>
                            <p className="text-white/90">123 Faith Avenue</p>
                            <p className="text-white/90">City Name, ST 12345</p>
                            <a href="#" className="mt-4 text-sm underline decoration-white/50 hover:decoration-white">Get Directions</a>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-center text-center border-t-4 border-primary"
                        >
                            <Users size={48} className="text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">I'm New</h3>
                            <p className="text-gray-600 mb-4">First time here? We'd love to connect with you and make you feel at home.</p>
                            <Link to="/new" className="text-primary font-medium hover:underline">Learn More &rarr;</Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About / Vision */}
            <section className="py-24 bg-white">
                <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-primary font-bold uppercase tracking-wider mb-2">Our Mission</h4>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">Refining Hearts,<br />Building Lives</h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            At Refiners-City, we believe that God is in the business of transformation.
                            Like silver refined in the fire, our lives are shaped and purified through His love and grace.
                        </p>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            We are a vibrant community dedicated to authentic worship, biblical teaching, and persistent prayer.
                            Whether you are just starting your journey or have been walking with God for years, there is a place for you here.
                        </p>
                        <Link to="/about" className="btn btn-outline px-8 py-3 inline-block">Our Story</Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gray-100 rounded-2xl md:-rotate-3 -z-10"></div>
                        <img
                            src="/images/about/community.png"
                            alt="Worship community"
                            className="rounded-xl shadow-2xl w-full object-cover h-[500px]"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Ministries Preview */}
            <section className="py-24 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Something for Everyone</h2>
                        <p className="text-gray-600">Connect with others and grow in your faith through our diverse ministries.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Kids",
                                desc: "A fun and safe environment for children to learn about Jesus.",
                                image: "/images/ministries/kids.png"
                            },
                            {
                                title: "Youth",
                                desc: "Empowering the next generation to live boldly for Christ.",
                                image: "/images/ministries/youth.png"
                            },
                            {
                                title: "Groups",
                                desc: "Life flows better in community. Find a small group near you.",
                                image: "/images/about/community.png"
                            }
                        ].map((min, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative overflow-hidden rounded-xl h-80 cursor-pointer"
                            >
                                <img src={min.image} alt={min.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">{min.title}</h3>
                                    <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">{min.desc}</p>
                                    <span className="text-red-400 font-medium flex items-center gap-2">Learn More <ArrowRight size={16} /></span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="container-custom max-w-4xl">
                    <Heart size={64} className="mx-auto mb-6 text-red-300" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Join Us in Making a Difference</h2>
                    <p className="text-xl text-red-100 mb-10">
                        Your generosity helps us continue our mission of refining hearts and building lives locally and globally.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/give" className="btn bg-white text-primary hover:bg-gray-100 px-10 py-4 text-lg font-bold shadow-lg">
                            Give Online
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
