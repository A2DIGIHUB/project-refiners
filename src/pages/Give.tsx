import { Heart, CreditCard, Smartphone, Gift } from 'lucide-react';

const Give = () => {
    return (
        <div className="pt-32 pb-20">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <Heart size={64} className="mx-auto mb-8 text-primary fill-primary/10" />
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-secondary">Generic Kindness</h1>
                    <p className="text-xl md:text-3xl text-gray-400 font-light leading-relaxed">
                        "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
                    </p>
                    <p className="mt-6 text-sm font-bold text-gray-300 uppercase tracking-widest">— 2 Corinthians 9:7</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <CreditCard size={40} />,
                            title: "Give Online",
                            desc: "Simple, secure, and instant. Set up recurring giving or make a one-time donation.",
                            btn: "Give Now"
                        },
                        {
                            icon: <Smartphone size={40} />,
                            title: "Text to Give",
                            desc: "Text 'GIVE' to 555-123-4567. Follow the prompts to complete your donation.",
                            btn: "Get Instructions"
                        },
                        {
                            icon: <Gift size={40} />,
                            title: "In Person",
                            desc: "You can give by cash or check during any of our weekly services.",
                            btn: "Plan a Visit"
                        }
                    ].map((way, idx) => (
                        <div key={idx} className="group p-10 bg-white rounded-3xl border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 text-center">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 text-secondary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                                {way.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-secondary">{way.title}</h3>
                            <p className="text-gray-500 mb-8 leading-relaxed">{way.desc}</p>
                            <button className="btn btn-outline w-full py-3 rounded-xl">{way.btn}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Give;
