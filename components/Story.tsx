import { eras, storyPhoto } from "@/lib/site";
import { PhotoFigure } from "./Lightbox";
import Reveal from "./Reveal";

export default function Story() {
  return (
    <section className="story" id="story">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2>From a pavement stall at the crossroads</h2>
        </Reveal>
        <div className="story-cols">
          <div className="story-text">
            <p>
              In 1968, <b>Santosh Kumar Jain</b> came to Lucknow from Tikait
              Nagar, a small town in Barabanki district, and set up a chaat stall
              on the pavement near the Lalbagh crossroads. There was no shop and
              no signboard: just a stall, a tawa, and a spot between Novelty
              Cinema and the GPO where the whole city seemed to pass by every
              evening.
            </p>
            <p>
              The stall earned its place the slow way. Regulars came back for the
              tikki, brought their children, and eventually their children&apos;s
              children. In time the pavement stall became a proper unit, a small
              standing-room counter that still works the way the stall did: you
              order, you watch your plate being made, and you eat it right there
              or carry it home.
            </p>
            <p>
              Today the shop is run by Santosh Kumar Jain&apos;s sons,{" "}
              <b>Sanjeev Kumar Jain and Rajeev Kumar Jain</b>. Sanjeev still prepares the
              house seasoning himself. The sweet curd, the tamarind chutney and
              the dry spice mix that finish every plate are made to the same
              hand, every day, before the counter opens.
            </p>
          </div>
          <div className="story-aside">
            <PhotoFigure
              photo={storyPhoto}
              className="story-photo"
              sizes="(max-width: 900px) calc(100vw - 48px), 473px"
            />
            <div className="jain-note">
              <h3>No onion. No garlic.</h3>
              <p>
                As a Jain-run kitchen, everything here is made without two things
                most people assume chaat can&apos;t do without. It never held the
                flavour back. The seasoning does the work instead, and after five
                decades the queue outside settles the argument.
              </p>
            </div>
          </div>
        </div>
        <div className="story-line">
          {eras.map(({ title, detail }) => (
            <div className="era" key={title}>
              <b>{title}</b>
              <span>{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
