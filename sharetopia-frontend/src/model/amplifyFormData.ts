export type formDataSingUp = {
  username: string;
  password: string;
  attributes: { email: string };
};

export type formDataSingIn = {
  username: string;
  password: string;
};

export type formDataSingUpConfirmation = {
  username: string;
  code: string
};
