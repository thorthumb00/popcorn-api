// Import the neccesary modules.
import mongoose from "mongoose";

// The show schema used by mongoose.
const ShowSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  imdb_id: String,
  tvdb_id: String,
  tmdb_id: String,
  title: String,
  year: String,
  slug: String,
  synopsis: String,
  runtime: String,
  rating: {
    percentage: Number,
    watching: Number,
    votes: Number,
    loved: Number,
    hated: Number
  },
  country: String,
  network: String,
  air_day: String,
  air_time: String,
  status: String,
  num_seasons: Number,
  last_updated: Number,
  latest_episode: {
    type: Number,
    default: 0
  },
  images: {
    banner: String,
    fanart: String,
    poster: String
  },
  genres: [],
  episodes: []
});

ShowSchema.index({ title: "text", synopsis: "text", _id: 1 });

// Create the show model.
const Show = mongoose.model("Show", ShowSchema);

/**
 * A model object for shows.
 * @type {Show}
 */
export default Show;
