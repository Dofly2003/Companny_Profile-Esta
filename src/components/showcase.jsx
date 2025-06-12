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
  offscreen: { opacity: 0, y: 80, scale: 0.85 },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.35,
      duration: 0.9,
      delay: i * 0.2,
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
              key={member.name}
              custom={i}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <motion.div
                className="showcase-img-wrap"
                whileHover={{ scale: 1.08, boxShadow: "0 0 24px #1976d277" }}
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
      <ShowcaseStyle />
    </div>
  );
}

function ShowcaseStyle() {
  return (
    <style>{`
      .showcase-bg {
        min-height: 100vh;
        background: linear-gradient(120deg, #ecf0f3 0%, #e8f1ff 100%);
        padding: 0;
        margin: 0;
      }
      .showcase-section {
        max-width: 960px;
        margin: auto;
        padding: 48px 16px 32px 16px;
        text-align: center;
      }
      .showcase-title {
        font-size: 2.6rem;
        font-weight: 800;
        margin-bottom: 2.5rem;
        letter-spacing: -1px;
      }
      .showcase-team-list {
        display: flex;
        flex-wrap: wrap;
        gap: 32px 28px;
        justify-content: center;
      }
      .showcase-card {
        background: #fff;
        border-radius: 24px;
        padding: 32px 28px 18px 28px;
        box-shadow: 0 3px 32px #1976d21a;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 220px;
        max-width: 250px;
        transition: box-shadow 0.25s;
      }
      .showcase-card:hover {
        box-shadow: 0 6px 48px #1976d255;
      }
      .showcase-img-wrap {
        width: 108px;
        height: 108px;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 0 12px #1976d233;
        background: #e4e9f7;
        margin-bottom: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: box-shadow 0.25s;
      }
      .showcase-img-wrap img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        display: block;
      }
      .showcase-name {
        font-size: 1.15rem;
        font-weight: 700;
        color: #1976d2;
        margin-bottom: 2px;
      }
      .showcase-title-small {
        font-size: 1rem;
        color: #333;
        opacity: 0.85;
        font-weight: 500;
        letter-spacing: 0.2px;
      }

      @media (max-width: 700px) {
        .showcase-title { font-size: 1.5rem; }
        .showcase-card { padding: 22px 10px 12px 10px; min-width: 150px; }
        .showcase-img-wrap { width: 74px; height: 74px; }
        .showcase-team-list { gap: 18px 12px; }
      }
    `}</style>
  );
}