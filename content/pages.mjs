export const pageCopy = {
  home: {
    en: {
      title: "Free Online Calculators for Money, Health, Math and the Web",
      description: "Free calculators for mortgages, loans, BMI, calories, percentages, age, passwords, Schengen days, and LLM tokens. They run in your browser, in English and Russian.",
      h1: "Free online calculators",
      lede: "Calculators for a mortgage payment, BMI, a percentage, an age, a password, and a page you are about to publish. Each one runs in your browser. English is the main language, and every page has a Russian version.",
      body: `<p>The point of this site is a fast answer to a specific question: what a balance becomes if you add a fixed sum each month, what a stop-loss implies for position size, whether a bank's rate hid a spread, how many Schengen days are left, what a freelance hour has to earn, what an API call costs at the prices you type in. The tools are grouped so a person comparing exchanges, a person moving country, and a person shipping a page can each start in the right cluster and then follow the related links.</p>
<p>Nothing you type into a finance form, a password box, or the encryptor is sent to a server of ours. There is no account. The IP test is the exception, and that page says so: it asks public lookup services for the address they see. Photos you strip and images you compress are handled with the browser's own file tools.</p>
<p>Some pages link to Amazon.de searches. Travel, currency, and trip-cost pages also link to an eSIM, flights, tours, and tickets. Those links are affiliate links. They are marked, and the whole list lives in one file so a partner URL can be replaced without editing the pages. The calculator does not change its arithmetic to favour a partner. Prices and plan rules change, so the articles describe how to compare rather than quoting a tariff that would be stale next month.</p>
<p>If you want the same tool in Russian, use the RU switch in the header. The URL keeps the same slug under /ru/, and the language tags point both ways.</p>`,
      faq: [
        { q: "Are these calculators free?", a: "Yes. There is no account and no payment. The site is funded, if a partner pays, by labelled affiliate links." },
        { q: "Do you store what I type?", a: "No. Calculations run on your device. The IP test calls public lookup services, which see the address they are asked about. This site does not receive that request." },
        { q: "Is the result financial or legal advice?", a: "No. It is arithmetic from the numbers you entered. Tax, visas, insurance, and investing depend on facts this form does not have." },
        { q: "Can I use the Russian pages?", a: "Yes. Every calculator and every guide exists in Russian under /ru/, with matching titles and a language switch." }
      ]
    },
    ru: {
      title: "Бесплатные онлайн-калькуляторы: деньги, здоровье, математика и веб",
      description: "Бесплатные калькуляторы ипотеки, кредита, ИМТ, калорий, процентов, возраста, паролей, шенгенских дней и токенов. Считают в браузере, на английском и русском.",
      h1: "Бесплатные онлайн-калькуляторы",
      lede: "Калькуляторы платежа по ипотеке, ИМТ, процента, возраста, пароля и страницы, которую вы собираетесь опубликовать. Каждый считает в браузере. Основной язык — английский, у каждой страницы есть русская версия.",
      body: `<p>Сайт отвечает на конкретный вопрос: во что превратится сумма, если довнесение каждый месяц одно и то же; какой размер позиции следует из стопа; сколько банк спрятал в курсе; сколько шенгенских дней осталось; сколько должен стоить час фрилансера; сколько стоит вызов API по тем ценам, которые вы сами вписали. Инструменты разложены по темам, чтобы человек, который сравнивает биржи, человек, который переезжает, и человек, который выпускает страницу, начинали с нужного раздела и шли по соседним ссылкам.</p>
<p>То, что вы вводите в финансовую форму, в поле пароля или в шифрование, на наш сервер не уходит. Аккаунта нет. Исключение — проверка IP, и страница об этом говорит прямо: она спрашивает публичные службы, какой адрес они видят. Фото, у которых вы снимаете EXIF, и картинки, которые вы сжимаете, обрабатывает сам браузер.</p>
<p>На части страниц есть поиск на Amazon.de. Страницы про поездку, валюту и стоимость поездки также ссылаются на eSIM, авиабилеты, экскурсии и билеты. Это партнёрские ссылки. Они помечены, а весь список лежит в одном файле: адрес партнёра можно заменить, не трогая страницы. Калькулятор не подстраивает арифметику под партнёра. Цены и правила тарифов меняются, поэтому статьи объясняют, как сравнивать, а не цитируют прайс, который устареет через месяц.</p>
<p>Русская версия открывается переключателем RU в шапке. Адрес сохраняет тот же слаг в каталоге /ru/, а языковые теги указывают в обе стороны.</p>`,
      faq: [
        { q: "Калькуляторы правда бесплатные?", a: "Да. Аккаунта и оплаты нет. Если сайт что-то получает, то с помеченных партнёрских ссылок." },
        { q: "Вы сохраняете то, что я ввожу?", a: "Нет. Расчёт идёт на вашем устройстве. Проверка IP обращается к публичным службам, и они видят адрес, о котором их спросили. Этот сайт тот запрос не получает." },
        { q: "Это финансовый или юридический совет?", a: "Нет. Это арифметика по введённым числам. Налоги, визы, страховка и инвестиции зависят от фактов, которых в форме нет." },
        { q: "Есть русские страницы?", a: "Да. Каждый калькулятор и каждая статья есть по-русски в каталоге /ru/, со своими заголовками и переключателем языка." }
      ]
    }
  },
  hubs: {
    finance: {
      en: {
        title: "Free Finance Calculators: Interest, Fees, FIRE, Inflation",
        description: "Compound interest, average price, staking APY, trading fees, FIRE, inflation, position size, and bank spreads. Free, in the browser.",
        h1: "Finance calculators",
        lede: "Calculators for a mortgage or loan payment, simple and compound interest, a position you size from a stop, and the gap between a bank rate and the interbank rate.",
        body: `<p>These pages answer planning questions with the formula written out beside the form. Compound interest takes a nominal annual rate and an optional monthly contribution. The average-price tool turns several buys, including fees, into one break-even. Staking compares effective yearly rates. Trading fees add maker or taker commission and slippage, then solve the sell quote that gets you back to flat. FIRE turns yearly spending and a withdrawal rate into a portfolio number and, if you also type a contribution and a return, a rough time to reach it.</p>
<p>Inflation is kept separate on purpose. A balance can grow while the currency buys less, and mixing those two rates inside one number hides the assumption. The currency page compares the amount a bank delivers with the amount the interbank rate would have delivered. Position size converts a percent of the account and a stop distance into a quantity. None of this is a forecast. A rate you type is an assumption, and tax sits outside every formula here.</p>
<p>The guides next to these tools discuss a broker used by people who invest across countries, two large crypto exchanges, and two hardware wallets. They describe what to check. They do not quote a fee schedule that the firm can change next week. Use the calculator with the numbers from the schedule you were actually offered.</p>`,
        faq: [
          { q: "Which finance calculator should I open first?", a: "If the question is a future balance, start with compound interest. If the question is a coin you already bought at several prices, start with average price. If the question is how much you can lose on one trade, start with position size." },
          { q: "Do these pages recommend a broker or an exchange?", a: "No. The guides describe what to check and do not link to a broker or an exchange. The currency page links to labelled travel partners. The arithmetic does not depend on a link, and a residency rule can block a product a guide mentions." },
          { q: "Are the default rates a prediction?", a: "No. Defaults are there so the form is not empty. Replace them with the rate you want to test." }
        ]
      },
      ru: {
        title: "Финансовые калькуляторы: процент, комиссии, FIRE, инфляция",
        description: "Сложный процент, средняя цена, APY стейкинга, торговые комиссии, FIRE, инфляция, размер позиции и банковский курс. Бесплатно, в браузере.",
        h1: "Финансовые калькуляторы",
        lede: "Калькуляторы платежа по ипотеке и кредиту, простого и сложного процента, позиции, которую задаёт стоп, и разницы между курсом банка и межбанком.",
        body: `<p>Страницы отвечают на вопросы планирования, и формула написана рядом с формой. Сложный процент берёт номинальную годовую ставку и необязательное ежемесячное довнесение. Средняя цена собирает несколько покупок, вместе с комиссиями, в одну цену безубытка. Стейкинг сравнивает эффективные годовые ставки. Торговые комиссии добавляют мейкера или тейкера и проскальзывание, затем находят котировку продажи, на которой вы выходите в ноль. FIRE превращает годовые расходы и ставку изъятия в сумму портфеля и, если задать ещё взнос и доходность, в грубый срок.</p>
<p>Инфляция вынесена отдельно сознательно. Баланс может расти, пока валюта покупает меньше, и если смешать две ставки в одном числе, допущение пропадает. Страница валюты сравнивает сумму, которую выдаёт банк, с суммой по межбанку. Размер позиции переводит процент счёта и расстояние до стопа в количество. Это не прогноз. Ставка, которую вы вводите, — допущение, а налог во всех этих формулах снаружи.</p>
<p>Статьи рядом обсуждают брокера, которым пользуются те, кто инвестирует из другой страны, две крупные криптобиржи и два аппаратных кошелька. Там сказано, что проверять. Там нет тарифа, который фирма может поменять на следующей неделе. Считайте по цифрам того предложения, которое вам реально дали.</p>`,
        faq: [
          { q: "С какого финансового калькулятора начать?", a: "Если вопрос про будущий баланс, начните со сложного процента. Если монету покупали по разным ценам, начните со средней цены. Если вопрос, сколько можно потерять на одной сделке, начните с размера позиции." },
          { q: "Страницы рекомендуют брокера или биржу?", a: "Нет. Статьи описывают, что проверить, и на брокера или биржу не ссылаются. Страница валюты ссылается на помеченных партнёров поездки. Арифметика от ссылки не зависит, а правило резидентства может закрыть продукт, который упомянут в статье." },
          { q: "Ставки по умолчанию — это прогноз?", a: "Нет. Они нужны, чтобы форма не была пустой. Подставьте ставку, которую хотите проверить." }
        ]
      }
    },
    fitness: {
      en: {
        title: "Free Fitness and Health Calculators: BMI, Calories, Pace",
        description: "BMI with the exact unit conversion, Mifflin–St Jeor calories, the US Navy circumference body-fat equation, and pace from distance and time.",
        h1: "Fitness and health calculators",
        lede: "Four adult formulas: body mass index, a calorie estimate, a circumference body-fat estimate, and running pace. None of them is a diagnosis.",
        body: `<p>BMI is weight divided by height squared. Kilograms and centimetres are converted with the exact factors 0.45359237 kilograms per pound and 0.0254 metres per inch, so the same body in either unit system returns the same index. The categories are the adult World Health Organization cut points: under 18.5, 18.5 to 24.9, 25 to 29.9, and 30 or more. They are not cut points for children, athletes, or pregnancy.</p>
<p>The calorie page uses the Mifflin–St Jeor equation. The male form adds 5 and the female form subtracts 161, after 10 times weight in kilograms, 6.25 times height in centimetres, and minus 5 times age. An activity factor from 1.2 to 1.9 turns that basal figure into an estimate of daily calories. Five hundred kilocalories below or above that line is the common half-kilogram-a-week sketch. It is not a prescription, and it is not a measurement of your metabolism.</p>
<p>Body fat uses the US Navy circumference equation in inches, with centimetres converted by 2.54 before the base-10 logarithm. Men use abdomen minus neck. Women use waist plus hip minus neck. Pace divides time by distance and also reports kilometres per hour. A 10 kilometre run in 50 minutes is 5 minutes per kilometre and 12 kilometres per hour. The page does not read a watch or a heart-rate strap.</p>`,
        faq: [
          { q: "Is BMI a measure of health?", a: "It is weight divided by height squared, sorted with adult WHO cut points. It does not see muscle, bone, age, or a medical history." },
          { q: "Where do the calorie numbers come from?", a: "From the Mifflin–St Jeor equation and an activity factor you pick. The page does not measure the calories you burn." },
          { q: "Which body-fat formula is this?", a: "The US Navy circumference equation. Men use 86.010 log10(abdomen − neck) − 70.041 log10(height) + 36.76. Women use 163.205 log10(waist + hip − neck) − 97.684 log10(height) − 78.387. Height and circumferences are in inches." }
        ]
      },
      ru: {
        title: "Калькуляторы здоровья: ИМТ, калории, темп",
        description: "ИМТ с точным переводом единиц, калории по Миффлину — Сан Жеору, окружности по формуле ВМС США и темп по дистанции и времени.",
        h1: "Калькуляторы здоровья и нагрузки",
        lede: "Четыре формулы для взрослых: индекс массы тела, оценка калорий, оценка жира по окружностям и темп бега. Ни одна не является диагнозом.",
        body: `<p>ИМТ — это вес, делённый на квадрат роста. Килограммы и сантиметры переводятся точными коэффициентами 0,45359237 килограмма в фунте и 0,0254 метра в дюйме, поэтому одно и то же тело в двух системах даёт один индекс. Категории — взрослые пороги ВОЗ: ниже 18,5, от 18,5 до 24,9, от 25 до 29,9 и 30 и выше. Это не пороги для детей, спортсменов или беременности.</p>
<p>Страница калорий использует уравнение Миффлина — Сан Жеора. Мужская форма прибавляет 5, женская вычитает 161 после 10 умножить на вес в килограммах, 6,25 умножить на рост в сантиметрах и минус 5 умножить на возраст. Коэффициент активности от 1,2 до 1,9 превращает эту базовую цифру в оценку калорий за день. Пятьсот килокалорий ниже или выше — привычный набросок половины килограмма в неделю. Это не назначение и не замер вашего обмена.</p>
<p>Процент жира считается окружностной формулой ВМС США в дюймах. Сантиметры делятся на 2,54 до десятичного логарифма. У мужчин это живот минус шея. У женщин — талия плюс бёдра минус шея. Темп делит время на дистанцию и ещё показывает километры в час. Десять километров за 50 минут — это 5 минут на километр и 12 километров в час. Часы и пульсометр страница не читает.</p>`,
        faq: [
          { q: "ИМТ измеряет здоровье?", a: "Это вес, делённый на квадрат роста, разложенный по взрослым порогам ВОЗ. Мышцы, кости, возраст и историю болезни формула не видит." },
          { q: "Откуда берутся калории?", a: "Из уравнения Миффлина — Сан Жеора и коэффициента активности, который выбираете вы. Страница не измеряет, сколько вы тратите." },
          { q: "Какая формула жира здесь?", a: "Окружностная формула ВМС США. Мужчины: 86,010·log10(живот − шея) − 70,041·log10(рост) + 36,76. Женщины: 163,205·log10(талия + бёдра − шея) − 97,684·log10(рост) − 78,387. Рост и окружности в дюймах." }
        ]
      }
    },
    math: {
      en: {
        title: "Free Math Calculators: Percent, Fraction, Deviation, Triangle",
        description: "Percent of a number, percent change, fractions in lowest terms, population and sample standard deviation, and triangle area.",
        h1: "Math calculators",
        lede: "Percentages, fractions, a standard deviation you can recompute from the squared deviations, and the area of a triangle.",
        body: `<p>The percentage page answers three questions. What is A percent of B is A divided by 100, times B. A is what percent of B is A divided by B. Percent change from A to B is B minus A, divided by A. A zero starting value has no percent change, and the page says so instead of printing infinity.</p>
<p>Fractions stay in integers. One half plus one third is five sixths, because the common denominator is six and the numerators become three and two. The result is reduced by the greatest common divisor and also shown as a mixed number. A zero denominator, or dividing by a zero fraction, is rejected. Inputs have to be integers inside the safe integer range so the cross-multiplication does not silently round.</p>
<p>Standard deviation uses the set you type. The mean is the sum divided by the count. Population variance divides the sum of squared deviations by the count. Sample variance divides by the count minus one, which needs at least two numbers. The famous set 2, 4, 4, 4, 5, 5, 7, 9 has mean 5, population variance 4, and population standard deviation 2. Triangle area is half the product of the legs for a right triangle, Heron's formula for three sides that satisfy the triangle inequality, or base times height divided by two.</p>`,
        faq: [
          { q: "Is percent change the same as a percentage point?", a: "No. Percent change divides the difference by the starting number. A move from 20 percent to 30 percent is a 10 percentage-point change and a 50 percent change. This page does the second one when you type 20 and 30." },
          { q: "Why are there two standard deviations?", a: "Population variance divides by the count. Sample variance divides by the count minus one. Use the sample line when the numbers are a sample from a larger set. Use the population line when the numbers are the whole set." },
          { q: "What if three lengths cannot form a triangle?", a: "The page rejects them. Each side has to be shorter than the other two added together. A 1, 2, 3 set is flat, so the area is not reported as zero by accident." }
        ]
      },
      ru: {
        title: "Математические калькуляторы: процент, дробь, отклонение, треугольник",
        description: "Процент от числа, изменение в процентах, дроби в несократимом виде, стандартное отклонение совокупности и выборки и площадь треугольника.",
        h1: "Математические калькуляторы",
        lede: "Проценты, дроби, стандартное отклонение, которое можно пересчитать по квадратам отклонений, и площадь треугольника.",
        body: `<p>Страница процентов отвечает на три вопроса. Сколько будет A процентов от B — это A, делённое на 100, умножить на B. A — это сколько процентов от B — это A, делённое на B. Изменение от A к B — это B минус A, делённое на A. У нулевого исходного числа процента изменения нет, и страница так и говорит, а не печатает бесконечность.</p>
<p>Дроби остаются целыми. Половина плюс треть — это пять шестых, потому что общий знаменатель шесть, а числители становятся три и два. Результат сокращается на наибольший общий делитель и показывается ещё смешанным числом. Нулевой знаменатель и деление на нулевую дробь отвергаются. Ввод должен быть целым в безопасном диапазоне, чтобы перекрёстное умножение молча не округлилось.</p>
<p>Стандартное отклонение считается по введённому набору. Среднее — сумма, делённая на количество. Дисперсия совокупности делит сумму квадратов отклонений на количество. Дисперсия выборки делит на количество минус один, и для неё нужны хотя бы два числа. Знаменитый набор 2, 4, 4, 4, 5, 5, 7, 9 имеет среднее 5, дисперсию совокупности 4 и стандартное отклонение совокупности 2. Площадь треугольника — половина произведения катетов, формула Герона для трёх сторон, которые проходят неравенство треугольника, или основание умножить на высоту и делить на два.</p>`,
        faq: [
          { q: "Изменение в процентах — это процентный пункт?", a: "Нет. Изменение в процентах делит разницу на исходное число. Переход с 20 процентов на 30 — это 10 процентных пунктов и изменение на 50 процентов. Если ввести 20 и 30, страница считает второе." },
          { q: "Почему стандартных отклонений два?", a: "Дисперсия совокупности делит на количество. Дисперсия выборки делит на количество минус один. Строку выборки берут, когда числа — выборка из большего набора. Строку совокупности — когда числа и есть весь набор." },
          { q: "Что если из трёх длин не собрать треугольник?", a: "Страница их отвергает. Каждая сторона должна быть короче суммы двух других. Набор 1, 2, 3 плоский, и площадь не показывают нулём по ошибке." }
        ]
      }
    },
    other: {
      en: {
        title: "Free Date, Time, GPA and Unit Calculators",
        description: "Age on a date, days between dates, add and subtract time, GPA on a 4.0 scale, a letter grade, and unit conversions with exact factors.",
        h1: "Other calculators",
        lede: "Calendar age, date arithmetic that clamps the end of the month, durations, a 4.0 GPA, a weighted grade, and unit conversions.",
        body: `<p>Age is the calendar gap from the date of birth to the date you pick: whole years, then whole months, then the remaining days. The total is also the count of midnights in UTC, so a daylight-saving change does not add or remove a day. A 29 February birthday reaches the next whole year on 1 March in a non-leap year, which is the first date the anniversary exists. Next birthday uses that same rule.</p>
<p>The date page reports days from the first date to the second, the count that includes both dates, and the same year-month-day gap. Adding a month to 31 January lands on the last day of February, 28 or 29, instead of spilling into March. Years are applied first, then months, then days. The time page adds or subtracts hours, minutes, and seconds, and it can measure from one clock time to another. An earlier end time is counted into the next day, and the result says so.</p>
<p>GPA uses one common US 4.0 map: A and A+ are 4.0, A− is 3.7, and the steps continue down to F at 0. It is credit-weighted. The grade page weights each score by the weight you type, or by 1 if you leave the weight blank, then maps 90, 80, 70, and 60 to A, B, C, and D. Unit conversion uses exact factors: 2.54 centimetres in an inch, 1.609344 kilometres in a mile, 0.45359237 kilograms in a pound, and 3.785411784 litres in a US gallon. Fahrenheit and Celsius meet at 32 and 212. A length is not converted into a weight.</p>`,
        faq: [
          { q: "Does age count the birthday as already reached?", a: "On the anniversary the year count increases and the months and days are zero. For a 29 February birthday in a non-leap year, that anniversary is 1 March." },
          { q: "Why does 31 January plus one month become the end of February?", a: "February does not have a 31st. The page keeps the day inside the destination month instead of rolling into March." },
          { q: "Whose GPA scale is this?", a: "A common US 4.0 scale where A+ does not go above 4.0 and A− is 3.7. Schools that use 4.3 for A+, or a different step, will not match. The page states the map it uses." }
        ]
      },
      ru: {
        title: "Калькуляторы дат, времени, среднего балла и единиц",
        description: "Возраст на дату, дни между датами, сложение и вычитание времени, средний балл по шкале 4,0, буквенная оценка и перевод единиц по точным коэффициентам.",
        h1: "Другие калькуляторы",
        lede: "Календарный возраст, даты с усечением конца месяца, длительности, средний балл 4,0, взвешенная оценка и перевод единиц.",
        body: `<p>Возраст — это календарный промежуток от даты рождения до выбранной даты: полные годы, затем полные месяцы, затем оставшиеся дни. Общее число дней — это число полуночей в UTC, поэтому перевод часов на летнее время день не добавляет и не убирает. День рождения 29 февраля в невисокосном году добирает следующий полный год 1 марта: это первая дата, в которую годовщина существует. Следующий день рождения считается по тому же правилу.</p>
<p>Страница дат показывает дни от первой даты до второй, число, которое включает обе даты, и тот же промежуток в годах, месяцах и днях. Месяц, прибавленный к 31 января, попадает на последний день февраля, 28 или 29, а не перетекает в март. Сначала применяются годы, потом месяцы, потом дни. Страница времени складывает или вычитает часы, минуты и секунды и умеет мерить промежуток между двумя моментами суток. Если конец раньше начала, отсчёт идёт через полночь, и результат об этом говорит.</p>
<p>Средний балл использует одну распространённую американскую шкалу 4,0: A и A+ равны 4,0, A− равен 3,7, дальше шаги до F, который равен нулю. Вес — кредиты. Страница оценки взвешивает каждый результат введённым весом или единицей, если вес пуст, затем ставит буквам пороги 90, 80, 70 и 60 для A, B, C и D. Перевод единиц берёт точные коэффициенты: 2,54 сантиметра в дюйме, 1,609344 километра в миле, 0,45359237 килограмма в фунте и 3,785411784 литра в американском галлоне. Фаренгейт и Цельсий сходятся на 32 и 212. Длину в вес страница не переводит.</p>`,
        faq: [
          { q: "Возраст в день рождения уже увеличился?", a: "В годовщину число лет растёт, а месяцы и дни становятся нулём. Для рождения 29 февраля в невисокосном году такая годовщина — 1 марта." },
          { q: "Почему 31 января плюс месяц — это конец февраля?", a: "В феврале нет 31-го числа. Страница оставляет день внутри целевого месяца и не переносит его на март." },
          { q: "Чья это шкала среднего балла?", a: "Распространённая шкала 4,0, где A+ не выше 4,0, а A− равен 3,7. Школа с 4,3 за A+ или с другим шагом не совпадёт. На странице написано, какую карту она использует." }
        ]
      }
    },
    security: {
      en: {
        title: "Free Privacy Tools: Passwords, IP Test, EXIF, AES",
        description: "Generate a password, estimate crack time locally, test IP and WebRTC, make an alias address, strip EXIF, and encrypt text with AES-GCM. In the browser.",
        h1: "Privacy and security tools",
        lede: "Generators and checks that keep passwords, photos, and private notes on the device, plus one IP test that says which outside service it calls.",
        body: `<p>The password generator draws from the browser's cryptographic random source. Entropy is the length times the log of the alphabet size, or the word count times the log of the word list. The strength checker uses a smaller estimate and looks for common passwords, repeats, and sequences. It does not upload the password. Treat both numbers as a model of brute force, not as a promise about a leak that has already happened.</p>
<p>The IP page asks ipify and ipwho.is what address they see, and it compares that with addresses gathered from a WebRTC connection to a public STUN server. A page cannot see your DNS resolver. The page says that, instead of pretending to run a DNS test it cannot run. EXIF removal parses a JPEG in the browser and can drop the metadata segments, or you can re-encode through a canvas. AES uses AES-GCM and PBKDF2. If the password is lost, the text is gone. There is no recovery email, because nothing was stored.</p>
<p>The guides compare three VPNs and three password managers in the same spirit: what each product is for, what to verify on the current plan, and what this site did not measure. A VPN does not fix a password you reuse. A password manager does not hide your IP.</p>`,
        faq: [
          { q: "Does the password checker send my password anywhere?", a: "No. The script reads the field locally. You can disconnect and the check still runs." },
          { q: "Will the IP test show my DNS server?", a: "No. A normal web page cannot see that. It can show your public IP and any extra address WebRTC reveals." },
          { q: "Can you decrypt a note if I forget the password?", a: "No. The key never leaves your browser, and we do not keep a copy." }
        ]
      },
      ru: {
        title: "Инструменты приватности: пароли, IP, EXIF, AES",
        description: "Сгенерировать пароль, оценить время перебора локально, проверить IP и WebRTC, собрать псевдоним почты, убрать EXIF и зашифровать текст AES-GCM. В браузере.",
        h1: "Инструменты приватности и безопасности",
        lede: "Генераторы и проверки, которые оставляют пароли, фото и заметки на устройстве, плюс тест IP, где прямо сказано, какую внешнюю службу он вызывает.",
        body: `<p>Генератор паролей берёт случайность из криптографического источника браузера. Энтропия — это длина, умноженная на логарифм размера алфавита, или число слов, умноженное на логарифм списка. Проверка стойкости даёт более грубую оценку и ищет частые пароли, повторы и ряды. Пароль она никуда не отправляет. Оба числа — модель перебора, а не обещание насчёт утечки, которая уже случилась.</p>
<p>Страница IP спрашивает ipify и ipwho.is, какой адрес они видят, и сравнивает его с адресами, которые собрал WebRTC через публичный STUN. Страница не видит ваш DNS-резолвер. Так и написано, вместо имитации проверки, которую страница сделать не может. Снятие EXIF разбирает JPEG в браузере и может выкинуть сегменты метаданных, либо вы перекодируете снимок через canvas. AES здесь — это AES-GCM и PBKDF2. Потеряли пароль — текст потерян. Письма для восстановления нет, потому что копии не хранилось.</p>
<p>Статьи сравнивают три VPN и три менеджера паролей в том же духе: для чего продукт, что проверить в текущем тарифе и чего этот сайт не измерял. VPN не чинит пароль, который вы используете везде. Менеджер паролей не прячет IP.</p>`,
        faq: [
          { q: "Проверка пароля куда-нибудь его отправляет?", a: "Нет. Скрипт читает поле локально. Можно отключить сеть, проверка всё равно сработает." },
          { q: "Тест IP покажет мой DNS-сервер?", a: "Нет. Обычная страница этого не видит. Она показывает публичный IP и лишний адрес, если его выдал WebRTC." },
          { q: "Вы расшифруете заметку, если я забуду пароль?", a: "Нет. Ключ не покидает браузер, и копии у нас нет." }
        ]
      }
    },
    relocation: {
      en: {
        title: "Relocation Calculators: Schengen, Cost of Living, eSIM, Rates",
        description: "Count Schengen 90/180 and days in a year, compare a cost index, plan a meeting across time zones, and price roaming against an eSIM.",
        h1: "Relocation and remote-work calculators",
        lede: "Day counts, a clearly labelled cost index, a time-zone planner, roaming versus eSIM, and a freelance rate that includes tax and days you cannot bill.",
        body: `<p>The stay calculator has two counts. Schengen mode marks each calendar day in your trips once, then asks how many of those days fall in the 180-day window ending on the date you pick. Entry day and exit day both count. A day over 90 is flagged. The year mode counts distinct days inside a calendar year, which is the shape of the 183-day test many countries publish. It is not the US substantial-presence formula, and it is not a reading of a tax treaty. Overlapping trips are not double counted.</p>
<p>The cost page uses a rounded index with New York at 100. The figures are editorial, last reviewed on 19 November 2026, and stored in one file you can edit. They are not rents from a statistical office. A salary in city A is scaled by the ratio of the indexes. The meeting planner converts a clock time in one IANA zone into the others and marks who is inside 09:00 to 17:00. The eSIM page subtracts a package you type from roaming you type. It does not know this week's Airalo price. The freelance page grosses up a net income for tax and business costs, then divides by hours left after vacation, sick days, holidays, and non-billable time.</p>
<p>Insurance and eSIM guides sit next to these tools because a day count does not tell you which policy covers a routine doctor, and a roaming total does not tell you whether your phone accepts an eSIM.</p>`,
        faq: [
          { q: "Does 90 days in this tool mean I can enter?", a: "It means the days you listed are under or over 90 in that window. Border rules, visas, and previous stays you forgot to list are outside the form." },
          { q: "Where do the cost indexes come from?", a: "They are rounded editorial comparisons, New York = 100, reviewed 19 November 2026. The file assets/js/cost-of-living.js is the source. They are not an official price survey." },
          { q: "Does the freelance rate include income tax?", a: "It grosses up by the tax percent you type. It does not know your brackets, your country's social contributions, or what you can deduct." }
        ]
      },
      ru: {
        title: "Калькуляторы переезда: Шенген, жизнь, eSIM, ставка",
        description: "Посчитать 90/180 Шенгена и дни в году, сравнить индекс цен, спланировать созвон по поясам и сравнить роуминг с eSIM.",
        h1: "Калькуляторы переезда и удалённой работы",
        lede: "Подсчёт дней, индекс цен с ясной оговоркой, планировщик поясов, роуминг против eSIM и ставка фрилансера с налогом и неоплачиваемыми днями.",
        body: `<p>У калькулятора пребывания два режима. Шенген отмечает каждый календарный день поездок один раз и считает, сколько из них попало в окно 180 дней, которое кончается выбранной датой. День въезда и день выезда оба входят. День сверх 90 помечается. Режим года считает разные дни внутри календарного года — так устроен тест 183 дней, который публикуют многие страны. Это не американская формула substantial presence и не чтение налогового соглашения. Перекрывающиеся поездки дважды не считаются.</p>
<p>Страница стоимости использует округлённый индекс, где Нью-Йорк равен 100. Цифры редакторские, сверка 19 ноября 2026 года, лежат в одном файле, который можно поправить. Это не аренда из статслужбы. Зарплата в городе A масштабируется отношением индексов. Планировщик переводит время одних часов в зоне IANA в остальные и отмечает, кто внутри 09:00–17:00. Страница eSIM вычитает пакет, который вы ввели, из роуминга, который вы ввели. Цены Airalo на эту неделю она не знает. Страница фриланса наращивает чистый доход на налог и расходы бизнеса, затем делит на часы, которые остались после отпуска, больничных, праздников и неоплачиваемой доли.</p>
<p>Статьи про страховку и eSIM стоят рядом, потому что подсчёт дней не говорит, какой полис покрывает обычного врача, а сумма роуминга не говорит, принимает ли телефон eSIM.</p>`,
        faq: [
          { q: "Если тут меньше 90 дней, меня пустят?", a: "Это значит, что перечисленные дни ниже или выше 90 в этом окне. Правила границы, виза и поездки, которые вы забыли внести, в форме не участвуют." },
          { q: "Откуда индексы стоимости?", a: "Это округлённые редакторские сравнения, Нью-Йорк = 100, сверка 19 ноября 2026. Источник — файл assets/js/cost-of-living.js. Это не официальное исследование цен." },
          { q: "Ставка фрилансера включает подоходный налог?", a: "Она наращивает сумму на тот процент налога, который вы ввели. Шкалу вашей страны, социальные взносы и вычеты она не знает." }
        ]
      }
    },
    webmaster: {
      en: {
        title: "Free Webmaster Tools: SEO, Meta Tags, Speed, Contrast",
        description: "Token cost, word count, meta tags, robots.txt, image compression, UTM and QR, ROAS, contrast, and a privacy-policy draft. Free and local.",
        h1: "Webmaster and content tools",
        lede: "Checks and generators for a page you are about to publish: text, tags, files, colour, ad maths, and a policy draft you still have to read.",
        body: `<p>The token calculator multiplies tokens by prices you can edit. The starter table is a placeholder dated in the price file, not a quote from a lab. The text tool counts words, characters, sentences, reading time at 200 words a minute, and keyword density as hits times words in the phrase, divided by all words. The meta tool writes title, description, Open Graph, Twitter, and a small JSON-LD block, and it warns when the title or description is long enough to be cut.</p>
<p>Page-speed revenue is a model, not a measurement. You type visits, the conversion you have now, revenue per conversion, and how much of that conversion you assume each extra second removes. Robots and sitemap text is generated from paths you list. Image compression redraws the bitmap on a canvas and never uploads it. UTM builds a query string and a QR code, with optional logo space covered by high error correction. JSON, CSV, and SQL are formatted locally. ROAS, margin, contrast, and the pixel converter are pure arithmetic. The policy generator writes a draft from checkboxes. It tells you to delete any sentence that is not true.</p>
<p>Hosting and SEO guides sit beside the speed and text tools. They describe how the products differ. They do not publish a benchmark from a test we did not run.</p>`,
        faq: [
          { q: "Are the model prices current?", a: "No. They are editable placeholders. The file assets/js/llm-prices.js says when they were filled in. Replace them from the vendor's page." },
          { q: "Does image compression upload my file?", a: "No. The browser resizes and encodes it. The download is produced locally." },
          { q: "Is the privacy policy legally sufficient?", a: "It is a draft that matches the boxes you tick. It is not a legal opinion. Read it and remove anything your site does not do." }
        ]
      },
      ru: {
        title: "Инструменты вебмастера: SEO, мета-теги, скорость, контраст",
        description: "Цена токенов, счётчик слов, мета-теги, robots.txt, сжатие картинок, UTM и QR, ROAS, контраст и черновик политики. Бесплатно и локально.",
        h1: "Инструменты вебмастера и контента",
        lede: "Проверки и генераторы для страницы, которую вы собираетесь опубликовать: текст, теги, файлы, цвет, арифметика рекламы и черновик политики, который всё равно надо прочитать.",
        body: `<p>Калькулятор токенов умножает токены на цены, которые можно поправить. Стартовая таблица — заглушка с датой в файле цен, а не котировка лаборатории. Инструмент текста считает слова, знаки, предложения, время чтения из расчёта 200 слов в минуту и плотность ключа как число вхождений, умноженное на слова во фразе и делённое на все слова. Генератор мета-тегов пишет title, description, Open Graph, Twitter и небольшой блок JSON-LD и предупреждает, если заголовок или описание достаточно длинные, чтобы их обрезали.</p>
<p>Потери от скорости — модель, не замер. Вы вводите визиты, нынешнюю конверсию, выручку с конверсии и долю конверсии, которую, по вашему допущению, забирает лишняя секунда. Текст robots и sitemap собирается из путей, которые вы перечислили. Сжатие картинки перерисовывает её на canvas и никуда не загружает. UTM собирает query и QR, место под логотип закрыто высоким уровнем коррекции. JSON, CSV и SQL форматируются локально. ROAS, маржа, контраст и перевод пикселей — чистая арифметика. Генератор политики пишет черновик по галочкам. Он просит вычеркнуть любое предложение, которое неправда.</p>
<p>Статьи про хостинг и SEO стоят рядом с инструментами скорости и текста. Они описывают, чем продукты отличаются. Там нет бенчмарка, которого мы не проводили.</p>`,
        faq: [
          { q: "Цены моделей актуальные?", a: "Нет. Это заглушки, которые можно править. В файле assets/js/llm-prices.js написано, когда их заполнили. Подставьте цифры со страницы вендора." },
          { q: "Сжатие картинки загружает файл?", a: "Нет. Браузер меняет размер и кодирует сам. Файл для скачивания появляется локально." },
          { q: "Политики конфиденциальности достаточно юридически?", a: "Это черновик под те галочки, которые вы поставили. Это не юридическое заключение. Прочитайте и уберите всё, чего ваш сайт не делает." }
        ]
      }
    }
  },
  blog: {
    en: {
      title: "Guides: VPNs, Brokers, Wallets, Hosting, and eSIMs",
      description: "Comparisons and reviews that explain how to choose a VPN, a password manager, nomad insurance, a broker, an exchange, a hardware wallet, an SEO suite, an eSIM, and a host.",
      h1: "Guides",
      lede: "Longer reads that sit next to the calculators. They compare products without inventing a price that would be wrong next month."
    },
    ru: {
      title: "Статьи: VPN, брокеры, кошельки, хостинг и eSIM",
      description: "Сравнения и обзоры: как выбирать VPN, менеджер паролей, страховку кочевника, брокера, биржу, аппаратный кошелёк, SEO-сервис, eSIM и хостинг.",
      h1: "Статьи",
      lede: "Длинные тексты рядом с калькуляторами. Они сравнивают продукты и не выдумывают цену, которая через месяц будет неверной."
    }
  },
  about: {
    en: {
      title: "About these free calculators",
      description: "Who publishes the free calculators, how the arithmetic stays in the browser, and how affiliate links are labelled.",
      h1: "About",
      body: `<p>Free Online Calculators is a static site of tools for money, privacy, relocation, and web work. It is published by Anna, who also publishes <a href="https://mycytax.com/">MyCyTax</a>, a separate site about Cyprus property and tax. The two sites do not share a database. This one has no database.</p>
<p>Each calculator is a page with one job. The formula is on the page. The numbers are checked against known cases in the repository tests: compound growth, a 90-day Schengen window, margin versus markup, contrast of black on white, and an AES round trip. If a result looks wrong, the useful next step is the formula on the page, not a second opinion from the same script.</p>
<p>Affiliate links pay for the time spent on the site if a partner pays a commission. They are labelled on the page and collected in <a href="{{href:affiliate-disclosure}}">the disclosure</a>. The partner address itself lives only in <code>assets/js/affiliates.js</code>. The pages are rebuilt from that file. A name without a live URL is not a button.</p>
<p>Corrections to a formula or a translation can be sent as an issue on the GitHub repository anlap26/free-online-calculators. The site does not offer personal financial, tax, legal, or immigration advice.</p>`
    },
    ru: {
      title: "О сайте бесплатных калькуляторов",
      description: "Кто издаёт бесплатные калькуляторы, почему арифметика остаётся в браузере и как помечены партнёрские ссылки.",
      h1: "О сайте",
      body: `<p>Бесплатные онлайн-калькуляторы — статический сайт инструментов про деньги, приватность, переезд и веб. Его издаёт Анна, она же издаёт <a href="https://mycytax.com/">MyCyTax</a>, отдельный сайт про недвижимость и налоги Кипра. Общей базы у сайтов нет. У этого сайта базы нет вообще.</p>
<p>У каждого калькулятора одна задача. Формула написана на странице. Числа сверены с известными случаями в тестах репозитория: сложный процент, шенгенское окно в 90 дней, маржа против наценки, контраст чёрного на белом и круг шифрования AES. Если результат кажется неверным, полезный следующий шаг — формула на странице, а не второе мнение того же скрипта.</p>
<p>Партнёрские ссылки оплачивают время на сайт, если партнёр платит комиссию. Они помечены на странице и собраны в <a href="{{href:affiliate-disclosure}}">раскрытии</a>. Сам адрес партнёра живёт только в файле <code>assets/js/affiliates.js</code>. Страницы собираются из этого файла. Имя без живого адреса кнопкой не становится.</p>
<p>Поправку к формуле или к переводу можно прислать issue в репозиторий GitHub anlap26/free-online-calculators. Персональных финансовых, налоговых, юридических или визовых консультаций сайт не даёт.</p>`
    }
  },
  privacy: {
    en: {
      title: "Privacy policy",
      description: "What this static calculator site does with your browser, what it does not store, and which third parties an IP test calls.",
      h1: "Privacy policy",
      body: `<p>This policy describes the site Free Online Calculators, published at ${"https://anlap26.github.io/Free-online-calculators/"} by Anna. It is a description of how the site is built. It is not a template for your own business. If you need a policy for a different site, use the <a href="{{href:privacy-policy-generator}}">policy draft generator</a> and then have it read by someone who knows your facts.</p>
<h2>What the site stores</h2>
<p>The site is a set of files. There is no account, no newsletter form, and no database of visitors. Numbers, passwords, notes, and photos you use in a calculator stay in the page. The password strength check, the password generator, AES encryption, EXIF removal, and image compression do not send those inputs to us. We do not set an analytics cookie and we do not run an advertising network on these pages.</p>
<h2>The IP test</h2>
<p>The page <a href="{{href:ip-leak-test}}">My IP and WebRTC test</a> is different. When you press the button, your browser asks api.ipify.org for an IP address, asks ipwho.is for a coarse place and network name, and opens a WebRTC connection that uses Google's public STUN server to gather candidate addresses. Those organisations see the request a browser normally sends, including the IP. We do not receive a copy. If you do not press the button, those calls are not made.</p>
<h2>Affiliate links</h2>
<p>Some links leave this site for a partner. The partner can tell that the visit came from an affiliate link and may set its own cookies on its own site. That is described on the <a href="{{href:affiliate-disclosure}}">affiliate disclosure</a>. We do not receive your account details at the partner.</p>
<h2>GitHub Pages and the repository</h2>
<p>The files are hosted on GitHub Pages. GitHub processes the request that delivers the file, under GitHub's own terms. The source is in a public repository. Do not send secrets in an issue.</p>
<h2>Contact</h2>
<p>There is no contact form. A correction can be filed as a GitHub issue on anlap26/free-online-calculators. This policy was written on 19 November 2026.</p>`
    },
    ru: {
      title: "Политика конфиденциальности",
      description: "Что статический сайт калькуляторов делает в браузере, чего он не хранит и какие сторонние службы вызывает проверка IP.",
      h1: "Политика конфиденциальности",
      body: `<p>Эта политика описывает сайт «Бесплатные онлайн-калькуляторы» по адресу https://anlap26.github.io/Free-online-calculators/, издатель — Анна. Это описание того, как устроен этот сайт. Это не шаблон для вашего бизнеса. Если политика нужна другому сайту, соберите черновик в <a href="{{href:privacy-policy-generator}}">генераторе</a> и дайте его прочитать тому, кто знает ваши факты.</p>
<h2>Что сайт хранит</h2>
<p>Сайт — набор файлов. Аккаунта, формы рассылки и базы посетителей нет. Числа, пароли, заметки и фото в калькуляторе остаются на странице. Проверка стойкости, генератор паролей, шифрование AES, снятие EXIF и сжатие картинок не отправляют эти данные нам. Аналитическую cookie мы не ставим и рекламную сеть на этих страницах не запускаем.</p>
<h2>Проверка IP</h2>
<p>Страница <a href="{{href:ip-leak-test}}">проверки IP и WebRTC</a> устроена иначе. Когда вы нажимаете кнопку, браузер спрашивает у api.ipify.org адрес, у ipwho.is — грубое место и название сети, и открывает WebRTC-соединение с публичным STUN-сервером Google, чтобы собрать адреса кандидатов. Эти организации видят обычный запрос браузера, включая IP. Копию нам не присылают. Если кнопку не нажимать, этих вызовов нет.</p>
<h2>Партнёрские ссылки</h2>
<p>Некоторые ссылки уводят с сайта к партнёру. Партнёр может понять, что визит пришёл по партнёрской ссылке, и поставить свою cookie уже у себя. Это описано на странице <a href="{{href:affiliate-disclosure}}">раскрытия партнёрских ссылок</a>. Данные вашего счёта у партнёра мы не получаем.</p>
<h2>GitHub Pages и репозиторий</h2>
<p>Файлы отдаёт GitHub Pages. GitHub обрабатывает запрос, которым приходит файл, по своим правилам. Исходный код лежит в публичном репозитории. Не присылайте секреты в issue.</p>
<h2>Контакт</h2>
<p>Формы обратной связи нет. Поправку можно оформить issue в GitHub, репозиторий anlap26/free-online-calculators. Текст написан 19 ноября 2026 года.</p>`
    }
  },
  disclosure: {
    en: {
      title: "Affiliate disclosure",
      description: "How affiliate links work on this calculator site, which partners are linked, and how the links are marked.",
      h1: "Affiliate disclosure",
      body: `<p>Some pages link to a company that may pay the publisher a commission if you open an account, buy a plan, or use a tracked link. You should not pay more because the link is an affiliate link. If a partner's checkout adds a fee, that fee is theirs, not a mark-up added by this site. The calculators do not change a result because a link is present.</p>
<h2>Where the links are</h2>
<p>Partner buttons and in-article partner links read <code>assets/js/affiliates.js</code>. The live names are Airalo, Aviasales, Klook, and Tiqets, on travel, currency, and trip-cost pages, plus Amazon.de searches. Localrent, Kiwitaxi, and Welcome Pickups are stored for a page that is clearly about Cyprus. No current page is, so those three are not shown. A guide may still name a VPN, a password manager, a broker, an exchange, a wallet, an SEO suite, or a host. That name is not a button unless the file has a live URL. Links open in a new tab with <code>rel="sponsored nofollow noopener"</code>.</p>
<p>As an Amazon Associate I earn from qualifying purchases. Those links are searches on Amazon.de with the tag in <code>assets/js/affiliates.js</code>. They are not links to a made-up product code.</p>
<h2>What we will and will not claim</h2>
<p>Guides describe what a product is for and what a buyer should verify. They do not invent a price, a speed ranking, a customer count, or a medical outcome. Plans change. A product may be unavailable where you live. A VPN does not make a person anonymous in every sense. A hardware wallet does not help if the recovery phrase is stored in a screenshot. Insurance pages are not a policy and not a promise that a claim will be paid.</p>
<h2>If you are a partner or a reader</h2>
<p>A partner relationship does not buy a changed formula. If a sentence on a guide is wrong, the correction path is a GitHub issue on anlap26/free-online-calculators. This note was written on 19 November 2026.</p>`
    },
    ru: {
      title: "Раскрытие партнёрских ссылок",
      description: "Как на сайте калькуляторов устроены партнёрские ссылки, какие партнёры стоят на страницах и как ссылки помечены.",
      h1: "Партнёрские ссылки",
      body: `<p>На части страниц есть ссылки на компании, которые могут заплатить издателю комиссию, если вы откроете счёт, купите тариф или пройдёте по отслеживаемой ссылке. Из-за того, что ссылка партнёрская, вы не должны платить больше. Если на стороне партнёра к оплате добавляется сбор, это его сбор, а не наценка этого сайта. Калькуляторы не меняют результат из-за того, что ссылка стоит рядом.</p>
<h2>Где лежат ссылки</h2>
<p>Кнопки партнёров и партнёрские ссылки в тексте читают файл <code>assets/js/affiliates.js</code>. Живые имена — Airalo, Aviasales, Klook и Tiqets на страницах про поездку, валюту и стоимость поездки, плюс поиск на Amazon.de. Localrent, Kiwitaxi и Welcome Pickups хранятся для страницы, которая явно про Кипр. Такой страницы сейчас нет, поэтому эти три имени не показываются. Статья может по-прежнему называть VPN, менеджер паролей, брокера, биржу, кошелёк, SEO-сервис или хостинг. Это имя не кнопка, пока в файле нет живого адреса. Ссылки открываются в новой вкладке с <code>rel="sponsored nofollow noopener"</code>.</p>
<p>Как участник программы Amazon Associates я получаю доход от соответствующих покупок. As an Amazon Associate I earn from qualifying purchases. Эти ссылки ведут на поиск на Amazon.de с меткой из <code>assets/js/affiliates.js</code>, а не на выдуманный код товара.</p>
<h2>Чего сайт не утверждает</h2>
<p>Статьи описывают, для чего продукт и что покупателю проверить. Они не выдумывают цену, рейтинг скорости, число клиентов или медицинский исход. Тарифы меняются. Продукт может быть недоступен там, где вы живёте. VPN не делает человека анонимным во всех смыслах. Аппаратный кошелёк не поможет, если фразу восстановления положили в скриншот. Страницы про страховку — не полис и не обещание, что выплату одобрят.</p>
<h2>Если вы партнёр или читатель</h2>
<p>Партнёрство не покупает другую формулу. Если фраза в статье неверна, путь исправления — issue в GitHub, репозиторий anlap26/free-online-calculators. Текст написан 19 ноября 2026 года.</p>`
    }
  }
};
