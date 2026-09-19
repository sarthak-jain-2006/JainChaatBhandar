import { links, ratings } from "@/lib/site";
import { IconStar } from "./icons";
import Reveal from "./Reveal";

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2>What Lucknow says</h2>
        </Reveal>
        <div className="r-grid">
          {ratings.map(({ score, source, detail }) => (
            <div className="r-tile" key={source}>
              <span className="score">
                {score}
                <IconStar filled />
              </span>
              <b>{source}</b>
              <span>{detail}</span>
            </div>
          ))}
        </div>
        <div className="r-themes">
          <div>
            <h3>What people praise</h3>
            <p>
              The same three things, across platforms and years: the flavour and
              freshness of the plates, the balance of the house seasoning, and
              the quick, friendly service at the counter. Many reviewers call it
              the best chaat shop in Lucknow outright.
            </p>
          </div>
          <div>
            <h3>What to know before you come</h3>
            <p>
              The honest note in the reviews: there&apos;s no seating, and the
              counter gets crowded at peak evening hours. It&apos;s a
              standing-room shop and always has been. Come as you are, eat where
              you stand, or take it home.
            </p>
          </div>
        </div>
        <p className="r-src">
          Ratings as listed publicly on Google, Justdial and Restaurant Guru at
          the time of writing. Also on{" "}
          <a href={links.zomato} target="_blank" rel="noopener">
            Zomato
          </a>{" "}
          and {" "}
          <a href={links.swiggy} target="_blank" rel="noopener">
          Swiggy
          </a>{" "}
          for delivery.
        </p>
      </div>
    </section>
  );
}
