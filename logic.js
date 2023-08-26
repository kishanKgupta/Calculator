var num1=0, num2=0, num=0;
document.querySelector('.first').value = 0;
document.querySelector('.second').value = 0;
document.querySelector('.add').addEventListener('click', function () {
    
    num1 = document.querySelector('.first').value;
    num2 = document.querySelector('.second').value;
    num = Number(num1) + Number(num2);
    document.querySelector('.result').textContent = num;

    document.querySelector('.value').style.textShadow = "4px 4px 10px white";
    

});

document.querySelector('.subtract').addEventListener('click', function () {
    
    num1 = document.querySelector('.first').value;
    num2 = document.querySelector('.second').value;
    num = Number(num1) - Number(num2);
    document.querySelector('.result').textContent = num;

    document.querySelector('.value').style.textShadow = "4px 4px 10px white";
    

});

document.querySelector('.multiply').addEventListener('click', function () {
    
    num1 = document.querySelector('.first').value;
    num2 = document.querySelector('.second').value;
    num = Number(num1) * Number(num2);
    document.querySelector('.result').textContent = num;

    document.querySelector('.value').style.textShadow = "4px 4px 10px white";
    

});

document.querySelector('.divide').addEventListener('click', function () {
    
    num1 = document.querySelector('.first').value;
    num2 = document.querySelector('.second').value;
    num = Number(num1) / Number(num2);
    document.querySelector('.result').textContent = num;

    document.querySelector('.value').style.textShadow = "4px 4px 10px white";
    

});

document.querySelector('.first').addEventListener('click', function () {
    document.querySelector('.first').value = '';
    
});

document.querySelector('.second').addEventListener('click', function () {
   
    document.querySelector('.second').value = '';
});