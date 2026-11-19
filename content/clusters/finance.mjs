export const financeTools = [
  {
    slug: "compound-interest-calculator",
    cluster: "finance",
    calc: "compound",
    category: "FinanceApplication",
    affiliate: "interactivebrokers",
    secondary: "bybit",
    related: ["average-price-calculator", "staking-apy-calculator", "fire-calculator", "inflation-calculator"],
    guide: "interactive-brokers-review",
    en: {
      title: "Compound interest calculator | Free Online Calculators",
      description: "Compound interest from a nominal annual rate, with monthly contributions at the start or end of the month. Taxes and a changing rate stay outside.",
      h1: "Compound interest calculator",
      lede: "A nominal annual rate, a monthly contribution, and a choice of start or end of month, turned into a future value you can check by hand.",
      banner: "This is arithmetic for a plan. It is not a forecast and not investment, tax, or legal advice.",
      ctaTitle: "A brokerage account is optional",
      ctaBody: "The future value is already calculated. Interactive Brokers is a place for long-term contributions, and Bybit is a place some people use for a monthly crypto purchase. Fees and products change. The rate you typed is not a promised return. The page works if you open neither account.",
      ctaButton: "Open Interactive Brokers",
      secondaryButton: "Open Bybit",
      body: `<p>The rate box is a nominal annual rate. It is not a monthly rate, and it is not an APY that already has compounding inside it. The calculator builds a monthly rate with i = (1 + rate/n)^(n/12) - 1. Here n is how many times a year the stated rate compounds. When n is 12, the exponent is 1, so i is simply rate/12. Twelve percent compounded monthly is one percent a month. When n is 1, twelve monthly steps rebuild one annual compound, which is not the same thing as dividing the annual rate by 12. When n is 4, each quarter is rate/4, and the monthly rate is that quarterly step spread across twelve months. If the number you found is already an effective yearly yield, use the <a href="{{href:staking-apy-calculator}}">staking APY calculator</a> and mark it as APY. Putting an APY into this nominal box compounds the compounding.</p>
<h2>End of the month and start of the month</h2>
<p>P is the starting amount. PMT is the sum added each month. m is the years you typed, times 12, rounded to a whole month. End-of-month future value is FV = P*(1+i)^m + PMT*((1+i)^m - 1)/i. The first term grows money already there. The second term is the annuity, the row of contributions. Each one arrives after that month's growth, so the last contribution earns nothing inside the window. Start-of-month timing multiplies the annuity by (1+i). The principal is not given an extra month on top of the growth it already has. A contribution at the start of the month is inside the balance when that month's rate is applied, which is why the result is a little higher. A zero rate sets the formula aside. Future value is then the principal plus every contribution.</p>
<h2>Two balances you can recompute</h2>
<p>Take 1000 at 10 percent compounded once a year for 2 years, and add nothing each month. After one year the balance is 1100. After two years it is 1210. The page reports 1210, because 1.10 squared is 1.21. The monthly rate under annual compounding is smaller than rate/12, and twenty-four of those steps still land on 1210.</p>
<p>Start from nothing and add 100 a month, at 12 percent nominal compounded monthly, for 12 months, at the end of the month. The monthly rate is 0.01. You contribute 1200. The annuity comes to about 1268.25. The extra 68.25 is interest on the payments that arrived earlier. The same inputs at the start of the month come to about 1280.93, the end-of-month figure times 1.01. A zero rate returns 1200 from a zero start, or the principal plus 1200 if you began with a balance. Both timings match when the rate is zero, because there is no growth to move.</p>
<h2>What the run leaves out</h2>
<ul>
<li>One rate covers the whole period. A later change needs a new run.</li>
<li>Taxes, a withheld distribution, and an account fee are not subtracted.</li>
<li>Inflation is a separate assumption. A larger balance can still buy less.</li>
<li>Months are whole months. One and a half years is 18 contributions.</li>
<li>The rate you type is your assumption. It is not a return an account has promised.</li>
</ul>
<p>Several buys of one asset at different prices belong on the <a href="{{href:average-price-calculator}}">average price calculator</a>. A portfolio sized to fund spending is the <a href="{{href:fire-calculator}}">FIRE calculator</a>, which reuses this monthly model for the years it estimates. Purchasing power sits on the <a href="{{href:inflation-calculator}}">inflation calculator</a> so the two rates are not hidden inside one number. A brokerage account is a place to hold long-term contributions. The arithmetic does not need one. <a href="{{aff:interactivebrokers}}">Interactive Brokers</a> is a broker people use when they invest from more than one country. Fees, market access, and residency rules change. The <a href="{{href:blog/interactive-brokers-review}}">Interactive Brokers guide</a> says what to read on the current schedule. This page does not quote a commission. If the monthly sum is a crypto purchase, <a href="{{aff:bybit}}">Bybit</a> is a different account, and coins left on an exchange are in that company's custody. Neither button changes the future value.</p>`,
      faq: [
        {
          q: "How do you calculate compound interest with monthly deposits?",
          a: "Type a nominal annual rate and how many times a year it compounds. The monthly rate is (1 + rate/n) raised to n/12, minus 1, which is the annual rate divided by 12 when compounding is monthly. Each month grows the balance, then an end-of-month deposit is added. The starting amount and the deposits are shown apart from the growth. The rate stays constant for the whole period you typed."
        },
        {
          q: "What is the difference between start-of-month and end-of-month deposits?",
          a: "End-of-month deposits arrive after that month's growth, so the last deposit earns nothing inside the window. Start-of-month deposits are in the balance when the month's rate is applied. Only the row of deposits is multiplied by one extra month of growth. The starting amount is not given a second extra month. With 100 a month at 12 percent compounded monthly for a year, the end figure is about 1268.25 and the start figure is about 1280.93."
        },
        {
          q: "Is a nominal annual rate the same as APY?",
          a: "No. A nominal rate still has to be compounded by the count you pick. An APY is already the effective yearly yield, compounding included. If you type an APY into the nominal box, the calculator compounds it again and the balance runs too high. Use the staking calculator when the figure you have is an APY, and mark that mode. This page wants the rate before that yearly compounding is baked in."
        },
        {
          q: "Does this compound interest calculator include taxes?",
          a: "No. The future value is the balance under the rate and the deposits you typed. A tax on gains, a withheld distribution, and a broker commission are not subtracted. Inflation is not subtracted either. A larger nominal balance can buy less, and that question has its own page. Run the numbers again if the rate will not stay constant, because this form has a single rate for the whole period."
        },
        {
          q: "Do I need a brokerage account to use the result?",
          a: "No. The future value is calculated in the browser from the fields you fill in. A brokerage account is only a place to hold contributions if you decide to invest. Interactive Brokers is one broker people use across countries, and fees and residency rules change. A crypto purchase on an exchange is a different kind of account, with custody risk. Neither link changes the arithmetic, and the rate you typed is not a promised return."
        }
      ]
    },
    ru: {
      title: "Сложный процент с ежемесячным взносом | Бесплатные калькуляторы",
      description: "Сложный процент по номинальной годовой ставке и ежемесячному взносу в начале или в конце месяца. Налог и меняющаяся ставка остаются снаружи.",
      h1: "Калькулятор сложного процента",
      lede: "Номинальная годовая ставка, ежемесячное довнесение и выбор начала или конца месяца дают будущую сумму, которую можно проверить на простых числах.",
      banner: "Это арифметика для плана. Это не прогноз и не инвестиционная, налоговая или юридическая рекомендация.",
      ctaTitle: "Брокерский счёт для расчёта не нужен",
      ctaBody: "Будущая сумма уже на странице. Interactive Brokers — место для долгих взносов, Bybit — биржа, где некоторые покупают криптовалюту каждый месяц. Комиссии и набор рынков меняются. Ставка в поле — не обещанная доходность. Страница считает и без счёта.",
      ctaButton: "Открыть Interactive Brokers",
      secondaryButton: "Открыть Bybit",
      body: `<p>В поле ставки стоит номинальная годовая ставка. Это не ставка за месяц и не APY, в котором капитализация уже сидит. Месячная ставка считается так: i = (1 + rate/n)^(n/12) - 1. Буква n — сколько раз в год начисляется названная ставка. Когда n равно 12, степень равна единице, и i просто равен rate/12. Номинальные 12% при ежемесячном начислении — это 1% в месяц. Когда n равно 1, двенадцать месячных шагов собирают одно годовое начисление, и это не то же самое, что поделить годовую ставку на 12. При n = 4 квартальный шаг равен rate/4, а месячная ставка переводит этот шаг на двенадцать месяцев. Если число, которое вы нашли, уже эффективная годовая доходность, его место в <a href="{{href:staking-apy-calculator}}">калькуляторе стейкинга</a>, в режиме APY. Иначе капитализация пойдёт второй раз.</p>
<h2>Конец месяца и начало месяца</h2>
<p>P — начальная сумма. PMT — довнесение за месяц. m — число месяцев: годы из формы, умноженные на 12 и округлённые до целого месяца. Будущая стоимость на конец месяца: FV = P*(1+i)^m + PMT*((1+i)^m - 1)/i. Первая часть растит то, что уже лежало. Вторая — ряд взносов. Каждый приходит после роста за этот месяц, поэтому последний взнос внутри окна ничего не зарабатывает. Для начала месяца этот ряд взносов дополнительно умножается на (1+i). Начальную сумму второй раз так не умножают: она и так растёт все m месяцев. Взнос в начале месяца уже внутри баланса, когда применяется ставка, поэтому итог чуть выше. При нулевой ставке дробь не используется. Будущая сумма — это начальная сумма плюс все взносы.</p>
<h2>Два итога, которые сходятся вручную</h2>
<p>Возьмите 1000 под 10% с начислением раз в год, на 2 года, без ежемесячного взноса. Через год будет 1100, через два — 1210. Страница тоже показывает 1210: 1,10 в квадрате равно 1,21. Месячная ставка при годовом начислении меньше, чем rate/12, но двадцать четыре таких шага всё равно приходят к 1210.</p>
<p>Теперь без начальной суммы, по 100 в месяц, номинальные 12% с начислением каждый месяц, 12 месяцев, взнос в конце месяца. Месячная ставка 0,01. Вы внесёте 1200. Ряд взносов даст около 1268,25. Лишние 68,25 — это процент на те платежи, которые пришли раньше. Те же числа в начале месяца дают около 1280,93, то есть конец месяца, умноженный на 1,01. Нулевая ставка вернёт 1200, если стартовали с нуля, или начальную сумму плюс 1200, если она была. При нуле оба момента внесения совпадают: расти нечему.</p>
<h2>Чего один прогон не знает</h2>
<ul>
<li>Ставка одна на весь срок. Изменение на следующий год — это новый прогон.</li>
<li>Налог, удержанная выплата и комиссия счёта не вычитаются.</li>
<li>Инфляция — отдельное допущение. Большая номинальная сумма может покупать меньше.</li>
<li>Месяцы целые. Полтора года — это 18 взносов.</li>
<li>Ставка в поле — ваше допущение, а не обещание счёта.</li>
</ul>
<p>Несколько покупок одного актива по разным ценам считает <a href="{{href:average-price-calculator}}">калькулятор средней цены</a>. Портфель под будущие расходы — это <a href="{{href:fire-calculator}}">калькулятор финансовой независимости</a>: срок он оценивает той же месячной моделью. Покупательная способность живёт в <a href="{{href:inflation-calculator}}">калькуляторе инфляции</a>, чтобы две ставки не прятались в одном числе. Брокерский счёт — место для долгих взносов. Арифметике он не нужен. <a href="{{aff:interactivebrokers}}">Interactive Brokers</a> — брокер, которым пользуются, когда инвестируют из другой страны. Комиссии, доступ к рынкам и правила резидентства меняются. В <a href="{{href:blog/interactive-brokers-review}}">статье про Interactive Brokers</a> сказано, что смотреть в текущем тарифе. Комиссию эта страница не цитирует. Если ежемесячная сумма — покупка криптовалюты, <a href="{{aff:bybit}}">Bybit</a> — другой тип счёта: монеты на бирже лежат у неё на хранении. Ни одна из кнопок не меняет будущую сумму.</p>`,
      faq: [
        {
          q: "Как посчитать сложный процент с ежемесячным довнесением?",
          a: "Введите номинальную годовую ставку и число начислений в год. Месячная ставка равна (1 + rate/n) в степени n/12 минус 1. При двенадцати начислениях это просто годовая ставка, делённая на 12. Каждый месяц баланс растёт, затем прибавляется взнос конца месяца. Начальная сумма и взносы показаны отдельно от прироста. Ставка на весь введённый срок одна и та же."
        },
        {
          q: "Чем взнос в начале месяца отличается от взноса в конце?",
          a: "Взнос в конце месяца приходит после роста за этот месяц, и последний платёж внутри окна ничего не зарабатывает. Взнос в начале месяца уже лежит на балансе, когда применяется ставка. Дополнительно на (1+i) умножается только ряд взносов, не начальная сумма. При 100 в месяц, 12% с ежемесячным начислением и сроке в год конец месяца даёт около 1268,25, а начало — около 1280,93."
        },
        {
          q: "Номинальная ставка и APY — это одно и то же?",
          a: "Нет. Номинальную ставку ещё надо капитализировать столько раз, сколько вы указали. APY — это уже эффективная годовая доходность, капитализация внутри. Если поставить APY в поле номинальной ставки, калькулятор начислит процент ещё раз и сумма выйдет завышенной. Для готовой эффективной ставки есть калькулятор стейкинга, и там нужен режим APY. Здесь ждут ставку до этой годовой капитализации."
        },
        {
          q: "Калькулятор сложного процента вычитает налог?",
          a: "Нет. Будущая сумма — это баланс при той ставке и тех взносах, которые вы ввели. Налог на прирост, удержанная выплата и комиссия брокера не вычитаются. Инфляция тоже не вычитается: большая номинальная сумма может покупать меньше, и для этого есть отдельная страница. Если ставка не будет постоянной, посчитайте заново. В форме одна ставка на весь срок."
        },
        {
          q: "Нужен ли брокерский счёт, чтобы будущая сумма была верной?",
          a: "Нет. Сумма считается в браузере по заполненным полям. Брокерский счёт нужен только если вы сами решите держать там взносы. Interactive Brokers — один из брокеров для инвестиций из другой страны, комиссии и правила резидентства меняются. Покупка криптовалюты на бирже — другой тип счёта, с риском хранения у компании. Ссылки арифметику не меняют, а ставка в поле — не обещанная доходность."
        }
      ]
    }
  },
  {
    slug: "average-price-calculator",
    cluster: "finance",
    calc: "average",
    category: "FinanceApplication",
    affiliate: "binance",
    secondary: "bybit",
    related: ["trading-fee-calculator", "position-size-calculator", "compound-interest-calculator", "staking-apy-calculator"],
    guide: "binance-vs-bybit",
    en: {
      title: "Average price calculator | Free Online Calculators",
      description: "Average price of several buys, fees included in the cost, plus the sale quote that covers a sell fee. Matching lots are extra rows, not a special case.",
      h1: "Average price calculator",
      lede: "Several buys, with fees in money, become one average cost and the sale quote that covers a percentage sell fee.",
      banner: "This is arithmetic for a plan. It is not a forecast and not investment, tax, or legal advice.",
      ctaTitle: "An exchange account is separate from the average",
      ctaBody: "The average and the break-even are computed in the browser. Binance and Bybit are exchanges where people trade. Coins left there are in that company's custody. A hardware wallet is a different purchase. Fee schedules change. You can use this page without signing up.",
      ctaButton: "Open Binance",
      secondaryButton: "Open Bybit",
      body: `<p>Each row is one lot. The cost of a row is quantity times price, plus the fee on that row. That fee is an amount of money, not a percent. If the exchange showed you a percent, turn it into money before you type it, or the average will be wrong. The average price is (the sum of quantity times price, plus the fees) divided by the total quantity. Empty rows do not belong in the sum. A quantity of zero is rejected, because there is nothing to divide by. Overlapping lots are just more rows. Two buys at the same price are two lines. The formula adds them. It does not merge matching prices, and it does not care which row you typed first.</p>
<h2>The sale quote that covers the sell fee</h2>
<p>The break-even sale quote is the average divided by (1 minus the sell fee). The sell fee is a percent of the sale, not another money amount on the row. When that percent is zero, the break-even quote is the average itself. You need a quote high enough that, after the sale fee is taken off, what you receive still covers the average cost. A target sale price is optional. If you type one, profit or loss is the target minus the break-even quote, times the total quantity. Using the raw average there, and forgetting the sell fee, makes a winner look better than the cash you would actually get.</p>
<h2>3200, and what averaging down really does</h2>
<p>Buy 2 units at 3000 and 1 unit at 3600, with no fees. Cost is 6000 plus 3600, which is 9600. Quantity is 3. Average is 3200. Add a fee of 30 on the single unit and the cost becomes 9630, so the average is 3210. The fee is spread across every unit, because there is one average for the whole quantity. A sell fee of 1 percent on the no-fee case needs 3200 divided by 0.99, about 3232.32, before you are back to flat.</p>
<p>Averaging down does not jump the average to the new price. Suppose you hold 2 units at 3000, so the average is 3000, and you buy 1 more at 2400 with no fee. New cost is 8400. New quantity is 3. New average is 2800. The gap from the old average to the new price is 600. The new lot is one third of the new size, so the average moves one third of the way, by 200, and lands on 2800. A small buy barely moves a large position. A buy larger than what you already hold pulls the average past the midpoint, toward the new price, still in proportion to size.</p>
<h2>What this average is not</h2>
<ul>
<li>It is not a forecast of the next trade. It is the cost of the lots you typed.</li>
<li>It does not read an order book or a live fee schedule.</li>
<li>A sale fee of zero means the break-even quote equals the average.</li>
<li>Taxes on a gain are outside the formula.</li>
<li>Coins left on an exchange are in that company's custody. A hardware wallet is a separate device for coins you withdraw.</li>
</ul>
<p>The percent you pay to get in and out is a different question. The <a href="{{href:trading-fee-calculator}}">trading fee calculator</a> takes a maker or taker percent and slippage and solves a round trip. Fee schedules change, so type the percent from the schedule you were offered. <a href="{{aff:binance}}">Binance</a> and <a href="{{aff:bybit}}">Bybit</a> are exchanges where people trade the coins this form is often used for. Opening an account is optional. The average does not change if you never do. The <a href="{{href:blog/binance-vs-bybit}}">Binance and Bybit guide</a> describes what to compare, including custody, and it does not quote a fee that the firm can change next week. A hardware wallet is not included with the exchange account. Withdrawing to one is a separate decision, and this page does not price that device.</p>`,
      faq: [
        {
          q: "How do you calculate the average price of several buys?",
          a: "Multiply each quantity by its price, add the fee in money on that row, add the rows together, and divide by the total quantity. The fee on a row is cash, not a percent. Two buys at the same price are just two rows, and the order of the rows does not matter. The result is one cost for the whole pile. It is not a prediction of the next quote you will see."
        },
        {
          q: "Does averaging down reset my price to the latest buy?",
          a: "No. The new average moves toward the new price in proportion to size. It does not jump there. If you hold 2 units at 3000 and buy 1 more at 2400 with no fee, the new average is 2800. The new lot is one third of the new quantity, so the average moves one third of the gap. A small extra buy barely moves a large position. Only a much larger buy pulls the average close to the new price."
        },
        {
          q: "How is the break-even sale price different from the average?",
          a: "The average is your cost per unit, fees on the buys included. The break-even sale quote is that average divided by 1 minus the sell fee. The sell fee is a percent. With no sell fee, the two numbers match. Buy 2 at 3000 and 1 at 3600 with no fees and the average is 3200. A 1 percent sell fee needs a quote of about 3232.32 before the cash you receive covers that average."
        },
        {
          q: "Should the fee on each lot be a percent or an amount?",
          a: "Type an amount of money on each lot. If the exchange showed a percent, convert it to money for that fill before you enter the row. The only percent on this page is the sale fee, and it is used solely for the break-even quote. Mixing those two boxes, a percent in the money field or cash in the percent field, moves the average or the sale quote for a reason that is not in the market."
        },
        {
          q: "Does the average price require an exchange account?",
          a: "No. The page adds the lots in the browser. An exchange account is where a trade can happen, and coins left there stay in that company's custody. A hardware wallet is a separate device for coins you withdraw. It is not part of the exchange signup, and this average does not need either one. Binance and Bybit fee schedules change. The guide says what to compare. It does not quote a tariff that would be stale next week."
        }
      ]
    },
    ru: {
      title: "Средняя цена нескольких покупок | Бесплатные калькуляторы",
      description: "Средняя цена нескольких покупок с учётом комиссий и котировка продажи, которая покрывает комиссию выхода. Совпадающие лоты — просто ещё строки.",
      h1: "Калькулятор средней цены",
      lede: "Несколько покупок с комиссией в деньгах собираются в одну среднюю цену и в котировку продажи, которая покрывает процент комиссии выхода.",
      banner: "Это арифметика для плана. Это не прогноз и не инвестиционная, налоговая или юридическая рекомендация.",
      ctaTitle: "Биржа и средняя цена — разные вещи",
      ctaBody: "Средняя и безубыток считаются в браузере. Binance и Bybit — биржи, где люди торгуют. Монеты, которые там остаются, лежат у компании на хранении. Аппаратный кошелёк — отдельная покупка. Тарифы меняются. Регистрация для расчёта не нужна.",
      ctaButton: "Открыть Binance",
      secondaryButton: "Открыть Bybit",
      body: `<p>Каждая строка — один лот. Затрата строки — это количество, умноженное на цену, плюс комиссия этой строки. Комиссия лота — сумма денег, не процент. Если биржа показала процент, переведите его в деньги до того, как впишете, иначе средняя поедет. Средняя цена равна (сумме произведений количества на цену плюс комиссии), делённой на общее количество. Пустые строки в сумму не входят. Нулевое количество страница отвергает: делить не на что. Совпадающие лоты — это просто ещё строки. Две покупки по одной цене — две линии. Формула их складывает. Одинаковые цены она не склеивает, и порядок строк ей безразличен.</p>
<h2>Котировка, которая покрывает комиссию продажи</h2>
<p>Цена продажи в ноль — это средняя, делённая на (1 минус комиссия продажи). Комиссия продажи — процент от сделки, а не ещё одна денежная сумма в строке. Когда этот процент нулевой, котировка безубытка равна самой средней. Нужна такая котировка, чтобы после снятия комиссии продажи на руки пришло не меньше средней затраты. Целевая цена продажи необязательна. Если ввести её, прибыль или убыток — это цель минус цена безубытка, умноженная на всё количество. Если подставить голую среднюю и забыть процент продажи, сделка выглядит лучше, чем деньги, которые вы реально получите.</p>
<h2>Число 3200 и что делает усреднение вниз</h2>
<p>Купите 2 штуки по 3000 и 1 по 3600, без комиссий. Затрата — 6000 плюс 3600, то есть 9600. Количество — 3. Средняя цена — 3200. Добавьте комиссию 30 на одиночную штуку: затрата станет 9630, средняя — 3210. Комиссия размазывается на все штуки, потому что средняя одна на всё количество. Комиссия продажи 1% в варианте без комиссий лотов требует 3200 разделить на 0,99, около 3232,32, и только тогда вы в нуле.</p>
<p>Усреднение вниз не перебрасывает среднюю на новую цену. Допустим, у вас 2 штуки по 3000, средняя тоже 3000, и вы докупаете 1 по 2400 без комиссии. Новая затрата 8400, новое количество 3, новая средняя 2800. Разрыв между старой средней и новой ценой — 600. Новый лот — треть нового объёма, поэтому средняя проходит треть пути, на 200, и садится на 2800. Маленькая докупка почти не двигает крупную позицию. Покупка крупнее того, что уже есть, перетягивает среднюю за середину, к новой цене, но всё равно пропорционально размеру, а не скачком.</p>
<h2>Чем эта средняя не является</h2>
<ul>
<li>Это не прогноз следующей сделки. Это затрата тех лотов, которые вы ввели.</li>
<li>Страница не читает стакан и не подтягивает живой тариф.</li>
<li>Нулевая комиссия продажи означает, что безубыток равен средней.</li>
<li>Налог с прибыли в формуле не сидит.</li>
<li>Монеты на бирже лежат у компании. Аппаратный кошелёк — отдельное устройство для того, что вы вывели.</li>
</ul>
<p>Процент на вход и на выход — другой вопрос. <a href="{{href:trading-fee-calculator}}">Калькулятор торговой комиссии</a> берёт процент мейкера или тейкера и проскальзывание и считает круг. Тарифы меняются, поэтому вводите процент из того расписания, которое вам показали. <a href="{{aff:binance}}">Binance</a> и <a href="{{aff:bybit}}">Bybit</a> — биржи, где торгуют монетами, для которых эту форму часто открывают. Счёт открывать не обязательно. Средняя не изменится, если вы этого не сделаете. В <a href="{{href:blog/binance-vs-bybit}}">сравнении Binance и Bybit</a> сказано, что сопоставлять, включая хранение, и нет тарифа, который фирма может поменять на следующей неделе. Аппаратный кошелёк к биржевому счёту не прилагается. Вывод на него — отдельное решение, и цену устройства эта страница не называет.</p>`,
      faq: [
        {
          q: "Как считается средняя цена нескольких покупок?",
          a: "Умножьте количество на цену, прибавьте комиссию строки в деньгах, сложите строки и разделите на общее количество. Комиссия лота — это деньги, не процент. Две покупки по одной цене — просто две строки, порядок не важен. На выходе одна затрата на всю кучу. Это не предсказание следующей котировки, которую вы увидите на экране."
        },
        {
          q: "Усреднение вниз сбрасывает цену на последнюю покупку?",
          a: "Нет. Новая средняя двигается к новой цене пропорционально размеру и не прыгает в неё. Если держать 2 штуки по 3000 и купить ещё 1 по 2400 без комиссии, новая средняя будет 2800. Новый лот — треть нового количества, поэтому средняя проходит треть разрыва. Маленькая докупка почти не двигает крупную позицию. Только заметно более крупная покупка подтянет среднюю близко к новой цене."
        },
        {
          q: "Чем цена продажи в ноль отличается от средней?",
          a: "Средняя — это затрата на штуку, комиссии покупок уже внутри. Котировка безубытка — эта средняя, делённая на 1 минус комиссию продажи. Комиссия продажи — процент. Без неё оба числа совпадают. Покупка 2 по 3000 и 1 по 3600 без комиссий даёт среднюю 3200. При комиссии продажи 1% нужна котировка около 3232,32, чтобы полученные деньги покрыли эту среднюю."
        },
        {
          q: "Комиссию лота вводить процентом или суммой?",
          a: "В строке лота пишите сумму денег. Если биржа показала процент, переведите его в деньги этой сделки до ввода. Единственный процент на странице — комиссия продажи, и она нужна только для котировки безубытка. Если перепутать поля, процент в денежном поле или деньги в процентном, средняя или котировка сдвинется по причине, которой на рынке не было."
        },
        {
          q: "Для средней цены нужен счёт на бирже?",
          a: "Нет. Страница складывает лоты в браузере. Биржевой счёт — место, где сделка может пройти, и монеты, которые там остались, лежат у компании. Аппаратный кошелёк — отдельное устройство для выведенных монет. К регистрации на бирже он не прилагается, и средней не нужны ни счёт, ни кошелёк. Тарифы Binance и Bybit меняются. Статья говорит, что сравнивать, и не цитирует прайс, который устареет через неделю."
        }
      ]
    }
  },
  {
    slug: "staking-apy-calculator",
    cluster: "finance",
    calc: "staking",
    category: "FinanceApplication",
    affiliate: "bybit",
    secondary: "binance",
    related: ["compound-interest-calculator", "average-price-calculator", "trading-fee-calculator", "inflation-calculator"],
    guide: "binance-vs-bybit",
    en: {
      title: "Staking APY calculator | Free Online Calculators",
      description: "Compare staking yields you type. An APY is applied once a year. An APR is converted to an effective rate. Yields change, and this is not a bank deposit.",
      h1: "Staking APY calculator",
      lede: "Type an APY or an APR for each coin, see the effective yearly rate, and sort the rows by gain rather than by the headline rate.",
      banner: "This is arithmetic for a plan. It is not a forecast and not investment, tax, or legal advice.",
      ctaTitle: "Read the yield where it is offered",
      ctaBody: "This page compares rates you type. It does not need a Bybit or Binance account. If you open one, read the current yield, the lockup, and the fee there, because posted yields change. The calculator does not lock a rate in, and it runs without an account.",
      ctaButton: "Open Bybit",
      secondaryButton: "Open Binance",
      body: `<p>Each row is one coin, with an amount and a rate you type. The years apply to every row. If the rate is an APY, the future value is the amount times (1 plus APY) to the power of the years. The effective yearly rate is the APY itself. The compounds box is ignored in that mode, because an APY already includes compounding. Do not compound it again in your head, and do not also divide it by 12 and run a monthly loop. That second pass counts the same growth twice and the pile looks larger than the definition allows. A posted yield is not a promise that the rate will still be there next month. Yields change. This page only multiplies the rate you typed.</p>
<h2>APR is a different kind of input</h2>
<p>If the rate is an APR compounded n times a year, the effective yearly rate is (1 plus APR divided by n) to the power of n, minus 1. The future value then uses that effective rate once a year: amount times (1 plus effective) to the power of the years. It does not compound monthly on top. Take 12 percent APR compounded 12 times. The effective rate is 1.01 to the 12th, minus 1, about 12.68 percent. On 1000 for one year the future value is about 1126.83. If you then treat 12.68 percent as an APY and also picture monthly compounding, you have counted the year twice. For a one-year APR row, the future value is simply the amount times one plus the effective rate.</p>
<h2>Sort by gain, not by the headline</h2>
<p>Rows are ordered by gain, largest first. Gain is the future value minus the amount you typed. A large balance at a modest rate can outrank a small balance at a high rate. Put 1000 at 5 percent APY for 2 years next to 5000 at 2 percent APY for the same 2 years. The first becomes 1102.50, a gain of 102.50. The second becomes 5202, a gain of 202, because 1.02 squared is 1.0404. The lower rate ranks first. The combined value and the combined gain add the rows. They are not a blended APY, and they do not describe a mix that you rebalance.</p>
<h2>What the yield figure leaves out</h2>
<ul>
<li>The rate is constant. A banner rate from this week is not locked in by the formula.</li>
<li>Some products lock the coins until a timer ends. The formula has no countdown.</li>
<li>Some proof-of-stake assets can be reduced by slashing if a validator breaks a rule. The number here does not haircut the amount.</li>
<li>A stablecoin yield is not a bank deposit and it is not a government-insured balance.</li>
<li>Inflation eats the nominal yield. A gain in coin terms can still buy less.</li>
</ul>
<p>The <a href="{{href:inflation-calculator}}">inflation calculator</a> is where a currency's inflation rate sits next to a nominal return, so you can see what is left after prices move. Taxes and trading fees are outside this multiplication. The <a href="{{href:trading-fee-calculator}}">trading fee calculator</a> is the place for a percent taken on a fill. <a href="{{aff:bybit}}">Bybit</a> and <a href="{{aff:binance}}">Binance</a> show yields that change, along with lockups and fees that also change. Opening an account lets you read the current terms. It does not paste that rate into this page, and the page works if you never sign up. The <a href="{{href:blog/binance-vs-bybit}}">Binance and Bybit guide</a> says what to check, including the fact that coins on an exchange are not in your own wallet. This comparison is arithmetic on the rates you chose to test.</p>`,
      faq: [
        {
          q: "What is the difference between APY and APR for staking?",
          a: "APY is already the effective yearly rate. The future value is the amount times (1 plus APY) to the power of the years, and you should not compound that figure again. APR is a nominal rate. The page turns it into an effective yearly rate with (1 plus APR divided by n) to the power of n, minus 1, and only then applies that rate once a year. The compounds field matters for APR and is ignored for APY."
        },
        {
          q: "How much is 1000 at 5 percent APY after 2 years?",
          a: "It is 1102.50. The first year grows 1000 to 1050, and the second year grows 1050 by 5 percent, which adds 52.50. That second step is the compounding already inside the APY. Do not also split 5 percent into months and compound those months on top. The gain is 102.50 under a rate that stays at 5 percent for both years. If the posted yield changes, this figure no longer describes the product."
        },
        {
          q: "Why does the table sort by gain instead of by the rate?",
          a: "Gain is future value minus the amount you typed, and a larger pile at a lower rate can make more money than a small pile at a high rate. 1000 at 5 percent APY for 2 years gains 102.50. 5000 at 2 percent APY for 2 years gains 202. The lower rate ranks first. The combined gain adds the rows. It is not a blended APY of a portfolio, and it does not assume you move coins between rows."
        },
        {
          q: "Is a stablecoin yield the same as a bank deposit?",
          a: "No. A stablecoin reward is a rate offered by a protocol or an exchange. It is not a bank deposit, and it is not insured the way a deposit scheme insures cash. The coin can lose its peg, the rate can change, and a lockup can stop you selling. Slashing can reduce some proof-of-stake assets when a validator breaks a rule. None of those events is subtracted in this formula. The number is the rate you typed, held constant."
        },
        {
          q: "Does staking yield survive inflation?",
          a: "The formula does not know. It grows the amount by the rate you typed and stops there. Inflation can eat that nominal gain, so the same coins buy less of ordinary goods even when the row shows a profit. Put the currency inflation next to a nominal return on the inflation calculator if you want the gap made explicit. Yields also change, and a lockup can keep you in the product after the banner rate has moved."
        }
      ]
    },
    ru: {
      title: "Стейкинг: APY и эффективная ставка | Бесплатные калькуляторы",
      description: "Сравнение доходности стейкинга по ставкам, которые вы вводите. APY уже с капитализацией. APR переводится в эффективную ставку. Это не банковский вклад.",
      h1: "Калькулятор стейкинга",
      lede: "Для каждой монеты введите APY или APR, посмотрите эффективную годовую ставку и сортировку по приросту, а не по красивой цифре в заголовке.",
      banner: "Это арифметика для плана. Это не прогноз и не инвестиционная, налоговая или юридическая рекомендация.",
      ctaTitle: "Доходность читайте там, где её дают",
      ctaBody: "Страница сравнивает ставки, которые вы ввели. Счёт на Bybit или Binance ей не нужен. Если откроете, смотрите текущую доходность, срок блокировки и комиссию: объявленные ставки меняются. Калькулятор ставку не фиксирует и работает без регистрации.",
      ctaButton: "Открыть Bybit",
      secondaryButton: "Открыть Binance",
      body: `<p>Каждая строка — монета, сумма и ставка, которые вы вводите. Срок в годах общий для всех строк. Если ставка — это APY, будущая стоимость равна сумме, умноженной на (1 плюс APY) в степени лет. Эффективная годовая ставка и есть этот APY. Поле числа начислений в этом режиме не используется: в APY капитализация уже входит. Не капитализируйте её ещё раз в уме и не делите на 12, чтобы прогнать месяцы. Второй проход посчитает тот же рост дважды, и куча станет больше, чем позволяет само определение. Объявленная доходность — не обещание, что ставка доживёт до следующего месяца. Доходности меняются. Страница умножает только ту ставку, которую вы вписали.</p>
<h2>APR — другой тип ввода</h2>
<p>Если ставка — это APR с начислением n раз в год, эффективная годовая равна (1 плюс APR, делённый на n) в степени n, минус 1. Дальше будущая стоимость берёт эту эффективную ставку один раз в год: сумма, умноженная на (1 плюс эффективную) в степени лет. Сверху помесячно она не капитализируется. Возьмите APR 12% с двенадцатью начислениями. Эффективная ставка — это 1,01 в двенадцатой степени минус 1, около 12,68%. На 1000 за один год выйдет около 1126,83. Если после этого принять 12,68% за APY и ещё представить месячную капитализацию, год посчитан дважды. Для строки APR на один год будущая стоимость — это просто сумма, умноженная на единицу плюс эффективную ставку.</p>
<h2>Сортировка по приросту, не по заголовку</h2>
<p>Строки стоят по приросту, сначала больший. Прирост — это будущая стоимость минус введённая сумма. Крупный остаток при скромной ставке может обогнать мелкий остаток при высокой. Поставьте 1000 под 5% APY на 2 года рядом с 5000 под 2% APY на те же 2 года. Первая сумма станет 1102,50, прирост 102,50. Вторая станет 5202, прирост 202, потому что 1,02 в квадрате — это 1,0404. Более низкая ставка окажется выше в списке. Общая стоимость и общий прирост складывают строки. Это не смешанный APY и не описание портфеля, который вы перекладываете.</p>
<h2>Чего в цифре доходности нет</h2>
<ul>
<li>Ставка постоянная. Цифра с баннера этой недели формулой не зафиксирована.</li>
<li>У части продуктов монеты заперты до конца таймера. Обратного отсчёта в формуле нет.</li>
<li>У части активов с доказательством доли слэшинг может урезать сумму, если валидатор нарушил правило. Здесь урезания нет.</li>
<li>Доходность стейблкоина — не банковский вклад и не сумма под государственной страховкой вкладов.</li>
<li>Инфляция съедает номинальную доходность. Прирост в монетах всё равно может покупать меньше.</li>
</ul>
<p><a href="{{href:inflation-calculator}}">Калькулятор инфляции</a> ставит инфляцию валюты рядом с номинальной доходностью, чтобы было видно, что остаётся после роста цен. Налог и торговая комиссия в этом умножении не сидят. Процент со сделки считает <a href="{{href:trading-fee-calculator}}">калькулятор торговой комиссии</a>. На <a href="{{aff:bybit}}">Bybit</a> и <a href="{{aff:binance}}">Binance</a> доходности меняются, и вместе с ними меняются сроки блокировки и комиссии. Счёт позволяет прочитать текущие условия. В эту страницу он ставку не подставляет, и страница работает без регистрации. В <a href="{{href:blog/binance-vs-bybit}}">сравнении Binance и Bybit</a> сказано, что проверять, в том числе то, что монеты на бирже — не ваш собственный кошелёк. Здесь арифметика по тем ставкам, которые вы решили проверить.</p>`,
      faq: [
        {
          q: "Чем APY отличается от APR в стейкинге?",
          a: "APY — это уже эффективная годовая ставка, капитализация внутри. Будущая стоимость равна сумме, умноженной на (1 плюс APY) в степени лет, и эту цифру не надо капитализировать ещё раз. APR — номинальная ставка. Страница переводит её в эффективную годовую по формуле (1 плюс APR, делённый на n) в степени n минус 1, и только потом применяет ставку раз в год. Число начислений важно для APR и игнорируется для APY."
        },
        {
          q: "Сколько будет с 1000 при 5% APY через 2 года?",
          a: "Будет 1102,50. Первый год растит 1000 до 1050, второй растит 1050 на 5%, это ещё 52,50. Второй шаг — та капитализация, которая уже сидит внутри APY. Не надо дополнительно дробить 5% на месяцы и капитализировать их сверху. Прирост 102,50, если ставка все два года держится на 5%. Если объявленная доходность изменится, эта цифра продукт больше не описывает."
        },
        {
          q: "Почему таблица сортирует по приросту, а не по ставке?",
          a: "Прирост — это будущая стоимость минус введённая сумма, и крупная куча при низкой ставке может дать больше денег, чем мелкая при высокой. 1000 под 5% APY за 2 года дают прирост 102,50. 5000 под 2% APY за 2 года дают прирост 202. Более низкая ставка оказывается первой. Общий прирост складывает строки. Это не смешанный APY портфеля, и страница не предполагает, что вы перекладываете монеты между строками."
        },
        {
          q: "Доходность стейблкоина — это банковский вклад?",
          a: "Нет. Награда по стейблкоину — ставка протокола или биржи. Это не банковский вклад и не сумма, которую страхует система страхования вкладов. Монета может потерять привязку, ставка может измениться, блокировка может не дать продать. Слэшинг может урезать некоторые активы с доказательством доли, если валидатор нарушил правило. Ни одно из этих событий формула не вычитает. Число — это введённая ставка, которую держат постоянной."
        },
        {
          q: "Доходность стейкинга переживает инфляцию?",
          a: "Формула этого не знает. Она растит сумму на введённую ставку и на этом останавливается. Инфляция может съесть номинальный прирост: те же монеты купят меньше обычных товаров, даже если в строке есть прибыль. Инфляцию валюты рядом с номинальной доходностью ставьте в калькуляторе инфляции, если хотите видеть разрыв явно. Доходности ещё и меняются, а блокировка может оставить вас в продукте после того, как цифра на баннере уже другая."
        }
      ]
    }
  },
  {
    slug: "trading-fee-calculator",
    cluster: "finance",
    calc: "fees",
    category: "FinanceApplication",
    affiliate: "bybit",
    secondary: "binance",
    related: ["position-size-calculator", "average-price-calculator", "staking-apy-calculator", "compound-interest-calculator"],
    guide: "binance-vs-bybit",
    en: {
      title: "Trading fee calculator | Free Online Calculators",
      description: "Trading fees and slippage on a buy, a sell, or a round trip, plus the sell quote that gets back to flat. A discount only changes the percent.",
      h1: "Trading fee calculator",
      lede: "Slippage and a maker or taker fee, on the way in and the way out, and the sell quote that gets you back to flat.",
      banner: "This is arithmetic for a plan. It is not a forecast and not investment, tax, or legal advice.",
      ctaTitle: "Check the fee tier you were actually given",
      ctaBody: "Type the maker or taker percent from the schedule in front of you. A discount changes that percent, not the formula. Bybit and Binance publish tiers that change. An account is one place to see your own tier. This page still works if you never open one, and it does not promise a discount amount.",
      ctaButton: "Open Bybit",
      secondaryButton: "Open Binance",
      body: `<p>The quote is the price you type, before the fill gets worse. On a buy, the execution price is the quote times (1 plus slippage). Slippage here is a percent you choose, not a measurement of the book. Notional is that execution price times the quantity. The fee is the notional times the fee rate. Buy total is the notional plus the fee: it is the cash that has to leave to own the coins. The effective price is the buy total divided by the quantity, so the fee is visible as a higher price per unit. A sell runs the same pieces with the sign flipped. Execution is the quote times (1 minus slippage), because a worse sell fills lower. The fee is still notional times the fee rate, and the cash you receive is the notional minus the fee.</p>
<h2>A round trip and the quote that breaks even</h2>
<p>The break-even sell quote is the buy total divided by the quantity, times (1 minus slippage), times (1 minus the exit fee). In symbols: buyTotal / (qty * (1 - slippage) * (1 - exitFee)). The exit is assumed to suffer the same slippage percent you typed, and the exit fee comes off the slipped notional. You are solving for the quote at which the cash coming back equals the cash that left. It is not a target a trader owes you. It is the flat line under the percents you entered.</p>
<p>Buy 2 units at a quote of 100, taker fee 0.1 percent, slippage zero. Notional is 200. The fee is 0.20. The total is 200.20. The effective price is 100.10. With zero slippage and 0.1 percent on both sides, the break-even sell quote is 100.10 divided by 0.999, about 100.20. The same figure is 200.20 divided by 2 times 0.999. The extra fraction above 100.10 is the fee you will pay on the way out. If you show a buy only, there is no break-even line, because the exit fee has not been chosen yet.</p>
<h2>Maker, taker, and a discount</h2>
<p>A taker order matches immediately against an order already resting on the book. You pay for a fill now, at the quote, plus whatever slippage you typed if the book is thin. A maker order sits on the book and waits for someone else to trade against it. It may not fill. Exchanges often charge these two roles different percents. You type both. The entry leg uses the percent of the role you picked for the entry, and the exit leg uses the role you picked for the exit. A fee discount, a higher tier, or a token offset changes the percent you type. It does not change the formula. This page does not know your tier and does not promise a discount amount.</p>
<ul>
<li>Slippage is your input. The page does not read a live book.</li>
<li>There is no minimum fee, no funding payment, and no separate spread hiding inside the quote.</li>
<li>Maker and taker are only two percents. The role selects which one a leg uses.</li>
<li>A round trip needs both an entry fee and an exit fee.</li>
<li>Position size is a different page. This one does not tell you how many units to hold.</li>
</ul>
<p>How many units belong in the trade, given a stop, is the <a href="{{href:position-size-calculator}}">position size calculator</a>. It does not include these fees, so the two pages stay honest about what each one omits. <a href="{{aff:bybit}}">Bybit</a> and <a href="{{aff:binance}}">Binance</a> publish fee tiers that change with volume and with promotions. An account is a place to see the tier you were actually offered. The calculator works if you type the percents from a screenshot and never sign up. The <a href="{{href:blog/binance-vs-bybit}}">Binance and Bybit guide</a> says what to compare. It does not quote a discount that would be wrong next week.</p>`,
      faq: [
        {
          q: "How do trading fees and slippage change the price I pay?",
          a: "On a buy, the execution price is the quote times 1 plus the slippage percent. Notional is that price times quantity. The fee is the notional times the fee rate, and the cash out is notional plus fee. With 2 units at a quote of 100, a 0.1 percent taker fee, and no slippage, notional is 200, the fee is 0.20, and you pay 200.20. The effective price is 100.10. Slippage above zero raises the execution price before the fee."
        },
        {
          q: "How do you find the break-even sell price after fees?",
          a: "Divide the cash you paid to buy by the quantity, then by 1 minus slippage, then by 1 minus the exit fee. With zero slippage and 0.1 percent on both sides, a buy at 100 that cost 100.10 per unit breaks even at 100.10 divided by 0.999, about 100.20. The exit is assumed to fill worse by the same slippage percent, and the exit fee comes off that slipped notional. The result is a flat line, not a price target."
        },
        {
          q: "What is the difference between a maker fee and a taker fee?",
          a: "A taker order matches at once against an order already on the book, so you pay for a fill now. A maker order rests on the book and waits for someone else to trade against it, and it may never fill. Exchanges often charge the two roles different percents. You type both, and each leg uses the role you picked for it. A discount or a higher tier changes the percent you type. The multiplication stays notional times that rate."
        },
        {
          q: "Does a fee discount change the formula?",
          a: "No. A discount, a volume tier, or a token offset changes the maker or taker percent you type into the form. The fee is still the notional times that rate, and the break-even quote still divides by 1 minus the exit fee. This page does not know which tier you are on and does not promise a discount amount. Read the schedule you were offered, including any expiry, because published tiers change."
        },
        {
          q: "Do I need an exchange account to calculate the fee?",
          a: "No. Type the percents and the quote, and the cash figures are computed in the browser. An account at Bybit or Binance is one place to see the fee tier you were actually given. Those tiers change, and this page will not invent a discount. You can calculate from a schedule you already have and never sign up. The result is not a suggestion to place the trade."
        }
      ]
    },
    ru: {
      title: "Торговая комиссия и проскальзывание | Бесплатные калькуляторы",
      description: "Комиссия и проскальзывание на покупке, продаже или круге, плюс котировка безубытка. Скидка меняет процент, который вы вводите, а не формулу.",
      h1: "Калькулятор торговой комиссии",
      lede: "Проскальзывание и комиссия мейкера или тейкера на входе и на выходе, плюс котировка продажи, на которой вы выходите в ноль.",
      banner: "Это арифметика для плана. Это не прогноз и не инвестиционная, налоговая или юридическая рекомендация.",
      ctaTitle: "Сверьте свой тариф, а не чужую скидку",
      ctaBody: "Введите процент мейкера или тейкера из тарифа, который вам показали. Скидка меняет этот процент, не формулу. У Bybit и Binance ступени комиссии меняются. Счёт — способ увидеть свою ступень. Страница работает и без него и не обещает размер скидки.",
      ctaButton: "Открыть Bybit",
      secondaryButton: "Открыть Binance",
      body: `<p>Котировка — это цена, которую вы ввели, до того как исполнение стало хуже. На покупке цена исполнения равна котировке, умноженной на (1 плюс проскальзывание). Проскальзывание здесь — процент, который выбираете вы, а не замер стакана. Сумма сделки — эта цена исполнения, умноженная на количество. Комиссия — сумма сделки, умноженная на ставку комиссии. Итог покупки — сумма сделки плюс комиссия: столько денег должно уйти, чтобы монеты стали вашими. Эффективная цена — итог покупки, делённый на количество, поэтому комиссия видна как более дорогая штука. Продажа собирается из тех же частей с обратным знаком. Исполнение — котировка, умноженная на (1 минус проскальзывание), потому что плохая продажа проходит ниже. Комиссия снова равна сумме сделки, умноженной на ставку, а деньги на руки — сумма сделки минус комиссия.</p>
<h2>Круг и котировка, на которой вы в нуле</h2>
<p>Котировка продажи в ноль — это итог покупки, делённый на количество, на (1 минус проскальзывание) и на (1 минус комиссию выхода). В записи: buyTotal / (qty * (1 - slippage) * (1 - exitFee)). Считается, что выход получит то же проскальзывание, которое вы ввели, а комиссия выхода снимается уже с проскальзнувшей суммы. Вы ищете котировку, при которой вернувшиеся деньги равны ушедшим. Это не цель, которую вам должен рынок. Это линия нуля при тех процентах, которые вы вписали.</p>
<p>Купите 2 штуки по котировке 100, комиссия тейкера 0,1%, проскальзывание ноль. Сумма сделки 200. Комиссия 0,20. Итог 200,20. Эффективная цена 100,10. При нулевом проскальзывании и 0,1% с обеих сторон котировка безубытка — это 100,10 разделить на 0,999, около 100,20. Та же цифра — 200,20 разделить на 2 умножить на 0,999. Дробь сверх 100,10 — это комиссия, которую вы заплатите на выходе. Если показать только покупку, строки безубытка нет: комиссия выхода ещё не выбрана.</p>
<h2>Мейкер, тейкер и скидка</h2>
<p>Ордер тейкера сразу пересекается с заявкой, которая уже лежит в стакане. Вы платите за исполнение сейчас, по котировке, плюс то проскальзывание, которое ввели, если стакан тонкий. Ордер мейкера стоит в стакане и ждёт, пока кто-то другой с ним пересечётся. Он может не исполниться. Биржи часто берут за эти две роли разные проценты. Вы вводите оба. Вход берёт процент той роли, которую вы выбрали на вход, выход — роль, которую вы выбрали на выход. Скидка, более высокая ступень или зачёт токеном меняет процент, который вы вводите. Формулу это не меняет. Страница не знает вашу ступень и не обещает размер скидки.</p>
<ul>
<li>Проскальзывание — ваш ввод. Живой стакан страница не читает.</li>
<li>Нет минимальной комиссии, платежа за финансирование и отдельного спреда внутри котировки.</li>
<li>Мейкер и тейкер — только два процента. Роль выбирает, какой из них берёт сторона сделки.</li>
<li>Для круга нужны и комиссия входа, и комиссия выхода.</li>
<li>Размер позиции — другая страница. Эта не говорит, сколько штук держать.</li>
</ul>
<p>Сколько единиц брать в сделку при заданном стопе, считает <a href="{{href:position-size-calculator}}">калькулятор размера позиции</a>. Комиссий он не включает, и страницы честно расходятся в том, что каждая опускает. У <a href="{{aff:bybit}}">Bybit</a> и <a href="{{aff:binance}}">Binance</a> ступени комиссии меняются вместе с объёмом и временными условиями. Счёт — место, где видна ступень, которую предложили именно вам. Калькулятор работает, если вписать проценты со снимка экрана и никуда не регистрироваться. В <a href="{{href:blog/binance-vs-bybit}}">сравнении Binance и Bybit</a> сказано, что сопоставлять. Скидку, которая через неделю будет неверной, статья не называет.</p>`,
      faq: [
        {
          q: "Как комиссия и проскальзывание меняют цену покупки?",
          a: "На покупке цена исполнения равна котировке, умноженной на 1 плюс процент проскальзывания. Сумма сделки — эта цена, умноженная на количество. Комиссия — сумма сделки, умноженная на ставку, а ушедшие деньги — сумма сделки плюс комиссия. Две штуки по котировке 100, комиссия тейкера 0,1% и нулевое проскальзывание: сумма сделки 200, комиссия 0,20, платите 200,20. Эффективная цена 100,10. Проскальзывание выше нуля поднимает цену исполнения ещё до комиссии."
        },
        {
          q: "Как найти цену продажи в ноль после комиссий?",
          a: "Разделите деньги, ушедшие на покупку, на количество, затем на 1 минус проскальзывание и на 1 минус комиссию выхода. При нулевом проскальзывании и 0,1% с обеих сторон покупка по 100, которая обошлась в 100,10 за штуку, выходит в ноль при 100,10 разделить на 0,999, около 100,20. Считается, что выход исполнится хуже на тот же процент проскальзывания, а комиссия выхода снимается с этой суммы. Это линия нуля, не ценовая цель."
        },
        {
          q: "Чем комиссия мейкера отличается от комиссии тейкера?",
          a: "Ордер тейкера сразу пересекается с заявкой, которая уже в стакане, и вы платите за исполнение сейчас. Ордер мейкера стоит в стакане и ждёт чужого пересечения, и он может так и не исполниться. Биржи часто берут за роли разные проценты. Вы вводите оба, и каждая сторона берёт ту роль, которую вы для неё выбрали. Скидка или более высокая ступень меняет вводимый процент. Умножение остаётся прежним: сумма сделки умножается на эту ставку."
        },
        {
          q: "Скидка на комиссию меняет формулу?",
          a: "Нет. Скидка, ступень по объёму или зачёт токеном меняет процент мейкера или тейкера, который вы вписываете в форму. Комиссия по-прежнему равна сумме сделки, умноженной на эту ставку, а котировка безубытка по-прежнему делит на 1 минус комиссию выхода. Страница не знает вашу ступень и не обещает размер скидки. Читайте тариф, который показали вам, включая срок действия: опубликованные ступени меняются."
        },
        {
          q: "Чтобы посчитать комиссию, нужен счёт на бирже?",
          a: "Нет. Введите проценты и котировку, и суммы посчитаются в браузере. Счёт на Bybit или Binance — одно из мест, где видна ваша реальная ступень комиссии. Ступени меняются, и страница не выдумает скидку. Можно считать по тарифу, который у вас уже есть, и никуда не регистрироваться. Результат — не совет выставлять эту сделку."
        }
      ]
    }
  },
  {
    slug: "fire-calculator",
    cluster: "finance",
    calc: "fire",
    category: "FinanceApplication",
    affiliate: "interactivebrokers",
    related: ["compound-interest-calculator", "inflation-calculator", "freelance-rate-calculator", "margin-markup-calculator"],
    guide: "interactive-brokers-review",
    en: {
      title: "FIRE calculator | Free Online Calculators",
      description: "Yearly spending divided by a withdrawal rate gives a FIRE number, a gap, dividend income, and a coast sum. Four percent is a rule of thumb, not a guarantee.",
      h1: "FIRE calculator",
      lede: "Spending and a withdrawal rate set the portfolio target. The gap, today's dividends, and a coast sum stay on separate lines.",
      banner: "This is arithmetic for a plan. It is not a forecast and not investment, tax, or legal advice.",
      ctaTitle: "The independence number does not require a broker",
      ctaBody: "The portfolio target is yearly spending divided by the withdrawal rate you typed. Interactive Brokers is one place people hold a long-term portfolio across countries. Commissions change. Four percent is not a guarantee. The calculator works without an account.",
      ctaButton: "Open Interactive Brokers",
      body: `<p>The independence number is annual spending divided by the withdrawal rate. Spending of 40000 and a withdrawal rate of 0.04 give 1,000,000. At 4 percent the portfolio has to be 25 times one year of spending. That 4 percent figure is a rule of thumb from a historical research tradition about long retirements and mixed portfolios. It is not a guarantee that a future sequence of returns will support the same spending. A higher withdrawal rate makes the target smaller and the plan stricter. A lower rate makes the target larger. The spending you type is the amount you would take out, before tax. The form does not know your brackets.</p>
<h2>The gap and the dividend line</h2>
<p>The gap is the independence number minus the portfolio, and it is not shown below zero. A portfolio of 250000 against 1,000,000 leaves a gap of 750,000. If the portfolio is already at or above the number, the gap is zero and the time is zero. Dividend income is the portfolio times the yield you type, so 250000 at 3 percent is 7500 a year. That cash is not the withdrawal rate. Four percent of 1,000,000 is 40000, which is the spending you typed, and 7500 does not cover 40000. The dividend line is not subtracted from the gap. Treating it as the plan double-counts a yield the withdrawal rate may already be assuming.</p>
<h2>Years to the number, and the coast sum</h2>
<p>Time to the number uses the same monthly compounding model as the <a href="{{href:compound-interest-calculator}}">compound interest calculator</a>, with one difference you should not miss. Compounding is fixed at 12 times a year, so the monthly rate is the nominal return divided by 12, and contributions are treated as end-of-month. The page solves that future-value equation for the number of months until the balance reaches the independence number. With a 5 percent nominal return compounded monthly and no new contribution, 250000 grows to 1,000,000 in about 27.8 years. That is the formula under a constant rate, not a forecast. If contributions are zero and the return is zero, a gap is never closed. The page says the contributions and the return do not reach the number.</p>
<p>Coast FIRE is the sum that grows to the independence number with no new contributions across the age gap you type. The age gap is the age you would stop adding money, minus your age now. The coast sum is the independence number divided by (1 plus the monthly rate) raised to that many months. At a zero return the coast sum equals the independence number, because nothing grows while you wait. With a 7 percent nominal return compounded monthly and a 20-year gap, the coast sum for a 1,000,000 target is about 247,602. You would need about that much today if you planned to add nothing more and to let the rate you typed do the rest. If the age you stop adding is not above your age now, the gap in years is zero and the coast sum is the full independence number.</p>
<h2>What stays outside</h2>
<ul>
<li>Inflation and taxes are outside. A nominal return can look fine while prices rise.</li>
<li>The return does not change, and contributions do not skip a month.</li>
<li>Four percent is a research tradition, not a promise about your sequence of returns.</li>
<li>Dividend income on today's portfolio is not the withdrawal, and it does not close the gap by itself.</li>
<li>A zero contribution and a zero return never close a gap.</li>
</ul>
<p>Purchasing power of the spending figure belongs on the <a href="{{href:inflation-calculator}}">inflation calculator</a>, which keeps that rate visible instead of burying it in the return. If the spending number comes from contract work, the <a href="{{href:freelance-rate-calculator}}">freelance rate calculator</a> builds an hourly figure after tax and days you cannot bill. A shop's margin, on the <a href="{{href:margin-markup-calculator}}">margin calculator</a>, is a different ratio. Neither one is the withdrawal rate. <a href="{{aff:interactivebrokers}}">Interactive Brokers</a> is one broker people use for a long-term portfolio held from more than one country. The independence number does not depend on opening that account. Commissions and market access change. The <a href="{{href:blog/interactive-brokers-review}}">Interactive Brokers guide</a> says what to read on the current schedule. This page does not quote a fee and does not promise the return you typed.</p>`,
      faq: [
        {
          q: "How do you calculate the FIRE number?",
          a: "Divide annual spending by the withdrawal rate. Spending of 40000 divided by 0.04 is 1,000,000, which is 25 times one year of spending. The 4 percent figure is a rule of thumb from a historical research tradition, not a guarantee that future returns will support it. A higher rate makes the target smaller. A lower rate makes it larger. The spending you type is before tax. The form does not know your brackets or which costs are essential."
        },
        {
          q: "Is dividend income the same as the withdrawal rate?",
          a: "No. Dividend income is today's portfolio times the yield you type. A portfolio of 250000 at 3 percent produces 7500 a year. The withdrawal rate is the fraction you assume you take from the full independence number. Four percent of 1,000,000 is 40000. The 7500 does not cover that spending, and it is not subtracted from the gap. A yield on a small portfolio and a withdrawal rate on the target are different lines."
        },
        {
          q: "What happens if I save nothing and the return is zero?",
          a: "A gap is never closed. With no new contribution and no growth, the portfolio stays where it is, so it cannot catch an independence number that sits above it. The page says the contributions and the return do not reach the number. If the portfolio is already at or above the number, the gap is zero and the time is zero, even when the return is zero. A positive return with no contributions can still close a gap."
        },
        {
          q: "What is the coast sum on this page?",
          a: "It is the amount that grows to the independence number with no new contributions across the age gap you type. That gap is the age you would stop adding money, minus your age now. The sum is the independence number divided by the monthly growth over those months, using the same monthly rate as the time estimate. At 7 percent compounded monthly, a 20-year gap, and a 1,000,000 target, the coast sum is about 247,602."
        },
        {
          q: "Does the FIRE calculator need a brokerage account?",
          a: "No. The independence number, the gap, the dividend line, and the coast sum are calculated from the fields you fill in. A broker is only a place to hold a portfolio if you choose to invest. Interactive Brokers is one option people use across countries. Commissions and market access change, and this page does not quote them. Four percent is not a guarantee, and the return you typed is an assumption. Opening an account does not change the arithmetic."
        }
      ]
    },
    ru: {
      title: "Финансовая независимость и ставка изъятия | Бесплатные калькуляторы",
      description: "Годовые расходы и ставка изъятия дают сумму финансовой независимости, разрыв, дивиденды и сумму без новых взносов. Четыре процента не гарантия.",
      h1: "Калькулятор финансовой независимости",
      lede: "Расходы и ставка изъятия задают цель портфеля. Разрыв, сегодняшние дивиденды и сумма без новых взносов остаются отдельными строками.",
      banner: "Это арифметика для плана. Это не прогноз и не инвестиционная, налоговая или юридическая рекомендация.",
      ctaTitle: "Сумма независимости не требует брокера",
      ctaBody: "Цель портфеля — годовые расходы, делённые на ставку изъятия, которую вы ввели. Interactive Brokers — один из брокеров для долгого портфеля из другой страны. Комиссии меняются. Четыре процента — не гарантия. Калькулятор работает без счёта.",
      ctaButton: "Открыть Interactive Brokers",
      body: `<p>Сумма финансовой независимости — это годовые расходы, делённые на ставку изъятия. Расходы 40000 и ставка 0,04 дают 1 000 000. При четырёх процентах портфель должен быть в 25 раз больше одного года расходов. Эти четыре процента — ориентир из традиции исторических исследований про долгую жизнь на смешанном портфеле. Это не гарантия, что будущая череда доходностей выдержит те же расходы. Более высокая ставка изъятия делает цель меньше и план жёстче. Более низкая делает цель больше. Расходы в поле — сумма, которую вы бы забирали, до налога. Шкалу налога форма не знает.</p>
<h2>Разрыв и строка дивидендов</h2>
<p>Разрыв — это сумма независимости минус портфель, и ниже нуля он не показывается. Портфель 250000 при цели 1 000 000 оставляет разрыв 750000. Если портфель уже на цели или выше, разрыв нулевой и срок нулевой. Дивидендный доход — портфель, умноженный на введённую доходность: 250000 при 3% — это 7500 в год. Эти деньги — не ставка изъятия. Четыре процента от 1 000 000 — это 40000, то есть те самые расходы, а 7500 их не покрывают. Строка дивидендов из разрыва не вычитается. Если принять её за план, доходность, которую ставка изъятия, возможно, уже предполагает, окажется посчитана дважды.</p>
<h2>Срок до суммы и сумма без новых взносов</h2>
<p>Срок до цели использует ту же месячную модель, что и <a href="{{href:compound-interest-calculator}}">калькулятор сложного процента</a>, с одной разницей, которую легко пропустить. Начисление здесь всегда 12 раз в год, поэтому месячная ставка — номинальная доходность, делённая на 12, а взносы идут как в конце месяца. Страница решает это уравнение будущей стоимости относительно числа месяцев, за которые баланс доходит до суммы независимости. При номинальных 5% с ежемесячным начислением и без новых взносов 250000 дорастают до 1 000 000 примерно за 27,8 года. Это формула при постоянной ставке, не прогноз. Если взносов нет и доходность нулевая, разрыв не закрывается никогда. Страница так и пишет: при таких взносах и доходности сумма не набирается.</p>
<p>В английском ту сумму, которая дорастает до цели без новых взносов, называют coast FIRE. Это сумма, которая за разрыв возрастов, введённый вами, доходит до цели сама. Разрыв возрастов — возраст, когда вы перестанете довнесения, минус нынешний возраст. Сумма равна цели, делённой на (1 плюс месячную ставку) в степени этого числа месяцев. При нулевой доходности она совпадает с целью: пока ждёте, ничего не растёт. При номинальных 7% с ежемесячным начислением и разрыве в 20 лет сумма для цели 1 000 000 — около 247 602. Столько нужно уже сегодня, если больше не вносить и оставить работу той ставке, которую вы вписали. Если возраст остановки не выше нынешнего, лет в разрыве ноль, и сумма без новых взносов равна всей цели.</p>
<h2>Что остаётся снаружи</h2>
<ul>
<li>Инфляция и налоги снаружи. Номинальная доходность может выглядеть прилично, пока цены растут.</li>
<li>Доходность не меняется, и взносы не пропускают месяц.</li>
<li>Четыре процента — традиция исследований, а не обещание про вашу череду доходностей.</li>
<li>Дивиденды с сегодняшнего портфеля — не изъятие, и сами по себе разрыв не закрывают.</li>
<li>Нулевой взнос и нулевая доходность разрыв не закрывают.</li>
</ul>
<p>Покупательная способность суммы расходов живёт в <a href="{{href:inflation-calculator}}">калькуляторе инфляции</a>: там ставка видна, а не спрятана внутри доходности. Если расходы берутся из подрядной работы, <a href="{{href:freelance-rate-calculator}}">калькулятор ставки фрилансера</a> собирает час с налогом и днями, которые нельзя выставить. Маржа магазина в <a href="{{href:margin-markup-calculator}}">калькуляторе наценки</a> — другая дробь. Ни то ни другое не является ставкой изъятия. <a href="{{aff:interactivebrokers}}">Interactive Brokers</a> — один из брокеров для долгого портфеля, который держат из другой страны. Сумма независимости от открытия счёта не зависит. Комиссии и доступ к рынкам меняются. В <a href="{{href:blog/interactive-brokers-review}}">статье про Interactive Brokers</a> сказано, что читать в текущем тарифе. Комиссию эта страница не называет и не обещает ту доходность, которую вы ввели.</p>`,
      faq: [
        {
          q: "Как считается сумма финансовой независимости?",
          a: "Разделите годовые расходы на ставку изъятия. Расходы 40000, делённые на 0,04, дают 1 000 000 — это 25 годовых расходов. Четыре процента — ориентир из традиции исторических исследований, а не гарантия, что будущие доходности это выдержат. Более высокая ставка делает цель меньше, более низкая — больше. Расходы в поле указаны до налога. Шкалу, вычеты и то, какие траты обязательны, форма не знает."
        },
        {
          q: "Дивиденды — это то же самое, что ставка изъятия?",
          a: "Нет. Дивидендный доход — сегодняшний портфель, умноженный на введённую доходность. Портфель 250000 при 3% даёт 7500 в год. Ставка изъятия — доля, которую вы предполагаете забирать уже с полной суммы независимости. Четыре процента от 1 000 000 — это 40000. Сумма 7500 эти расходы не покрывает и из разрыва не вычитается. Доходность маленького портфеля и ставка изъятия с цели — разные строки. Не принимайте дивиденды за весь план."
        },
        {
          q: "Что будет, если ничего не откладывать и доходность нулевая?",
          a: "Разрыв не закроется. Без нового взноса и без роста портфель остаётся на месте и не догоняет сумму независимости, которая выше него. Страница пишет, что при таких взносах и доходности сумма не набирается. Если портфель уже на цели или выше, разрыв нулевой и срок нулевой, даже при нулевой доходности. Положительная доходность без взносов разрыв всё же может закрыть. В примере 250000 при 5% доходят до 1 000 000 примерно за 27,8 года."
        },
        {
          q: "Что такое сумма, которая дорастает без новых взносов?",
          a: "Это сумма, которая за введённый разрыв возрастов сама доходит до цели финансовой независимости, без новых взносов. Разрыв — возраст, когда вы перестанете довнесения, минус нынешний возраст. Сумма равна цели, делённой на месячный рост за эти месяцы, по той же месячной ставке, что и срок. При нулевой доходности она совпадает с полной целью: пока ждёте, ничего не растёт. При 7% с ежемесячным начислением, разрыве 20 лет и цели 1 000 000 такая сумма около 247 602."
        },
        {
          q: "Для калькулятора финансовой независимости нужен брокер?",
          a: "Нет. Сумма, разрыв, дивиденды и сумма без новых взносов считаются по полям, которые вы заполнили. Брокер — лишь место держать портфель, если вы сами решите инвестировать. Interactive Brokers — один из вариантов для счёта из другой страны. Комиссии и доступ к рынкам меняются, и страница их не цитирует. Четыре процента — не гарантия, а доходность в поле — допущение. Открытие счёта арифметику не меняет."
        }
      ]
    }
  },
  {
    slug: "inflation-calculator",
    cluster: "finance",
    calc: "inflation",
    category: "FinanceApplication",
    affiliate: "ledger",
    secondary: "trezor",
    related: ["compound-interest-calculator", "fire-calculator", "cost-of-living-calculator", "currency-spread-calculator"],
    guide: "ledger-vs-trezor",
    en: {
      title: "Inflation calculator | Free Online Calculators",
      description: "Future cost and purchasing power from an inflation rate you type, for one or two currencies. Defaults are illustrations, not official forecasts.",
      h1: "Inflation calculator",
      lede: "One or two inflation rates you type, a future cost, what today's cash still buys, and a real return if you also type a nominal one.",
      banner: "This is arithmetic for a plan. It is not a forecast and not investment, tax, or legal advice.",
      ctaTitle: "A hardware wallet does not stop inflation",
      ctaBody: "Inflation is lost purchasing power in a currency. Ledger and Trezor are devices for keeping coins out of someone else's custody. Those are different problems. Device prices and supported assets change. This page does the arithmetic either way.",
      ctaButton: "Open Ledger",
      secondaryButton: "Open Trezor",
      body: `<p>Future cost is the amount times (1 plus the inflation rate) to the power of the years. Purchasing power of today's cash is the amount divided by that same power. Take 100 at 3 percent for 10 years. The same basket costs about 134.39 later, and 100 held as cash still buys about 74.41 of today's goods. One figure runs the rate forward. The other runs it backward on money you already have. They are not two opinions. A rate of zero leaves both figures equal to the amount you typed, which is a useful check that the form is doing what you think. The rate is constant for the whole span. A decade that will not look like one rate needs more than one run.</p>
<h2>The real return, when you type a nominal one</h2>
<p>Real return is (1 plus the nominal return) divided by (1 plus inflation), minus 1. A nominal 5 percent beside 3 percent inflation is 1.05 divided by 1.03, minus 1, about 1.94 percent a year. Leave the nominal field blank and the real return stays blank. The page will not invent a market return to fill the gap. If the nominal rate equals inflation, the real return is zero: you kept pace with the price rise and no more. This page does not grow a balance with contributions. That job belongs to the <a href="{{href:compound-interest-calculator}}">compound interest calculator</a>, which wants a nominal rate and can take a monthly sum. Mixing the two rates inside one box hides which assumption moved.</p>
<h2>Two currencies are two rates you type</h2>
<p>The form has two names and two inflation rates. Both paths use the same amount, the same years, and the same optional nominal return. Only the inflation rate differs, so you can see two future costs and two real returns side by side. The names are labels for the lines. They do not convert one currency into the other, and they do not fetch a policy rate. Typing USD and EUR does not apply an exchange rate. The gap a bank hides between its rate and the interbank rate is the <a href="{{href:currency-spread-calculator}}">currency spread calculator</a>, and you have to type both of those rates yourself. Numbers already filled in so the form is not empty are illustrations, not an official forecast. This page does not reprint a historical consumer-price series, and it will not pretend a default is this year's official figure.</p>
<h2>A wallet and a price rise are different problems</h2>
<ul>
<li>The inflation rate does not change during the years you typed.</li>
<li>There is no tax, no fee, and no wage growth in the formula.</li>
<li>A blank nominal return means no real-return line, not a real return of zero.</li>
<li>City price indexes are a different page. They are not this power.</li>
<li>A device that holds coins does not change how fast a currency buys less.</li>
</ul>
<p>Comparing what a salary buys in two cities is the <a href="{{href:cost-of-living-calculator}}">cost of living calculator</a>. Those indexes are a separate editorial table, not an inflation path. A portfolio target that ignores prices is the <a href="{{href:fire-calculator}}">FIRE calculator</a>. Protecting savings from custodial risk is a different problem from inflation. <a href="{{aff:ledger}}">Ledger</a> and <a href="{{aff:trezor}}">Trezor</a> are hardware wallets: coins kept on the device are not sitting on an exchange. That can matter if a company fails or locks an account. It does nothing to the rate at which a currency buys less. Device prices and the assets each wallet supports change. The <a href="{{href:blog/ledger-vs-trezor}}">Ledger and Trezor guide</a> says what to check. It does not claim either device beats inflation. This page does the arithmetic whether or not you buy one.</p>`,
      faq: [
        {
          q: "How do you calculate future cost from an inflation rate?",
          a: "Multiply the amount by 1 plus the inflation rate, raised to the number of years. At 3 percent for 10 years, 100 becomes about 134.39. That is the later cost of the same basket under a rate that never changes. It is not an official forecast, and the numbers filled in so the form is not empty are illustrations. This page does not reprint a historical price index. If you expect the rate to change, run the years in pieces."
        },
        {
          q: "What is purchasing power of today's cash?",
          a: "It is the amount divided by 1 plus inflation, raised to the years. The same 100 at 3 percent for 10 years still buys about 74.41 of today's goods. Future cost runs the rate forward on a basket. Purchasing power runs it backward on cash you hold now. A rate of zero leaves both figures equal to the amount. The two results are one formula read in opposite directions, not two separate predictions about policy or wages."
        },
        {
          q: "How do you turn a nominal return into a real return?",
          a: "Divide 1 plus the nominal return by 1 plus inflation, then subtract 1. A nominal 5 percent beside 3 percent inflation is about 1.94 percent a year. If the two rates match, the real return is zero. Leave the nominal field blank and the real return stays blank. The page will not invent a market return. This formula does not grow a balance with monthly contributions. That is the compound interest calculator."
        },
        {
          q: "Do the two currency boxes convert money from one to the other?",
          a: "No. Each name is a label, and each inflation rate is a number you type. Both paths share the amount, the years, and the optional nominal return. They do not apply an exchange rate, and typing a currency code does not fetch a central-bank figure. The gap between a bank rate and the interbank rate is a different calculator, and there you also type both rates. Defaults on this page are illustrations so the form is not empty."
        },
        {
          q: "Does a hardware wallet protect savings from inflation?",
          a: "No. Inflation is a currency buying less over time. A hardware wallet is about custody: keeping coins off an exchange so they are not in a company's hands. Ledger and Trezor can help with that second problem if you use them as intended. They do not change the inflation rate you typed. Device prices and supported assets change. The calculator runs either way, and the guide compares what to check on each device."
        }
      ]
    },
    ru: {
      title: "Инфляция и покупательная способность | Бесплатные калькуляторы",
      description: "Будущая стоимость и покупательная способность по инфляции, которую вы вводите, для одной или двух валют. Цифры по умолчанию — иллюстрация, не прогноз.",
      h1: "Калькулятор инфляции",
      lede: "Одна или две ставки инфляции, которые вы вводите: будущая стоимость, что ещё купят сегодняшние деньги, и реальная доходность, если указана номинальная.",
      banner: "Это арифметика для плана. Это не прогноз и не инвестиционная, налоговая или юридическая рекомендация.",
      ctaTitle: "Аппаратный кошелёк инфляцию не отменяет",
      ctaBody: "Инфляция — это потеря покупательной способности валюты. Ledger и Trezor — устройства, чтобы не оставлять монеты у чужой компании. Это разные задачи. Цена устройства и список монет меняются. Арифметика на странице от покупки не зависит.",
      ctaButton: "Открыть Ledger",
      secondaryButton: "Открыть Trezor",
      body: `<p>Будущая стоимость равна сумме, умноженной на (1 плюс инфляцию) в степени лет. Покупательная способность сегодняшних денег — та же сумма, делённая на эту степень. Возьмите 100 при 3% на 10 лет. Та же корзина позже стоит около 134,39, а 100 наличными ещё покупают около 74,41 сегодняшних товаров. Одна цифра гонит ставку вперёд. Другая гонит её назад по деньгам, которые уже есть. Это не два мнения. Нулевая ставка оставляет обе цифры равными введённой сумме — удобная проверка, что форма делает то, что вы думаете. Ставка на весь срок постоянная. Десятилетие, которое не будет похоже на одну ставку, нужно считать кусками.</p>
<h2>Реальная доходность, если вы ввели номинальную</h2>
<p>Реальная доходность равна (1 плюс номинальную) делить на (1 плюс инфляцию), минус 1. Номинальные 5% рядом с инфляцией 3% — это 1,05 разделить на 1,03 минус 1, около 1,94% в год. Оставьте номинальное поле пустым — реальная доходность тоже останется пустой. Рыночную доходность, чтобы заткнуть дыру, страница не выдумает. Если номинальная ставка равна инфляции, реальная доходность нулевая: вы лишь не отстали от цен. Баланс с взносами эта страница не растит. Это работа <a href="{{href:compound-interest-calculator}}">калькулятора сложного процента</a>: там номинальная ставка и, если нужно, ежемесячная сумма. Смешивать две ставки в одном поле значит спрятать, какое допущение сдвинулось.</p>
<h2>Две валюты — это две ставки, которые вводите вы</h2>
<p>В форме два названия и две инфляции. Оба пути берут одну сумму, одни годы и одну необязательную номинальную доходность. Отличается только инфляция, поэтому рядом видны две будущие стоимости и две реальные доходности. Названия — подписи к строкам. Одну валюту в другую они не переводят и официальную ставку не запрашивают. Надписи USD и EUR курс обмена не подставляют. Разрыв, который банк прячет между своим курсом и межбанковским, считает <a href="{{href:currency-spread-calculator}}">калькулятор скрытой наценки</a>, и оба курса там тоже вводите вы. Цифры, уже стоящие в полях, чтобы форма не была пустой, — иллюстрация, не официальный прогноз. Исторический ряд потребительских цен страница не перепечатывает и не делает вид, что цифра по умолчанию — официальная цифра этого года.</p>
<h2>Кошелёк и рост цен — разные задачи</h2>
<ul>
<li>Инфляция за введённые годы не меняется.</li>
<li>В формуле нет налога, комиссии и роста зарплаты.</li>
<li>Пустая номинальная доходность — это пустая строка, а не реальная доходность ноль.</li>
<li>Городские индексы цен — другая страница. Это не эта степень.</li>
<li>Устройство, которое держит монеты, не меняет, как быстро валюта покупает меньше.</li>
</ul>
<p>Сравнение того, что зарплата покупает в двух городах, делает <a href="{{href:cost-of-living-calculator}}">калькулятор стоимости жизни</a>. Там отдельная редакторская таблица, не инфляционный путь. Цель портфеля, которая цены не трогает, — <a href="{{href:fire-calculator}}">калькулятор финансовой независимости</a>. Защита сбережений от чужого хранения — другая задача, не инфляция. <a href="{{aff:ledger}}">Ledger</a> и <a href="{{aff:trezor}}">Trezor</a> — аппаратные кошельки: монеты на устройстве не лежат на бирже. Это может иметь значение, если компания закроется или заблокирует счёт. На скорость, с которой валюта покупает меньше, устройство не влияет. Цены устройств и список монет меняются. В <a href="{{href:blog/ledger-vs-trezor}}">сравнении Ledger и Trezor</a> сказано, что проверять. Там нет утверждения, что какое-то из устройств обгоняет инфляцию. Арифметика на этой странице идёт и без покупки.</p>`,
      faq: [
        {
          q: "Как из инфляции получается будущая стоимость?",
          a: "Умножьте сумму на 1 плюс инфляцию в степени числа лет. При 3% за 10 лет 100 становятся около 134,39. Это поздняя цена той же корзины при ставке, которая не меняется. Это не официальный прогноз, а цифры, заранее стоящие в форме, — иллюстрация, чтобы поля не были пустыми. Исторический индекс цен страница не перепечатывает. Если ждёте, что ставка изменится, посчитайте годы кусками."
        },
        {
          q: "Что такое покупательная способность сегодняшних денег?",
          a: "Это сумма, делённая на 1 плюс инфляцию в степени лет. Те же 100 при 3% за 10 лет ещё покупают около 74,41 сегодняшних товаров. Будущая стоимость гонит ставку вперёд по корзине. Покупательная способность гонит её назад по деньгам, которые у вас уже есть. При нулевой ставке обе цифры равны сумме. Это одна формула в две стороны, а не два отдельных предсказания про политику или зарплаты."
        },
        {
          q: "Как из номинальной доходности получается реальная?",
          a: "Разделите 1 плюс номинальную доходность на 1 плюс инфляцию и вычтите 1. Номинальные 5% рядом с инфляцией 3% — это около 1,94% в год. Если ставки совпали, реальная доходность нулевая. Пустое номинальное поле оставляет пустой и реальную строку. Рыночную доходность страница не выдумает. Баланс с ежемесячными взносами эта формула не растит. Для этого есть калькулятор сложного процента, и номинальная ставка там живёт отдельно."
        },
        {
          q: "Два поля валют переводят деньги из одной в другую?",
          a: "Нет. Каждое название — подпись, каждая инфляция — число, которое вводите вы. Оба пути делят сумму, годы и необязательную номинальную доходность. Курса обмена они не применяют, и код валюты не запрашивает цифру центробанка. Разрыв между курсом банка и межбанковским курсом считает другой калькулятор, и там оба курса тоже вводите вы. Цифры по умолчанию здесь — иллюстрация, чтобы форма не была пустой. Это не официальный прогноз."
        },
        {
          q: "Аппаратный кошелёк защищает сбережения от инфляции?",
          a: "Нет. Инфляция — это когда валюта со временем покупает меньше. Аппаратный кошелёк — про хранение: монеты не лежат на бирже и не находятся в руках компании. Ledger и Trezor могут помочь со второй задачей, если пользоваться ими по назначению. Ставку инфляции, которую вы ввели, они не меняют. Цены устройств и список монет меняются. Калькулятор считает в любом случае, а статья сравнивает, что проверять. Она не обещает, что кошелёк обгонит рост цен."
        }
      ]
    }
  },
  {
    slug: "position-size-calculator",
    cluster: "finance",
    calc: "position",
    category: "FinanceApplication",
    affiliate: "bybit",
    secondary: "interactivebrokers",
    related: ["trading-fee-calculator", "average-price-calculator", "fire-calculator", "roas-calculator"],
    guide: "binance-vs-bybit",
    en: {
      title: "Position size calculator | Free Online Calculators",
      description: "Position size from the cash you risk and the distance from entry to stop, for a long or a short. Fees are left out. This is not a signal to open a trade.",
      h1: "Position size calculator",
      lede: "Cash at risk and the distance from entry to stop set the number of units, for a long or a short.",
      banner: "This is arithmetic for a plan. It is not a forecast and not investment, tax, or legal advice.",
      ctaTitle: "Size comes from the stop, not from an account offer",
      ctaBody: "Units follow the cash you are willing to lose and the distance to the stop. Bybit is an exchange and Interactive Brokers is a broker. Either may be irrelevant to the market you trade. This is not a signal to take the trade. Fees are outside this result, and fee schedules change. The page works without signing up.",
      ctaButton: "Open Bybit",
      secondaryButton: "Open Interactive Brokers",
      body: `<p>Cash at risk is the account times the risk percent. An account of 10000 and a risk of 1 percent put 100 in that line. For a long, the distance is the entry minus the stop, and it must be positive. Units are the cash at risk divided by that distance. Entry 50 and stop 48 give a distance of 2, so the units are 100 divided by 2, which is 50. Position value is units times entry, here 2500. Reward, if you type a target of 56, is 6 per unit times 50 units, which is 300. The R multiple is the reward per unit divided by the distance, 6 divided by 2, which is 3. Leave the target blank and both the reward and the R multiple stay blank. The page will not invent a profit target for you.</p>
<h2>A small stop can still be a large position</h2>
<p>The 2500 position is 25 percent of the 10000 account, while the cash at risk is only 100, which is 1 percent. That is leverage-like exposure. The loss if the stop fills at the stop price is the small number. The amount of the account tied up in the trade is the large one. A gap through the stop, a halt, or a fill worse than the stop can lose more than the 100. The formula assumes the stop fills at the price you typed. It does not model a gap. Fees are not included. A round trip that looks like 3R before fees can be less once the percent on each fill is taken off. The <a href="{{href:trading-fee-calculator}}">trading fee calculator</a> is where that percent goes. This page will not fold it in quietly.</p>
<h2>The short, and a stop on the wrong side</h2>
<p>A short uses stop minus entry for the distance, and entry minus the target for the reward per unit. Both distances have to point the right way. Take the same account and the same 1 percent risk, with entry 50, stop 52, and target 44. The distance is 2, the units are 50, the position value is 2500, the reward is 300, and the R multiple is 3. The arithmetic mirrors the long. If the stop is on the wrong side, the tool errors. A long whose stop sits above the entry has no positive distance. A short whose stop sits below the entry has none either. A target on the losing side of the entry does not error. It produces a negative reward, which is the formula saying the target is not a profit. Read that minus sign before you treat the row as a plan.</p>
<h2>What this number is not</h2>
<ul>
<li>It is not trading advice and not a signal that the trade should be opened.</li>
<li>Fees, funding, and a gap through the stop are outside the units.</li>
<li>The risk percent is the cash you are willing to lose, not the share of the account the position may tie up.</li>
<li>A blank target means no reward line, not a reward of zero that you should assume.</li>
<li>Several old fills at different prices are an average-price question, not this one.</li>
</ul>
<p>Lots you already hold belong on the <a href="{{href:average-price-calculator}}">average price calculator</a>. A portfolio sized for spending years ahead is the <a href="{{href:fire-calculator}}">FIRE calculator</a>, which is a different horizon from one stop. Ad return, on the <a href="{{href:roas-calculator}}">ROAS calculator</a>, is revenue against spend. It is not a distance from entry to stop. <a href="{{aff:bybit}}">Bybit</a> is an exchange and <a href="{{aff:interactivebrokers}}">Interactive Brokers</a> is a broker. Either may be the wrong venue for the market you actually trade. Fee schedules change. This sizing runs in the browser without an account, and opening one does not turn the result into a recommendation. The <a href="{{href:blog/binance-vs-bybit}}">Binance and Bybit guide</a> is about comparing exchanges, including custody, not about which trade to take.</p>`,
      faq: [
        {
          q: "How do you calculate position size from a stop loss?",
          a: "Multiply the account by the risk percent to get the cash at risk. For a long, subtract the stop from the entry. That distance must be positive. Divide the cash at risk by the distance to get the units. An account of 10000, risk of 1 percent, entry 50, and stop 48 give 100 of cash at risk, a distance of 2, and 50 units. Position value is 2500. The formula assumes the stop fills at the stop."
        },
        {
          q: "What is the R multiple in this calculator?",
          a: "It is the reward per unit divided by the distance from entry to stop. With entry 50, stop 48, and target 56, the reward per unit is 6 and the distance is 2, so the multiple is 3. On 50 units the cash reward is 300. Leave the target blank and both the reward and the multiple stay blank. A target on the losing side of the entry does not error. It comes back negative."
        },
        {
          q: "How does a short position change the formula?",
          a: "The distance is the stop minus the entry, and it still has to be positive, so the stop sits above the entry. The reward per unit is the entry minus the target. Entry 50, stop 52, and target 44, on the same 10000 account at 1 percent risk, again give 50 units, a position value of 2500, a reward of 300, and a multiple of 3. If the stop is on the wrong side, the tool errors."
        },
        {
          q: "Why can a 1 percent risk still use a large share of the account?",
          a: "Cash at risk is the loss if the stop fills at the stop price. Position value is units times the entry. In the example the cash at risk is 100, which is 1 percent of 10000, while the position is 2500, which is 25 percent of the account. A tight stop produces a large size. That is leverage-like exposure. A gap through the stop can lose more than the cash at risk."
        },
        {
          q: "Does position size include trading fees?",
          a: "No. Units come only from the cash at risk and the distance to the stop. A fee on the way in and on the way out can shrink the reward, and this page does not subtract it. Use the trading fee calculator for the percent and the slippage, and keep the two results apart. The figure here is also not trading advice and not a signal to open the trade. An exchange or broker account is optional."
        }
      ]
    },
    ru: {
      title: "Размер позиции по стопу | Бесплатные калькуляторы",
      description: "Размер позиции из доли счёта, которой вы рискуете, и расстояния от входа до стопа, для лонга или шорта. Комиссий нет. Это не сигнал к сделке.",
      h1: "Калькулятор размера позиции",
      lede: "Деньги под риском и расстояние от входа до стопа задают число единиц, для лонга или для шорта.",
      banner: "Это арифметика для плана. Это не прогноз и не инвестиционная, налоговая или юридическая рекомендация.",
      ctaTitle: "Размер задаёт стоп, а не реклама счёта",
      ctaBody: "Число единиц следует из денег, которые вы готовы потерять, и из расстояния до стопа. Bybit — биржа, Interactive Brokers — брокер. Для вашего рынка может не подойти ни то ни другое. Это не сигнал открывать сделку. Комиссий в результате нет, тарифы меняются. Страница считает без регистрации.",
      ctaButton: "Открыть Bybit",
      secondaryButton: "Открыть Interactive Brokers",
      body: `<p>Деньги под риском — это счёт, умноженный на процент риска. Счёт 10000 и риск 1% дают в этой строке 100. Для лонга расстояние — вход минус стоп, и оно должно быть положительным. Число единиц — деньги под риском, делённые на это расстояние. Вход 50 и стоп 48 дают расстояние 2, значит единиц 100 разделить на 2, то есть 50. Стоимость позиции — единицы, умноженные на вход, здесь 2500. Прибыль, если ввести цель 56, — это 6 на единицу умножить на 50 единиц, то есть 300. Отношение прибыли к риску — прибыль на единицу, делённая на расстояние: 6 разделить на 2, это 3. Оставьте цель пустой — и прибыль, и это отношение останутся пустыми. Ценовую цель за вас страница не выдумает.</p>
<h2>Короткий стоп всё равно может занять крупную долю счёта</h2>
<p>Позиция 2500 — это 25% счёта в 10000, а деньги под риском — только 100, то есть 1%. Это похоже на плечо. Убыток, если стоп исполнится по цене стопа, — маленькое число. Доля счёта, занятая сделкой, — большое. Дыра сквозь стоп, остановка торгов или исполнение хуже стопа могут унести больше, чем 100. Формула считает, что стоп исполняется по введённой цене. Дыру она не моделирует. Комиссий внутри нет. Круг, который до комиссий выглядит как 3 к риску, после процента на каждом исполнении может стать меньше. Процент ставится в <a href="{{href:trading-fee-calculator}}">калькулятор торговой комиссии</a>. Эта страница не подмешает его тихо.</p>
<h2>Шорт и стоп не с той стороны</h2>
<p>У шорта расстояние — это стоп минус вход, а прибыль на единицу — вход минус цель. Оба отрезка должны смотреть в правильную сторону. Возьмите тот же счёт и тот же риск 1%, вход 50, стоп 52, цель 44. Расстояние 2, единиц 50, стоимость позиции 2500, прибыль 300, отношение 3. Арифметика зеркалит лонг. Если стоп не с той стороны, инструмент выдаёт ошибку. У лонга стоп выше входа не даёт положительного расстояния. У шорта стоп ниже входа — тоже. Цель с убыточной стороны от входа ошибкой не является. Она даёт отрицательную прибыль: формула говорит, что при этих ценах цель — не прибыль. Прочитайте минус, прежде чем принимать строку за план.</p>
<h2>Чем это число не является</h2>
<ul>
<li>Это не торговый совет и не сигнал, что сделку надо открывать.</li>
<li>Комиссии, финансирование и дыра сквозь стоп в числе единиц не сидят.</li>
<li>Процент риска — деньги, которые вы готовы потерять, а не доля счёта, которую позиция может занять.</li>
<li>Пустая цель значит пустую строку прибыли, а не ноль, который можно додумать.</li>
<li>Старые сделки по разным ценам — вопрос средней цены, не этот.</li>
</ul>
<p>Лоты, которые уже есть, считает <a href="{{href:average-price-calculator}}">калькулятор средней цены</a>. Портфель под расходы на годы вперёд — <a href="{{href:fire-calculator}}">калькулятор финансовой независимости</a>, и это другой горизонт, не один стоп. Отдача рекламы в <a href="{{href:roas-calculator}}">калькуляторе ROAS</a> — выручка против затрат. Это не расстояние от входа до стопа. <a href="{{aff:bybit}}">Bybit</a> — биржа, <a href="{{aff:interactivebrokers}}">Interactive Brokers</a> — брокер. Для рынка, которым вы реально торгуете, может не подойти ни то ни другое. Тарифы меняются. Размер считается в браузере без счёта, и открытие счёта не превращает результат в рекомендацию. <a href="{{href:blog/binance-vs-bybit}}">Сравнение Binance и Bybit</a> — про то, как сопоставлять биржи, включая хранение, а не про то, какую сделку брать.</p>`,
      faq: [
        {
          q: "Как из стоп-лосса получается размер позиции?",
          a: "Умножьте счёт на процент риска — это деньги под риском. Для лонга вычтите стоп из входа. Расстояние должно быть положительным. Разделите деньги под риском на расстояние — получатся единицы. Счёт 10000, риск 1%, вход 50 и стоп 48 дают 100 под риском, расстояние 2 и 50 единиц. Стоимость позиции 2500. Формула считает, что стоп исполняется по своей цене. Комиссии и дыру сквозь стоп она не добавляет."
        },
        {
          q: "Что такое отношение прибыли к риску в этом калькуляторе?",
          a: "Это прибыль на единицу, делённая на расстояние от входа до стопа. При входе 50, стопе 48 и цели 56 прибыль на единицу равна 6, расстояние равно 2, отношение равно 3. На 50 единицах денежная прибыль — 300. Пустая цель оставляет пустыми и прибыль, и отношение. Цель с убыточной стороны от входа ошибкой не считается. Она вернётся с минусом: при введённых ценах это не прибыль."
        },
        {
          q: "Как шорт меняет формулу размера позиции?",
          a: "Расстояние — это стоп минус вход, и оно всё ещё должно быть положительным, поэтому стоп стоит выше входа. Прибыль на единицу — вход минус цель. Вход 50, стоп 52 и цель 44 на том же счёте 10000 при риске 1% снова дают 50 единиц, стоимость 2500, прибыль 300 и отношение 3. Если стоп не с той стороны, инструмент выдаёт ошибку, а не отрицательный размер. Лонгу нужен стоп ниже входа."
        },
        {
          q: "Почему риск в 1% всё равно может занять крупную долю счёта?",
          a: "Деньги под риском — убыток, если стоп исполнится по своей цене. Стоимость позиции — единицы, умноженные на вход. В примере под риском 100, это 1% от 10000, а позиция 2500, это 25% счёта. Короткий стоп даёт крупный размер. Это похоже на плечо. Дыра сквозь стоп может унести больше, чем деньги под риском. Введённый процент не ограничивает, какую долю счёта займёт сделка."
        },
        {
          q: "Размер позиции включает торговые комиссии?",
          a: "Нет. Единицы берутся только из денег под риском и расстояния до стопа. Комиссия на входе и на выходе может уменьшить прибыль, и эта страница её не вычитает. Процент и проскальзывание считайте в калькуляторе торговой комиссии и держите два результата отдельно. Цифра здесь — не торговый совет и не сигнал открывать сделку. Счёт на бирже или у брокера не обязателен, тарифы меняются."
        }
      ]
    }
  },
  {
    slug: "currency-spread-calculator",
    cluster: "finance",
    calc: "spread",
    category: "FinanceApplication",
    affiliate: "wise",
    related: ["inflation-calculator", "cost-of-living-calculator", "freelance-rate-calculator", "compound-interest-calculator"],
    guide: null,
    en: {
      title: "Currency spread calculator | Free Online Calculators",
      description: "The hidden gap between a bank exchange rate and the interbank rate, in money, percent, and basis points. You type both rates. The page does not fetch a live quote.",
      h1: "Currency spread calculator",
      lede: "The amount a bank rate delivers, set against the interbank rate you type, plus an alternative fee you can compare.",
      banner: "This is arithmetic for a plan. It is not a forecast and not investment, tax, or legal advice.",
      ctaTitle: "A specialist can cost less, or not",
      ctaBody: "The gap on this page is the difference between the two rates you typed. Wise is one specialist for cross-border transfers. It can be cheaper than the bank or it can be not, depending on the route and the fee you type. This page does not know Wise's current fee, and it works from the bank quote alone.",
      ctaButton: "Open Wise",
      body: `<p>You type both rates. The page does not fetch a live quote, and the currency names are labels on the result. They do not look up a market. Point both rates the same way: units of the currency you receive for one unit you give. The bank delivers the amount times the bank rate. The interbank rate delivers the amount times the interbank rate. The loss is the mid amount minus the bank amount. The percent is that loss divided by the mid amount. Basis points are the percent times 10,000. If you invert one rate and not the other, the gap is a nonsense number. The form cannot tell that you swapped the direction.</p>
<h2>1000 at 1.10 and 1.07</h2>
<p>Convert 1000. The interbank rate is 1.10 and the bank rate is 1.07. The mid amount is 1100. The bank delivers 1070. The loss is 30. As a percent of the mid amount that is 30 divided by 1100, about 2.73 percent, which is about 273 basis points. Nothing in that chain is a forecast of tomorrow's rate. It is the two numbers you typed, multiplied and subtracted. A bank that shows you only its own rate has not shown you this gap. You still have to bring the interbank figure from somewhere you trust, and you should note the time, because both rates move.</p>
<h2>An alternative fee is a percent of the mid amount</h2>
<p>The alternative delivers the mid amount times (1 minus the fee you type). The fee is a percent of the mid amount, not of the 1000 you started with. A fee of 0.5 percent on a mid amount of 1100 is 5.50, so the alternative delivers 1094.50. That is 24.50 more than the bank in this example. Type a larger fee and the alternative can fall below the bank. The comparison is arithmetic, not a ranking of companies. This 0.5 percent is a number for the example. It is not a Wise tariff. The page does not know Wise's current fee. That fee changes with the route, the amount, and the day, and inventing it here would be a false quote.</p>
<h2>How to read the sign</h2>
<ul>
<li>A positive loss means the bank delivers less than the interbank rate you typed.</li>
<li>A negative loss means the bank rate you typed is richer than that mid. Check that the boxes are not swapped.</li>
<li>Both rates must be in the same direction. Names of currencies do not flip them.</li>
<li>The page does not call a rate service. A stale pair of rates makes a stale gap.</li>
<li>Inflation and a city's cost index are different losses. They are not this percent.</li>
</ul>
<p>What today's cash buys after years of rising prices is the <a href="{{href:inflation-calculator}}">inflation calculator</a>. A salary compared across cities is the <a href="{{href:cost-of-living-calculator}}">cost of living calculator</a>. An invoice priced in another currency still has to clear this gap before the freelance math means anything in the currency you spend, which is why the <a href="{{href:freelance-rate-calculator}}">freelance rate calculator</a> does not replace it. A balance that compounds is the <a href="{{href:compound-interest-calculator}}">compound interest calculator</a>, and it also does not know a bank's rate. <a href="{{aff:wise}}">Wise</a> is one specialist for sending money between countries. On a given route it can beat the bank rate you were offered, or it can lose once the fee is included. Type that fee yourself. The calculator works if you only have the bank's quote and a mid rate from another source. Opening an account does not fill the rate boxes.</p>`,
      faq: [
        {
          q: "How do you calculate the hidden fee in a bank exchange rate?",
          a: "Multiply the amount by the interbank rate and by the bank rate. The loss is the mid amount minus what the bank delivers. The percent is that loss divided by the mid amount. Convert 1000 at an interbank rate of 1.10 and a bank rate of 1.07. The mid amount is 1100, the bank delivers 1070, and the loss is 30, about 2.73 percent, or about 273 basis points. You have to type both rates."
        },
        {
          q: "What is a basis point on this currency page?",
          a: "A basis point is one hundredth of a percent. The page takes the loss as a fraction of the mid amount and multiplies by 10,000. A gap of about 2.73 percent is about 273 basis points. The money loss and the percent describe the same gap. Basis points are only a finer way to read the percent. They are not a separate fee the bank added on top, and they are only as current as the two rates you typed."
        },
        {
          q: "How does the alternative fee compare with the bank?",
          a: "The alternative keeps the mid amount after a percent you type. That percent applies to the mid amount, not to the sum you started with. On a mid amount of 1100, a 0.5 percent fee removes 5.50 and leaves 1094.50, which is 24.50 more than the bank's 1070 in the example. A larger fee can leave less than the bank. The 0.5 percent is an example input, not a firm's current tariff."
        },
        {
          q: "Why might the loss come out negative?",
          a: "The loss is the mid amount minus the bank amount. If the bank rate you typed is higher than the interbank rate, the bank delivers more and the loss is negative. That can mean a generous quote, or it can mean the two boxes were swapped. Both rates have to point the same way: units received per one unit you give. The currency names do not flip a rate."
        },
        {
          q: "Does this page know what Wise charges today?",
          a: "No. Wise is one specialist for cross-border transfers, and on a given route it can be cheaper than the bank or it can be not, once you include the fee. This calculator does not store Wise's current fee, because that fee changes with the corridor, the amount, and the day. Type the fee you were actually quoted into the alternative box. The arithmetic works from the bank rate and the interbank rate alone if that is all you have."
        }
      ]
    },
    ru: {
      title: "Скрытая наценка банка и межбанковский курс | Бесплатные калькуляторы",
      description: "Скрытая наценка банка против межбанковского курса: в деньгах, в процентах и в базисных пунктах. Оба курса вводите сами. Живую котировку страница не берёт.",
      h1: "Калькулятор скрытой наценки банка",
      lede: "Сумма по курсу банка рядом с межбанковским курсом, который вы вводите, и комиссия, с которой это можно сравнить.",
      banner: "Это арифметика для плана. Это не прогноз и не инвестиционная, налоговая или юридическая рекомендация.",
      ctaTitle: "Сервис перевода бывает дешевле, а бывает нет",
      ctaBody: "Разрыв на странице — это разница двух курсов, которые вы ввели. Wise — один из сервисов для перевода между странами. Он может быть дешевле банка или нет: зависит от направления и от комиссии, которую вы подставите. Текущую комиссию Wise страница не знает и считает по курсу банка без неё.",
      ctaButton: "Открыть Wise",
      body: `<p>Оба курса вводите вы. Живую котировку страница не запрашивает, а названия валют — подписи к результату. Рынок они не спрашивают. Оба курса должны смотреть в одну сторону: сколько валюты вы получаете за одну единицу, которую отдаёте. Банк выдаёт сумму, умноженную на курс банка. Межбанковский курс выдаёт сумму, умноженную на межбанковский курс. Потеря — это сумма по межбанку минус сумма банка. Процент — эта потеря, делённая на сумму по межбанку. Базисные пункты — тот же процент, умноженный на 10 000. Если перевернуть один курс и не перевернуть другой, разрыв станет бессмыслицей. Форма не заметит, что направление перепутано.</p>
<h2>1000 при курсах 1,10 и 1,07</h2>
<p>Меняете 1000. Межбанковский курс 1,10, курс банка 1,07. По межбанку выходит 1100. Банк выдаёт 1070. Потеря — 30. В процентах от межбанковской суммы это 30 разделить на 1100, около 2,73%, то есть около 273 базисных пунктов. В этой цепочке нет прогноза завтрашнего курса. Это два введённых числа, умноженные и вычтенные. Банк, который показал только свой курс, этот разрыв не показал. Межбанковскую цифру всё равно нужно принести из источника, которому вы доверяете, и заметить время: оба курса двигаются.</p>
<h2>Комиссия альтернативы — процент от суммы по межбанку</h2>
<p>Альтернатива выдаёт сумму по межбанку, умноженную на (1 минус введённую комиссию). Комиссия — процент от межбанковской суммы, а не от исходных 1000. Комиссия 0,5% от 1100 — это 5,50, поэтому альтернатива выдаёт 1094,50. В этом примере это на 24,50 больше, чем выдаёт банк. Введите комиссию крупнее — и альтернатива может оказаться ниже банка. Сравнение — арифметика, не рейтинг компаний. Эти 0,5% — число для примера. Это не тариф Wise. Текущую комиссию Wise страница не знает. Она меняется от направления, суммы и дня, и выдумывать её здесь значило бы соврать в котировке.</p>
<h2>Как читать знак</h2>
<ul>
<li>Положительная потеря значит, что банк выдаёт меньше, чем введённый межбанковский курс.</li>
<li>Отрицательная потеря значит, что введённый курс банка щедрее межбанка. Проверьте, не перепутаны ли поля.</li>
<li>Оба курса должны быть в одну сторону. Названия валют их не переворачивают.</li>
<li>Службу курсов страница не вызывает. Устаревшая пара курсов даёт устаревший разрыв.</li>
<li>Инфляция и городской индекс цен — другие потери. Это не этот процент.</li>
</ul>
<p>Что сегодняшние деньги купят через годы роста цен, считает <a href="{{href:inflation-calculator}}">калькулятор инфляции</a>. Зарплату в двух городах сравнивает <a href="{{href:cost-of-living-calculator}}">калькулятор стоимости жизни</a>. Счёт в другой валюте всё равно должен пройти этот разрыв, прежде чем ставка фрилансера что-то значит в валюте, которой вы платите, поэтому <a href="{{href:freelance-rate-calculator}}">калькулятор ставки фрилансера</a> его не заменяет. Баланс со сложным процентом считает <a href="{{href:compound-interest-calculator}}">калькулятор сложного процента</a>, и курса банка он тоже не знает. <a href="{{aff:wise}}">Wise</a> — один из сервисов для перевода денег между странами. На конкретном направлении он может обойти предложенный курс банка, а может проиграть, когда комиссия уже внутри. Эту комиссию вводите сами. Калькулятор работает, если у вас есть только курс банка и межбанк из другого источника. Открытие счёта поля курсов не заполняет.</p>`,
      faq: [
        {
          q: "Как посчитать скрытую наценку банка в курсе обмена?",
          a: "Умножьте сумму на межбанковский курс и на курс банка. Потеря — сумма по межбанку минус то, что выдаёт банк. Процент — эта потеря, делённая на межбанковскую сумму. Поменяйте 1000 при межбанке 1,10 и курсе банка 1,07. По межбанку выйдет 1100, банк выдаст 1070, потеря 30, около 2,73%, или около 273 базисных пунктов. Оба курса нужно ввести. Живую котировку страница не берёт."
        },
        {
          q: "Что такое базисный пункт на этой странице?",
          a: "Базисный пункт — это сотая доля процента. Страница берёт потерю как долю межбанковской суммы и умножает на 10 000. Разрыв около 2,73% — это около 273 базисных пунктов. Потеря в деньгах и процент описывают один и тот же разрыв. Базисные пункты — лишь более мелкий способ прочитать процент. Это не отдельная комиссия, которую банк добавил сверху, и они актуальны ровно настолько, насколько актуальны два введённых курса."
        },
        {
          q: "Как альтернативная комиссия сравнивается с банком?",
          a: "Альтернатива оставляет межбанковскую сумму после процента, который вводите вы. Процент берётся от межбанковской суммы, не от исходной. От 1100 комиссия 0,5% снимает 5,50 и оставляет 1094,50 — на 24,50 больше, чем 1070 у банка в этом примере. Более крупная комиссия может оставить меньше, чем банк. Эти 0,5% — ввод для примера, не нынешний тариф фирмы. Живую комиссию страница не запрашивает."
        },
        {
          q: "Почему потеря может выйти отрицательной?",
          a: "Потеря — это сумма по межбанку минус сумма банка. Если введённый курс банка выше межбанковского, банк выдаёт больше, и потеря отрицательная. Так бывает при щедрой котировке, а бывает, что поля просто перепутаны. Оба курса должны смотреть в одну сторону: сколько единиц вы получаете за одну отданную. Названия валют курс не переворачивают. Проверьте направление, прежде чем считать отрицательный разрыв доказательством, что банк обошёл рынок."
        },
        {
          q: "Страница знает, сколько Wise берёт сегодня?",
          a: "Нет. Wise — один из сервисов для перевода между странами, и на конкретном направлении он может быть дешевле банка или нет, когда комиссия уже учтена. Текущую комиссию Wise калькулятор не хранит: она меняется от коридора, суммы и дня. Впишите в поле альтернативы ту комиссию, которую вам реально назвали. Арифметика работает и от одного курса банка плюс межбанка, если больше ничего нет. Открытие счёта эти поля не заполняет."
        }
      ]
    }
  }
];
