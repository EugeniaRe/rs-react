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
