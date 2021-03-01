import { addNewPlayer } from '../controllers/playerControllers.js';

const routes = (app) => {
  app.route('/players')
    // POST endpoint
    .post(addNewPlayer);
}

export default routes;