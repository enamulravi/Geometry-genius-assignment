document.getElementById('triangle-btn').addEventListener('click', function () {
 
    
    const triangleInputFieldBase = document.getElementById('triangle-base');
    const triangleInputValueBaseString = triangleInputFieldBase.value;
    const triangleInputValueBase = parseFloat(triangleInputValueBaseString);

    const triangleInputFieldHeight = document.getElementById('triangle-height');
    const triangleInputValueHeightString = triangleInputFieldHeight.value;
    const triangleInputValueHeight = parseFloat(triangleInputValueHeightString);
 
    if(triangleInputValueBase>= 0 && triangleInputValueHeight>=0){
    const triangleBaseText = document.getElementById('base-text');
    const newTriangleBaseTextString = triangleBaseText.innerText;
    const newTriangleBaseText = parseFloat(newTriangleBaseTextString);

    triangleBaseText.innerText = triangleInputValueBase;

    

    const triangleHeightText = document.getElementById('height-text');
    const newTriangleHeightTextString = triangleHeightText.innerText;
    const newTriangleHeightText = parseFloat(newTriangleHeightTextString);

    triangleHeightText.innerText = triangleInputValueHeight;

    const triangleAreaField = document.getElementById('triangle-field');
    const triangleAreaString = triangleAreaField.innerText;
    const triangleArea = parseFloat(triangleAreaString);

    const totalTriangleArea = 0.5 * triangleInputValueBase * triangleInputValueHeight;

    triangleAreaField.innerText =  totalTriangleArea.toFixed(2);
    
    triangleInputFieldBase.value = '';
    triangleInputFieldHeight.value = '';
}
else{
    alert('input not valid');
}
})

