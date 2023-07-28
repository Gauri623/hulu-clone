const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?week?api_key=${API_KEY}&language=en-US`,
    },
    fetchAction: {
        title: 'Action',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTrending4: {
        title: 'Comedy',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTrending5: {
        title: 'Horror',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTrending6: {
        title: 'Romance',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTrending7: {
        title: 'Mystery',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTrending8: {
        title: 'Western',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },

    fetchTrending9: {
        title: 'Animation',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTrending10: {
        title: 'TV Movies',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },

}



