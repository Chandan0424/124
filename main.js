noseX=0;
noseY=0;
leftWristX=0;
difference=0;
rightWristX=0;

function preload(){}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,600);
    video.position(100,100)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is loaded');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX= " + noseX +" noseY= "+ noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("Left Wrist= "+leftWristX+" Right Wrist= "+rightWristX+"Difference= "+difference);

    }
}
function draw(){
    document.getElementById("square").innerHTML="Width and height of a square will be = "+difference+"px";
    fill("#F90093");
    stroke("#F90093");
    square(noseX, noseY, difference);
}