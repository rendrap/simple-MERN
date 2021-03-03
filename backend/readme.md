mongod --version

sudo service mongodb status for checking the status of your database.
sudo service mongodb start to start running your database.
sudo service mongodb stop to stop running your database.

mongo --eval 'db.runCommand({ connectionStatus: 1 })'

https://dev.to/seanwelshbrown/installing-mongodb-on-windows-subsystem-for-linux-wsl-2-19m9

cd /
sudo mkdir -p data/db
sudo chown -R `id -un` data/db

npm i -D babel-cli babel-preset-env babel-preset-stage-0
npm i body-parser express mongoose nodemon

nodemon ./index.js --exec babel-node -e js