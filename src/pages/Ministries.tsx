import { motion } from 'framer-motion';

const Ministries = () => {
    const ministries = [
        {
            name: "RC Kids",
            desc: "Creating a fun, safe, and faith-filled environment where children can learn about Jesus on their level.",
            img: "/images/ministries/kids.png"
        },
        {
            name: "Refiners Youth",
            desc: "Empowering middle and high school students to own their faith and influence their culture.",
            img: "/images/ministries/youth.png"
        },
        {
            name: "Young Adults",
            desc: "A community for 18-30s to navigate life together, grow in discipleship, and find deep connection.",
            img: "/images/ministries/general.png"
        },
        {
            name: "Men's Ministry",
            desc: "Challenging men to be the leaders, husbands, and fathers God created them to be.",
            img: "/images/ministries/general.png"
        },
        {
            name: "Women's Ministry",
            desc: "Inspiring women to walk in confidence, compassion, and the fullness of their calling.",
            img: "/images/ministries/general.png"
        },
        {
            name: "Outreach",
            desc: "Taking the love of Christ beyond the four walls of the church to serve our city and world.",
            img: "/images/about/community.png"
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
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
            </div>
        </div>
    );
};

export default Ministries;
