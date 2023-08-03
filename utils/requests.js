const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchAction: {
        title: 'Action',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    fetchTrending4: {
        title: 'Comedy',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    fetchTrending5: {
        title: 'Horror',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    fetchTrending6: {
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
    fetchTrending7: {
        title: 'Mystery',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    },
    fetchTrending8: {
        title: 'Western',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    },

    fetchTrending9: {
        title: 'Animation',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    },
    fetchTrending10: {
        title: 'TV Movies',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    },

}



