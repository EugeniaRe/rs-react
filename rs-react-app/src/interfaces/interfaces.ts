export interface ICountry {
  name: {
    common: string;
    official: string;
    nativeName: {
      eng: {
        official: string;
        common: string;
      };
    };
  };
  region: string;
  population: number;
  flags: {
    png: string;
    svg: string;
  };
}
