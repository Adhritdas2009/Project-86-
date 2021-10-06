canvas= new fabric.Canvas("myCanvas");

function ps(){
    document.getElementById("song").play();
}

function new_image(){
    fabric.new_image.fromURL("birthday.png", function(Img){
        block_object= Img;
        block_object=scaleToWidth(700);
        block_object=scaleToHeight(510);
        block_object.set({
            top:0,
            left:0
        })
        canvas.add(block_object)
    })
}