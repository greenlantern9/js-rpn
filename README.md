# Exercise: RPN in JavaScript

## Reverse Polish Notation for Expressions

2 3 + 4 * ==> 2 + 3 * 4
2 3 * 4 + ==> 2 * 3 + 4
2 3 4 * + ==> 2 + (3 * 4)
2 3 + 4 * ==> (2 + 3) * 4
2 3 4 + * ==> 2 * (3 + 4)


##

Write a script that takes an expression in RPN from the command line, calculates it
and prints the result to the console.

```
$ node calculator.js '2 3 + 5 * 1 -'
24
```

## Specs

The `test` directory has Mocha specs for a RPN calculator in JavaScript.

## Command line arguments

See http://justindavis.co/2014/11/24/using-command-line-arguments-in-a-node-script/
