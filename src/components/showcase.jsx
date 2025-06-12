import { motion } from "framer-motion";

const team = [
  {
    name: "Ananda Dony Setiawan",
    title: "Chief Technology Officer",
    imgSrc: "/reactJs/assets/profile/d.jpg",
  },
  {
    name: "Haykal Azrel",
    title: "Chief Executive Officer",
    imgSrc: "/reactJs/assets/profile/h.jpg",
  },
  {
    name: "Rizal Firmansyah",
    title: "Chief Marketing Officer",
    imgSrc: "/reactJs/assets/profile/r.jpg",
  },
  {
    name: "Naufal Dzakwani",
    title: "Chief Technical Officer",
    imgSrc: "/reactJs/assets/profile/r.jpg",
  },
  {
    name: "Naufal Zakaria",
    title: "Chief Technology Officer",
    imgSrc: "/reactJs/assets/profile/r.jpg",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 80, scale: 0.88 },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.35,
      duration: 0.9,
      delay: i * 0.18,
    },
  }),
};

export default function Showcase() {
  return (
    <div className="showcase-bg">
      <section className="showcase-section">
        <h2 className="showcase-title">
          <span style={{ color: "#1976d2" }}>Meet Our</span> Amazing Team
        </h2>
        <div className="showcase-team-list">
          {team.map((member, i) => (
            <motion.div
              className="showcase-card"
              key={member.name + i}
              custom={i}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <motion.div
                className="showcase-img-wrap"
                whileHover={{ scale: 1.1, boxShadow: "0 0 28px #1976d277" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={member.imgSrc} alt={member.name} />
              </motion.div>
              <div className="showcase-name">{member.name}</div>
              <div className="showcase-title-small">{member.title}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}