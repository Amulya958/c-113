function preload()
{
    img= loadImage(googly.jpg);
}

function setup()
{
    createCanvas(400 , 400);
}

function draw() 
{
    Image(img, 10 , 10 , 150 , 120);

    fill(0 , 128 , 0);
    stroke(0 , 128 , 0);
    circle(350 , 50 , 70);
}