import { combineReducers } from 'redux';

import * as types from '../actions/actionTypes.js';

const initialState = {
  selectedComponent: 'main',
  selectedProject: 0,
  projects: [
    {
      title: 'woven-js',
      link: 'https://github.com/CSdare/woven-js',
      description: 'dev library that moves intensive functions off the main thread',
      image: 'https://s3.us-east-2.amazonaws.com/elarsen-personal-site/woven-js.png',
    },
    {
      title: 'woven-loader',
      link: 'https://github.com/CSdare/woven-loader',
      description: 'webpack loader that transforms plain js files into web workers',
      image: 'https://s3.us-east-2.amazonaws.com/elarsen-personal-site/woven-loader.png',
    },
    {
      title: 'minesweeper',
      link: 'https://github.com/erikwlarsen/minesweeper',
      description: 'text-based minesweeper game that runs in node',
      image: 'https://s3.us-east-2.amazonaws.com/elarsen-personal-site/minesweeper.png',
    },
    {
      title: 'github-vision',
      link: 'https://github.com/Team-Peja/github-vision',
      description: 'visualizer for github commits',
      image: 'https://cdn.pixabay.com/photo/2016/08/19/06/53/coming-soon-1604663_960_720.png'
    },
    {
      title: 'personal-site',
      link: 'https://github.com/erikwlarsen/personal-site',
      description: 'source code for this site',
      image: 'https://cdn.pixabay.com/photo/2016/08/19/06/53/coming-soon-1604663_960_720.png'
    },
  ],
  helloWorlds: [
    `>+++++++++[<++++++++>-]<.>+++++++[<++++>-]<+.+++++++..+++. [-]>++++++++[<++++>-]<.>+++++++++++[<+++++>-]<. >++++++++[<+++>-]<.+++.------.--------.[-]>++++++++[<++++>-]<+. [-]++++++++++.
>+++++++++[<++++++++>-]<.>+++++++[<++++>-]<+.+++++++..+++. [-]>++++++++[<++++>-]<.#>+++++++++++[<+++++>-]<. >++++++++[<+++>-]<.+++.------.--------.[-]>++++++++[<++++>-]<+. [-]++++++++++.`, // Brainfuck
    `#include <stdio.h>
#include <stdlib.h>

int main(void)
{
 printf("Hello, world\\n");
 return EXIT_SUCCESS;
}`, // C
    `#include <iostream>

int main()
{
  std::cout << "Hello, World.";
  return 0;
}`, // C++
    `MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO Moo MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO Moo MoO MoO MoO MoO MoO MoO MoO Moo Moo MoO MoO MoO Moo OOO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO Moo MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO Moo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo Moo MOo MOo MOo MOo MOo MOo MOo MOo Moo MoO MoO MoO Moo MOo MOo MOo MOo MOo MOo Moo MOo MOo MOo MOo MOo MOo MOo MOo Moo OOO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO Moo`, // COW
    `IDENTIFICATION DIVISION.
PROGRAM-ID. Hello.
ENVIRONMENT DIVISION.
DATA DIVISION.
PROCEDURE DIVISION.
    Display 'Hello, World'.
    STOP RUN.`, // COBOL
    `PROGRAM HELLOWORLD
10 FORMAT (1X,11HHELLO WORLD)
WRITE(6,10) 
END`, // FORTRAN
    `class Greeting {
  void greet(Named target) {
    System.out.println("Hello, " + target.getName() + "!");
  }
}

interface Named {
  String getName();
}

class World implements Named {
  String getName() {
    return "World";
  }
}

class Main {
  public static void main( String[] args ) {
    Greeting greeting = new Greeting();
    greeting.greet(new World());
  }
}`, // Java
    `const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\\n');
});

server.listen(port, hostname, () => {
  console.log(\`Server running at http://\${hostname}:\${port}/\`);
});`, // Node
    `HAI
CAN HAS STDIO?
VISIBLE "HAI WORLD!"
KTHXBYE`, // LolCode
    `print_endline "Hello, World!";;`, // OCaml
    `#!/bin/sh
echo "Hello World"`, // Shell script
    `console.log('Hello, world!');`, // JS
    `SELECT 'Hello World!'`, // SQL
    `\`r\`\`\`\`\`\`\`\`\`\`\`.H.e.l.l.o. .w.o.r.l.di`, // Unlambda
    `110011100111000001111100000001000011111000011111100000000010000011001111100001100010000010011111000100000000000001001111100000111110001000000000000000001000111110010000001100001111100011000000000100111110011100111000111000001000111000001111100000111110010000011111000110011111100001111000001111000001110011111100001111000110011100000111000100011111000001111100100000110000000111000001110001111100011111000111000001000001000011000111110001000001000000011100000111001000111110001111000001111000011111100001111110000011110000000000000000011110000011100111000011110011111000111110001111100000100000000000000000000000111110001110000001110000011100011100111110001000100000000011100001111100110000000010011111000111100000111100111100010011100000111110000011111001100111100010001111000000000001000111110010000010011110011001110001000111110001100000100011111000011110011100111111000111100000111100011111000000011110000011100100001111000100011111001100011111000111100000111001110001100111100100000000000000011111000001111100010010000011100001111100100000100011100000111000110011110001001111110001100000111100011111000111100000111001000011110001001111100000111110000000011110000011110000000000000000111000001110000011000001100000111000111000001100111110000111111001001110000011111000001100011000001001111110000011100110011111000000000111000001110000111100001100`, // Whirl
    `(defun hello-world ()
(interactive)
(with-current-buffer (pop-to-buffer "*Hello!*")
  (insert "Hello World\\n")))`, // Emacs Lisp
    ` dosseg
 .model small
 .stack 100h

 .data
 hello_message db 'Hello, World!',0dh,0ah,'$'

 .code
 main  proc
mov ax,@data
mov ds,ax

mov ah,9
mov dx,offset hello_message
int 21h

mov ax,4C00h
int 21h
 main  endp
 end main`, // Assembly
    `class Hello {
    static void Main() {
        System.Console.Write("Hello World");
    }
}`, // C#
    `import std.c.stdio;

int main(char[][] args)
{
    printf("Hello, World!\\n");
    return 0
}`, // D
    `class HELLO
creation make
feature make is
do
print ("Hello, World%N")
end
end -- class HELLO`, // Eiffel
`-module(hello).
-export([hello_world/0]).

hello_world() -> io:fwrite("hello, world\\n").`, // Erlang
    `##X#`, // Etc
    `package main

import "fmt"

func main() {
 fmt.Printf("Hello, World\\n")
}`, // Go
    `main = do putStrLn "Hello, world."`, // Haskell
    `h`, // HQ9+
    `trace('hello world');`, // ActionScript
    `begin 
    file rmt (kind = remote); 
    write(rmt, <"Hello World!">); 
end. `, // Algol-60
    `PROC main()
    PrintF('Hello world\\n')
ENDPROC`, // AmigaE
  ],
  selectedHello: 7,
};

const copyState = (state) => {
  const { projects, helloWorlds } = state;
  const projectsCopy = projects.map((project) => ({ ...project }));
  const helloWorldsCopy = helloWorlds.slice();
  return ({ ...state, projects: projectsCopy, helloWords: helloWorldsCopy });
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_COMPONENT:
      const selectedComponent = action.payload;
      return ({ ...copyState(state), selectedComponent });
    case types.SELECT_PROJECT:
      const selectedProject = action.payload;
      return ({ ...copyState(state), selectedProject });
    case types.RANDOM_HELLO:
      let selectedHello = Math.floor(Math.random() * state.helloWorlds.length);
      while (selectedHello === state.selectedHello) {
        selectedHello = Math.floor(Math.random() * state.helloWorlds.length);
      }
      return ({ ...copyState(state), selectedHello });
    default:
      return state;
  }
}

const reducers = combineReducers({
  main: mainReducer,
});

export default reducers;
