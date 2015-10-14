## Downloads
See the [releases](https://github.com/JaraLowell/OgarServ/releases) section for downloads (Current Version 1.5.6)

## Project Info
![Language](https://img.shields.io/badge/language-Java-yellow.svg)
[![License](https://img.shields.io/badge/license-GPLv3-663399.svg)](https://github.com/JaraLowell/OgarServ/blob/OgarServer/LICENSE)

## [![Language](https://img.shields.io/badge/Ogar-Node-red.svg)](https://github.com/OgarProject/Ogar) Ogar
Copy of Ogar that I heavily modified, and will continue to update. The [OgarProject](https://ogarproject.com) owns Ogar, and I do not claim it as mine! Original Ogar found [here](https://github.com/OgarProject/Ogar)

## [![Language](https://img.shields.io/badge/JXCore-Nodejx-red.svg)](https://github.com/jxcore/jxcore) JXcore
Swiching fomr node to JXcore, JXcore is faster, multitreaths and bether memory managment for long hour running prodjects. Please see [JXcore](https://github.com/jxcore/jxcore) for more info.

## What is Done
* Clean up the code
* Make two version `Ogar` and `Agar`, Agar is agar.io client compatible, while ogar is for those that use an older protocol. eventually i hope we can remove support for older protocols when people with web clients know how to edit there java source. But that later.
* Cleaned up the console response and commands, see list below
* `serverBots = [Number]` is now Bot min Players, if more players are alive in the game and bots get killed they dont return till the live users drops under the Number set in serverBots.
* Added `Master Server` or Tracker, this server announces it is online to the tracker page. You can there then monitor your server and other people can find your server there as well to play on. See [-= Ogar Tracker =-](http://ogar.mivabe.nl/master) for the Tracker page.
* Added auto shutdown server (for auto resets) this by default is set to 24 hours, but can be changed trough `serverResetTime: 24` in your gameserver.ini. Setting it to 0 (zero) disables auto shutdown.

* ![Language](https://img.shields.io/badge/Chat-99-green.svg) This Server supports Chat for both ogar and agar (Package 99)
* ![Language](https://img.shields.io/badge/Info-90-green.svg) This Server supports Server Info for both ogar and agar (Package 90)

## We working on
* MySQL   : Adding MySQL Highscore system 
  - Currently being tested!
* Store and Retrieve Bans from file

## [![Language](https://img.shields.io/badge/language-MySQL-red.svg)](https://www.mysql.com) MySQL High Score!
To have it active, create an ini file inside the folder called mysql.ini and in there write down 
* `host =` mysql server ip:port usualy `localhost`
* `user =` mysql username (make sure you added it and it has write access)
* `password =` mysql user password
* `database =` the database to use example `agario`
* `table =` the score table name (in case you have more then 1 server example: `score`)

For more info see the wiki [Server MySQL High Scores](https://github.com/JaraLowell/OgarServ/wiki/Server-MySQL-High-Scores)

## Console Commands
See the wiki [Console Commands](https://github.com/JaraLowell/OgarServ/wiki/Console-Commands)

## Game Mode's Currently Available
See the wiki [Server Game Mode's](https://github.com/JaraLowell/OgarServ/wiki/Server-Game-Mode's)

## gameserver.ini
See the wiki [Server Config](https://github.com/JaraLowell/OgarServ/wiki/Console-Commands)

## Enjoy!
