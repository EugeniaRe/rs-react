export interface IFormData {
  name: string;
  age: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  acceptTerms: boolean;
  picture: File | null;
  country: string;
}

export interface IFormDataStore {
  id: number;
  name: string;
  age: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  acceptTerms: boolean;
  picture: undefined;
  pictureBase64: string;
  country: string;
}

export interface IRHFData {
  acceptTerms?: boolean | undefined;
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  picture: File | null;
  country: string;
}
