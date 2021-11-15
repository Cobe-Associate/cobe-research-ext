# Cobe Research Ext.

## Running Locally

```sh
$ npm install
$ npm start
$ Ctrl + C
$ killall -9 node
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku login
$ heroku git:remote -a cobe-research-ext
$ git pull heroku master
$ git add .
$ git commit -am "make it better"
$ git push heroku {作業ブランチ名}:master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)