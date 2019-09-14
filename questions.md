1. What do the numbers inside the parentheses after a function name do?
The numbers (arguments) can adjust the size of the function name (instruction). I noticed that:

createCanvas(800, 600); // size of the canvas: 800x600.

radius: random(50, 100); // bubble's size range: from radius 50~100.

background(255); // Gray scale color of the canvas, #smaller than 255 will turn to a greyish color.

fill(255, 200, 200, 200); // RGBA color code when the mouse touch the bubble, A = alpha=transparency.

fill(255, 220, 200, 200); // original bubble’s RGBA color code. 

bubble.x += random(-1, 1); // bubble's movement on the x-exit: from -1 to 1.

bubble.y += random(-1, 1); // bubble's movement on the y-exit: from -1 to 1. 

2. What’s the difference between fill and stroke?
Fill is the color inside the shape that you made and the stroke is the color of the line outside the shape. 
I found out that the color of the bubble is “fill(255, 220, 200, 200)” 
and it is a color code on RGBA just like the pinkish color that’s demonstrated in class. 
But I didn’t find which number represents the black stroke around the bubbles. 
I also noticed that on P5 there is a reference for the square black stroke looks like 
“strokeWeight(4);stroke(51);rect(20, 20, 60, 60)” which I couldn't find something similar on the demo bubble code.
It might just be like in video 1.4 said: "the default setting of the stroke is black".

3. Find out how you can open the Chrome console(keyboard shortcut).
I have a mac so for me it will be “Cmd+Opt+J” to open the chrome console. 

4. Find a website that has errors,take a screenshot and upload it into your repository.
I opened a RGB color code website: https://www.rapidtables.com/web/color/purple-color.html, and the chrome console showed some red lines that might be errors.
The screenshot is in another file.
