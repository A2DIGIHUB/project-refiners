import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';

const Events = () => {
    const events = [
        {
            title: "Vision Night",
            date: "Oct 15",
            time: "7:00 PM",
            loc: "Main Sanctuary",
            desc: "A special night of worship and vision casting for the upcoming season."
        },
        {
            title: "Community Outreach",
            date: "Oct 22",
            time: "9:00 AM",
            loc: "City Park",
            desc: "Serving our neighbors with food distribution and family activities."
        },
        {
            title: "Baptism Sunday",
            date: "Nov 05",
            time: "11:00 AM",
            loc: "Main Sanctuary",
            desc: "Celebrating new life in Christ. Sign up if you want to be baptized!"
        },
        {
            title: "Christmas Production",
            date: "Dec 24",
            time: "5:00 PM",
            loc: "Main Sanctuary",
            desc: "An immersive experience retelling the story of the birth of Jesus."
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
                        Events
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
                        Mark your calendars for what's coming up.
                    </p>
                </div>

                <div className="space-y-8">
                    {events.map((evt, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-8 items-start md:items-center"
                        >
                            <div className="flex-shrink-0 text-center md:text-left md:w-32">
                                <span className="block text-primary font-bold uppercase tracking-widest text-sm mb-1">{evt.date.split(' ')[0]}</span>
                                <span className="block text-4xl md:text-5xl font-bold text-secondary">{evt.date.split(' ')[1]}</span>
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors">{evt.title}</h3>
                                <p className="text-gray-500 mb-4 max-w-2xl">{evt.desc}</p>
                                <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-400">
                                    <span className="flex items-center gap-1.5"><Clock size={16} /> {evt.time}</span>
                                    <span className="flex items-center gap-1.5"><MapPin size={16} /> {evt.loc}</span>
                                </div>
                            </div>

                            <div className="flex-shrink-0 mt-4 md:mt-0">
                                <button className="btn btn-outline text-sm px-6">Details</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;
