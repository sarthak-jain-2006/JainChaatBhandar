import { links, shop } from "@/lib/site";
import { IconClock, IconPhone, IconPin, IconWhatsApp } from "./icons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2>Finding the counter</h2>
        </Reveal>
        <div className="c-cols">
          <div>
            <div className="c-block">
              <IconPin />
              <div>
                <h3>Address</h3>
                <p>
                  Naval Kishore Road, opposite Novelty Cinema,
                  <br />
                  Lalbagh, Lucknow 226001. A short walk from Hazratganj and the
                  GPO.
                </p>
              </div>
            </div>
            <div className="c-block">
              <IconClock />
              <div>
                <h3>Hours</h3>
                <p>
                  <b>Open daily, 4:00 PM to 10:00 PM.</b> Evening service only;
                  come early to beat the peak crowd.
                </p>
              </div>
            </div>
            <div className="c-block">
              <IconPhone />
              <div>
                <h3>Phone &amp; WhatsApp</h3>
                <p>
                  <a href={shop.phoneHref}>{shop.phoneDisplay}</a>. Takeaway
                  counter; delivery on Swiggy and Zomato. No parking nearby, so
                  arrive on foot from the Hazratganj side.
                </p>
              </div>
            </div>
            <div className="c-actions">
              <a
                className="btn btn-brass"
                href={links.whatsapp}
                target="_blank"
                rel="noopener"
              >
                <IconWhatsApp />
                Chat on WhatsApp
              </a>
              <a className="btn btn-line" href={shop.phoneHref}>
                <IconPhone />
                Call the counter
              </a>
            </div>
          </div>
          <div>
            <div className="map-frame">
              <iframe
                title="Map: Jain Chaat Bhandar, Lalbagh, Lucknow"
                src={links.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="map-under">
              If the map doesn&apos;t load,{" "}
              <a href={links.directions} target="_blank" rel="noopener">
                open directions in Google Maps
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
