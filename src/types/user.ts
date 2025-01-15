export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type AuthData = User & {
  email: string;
  token: string;
}

export type AuthPayload = {
  email: string;
  password: string;
}
