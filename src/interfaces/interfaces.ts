export interface IResultItem {
  url: string;
  name: string;
  climate?: string;
  diameter?: string;
}

export interface IThemeContext {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface IResultData {
  results: IResultItem[];
  count: number;
  next: string | null;
  previous: string | null;
}

export interface ICard {
  result: IResultItem;
}
