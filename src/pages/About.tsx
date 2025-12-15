import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-32 pb-20">
            <div className="container-custom">
                {/* Minimalist Header */}
                <div className="max-w-3xl mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-secondary"
                    >
                        Who We Are
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
                        A community of believers passionate about God's presence and people's purpose.
                    </p>
                </div>

                {/* Vision & Mission - Clean Layout */}
                <div className="grid md:grid-cols-12 gap-12 items-start mb-32">
                    <div className="md:col-span-5 relative">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                            <img
                                src="https://images.unsplash.com/photo-1544427920-c49ccfb85566?q=80&w=2555&auto=format&fit=crop"
                                alt="Community"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-7 space-y-16 py-8">
                        <div>
                            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Our Vision</h2>
                            <p className="text-2xl md:text-3xl text-gray-800 leading-tight">
                                To see lives refined by the fire of God's love, cities transformed by the power of the Gospel, and generations raised to walk in their divine identity.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Our Mission</h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                We exist to create an atmosphere where people can encounter the Holy Spirit, be equipped through the Word, and be empowered to impact their world. We believe in authenticity, community, and the transformative power of Jesus.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Beliefs - Grid */}
                <div className="border-t border-gray-100 pt-20">
                    <h2 className="text-3xl font-bold mb-12 text-center">What We Believe</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {[
                            { title: "The Bible", desc: "We believe the Bible is the inspired, infallible Word of God." },
                            { title: "God", desc: "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit." },
                            { title: "Salvation", desc: "We believe salvation is a free gift of God, received by faith in Jesus Christ alone." },
                            { title: "The Church", desc: "We believe the church is the body of Christ, a community of believers on mission." },
                            { title: "Worship", desc: "We believe worship is a lifestyle, not just a song or a service." },
                            { title: "Holy Spirit", desc: "We believe in the active presence and power of the Holy Spirit today." },
                        ].map((belief, idx) => (
                            <div key={idx} className="group">
                                <h3 className="text-xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors">{belief.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{belief.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
