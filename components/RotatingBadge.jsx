import styles from "./RotatingBadge.module.css";

/**
 * RotatingBadge — a small stamp/seal-style circular badge with text that
 * curves around the rim and rotates slowly, paired with a fixed accent dot
 * at the center. Pure CSS/SVG, no client JS required.
 *
 * Positioning is left entirely to the caller via `className`.
 */
export default function RotatingBadge({
  text = "FULL STACK DEVELOPER • AVAILABLE FOR WORK • ",
  size = 130,
  className = "",
}) {
  const repeatedText = text.repeat(2);

  return (
    <div
      className={[styles.wrapper, className].filter(Boolean).join(" ")}
      style={{ "--badge-size": `${size}px` }}
    >
      <svg className={styles.svg} viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <path id="badgeCirclePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text className={styles.circleText}>
          <textPath href="#badgeCirclePath" startOffset="0%">
            {repeatedText}
          </textPath>
        </text>
      </svg>
      <span className={styles.center} />
    </div>
  );
}
