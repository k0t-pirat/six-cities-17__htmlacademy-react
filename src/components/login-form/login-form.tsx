import { FormEvent, useState } from 'react';
import { AuthPayload } from '../../types/user';
import { useAppDispatch } from '../../hooks';
import { login } from '../../store/api-actions';
import { dispatchValidLogin } from './util';

export default function LoginForm() {
  const [userPayload, setUserPayload] = useState({} as AuthPayload);
  const dispatch = useAppDispatch();

  const onFormInput = (evt: FormEvent<HTMLInputElement>) => {
    setUserPayload({
      ...userPayload,
      [evt.currentTarget.name]: evt.currentTarget.value,
    });
  };

  return (
    <form
      className="login__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
        dispatchValidLogin(userPayload, () => {
          dispatch(login(userPayload));
        });
      }}
    >
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          required
          onInput={onFormInput}
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          required
          onInput={onFormInput}
        />
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
}
