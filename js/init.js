const generatorButton = document.querySelector('.generator__btn'); // кнопка генерации
const generatorClearButton = document.querySelector('.generatorClear__btn'); // кнопка сброса результатов

// генерация при нажатии кнопку генерации
generatorButton.addEventListener('click', () => {
    const initPerson = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('birthdayOutput').innerText = initPerson.birthday;
    document.getElementById('professionOutput').innerText = initPerson.profession;
});

// сброс результатов при нажатии на кнопку сброса результатов
generatorClearButton.addEventListener('click', () => {
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('patronymicOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('birthdayOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';
});
