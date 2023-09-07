export interface  DateGroupInt {
    title: string;
    from: number;
    to: number;
    dates: significantDateInt[];
  }
  
  export interface significantDateInt {
    text: string;
    year: number;
  }
  
  const science1 = {
    year: 2015,
    text: 'Ещё одно важное открытие сделано в области астрофизики'
  }
  const science2 = {
    year: 2016,
    text: 'Год назад открытие новых функций РНК'
  }
  const science3 = {
    year: 2017,
    text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
  }
  const science4 = {
    year: 2018,
    text: 'Третье место в рейтинге открытий журнал Science отвел для научных работ'
  }
  const science5 = {
    year: 2019,
    text: 'Science отметил важность открытия генов, связанных с психическими заболеваниями.'
  }
  const science6 = {
    year: 2020,
    text: 'Темная энергия равномерно распределена по Вселенной'
  }
  
  const literature1 = {
    year: 1992,
    text: 'Нобелевская премия по литературе - Дерек Уолкотт, «За блестящий образец карибского эпоса в 64 разделах».'
  }
  const literature2 = {
    year: 1994,
    text: '«Нобелевская премия'
  }
  const literature3 = {
    year: 1995,
    text: 'Нобелевская премия по литературе'
  }
  const literature4 = {
    year: 1997,
    text: 'С Земли, вооружившись телескопом, можно разглядеть около 200 миллиардов галактик'
  }
  
  const movie1 = {
    year: 1987,
    text: '«Хищник»/Predator, США (реж. Джон Мактирнан)'
  }
  const movie2 = {
    year: 1988,
    text: '«Кто подставил кролика Роджера»/Who Framed Roger Rabbit, США (реж. Роберт Земекис)'
  }
  const movie3 = {
    year: 1989,
    text: '«Назад в будущее 2»/Back to the Future 2, США (реж. Роберт Земекис)'
  }
  const movie4 = {
    year: 1990,
    text: '«Крепкий орешек 2»/Die Hard 2, США (реж. Ренни Харлин)'
  }
  const movie5 = {
    year: 1991,
    text: '«Семейка Аддамс»/The Addams Family, США (реж. Барри Зонненфельд)'
  }
  
  const theatre1 = {
    year: 1999,
    text: 'Премьера балета «Золушка» в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона'
  }
  const theatre2 = {
    year: 2000,
    text: 'Впервые в России состоялся концерт экс-битла сэра Пола Маккартни.'
  }
  const theatre3 = {
    year: 2002,
    text: 'Премьера трилогии Тома Стоппарда «Берег Утопии», Королевский Национальный театр, Лондон'
  }
  const theatre4 = {
    year: 2003,
    text: 'Санкт-Петербург отпраздновал 300-летие.'
  }
  
  const technologies1 = {
    year: 1980,
    text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
  }
  const technologies2 = {
    year: 1982,
    text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
  }
  const technologies3 = {
    year: 1984,
    text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
  }
  const technologies4 = {
    year: 1986,
    text: 'Старт космического аппарата Solar Probe Plus, предназначенного для изучения Солнца'
  }
  
  const sport1 = {
    year: 2006,
    text: 'Премьера балета «Золушка» в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона'
  }
  const sport2 = {
    year: 2007,
    text: 'Открытие выставки "Дионисий, живописец пресловущий" в Третьяковской галерее.'

  }
  const sport3 = {
    year: 2009,
    text: 'Премьера трилогии Тома Стоппарда «Берег Утопии», Королевский Национальный театр, Лондон'
  }
  const sport4 = {
    year: 2011,
    text: 'Московский международный Дом музыки начал полноценную работу.'
  }
  const sport5 = {
    year: 2012,
    text: 'Впервые вручалась премия Национальной академии кинематографических искусств и наук "Золотой орел.'
  }
  const sport6 = {
    year: 2014,
    text: 'Решен вопрос о статусе киноконцерна "Мосфильм" - за студией сохраняется статус государственного унитарного предприятия.'
  }
  
  const scienceGroup: DateGroupInt = {
    title: 'Наука',
    from: 2015,
    to: 2022,
    dates: [science1, science2, science3, science4, science5, science6]
  };
  const technologiesGroup: DateGroupInt = {
    title: 'Технологии',
    from: 1980,
    to: 1986,
    dates: [technologies1, technologies2, technologies3, technologies4]
  };
  const literatureGroup: DateGroupInt = {
    title: 'Литература',
    from: 1992,
    to: 1997,
    dates: [literature1, literature2, literature3, literature4]
  };
  const moveGroup: DateGroupInt = {
    title: 'Кино',
    from: 1987,
    to: 1991,
    dates: [movie1, movie2, movie3, movie4, movie5]
  };
  const theatreGroup: DateGroupInt = {
    title: 'Театр',
    from: 1999,
    to: 2004,
    dates: [theatre1, theatre2, theatre3, theatre4]
  };
  const sportGroup: DateGroupInt = {
    title: 'Спорт',
    from: 2006,
    to: 2014,
    dates: [sport1, sport2, sport3, sport4, sport5, sport6]
  };
  
  
  export const historicalGroups: DateGroupInt[] = [technologiesGroup, moveGroup, literatureGroup, theatreGroup, sportGroup, scienceGroup];