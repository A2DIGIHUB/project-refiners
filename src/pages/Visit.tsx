import { MapPin, Clock, Info } from 'lucide-react';

const Visit = () => {
    return (
        <div className="pt-32 pb-20">
            <div className="container-custom">
                <div className="max-w-3xl mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-secondary">
                        Plan Your Visit
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
                        We can't wait to welcome you home.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-primary text-white p-10 rounded-3xl shadow-xl shadow-primary/20">
                            <div className="mb-10">
                                <Clock size={32} className="mb-4 text-white/80" />
                                <h3 className="font-bold text-2xl mb-4">Service Times</h3>
                                <div className="space-y-3 text-white/90">
                                    <div>
                                        <p className="font-semibold mb-2">Sunday Service</p>
                                        <p className="text-sm border-b border-white/20 pb-1">6:00am – Kings and Queens Shift</p>
                                        <p className="text-sm border-b border-white/20 pb-1 pt-1">8:00am – Ignition Shift</p>
                                        <p className="text-sm border-b border-white/20 pb-1 pt-1">10:00am – Family Love Shift</p>
                                        <p className="text-sm border-b border-white/20 pb-1 pt-1">5:00pm – Stars Shift</p>
                                    </div>
                                    <div className="pt-2">
                                        <p className="font-semibold mb-1">Pastor School</p>
                                        <p className="text-sm border-b border-white/20 pb-1">Monday - 5:00pm</p>
                                    </div>
                                    <div className="pt-2">
                                        <p className="font-semibold mb-1">Mid-Week Service</p>
                                        <p className="text-sm">Wednesday - 5:00pm</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <MapPin size={32} className="mb-4 text-white/80" />
                                <h3 className="font-bold text-2xl mb-4">Location</h3>
                                <p className="text-white/90 text-lg leading-relaxed mb-6">123 Faith Avenue<br />City Name, ST 12345</p>
                                <button className="btn bg-white text-primary w-full font-bold">Get Directions</button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <h2 className="text-3xl font-bold mb-10 text-secondary">Common Questions</h2>
                        <div className="space-y-6">
                            {[
                                { q: "What should I wear?", a: "Come as you are! You'll see everything from jeans and tees to suits and dresses. We're just glad you're here." },
                                { q: "What about my kids?", a: "We have an incredible RC Kids ministry for infants through 5th grade. It's safe, fun, and centered on Jesus." },
                                { q: "Where do I park?", a: "We have visitor parking spots reserved right near the front entrance just for you. Look for the 'Guest Parking' signs." },
                                { q: "How long is the service?", a: "Our services typically last about 90 minutes. We have worship, prayer, and a message from the Bible." }
                            ].map((faq, idx) => (
                                <div key={idx} className="border border-gray-100 rounded-2xl p-8 hover:border-primary/20 hover:shadow-lg transition-all duration-300 bg-white">
                                    <h3 className="font-bold text-xl mb-3 flex items-start gap-3 text-secondary">
                                        <Info size={24} className="text-primary shrink-0 mt-1" /> {faq.q}
                                    </h3>
                                    <p className="text-gray-500 text-lg leading-relaxed pl-9">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Visit;
