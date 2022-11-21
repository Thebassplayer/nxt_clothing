export const passwordValidator = (password, confirmPassword) => {
  return confirmPassword === password;
};

// --- Get fieldname by Id ---
export function getFieldName(input) {
  return input.id.charAt(0).toUpperCase().concat(input.id.slice(1));
}

// --- Username validation ---
export function checkUsernameLength(input, min, max) {
  if (input.value.length <= min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length >= max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// --- Email validation ---
export function checkEmail(input) {
  const emailRegExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  if (!emailRegExp.test(String(input.value).trim().toLocaleLowerCase())) {
    showError(input, "Email is not valid");
  } else {
    showSuccess(input);
  }
}

// --- Password validation ---

const passwordValidatorRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Check valid password
export function checkPassword(input, min) {
  if (!passwordValidatorRegExp.test(input.value)) {
    showError(
      input,
      `${getFieldName(
        input
      )} must be at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character (@$!%*?&)`
    );
  } else {
    showSuccess(input);
  }
}

// Check Password Confirmation
export function checkConfirmationPass(input) {
  if (input.value.trim() === "") {
    showError(input, "Password confirmation is required");
  } else {
    showSuccess(input);
  }
}

// Check passwords match
export function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

// --- Screen Alerts ---

// Show success - green input outline
export function showSuccess(input) {
  const formControl = input.closest(".form-control");
  formControl.className = "form-control success";
}

// Show error-red input outline + error message
export function showError(input, message) {
  const formControl = input.closest(".form-control");
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// --- Toggle Visibility password button ---
export function toggleBtnIcon(btn, iconOne, iconTwo) {
  let iconClassName = btn.className;
  iconClassName === iconOne
    ? (btn.className = iconTwo)
    : (btn.className = iconOne);
}

// Change visibility on password field functionality
export function toggleInputVisibility(element) {
  element.type === "password"
    ? (element.type = "text")
    : (element.type = "password");
}
