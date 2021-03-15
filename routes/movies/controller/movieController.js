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
    },
    deleteById: async (req, res) => {

        try {
            let deletedMovie = await Movie.findByIdAndDelete({
                _id: req.params.id,
            });

            res.json({
                data: deletedMovie,
            })
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    },
    editById: async (req, res) => {

        try {
            let editedMovie = await Movie.findByIdAndUpdate(
                {_id: req.body.id},
                req.body,
                {new: true}
            );

            res.json({
                data: editedMovie,
            })
        } catch (e) {
            res.status(500).json({error: e.message})
        }
    },
};