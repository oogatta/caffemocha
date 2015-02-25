# caffemocha

Just a shorthand of ```mocha --compilers coffee:coffee-script/register```.

## Install

```
$ npm install caffemocha
$ (do some PATH fiddling. My preference is direnv.)
$ cat .envrc
export PATH=$(npm bin):$PATH
```

## Run

```
$ caffemocha
$ caffemocha test/unit/my.coffe
$ caffemocha test/**/*.coffee
```
