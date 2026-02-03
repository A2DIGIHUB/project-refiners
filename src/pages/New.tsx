import { motion } from 'framer-motion';
import { Users, MapPin, Coffee, Heart, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const New = () => {
    return (
        <div className="pt-32 pb-20">
            <div className="container-custom">
                <div className="max-w-3xl mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-secondary"
                    >
                        Welcome!
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
                        We're so glad you're here. Let us help you feel at home.
                    </p>
                </div>

                {/* What to Expect */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold mb-10 text-secondary">What to Expect</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: <Coffee size={32} />,
                                title: "Arrive Early",
                                desc: "We recommend arriving 15 minutes early. Grab a coffee, meet our team, and get comfortable before the service starts."
                            },
                            {
                                icon: <Users size={32} />,
                                title: "Friendly Atmosphere",
                                desc: "You'll find a warm, welcoming environment. Our greeters and ushers are here to help you find your way."
                            },
                            {
                                icon: <MapPin size={32} />,
                                title: "Guest Parking",
                                desc: "Look for the 'Guest Parking' signs near the main entrance. We've reserved the best spots just for you!"
                            },
                            {
                                icon: <Heart size={32} />,
                                title: "Kids Are Welcome",
                                desc: "We have age-appropriate programs for infants through 5th grade. Check-in is easy and secure."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-all"
                            >
                                <div className="text-primary mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-secondary">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* FAQs */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold mb-10 text-secondary">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "What should I wear?",
                                a: "Come as you are! You'll see everything from casual to dressy. We care more about your heart than your outfit."
                            },
                            {
                                q: "How long is the service?",
                                a: "Our services typically last about 90 minutes, including worship, prayer, and a message from God's Word."
                            },
                            {
                                q: "Will I have to stand up or speak?",
                                a: "Absolutely not! You're welcome to participate as much or as little as you'd like. There's no pressure."
                            },
                            {
                                q: "What about my kids?",
                                a: "We have RC Kids for ages infant through 5th grade. They'll have a blast learning about Jesus in a safe, fun environment."
                            },
                            {
                                q: "Can I connect with someone?",
                                a: "Yes! Stop by our Welcome Center after the service, or fill out a connection card. We'd love to get to know you."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="border border-gray-100 rounded-2xl p-8 bg-white hover:shadow-md transition-all">
                                <h3 className="font-bold text-xl mb-3 flex items-center gap-3 text-secondary">
                                    <HelpCircle size={24} className="text-primary shrink-0" />
                                    {faq.q}
                                </h3>
                                <p className="text-gray-500 text-lg leading-relaxed pl-9">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gray-50 rounded-3xl p-12 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-secondary">Ready to Visit?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        We can't wait to meet you! Plan your visit or reach out if you have any questions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/visit" className="btn btn-primary px-8 py-3">
                            Plan Your Visit
                        </Link>
                        <Link to="/contact" className="btn btn-outline px-8 py-3">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;
