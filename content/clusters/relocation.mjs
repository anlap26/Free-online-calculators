export const relocationTools = [
  {
    slug: "schengen-stay-calculator",
    cluster: "relocation",
    calc: "schengen",
    category: "TravelApplication",
    affiliate: "genki",
    related: ["cost-of-living-calculator", "world-time-meeting-planner", "roaming-esim-calculator", "business-days-calculator"],
    guide: "genki-nomad-insurance",
    en: {
      title: "Schengen Stay Calculator: 90 Days in 180 | Free Online Calculators",
      description: "Count each calendar day once inside a rolling 180-day Schengen window, and count distinct days in one calendar year. Entry and exit both count.",
      h1: "Schengen 90/180 and days-in-a-year calculator",
      lede: "Each calendar day is stored once. Schengen mode counts the chosen day plus the previous 179 days and compares that with 90. Year mode counts distinct days in the year you pick.",
      banner: "A day count or an index is a planning aid. It is not a visa, a tax ruling, an insurance policy, or a quote.",
      ctaTitle: "A day count does not cover a doctor",
      ctaBody: "The number on this page does not say whether a nomad policy pays for a routine visit. The guide walks through what to read in a Genki plan. This page does not quote a premium.",
      ctaButton: "Open Genki",
      body: `<p>This calculator stores every calendar day of the trips you list, and it stores each day only once. If two trips share a date, that date is not added twice, and the order of the rows does not matter. Schengen mode looks at a rolling window and compares the days inside it with 90. Year mode counts the distinct days of those trips that fall in the calendar year you name. Both numbers are a planning aid. A border decision, a visa, and a tax office sit outside the form.</p>
<h2>The 180-day window</h2>
<p>The Schengen window is the day you choose plus the previous 179 days. That span is 180 days, and the chosen day is included. The page counts how many stored dates fall inside the span and sets the count beside 90. A stay from 1 January 2026 through 31 March 2026 is 90 days. The year 2026 is not a leap year: January has 31 days, February has 28, and March has 31. On 31 March every one of those days is inside the window, so the window is full, and it has not gone over. If the same stay continues and 1 April is also a day present, the count becomes 91, and 91 is over the line.</p>
<p>Entry and exit both count. A trip from Monday through Wednesday is three calendar days, even if the hotel was two nights. Weekends and public holidays count, and there is no switch that drops Saturday. If the end date is earlier than the start, the row is rejected. Weekdays between two dates belong on the <a href="{{href:business-days-calculator}}">business days calculator</a>.</p>
<p>Change the date you count from and the window moves. A day that leaves the last 180 days stops adding to the Schengen figure, but it stays in the list. The distinct-day total is the size of the whole list. The form does not know the country of a date. A typed trip is stored even when it was outside the area you meant, and a weekend you forget is simply absent.</p>
<h2>One calendar year, and the figure 183</h2>
<p>Year mode ignores the rolling window. It counts distinct days of the trips that fall in the chosen calendar year, and it compares the count with 183. A stay from 1 January 2026 through 2 July 2026 is 183 days: 31 in January, 28 in February, 31 in March, 30 in April, 31 in May, 30 in June, and 2 in July. A trip that crosses New Year keeps only the dates inside the chosen year. The number 183 is a figure many countries publish for a long stay. The rule that applies to a person can differ.</p>
<p>This is not the US substantial presence test, which weights days and looks across more than the single year on the form. This page counts a day in the chosen year as one day. It is not a tax-treaty tie-break. A treaty looks at home, family, and other facts the form never asks.</p>
<h2>How to read the result</h2>
<ul>
<li>Include the day you enter and the day you leave. Both ends are dates in the list.</li>
<li>Overlapping dates stay as one day. The distinct total is the list before the window cuts it.</li>
<li>Change the count-on date to slide the 180-day window. The year field is used only in year mode.</li>
<li>A count of 90 or under is not permission to enter or to work. Stays you left out are outside the arithmetic.</li>
<li>A count of 183 is the comparison year mode prints. It is not a finding of tax residence.</li>
</ul>
<p>Days are only part of a long stay. The <a href="{{href:cost-of-living-calculator}}">cost of living calculator</a> scales a salary by a rounded city index. The <a href="{{href:world-time-meeting-planner}}">world time meeting planner</a> converts a clock time with IANA zones for the date of the call. The <a href="{{href:roaming-esim-calculator}}">roaming and eSIM calculator</a> compares a daily roaming price with a package, using numbers you type. None of them edits the day count.</p>
<p>A day count does not tell you whether a nomad policy covers a routine doctor. <a href="{{aff:genki}}">Genki</a> is the medical name linked here, and the <a href="{{href:blog/genki-nomad-insurance}}">Genki guide</a> sets out what to read in a plan. It does not quote a premium, and this page will not invent one. Open the current wording for the country you will actually be in, and read routine care separately from emergency care. The button is an affiliate link. The arithmetic does not change because it is there.</p>`,
      faq: [
        {
          q: "Do the entry day and the exit day both count?",
          a: "Yes. The first date and the last date of every trip are stored. A stay that starts on Monday and ends on Wednesday is three calendar days, even if the hotel charged you for two nights. If you type only the nights and leave the departure morning out, the list is short by that date. The form will not guess a missing day. Put both ends in before you rely on the total."
        },
        {
          q: "What happens when two trips overlap?",
          a: "The shared dates are kept once. Two rows that both include 12 March add a single 12 March, so the overlap is not double counted. The distinct-day total is the size of that set. Schengen mode then asks how many of those dates sit inside the 180-day window ending on the day you chose. Adding the same weekend twice does not push the count over 90. Leaving a trip out means those dates are absent."
        },
        {
          q: "Is 183 days on this page the US substantial presence test?",
          a: "No. Year mode counts each distinct day in the chosen calendar year as one day and compares the total with 183. The US substantial presence test weights days and uses more than one year. This form does not apply those weights. The figure 183 is one many countries publish, and the rule for a given person can differ. The page is also not a tax-treaty tie-break. Take the day list to the rule that covers you."
        },
        {
          q: "Does a result under 90 mean I can enter?",
          a: "It means the dates you listed are under 90 in that window, or not. Permission to enter or to work is a separate decision. The form does not see the visa in a passport or the stamps you forgot to type. On 31 March 2026 a stay from 1 January is full, at 90, and the next day of a continued stay is 91. Read the count as arithmetic, then check the rule that applies to you."
        },
        {
          q: "Does the day count tell me if a policy covers a routine doctor?",
          a: "No. Presence days and medical cover are different questions. A nomad policy may or may not pay for a routine visit, and the answer is in the current plan, not in a day total. The guide is about what to read in a Genki plan. This page does not quote a premium or an exclusion, because those change. Open the plan for the country you will actually be in and read routine care on its own."
        }
      ]
    },
    ru: {
      title: "Калькулятор дней в Шенгене: 90 из 180 | Бесплатные калькуляторы",
      description: "Посчитать каждый календарный день один раз в скользящем окне Шенгена на 180 дней и дни выбранного календарного года. День въезда и день выезда входят.",
      h1: "Калькулятор шенгенских дней и дней в году",
      lede: "Каждый календарный день хранится один раз. Режим Шенгена считает выбранный день и 179 дней до него и сравнивает сумму с 90. Режим года считает разные дни в выбранном году.",
      banner: "Подсчёт дней и индекс нужны для плана. Это не виза, не налоговое решение, не страховой полис и не котировка.",
      ctaTitle: "Подсчёт дней не покрывает врача",
      ctaBody: "Число на этой странице не говорит, оплатит ли полис обычный визит к врачу. Статья разбирает, что читать в плане Genki. Читайте текущий текст полиса. Премию эта страница не называет.",
      ctaButton: "Открыть Genki",
      body: `<p>Калькулятор запоминает каждый календарный день поездок, которые вы внесли, и каждый день хранит один раз. Если две поездки делят одну дату, эта дата не прибавляется дважды. Подсчёта два. Режим Шенгена смотрит на скользящее окно и сравнивает дни внутри него с 90. Режим года считает разные дни тех же поездок, которые попали в названный вами календарный год. Оба числа нужны для плана до брони. Решение на границе, виза и налоговая остаются снаружи формы.</p>
<h2>Окно в 180 дней</h2>
<p>Окно Шенгена — это выбранный день плюс 179 дней до него. В промежутке 180 дней, и сам выбранный день внутрь входит. Страница считает, сколько сохранённых дат лежит в этом промежутке, и ставит сумму рядом с 90. Пребывание с 1 января 2026 года по 31 марта 2026 года — это 90 дней. 2026 год не високосный: в январе 31 день, в феврале 28, в марте 31. Вместе это 31 плюс 28 плюс 31. На 31 марта все эти дни внутри окна, окно полное, и через черту ещё не перешло. Если то же пребывание продолжается и 1 апреля тоже день присутствия, сумма становится 91, а 91 — уже сверх.</p>
<p>День въезда и день выезда оба считаются. Поездка с понедельника по среду — это три календарных дня, даже если гостиница взяла деньги за две ночи. Суббота и воскресенье входят. Праздник входит. Выключателя, который выбрасывает субботу, нет: здесь считают календарные дни. Если дата конца раньше даты начала, строка отклоняется. Будни между двумя датами для договора считает <a href="{{href:business-days-calculator}}">калькулятор рабочих дней</a>. Это другой вопрос, и в эту форму он ничего не подставляет.</p>
<p>Сдвиньте дату, на которую считаете, и окно сдвинется вместе с ней. День, который вышел из последних 180 дней, перестаёт добавляться к шенгенской сумме, но в списке остаётся. Общее число разных дней — это размер всего списка, а не размер окна. Форма не знает, в какой стране прошёл день. Внесённая поездка сохраняется независимо от того, в той ли зоне вы её имели в виду. Забытые выходные просто отсутствуют. Сначала соберите список, потом читайте арифметику по этому списку.</p>
<h2>Один календарный год и число 183</h2>
<p>Режим года не смотрит на скользящее окно. Он считает разные дни поездок, которые попали в выбранный календарный год, и сравнивает сумму со 183. Пребывание с 1 января 2026 года по 2 июля 2026 года — это 183 дня: 31 в январе, 28 в феврале, 31 в марте, 30 в апреле, 31 в мае, 30 в июне и 2 в июле. Поездка, которая началась в декабре и кончилась в январе, режется по году. В новый год входят только январские даты. Число 183 публикуют многие страны, когда говорят о долгом пребывании. Правило, которое относится к конкретному человеку, может быть другим: из-за гражданства, визы и текста, который действует в этом году.</p>
<p>Это не американский тест substantial presence: там дни взвешиваются, и смотрят больше чем на один год в форме. Здесь день выбранного года считается как один день. Это и не выбор страны по налоговому соглашению, когда человека формально касаются правила двух стран. Соглашение смотрит на дом, семью и другие факты, о которых форма не спрашивает. Оставьте распечатку списком дней. Налоговый вопрос отдайте тому правилу, которое вас действительно покрывает.</p>
<h2>Как читать результат</h2>
<ul>
<li>Включайте день въезда и день выезда. Оба конца — настоящие даты в списке.</li>
<li>Перекрывающиеся даты остаются одним днём. Общая сумма разных дней показывает список до того, как окно его обрежет.</li>
<li>Меняйте дату подсчёта, чтобы сдвинуть окно в 180 дней. Поле года работает только в режиме года.</li>
<li>Сумма 90 или меньше — это не разрешение въехать, продлиться или работать. Поездки, которые вы не внесли, в арифметике не участвуют.</li>
<li>Сумма 183 — это не вывод о налоговом резидентстве. Это сравнение, которое печатает режим года.</li>
</ul>
<p>Соседние страницы закрывают практические вопросы, которые едут вместе с долгим пребыванием. <a href="{{href:cost-of-living-calculator}}">Калькулятор стоимости жизни</a> масштабирует зарплату округлённым индексом городов. <a href="{{href:world-time-meeting-planner}}">Планировщик созвонов</a> переводит время через пояса IANA на дату звонка. <a href="{{href:roaming-esim-calculator}}">Калькулятор роуминга и eSIM</a> сравнивает дневную цену роуминга с пакетом и берёт только те числа, которые вы ввели. Ни одна из этих страниц не правит подсчёт дней.</p>
<p>Подсчёт дней не говорит, покрывает ли полис для жизни в разъездах обычный визит к врачу. Медицинское имя на этой странице — <a href="{{aff:genki}}">Genki</a>, а <a href="{{href:blog/genki-nomad-insurance}}">статья про Genki</a> разбирает, что читать в плане. Премию статья не называет, и эта страница её не выдумает. Премии, исключения и срок покрытия меняются и зависят от страны, в которой вы реально будете. Откройте текущий текст и прочитайте обычную помощь отдельно от неотложной. Кнопка — партнёрская ссылка. Арифметика из-за неё не меняется.</p>`,
      faq: [
        {
          q: "День въезда и день выезда оба входят в сумму?",
          a: "Да. Первая и последняя дата каждой поездки сохраняются. Пребывание с понедельника по среду — это три календарных дня, даже если гостиница взяла оплату за две ночи. Если внести только ночи и забыть утро отъезда, в списке не хватит этой даты. Форма не догадается, какой день вы пропустили. Поставьте оба конца, а потом читайте сумму как число тех дат, которые вы сами вписали."
        },
        {
          q: "Что будет, если две поездки пересекаются?",
          a: "Общие даты хранятся один раз. Две строки, в которых есть 12 марта, добавляют в набор одно 12 марта, поэтому пересечение не удваивается. Общее число разных дней — это размер такого набора. Режим Шенгена затем спрашивает, сколько из этих дат попало в окно 180 дней, которое кончается выбранным днём. Один и тот же уик-энд в двух строках не толкает сумму за 90. Забытая поездка делает обратное: её дат в наборе просто нет."
        },
        {
          q: "183 дня на этой странице — это американский substantial presence?",
          a: "Нет. Режим года считает каждый разный день выбранного календарного года как один и сравнивает сумму со 183. Американский тест substantial presence дни взвешивает и берёт больше одного года. Эти веса форма не применяет. Число 183 публикуют многие страны, а правило для конкретного человека может отличаться. Страница также не выбирает страну по налоговому соглашению. Отнесите список дней к тому правилу, которое относится к вам."
        },
        {
          q: "Если вышло меньше 90, меня пустят?",
          a: "Это значит, что перечисленные даты в этом окне ниже 90 или не ниже. Разрешение въехать, продлить пребывание или работать — отдельное решение. Форма не видит визу в паспорте, штампы, которые вы забыли внести, и правило, которое изменилось после того, как страница была написана. 31 марта 2026 года пребывание с 1 января полное: ровно 90. Следующий день продолжения — уже 91. Читайте сумму как арифметику и проверьте правило, которое относится к вам."
        },
        {
          q: "Подсчёт дней говорит, оплатит ли полис обычного врача?",
          a: "Нет. Дни присутствия и медицинское покрытие — разные вопросы. Полис для жизни в разъездах может оплатить обычный визит, а может не оплатить, и ответ лежит в текущем тексте плана, а не в сумме дней. Статья разбирает, что читать в плане Genki. Премию, лимит и исключение эта страница не называет: они меняются, а выдуманная цифра была бы ложной котировкой. Откройте план той страны, где вы реально будете, и прочитайте обычную помощь отдельно."
        }
      ]
    }
  },
  {
    slug: "cost-of-living-calculator",
    cluster: "relocation",
    calc: "col",
    category: "TravelApplication",
    affiliate: "genki",
    related: ["inflation-calculator", "freelance-rate-calculator", "schengen-stay-calculator", "fire-calculator"],
    guide: "genki-nomad-insurance",
    en: {
      title: "Cost of Living Calculator for Two Cities | Free Online Calculators",
      description: "Scale a salary between cities with a rounded editorial index, New York at 100, last reviewed 19 November 2026. This is not an official rent survey.",
      h1: "Cost of living calculator",
      lede: "A rounded editorial index, New York at 100, scales a salary from one city to another. The figures were last reviewed on 19 November 2026. They are not official rents.",
      banner: "A day count or an index is a planning aid. It is not a visa, a tax ruling, an insurance policy, or a quote.",
      ctaTitle: "Healthcare sits outside the index",
      ctaBody: "The basket does not price a doctor. A nomad medical plan is a separate document from a city index. The guide says what to read in a Genki plan, and it does not quote a premium.",
      ctaButton: "Open Genki",
      body: `<p>The cost of living calculator scales a salary from one city to another with a rounded editorial index. New York is 100. The figures were last reviewed on 19 November 2026, and they live in assets/js/cost-of-living.js. This is not an official rent survey. It is not a set of Numbeo numbers, and nothing on the page was scraped from Numbeo. The same file holds further cities beyond the examples named here. When you have a source you trust, edit the file and replace the number. Update the review note in that file too, so the date on the page stays true.</p>
<h2>The index, and the salary it scales</h2>
<p>Equivalent salary equals the salary you type, multiplied by the second index, divided by the first. In symbols, salary times index B, divided by index A. A salary of 4000 at index 100 versus index 68 is 2720, because 4000 times 68 divided by 100 is 2720. That 2720 is the pay in the second city that sits on the same place in the index. It is not a job offer, and it is not what a landlord will put in an advert. The page also divides the same salary by each index, so you can see one sum against each city's points. At 4000 and 100 that is 40 per point. The salary is in one currency for both cities. The index does not convert money. If the two places would pay you in different currencies, convert first, with a rate you choose, and then scale.</p>
<p>The file describes the basket as a mix of rent, food, and local transport. The scaling moves that whole basket. It does not price a specific flat. A two-room place near a metro and a room an hour out can sit far apart while the city still has one index. Rent can diverge from the basket. A city can be moderate on food and transport and tight on housing, or the other way round. One advert you saved is evidence about that flat. It is not a correction of the index until you decide to edit the file.</p>
<ul>
<li>New York is 100, the base of the index.</li>
<li>London is 90. Singapore is 85. Dubai is 78.</li>
<li>Limassol is 70. Berlin is 68. Lisbon is 64.</li>
<li>Bangkok is 42. Tbilisi is 38.</li>
<li>Same index in both cities means the scaled salary equals the salary you typed.</li>
</ul>
<h2>What the index leaves out</h2>
<p>Tax is not applied. If you type a gross figure, the scaled figure is gross in the same sense. If you type a net figure, the scaled figure is net. The ratio does not know your bracket. A paycheck after tax, pension, and local contributions is a different sum, and this form will not invent those rates. The <a href="{{href:freelance-rate-calculator}}">freelance rate calculator</a> is the page that grosses up a target net for a tax percent you type yourself. It still does not look up a national table.</p>
<p>Price change over time is a different tool. The <a href="{{href:inflation-calculator}}">inflation calculator</a> applies a rate to a currency across years. This index compares two places on one reviewed date. A salary can look comfortable after you move it to a lower index and still buy less later if the currency you are paid in loses purchasing power. Keep the two questions apart. The <a href="{{href:fire-calculator}}">FIRE calculator</a> takes yearly spending and a withdrawal rate you type and turns them into a portfolio figure. That is a third question. It does not read this index. Days in a country, if that is the limit you are watching, belong on the <a href="{{href:schengen-stay-calculator}}">Schengen stay calculator</a>.</p>
<p>Healthcare cost is outside the index. A routine doctor, a dentist, a prescription, and a premium are not lines in the basket of rent, food, and local transport. The index cannot tell you what a visit costs or what a policy pays. <a href="{{aff:genki}}">Genki</a> is the nomad medical name linked on this page, and the <a href="{{href:blog/genki-nomad-insurance}}">Genki guide</a> is where that plan is discussed. The guide does not quote a premium. This page will not invent one either. Read the current plan for the country you will actually be in. The button is an affiliate link, and the ratio above does not change because the link is there.</p>`,
      faq: [
        {
          q: "Is this an official rent survey or a Numbeo scrape?",
          a: "Neither. The figures are a rounded editorial index with New York at 100, last reviewed on 19 November 2026. They live in assets/js/cost-of-living.js. They were not taken from a statistical office, and they were not scraped from Numbeo. The basket in that file is a mix of rent, food, and local transport. When you have a source you trust more, replace the number in the file. Change the review note in the same file so the date stays honest."
        },
        {
          q: "Why does a 4000 salary at 100 versus 68 become 2720?",
          a: "The scaled salary is the salary multiplied by the second index and divided by the first. Four thousand times 68, divided by 100, is 2720. That is the pay at index 68 which sits where 4000 sits at index 100. It is not an offer and not a rent quote. The page also divides the salary by each index. At 4000 and 100 that is 40 per point. Both cities use the one currency you have in mind."
        },
        {
          q: "Does the index tell me the rent of a flat?",
          a: "No. The formula scales a whole basket. It does not price a specific flat. Rent can diverge from the basket: a city can be moderate on food and transport and still be tight on housing, or the reverse. An advert you saved is evidence about that flat, not a new index, until you choose to edit assets/js/cost-of-living.js. Two cities with the same index produce a scaled salary equal to the salary you typed."
        },
        {
          q: "How is this different from the inflation calculator?",
          a: "This index compares two places on one reviewed date. The inflation calculator applies a rate you type to a currency across time. A lower index can make the same salary look larger and still leave you exposed if that currency buys less later. The pages do not share a number. Tax is outside this index. A gross salary scales as gross, and a net salary scales as net. The ratio does not know your bracket."
        },
        {
          q: "Does the index include a doctor or an insurance premium?",
          a: "No. Healthcare sits outside the basket of rent, food, and local transport. The index cannot tell you the price of a visit or what a policy pays. Genki is the nomad medical name linked here, and the guide says what to read in that plan. Neither page quotes a premium or an exclusion. Those terms change. Read the current plan for the country you will actually be in, and keep the index as a planning ratio."
        }
      ]
    },
    ru: {
      title: "Калькулятор стоимости жизни по городам | Бесплатные калькуляторы",
      description: "Пересчитать зарплату между городами по округлённому редакторскому индексу, где Нью-Йорк равен 100. Сверка 19 ноября 2026 года. Это не официальная аренда.",
      h1: "Калькулятор стоимости жизни",
      lede: "Округлённый редакторский индекс, где Нью-Йорк равен 100, переносит зарплату из одного города в другой. Сверка 19 ноября 2026 года. Это не официальная аренда.",
      banner: "Подсчёт дней и индекс нужны для плана. Это не виза, не налоговое решение, не страховой полис и не котировка.",
      ctaTitle: "Медицина в индекс не входит",
      ctaBody: "Корзина не оценивает врача. Медицинский план для жизни в разъездах — отдельная бумага, не городской индекс. Статья говорит, что читать в плане Genki, и не называет премию.",
      ctaButton: "Открыть Genki",
      body: `<p>Калькулятор стоимости жизни переносит зарплату из одного города в другой по округлённому редакторскому индексу. Нью-Йорк равен 100. Цифры сверены 19 ноября 2026 года и лежат в файле assets/js/cost-of-living.js. Это не официальное исследование аренды. Это не цифры Numbeo, и со страницы Numbeo здесь ничего не снимали. В том же файле есть и другие города, кроме примеров на этой странице. Когда появится источник, которому вы доверяете, поправьте число в файле. Поправьте и пометку о сверке, чтобы дата на странице оставалась правдой.</p>
<h2>Индекс и зарплата, которую он масштабирует</h2>
<p>Эквивалент равен зарплате, которую вы ввели, умноженной на второй индекс и делённой на первый. В записи это зарплата умножить на индекс B и разделить на индекс A. Зарплата 4000 при индексе 100 против индекса 68 даёт 2720, потому что 4000 умножить на 68 и разделить на 100 равно 2720. Эти 2720 — оплата во втором городе, которая стоит на том же месте индекса. Это не оффер и не цена в объявлении арендодателя. Страница ещё делит ту же зарплату на каждый индекс, чтобы одну сумму было видно на пунктах каждого города. При 4000 и 100 это 40 на пункт. Зарплата в одной валюте для обоих городов. Индекс валюту не переводит. Если в двух местах платили бы разными валютами, сначала переведите по курсу, который выбрали сами, и только потом масштабируйте.</p>
<p>В файле корзина описана как смесь аренды, еды и местного транспорта. Масштаб двигает всю эту корзину. Конкретную квартиру он не оценивает. Две комнаты у метро и комната в часе езды могут стоить совсем по-разному, пока у города один индекс. Аренда может расходиться с корзиной. Город бывает умеренным по еде и транспорту и тугим по жилью, или наоборот. Сохранённое объявление — свидетельство об этой квартире. Индексом оно станет только если вы сами поправите файл.</p>
<ul>
<li>Нью-Йорк — 100, это база индекса.</li>
<li>Лондон — 90. Сингапур — 85. Дубай — 78.</li>
<li>Лимассол — 70. Берлин — 68. Лиссабон — 64.</li>
<li>Бангкок — 42. Тбилиси — 38.</li>
<li>Одинаковый индекс в обоих городах значит, что масштабированная зарплата равна той, которую вы ввели.</li>
</ul>
<h2>Чего в индексе нет</h2>
<p>Налог страница не применяет. Ввели сумму до налога — на выходе сумма в том же смысле до налога. Ввели сумму на руки — на выходе тоже на руки. Отношение не знает вашей шкалы. Зарплата после налога, пенсии и местных взносов — другая величина, и ставки форма не выдумает. <a href="{{href:freelance-rate-calculator}}">Калькулятор ставки фрилансера</a> как раз наращивает нужный чистый доход на тот процент налога, который вы вводите сами. Национальную таблицу он тоже не открывает.</p>
<p>Изменение цен во времени — другой инструмент. <a href="{{href:inflation-calculator}}">Калькулятор инфляции</a> применяет ставку, которую вы ввели, к валюте по годам. Этот индекс сравнивает два места на одну дату сверки. После переноса в город с меньшим индексом зарплата может выглядеть свободнее и всё равно покупать меньше позже, если валюта, в которой платят, теряет покупательную силу. Держите вопросы порознь. <a href="{{href:fire-calculator}}">Калькулятор FIRE</a> берёт годовые расходы и ставку изъятия, которые вы вводите, и собирает из них сумму портфеля. Это третий вопрос. Индекс он не читает. Дни в стране, если вы следите за лимитом, живут в <a href="{{href:schengen-stay-calculator}}">калькуляторе шенгенских дней</a>.</p>
<p>Стоимость медицины в индекс не входит. Обычный врач, стоматолог, рецепт и страховая премия — не строки корзины из аренды, еды и местного транспорта. Индекс не скажет, сколько стоит визит и что оплатит полис. <a href="{{aff:genki}}">Genki</a> — имя медицинского плана для жизни в разъездах на этой странице, а <a href="{{href:blog/genki-nomad-insurance}}">статья про Genki</a> говорит, что читать в плане. Премию статья не называет. Эта страница тоже не станет её выдумывать. Читайте текущий план той страны, где вы реально будете. Кнопка — партнёрская ссылка, и отношение индексов из-за неё не меняется.</p>`,
      faq: [
        {
          q: "Это официальное исследование аренды или съём с Numbeo?",
          a: "Ни то ни другое. Цифры — округлённый редакторский индекс, Нью-Йорк равен 100, сверка 19 ноября 2026 года. Они лежат в файле assets/js/cost-of-living.js. Их не брали из статистического ведомства и не снимали с Numbeo. Корзина в файле — смесь аренды, еды и местного транспорта. Если появится источник, которому вы доверяете больше, замените число в файле. Там же поправьте пометку о сверке, чтобы дата не врала."
        },
        {
          q: "Почему зарплата 4000 при индексах 100 и 68 становится 2720?",
          a: "Масштабированная зарплата — это введённая сумма, умноженная на второй индекс и делённая на первый. Четыре тысячи умножить на 68 и разделить на 100 равно 2720. Именно 2720 во втором городе стоит на том же месте индекса, что и 4000 при индексе 100. Это не оффер и не котировка аренды. Страница ещё делит зарплату на каждый индекс. При 4000 и 100 выходит 40 на пункт. Оба города считаются в той валюте, которую вы уже держите в голове."
        },
        {
          q: "Индекс называет аренду конкретной квартиры?",
          a: "Нет. Формула масштабирует всю корзину. Конкретную квартиру она не оценивает. Аренда может разойтись с корзиной: город бывает умеренным по еде и транспорту и при этом тугим по жилью, или наоборот. Сохранённое объявление говорит об этой квартире, а не задаёт новый индекс, пока вы сами не поправите assets/js/cost-of-living.js. Если индексы двух городов совпали, масштабированная зарплата равна той сумме, которую вы ввели."
        },
        {
          q: "Чем это отличается от калькулятора инфляции?",
          a: "Этот индекс сравнивает два места на одну дату сверки. Калькулятор инфляции применяет введённую вами ставку к валюте во времени. Переезд в город с меньшим индексом может сделать ту же зарплату на вид больше и всё равно оставить вас открытыми, если валюта позже покупает меньше. Общего числа у страниц нет. Налог тоже снаружи индекса. Ввели сумму до налога — на выходе сумма до налога. Ввели сумму на руки — на выходе тоже на руки. Шкалу отношение не знает."
        },
        {
          q: "Врач и страховая премия входят в индекс?",
          a: "Нет. Медицина лежит вне корзины из аренды, еды и местного транспорта. Индекс не назовёт цену визита и не скажет, что оплатит полис. Genki — имя плана для жизни в разъездах, на которое ведёт эта страница, а статья говорит, что читать в этом плане. Ни страница, ни статья не называют премию, потолок или исключение. Эти условия меняются. Читайте текущий план страны, где вы реально будете, а городской индекс оставьте планировочным отношением."
        }
      ]
    }
  },
  {
    slug: "world-time-meeting-planner",
    cluster: "relocation",
    calc: "meeting",
    category: "TravelApplication",
    affiliate: "nordvpn",
    related: ["schengen-stay-calculator", "cost-of-living-calculator", "roaming-esim-calculator", "pomodoro-timer"],
    guide: "nordvpn-vs-surfshark-vs-proton-vpn",
    en: {
      title: "World Time Meeting Planner | Free Online Calculators",
      description: "Convert one clock time into the other IANA time zones for the date you pick, and mark which local hours fall inside a 09:00 to 17:00 window.",
      h1: "World time meeting planner",
      lede: "A clock time in one IANA zone is converted for the date you pick, so daylight saving is the offset of that date. Each local hour is marked against 09:00 to 17:00.",
      banner: "A day count or an index is a planning aid. It is not a visa, a tax ruling, an insurance policy, or a quote.",
      ctaTitle: "Cafe wifi is a network question",
      ctaBody: "The planner converts clocks. It does not touch the network. People join calls from cafe wifi, and a VPN is about that path. It does not, by itself, make the meeting secure. The guide compares NordVPN, Surfshark, and Proton VPN.",
      ctaButton: "Open NordVPN",
      body: `<p>The meeting planner takes a date, a clock time, and the IANA zone that time belongs to, then converts that instant into the other zones you tick. The zone of the typed time is always shown. Conversion uses IANA zones through the browser's Intl data, not a fixed offset such as a permanent plus zero or minus five. Daylight saving is handled for the date you pick. A summer date and a winter date can disagree for the same cities, because the zone data supplies the offset civil time uses on that date.</p>
<h2>A conversion that is true on one date</h2>
<p>Here is a pair you can check. 15:00 in Europe/London on 19 November 2026 is 15:00 UTC, and the same instant is 10:00 in America/New_York. On that day the UK is on GMT, so London local time and UTC match. New York is on EST, five hours behind UTC. The five-hour gap is a fact about 19 November 2026. It is not a rule you should paste into every later meeting. On a date when one city has changed its clock and the other has not, a spreadsheet that still says minus five will be wrong. Pick the date of the call and let the page recompute. The names in the form are IANA names, such as Europe/London and America/New_York, not a homemade abbreviation.</p>
<p>Each row is marked according to whether that local hour sits inside 09:00 to 17:00. An hour is marked inside when it is at least 09:00 and earlier than 17:00. 17:00 itself is outside the mark. The window is a convention, not a law. A team that works a late overlap, a split shift, or a four-day week is not doing anything this page can forbid. The mark is a highlight so you can see who is inside a common office span and who is at breakfast or at the end of the day. Move the clock time if the highlight misses the people who have to speak.</p>
<h2>Where the UTC hours come from</h2>
<p>Besides the instant you typed, the page walks the UTC hours of that calendar date. For each hour it counts how many selected cities have a local hour inside 09:00 to 17:00, then lists the UTC hours where the most selected cities fall inside the window together. When several hours tie, a short list is shown. The list is an overlap hint. It does not know public holidays or a person who is travelling. A city left ticked still counts in the overlap, so untick anyone who will not be on the call.</p>
<ul>
<li>Type the time in the zone it belongs to. The page will not assume the time is UTC unless you pick UTC.</li>
<li>Tick only the cities that will be on the call. The home zone is included either way.</li>
<li>Read 09:00 as inside and 17:00 as outside. The span is a convention.</li>
<li>Change the date if the call is not on the day currently in the form. Offsets belong to the date.</li>
<li>Use the overlap list as a hint, then confirm with the people who have to attend.</li>
</ul>
<p>Clocks are only one part of working across places. If the limit you are watching is days in the Schengen area, that count is on the <a href="{{href:schengen-stay-calculator}}">Schengen stay calculator</a>. If you are comparing what a salary buys, the <a href="{{href:cost-of-living-calculator}}">cost of living calculator</a> uses a rounded index, not a time zone. A phone connection for the trip is the <a href="{{href:roaming-esim-calculator}}">roaming and eSIM calculator</a>, and it uses prices you type. Focus blocks between calls can sit on the <a href="{{href:pomodoro-timer}}">Pomodoro timer</a>. None of those pages shifts a clock.</p>
<p>People join these calls from cafe wifi. A VPN is about that network, not about the time zone. <a href="{{aff:nordvpn}}">NordVPN</a> is the name linked from this page. The <a href="{{href:blog/nordvpn-vs-surfshark-vs-proton-vpn}}">NordVPN, Surfshark, and Proton VPN guide</a> compares the three. A VPN does not make the meeting secure by itself. The call link, the list of people on it, and what gets said or shared are separate from the path between your laptop and a wifi router. The planner does not change any of that. The button is an affiliate link, and the time conversion does not change because the link is there.</p>`,
      faq: [
        {
          q: "Does the planner handle daylight saving?",
          a: "Yes. It uses IANA zones through the browser's Intl data, not a fixed offset. The offset is the one for the date you pick, including a day next to a clock change. A summer call and a winter call between the same cities can differ. A spreadsheet that keeps a permanent minus five is wrong on a day when only one place has moved. Put the date of the call in the form and read that result."
        },
        {
          q: "Why is 15:00 in London also 10:00 in New York on 19 November 2026?",
          a: "On 19 November 2026 the UK is on GMT, so 15:00 in Europe/London is 15:00 UTC. New York is on EST that day, five hours behind UTC, so the same instant is 10:00 in America/New_York. The pair is true for that date. It is not a gap to copy onto every other day. When one city changes its clock and the other does not, the gap changes. Pick the date and let the zone data supply the offset."
        },
        {
          q: "Is 09:00 to 17:00 a legal working day?",
          a: "No. It is a convention used as a highlight. A local hour is inside when it is at least 09:00 and earlier than 17:00, so 17:00 itself is outside. A team can work earlier, later, or on another pattern. The page has no rule it can enforce. The mark shows who is inside a common office span. If the people who must speak are outside it, move the time instead of treating the highlight as a law."
        },
        {
          q: "What are the UTC hours the page lists?",
          a: "For the date you picked, the page checks each UTC hour and counts how many selected cities are inside 09:00 to 17:00. It lists the UTC hours where the most selected cities fall inside that window together. A tie is shown as a short list. A city you left ticked still counts, even if that person will miss the call. The list is an overlap hint. It does not know holidays or a week when someone is travelling."
        },
        {
          q: "Does a VPN make the meeting secure?",
          a: "No. A VPN does not make the meeting secure by itself. People often join from cafe wifi, and a VPN is about that network, not about the time zone. NordVPN is the name this page links to, and the guide compares it with Surfshark and Proton VPN. The call link and what is said on the call are separate questions. The planner only converts clocks. Read the current terms before you treat a button as a promise."
        }
      ]
    },
    ru: {
      title: "Планировщик созвонов по часовым поясам | Бесплатные калькуляторы",
      description: "Перевести одно время суток в другие часовые пояса IANA на выбранную дату и отметить, какие местные часы попадают внутрь окна с 09:00 до 17:00.",
      h1: "Планировщик созвонов по часовым поясам",
      lede: "Время в одном поясе IANA переводится на выбранную дату, поэтому летнее время берётся из смещения именно этой даты. Каждый местный час отмечается относительно 09:00–17:00.",
      banner: "Подсчёт дней и индекс нужны для плана. Это не виза, не налоговое решение, не страховой полис и не котировка.",
      ctaTitle: "Вайфай в кафе — вопрос про сеть",
      ctaBody: "Планировщик переводит часы. Сеть он не трогает. На созвон часто заходят с вайфая в кафе, и VPN — про этот путь. Сам по себе он не делает встречу защищённой. Статья сравнивает NordVPN, Surfshark и Proton VPN.",
      ctaButton: "Открыть NordVPN",
      body: `<p>Планировщик берёт дату, время и пояс IANA, которому это время принадлежит. Этот момент он переводит в остальные пояса, которые вы отметили. Пояс введённого времени показывается всегда, даже если его галочка снята. Перевод идёт через пояса IANA и данные Intl в браузере. Постоянное смещение вроде вечного плюс ноль или вечного минус пять страница не использует. Летнее время учитывается для той даты, которую вы выбрали. Летняя и зимняя даты для тех же городов могут разойтись: база поясов даёт смещение, которым гражданское время пользуется в этот день, в том числе по краям перевода часов.</p>
<h2>Перевод, который верен в одну дату</h2>
<p>Вот пара, которую можно проверить. 15:00 в Europe/London 19 ноября 2026 года — это 15:00 UTC, и тот же момент — 10:00 в America/New_York. В этот день Британия живёт по GMT, поэтому местное время Лондона совпадает с UTC. Нью-Йорк живёт по EST, на пять часов позади UTC. Разрыв в пять часов — факт про 19 ноября 2026 года. Это не правило, которое стоит вставить в каждую следующую встречу. В дату, когда один город уже перевёл часы, а другой ещё нет, таблица с вечным минус пять ошибётся. Поставьте дату созвона и дайте странице пересчитать. Имена в форме — имена IANA, например Europe/London и America/New_York, а не самодельное сокращение.</p>
<p>У каждой строки стоит отметка, попадает ли местный час в промежуток с 09:00 до 17:00. Час отмечается как внутренний, если он не раньше 09:00 и раньше 17:00. Сами 17:00 уже снаружи отметки. Окно — договорённость, не закон. Команда с поздним пересечением, со сменным графиком или с четырёхдневной неделей не нарушает ничего, что эта страница могла бы запретить. Отметка — подсветка: видно, кто внутри обычного офисного промежутка, а кто ещё за завтраком или уже в конце дня. Если подсветка промахнулась мимо тех, кому надо говорить, сдвиньте время.</p>
<h2>Откуда берутся часы UTC</h2>
<p>Кроме одного введённого момента страница проходит часы UTC выбранной календарной даты. Для каждого такого часа она считает, у скольких отмеченных городов местный час внутри окна 09:00–17:00. Затем она перечисляет часы UTC, где этот счёт наибольший: это моменты, в которые больше всего выбранных городов одновременно попадают в окно. Если несколько часов делят первое место, показывается короткий список. Список — подсказка про пересечение. Это не приглашение в календарь, и страница не знает школьные развозы, праздники и человека, который на этой неделе в дороге. Снимите галочку с города, которого на созвоне не будет. Оставленный в списке город всё ещё участвует в подсчёте.</p>
<ul>
<li>Вводите время в том поясе, которому оно принадлежит. Пока вы сами не выбрали UTC, страница не считает время всемирным.</li>
<li>Отмечайте только города, которые будут на созвоне. Домашний пояс и так входит в список.</li>
<li>09:00 читайте как «внутри», 17:00 как «снаружи». Промежуток — договорённость.</li>
<li>Смените дату, если созвон не в тот день, который сейчас в форме. Смещение принадлежит дате.</li>
<li>Список пересечения — подсказка. Дальше подтвердите его с теми, кому надо присутствовать.</li>
</ul>
<p>Часы — только одна часть работы из разных мест. Если вы следите за днями в шенгенской зоне, их считает <a href="{{href:schengen-stay-calculator}}">калькулятор пребывания в Шенгене</a>. Если сравниваете, что покупает зарплата, <a href="{{href:cost-of-living-calculator}}">калькулятор стоимости жизни</a> пользуется округлённым индексом, а не поясом. Связь для поездки считает <a href="{{href:roaming-esim-calculator}}">калькулятор роуминга и eSIM</a>, и цены там те, которые вы ввели. Отрезки сосредоточенной работы между созвонами можно ставить на <a href="{{href:pomodoro-timer}}">таймер Pomodoro</a>. Ни одна из этих страниц не сдвигает часы.</p>
<p>На такие созвоны часто заходят с вайфая в кафе. VPN — про эту сеть, а не про часовой пояс. Со страницы ведёт ссылка на <a href="{{aff:nordvpn}}">NordVPN</a>. <a href="{{href:blog/nordvpn-vs-surfshark-vs-proton-vpn}}">Статья про NordVPN, Surfshark и Proton VPN</a> сравнивает все три. Сам по себе VPN не делает встречу защищённой. Ссылка на созвон, список людей и то, что на нём говорят и показывают, отдельно от пути между ноутбуком и роутером. Планировщик этого не меняет. Кнопка — партнёрская ссылка, и перевод времени из-за неё не меняется.</p>`,
      faq: [
        {
          q: "Планировщик учитывает летнее время?",
          a: "Да. Он берёт пояса IANA через данные Intl в браузере, а не постоянное смещение, вписанное в страницу. Смещение — то, которое действует в выбранную дату, в том числе рядом с переводом часов. Летний и зимний созвон между теми же городами могут различаться. Если в таблице навсегда стоит минус пять, она ошибётся в день, когда часы перевёл только один из городов. Поставьте дату настоящего созвона и читайте этот результат."
        },
        {
          q: "Почему 15:00 в Лондоне 19 ноября 2026 года — это 10:00 в Нью-Йорке?",
          a: "19 ноября 2026 года Британия живёт по GMT, поэтому 15:00 в Europe/London равно 15:00 UTC. Нью-Йорк в этот день живёт по EST, на пять часов позади UTC, и тот же момент равен 10:00 в America/New_York. Пара верна для этой даты. Это не разрыв, который можно копировать на любой другой день. Когда один город перевёл часы, а другой нет, разрыв меняется. Выберите дату и дайте базе поясов подставить смещение."
        },
        {
          q: "Промежуток с 09:00 до 17:00 — это законный рабочий день?",
          a: "Нет. Это договорённость, которую страница использует как подсветку. Местный час отмечается внутренним, если он не раньше 09:00 и раньше 17:00. Сами 17:00 отмечаются как внешние. Команда может работать раньше, позже или по другому ритму, и запретить это страница не может. Отметка лишь показывает, кто внутри обычного офисного промежутка. Если те, кому надо говорить, снаружи, сдвиньте время, а не считайте подсветку законом."
        },
        {
          q: "Что за часы UTC показывает страница?",
          a: "На выбранную календарную дату страница проверяет каждый час UTC и считает, у скольких отмеченных городов местный час внутри 09:00–17:00. Она перечисляет часы UTC с наибольшим счётом: там больше всего выбранных городов одновременно внутри окна. Ничья показывается коротким списком. Город, с которого вы не сняли галочку, всё ещё считается, даже если человека на созвоне не будет. Список — подсказка о пересечении. Праздники, развозы и неделю в дороге он не знает."
        },
        {
          q: "VPN делает созвон защищённым?",
          a: "Нет. Сам по себе VPN не делает встречу защищённой. На созвон часто заходят с вайфая в кафе, и VPN относится к этому сетевому пути, а не к часовому поясу. NordVPN — имя, на которое ведёт страница, а статья сравнивает его с Surfshark и Proton VPN. Ссылка на созвон, приглашённые люди и то, что говорят в эфире, — отдельные вопросы. Планировщик только переводит часы. Прежде чем читать кнопку как обещание про звонок, посмотрите текущие условия продукта."
        }
      ]
    }
  },
  {
    slug: "roaming-esim-calculator",
    cluster: "relocation",
    calc: "esim",
    category: "TravelApplication",
    affiliate: "airalo",
    related: ["schengen-stay-calculator", "world-time-meeting-planner", "cost-of-living-calculator", "ip-leak-test"],
    guide: "airalo-esim-review",
    en: {
      title: "Roaming and eSIM Cost Calculator | Free Online Calculators",
      description: "Compare roaming, priced as days times a daily rate, with an eSIM package plus any extra gigabytes. You type every price. No live tariff is stored.",
      h1: "Roaming and eSIM calculator",
      lede: "Roaming is the number of days times the daily price you type. An eSIM total is the package price plus any gigabytes past the included amount, at the extra price you type.",
      banner: "A day count or an index is a planning aid. It is not a visa, a tax ruling, an insurance policy, or a quote.",
      ctaTitle: "Check the plan for the country you will be in",
      ctaBody: "The form multiplies prices you type. It does not know Airalo's current price for a country. Open the plan for the place you will actually be, and confirm the phone is unlocked and can use an eSIM.",
      ctaButton: "Open Airalo",
      body: `<p>The roaming and eSIM calculator compares two bills you describe yourself. The roaming total is the number of days multiplied by the daily roaming price. The eSIM total is the package price plus the extra data, and the extra data is the greater of zero and the gigabytes you expect to use minus the gigabytes included, multiplied by the price of an extra gigabyte. In short, anything inside the included amount adds nothing, and anything past it is charged at the extra price you typed. The page then subtracts the eSIM total from the roaming total and says which side is lower. If the two totals match, it says they match. The currency symbol is whatever you type. The page does not convert currencies.</p>
<h2>An example that is cheaper only because of the numbers typed</h2>
<p>Take 10 days at 8 per day. The roaming total is 80. Take a package priced at 25, with 5 GB included and 3 GB used. Used data is inside the included amount, so the extra is zero, and the extra price per gigabyte is not applied. The eSIM total is 25. Roaming minus eSIM is 55, so in this example the eSIM is cheaper by 55. That gap exists only because those were the numbers typed. The page has no view of a fair price, and it does not know <a href="{{aff:airalo}}">Airalo</a>'s current price for any country. Type a higher package or a lower daily roaming rate and the verdict can flip. The sample is a worked sum, not a tariff.</p>
<p>If the gigabytes used had been past the gigabytes included, the difference would be multiplied by the extra price you typed and added to the package. A top-up changes the total. Another block of data is a new package price, a new included amount, or both, and the old comparison does not survive the change. Type the offer you are actually looking at, including the top-up if you expect to buy one. Leaving yesterday's price in the form produces yesterday's comparison.</p>
<h2>The phone, the plan, and the country</h2>
<p>The phone has to be unlocked, and it has to be eSIM-capable. A handset locked to one carrier can reject another plan. A handset without eSIM hardware cannot install the plan no matter what the arithmetic says. This page cannot see your phone. Coverage is per plan. A plan bought for one country is not automatically cover for the next border, and a regional plan is cover only for the places that plan names. Read the plan for the country you will actually be in. If the trip crosses a border, read the plan for the next country as well, or type a second offer and compare that bill on its own.</p>
<ul>
<li>Roaming total equals days times the daily price. Ten days at 8 is 80 in the example above.</li>
<li>eSIM total equals the package plus extra gigabytes times the extra price. Extra gigabytes cannot go below zero.</li>
<li>Three gigabytes used against five included leaves the example package at 25.</li>
<li>The 55 gap belongs to those typed numbers. It is not a stored Airalo price.</li>
<li>A top-up means you type the new offer. The previous total is then out of date.</li>
</ul>
<p>A data bill is not the rest of the trip. How many days you can be in the area is the <a href="{{href:schengen-stay-calculator}}">Schengen stay calculator</a>, which counts calendar days and does not know your carrier. What hour a call falls on is the <a href="{{href:world-time-meeting-planner}}">world time meeting planner</a>. What a salary buys in the city is the <a href="{{href:cost-of-living-calculator}}">cost of living calculator</a>, a rounded index that does not contain a mobile plan. If you want to see the address a web page is shown, that is the <a href="{{href:ip-leak-test}}">IP leak test</a>. A cheaper data total does not answer that test, and the test does not price a plan.</p>
<p>The button opens <a href="{{aff:airalo}}">Airalo</a>. Use it to check the plan for the country you will actually be in, then come back and type that plan's price, included data, and extra-data price. The <a href="{{href:blog/airalo-esim-review}}">Airalo eSIM review</a> describes what to look at in an offer. It does not freeze a country price, because country prices change and this site does not invent one. The link is an affiliate link. The multiplication uses only the figures in the form.</p>`,
      faq: [
        {
          q: "How is the roaming total calculated?",
          a: "Roaming is days multiplied by the daily price you type. Ten days at 8 per day is 80. The page does not add a tax or a fee you left out of that daily price. If the offer bundles some days and then charges another rate, type the figures that match it. The currency symbol is yours. Nothing on the page converts one currency into another."
        },
        {
          q: "Why is the example eSIM cheaper by 55?",
          a: "Only because those numbers were typed. Ten days at 8 is a roaming total of 80. A package of 25 with 5 GB included and 3 GB used has no extra data, so the eSIM total stays 25. Eighty minus 25 is 55. The page does not know Airalo's current country price and does not claim that 25 or 8 is a shelf price. A different daily rate or package can shrink, grow, or flip the gap."
        },
        {
          q: "What if I use more data than the package includes?",
          a: "The extra is gigabytes used minus gigabytes included, and it cannot fall below zero. That extra is multiplied by the extra price you typed and added to the package. Inside the included amount, the total is just the package. A top-up changes the total, so type the new package price and the new included amount. The page will not guess which top-up you meant."
        },
        {
          q: "Will any phone accept the eSIM?",
          a: "No. The phone has to be unlocked and eSIM-capable. A carrier lock can refuse a second plan, and a handset without the hardware cannot install one. This page cannot see your device. Coverage is per plan. A plan for one country is not automatically cover for the next country on the route. Read the offer for the place you will actually be, then type its numbers."
        },
        {
          q: "Does this page know Airalo's price for my country?",
          a: "No. No live Airalo tariff is stored here. The review describes what to check in an offer and does not freeze a country price, because those prices change. Open Airalo, find the plan for the country you will actually be in, and copy the package price, the included gigabytes, and the extra gigabyte price into the form. Until you do that, the result is only the arithmetic of whatever was already in the boxes, including the sample numbers."
        }
      ]
    },
    ru: {
      title: "Калькулятор роуминга и eSIM | Бесплатные калькуляторы",
      description: "Сравнить сумму роуминга, то есть дни умножить на цену дня, с пакетом eSIM и доплатой за лишние гигабайты. Цены вводите сами: живого тарифа тут нет.",
      h1: "Калькулятор роуминга и eSIM",
      lede: "Роуминг — это число дней, умноженное на дневную цену, которую вы ввели. Сумма eSIM — цена пакета плюс гигабайты сверх включённых, по цене лишнего гигабайта.",
      banner: "Подсчёт дней и индекс нужны для плана. Это не виза, не налоговое решение, не страховой полис и не котировка.",
      ctaTitle: "Проверьте план той страны, где будете",
      ctaBody: "Форма умножает цены, которые вы ввели. Текущую цену Airalo для страны она не знает. Откройте план того места, где вы реально будете, и проверьте, что телефон разблокирован и умеет eSIM.",
      ctaButton: "Открыть Airalo",
      body: `<p>Калькулятор роуминга и eSIM сравнивает два счёта, которые вы описываете сами. Сумма роуминга — это число дней, умноженное на дневную цену роуминга. Сумма eSIM — это цена пакета плюс лишние данные. Лишние данные считаются так: из гигабайтов, которые вы собираетесь потратить, вычитаются гигабайты в пакете, отрицательный результат заменяется нулём, и остаток умножается на цену лишнего гигабайта. Всё, что умещается во включённый объём, ничего не добавляет. Всё, что вылезает за него, идёт по той цене лишнего гигабайта, которую вы ввели. Затем страница вычитает сумму eSIM из суммы роуминга и говорит, какая сторона меньше. Если суммы совпали, так и написано. Знак валюты — тот, который вы поставили. Валюты страница не переводит.</p>
<h2>Пример, который дешевле только из-за введённых чисел</h2>
<p>Возьмите 10 дней по 8 в день. Сумма роуминга равна 80. Возьмите пакет за 25, в котором 5 ГБ включено и 3 ГБ будет потрачено. Расход внутри включённого объёма, поэтому доплата равна нулю, и цена лишнего гигабайта не применяется. Сумма eSIM равна 25. Роуминг минус eSIM равен 55, и в этом примере eSIM дешевле на 55. Разрыв есть только потому, что ввели именно эти числа. Справедливой цены страница не знает и не знает текущую цену <a href="{{aff:airalo}}">Airalo</a> ни для одной страны. Поставьте пакет дороже или дневной роуминг дешевле — и вывод может перевернуться. Пример — разобранная сумма, а не тариф.</p>
<p>Если бы потраченные гигабайты вышли за включённые, разница умножилась бы на введённую цену лишнего гигабайта и прибавилась к пакету. Пополнение меняет итог. Ещё один блок данных — это новая цена пакета, новый включённый объём или и то и другое, и старое сравнение этого не переживает. Вводите то предложение, которое смотрите сейчас, вместе с пополнением, если собираетесь его купить. Вчерашняя цена в форме даёт вчерашнее сравнение.</p>
<h2>Телефон, план и страна</h2>
<p>Телефон должен быть разблокирован и должен уметь eSIM. Аппарат, привязанный к одному оператору, может отказать чужому плану. Аппарат без железа eSIM план не установит, что бы ни говорила арифметика. Эта страница ваш телефон не видит. Покрытие задаётся планом. План, купленный для одной страны, сам собой не покрывает следующую границу, а региональный план покрывает только те места, которые в нём названы. Читайте план той страны, где вы реально будете. Если маршрут пересекает границу, прочитайте план и для следующей страны или введите второе предложение и посчитайте тот счёт отдельно.</p>
<ul>
<li>Сумма роуминга равна дням, умноженным на цену дня. Десять дней по 8 в примере выше дают 80.</li>
<li>Сумма eSIM равна пакету плюс лишние гигабайты по цене лишнего. Лишние гигабайты не бывают ниже нуля.</li>
<li>Три гигабайта при пяти включённых оставляют пакет из примера равным 25.</li>
<li>Разрыв в 55 принадлежит этим введённым числам. Это не сохранённая цена Airalo.</li>
<li>Пополнение значит, что вы вводите новое предложение. Прежний итог после этого устарел.</li>
</ul>
<p>Счёт за связь — не вся поездка. Сколько дней можно быть в зоне, считает <a href="{{href:schengen-stay-calculator}}">калькулятор шенгенских дней</a>: он считает календарные дни и оператора не знает. На какой час приходится созвон, показывает <a href="{{href:world-time-meeting-planner}}">планировщик созвонов</a>. Что покупает зарплата в городе, показывает <a href="{{href:cost-of-living-calculator}}">калькулятор стоимости жизни</a>, округлённый индекс, в котором нет мобильного плана. Если нужно увидеть адрес, который видит веб-страница, это <a href="{{href:ip-leak-test}}">проверка утечки IP</a>. Более дешёвый счёт за связь на этот вопрос не отвечает, а проверка не оценивает план.</p>
<p>Кнопка открывает <a href="{{aff:airalo}}">Airalo</a>. Проверьте там план той страны, где вы реально будете, и вернитесь, чтобы вписать цену этого плана, включённые гигабайты и цену лишнего гигабайта. <a href="{{href:blog/airalo-esim-review}}">Обзор eSIM Airalo</a> описывает, на что смотреть в предложении. Страновую цену он не замораживает: цены меняются, и сайт их не выдумывает. Ссылка партнёрская. Умножение берёт только цифры из формы.</p>`,
      faq: [
        {
          q: "Как считается сумма роуминга?",
          a: "Роуминг — это число дней, умноженное на дневную цену, которую вы ввели. Десять дней по 8 в день дают 80. Страница не прибавляет плату за соединение, налог или сбор за разумное использование, если вы сами не включили их в дневную цену. Если предложение сначала закрывает несколько дней, а дальше берёт другую ставку, введите цифры этого предложения или посчитайте кусками. Знак валюты ваш. Ничего на странице не переводит одну валюту в другую."
        },
        {
          q: "Почему в примере eSIM дешевле на 55?",
          a: "Только потому, что ввели именно эти числа. Десять дней по 8 дают роуминг 80. Пакет за 25 при 5 ГБ в комплекте и 3 ГБ расхода не имеет лишних данных, поэтому сумма eSIM остаётся 25. Восемьдесят минус 25 равно 55. Текущую цену Airalo ни в одной стране страница не знает и не утверждает, что 25 или 8 — настоящая полка. Другая дневная ставка или другой пакет могут уменьшить разрыв, увеличить его или перевернуть вывод."
        },
        {
          q: "Что будет, если потратить больше, чем в пакете?",
          a: "Лишнее — это потраченные гигабайты минус включённые, и ниже нуля оно не опускается. Это лишнее умножается на введённую цену лишнего гигабайта и прибавляется к цене пакета. Если вы остались внутри включённого объёма, цена лишнего простаивает, и итог равен пакету. Пополнение меняет итог: введите новую цену пакета и новый включённый объём, а не храните старое сравнение. Какое пополнение вы имели в виду, страница не угадает."
        },
        {
          q: "Любой телефон примет eSIM?",
          a: "Нет. Телефон должен быть разблокирован и должен уметь eSIM. Привязка к оператору может не пустить чужой план, а аппарат без нужного железа его не установит. Страница не видит устройство у вас в руке. Покрытие написано в плане, это не свойство калькулятора. План для одной страны сам собой не становится планом для следующей страны маршрута. Прочитайте предложение того места, где вы реально будете, и введите его цифры."
        },
        {
          q: "Страница знает цену Airalo для моей страны?",
          a: "Нет. Живого тарифа Airalo здесь нет. Обзор описывает, что проверять в предложении, и не замораживает страновую цену, потому что цены меняются. Откройте Airalo, найдите план той страны, где вы реально будете, и перенесите в форму цену пакета, включённые гигабайты и цену лишнего гигабайта. Пока вы этого не сделали, результат — только арифметика того, что уже стояло в полях, включая примерные числа."
        }
      ]
    }
  },
  {
    slug: "freelance-rate-calculator",
    cluster: "relocation",
    calc: "freelance",
    category: "TravelApplication",
    affiliate: "genki",
    secondary: "wise",
    related: ["margin-markup-calculator", "fire-calculator", "business-days-calculator", "cost-of-living-calculator"],
    guide: "genki-nomad-insurance",
    en: {
      title: "Freelance Hourly Rate Calculator | Free Online Calculators",
      description: "Turn a target net income, a tax rate, and yearly business costs into a gross amount, then divide by billable hours after leave and unpaid time.",
      h1: "Freelance rate calculator",
      lede: "Gross income is the net you want plus business costs, divided by one minus the tax rate you type. That gross is then spread over the hours left after leave and time you cannot bill.",
      banner: "A day count or an index is a planning aid. It is not a visa, a tax ruling, an insurance policy, or a quote.",
      ctaTitle: "The rate is not a premium or a payout fee",
      ctaBody: "A solo year has no employer sick pay, which is why people look at a nomad medical plan such as Genki. Getting paid across a border has its own fee, and that fee is not inside the hourly rate. Neither button is a quote.",
      ctaButton: "Open Genki",
      secondaryButton: "Open Wise",
      body: `<p>The freelance rate calculator turns a net income you want to keep into a gross amount you would have to bill, then divides that gross by the hours you can bill. Gross equals net income plus yearly business costs, divided by one minus the tax rate. The tax rate is the percent you type. It is not a bracket the page looks up, and it is not a tax return. A rate of 100 percent or more is rejected, because the divisor would be zero or negative. Business costs are the yearly figure you type. The page will not invent them.</p>
<h2>Work days and billable hours</h2>
<p>Work days equal 52 minus the vacation weeks, multiplied by 5, then minus sick days, then minus weekday public holidays. A vacation week comes out before the multiply, so one vacation week removes five days. Sick days and weekday holidays come off as single days. The model is 52 weeks, not the real weekday count of a named year. If the result is zero or below, the page stops rather than printing a rate. Billable hours equal those work days, times the hours you could work in a week divided by 5, times utilization.</p>
<p>Utilization is the share of working time a client pays for. Meetings you cannot bill, admin, and unpaid marketing are not billable. At 100 percent every working hour is treated as billed. A lower share means the same gross is earned in fewer hours, so the hourly figure rises. The percent is yours. The day rate is the hourly rate times the hours in a working day, and it is not cut by utilization a second time. The monthly figure is the gross divided by 12.</p>
<h2>Two shapes of the same formula</h2>
<p>First shape, kept simple so the hours are easy to see. Net income 52000, tax rate 0, business costs 0, no vacation weeks, no sick days, no weekday holidays, 40 hours in a week, utilization 100 percent. Gross equals 52000. Work days equal 52 times 5, which is 260. A working day is 40 divided by 5, which is 8 hours. Billable hours equal 260 times 8, which is 2080. The hourly rate is 52000 divided by 2080, which is 25 per hour. The day rate is 25 times 8, which is 200.</p>
<p>Second shape, closer to a year with tax and costs. Tax 25 percent, business costs 5000, net income 60000. The sum inside is 60000 plus 5000, which is 65000. One minus 0.25 is 0.75. Gross equals 65000 divided by 0.75. That division is 86666.67 when it is shown to the cent. Vacation, sick days, weekday holidays, the weekly hours, and utilization still sit on top of this gross. They do not change 65000 divided by 0.75. They change how many billable hours carry that gross, and therefore the hourly rate. The 260-day shape is a ceiling of this model, not a promise that every weekday is worked.</p>
<ul>
<li>Gross is net plus business costs, divided by one minus the tax rate you type.</li>
<li>Work days start from 52 weeks of five days, then lose vacation weeks, sick days, and weekday holidays.</li>
<li>Billable hours apply utilization once. Do not cut the day rate by that share again.</li>
<li>Meetings, admin, and unpaid marketing belong in the non-billable share, not in the net income.</li>
<li>This is a planning rate. It is not a tax return and not an invoice.</li>
</ul>
<p>The gap between a price and a cost is the <a href="{{href:margin-markup-calculator}}">margin and markup calculator</a>. A portfolio from yearly spending and a withdrawal rate you type is the <a href="{{href:fire-calculator}}">FIRE calculator</a>. Weekdays between two contract dates are the <a href="{{href:business-days-calculator}}">business days calculator</a>. What the same money buys in another city is the <a href="{{href:cost-of-living-calculator}}">cost of living calculator</a>.</p>
<p>Getting paid across borders has its own fee, separate from the hourly rate. A transfer fee or a spread can sit on the payout. <a href="{{aff:wise}}">Wise</a> is the payout name on this page, and today's fee is not stored here. A solo year with no employer sick pay is why people look at nomad medical plans. That question is not inside the 25 per hour, and it is not inside 65000 divided by 0.75. <a href="{{aff:genki}}">Genki</a> is the medical name linked here. The <a href="{{href:blog/genki-nomad-insurance}}">Genki guide</a> says what to read in the plan and does not quote a premium. The buttons are affiliate links. The rate does not change because they are there.</p>`,
      faq: [
        {
          q: "How is the gross figure calculated?",
          a: "Gross equals the net you want plus yearly business costs, divided by one minus the tax rate you type. At a tax rate of zero and costs of zero, gross equals the net. With net 60000, costs 5000, and tax of 25 percent, gross is 65000 divided by 0.75, or 86666.67 to the cent. The rate is a percent you chose. The page does not look up a bracket, and 100 percent or more is rejected."
        },
        {
          q: "Where do 260 work days and 25 per hour come from?",
          a: "They come from an empty year: net 52000, tax 0, costs 0, no leave, 40 hours a week, and 100 percent utilization. Work days are 52 times 5, which is 260. The working day is 8 hours, so billable hours are 260 times 8, which is 2080. Divide 52000 by 2080 and the hour is 25. The day rate is 25 times 8, which is 200. The model uses 52 weeks, not the exact weekdays of one calendar year."
        },
        {
          q: "What does utilization mean?",
          a: "It is the share of working time a client pays for. Meetings you cannot bill, admin, and unpaid marketing are not billable. At 100 percent every working hour carries the gross. A lower share means fewer hours carry the same gross, so the hourly rate rises. The day rate is that hourly rate times a full working day. Do not apply utilization a second time. The percent is yours. The page does not know your week."
        },
        {
          q: "Is this a tax return?",
          a: "No. It is arithmetic on a tax percent you typed. It does not know your brackets, which contributions are deductible, or which costs a tax office would accept. Business costs are included only because you typed them. The monthly figure is the gross divided by 12, an even split, not a filing calendar. Keep the output as a planning rate. A return belongs to the rules that cover you."
        },
        {
          q: "Does the hourly rate include a Wise fee or a medical premium?",
          a: "No. A cross-border payout has its own fee, separate from the hourly rate. Wise is the payout name on this page, and today's fee is not stored here. A solo year with no employer sick pay is why people look at nomad medical plans. Genki is the medical name linked here, and the guide says what to read in that plan. Neither a premium nor a payout fee sits inside the 25 per hour."
        }
      ]
    },
    ru: {
      title: "Калькулятор часовой ставки фрилансера | Бесплатные калькуляторы",
      description: "Из нужного чистого дохода, ставки налога и годовых расходов бизнеса получить валовую сумму и разделить её на часы после отпуска и неоплачиваемой работы.",
      h1: "Калькулятор ставки фрилансера",
      lede: "Валовая сумма — это нужные вам чистые плюс расходы бизнеса, делённые на единицу минус введённая ставка налога. Дальше сумма ложится на часы, которые остались после отпуска и неоплачиваемого времени.",
      banner: "Подсчёт дней и индекс нужны для плана. Это не виза, не налоговое решение, не страховой полис и не котировка.",
      ctaTitle: "Ставка — это не премия и не комиссия выплаты",
      ctaBody: "Год без работодателя значит год без оплачиваемого больничного, поэтому люди смотрят медицинский план для жизни в разъездах, например Genki. Платёж через границу имеет свою комиссию, и в часовую ставку она не входит. Ни одна кнопка не котировка.",
      ctaButton: "Открыть Genki",
      secondaryButton: "Открыть Wise",
      body: `<p>Калькулятор ставки фрилансера превращает чистый доход, который вы хотите оставить себе, в валовую сумму, которую пришлось бы выставить, и делит эту сумму на часы, которые реально можно выставить клиенту. Валовая сумма равна чистому доходу плюс годовые расходы бизнеса, и всё это делится на единицу минус ставка налога. Ставка — тот процент, который вы ввели. Это не шкала, которую страница где-то посмотрела, и это не налоговая декларация. Ставку 100 процентов и выше поставить нельзя: делитель стал бы нулём или ушёл в минус. Расходы бизнеса — годовая цифра, которую вы ввели. Список за вас страница не сочинит.</p>
<h2>Рабочие дни и оплачиваемые часы</h2>
<p>Рабочие дни равны 52 минус недели отпуска, умножить на 5, затем минус больничные дни, затем минус праздники, которые приходятся на будни. Неделя отпуска вычитается до умножения, поэтому одна такая неделя уносит пять дней. Больничные и будние праздники снимаются по одному дню. Модель — 52 недели, а не подсчёт настоящих будней конкретного года. Если рабочих дней выходит ноль или меньше, страница останавливается и ставку не печатает. Оплачиваемые часы равны этим рабочим дням, умноженным на часы в неделю, делённые на 5, и ещё на долю оплачиваемого времени. Часы в неделю, делённые на 5, — это длина одного рабочего дня в модели.</p>
<p>Доля оплачиваемого времени — это часть рабочего времени, за которую платит клиент. Созвоны, которые нельзя выставить, административные дела и неоплачиваемое продвижение в эту часть не входят. При 100 процентах оплачен каждый рабочий час. Меньшая доля значит, что та же валовая сумма собирается за меньшее число часов, и ставка в час растёт. Процент ваш. Дневная ставка — это часовая ставка, умноженная на часы рабочего дня, и второй раз эту долю страница не применяет. Месячная цифра — валовая сумма, делённая на 12, ровная нарезка, а не прогноз счетов одного месяца.</p>
<h2>Две формы одной формулы</h2>
<p>Первая форма простая, чтобы часы было легко увидеть. Чистыми 52000, налог 0, расходы 0, ни одной недели отпуска, ни одного больничного, ни одного буднего праздника, 40 часов в неделю, доля оплачиваемого времени 100 процентов. Валовая сумма равна 52000: прибавлять нечего, делитель равен единице. Рабочие дни равны 52 умножить на 5, это 260. Рабочий день — 40 разделить на 5, это 8 часов. Оплачиваемые часы равны 260 умножить на 8 и на 1, это 2080. Ставка в час — 52000 разделить на 2080, это 25 в час. Дневная ставка — 25 умножить на 8, это 200. Месячная цифра — 52000 разделить на 12.</p>
<p>Вторая форма ближе к году с налогом и расходами. Налог 25 процентов, расходы 5000, чистыми 60000. Сумма внутри — 60000 плюс 5000, это 65000. Единица минус 0,25 равна 0,75. Валовая сумма равна 65000 разделить на 0,75. В записи это 65000/0,75. До цента получается 86666,67. Отпуск, больничные, будние праздники, часы в неделю и доля оплачиваемого времени стоят уже поверх этой валовой суммы. Деление 65000 на 0,75 они не меняют. Они меняют, сколько оплачиваемых часов должны её нести, а значит и ставку в час. Вводите тот отпуск, которого реально ждёте. Простая форма со 260 днями — потолок этой модели, а не обещание, что вы проработаете каждый будний день.</p>
<ul>
<li>Валовая сумма — это чистые плюс расходы бизнеса, делённые на единицу минус введённая ставка налога.</li>
<li>Рабочие дни начинаются с 52 недель по пять дней, затем теряют недели отпуска, больничные и будние праздники.</li>
<li>Доля оплачиваемого времени применяется один раз. Не режьте дневную ставку этой долей ещё раз.</li>
<li>Созвоны, административные дела и неоплачиваемое продвижение относятся к неоплачиваемой доле, а не к чистому доходу.</li>
<li>Это ставка для плана. Это не декларация и не счёт клиенту.</li>
</ul>
<p>Ставка — не весь денежный план. Разрыв между ценой и себестоимостью, как маржа или наценка, считается в <a href="{{href:margin-markup-calculator}}">калькуляторе маржи и наценки</a>. Портфель из годовых расходов и ставки изъятия, которые вы вводите, собирает <a href="{{href:fire-calculator}}">калькулятор FIRE</a>. Будни между двумя датами договора считает <a href="{{href:business-days-calculator}}">калькулятор рабочих дней</a>. Что те же деньги покупают в другом городе по округлённому индексу, показывает <a href="{{href:cost-of-living-calculator}}">калькулятор стоимости жизни</a>. Ни одна из этих страниц не подменяет процент налога, который вы ввели здесь.</p>
<p>Платёж через границу имеет свою комиссию, отдельно от часовой ставки. На выплате могут сидеть комиссия перевода или спред. <a href="{{aff:wise}}">Wise</a> — имя выплаты на этой странице, и сегодняшнюю комиссию она не знает. Год без работодателя — это год без оплачиваемого больничного, поэтому люди смотрят медицинские планы для жизни в разъездах. Этот вопрос не сидит внутри 25 в час и не сидит внутри деления 65000 на 0,75. <a href="{{aff:genki}}">Genki</a> — медицинское имя на этой странице. <a href="{{href:blog/genki-nomad-insurance}}">Статья про Genki</a> говорит, что читать в плане, и премию не называет. Кнопки — партнёрские ссылки. Ставка из-за них не меняется.</p>`,
      faq: [
        {
          q: "Как считается валовая сумма?",
          a: "Валовая сумма равна нужному чистому доходу плюс годовые расходы бизнеса, которые вы ввели, и всё это делится на единицу минус введённая ставка налога. При нулевом налоге и нулевых расходах валовая сумма равна чистой. При чистых 60000, расходах 5000 и налоге 25 процентов сумма внутри равна 65000, делитель равен 0,75, и валовая сумма — это 65000 разделить на 0,75, до цента 86666,67. Процент вы выбрали сами. Шкалу страница не ищет, а ставку 100 процентов и выше отклоняет."
        },
        {
          q: "Откуда 260 рабочих дней и 25 в час?",
          a: "Из нарочно пустого года. Чистыми 52000, налог 0, расходы 0, без отпуска, без больничных и без будних праздников, 40 часов в неделю и доля 100 процентов. Рабочие дни — 52 умножить на 5, это 260. Рабочий день — 8 часов, поэтому оплачиваемых часов 260 умножить на 8, это 2080. 52000 разделить на 2080 даёт 25 в час. Дневная ставка — 25 умножить на 8, это 200. Модель берёт 52 недели, а не точные будни одного года."
        },
        {
          q: "Что такое доля оплачиваемого времени?",
          a: "Это часть рабочего времени, за которую клиент правда платит. Созвоны, которые нельзя выставить, административные дела и неоплачиваемое продвижение в оплату не входят, поэтому они остаются в той доле, которую вы вычли. При 100 процентах валовую сумму несёт каждый рабочий час. Меньшая доля значит, что ту же сумму несут меньшие часы, и ставка в час растёт. Дневная ставка берёт эту часовую ставку и полный рабочий день. Второй раз долю не применяйте. Как устроена ваша неделя, страница не знает. Процент ваш."
        },
        {
          q: "Это налоговая декларация?",
          a: "Нет. Это арифметика по проценту налога, который вы ввели. Шкалу, вычитаемые взносы и то, какие расходы примет налоговая, страница не знает. Расходы бизнеса попали в формулу только потому, что вы их ввели. Месячная цифра — валовая сумма, делённая на 12, ровная нарезка, а не календарь сдачи. Оставьте результат ставкой для плана. Декларация, регистрация и вопрос резидентства относятся к правилам, которые покрывают вас, а не к этой форме."
        },
        {
          q: "В часовую ставку входят комиссия Wise или медицинская премия?",
          a: "Нет. Платёж через границу имеет свою комиссию, и от часовой ставки она отдельно. Wise — имя выплаты на этой странице. Сегодняшней комиссии здесь нет, и страница её не выдумает. Год в одиночку, без больничного от работодателя, — причина смотреть медицинские планы для жизни в разъездах. Genki — медицинское имя на этой странице, а статья говорит, что читать в этом плане. Ни премия, ни комиссия выплаты не сидят внутри 25 в час и не сидят внутри валовой суммы."
        }
      ]
    }
  }
];
