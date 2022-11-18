import "./button.styles.scss";

/*
Different Button styles options:

Default

Inverted

Google sign in
*/

// const BUTTON_TYPE_CLASSES = {
//   google: "google-sign-in",
//   inverted: "inverted",
// };

// const Button = ({ children, buttonType, ...otherProps }) => {
//   return (
//     <button
//       className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
//       {...otherProps}
//     >
//       {children}
//     </button>
//   );
// };

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const { google, inverted } = BUTTON_TYPE_CLASSES;

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`button-container ${buttonType}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
