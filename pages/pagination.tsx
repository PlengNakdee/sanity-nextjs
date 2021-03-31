import useSWR, { useSWRInfinite } from 'swr';

const fetcher = (url: any) => fetch(url).then(res => res.json())

// export const useGetHello = () => useSWR('/api/hello', fetcher);

export const getBlogs = (url: any) => {
  return fetcher(url)
};

export const useGetBlogs = ({ offset, filter }: any, initialData: any) => {

  return useSWR(`
    /api/blogs?offset=${offset || 0}&date=${filter.date.asc ? 'asc' : 'desc'}`,
    fetcher,
    { initialData })
}

export const useGetBlogsPages = ({ filter }: any) => {
  const result = useSWRInfinite(
    (index, previousPageData) => {
      if (index === 0) {
        return `/api/blogs?date=${filter.date.asc ? 'asc' : 'desc'}`
      }

      if (!previousPageData.length) {
        return null
      }

      return `/api/blogs?offset=${index * 6}&date=${filter.date.asc ? 'asc' : 'desc'}`
    },
    getBlogs,
  )

  let hitEnd = false;
  const { data } = result;

  if (data) {
    hitEnd = data[data.length - 1].length === 0
  }

  return { ...result, hitEnd }
}