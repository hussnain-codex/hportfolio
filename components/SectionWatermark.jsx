import styles from "./SectionWatermark.module.css";

const POSITION_CLASSES = {
  "bottom-right": "bottomRight",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
};

export default function SectionWatermark({
  letter,
  position = "bottom-right",
  className = "",
}) {
  const positionKey = POSITION_CLASSES[position] || POSITION_CLASSES["bottom-right"];

  const classes = [styles.mark, styles[positionKey], className].filter(Boolean).join(" ");

  return (
    <span className={classes} aria-hidden="true">
      {letter}
    </span>
  );
}
