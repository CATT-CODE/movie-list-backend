const Movie = require("../model/Movie.js");

module.exports = {
    createMovie: async (req, res) => {

        try {
            let newMovie = new Movie({
                movie: req.body.movie,
            });
            let savedMovieItem = await newMovie.save();

            res.json({
                data: savedMovieItem,
            });
        } catch (e) {
            
        }
    },
    getAllMovie: async (req, res) => {

        try {
            let allMovie = await Movie.find({});

            res.json({
                data: allMovie,
            })
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    }
}