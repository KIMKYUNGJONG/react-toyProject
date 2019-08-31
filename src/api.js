import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '7d8b79910cf3801e8351f7db53086f28',
    language: 'ko-KR'
  }
});

export const MoviesApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular'),
  movieDetail: (id) => api.get(`movie/${id}`, {
    params: {
      append_to_response: 'videos'
    }
  }),
  searchMovie: (term) => api.get('search/movie', {
    params: {
      query: encodeURIComponent(term)
    }
  })
};

export const TVApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  airingToday: () => api.get('tv/airing_today'),
  showDetail: (id)=> api.get(`tv/${id}`, {
    params: {
      append_to_response: 'videos'
    }
  }),
  searchTV: (term) => api.get('search/tv', {
    params: {
      query: encodeURIComponent(term)
    }
  })
};
