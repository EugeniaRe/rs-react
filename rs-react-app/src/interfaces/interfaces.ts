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
  //   tld: ['.gs'];
  //   cca2: 'GS';
  //   ccn3: '239';
  //   cca3: 'SGS';
  //   independent: false;
  //   status: 'officially-assigned';
  //   unMember: false;
  //   currencies: {
  //     SHP: {
  //       name: 'Saint Helena pound';
  //       symbol: '£';
  //     };
  //   };
  //   idd: {
  //     root: '+5';
  //     suffixes: ['00'];
  //   };
  //   capital: ['King Edward Point'];
  //   altSpellings: ['GS', 'South Georgia and the South Sandwich Islands'];
  region: string;
  //   languages: {
  //     eng: 'English';
  //   };

  //   latlng: [-54.5, -37.0];
  //   landlocked: false;
  //   area: 3903.0;
  //   demonyms: {
  //     eng: {
  //       f: 'South Georgian South Sandwich Islander';
  //       m: 'South Georgian South Sandwich Islander';
  //     };
  //   };
  //   flag: '🇬🇸';
  //   maps: {
  //     googleMaps: 'https://goo.gl/maps/mJzdaBwKBbm2B81q9';
  //     openStreetMaps: 'https://www.openstreetmap.org/relation/1983629';
  //   };
  population: number;
  //   car: {
  //     signs: [''];
  //     side: 'right';
  //   };
  //   timezones: ['UTC-02:00'];
  //   continents: ['Antarctica'];
  flags: {
    png: string;
    svg: string;
  };
  //   coatOfArms: {};
  //   startOfWeek: 'monday';
  //   capitalInfo: {
  //     latlng: [-54.28, -36.5];
  //   };
}
