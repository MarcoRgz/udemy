window.addEventListener('load', function()
{
console.log('se a cargado');

  var results = document.getElementById('results');
  var searchBtn = document.getElementById('searchBtn');
  searchBtn.addEventListener('click', function()
  {
    results.innerHTML = 'hola';

    //get hobby
    var hobbyField = document.getElementById('hobby');
    var hobby = hobbyField.value;
    console.log(hobby);

    //get genero
    var genderField = document.getElementById('gender');
    var selected = genderField.selectedIndex;
    var gender = genderField.options[selected].value;

  })
});
