export function useGetSearchTerm() {
  return localStorage.getItem('searchTerm') || '';
}
