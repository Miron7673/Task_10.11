const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    patronymicMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Сергеевич",
            "id_5": "Дмитриевич",
            "id_6": "Борисович",
            "id_7": "Михайлович",
            "id_8": "Алексеевич",
            "id_9": "Егорович",
            "id_10": "Константинович"
        }
    }`,
    professionMaleJson: `{
        "count": 7,
        "list": {     
            "id_1": "плотник",
            "id_2": "медбрат",
            "id_3": "альпинист",
            "id_4": "каменщик",
            "id_5": "дирижер",
            "id_6": "летчик",
            "id_7": "шахтер"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Юлия",
            "id_2": "Елена",
            "id_3": "Наталья",
            "id_4": "Ольга",
            "id_5": "Марина",
            "id_6": "Оксана",
            "id_7": "Татьяна",
            "id_8": "Виктория",
            "id_9": "Маргарита",
            "id_10": "Анна"
        }
    }`,
    patronymicFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Сергеевна",
            "id_5": "Дмитриевна",
            "id_6": "Борисовна",
            "id_7": "Михайловна",
            "id_8": "Алексеевна",
            "id_9": "Егоровна",
            "id_10": "Константиновна"
        }
    }`,
    professionFemaleJson: `{
        "count": 7,
        "list": {     
            "id_1": "швея",
            "id_2": "балерина",
            "id_3": "парикмахер",
            "id_4": "медсестра",
            "id_5": "стенографистка",
            "id_6": "повар",
            "id_7": "бухгалтер"
        }
    }`,
    GENDER_MALE: 'мужчина',
    GENDER_FEMALE: 'женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {
        let gender = this.randomIntNumber(1, 0);
        return gender ? this.GENDER_FEMALE : this.GENDER_MALE;
    },

    randomSurname: function() {
        return this.randomValue(this.surnameJson);
    },

    randomFirstName: function() {
        if (this.person.gender === 'мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomPatronymic: function() {
        if (this.person.gender === 'мужчина') {
            return this.randomValue(this.patronymicMaleJson);
        } else {
            return this.randomValue(this.patronymicFemaleJson);
        }
    },

    randomBirthday: function() {
        let arrMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        year = this.randomIntNumber(2000, 1976);
        month = this.randomIntNumber(12, 1);
        switch (month) {
            case 2:
                day = this.randomIntNumber(28, 1);
                break;
            case 4 || 6 || 9 || 11:
                day = this.randomIntNumber(30, 1);
                break;
            default:
                day = this.randomIntNumber(31, 1); 
                break;
        }
        return day + ' ' + arrMonth[month-1] + ' ' + year + ' г.';
    }, 

    randomProfession: function() {
        if (this.person.gender === 'мужчина') {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        if (this.person.gender === 'мужчина') {
            this.person.surname = this.randomSurname();
        } else {
            this.person.surname = this.randomSurname() + 'а';
        }
        this.person.firstName = this.randomFirstName();
        this.person.patronymic = this.randomPatronymic(); 
        this.person.birthday = this.randomBirthday();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};