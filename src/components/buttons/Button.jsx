export const Button = ({ className, title, element }) => {
  return (
    <button
      className={`default-button ${className}`}
      type="button"
    >
      {title} {element}
    </button>
  );
};