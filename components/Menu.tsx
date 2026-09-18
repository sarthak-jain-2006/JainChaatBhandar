import { Fragment } from "react";
import { menuColumns } from "@/lib/site";
import { IconLeaf } from "./icons";
import Reveal from "./Reveal";

export default function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="wrap">
        <Reveal className="board">
          <div className="sec-head on-deep">
            <h2>The menu</h2>
            <p className="sub">
              Six plates, done the same way for over fifty years. Every one is
              finished with sweet curd, tamarind chutney and the house-ground
              spice mix, Lucknow-style.
            </p>
          </div>
          <div className="board-cols">
            {menuColumns.map((column, i) => (
              <div key={i}>
                {/* Fragments, not wrappers: the board's rules target
                    .board-cols > div > .m-item directly. */}
                {column.map(({ name, price, description }) => (
                  <Fragment key={name}>
                    <div className="m-item">
                      <span className="m-name">{name}</span>
                      <span className="m-dots" />
                      <span className="m-price">{price}</span>
                    </div>
                    <p className="m-desc">{description}</p>
                  </Fragment>
                ))}
              </div>
            ))}
          </div>
          <div className="board-foot">
            <span className="veg-mark">
              <IconLeaf />
              Pure vegetarian Jain kitchen, made without onion or garlic
            </span>
            <span>Takeaway at the counter. Delivery on Swiggy and Zomato.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
