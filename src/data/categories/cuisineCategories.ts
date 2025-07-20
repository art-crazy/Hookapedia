// Типы для категорий кухонь
import {BaseCategory} from "@/data/categories/type";

export type CuisineCategories = {
    'italyanskaya-kuhnya': BaseCategory;
    'kitayskaya-kuhnya': BaseCategory;
    'yaponskaya-kuhnya': BaseCategory;
    'russkaya-kuhnya': BaseCategory;
    'gruzinskaya-kuhnya': BaseCategory;
    'indiyskaya-kuhnya': BaseCategory;
    'meksikanskaya-kuhnya': BaseCategory;
    'frantsuzskaya-kuhnya': BaseCategory;
    'turetskaya-kuhnya': BaseCategory;
    'koreyskaya-kuhnya': BaseCategory;
    'armyanskaya-kuhnya': BaseCategory;
    'azerbaydzhanskaya-kuhnya': BaseCategory;
    'ispanskaya-kuhnya': BaseCategory;
    'tayskaya-kuhnya': BaseCategory;
    'sredizemnomorskaya-kuhnya': BaseCategory;
    'grecheskaya-kuhnya': BaseCategory;
    'ukrainskaya-kuhnya': BaseCategory;
    'polysskaya-kuhnya': BaseCategory;
    'britanskaya-kuhnya': BaseCategory;
    'nemetskaya-kuhnya': BaseCategory;
    'livanskaya-kuhnya': BaseCategory;
    'braziliyskaya-kuhnya': BaseCategory;
    'vetnamskaya-kuhnya': BaseCategory;
    'shveytsarskaya-kuhnya': BaseCategory;
    'finskaya-kuhnya': BaseCategory;
    'skandinavskaya-kuhnya': BaseCategory;
    'gollandskaya-kuhnya': BaseCategory;
    'cheshskaya-kuhnya': BaseCategory;
    'norvezhskaya-kuhnya': BaseCategory;
    'shvedskaya-kuhnya': BaseCategory;
    'avstriyskaya-kuhnya': BaseCategory;
    'vengerskaya-kuhnya': BaseCategory;
    'serbskaya-kuhnya': BaseCategory;
    'belorusskaya-kuhnya': BaseCategory;
    'moldavskaya-kuhnya': BaseCategory;
    'kazakhskaya-kuhnya': BaseCategory;
    'uzbekskaya-kuhnya': BaseCategory;
    'kirgizskaya-kuhnya': BaseCategory;
    'turkmenskaya-kuhnya': BaseCategory;
    'tadzhikskaya-kuhnya': BaseCategory;
    'abkhazskaya-kuhnya': BaseCategory;
    'osetinskaya-kuhnya': BaseCategory;
    'bashkirskaya-kuhnya': BaseCategory;
    'kazachya-kuhnya': BaseCategory;
    'kalmytskaya-kuhnya': BaseCategory;
    'chukotskaya-kuhnya': BaseCategory;
    'yakutskaya-kuhnya': BaseCategory;
    'mariyskaya-kuhnya': BaseCategory;
    'udmurtskaya-kuhnya': BaseCategory;
    'komi-kuhnya': BaseCategory;
    'sakha-kuhnya': BaseCategory;
    'slovatskaya-kuhnya': BaseCategory;
    'khorvatskaya-kuhnya': BaseCategory;
    'chernogorskaya-kuhnya': BaseCategory;
    'bosniyskaya-kuhnya': BaseCategory;
    'makedonskaya-kuhnya': BaseCategory;
    'albanskaya-kuhnya': BaseCategory;
    'maltiyskaya-kuhnya': BaseCategory;
    'kiprskaya-kuhnya': BaseCategory;
    'rumynskaya-kuhnya': BaseCategory;
    'bolgarskaya-kuhnya': BaseCategory;
    'alzhirskaya-kuhnya': BaseCategory;
    'egipetskaya-kuhnya': BaseCategory;
    'siriyskaya-kuhnya': BaseCategory;
    'izrailskaya-kuhnya': BaseCategory;
    'palestinskaya-kuhnya': BaseCategory;
    'iordanskaya-kuhnya': BaseCategory;
    'tunisskaya-kuhnya': BaseCategory;
    'liviyskaya-kuhnya': BaseCategory;
    'marokkanskaya-kuhnya': BaseCategory;
    'efiopskaya-kuhnya': BaseCategory;
    'somaliyskaya-kuhnya': BaseCategory;
    'keniyskaya-kuhnya': BaseCategory;
    'nigeriyskaya-kuhnya': BaseCategory;
    'ganskaya-kuhnya': BaseCategory;
    'senegalskaya-kuhnya': BaseCategory;
    'yuzhnoafrikanskaya-kuhnya': BaseCategory;
    'zimbabviyskaya-kuhnya': BaseCategory;
    'malaviyskaya-kuhnya': BaseCategory;
    'irakskaya-kuhnya': BaseCategory;
    'iranskaya-kuhnya': BaseCategory;
    'saudovskaya-kuhnya': BaseCategory;
    'katarskaya-kuhnya': BaseCategory;
    'kuhnya-oae': BaseCategory;
    'avstraliyskaya-kuhnya': BaseCategory;
    'novaya-zelandiya-kuhnya': BaseCategory;
    'fidzhi-kuhnya': BaseCategory;
    'argentinskaya-kuhnya': BaseCategory;
    'peruanskaya-kuhnya': BaseCategory;
    'kolumbiyskaya-kuhnya': BaseCategory;
    'venesuelska-kuhnya': BaseCategory;
    'kubinskaya-kuhnya': BaseCategory;
    'elfiyskaya-kuhnya': BaseCategory;
    'gnomya-kuhnya': BaseCategory;
    'hobbitskaya-kuhnya': BaseCategory;
    'volshebnaya-kuhnya': BaseCategory;
};

// Кухни (уровень 2)

export const cuisineCategories: CuisineCategories = {
    'italyanskaya-kuhnya': {
        id: 'italyanskaya-kuhnya',
        title: 'Итальянская кухня'
    },
    'kitayskaya-kuhnya': {
        id: 'kitayskaya-kuhnya',
        title: 'Китайская кухня'
    },
    'yaponskaya-kuhnya': {
        id: 'yaponskaya-kuhnya',
        title: 'Японская кухня'
    },
    'russkaya-kuhnya': {
        id: 'russkaya-kuhnya',
        title: 'Русская кухня'
    },
    'gruzinskaya-kuhnya': {
        id: 'gruzinskaya-kuhnya',
        title: 'Грузинская кухня'
    },
    'indiyskaya-kuhnya': {
        id: 'indiyskaya-kuhnya',
        title: 'Индийская кухня'
    },
    'meksikanskaya-kuhnya': {
        id: 'meksikanskaya-kuhnya',
        title: 'Мексиканская кухня'
    },
    'frantsuzskaya-kuhnya': {
        id: 'frantsuzskaya-kuhnya',
        title: 'Французская кухня'
    },
    'turetskaya-kuhnya': {
        id: 'turetskaya-kuhnya',
        title: 'Турецкая кухня'
    },
    'koreyskaya-kuhnya': {
        id: 'koreyskaya-kuhnya',
        title: 'Корейская кухня'
    },
    'armyanskaya-kuhnya': {
        id: 'armyanskaya-kuhnya',
        title: 'Армянская кухня'
    },
    'azerbaydzhanskaya-kuhnya': {
        id: 'azerbaydzhanskaya-kuhnya',
        title: 'Азербайджанская кухня'
    },
    'ispanskaya-kuhnya': {
        id: 'ispanskaya-kuhnya',
        title: 'Испанская кухня'
    },
    'tayskaya-kuhnya': {
        id: 'tayskaya-kuhnya',
        title: 'Тайская кухня'
    },
    'sredizemnomorskaya-kuhnya': {
        id: 'sredizemnomorskaya-kuhnya',
        title: 'Средиземноморская кухня'
    },
    'grecheskaya-kuhnya': {
        id: 'grecheskaya-kuhnya',
        title: 'Греческая кухня'
    },
    'ukrainskaya-kuhnya': {
        id: 'ukrainskaya-kuhnya',
        title: 'Украинская кухня'
    },
    'polysskaya-kuhnya': {
        id: 'polysskaya-kuhnya',
        title: 'Польская кухня'
    },
    'britanskaya-kuhnya': {
        id: 'britanskaya-kuhnya',
        title: 'Британская кухня'
    },
    'nemetskaya-kuhnya': {
        id: 'nemetskaya-kuhnya',
        title: 'Немецкая кухня'
    },
    'livanskaya-kuhnya': {
        id: 'livanskaya-kuhnya',
        title: 'Ливанская кухня'
    },
    'braziliyskaya-kuhnya': {
        id: 'braziliyskaya-kuhnya',
        title: 'Бразильская кухня'
    },
    'vetnamskaya-kuhnya': {
        id: 'vetnamskaya-kuhnya',
        title: 'Вьетнамская кухня'
    },
    'shveytsarskaya-kuhnya': {
        id: 'shveytsarskaya-kuhnya',
        title: 'Швейцарская кухня'
    },
    'finskaya-kuhnya': {
        id: 'finskaya-kuhnya',
        title: 'Финская кухня'
    },
    'skandinavskaya-kuhnya': {
        id: 'skandinavskaya-kuhnya',
        title: 'Скандинавская кухня'
    },
    'gollandskaya-kuhnya': {
        id: 'gollandskaya-kuhnya',
        title: 'Голландская кухня'
    },
    'cheshskaya-kuhnya': {
        id: 'cheshskaya-kuhnya',
        title: 'Чешская кухня'
    },
    'norvezhskaya-kuhnya': {
        id: 'norvezhskaya-kuhnya',
        title: 'Норвежская кухня'
    },
    'shvedskaya-kuhnya': {
        id: 'shvedskaya-kuhnya',
        title: 'Шведская кухня'
    },
    'avstriyskaya-kuhnya': {
        id: 'avstriyskaya-kuhnya',
        title: 'Австрийская кухня'
    },
    'vengerskaya-kuhnya': {
        id: 'vengerskaya-kuhnya',
        title: 'Венгерская кухня'
    },
    'serbskaya-kuhnya': {
        id: 'serbskaya-kuhnya',
        title: 'Сербская кухня'
    },
    'belorusskaya-kuhnya': {
        id: 'belorusskaya-kuhnya',
        title: 'Белорусская кухня'
    },
    'moldavskaya-kuhnya': {
        id: 'moldavskaya-kuhnya',
        title: 'Молдавская кухня'
    },
    'kazakhskaya-kuhnya': {
        id: 'kazakhskaya-kuhnya',
        title: 'Казахская кухня'
    },
    'uzbekskaya-kuhnya': {
        id: 'uzbekskaya-kuhnya',
        title: 'Узбекская кухня'
    },
    'kirgizskaya-kuhnya': {
        id: 'kirgizskaya-kuhnya',
        title: 'Киргизская кухня'
    },
    'turkmenskaya-kuhnya': {
        id: 'turkmenskaya-kuhnya',
        title: 'Туркменская кухня'
    },
    'tadzhikskaya-kuhnya': {
        id: 'tadzhikskaya-kuhnya',
        title: 'Таджикская кухня'
    },
    'abkhazskaya-kuhnya': {
        id: 'abkhazskaya-kuhnya',
        title: 'Абхазская кухня'
    },
    'osetinskaya-kuhnya': {
        id: 'osetinskaya-kuhnya',
        title: 'Осетинская кухня'
    },
    'bashkirskaya-kuhnya': {
        id: 'bashkirskaya-kuhnya',
        title: 'Башкирская кухня'
    },
    'kazachya-kuhnya': {
        id: 'kazachya-kuhnya',
        title: 'Казачья кухня'
    },
    'kalmytskaya-kuhnya': {
        id: 'kalmytskaya-kuhnya',
        title: 'Калмыцкая кухня'
    },
    'chukotskaya-kuhnya': {
        id: 'chukotskaya-kuhnya',
        title: 'Чукотская кухня'
    },
    'yakutskaya-kuhnya': {
        id: 'yakutskaya-kuhnya',
        title: 'Якутская кухня'
    },
    'mariyskaya-kuhnya': {
        id: 'mariyskaya-kuhnya',
        title: 'Марийская кухня'
    },
    'udmurtskaya-kuhnya': {
        id: 'udmurtskaya-kuhnya',
        title: 'Удмуртская кухня'
    },
    'komi-kuhnya': {
        id: 'komi-kuhnya',
        title: 'Коми кухня'
    },
    'sakha-kuhnya': {
        id: 'sakha-kuhnya',
        title: 'Саха кухня'
    },
    'slovatskaya-kuhnya': {
        id: 'slovatskaya-kuhnya',
        title: 'Словацкая кухня'
    },
    'khorvatskaya-kuhnya': {
        id: 'khorvatskaya-kuhnya',
        title: 'Хорватская кухня'
    },
    'chernogorskaya-kuhnya': {
        id: 'chernogorskaya-kuhnya',
        title: 'Черногорская кухня'
    },
    'bosniyskaya-kuhnya': {
        id: 'bosniyskaya-kuhnya',
        title: 'Боснийская кухня'
    },
    'makedonskaya-kuhnya': {
        id: 'makedonskaya-kuhnya',
        title: 'Македонская кухня'
    },
    'albanskaya-kuhnya': {
        id: 'albanskaya-kuhnya',
        title: 'Албанская кухня'
    },
    'maltiyskaya-kuhnya': {
        id: 'maltiyskaya-kuhnya',
        title: 'Мальтийская кухня'
    },
    'kiprskaya-kuhnya': {
        id: 'kiprskaya-kuhnya',
        title: 'Кипрская кухня'
    },
    'rumynskaya-kuhnya': {
        id: 'rumynskaya-kuhnya',
        title: 'Румынская кухня'
    },
    'bolgarskaya-kuhnya': {
        id: 'bolgarskaya-kuhnya',
        title: 'Болгарская кухня'
    },
    'alzhirskaya-kuhnya': {
        id: 'alzhirskaya-kuhnya',
        title: 'Алжирская кухня'
    },
    'egipetskaya-kuhnya': {
        id: 'egipetskaya-kuhnya',
        title: 'Египетская кухня'
    },
    'siriyskaya-kuhnya': {
        id: 'siriyskaya-kuhnya',
        title: 'Сирийская кухня'
    },
    'izrailskaya-kuhnya': {
        id: 'izrailskaya-kuhnya',
        title: 'Израильская кухня'
    },
    'palestinskaya-kuhnya': {
        id: 'palestinskaya-kuhnya',
        title: 'Палестинская кухня'
    },
    'iordanskaya-kuhnya': {
        id: 'iordanskaya-kuhnya',
        title: 'Иорданская кухня'
    },
    'tunisskaya-kuhnya': {
        id: 'tunisskaya-kuhnya',
        title: 'Тунисская кухня'
    },
    'liviyskaya-kuhnya': {
        id: 'liviyskaya-kuhnya',
        title: 'Ливийская кухня'
    },
    'marokkanskaya-kuhnya': {
        id: 'marokkanskaya-kuhnya',
        title: 'Марокканская кухня'
    },
    'efiopskaya-kuhnya': {
        id: 'efiopskaya-kuhnya',
        title: 'Эфиопская кухня'
    },
    'somaliyskaya-kuhnya': {
        id: 'somaliyskaya-kuhnya',
        title: 'Сомалийская кухня'
    },
    'keniyskaya-kuhnya': {
        id: 'keniyskaya-kuhnya',
        title: 'Кенийская кухня'
    },
    'nigeriyskaya-kuhnya': {
        id: 'nigeriyskaya-kuhnya',
        title: 'Нигерийская кухня'
    },
    'ganskaya-kuhnya': {
        id: 'ganskaya-kuhnya',
        title: 'Ганская кухня'
    },
    'senegalskaya-kuhnya': {
        id: 'senegalskaya-kuhnya',
        title: 'Сенегальская кухня'
    },
    'yuzhnoafrikanskaya-kuhnya': {
        id: 'yuzhnoafrikanskaya-kuhnya',
        title: 'Южноафриканская кухня'
    },
    'zimbabviyskaya-kuhnya': {
        id: 'zimbabviyskaya-kuhnya',
        title: 'Зимбабвийская кухня'
    },
    'malaviyskaya-kuhnya': {
        id: 'malaviyskaya-kuhnya',
        title: 'Малавийская кухня'
    },
    'irakskaya-kuhnya': {
        id: 'irakskaya-kuhnya',
        title: 'Иракская кухня'
    },
    'iranskaya-kuhnya': {
        id: 'iranskaya-kuhnya',
        title: 'Иранская кухня'
    },
    'saudovskaya-kuhnya': {
        id: 'saudovskaya-kuhnya',
        title: 'Саудовская кухня'
    },
    'katarskaya-kuhnya': {
        id: 'katarskaya-kuhnya',
        title: 'Катарская кухня'
    },
    'kuhnya-oae': {
        id: 'kuhnya-oae',
        title: 'Кухня ОАЭ'
    },
    'avstraliyskaya-kuhnya': {
        id: 'avstraliyskaya-kuhnya',
        title: 'Австралийская кухня'
    },
    'novaya-zelandiya-kuhnya': {
        id: 'novaya-zelandiya-kuhnya',
        title: 'Новая Зеландия кухня'
    },
    'fidzhi-kuhnya': {
        id: 'fidzhi-kuhnya',
        title: 'Фиджи кухня'
    },
    'argentinskaya-kuhnya': {
        id: 'argentinskaya-kuhnya',
        title: 'Аргентинская кухня'
    },
    'peruanskaya-kuhnya': {
        id: 'peruanskaya-kuhnya',
        title: 'Перуанская кухня'
    },
    'kolumbiyskaya-kuhnya': {
        id: 'kolumbiyskaya-kuhnya',
        title: 'Колумбийская кухня'
    },
    'venesuelska-kuhnya': {
        id: 'venesuelska-kuhnya',
        title: 'Венесуэльская кухня'
    },
    'kubinskaya-kuhnya': {
        id: 'kubinskaya-kuhnya',
        title: 'Кубинская кухня'
    },
    'elfiyskaya-kuhnya': {
        id: 'elfiyskaya-kuhnya',
        title: 'Эльфийская кухня'
    },
    'gnomya-kuhnya': {
        id: 'gnomya-kuhnya',
        title: 'Гномья кухня'
    },
    'hobbitskaya-kuhnya': {
        id: 'hobbitskaya-kuhnya',
        title: 'Хоббитская кухня'
    },
    'volshebnaya-kuhnya': {
        id: 'volshebnaya-kuhnya',
        title: 'Волшебная кухня'
    }
};
