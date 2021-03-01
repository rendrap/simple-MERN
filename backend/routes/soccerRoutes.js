import { addNewPlayer,getPlayers } from '../controllers/playerControllers.js';

const routes = (app) => {
  app.route('/players')
    // GET endpoint
  .get(getPlayers)

    // POST endpoint
    .post(addNewPlayer);
}

export default routes;