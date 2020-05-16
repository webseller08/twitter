# Twitter clone

**instructions for setting up :**

- clone the project
- cd to project directory
- install npm if havent installed yet
- install mysql if havent installed
- run this command to set up database `npm run setDB`
- if this fails on windows : run sql script manually
- create **.env** file
- copy everything from _env_sample_ and insert in **.env** file
- initialize every environment variable in env file with your own db credentials
- run `npm install`
- only for development : install _nodemon_ if you havent installed by `sudo npm install -g nodemon`
- for development : run `npm run dev`
- for testing : run `npm run start`
- if you see handshake error : **Client does not support authentication protocol requested by server; consider upgrading MySQL client** this maybe because of mysql version if so
- run `mysql -u root -p`
- run `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your password'`
- switch to development branch **Dont Commit on master branch**
