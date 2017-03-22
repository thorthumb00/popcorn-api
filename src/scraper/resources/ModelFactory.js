// Import the neccesary modules.
import AbstractFactory from './AbstractFactory';
import Movie from '../../models/Movie';
import Show from '../../models/Show';
import { AnimeMovie, AnimeShow } from '../../models/Anime';

/**
 * Class for getting a model object.
 * @implements {AbstractFactory}
 */
export default class ModelFactory extends AbstractFactory {

  /**
   * Get a model based on the name type of the model.
   * @override
   * @param {String} modelType - The name type of the model you want to get.
   * @returns {Object|undefined} - A model object.
   */
  getModel(modelType) {
    if (!modelType) return undefined;

    const mt = modelType.toUpperCase();

    switch (mt) {
    case 'ANIMEMOVIE':
      return AnimeMovie;
    case 'ANIMESHOW':
      return AnimeShow;
    case 'MOVIE':
      return Movie;
    case 'SHOW':
      return Show;
    default:
      return undefined;
    }
  }

}
