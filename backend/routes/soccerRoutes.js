import {
 addNewPlayer,
getPlayers,
getPlayerWithID,
updatePlayer,
deletePlayer
} from '../controllers/playerControllers.js';

const routes = (app) => {
  app.route('/players')
    // GET endpoint
  .get(getPlayers)

    // POST endpoint
    .post(addNewPlayer);

  app.route('/player/:PlayerId')
  // Get specific player
  .get(getPlayerWithID)
  // Update specific player
  .put(updatePlayer)
  // Delete specific player
  .delete(deletePlayer)

}

export default routes;