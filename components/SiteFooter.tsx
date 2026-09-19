import { links, navLinks, shop } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-foot">
      <div className="wrap">
        <div>
          <p className="fm">
            Jain Chaat Bhandar<span>Established 1968, Lalbagh, Lucknow</span>
          </p>
          <p>
            A pure-vegetarian Jain chaat counter in Lalbagh, Lucknow. Three
            generations, one corner, and the same seasoning made fresh every
            evening.
          </p>
        </div>
        <div>
          <h3>Sections</h3>
          <ul>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Visit</h3>
          <ul>
            <li>Naval Kishore Road, opposite Novelty Cinema</li>
            <li>Lalbagh, Lucknow 226001</li>
            <li>Open daily, 4–10 PM</li>
            <li>
              <a href={shop.phoneHref}>{shop.phoneDisplay}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="foot-base">
        <div className="wrap">
          <span>© 2026 Jain Chaat Bhandar, Lucknow. All rights reserved.</span>
          <span>
  Takeaway, self-service and delivery via{" "}
  <a href={links.swiggy} target="_blank" rel="noopener">
    Swiggy
  </a>{" "}
  &amp;{" "}
  <a href={links.zomato} target="_blank" rel="noopener">
    Zomato
  </a>
</span>
        </div>
      </div>
    </footer>
  );
}
