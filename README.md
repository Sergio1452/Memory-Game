# Pre-work - *Memory Game*

**Memory Energy!** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Sergio Hernandez**

Time spent: **4** hours spent in total

Link to project: https://glitch.com/edit/#!/pastoral-prickly-rib?path=script.js%3A157%3A17

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] A title for the timer, and the timer is displayed in real time.

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://i.imgur.com/zPpFrzk.gif)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
https://stackoverflow.com/questions/4852017/how-to-initialize-an-arrays-length-in-javascript
https://www.w3schools.com/jsref/met_win_setinterval.asp
https://www.w3schools.com/jsref/met_win_clearinterval.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I forgot how to write a for loop when I was trying to make the ticking clock. Actually, the ticking clock was a little difficult for me, also making the random pattern. Since for both of these I needed a for loop, they took me a while to get too. I write for loops in java often but for some reason I was stuck on writing it in javascript. After a long time I noticed I was write all along, I just misplaned a comma with a semicolon. I didn't know how to make random numbers in a range as well. I decided to overcome this obstacle by searching on google for it, and once I saw the answer, it made sense to me. I also didn't know how making an empty array worked in javascript. In java, you can set a certain size to the array, but in javascript, the size doesn't matter. You can just append the elements to an empty array "[]". That's a thing I actually really like about javascript, that arrays can grow, they can't in java. The other thing that was difficult was using the clearInterval() function. I think that it was difficult because I didn't know what the type was that was being returned to me. In java, you need to specify the type of each variable, so in javascript I need to get used to not knowing the type. I overcame that problem by just messing around with the code for a little in the w3schools code editor that the "clearInterval" link took me too. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I would like to know more about the backend. I see all the nice things that you can do in the front end but, what if your website needs to do more? For example, when I was in Calculus, it was really useful to go to this website, https://www.integral-calculator.com/. There, if you scroll down, it explains how the calculator works. I've always wanted to make an application that helps the user with math in any way, and this mentions that use of back end math going on. This is something that I am interested in, why does your data need to go to the backend, why can't it just all happen in the front end? Another question that I have is something that my father brought up to me when I was trying to apply to this job. What is going to be my job if I get it? Will I be on the front end? Back end? If so, is there even a lot of work to do on it? I never understand why there are so many workers for a website, what else is there for workers to be doing on the daily, for 8 hours?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

Add a functionallity where, when the user gets through a "level" or a "pattern"
the background changes colors, as if you are progressing through different levels in a game.
Add a progress bar, that shows your time left not in numbers, but in a loading bar that smoothly goes down to zero.
Add a wallpaper. Add a better font that makes the text look better. Allow the user to input the length of the game that they
would like the play the game for, also allow the user to type how long they want there own timer to be for.
Have the losing/winning screen instead of an alert, and have a start screen instead of a start button.




## License

    Copyright Sergio Hernandez

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.