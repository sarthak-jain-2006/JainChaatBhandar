import { heroPhoto, links } from "@/lib/site";
import { IconBag, IconClock, IconLeaf, IconPin, IconStar, IconWhatsApp } from "./icons";
import { PhotoFigure } from "./Lightbox";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="wrap">
        <div>
          <Reveal as="h1">Jain Chaat Bhandar</Reveal>
          <Reveal as="p" className="est-line">
            Established 1968, Lalbagh, Lucknow
          </Reveal>
          <Reveal as="p" className="hero-lede">
            A small counter opposite Novelty Cinema that has fed three
            generations of Lucknow its evening chaat. Everything here comes from
            a{" "}
            <strong>
              pure-vegetarian Jain kitchen, made without onion or garlic
            </strong>
            , and the flavour has never needed them.
          </Reveal>
          <Reveal className="hero-actions">
            <a
              className="btn btn-solid"
              href={links.zomato}
              target="_blank"
              rel="noopener"
            >
              <IconBag />
              Order on Zomato
            </a>
            <a
              className="btn btn-line"
              href={links.swiggy}
              target="_blank"
              rel="noopener"
            >
              <IconBag />
              Order on Swiggy
            </a>
            <a
              className="btn btn-line"
              href={links.whatsapp}
              target="_blank"
              rel="noopener"
            >
              <IconWhatsApp />
              WhatsApp
            </a>
          </Reveal>
        </div>
        <PhotoFigure
          photo={heroPhoto}
          className="hero-photo"
          sizes="(max-width: 980px) calc(100vw - 48px), 385px"
          reveal
          eager
        />
      </div>
      <div className="wrap">
        <div className="hero-facts">
          <div className="fact">
            <IconClock />
            <div>
              <b>Open daily, 4–10 PM</b>
              <span>Evening service, as chaat should be</span>
            </div>
          </div>
          <div className="fact">
            <IconPin />
            <div>
              <b>Opposite Novelty Cinema</b>
              <span>Lalbagh, a short walk from Hazratganj</span>
            </div>
          </div>
          <div className="fact veg">
            <IconLeaf />
            <div>
              <b>Pure vegetarian</b>
              <span>Jain kitchen, no onion or garlic</span>
            </div>
          </div>
          <div className="fact">
            <IconStar />
            <div>
              <b>4.4 on Google</b>
              <span>1,800+ reviews across platforms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
