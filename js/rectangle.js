document.getElementById('rectangle-btn').addEventListener('click', function () {

    const rectangleInputFieldWidth = document.getElementById('rectangle-width');
    const rectangleInputValueWidthString = rectangleInputFieldWidth.value;
    const rectangleInputValueWidth = parseFloat(rectangleInputValueWidthString);

    const rectangleInputFieldLength = document.getElementById('rectangle-length');
    const rectangleInputValueLengthString = rectangleInputFieldLength.value;
    const rectangleInputValueLength = parseFloat(rectangleInputValueLengthString);

    if(rectangleInputValueWidth >=0 && rectangleInputValueLength >= 0){
    const rectangleWidthText = document.getElementById('width-text');
    const newRectangleWidthTextString = rectangleWidthText.innerText;
    const newRectangleWidthText = parseFloat(newRectangleWidthTextString);

    rectangleWidthText.innerText = rectangleInputValueWidth;



    

    
    const rectangleLengthText = document.getElementById('length-text');
    const newRectangleLengthTextString = rectangleLengthText.innerText;
    const newRectangleLengthText = parseFloat(newRectangleLengthTextString);

    rectangleLengthText.innerText = rectangleInputValueLength;




    const rectangleAreaField = document.getElementById('rectangle-field');
    const rectangleAreaString = rectangleAreaField.innerText;
    const rectangleArea = parseFloat(rectangleAreaString);

    const totalRectangleArea = rectangleInputValueWidth * rectangleInputValueLength;

    rectangleAreaField.innerText = totalRectangleArea.toFixed(2);
   
    rectangleInputFieldWidth.value ='';
    rectangleInputFieldLength.value ='';

}
    else{
        alert('not valid input');
    }
})