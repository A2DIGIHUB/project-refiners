import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-32 pb-20">
            <div className="container-custom">
                <div className="max-w-3xl mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-secondary">
                        Get in Touch
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
                        We'd love to hear from you. Here's how to reach us.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-20">
                    <div className="space-y-12">
                        {[
                            {
                                icon: <MapPin size={28} className="text-primary" />,
                                title: "Visit Us",
                                lines: ["123 Faith Avenue", "City Name, ST 12345"]
                            },
                            {
                                icon: <Phone size={28} className="text-primary" />,
                                title: "Call Us",
                                lines: ["(555) 123-4567", "Mon-Fri: 9am - 5pm"]
                            },
                            {
                                icon: <Mail size={28} className="text-primary" />,
                                title: "Email Us",
                                lines: ["hello@refiners-city.com"]
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-6 items-start">
                                <div className="p-4 bg-gray-50 rounded-2xl">{item.icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-secondary">{item.title}</h3>
                                    {item.lines.map((line, i) => (
                                        <p key={i} className="text-gray-500 text-lg">{line}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-50 p-10 rounded-3xl">
                        <h3 className="text-2xl font-bold mb-8 text-secondary">Send a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-white border-0 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-white border-0 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Email</label>
                                <input type="email" className="w-full px-4 py-3 bg-white border-0 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 bg-white border-0 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"></textarea>
                            </div>
                            <button type="button" className="btn btn-primary w-full py-4 text-lg rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/40">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
