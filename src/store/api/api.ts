import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../constants';
import { IResultItem } from '../../interfaces/interfaces';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),

  endpoints: (builder) => ({
    getPlanets: builder.query<
      { count: number; results: IResultItem[] },
      {
        searchTerm: string;
        page?: number;
      }
    >({
      query: ({ searchTerm, page = 1 }) => `?search=${searchTerm}&page=${page}`,
    }),

    getPlanet: builder.query<IResultItem, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetPlanetsQuery, useGetPlanetQuery } = api;
