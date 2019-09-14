1. What do the numbers inside the parentheses after a function name do?
The numbers (arguments) can adjust the size of the function name (instruction). I noticed that:
createCanvas(800, 600); // size of the canvas
radius: random(50, 100) // bubble's size range 
background(255); // color of the canvas, #smaller than 255 will turn to a greyish color
fill(255, 200, 200, 200); // color code when the mouse touch the bubble
fill(255, 220, 200, 200); // original bubble’s color code 
bubble.x += random(-1, 1); // bubble's movement on x exit
bubble.y += random(-1, 1); // bubble's movement on y exit
2. What’s the difference between fill and stroke?
Fill is the color inside the shape that you made and the stroke is the color of the line outside the shape. 
I found out that the color of the bubble is “fill(255, 220, 200, 200)” 
and it is a color code on RGB just like the pinkish color that’s demonstrated in class. 
But I didn’t find which number represents the black stroke around the bubbles. 
I noticed that on P5 there is a reference for the square black stroke looks like 
“strokeWeight(4);stroke(51);rect(20, 20, 60, 60)” which I couldn't find something similar on the demo bubble code.   
3.Find out how you can open the Chrome console(keyboard shortcut).
I have a mac so for me it will be “Cmd+Opt+J” to open the chrome console. 
4.Find a website that has errors,take a screenshot and upload it into your repository.
I opened The New York Times "https://www.nytimes.com/" and I see some yellow triangles that might be errors,
The screenshot is in another file.
