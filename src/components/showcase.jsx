import { motion } from "framer-motion";
import "./showcase.css"; // Assuming you have a CSS file for styles

const team = [
  {
    name: "Ananda Dony Setiawan",
    title: "Chief Technology Officer",
    imgSrc: "/Companny_Profile-Esta/assets/profile/d.jpg",
  },
  {
    name: "Haykal Azrel",
    title: "Chief Executive Officer",
    imgSrc: "/Companny_Profile-Esta/assets/profile/h.jpg",
  },
  {
    name: "Rizal Firmansyah",
    title: "Chief Marketing Officer",
    imgSrc: "/Companny_Profile-Esta/assets/profile/r.jpg",
  },
  {
    name: "Naufal Dzakwani",
    title: "Chief Technical Officer",
    imgSrc: "/Companny_Profile-Esta/assets/profile/nd.jpg",
  },
  {
    name: "Naufal Zakaria",
    title: "Chief Technology Officer",
    imgSrc: "/Companny_Profile-Esta/assets/profile/nz.jpg",
  },
  {
    name: "Langam Dewa",
    title: "Chief Marketing Officer",
    imgSrc: "/Companny_Profile-Esta/assets/profile/L.jpg",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 80, scale: 0.9 },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.35,
      duration: 0.9,
      delay: i * 0.14,
    },
  }),
};

export default function Showcase() {
  return (
    <div className="showcase-bg">
      <section className="showcase-section">
        <motion.h2
          className="showcase-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <span style={{ color: "#1976d2" }}>Meet Our</span> Amazing Team
        </motion.h2>
        <div className="showcase-team-list">
          {team.map((member, i) => (
            <motion.div
              className="showcase-card"
              key={member.name + i}
              custom={i}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <motion.div
                className="showcase-img-wrap"
                whileHover={{
                  scale: 1.10,
                  boxShadow: "0 0 30px #1976d288",
                  rotate: [0, -2, 2, 0],
                }}
                transition={{ type: "spring", stiffness: 320, damping: 14 }}
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