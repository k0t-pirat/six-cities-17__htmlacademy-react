import { toast } from 'react-toastify';
import { AuthPayload } from '../../types/user';

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const EMIAL_WARNING = 'Enter correct email';
const PASSWORD_WARNING = 'Password should contain at least 1 letter and 1 number';

const checkIfNumber = (symbol: string) => !Number.isNaN(Number(symbol));
const checkIfLetter = (symbol: string) => symbol.toLowerCase() !== symbol.toUpperCase();

const checkPassword = (password: string) => {
  let hasNumber = false;
  let hasLetter = false;

  for (const symbol of password) {
    if (hasNumber && hasLetter) {
      break;
    }

    if (checkIfNumber(symbol)) {
      hasNumber = true;
    } else if (checkIfLetter(symbol)) {
      hasLetter = true;
    }
  }

  return hasNumber && hasLetter;
};

const validateAuthPayload = ({email, password}: AuthPayload) => ({
  isPasswordValid: checkPassword(password),
  isEmailValid: Boolean(email.match(EMAIL_REGEXP)),
});

export const dispatchValidLogin = (userPayload: AuthPayload, onValidate: () => void) => {
  const {isEmailValid, isPasswordValid} = validateAuthPayload(userPayload);

  if (!isEmailValid) {
    toast.warn(EMIAL_WARNING);
  } else if (!isPasswordValid) {
    toast.warn(PASSWORD_WARNING);
  } else {
    onValidate();
  }
};
