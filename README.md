# Zachey personal website

> This is a simple personal website on express with spotify widgets and more chips!

## Installing

### Dependencies installation.

```shell
npm i
```

### Create and edit `.env` file.

Create spotify app, put example.com/callback in the redirect uri.
You have to get your code, do a request to

```url
https://accounts.spotify.com/authorize?client_id=<client_id>&response_type=code&redirect_uri=<redirect_uri>&scope=user-read-private%20user-read-currently-playing
```

and copy the code in the url. You have to get your refresh token now. Type

```shell
npm run get-refresh-token <code>
```

in the terminal and copy the refresh token in the .env file. And delete `getCode.js`.

## Preview:

<img width="50%" height="50%" src="https://media.discordapp.net/attachments/1110890217478557726/1110890437998288896/2023-05-24_14.20.07.png" alt="main page"><img width="50%" height="50%" src="https://media.discordapp.net/attachments/1110890217478557726/1110890438338019379/2023-05-24_14.19.45.png" alt="main page">

<center><img width="50%" height="50%" src="https://media.discordapp.net/attachments/1110890217478557726/1110890438711332864/2023-05-24_14.19.40.png" alt="main page"></center>

## Authors:

1. [Zachey](https://github.com/zachey01/)
2. [Sybrax](https://github.com/Sybrax/)
