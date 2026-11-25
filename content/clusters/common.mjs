function tool(spec) {
  return spec;
}

export const commonTools = [
  tool({
    slug: "mortgage-calculator",
    cluster: "finance",
    calc: "mortgage",
    category: "FinanceApplication",
    related: ["loan-calculator", "simple-interest-calculator", "compound-interest-calculator", "inflation-calculator"],
    en: {
      title: "Mortgage calculator | Free Online Calculators",
      description: "Monthly principal and interest for a fixed-rate mortgage, plus the tax, insurance, and HOA you type. The monthly rate is the annual rate divided by 12.",
      h1: "Mortgage calculator",
      lede: "A fixed-rate home loan turned into a monthly principal-and-interest payment, with tax, insurance, and HOA kept on their own lines.",
      banner: "This is the amortizing-loan formula for a rate you type. It is not a loan offer, a tax deduction, or an approval.",
      body: `<p>The monthly interest rate is the annual rate you type, divided by twelve. That is the convention for a fixed-rate home loan in the United States. It is not the effective monthly rate you would get by raising one plus the annual rate to the power of one twelfth. The number of payments is the years you type, times twelve, rounded to a whole month. The principal is the home price minus the down payment. The principal-and-interest payment is principal times the monthly rate times one plus that rate, raised to the number of payments, divided by that same power minus one. A zero rate skips the power formula, because it would divide by zero, and the payment is the principal divided by the number of payments.</p>
<p>Property tax and insurance are the yearly amounts you type, divided by twelve. A monthly HOA or similar fee is added as you typed it. None of those three changes the interest. The monthly payment line adds them to principal and interest. Each month the interest portion is the remaining balance times the monthly rate, and the rest of the contractual payment reduces the balance. The last payment is whatever balance remains, so the schedule ends at zero rather than a leftover cent. The year table groups those months and shows that year's interest, that year's principal, and the balance at the end of the year.</p>
<h2>A price you can recompute</h2>
<p>Take a home priced at 400,000 with 80,000 down. The amount borrowed is 320,000. At 6.5 percent for 30 years there are 360 payments, and the monthly rate is 0.065 divided by 12. Put that rate into the payment formula. Tax of 3,600 a year is 300 a month. Insurance of 1,200 a year is 100 a month. With the HOA box at zero, the monthly payment line is principal and interest plus 400. A larger down payment does not change the rate. It changes the principal the rate is applied to. If the down payment is larger than the price, there is nothing to amortize and the page asks you to check the numbers.</p>
<p>A second check uses a round loan and no extras. Borrow 200,000 at 6 percent for 30 years and set tax, insurance, and HOA to zero. The monthly rate is 0.005. One plus that rate, raised to 360, is about 6.022575. The payment is 200,000 times 0.005 times that power, divided by the power minus one, which comes to about 1,199.10. Over 360 payments the interest is those payments minus 200,000. A zero rate on 1,200 borrowed for one year is exactly 100 a month and zero interest. Both of those cases are what the formula produces. They are not a quote from a particular lender.</p>
<h2>What the schedule leaves out</h2>
<ul>
<li>The rate is fixed for the whole term. An adjustable rate, a teaser period, or a refinance needs a new run.</li>
<li>Closing costs, discount points, and mortgage insurance are not added to the balance.</li>
<li>Tax and insurance are the amounts you typed. The page does not look up a mill rate or a premium.</li>
<li>Extra monthly payments belong on the loan calculator. This schedule assumes the contractual payment only.</li>
<li>The result is arithmetic. It is not an offer, a deduction, or a statement of what a lender will approve.</li>
</ul>
<p>A personal or auto loan, with an optional extra payment, is the <a href="{{href:loan-calculator}}">loan calculator</a>. Interest that does not compound is the <a href="{{href:simple-interest-calculator}}">simple interest calculator</a>. A balance that grows because you add money, rather than a balance you pay down, is the <a href="{{href:compound-interest-calculator}}">compound interest calculator</a>. What the same money buys after inflation is the <a href="{{href:inflation-calculator}}">inflation calculator</a>. You type the rate you were offered, or the rate you want to test. The page does not read a rate sheet.</p>`,
      faq: [
        { q: "How is the monthly mortgage rate calculated?", a: "The annual rate you type is divided by 12. A 6 percent loan uses a monthly rate of 0.005. That is the US fixed-rate convention, not the effective rate from compounding the annual rate monthly." },
        { q: "Does the payment include tax and insurance?", a: "Principal and interest are on their own line. Tax per month is the yearly tax you typed, divided by 12. Insurance is handled the same way. HOA is the monthly amount you typed. The total adds the four lines." },
        { q: "Why is the last payment different?", a: "Each month interest is the remaining balance times the monthly rate. The last payment is sized to the balance that is left, so the schedule ends at zero instead of a leftover cent." },
        { q: "Can I use this for an adjustable-rate mortgage?", a: "Only for the period where the rate you typed actually applies. When the rate changes, run the remaining balance for the remaining months at the new rate." }
      ]
    },
    ru: {
      title: "Калькулятор ипотеки | Бесплатные калькуляторы",
      description: "Ежемесячные долг и проценты по фиксированной ставке плюс налог, страховка и взнос, которые вы вводите. Месячная ставка — годовая, делённая на 12.",
      h1: "Калькулятор ипотеки",
      lede: "Жилищный кредит с фиксированной ставкой превращается в ежемесячный платёж долга и процентов. Налог, страховка и взнос стоят отдельными строками.",
      banner: "Это формула аннуитета для ставки, которую вы вводите. Это не предложение банка, не вычет и не одобрение.",
      body: `<p>Месячная ставка — это годовая ставка из поля, делённая на двенадцать. Так устроен жилищный кредит с фиксированной ставкой в США. Это не эффективная месячная ставка, которую получили бы, возведя единицу плюс годовую ставку в степень одна двенадцатая. Число платежей — годы из формы, умноженные на двенадцать и округлённые до целого месяца. Сумма кредита — цена жилья минус первый взнос. Платёж долга и процентов равен сумме кредита, умноженной на месячную ставку и на единицу плюс эта ставка в степени числа платежей, делённой на ту же степень минус один. При нулевой ставке степень не используют, потому что получилось бы деление на ноль: платёж равен сумме кредита, делённой на число платежей.</p>
<p>Налог и страховка — это годовые суммы из формы, делённые на двенадцать. Ежемесячный взнос ТСЖ или похожий платёж прибавляется так, как вы его ввели. Эти три величины проценты не меняют. Строка платежа в месяц складывает их с долгом и процентами. Каждый месяц процентная часть — это остаток, умноженный на месячную ставку, а остальное от договорного платежа уменьшает долг. Последний платёж равен тому, что осталось, поэтому график заканчивается нулём, а не висящей копейкой. Таблица по годам собирает месяцы и показывает проценты года, долг года и остаток на конец года.</p>
<h2>Цена, которую можно пересчитать</h2>
<p>Возьмите жильё за 400 000 и первый взнос 80 000. В долг берётся 320 000. При 6,5 процента на 30 лет платежей 360, а месячная ставка — 0,065, делённые на 12. Подставьте её в формулу платежа. Налог 3 600 в год — это 300 в месяц. Страховка 1 200 в год — это 100 в месяц. Если взнос ТСЖ равен нулю, строка платежа — это долг и проценты плюс 400. Больший первый взнос ставку не меняет. Он меняет сумму, к которой ставку применяют. Если первый взнос больше цены, амортизировать нечего, и страница просит проверить числа.</p>
<p>Вторая проверка — круглая сумма без доплат. Возьмите 200 000 под 6 процентов на 30 лет и обнулите налог, страховку и взнос. Месячная ставка 0,005. Единица плюс эта ставка в степени 360 — около 6,022575. Платёж — 200 000 умножить на 0,005 и на эту степень, делённые на степень минус один, около 1 199,10. За 360 платежей проценты — это платежи минус 200 000. Нулевая ставка на 1 200 на один год даёт ровно 100 в месяц и ноль процентов. Оба случая — то, что даёт формула. Это не котировка конкретного банка.</p>
<h2>Чего в графике нет</h2>
<ul>
<li>Ставка одна на весь срок. Плавающая ставка, льготный период или рефинансирование — это новый прогон.</li>
<li>Расходы на сделку, дисконтные пункты и страхование кредита к сумме не прибавляются.</li>
<li>Налог и страховка — те суммы, которые вы ввели. Ставку налога и тариф страница не ищет.</li>
<li>Досрочные платежи — на калькуляторе кредита. Здесь только договорный платёж.</li>
<li>Результат — арифметика. Это не оферта, не вычет и не обещание, что банк одобрит сумму.</li>
</ul>
<p>Потребительский или автокредит с необязательным дополнительным платежом считает <a href="{{href:loan-calculator}}">калькулятор кредита</a>. Процент без капитализации — <a href="{{href:simple-interest-calculator}}">калькулятор простого процента</a>. Сумма, которая растёт, потому что вы довнесете деньги, а не сумма, которую вы гасите, — <a href="{{href:compound-interest-calculator}}">калькулятор сложного процента</a>. Что те же деньги купят после инфляции, считает <a href="{{href:inflation-calculator}}">калькулятор инфляции</a>. Ставку, которую вам назвали, или ставку, которую хотите проверить, вводите сами. Прайс банка страница не читает.</p>`,
      faq: [
        { q: "Как считается месячная ставка ипотеки?", a: "Годовая ставка из поля делится на 12. Для 6 процентов месячная ставка равна 0,005. Это соглашение фиксированных кредитов в США, а не эффективная ставка с ежемесячной капитализацией годовой." },
        { q: "Платёж включает налог и страховку?", a: "Долг и проценты стоят отдельной строкой. Налог в месяц — годовой налог, делённый на 12. Страховка считается так же. Взнос — месячная сумма из поля. Итог складывает четыре строки." },
        { q: "Почему последний платёж другой?", a: "Каждый месяц проценты — это остаток, умноженный на месячную ставку. Последний платёж подгоняется под оставшийся долг, чтобы график закончился нулём, а не копейкой." },
        { q: "Подойдёт ли это для плавающей ставки?", a: "Только на тот срок, где введённая ставка правда действует. Когда ставка изменится, посчитайте оставшийся долг на оставшиеся месяцы уже по новой ставке." }
      ]
    }
  }),
  tool({
    slug: "loan-calculator",
    cluster: "finance",
    calc: "loan",
    category: "FinanceApplication",
    related: ["mortgage-calculator", "simple-interest-calculator", "compound-interest-calculator", "margin-markup-calculator"],
    en: {
      title: "Loan calculator | Free Online Calculators",
      description: "Monthly payment on a fixed-rate loan, total interest, and how an extra monthly payment shortens the term. The monthly rate is the annual rate divided by 12.",
      h1: "Loan calculator",
      lede: "The payment on a fixed-rate loan, the interest over the term, and the effect of paying a little extra each month.",
      banner: "This is loan arithmetic for a rate and a term you type. It is not a credit offer.",
      body: `<p>The term is the years you type, times twelve, plus the extra months. The monthly rate is the annual rate divided by twelve, the same convention as a fixed installment loan. The contractual payment is the amortizing payment: principal times the monthly rate times one plus that rate, raised to the number of months, divided by that power minus one. A zero rate makes the payment the principal divided by the number of months. An extra amount you type is added to that contractual payment in a month-by-month balance. Each month interest is the remaining balance times the monthly rate. The payment cannot be smaller than that interest, or the balance would grow and the page stops. The last month pays only what is left.</p>
<p>Total interest is the sum of those monthly interest amounts, not contractual payment times months minus principal, because the last payment and any extra payment change the cash that actually leaves. Interest saved is the interest on the contractual schedule minus the interest on the schedule with the extra payment. If the extra box is zero, the two schedules are the same and the saving is zero. Months with the extra payment is how many months the balance takes to reach zero. It cannot be longer than the contractual term when the extra payment is positive and the rate is not negative.</p>
<h2>Two loans you can recompute</h2>
<p>Borrow 20,000 at 7.5 percent for 5 years and pay nothing extra. The term is 60 months. The monthly rate is 0.075 divided by 12. The payment line is the amortizing formula on those inputs. Total interest is what the schedule charges above the 20,000. Add 100 a month on top of the contractual payment and the payoff month count falls, the interest falls, and the saving line is the difference. The page does not assume a fee for paying early. If your contract charges one, it is not in this result.</p>
<p>A zero-rate check is exact. Borrow 1,200 at 0 percent for 12 months. The payment is 100. Pay an extra 100 and the loan is gone in 6 months, the cash paid is still 1,200, and the interest saved is zero because there was no interest. That case catches a formula that accidentally compounds a zero rate or that forgets the last partial payment. A term of zero months is rejected. A negative amount is rejected. The same formula covers a car loan or a personal loan when the rate is fixed and the payment is monthly. It does not cover a credit card that recalculates a minimum from a changing balance, and it does not cover interest-only periods.</p>
<h2>What stays outside</h2>
<ul>
<li>One rate covers the whole term. A promotional rate that steps up needs two runs.</li>
<li>Origination fees are not added to the principal unless you type them into the amount borrowed.</li>
<li>A penalty for paying early is not subtracted from the interest saved.</li>
<li>Weekly or biweekly schedules are not built. The step is one month.</li>
<li>The result is not a disclosure a lender is required to give you.</li>
</ul>
<p>A home price, a down payment, and yearly tax and insurance belong on the <a href="{{href:mortgage-calculator}}">mortgage calculator</a>. Interest with no payments along the way is the <a href="{{href:simple-interest-calculator}}">simple interest calculator</a>. Money you set aside so that it grows is the <a href="{{href:compound-interest-calculator}}">compound interest calculator</a>. The gap between a cost and a price, which is a different percentage from a loan rate, is the <a href="{{href:margin-markup-calculator}}">margin and markup calculator</a>.</p>`,
      faq: [
        { q: "How is the loan payment calculated?", a: "Monthly rate equals the annual rate divided by 12. Payment equals principal times that rate times (1 + rate) to the power of the number of months, divided by that power minus 1. A zero rate divides the principal by the number of months." },
        { q: "What does the extra payment do?", a: "It is added to the contractual payment every month. Interest is still charged on the remaining balance. The balance reaches zero sooner, and the interest saved is the difference between the two schedules." },
        { q: "Why can total paid differ from payment times months?", a: "The last month pays only the remaining balance plus that month's interest. An extra payment also changes how much cash leaves. The total-paid line sums the payments that were actually applied." },
        { q: "Does this work for a credit card?", a: "No. A card minimum usually changes as the balance changes, and the rate can change. This page wants one fixed rate and one fixed monthly step." }
      ]
    },
    ru: {
      title: "Калькулятор кредита | Бесплатные калькуляторы",
      description: "Ежемесячный платёж по фиксированной ставке, проценты за срок и то, как дополнительный платёж сокращает срок. Месячная ставка — годовая, делённая на 12.",
      h1: "Калькулятор кредита",
      lede: "Платёж по кредиту с фиксированной ставкой, проценты за весь срок и эффект небольшой доплаты каждый месяц.",
      banner: "Это арифметика кредита для ставки и срока, которые вы вводите. Это не кредитное предложение.",
      body: `<p>Срок — это годы из формы, умноженные на двенадцать, плюс дополнительные месяцы. Месячная ставка — годовая, делённая на двенадцать, как у кредита с фиксированным платежом. Договорный платёж — аннуитет: сумма кредита, умноженная на месячную ставку и на единицу плюс эта ставка в степени числа месяцев, делённая на эту степень минус один. При нулевой ставке платёж равен сумме, делённой на число месяцев. Дополнительная сумма из поля прибавляется к договорному платежу в помесячном остатке. Каждый месяц проценты — это остаток, умноженный на месячную ставку. Если платёж не покрывает эти проценты, долг рос бы, и страница останавливается. В последний месяц платится только то, что осталось.</p>
<p>Проценты всего — сумма месячных процентных частей, а не договорный платёж, умноженный на число месяцев, минус сумма кредита: последний платёж и доплата меняют реально ушедшие деньги. Сэкономленные проценты — проценты договорного графика минус проценты графика с доплатой. Если доплата равна нулю, графики совпадают и экономия равна нулю. Месяцы с доплатой — это сколько месяцев остаток идёт к нулю. При положительной доплате и неотрицательной ставке этот срок не длиннее договорного.</p>
<h2>Два кредита, которые сходятся вручную</h2>
<p>Возьмите 20 000 под 7,5 процента на 5 лет без доплаты. Срок — 60 месяцев. Месячная ставка — 0,075, делённые на 12. Строка платежа — формула аннуитета на этих вводных. Проценты всего — то, что график начисляет сверх 20 000. Прибавьте 100 в месяц к договорному платежу: число месяцев до нуля падает, проценты падают, строка экономии — разница. Комиссии за досрочное погашение страница не предполагает. Если она есть в договоре, в результате её нет.</p>
<p>Проверка с нулевой ставкой точная. Возьмите 1 200 под 0 процентов на 12 месяцев. Платёж равен 100. Доплата 100 закрывает кредит за 6 месяцев, выплаченные деньги всё ещё 1 200, а сэкономленные проценты равны нулю, потому что процентов не было. Этот случай ловит формулу, которая зря капитализирует нулевую ставку или забывает последний неполный платёж. Ноль месяцев отвергается. Отрицательная сумма отвергается. Та же формула годится для автокредита или потребительского кредита, если ставка фиксированная и шаг — месяц. Она не годится для карты, где минимум пересчитывается от меняющегося остатка, и не годится для периода, когда платятся только проценты.</p>
<h2>Что остаётся снаружи</h2>
<ul>
<li>Одна ставка на весь срок. Льготная ставка, которая потом вырастет, — это два прогона.</li>
<li>Комиссия за выдачу не прибавляется к сумме, пока вы сами не впишете её в сумму кредита.</li>
<li>Штраф за досрочное погашение из экономии не вычитается.</li>
<li>Недельный или двухнедельный график не строится. Шаг — один месяц.</li>
<li>Результат — не раскрытие, которое банк обязан вам выдать.</li>
</ul>
<p>Цена жилья, первый взнос и годовые налог со страховкой — на <a href="{{href:mortgage-calculator}}">калькуляторе ипотеки</a>. Процент без платежей по дороге считает <a href="{{href:simple-interest-calculator}}">калькулятор простого процента</a>. Деньги, которые вы откладываете, чтобы они росли, считает <a href="{{href:compound-interest-calculator}}">калькулятор сложного процента</a>. Разрыв между себестоимостью и ценой, а это другой процент, не ставка кредита, считает <a href="{{href:margin-markup-calculator}}">калькулятор маржи и наценки</a>.</p>`,
      faq: [
        { q: "Как считается платёж по кредиту?", a: "Месячная ставка равна годовой, делённой на 12. Платёж равен сумме, умноженной на эту ставку и на (1 + ставка) в степени числа месяцев, делённой на эту степень минус 1. При нулевой ставке сумма делится на число месяцев." },
        { q: "Что делает дополнительный платёж?", a: "Он прибавляется к договорному платежу каждый месяц. Проценты по-прежнему идут на остаток. Остаток обнуляется раньше, а сэкономленные проценты — разница двух графиков." },
        { q: "Почему всего выплачено может не равняться платежу, умноженному на месяцы?", a: "В последний месяц платится только остаток плюс проценты этого месяца. Доплата тоже меняет ушедшие деньги. Строка всего выплачено суммирует платежи, которые правда применились." },
        { q: "Это подходит для кредитной карты?", a: "Нет. Минимум по карте обычно меняется вместе с остатком, и ставка может меняться. Здесь нужны одна фиксированная ставка и один месячный шаг." }
      ]
    }
  }),
  tool({
    slug: "simple-interest-calculator",
    cluster: "finance",
    calc: "simple",
    category: "FinanceApplication",
    related: ["compound-interest-calculator", "loan-calculator", "mortgage-calculator", "inflation-calculator"],
    en: {
      title: "Simple interest calculator | Free Online Calculators",
      description: "Simple interest from principal, an annual rate, and time in years, months, or days. Days use a 365 or 360 count. The interest is not compounded.",
      h1: "Simple interest calculator",
      lede: "Interest that does not compound: principal times the annual rate times the time, with months and days turned into years first.",
      banner: "Simple interest is not compound interest. A rate that is credited and then earns on itself belongs on the compound page.",
      body: `<p>The formula is I = P × r × t. P is the principal. r is the annual rate as a decimal, so 5 percent is 0.05. t is the time in years. The amount at the end is P + I. Nothing is added back onto the principal along the way, which is the whole difference from compound interest. If you type a monthly rate into the annual box, the result is twelve times too big. The label on the rate is annual on purpose.</p>
<p>Time in years is used as typed. Time in months is divided by 12, so 6 months is half a year and 18 months is 1.5 years. Time in days is divided by 365 or by 360, whichever base you pick. The 365 base is an actual/365 count: each day is 1/365 of the rate, including in a leap year. The 360 base divides by 360, which is the style of a 30/360 fraction when someone has already turned a period into a day count of 30-day months. The page does not itself convert a pair of dates into a 30/360 day count. If you have two dates, count the days you intend, or use the date calculator, and then type that count here.</p>
<h2>Three results you can recompute</h2>
<p>Start with 1,000 at 5 percent for 3 years. Interest is 1,000 × 0.05 × 3, which is 150. The amount at the end is 1,150. The same principal and rate for 6 months uses t = 6/12 = 0.5, so the interest is 25 and the amount is 1,025. For 73 days on a 365 base, t = 73/365, and the interest is 1,000 × 0.05 × 73/365, about 10.00 only if the day count were 73 on a base that makes it round. It is not forced to a round number. For 72 days on a 360 base, t = 72/360 = 0.2, and the interest is exactly 10. Those four cases are the checks the formula is held to.</p>
<p>A zero rate returns zero interest and an ending amount equal to the principal, for any time. A zero time does the same. A negative principal is rejected. The page does not subtract tax, and it does not inflate the result. If the money will sit long enough that interest is credited and then earns interest, this page understates the balance on purpose. That question is compound interest, including the choice of how often the rate compounds and whether a monthly deposit arrives at the start or the end of the month.</p>
<h2>Where simple interest is the wrong tool</h2>
<ul>
<li>A savings balance that compounds monthly is not I = P × r × t.</li>
<li>A mortgage payment is an amortizing payment, not this interest added once at the end.</li>
<li>The day base does not know which calendar convention a bank wrote into a note.</li>
<li>A rate quoted as a monthly fee has to be turned into an annual rate before you type it, or the label is wrong.</li>
</ul>
<p>Compound growth with deposits is the <a href="{{href:compound-interest-calculator}}">compound interest calculator</a>. A payment that pays the loan down is the <a href="{{href:loan-calculator}}">loan calculator</a> or the <a href="{{href:mortgage-calculator}}">mortgage calculator</a>. Purchasing power of the ending amount is the <a href="{{href:inflation-calculator}}">inflation calculator</a>. Count calendar days between two dates on the <a href="{{href:date-calculator}}">date calculator</a> before you decide which day count to type here.</p>`,
      faq: [
        { q: "What is the simple interest formula?", a: "Interest equals principal times the annual rate times the time in years. The amount at the end is the principal plus that interest. The interest is not added back onto the principal." },
        { q: "How are months and days turned into years?", a: "Months are divided by 12. Days are divided by 365 or by 360, depending on the base you pick. The 365 base does not give February 29 a special weight." },
        { q: "Is 5 percent for 3 years on 1,000 equal to 150?", a: "Yes. 1,000 times 0.05 times 3 is 150, and the ending amount is 1,150. Six months at the same rate is 25 of interest." },
        { q: "When should I use compound interest instead?", a: "When the interest is credited and then itself earns interest, or when you add a deposit every month. Simple interest leaves both of those out on purpose." }
      ]
    },
    ru: {
      title: "Калькулятор простого процента | Бесплатные калькуляторы",
      description: "Простой процент от суммы, годовой ставки и срока в годах, месяцах или днях. Дни делятся на 365 или на 360. Процент не капитализируется.",
      h1: "Калькулятор простого процента",
      lede: "Процент без капитализации: сумма умножить на годовую ставку и на срок. Месяцы и дни сначала переводятся в годы.",
      banner: "Простой процент — не сложный. Если начисленные проценты сами начинают приносить процент, это страница сложного процента.",
      body: `<p>Формула: I = P × r × t. P — начальная сумма. r — годовая ставка десятичной дробью, то есть 5 процентов — это 0,05. t — срок в годах. Сумма в конце — P + I. По дороге к начальной сумме ничего не прибавляется. В этом всё отличие от сложного процента. Если в годовое поле вписать месячную ставку, результат будет в двенадцать раз больше, чем нужно. Подпись у ставки годовая нарочно.</p>
<p>Срок в годах используется как введён. Срок в месяцах делится на 12: 6 месяцев — это полгода, 18 месяцев — 1,5 года. Срок в днях делится на 365 или на 360, какую базу вы выбрали. База 365 — это actual/365: каждый день равен 1/365 ставки, в том числе в високосном году. База 360 делит на 360. Так устроена дробь в духе 30/360, если период уже перевели в дни по 30-дневным месяцам. Сама страница пару дат в количество дней 30/360 не переводит. Если есть две даты, посчитайте нужные дни или откройте калькулятор дат и впишите это число сюда.</p>
<h2>Три итога, которые сходятся вручную</h2>
<p>Начните с 1 000 под 5 процентов на 3 года. Проценты — 1 000 × 0,05 × 3, это 150. Сумма в конце — 1 150. Та же сумма и ставка на 6 месяцев используют t = 6/12 = 0,5, поэтому проценты равны 25, а сумма — 1 025. Для 73 дней на базе 365 t = 73/365, и проценты равны 1 000 × 0,05 × 73/365. Число не подгоняется к круглому. Для 72 дней на базе 360 t = 72/360 = 0,2, и проценты равны ровно 10. На этих случаях формулу и держат.</p>
<p>Нулевая ставка даёт ноль процентов и конечную сумму, равную начальной, при любом сроке. Нулевой срок делает то же. Отрицательная сумма отвергается. Налог страница не вычитает и на инфляцию результат не поправляет. Если деньги пролежат так долго, что проценты начислят и они сами начнут приносить проценты, эта страница нарочно занижает итог. Такой вопрос — сложный процент, включая то, как часто капитализируется ставка и приходит ли ежемесячный взнос в начале или в конце месяца.</p>
<h2>Где простой процент — не тот инструмент</h2>
<ul>
<li>Накопление с ежемесячной капитализацией — это не I = P × r × t.</li>
<li>Ипотечный платёж — это аннуитет, а не этот процент, прибавленный один раз в конце.</li>
<li>База дней не знает, какое календарное соглашение банк вписал в договор.</li>
<li>Ставку, названную как плата за месяц, нужно сначала перевести в годовую, иначе подпись поля врёт.</li>
</ul>
<p>Рост с капитализацией и взносами считает <a href="{{href:compound-interest-calculator}}">калькулятор сложного процента</a>. Платёж, который гасит кредит, считает <a href="{{href:loan-calculator}}">калькулятор кредита</a> или <a href="{{href:mortgage-calculator}}">калькулятор ипотеки</a>. Покупательную способность конечной суммы считает <a href="{{href:inflation-calculator}}">калькулятор инфляции</a>. Календарные дни между двумя датами сначала посчитайте на <a href="{{href:date-calculator}}">калькуляторе дат</a>, а потом решите, какое число дней вписывать сюда.</p>`,
      faq: [
        { q: "Какая формула простого процента?", a: "Проценты равны начальной сумме, умноженной на годовую ставку и на срок в годах. Сумма в конце — начальная плюс эти проценты. Проценты к начальной сумме обратно не прибавляются." },
        { q: "Как месяцы и дни становятся годами?", a: "Месяцы делятся на 12. Дни делятся на 365 или на 360, смотря какую базу выбрать. База 365 не даёт 29 февраля отдельного веса." },
        { q: "1 000 под 5 процентов на 3 года — это 150?", a: "Да. 1 000 умножить на 0,05 и на 3 равно 150, сумма в конце 1 150. Шесть месяцев при той же ставке — 25 процентов." },
        { q: "Когда вместо этого нужен сложный процент?", a: "Когда начисленные проценты сами начинают приносить проценты или когда вы довнесете сумму каждый месяц. Простой процент оба этих случая нарочно не включает." }
      ]
    }
  }),
  tool({
    slug: "bmi-calculator",
    cluster: "fitness",
    calc: "bmi",
    category: "HealthApplication",
    related: ["calorie-calculator", "body-fat-calculator", "pace-calculator"],
    en: {
      title: "BMI calculator | Free Online Calculators",
      description: "Body mass index from kilograms and centimetres or from pounds and inches. Both systems use the exact conversion, so the same body returns the same BMI.",
      h1: "BMI calculator",
      lede: "Weight divided by height squared, with adult WHO categories and the weight that would land between 18.5 and 24.9.",
      banner: "BMI is a ratio for adults. It is not a diagnosis, and the categories are not cut points for children.",
      body: `<p>BMI is weight in kilograms divided by height in metres squared. A person who weighs 70 kilograms and is 1.75 metres tall has a BMI of 70 divided by 1.75 squared. 1.75 squared is 3.0625, and 70 divided by 3.0625 is about 22.9, which sits in the adult range the World Health Organization calls healthy: 18.5 up to, but not including, 25. Under 18.5 is labelled underweight, 25 up to 30 is labelled overweight, and 30 or more is labelled obese. Those words are the names of the cut points. They are not a reading of muscle, bone, age, pregnancy, or a lab result.</p>
<p>Pounds and inches go through exact factors before the division, so the index does not depend on which unit system you pick. One pound is 0.45359237 kilograms. One inch is 0.0254 metres. A weight of 70 divided by 0.45359237 pounds, and a height of 175 divided by 2.54 inches, is the same body as 70 kilograms and 175 centimetres, and the BMI matches to rounding error. The page does not use the rounded shortcut of 703 times pounds divided by inches squared, because that shortcut and the exact factors disagree in the fourth digit. The healthy-weight line uses BMI 18.5 at the bottom and 24.9 at the top, which is the last value still inside the healthy band before 25.</p>
<h2>How to read the range</h2>
<p>The range line is the weight, in the units you picked, that would produce a BMI of 18.5 and a BMI of 24.9 at the height you typed. It moves only when the height moves. It is not a target a clinician set, and it is not adjusted for age or frame. Change the height and both ends of the range change with the square of the height. Change only the weight and the BMI changes, but the range stays put. A height of zero or a weight of zero is rejected, because the ratio would be undefined or zero for a reason that is not a body.</p>
<p>Children and teenagers are scored against age-specific charts this page does not contain. An athlete with more muscle can sit in the overweight band with a low body-fat percentage. The body-fat page uses circumferences and will not agree with BMI, because it is a different formula. Pregnancy is outside both. If you need calories rather than an index, the calorie page uses weight, height, age, and an activity factor. BMI uses only weight and height.</p>
<h2>What the index leaves out</h2>
<ul>
<li>No age, sex, waist, or body-fat input enters the ratio.</li>
<li>The categories are adult WHO cut points, not paediatric percentiles.</li>
<li>A high BMI does not by itself say why the weight is high.</li>
<li>Switching units does not change the mathematics, only the labels on the inputs.</li>
</ul>
<p>Daily calories from the Mifflin–St Jeor equation are on the <a href="{{href:calorie-calculator}}">calorie calculator</a>. A circumference estimate is on the <a href="{{href:body-fat-calculator}}">body fat calculator</a>. Pace from a distance and a time is on the <a href="{{href:pace-calculator}}">pace calculator</a>. None of the three reads a scale or a tape. You type the measurements.</p>`,
      faq: [
        { q: "How is BMI calculated?", a: "Divide weight in kilograms by height in metres squared. 70 kilograms at 1.75 metres is 70 / 3.0625, about 22.9." },
        { q: "Do pounds and kilograms give the same BMI?", a: "Yes. Pounds are multiplied by 0.45359237 and inches by 0.0254 before the division. The same body in either system matches." },
        { q: "What do the categories mean?", a: "They are adult WHO bands: under 18.5, 18.5 to 24.9, 25 to 29.9, and 30 or more. They are not a diagnosis and they are not cut points for children." },
        { q: "Why does the healthy range use 24.9 and not 25?", a: "The overweight band starts at 25. The top of the healthy band on this page is 24.9, the last published value before that cut." }
      ]
    },
    ru: {
      title: "Калькулятор ИМТ | Бесплатные калькуляторы",
      description: "Индекс массы тела из килограммов и сантиметров или из фунтов и дюймов. Обе системы идут через точный перевод, поэтому одно тело даёт один ИМТ.",
      h1: "Калькулятор ИМТ",
      lede: "Вес, делённый на квадрат роста, с взрослыми категориями ВОЗ и весом, который попал бы между 18,5 и 24,9.",
      banner: "ИМТ — отношение для взрослых. Это не диагноз, и категории — не пороги для детей.",
      body: `<p>ИМТ — это вес в килограммах, делённый на квадрат роста в метрах. Человек весом 70 килограммов и ростом 1,75 метра имеет ИМТ 70, делённые на 1,75 в квадрате. 1,75 в квадрате — это 3,0625, а 70, делённые на 3,0625, — около 22,9. Это взрослый диапазон, который ВОЗ называет нормальным: от 18,5 до 25, не включая 25. Ниже 18,5 подписано как недостаточный вес, от 25 до 30 — как избыточный, 30 и выше — как ожирение. Это имена порогов. Это не чтение мышц, костей, возраста, беременности или анализа.</p>
<p>Фунты и дюймы проходят через точные коэффициенты до деления, поэтому индекс не зависит от выбранной системы. Один фунт — 0,45359237 килограмма. Один дюйм — 0,0254 метра. Вес 70, делённые на 0,45359237 фунта, и рост 175, делённые на 2,54 дюйма, — то же тело, что 70 килограммов и 175 сантиметров, и ИМТ совпадает с точностью округления. Страница не использует округлённый приём «703 умножить на фунты и делить на дюймы в квадрате», потому что этот приём и точные коэффициенты расходятся в четвёртом знаке. Линия здорового веса берёт ИМТ 18,5 снизу и 24,9 сверху: 24,9 — последнее значение ещё внутри полосы до 25.</p>
<h2>Как читать диапазон</h2>
<p>Строка диапазона — это вес в выбранных единицах, который дал бы ИМТ 18,5 и ИМТ 24,9 при введённом росте. Она двигается только вместе с ростом. Это не цель, которую поставил врач, и она не поправлена на возраст или телосложение. Измените рост — оба края диапазона изменятся вместе с квадратом роста. Измените только вес — изменится ИМТ, а диапазон останется. Нулевой рост или нулевой вес отвергаются: отношение было бы не определено или равно нулю по причине, которая не про тело.</p>
<p>Детей и подростков сравнивают с таблицами по возрасту, которых на этой странице нет. Спортсмен с большей мышечной массой может оказаться в полосе избыточного веса при низком проценте жира. Страница жира использует окружности и с ИМТ не совпадёт, потому что формула другая. Беременность — вне обеих. Если нужны калории, а не индекс, страница калорий берёт вес, рост, возраст и коэффициент активности. ИМТ берёт только вес и рост.</p>
<h2>Чего в индексе нет</h2>
<ul>
<li>Возраст, пол, талия и процент жира в отношение не входят.</li>
<li>Категории — взрослые пороги ВОЗ, не детские перцентили.</li>
<li>Высокий ИМТ сам по себе не говорит, почему вес высокий.</li>
<li>Смена единиц не меняет математику, только подписи полей.</li>
</ul>
<p>Калории в день по уравнению Миффлина — Сан Жеора — на <a href="{{href:calorie-calculator}}">калькуляторе калорий</a>. Оценка по окружностям — на <a href="{{href:body-fat-calculator}}">калькуляторе процента жира</a>. Темп по дистанции и времени — на <a href="{{href:pace-calculator}}">калькуляторе темпа</a>. Ни один из трёх не читает весы или сантиметр. Измерения вводите вы.</p>`,
      faq: [
        { q: "Как считается ИМТ?", a: "Вес в килограммах делят на квадрат роста в метрах. 70 килограммов при 1,75 метра — это 70 / 3,0625, около 22,9." },
        { q: "Фунты и килограммы дают один ИМТ?", a: "Да. Фунты умножаются на 0,45359237, дюймы на 0,0254, и только потом идёт деление. Одно тело в двух системах совпадает." },
        { q: "Что значат категории?", a: "Это взрослые полосы ВОЗ: ниже 18,5, от 18,5 до 24,9, от 25 до 29,9 и 30 и выше. Это не диагноз и не пороги для детей." },
        { q: "Почему верх здорового диапазона 24,9, а не 25?", a: "Полоса избыточного веса начинается с 25. Верх здоровой полосы на этой странице — 24,9, последнее опубликованное значение до этого порога." }
      ]
    }
  }),
  tool({
    slug: "calorie-calculator",
    cluster: "fitness",
    calc: "calorie",
    category: "HealthApplication",
    related: ["bmi-calculator", "body-fat-calculator", "pace-calculator"],
    en: {
      title: "Calorie calculator | Free Online Calculators",
      description: "Basal calories from the Mifflin–St Jeor equation, times an activity factor you pick. The male constant is +5 and the female constant is −161.",
      h1: "Calorie calculator",
      lede: "A Mifflin–St Jeor basal rate, multiplied by an activity factor, with a rough 500 kilocalorie step on either side.",
      banner: "This is an equation, not a measurement of your metabolism and not a diet.",
      body: `<p>The Mifflin–St Jeor equation estimates a basal metabolic rate from weight, height, and age. In kilograms, centimetres, and years it is 10 times weight, plus 6.25 times height, minus 5 times age, and then a constant. The male constant is plus 5. The female constant is minus 161. The two forms differ by 166 kilocalories a day before activity, for the same weight, height, and age. The labels on the form name the constant, because the equation was fitted that way. It is not a judgment about anyone who does not fit the two groups in the original fit.</p>
<p>Pounds and inches are converted before the equation runs. One pound is 0.45359237 kilograms and one inch is 2.54 centimetres, so a body typed in either system produces the same basal figure. The activity factors are the ones commonly paired with this equation: 1.2 sedentary, 1.375 light, 1.55 moderate, 1.725 active, and 1.9 very active. Estimated daily calories are the basal figure times the factor you pick. The page also shows 500 kilocalories under that line and 500 over it. A rough rule of thumb treats about 500 kilocalories a day as half a kilogram a week. It is a sketch of a gap, not a rate your body is required to follow, and a result below zero is not a target.</p>
<h2>A number you can recompute</h2>
<p>Take 70 kilograms, 175 centimetres, age 30, and the male constant. The basal rate is 10×70 + 6.25×175 − 5×30 + 5, which is 700 + 1,093.75 − 150 + 5, or 1,648.75 kilocalories. Sedentary multiplies by 1.2 and gives 1,978.5. The same body with the female constant is 1,482.75, because 166 was removed. Moderate activity multiplies that by 1.55. Type the imperial equivalents, 70 divided by 0.45359237 pounds and 175 divided by 2.54 inches, and the basal rate matches. Age has to be above zero and at most 120. Weight and height have to be above zero.</p>
<p>The equation does not see muscle, a thyroid lab, pregnancy, or the calories in a particular meal. It does not see the pace of a run. Two people with the same inputs get the same output, which is what an equation does and what a measurement would not. If you want an index that ignores age, use BMI. If you want a circumference estimate, use the body-fat page. Neither of those multiplies by 1.2 or 1.9.</p>
<h2>What the factors are not</h2>
<ul>
<li>The activity factor is a multiplier you choose, not a count of steps.</li>
<li>Five hundred kilocalories is not a prescribed deficit.</li>
<li>The equation is for adults. It is not a paediatric energy formula.</li>
<li>Switching the constant changes the basal rate by 166 for the same body size. That is the equation, not a finding about you.</li>
</ul>
<p>BMI is on the <a href="{{href:bmi-calculator}}">BMI calculator</a>. Circumferences are on the <a href="{{href:body-fat-calculator}}">body fat calculator</a>. Speed from a distance and a time is on the <a href="{{href:pace-calculator}}">pace calculator</a>.</p>`,
      faq: [
        { q: "Which calorie equation is this?", a: "Mifflin–St Jeor: 10×kilograms + 6.25×centimetres − 5×age, then +5 or −161. Daily calories are that result times the activity factor you pick." },
        { q: "What is the difference between the two constants?", a: "166 kilocalories a day before activity, for the same weight, height, and age. The male form adds 5 and the female form subtracts 161." },
        { q: "What does the 500 kilocalorie line mean?", a: "It is 500 under or over the activity-adjusted estimate. A rough sketch treats about 500 kilocalories a day as half a kilogram a week. It is not a prescription." },
        { q: "Do pounds and kilograms match?", a: "Yes. Pounds are multiplied by 0.45359237 and inches by 2.54 before the equation runs." }
      ]
    },
    ru: {
      title: "Калькулятор калорий | Бесплатные калькуляторы",
      description: "Базовые калории по уравнению Миффлина — Сан Жеора, умноженные на выбранный коэффициент активности. Мужская константа +5, женская −161.",
      h1: "Калькулятор калорий",
      lede: "Базовый обмен по Миффлину — Сан Жеору, умноженный на коэффициент активности, и грубый шаг в 500 килокалорий в обе стороны.",
      banner: "Это уравнение, а не замер вашего обмена и не диета.",
      body: `<p>Уравнение Миффлина — Сан Жеора оценивает базовый обмен по весу, росту и возрасту. В килограммах, сантиметрах и годах это 10 умножить на вес, плюс 6,25 умножить на рост, минус 5 умножить на возраст, и затем константа. Мужская константа — плюс 5. Женская — минус 161. Две формы различаются на 166 килокалорий в день до активности при одном весе, росте и возрасте. Подписи в форме называют константу, потому что уравнение подогнано так. Это не оценка человека, который не попал в две группы исходной подгонки.</p>
<p>Фунты и дюймы переводятся до того, как уравнение считается. Один фунт — 0,45359237 килограмма, один дюйм — 2,54 сантиметра, поэтому тело, введённое в любой системе, даёт одну базовую цифру. Коэффициенты активности — те, которые обычно ставят рядом с этим уравнением: 1,2 сидячий, 1,375 лёгкий, 1,55 умеренный, 1,725 высокий и 1,9 очень высокий. Оценка калорий в день — базовая цифра, умноженная на выбранный коэффициент. Страница также показывает 500 килокалорий ниже этой линии и 500 выше. Грубое правило принимает около 500 килокалорий в день за половину килограмма в неделю. Это набросок разрыва, а не скорость, которой тело обязано следовать. Результат ниже нуля — не цель.</p>
<h2>Число, которое можно пересчитать</h2>
<p>Возьмите 70 килограммов, 175 сантиметров, возраст 30 и мужскую константу. Базовый обмен — 10×70 + 6,25×175 − 5×30 + 5, то есть 700 + 1 093,75 − 150 + 5, или 1 648,75 килокалории. Сидячий коэффициент умножает на 1,2 и даёт 1 978,5. То же тело с женской константой — 1 482,75, потому что убрали 166. Умеренная активность умножает это на 1,55. Введите имперские эквиваленты, 70 делённые на 0,45359237 фунта и 175 делённые на 2,54 дюйма, и базовый обмен совпадёт. Возраст должен быть больше нуля и не больше 120. Вес и рост — больше нуля.</p>
<p>Уравнение не видит мышцы, анализ щитовидной железы, беременность и калории конкретного блюда. Оно не видит темп пробежки. Два человека с одним вводом получают один вывод: так устроено уравнение и не устроен замер. Если нужен индекс без возраста, откройте ИМТ. Если нужна оценка по окружностям, откройте страницу жира. Ни то ни другое не умножает на 1,2 или на 1,9.</p>
<h2>Чем коэффициенты не являются</h2>
<ul>
<li>Коэффициент активности — множитель, который выбираете вы, а не число шагов.</li>
<li>Пятьсот килокалорий — не назначенный дефицит.</li>
<li>Уравнение для взрослых. Это не детская формула энергии.</li>
<li>Смена константы меняет базовый обмен на 166 при том же размере тела. Это уравнение, а не находка про вас.</li>
</ul>
<p>ИМТ — на <a href="{{href:bmi-calculator}}">калькуляторе ИМТ</a>. Окружности — на <a href="{{href:body-fat-calculator}}">калькуляторе процента жира</a>. Скорость по дистанции и времени — на <a href="{{href:pace-calculator}}">калькуляторе темпа</a>.</p>`,
      faq: [
        { q: "Какое уравнение калорий здесь?", a: "Миффлин — Сан Жеор: 10×килограммы + 6,25×сантиметры − 5×возраст, затем +5 или −161. Калории в день — этот результат, умноженный на выбранный коэффициент активности." },
        { q: "Чем различаются две константы?", a: "На 166 килокалорий в день до активности при одном весе, росте и возрасте. Мужская форма прибавляет 5, женская вычитает 161." },
        { q: "Что значит линия в 500 килокалорий?", a: "Это 500 ниже или выше оценки с активностью. Грубый набросок принимает около 500 килокалорий в день за половину килограмма в неделю. Это не назначение." },
        { q: "Фунты и килограммы совпадают?", a: "Да. Фунты умножаются на 0,45359237, дюймы на 2,54, и только потом считается уравнение." }
      ]
    }
  }),
  tool({
    slug: "body-fat-calculator",
    cluster: "fitness",
    calc: "bodyfat",
    category: "HealthApplication",
    related: ["bmi-calculator", "calorie-calculator", "pace-calculator"],
    en: {
      title: "Body fat calculator | Free Online Calculators",
      description: "US Navy circumference body-fat estimate. Men use abdomen minus neck. Women use waist plus hip minus neck. Centimetres are converted to inches first.",
      h1: "Body fat calculator",
      lede: "The US Navy circumference equation, in inches, with a base-10 logarithm. Centimetres are divided by 2.54 before the log.",
      banner: "This is a circumference equation, not a scan and not a medical measurement.",
      body: `<p>The men's equation is 86.010 times the base-10 log of abdomen minus neck, minus 70.041 times the base-10 log of height, plus 36.76. The women's equation is 163.205 times the base-10 log of waist plus hip minus neck, minus 97.684 times the base-10 log of height, minus 78.387. Height and the circumferences are in inches. If you type centimetres, each value is divided by 2.54 before those logs, which is why the same tape in both unit systems agrees. The logs are undefined when the value inside is zero or negative, so abdomen must be greater than neck for men, and waist plus hip must be greater than neck for women.</p>
<p>These are the circumference equations used for the US Navy body-composition estimate. They are not the Siri density form, and they will not match a calculator that uses 495 divided by a density minus 450. A man who is 70 inches tall, with a 15 inch neck and a 34 inch abdomen, is 86.010 × log10(19) − 70.041 × log10(70) + 36.76, about 17.5 percent. A woman who is 64 inches tall, with a 13 inch neck, a 30 inch waist, and 38 inch hips, is 163.205 × log10(55) − 97.684 × log10(64) − 78.387, about 29.2 percent. Type those centimetres, which are the inches times 2.54, and the percentage matches.</p>
<h2>How the tape is supposed to be read</h2>
<p>The Navy instructions measure the men's abdomen horizontally at the navel, the neck just below the larynx, the women's waist at the narrowest point, and the hips at the widest point, all in inches, with the person standing. This page cannot see whether you measured those landmarks. It applies the equation to the numbers you type. A tape pulled tighter changes the result, and the equation will not tell you that the tape was tight. Body fat from a DEXA scan, a caliper fold, or a bioimpedance scale is a different method and will not reproduce this number.</p>
<p>BMI does not use a tape, so the two pages can disagree without either one having a bug. The calorie page does not use a tape either. Age is not an input here. A result that comes out negative or far above a plausible range means the circumferences are inconsistent with the equation, not that the logarithm invented a body. Check that the units match the numbers: 70 inches is not 70 centimetres.</p>
<h2>What the equation leaves out</h2>
<ul>
<li>It does not see muscle, bone, or a scan.</li>
<li>It is an adult operational estimate, not a paediatric chart.</li>
<li>The women's equation needs the hip. The men's equation ignores it.</li>
<li>Switching unit systems is a conversion, not a second formula.</li>
</ul>
<p>Weight and height alone are the <a href="{{href:bmi-calculator}}">BMI calculator</a>. An energy estimate is the <a href="{{href:calorie-calculator}}">calorie calculator</a>. A run is the <a href="{{href:pace-calculator}}">pace calculator</a>.</p>`,
      faq: [
        { q: "Which body-fat formula is this?", a: "The US Navy circumference equation. Men: 86.010×log10(abdomen − neck) − 70.041×log10(height) + 36.76. Women: 163.205×log10(waist + hip − neck) − 97.684×log10(height) − 78.387. Measurements are in inches." },
        { q: "Why do centimetres match inches?", a: "Each centimetre value is divided by 2.54 before the logarithm. The equation itself is defined in inches." },
        { q: "Why was my result rejected?", a: "The value inside the logarithm has to be positive. For men the abdomen must be larger than the neck. For women the waist plus the hip must be larger than the neck." },
        { q: "Will this match a DEXA scan?", a: "Not in general. A scan, a caliper, and this circumference equation are different methods. They are not required to print the same percentage." }
      ]
    },
    ru: {
      title: "Калькулятор процента жира | Бесплатные калькуляторы",
      description: "Оценка процента жира по окружностям ВМС США. У мужчин живот минус шея, у женщин талия плюс бёдра минус шея. Сантиметры сначала переводятся в дюймы.",
      h1: "Калькулятор процента жира",
      lede: "Окружностная формула ВМС США в дюймах, с десятичным логарифмом. Сантиметры делятся на 2,54 до логарифма.",
      banner: "Это уравнение по окружностям, а не сканирование и не медицинский замер.",
      body: `<p>Мужская формула: 86,010 умножить на десятичный логарифм живота минус шея, минус 70,041 умножить на десятичный логарифм роста, плюс 36,76. Женская: 163,205 умножить на десятичный логарифм талии плюс бёдра минус шея, минус 97,684 умножить на десятичный логарифм роста, минус 78,387. Рост и окружности — в дюймах. Если ввести сантиметры, каждое значение делится на 2,54 до этих логарифмов, поэтому одна и та же лента в двух системах совпадает. Логарифм не определён, когда аргумент нулевой или отрицательный: у мужчин живот должен быть больше шеи, у женщин талия плюс бёдра должны быть больше шеи.</p>
<p>Это окружностные уравнения оценки состава тела ВМС США. Это не форма Сири через плотность, и они не совпадут с калькулятором, который делит 495 на плотность и вычитает 450. Мужчина ростом 70 дюймов, с шеей 15 дюймов и животом 34 дюйма, — это 86,010 × log10(19) − 70,041 × log10(70) + 36,76, около 17,5 процента. Женщина ростом 64 дюйма, с шеей 13, талией 30 и бёдрами 38, — это 163,205 × log10(55) − 97,684 × log10(64) − 78,387, около 29,2 процента. Введите эти же сантиметры, то есть дюймы, умноженные на 2,54, и процент совпадёт.</p>
<h2>Как читают ленту</h2>
<p>Инструкции измеряют мужской живот горизонтально на уровне пупка, шею сразу под гортанью, женскую талию в самом узком месте и бёдра в самом широком, всё в дюймах, стоя. Страница не видит, те ли это ориентиры. Она применяет уравнение к введённым числам. Туго натянутая лента меняет результат, и уравнение не скажет, что лента была тугой. Процент жира с DEXA, калипера или биоимпедансных весов — другой метод и это число не повторит.</p>
<p>ИМТ ленту не использует, поэтому две страницы могут разойтись, и это не ошибка одной из них. Страница калорий ленту тоже не использует. Возраст здесь не вводится. Отрицательный результат или результат далеко за правдоподобным диапазоном значит, что окружности не сходятся с уравнением, а не то, что логарифм выдумал тело. Проверьте, что единицы совпадают с числами: 70 дюймов — это не 70 сантиметров.</p>
<h2>Чего в уравнении нет</h2>
<ul>
<li>Оно не видит мышцы, кости и сканирование.</li>
<li>Это взрослая операционная оценка, не детская таблица.</li>
<li>Женскому уравнению нужны бёдра. Мужское их игнорирует.</li>
<li>Смена системы единиц — перевод, а не вторая формула.</li>
</ul>
<p>Повторная проверка в сантиметрах не должна менять процент. Умножьте дюймы на 2,54, переключите единицы на сантиметры и посчитайте снова. Если цифра уехала, перевод применился не до логарифма, а после, и это уже другая формула. На этой странице перевод стоит до логарифма нарочно.</p>
<p>Только вес и рост — <a href="{{href:bmi-calculator}}">калькулятор ИМТ</a>. Оценка энергии — <a href="{{href:calorie-calculator}}">калькулятор калорий</a>. Пробежка — <a href="{{href:pace-calculator}}">калькулятор темпа</a>.</p>`,
      faq: [
        { q: "Какая формула жира здесь?", a: "Окружностная формула ВМС США. Мужчины: 86,010×log10(живот − шея) − 70,041×log10(рост) + 36,76. Женщины: 163,205×log10(талия + бёдра − шея) − 97,684×log10(рост) − 78,387. Измерения в дюймах." },
        { q: "Почему сантиметры совпадают с дюймами?", a: "Каждое значение в сантиметрах делится на 2,54 до логарифма. Само уравнение задано в дюймах." },
        { q: "Почему результат отклонили?", a: "Аргумент логарифма должен быть положительным. У мужчин живот больше шеи. У женщин талия плюс бёдра больше шеи." },
        { q: "Совпадёт ли это со сканом DEXA?", a: "В общем случае нет. Скан, калипер и это окружностное уравнение — разные методы. Они не обязаны напечатать один процент." }
      ]
    }
  }),
  tool({
    slug: "pace-calculator",
    cluster: "fitness",
    calc: "pace",
    category: "HealthApplication",
    related: ["calorie-calculator", "bmi-calculator", "unit-converter"],
    en: {
      title: "Pace calculator | Free Online Calculators",
      description: "Pace per kilometre and per mile, and speed, from a distance and a time. You can also solve for time or distance when you already know the pace.",
      h1: "Pace calculator",
      lede: "Pace and speed from a distance and a time, or the missing one of those three when you already know the pace.",
      banner: "A mile is 1.609344 kilometres. The page uses that factor and does not read a watch.",
      body: `<p>Pace is time divided by distance. Speed is distance divided by time. The page keeps both a kilometre and a mile, using 1.609344 kilometres in a mile, so a result in one unit is not a rounded cousin of the other. Ten kilometres in 50 minutes is 3,000 seconds. Divided by 10, that is 300 seconds per kilometre, which is 5:00. The same 10 kilometres is 10 / 1.609344 miles, and the pace per mile is 3,000 seconds divided by that distance. Speed is 10 kilometres in 50/60 of an hour, which is 12 kilometres per hour. Those are the checks.</p>
<p>The first mode wants a distance and a time in hours, minutes, and seconds. The second wants a distance and a pace in minutes and seconds, and it returns the time. The third wants a time and a pace, and it returns the distance. In the second and third modes the pace is per the distance unit selected in the distance fields when that unit is on the form. In the distance-from-time mode the pace is per kilometre if the unit stays on kilometres, which is what the note under the pace fields says. A pace of zero or a time of zero is rejected, because the division would be undefined. Negative times are rejected.</p>
<h2>The three questions are the same relation</h2>
<p>If 10 kilometres takes 50 minutes, the pace is 5:00 per kilometre. If the pace is 5:00 per kilometre and the distance is 10 kilometres, the time is 50 minutes, which is 3,000 seconds. If the time is 50 minutes and the pace is 5:00 per kilometre, the distance is 10 kilometres. Change the unit to miles and the same physical run is reported in miles and in minutes per mile, using the exact mile. A marathon distance is something you type. The page does not store 42.195 kilometres as a hidden default, so a race distance you care about has to be entered.</p>
<p>The calorie page does not know this pace, and this page does not know your weight, so it will not print a calorie burn. That would be a second model stacked on this one. BMI does not use time. Splits, hills, and stops inside the run are invisible: the page sees one distance and one elapsed time, or one pace held constant. A moving time and an elapsed time are different numbers. Type the one you mean.</p>
<h2>What the arithmetic leaves out</h2>
<ul>
<li>No GPS track, no heart rate, and no grade.</li>
<li>A pace that changes along the way is averaged into the single pace the totals imply.</li>
<li>The mile factor is exact. A rounded 1.6 would not match.</li>
</ul>
<p>Daily calories are on the <a href="{{href:calorie-calculator}}">calorie calculator</a>. The index of weight and height is the <a href="{{href:bmi-calculator}}">BMI calculator</a>. Other unit factors, including the mile itself, are on the <a href="{{href:unit-converter}}">unit converter</a>.</p>`,
      faq: [
        { q: "What is the pace of 10 kilometres in 50 minutes?", a: "Five minutes per kilometre, and 12 kilometres per hour. The mile pace uses 1.609344 kilometres per mile." },
        { q: "Which field does each mode use?", a: "Pace-from-distance uses distance and time. Time-from-pace uses distance and pace. Distance-from-pace uses time and pace. The unused fields are hidden." },
        { q: "Is a mile exactly 1.6 kilometres?", a: "No. A mile is 1.609344 kilometres. The page uses that factor." },
        { q: "Does this estimate calories burned?", a: "No. It does not ask for weight. Calories are a different page and a different equation." }
      ]
    },
    ru: {
      title: "Калькулятор темпа | Бесплатные калькуляторы",
      description: "Темп на километр и на милю и скорость по дистанции и времени. Можно найти время или дистанцию, если темп уже известен.",
      h1: "Калькулятор темпа",
      lede: "Темп и скорость по дистанции и времени или недостающее из этих трёх, если темп уже известен.",
      banner: "Миля равна 1,609344 километра. Страница использует этот коэффициент и часы не читает.",
      body: `<p>Темп — это время, делённое на дистанцию. Скорость — дистанция, делённая на время. Страница держит и километр, и милю, принимая 1,609344 километра в миле, поэтому результат в одной единице — не округлённый родственник другой. Десять километров за 50 минут — это 3 000 секунд. Делённые на 10, они дают 300 секунд на километр, то есть 5:00. Те же 10 километров — это 10 / 1,609344 мили, и темп на милю — 3 000 секунд, делённые на эту дистанцию. Скорость — 10 километров за 50/60 часа, то есть 12 километров в час. На этих числах формулу и проверяют.</p>
<p>Первый режим ждёт дистанцию и время в часах, минутах и секундах. Второй ждёт дистанцию и темп в минутах и секундах и возвращает время. Третий ждёт время и темп и возвращает дистанцию. Во втором и третьем режимах темп задан на ту единицу дистанции, которая выбрана, когда это поле на форме. В режиме дистанции по времени темп — на километр, если единица остаётся километром. Так и написано под полями темпа. Нулевой темп или нулевое время отвергаются: деление было бы не определено. Отрицательное время отвергается.</p>
<h2>Три вопроса — одно соотношение</h2>
<p>Если 10 километров занимают 50 минут, темп — 5:00 на километр. Если темп 5:00 на километр и дистанция 10 километров, время — 50 минут, или 3 000 секунд. Если время 50 минут и темп 5:00 на километр, дистанция — 10 километров. Переключите единицу на мили, и тот же забег будет в милях и в минутах на милю, с точной милей. Дистанцию марафона нужно ввести. Страница не хранит 42,195 километра спрятанным значением по умолчанию.</p>
<p>Страница калорий этого темпа не знает, а эта страница не знает ваш вес, поэтому расход калорий она не печатает. Это была бы вторая модель поверх этой. ИМТ время не использует. Отрезки, горки и остановки внутри забега невидимы: страница видит одну дистанцию и одно прошедшее время или один постоянный темп. Время в движении и общее время — разные числа. Вводите то, которое имеете в виду.</p>
<h2>Чего арифметика не видит</h2>
<ul>
<li>Нет трека GPS, нет пульса и нет уклона.</li>
<li>Темп, который менялся по дороге, усредняется в один темп, который следует из итогов.</li>
<li>Коэффициент мили точный. Округлённые 1,6 не совпали бы.</li>
</ul>
<p>Проверка трёх режимов на одних числах обязательна. Десять километров, пятьдесят минут и темп пять минут на километр должны замыкаться друг на друга. Если время из темпа не возвращает те же пятьдесят минут, режим перепутал, на какую единицу задан темп.</p>
<p>Калории в день — на <a href="{{href:calorie-calculator}}">калькуляторе калорий</a>. Индекс веса и роста — <a href="{{href:bmi-calculator}}">калькулятор ИМТ</a>. Другие коэффициенты единиц, включая саму милю, — на <a href="{{href:unit-converter}}">конвертере единиц</a>.</p>`,
      faq: [
        { q: "Какой темп у 10 километров за 50 минут?", a: "Пять минут на километр и 12 километров в час. Темп на милю использует 1,609344 километра в миле." },
        { q: "Какие поля у какого режима?", a: "Темп по дистанции использует дистанцию и время. Время по темпу использует дистанцию и темп. Дистанция по темпу использует время и темп. Лишние поля скрыты." },
        { q: "Миля — это ровно 1,6 километра?", a: "Нет. Миля равна 1,609344 километра. Страница использует этот коэффициент." },
        { q: "Здесь есть оценка сожжённых калорий?", a: "Нет. Вес страница не спрашивает. Калории — другая страница и другое уравнение." }
      ]
    }
  }),
  tool({
    slug: "percentage-calculator",
    cluster: "math",
    calc: "percentage",
    category: "UtilitiesApplication",
    related: ["fraction-calculator", "standard-deviation-calculator", "margin-markup-calculator"],
    en: {
      title: "Percentage calculator | Free Online Calculators",
      description: "What is A percent of B, A is what percent of B, and the percent change from A to B. A zero starting value has no percent change.",
      h1: "Percentage calculator",
      lede: "Three percentage questions, each one division, with a zero denominator refused instead of printed as infinity.",
      banner: "Percent change divides by the starting number. A change in percentage points is a different question.",
      body: `<p>What is A percent of B is A divided by 100, times B. Twenty percent of 80 is 0.20 times 80, which is 16. The result is in the same units as B. The page does not add a currency symbol, because B might be people, grams, or a price. A is what percent of B is A divided by B. Twenty-five out of 200 is 0.125, which the page prints as 12.5 percent. Percent change from A to B is B minus A, divided by A. From 80 to 100 the change is 20 divided by 80, which is 0.25, or 25 percent. A fall from 100 to 80 is 20 divided by 100 the other way, which is minus 20 percent. The starting number is the denominator on purpose.</p>
<p>A zero denominator is refused. What percent of zero, and the percent change from zero, have no answer in ordinary arithmetic. The page says so instead of showing an infinity symbol. Negative inputs are allowed, because a loss and a signed measure are still numbers. The three questions are separate modes so a single pair of boxes is not silently reinterpreted. Switching the mode and pressing calculate uses the same A and B under the new question. Twenty and 80 as a percent-of question is 16. The same pair as a percent-change question is a change from 20 to 80, which is 300 percent, not 16. Read the mode before you read the result.</p>
<h2>Percentage points are not this page</h2>
<p>A move from 20 percent to 30 percent is a change of 10 percentage points and a percent change of 50 percent, because 10 divided by 20 is one half. If you type 20 and 30 into the percent-change mode, the page reports 50 percent. It does not report 10. If you wanted the percentage-point gap, subtract the two numbers yourself. Margin and markup are also different percentages of different bases. Margin divides the gap by the price. Markup divides the same gap by the cost. Those live on the margin page so this page can stay a plain percentage.</p>
<p>Fractions are exact integers on the fraction page. A percentage is a decimal. One half is 50 percent, and 1 divided by 2 is 0.5, but a repeating percentage such as one third is 33.333... percent and the page rounds the display. The fraction page keeps one third as 1/3. Standard deviation is about a list of numbers, not about a pair. Use this page when there are two numbers and a percent question, and the other page when there is a list.</p>
<h2>What the division leaves out</h2>
<ul>
<li>No tax, tip, or discount is assumed. A discount is just "what is A percent of B" if you type it that way.</li>
<li>Compound growth is not a single percent change over many periods.</li>
<li>The display rounds. The operation itself is ordinary floating-point division.</li>
</ul>
<p>Exact integer ratios are on the <a href="{{href:fraction-calculator}}">fraction calculator</a>. A list of numbers is the <a href="{{href:standard-deviation-calculator}}">standard deviation calculator</a>. Cost and price percentages are the <a href="{{href:margin-markup-calculator}}">margin and markup calculator</a>.</p>`,
      faq: [
        { q: "What is 20 percent of 80?", a: "16. The page divides 20 by 100 and multiplies by 80." },
        { q: "What percent is 25 of 200?", a: "12.5 percent. The page divides 25 by 200." },
        { q: "What is the percent change from 80 to 100?", a: "25 percent. The page divides 100 minus 80 by 80. From 100 to 80 the change is minus 20 percent." },
        { q: "Why is a move from 20 percent to 30 percent not 10?", a: "Ten is the gap in percentage points. The percent change divides that gap by the starting number, and 10 / 20 is 50 percent." }
      ]
    },
    ru: {
      title: "Калькулятор процентов | Бесплатные калькуляторы",
      description: "Сколько будет A процентов от B, сколько процентов составляет A от B и изменение от A к B. У нулевого исходного числа процента изменения нет.",
      h1: "Калькулятор процентов",
      lede: "Три вопроса про проценты, каждый — одно деление. Нулевой знаменатель отвергается, а не печатается как бесконечность.",
      banner: "Изменение в процентах делит на исходное число. Изменение в процентных пунктах — другой вопрос.",
      body: `<p>Сколько будет A процентов от B — это A, делённое на 100, умножить на B. Двадцать процентов от 80 — это 0,20 умножить на 80, то есть 16. Результат в тех же единицах, что и B. Знак валюты страница не ставит: B может быть людьми, граммами или ценой. A — это сколько процентов от B — это A, делённое на B. Двадцать пять из 200 — это 0,125, страница печатает 12,5 процента. Изменение от A к B — это B минус A, делённое на A. От 80 к 100 изменение — 20, делённые на 80, то есть 0,25, или 25 процентов. Падение со 100 до 80 — это 20, делённые на 100 в другую сторону, минус 20 процентов. Исходное число стоит в знаменателе нарочно.</p>
<p>Нулевой знаменатель отвергается. «Сколько процентов от нуля» и изменение от нуля в обычной арифметике ответа не имеют. Страница так и говорит, а не показывает знак бесконечности. Отрицательный ввод разрешён: убыток и знаковая величина всё ещё числа. Три вопроса — отдельные режимы, чтобы одна пара полей молча не переосмысливалась. Переключите режим и нажмите кнопку: те же A и B попадут под новый вопрос. Двадцать и 80 как «процент от» — это 16. Та же пара как изменение — это переход от 20 к 80, то есть 300 процентов, а не 16. Сначала прочитайте режим, потом результат.</p>
<h2>Процентные пункты — не эта страница</h2>
<p>Переход с 20 процентов на 30 — это 10 процентных пунктов и изменение на 50 процентов, потому что 10, делённые на 20, — это половина. Если ввести 20 и 30 в режиме изменения, страница покажет 50 процентов. Десять она не покажет. Если нужен разрыв в процентных пунктах, вычтите числа сами. Маржа и наценка — тоже разные проценты от разных баз. Маржа делит разрыв на цену. Наценка делит тот же разрыв на себестоимость. Они живут на странице маржи, чтобы здесь остался обычный процент.</p>
<p>Дроби как целые числа — на странице дробей. Процент — десятичная величина. Половина — это 50 процентов, и 1, делённая на 2, равна 0,5, но периодический процент вроде одной трети — это 33,333... процента, и страница округляет показ. Страница дробей хранит одну треть как 1/3. Стандартное отклонение — про список чисел, не про пару. Эту страницу открывают, когда чисел два и вопрос про процент. Другую — когда есть список.</p>
<h2>Чего деление не делает</h2>
<ul>
<li>Налог, чаевые и скидка не предполагаются. Скидка — это «сколько будет A процентов от B», если ввести её так.</li>
<li>Сложный рост за много периодов — не одно изменение в процентах.</li>
<li>Показ округляется. Само действие — обычное деление с плавающей точкой.</li>
</ul>
<p>Точные целые отношения — на <a href="{{href:fraction-calculator}}">калькуляторе дробей</a>. Список чисел — <a href="{{href:standard-deviation-calculator}}">калькулятор стандартного отклонения</a>. Проценты себестоимости и цены — <a href="{{href:margin-markup-calculator}}">калькулятор маржи и наценки</a>.</p>`,
      faq: [
        { q: "Сколько будет 20 процентов от 80?", a: "16. Страница делит 20 на 100 и умножает на 80." },
        { q: "Сколько процентов составляет 25 от 200?", a: "12,5 процента. Страница делит 25 на 200." },
        { q: "Какое изменение от 80 к 100?", a: "25 процентов. Страница делит 100 минус 80 на 80. От 100 к 80 изменение — минус 20 процентов." },
        { q: "Почему переход с 20 процентов на 30 — это не 10?", a: "Десять — это разрыв в процентных пунктах. Изменение в процентах делит этот разрыв на исходное число, и 10 / 20 — это 50 процентов." }
      ]
    }
  }),
  tool({
    slug: "fraction-calculator",
    cluster: "math",
    calc: "fraction",
    category: "UtilitiesApplication",
    related: ["percentage-calculator", "triangle-calculator", "standard-deviation-calculator"],
    en: {
      title: "Fraction calculator | Free Online Calculators",
      description: "Add, subtract, multiply, and divide fractions of integers, then reduce by the greatest common divisor. A zero denominator is rejected.",
      h1: "Fraction calculator",
      lede: "Integer fractions, reduced to lowest terms, with a mixed number and a decimal beside the improper fraction.",
      banner: "Both denominators have to be non-zero integers. Dividing by a zero fraction is rejected.",
      body: `<p>Each fraction is a numerator over a denominator, and both have to be integers inside the safe integer range. A decimal such as 1.5 is rejected so the page does not quietly treat it as a float and then call it a fraction. A negative sign on the denominator is moved to the numerator before the operation, so 1 over −2 is the same fraction as −1 over 2. Addition uses the common denominator: a/b + c/d = (a×d + c×b) / (b×d). Subtraction changes the plus to a minus. Multiplication is a×c over b×d. Division by c/d is multiplication by d/c, and it is rejected when c is zero.</p>
<p>The result is reduced by the greatest common divisor of the numerator and the denominator. One half plus one third is three sixths plus two sixths, which is five sixths, and five and six have no common divisor above 1, so the improper fraction is 5/6. Two fourths times one is two fourths, which reduces to one half. Minus one half times three fourths is minus three eighths. The mixed-number line writes a whole part and a remainder when the absolute value is at least 1. Seven thirds is 2 and 1/3. Minus seven thirds is −2 and 1/3, with the remainder kept positive. A proper fraction shows no whole part. When the remainder is zero, the line is the integer alone.</p>
<h2>Where the integer rule matters</h2>
<p>Cross-multiplication of two large integers can leave the safe integer range, where a JavaScript number can no longer represent every integer. The page rejects that instead of returning a fraction that looks exact and is not. A zero denominator on either input is rejected before the arithmetic. The decimal line is the reduced numerator divided by the reduced denominator, and it is rounded for display. One third stays 1/3 on the fraction lines and a rounded 0.333... on the decimal line. If you need a percentage, divide on this page and move the decimal, or type the same relationship on the percentage page. The percentage page will not keep a repeating ratio as a fraction.</p>
<p>The triangle page uses ordinary lengths, not fractions. A 3-4-5 triangle has area 6, which you can also reach as a fraction if you want, but the triangle page does not reduce a ratio of sides. Standard deviation wants a list. This page wants four integers and an operation. There is no mixed-number input. Type the improper form, or convert a mixed number to an improper fraction before you type it: 2 and 1/3 is 7/3.</p>
<h2>What the reducer does not do</h2>
<ul>
<li>It does not accept decimals, symbols, or blank denominators.</li>
<li>It does not simplify an expression with more than one operation.</li>
<li>The decimal is a display of the value, not a second exact form.</li>
</ul>
<p>Percent questions are on the <a href="{{href:percentage-calculator}}">percentage calculator</a>. Lengths and area are on the <a href="{{href:triangle-calculator}}">triangle calculator</a>. A list of values is the <a href="{{href:standard-deviation-calculator}}">standard deviation calculator</a>.</p>`,
      faq: [
        { q: "What is 1/2 plus 1/3?", a: "5/6. The common denominator is 6, the numerators become 3 and 2, and 5 and 6 have no common divisor greater than 1." },
        { q: "How is a result reduced?", a: "The numerator and the denominator are divided by their greatest common divisor. 2/4 becomes 1/2." },
        { q: "What does the mixed number show?", a: "The whole part and a positive remainder. 7/3 is 2 and 1/3. −7/3 is −2 and 1/3. A proper fraction has no whole part." },
        { q: "Why are decimals rejected?", a: "The page promises an integer fraction. A decimal would be a float, and calling the result a reduced fraction would overstate how exact it is." }
      ]
    },
    ru: {
      title: "Калькулятор дробей | Бесплатные калькуляторы",
      description: "Сложение, вычитание, умножение и деление дробей из целых чисел с сокращением на наибольший общий делитель. Нулевой знаменатель отвергается.",
      h1: "Калькулятор дробей",
      lede: "Дроби из целых чисел в несократимом виде, со смешанным числом и десятичной записью рядом с неправильной дробью.",
      banner: "Оба знаменателя должны быть ненулевыми целыми. Деление на нулевую дробь отвергается.",
      body: `<p>Каждая дробь — числитель над знаменателем, и оба должны быть целыми в безопасном диапазоне. Десятичное 1,5 отвергается, чтобы страница тихо не приняла его за число с плавающей точкой и не назвала результат дробью. Знак минус у знаменателя переносится в числитель до действия, поэтому 1 над −2 — та же дробь, что −1 над 2. Сложение идёт через общий знаменатель: a/b + c/d = (a×d + c×b) / (b×d). Вычитание меняет плюс на минус. Умножение — это a×c над b×d. Деление на c/d — умножение на d/c, и оно отвергается, когда c равен нулю.</p>
<p>Результат сокращается на наибольший общий делитель числителя и знаменателя. Половина плюс треть — это три шестых плюс две шестых, то есть пять шестых, а у пяти и шести нет общего делителя больше 1, поэтому неправильная дробь — 5/6. Две четвёртых, умноженные на единицу, — две четвёртых, что сокращается до одной второй. Минус одна вторая, умноженная на три четвёртых, — минус три восьмых. Строка смешанного числа пишет целую часть и остаток, когда модуль не меньше 1. Семь третьих — это 2 и 1/3. Минус семь третьих — это −2 и 1/3, остаток остаётся положительным. Правильная дробь целой части не показывает. Когда остаток нулевой, строка — просто целое.</p>
<h2>Где важно правило целых</h2>
<p>Перекрёстное умножение двух больших целых может выйти из безопасного диапазона, где число JavaScript уже не представляет каждое целое. Страница отвергает такой ввод, а не возвращает дробь, которая выглядит точной и не является ею. Нулевой знаменатель у любого из вводов отвергается до арифметики. Десятичная строка — сокращённый числитель, делённый на сокращённый знаменатель, и для показа она округляется. Одна треть остаётся 1/3 на дробных строках и округлённым 0,333... на десятичной. Если нужен процент, поделите здесь и перенесите запятую или введите то же отношение на странице процентов. Страница процентов повторяющееся отношение дробью не хранит.</p>
<p>Страница треугольника использует обычные длины, не дроби. У треугольника 3-4-5 площадь 6. Туда можно прийти и дробью, но страница треугольника отношение сторон не сокращает. Стандартному отклонению нужен список. Этой странице нужны четыре целых и одно действие. Ввода смешанным числом нет. Вводите неправильную дробь или переведите смешанное число заранее: 2 и 1/3 — это 7/3.</p>
<h2>Чего сокращение не делает</h2>
<ul>
<li>Оно не принимает десятичные, символы и пустые знаменатели.</li>
<li>Оно не упрощает выражение больше чем с одним действием.</li>
<li>Десятичная строка — показ значения, а не вторая точная форма.</li>
</ul>
<p>Вопросы про проценты — на <a href="{{href:percentage-calculator}}">калькуляторе процентов</a>. Длины и площадь — на <a href="{{href:triangle-calculator}}">калькуляторе треугольника</a>. Список значений — <a href="{{href:standard-deviation-calculator}}">калькулятор стандартного отклонения</a>.</p>`,
      faq: [
        { q: "Чему равна 1/2 плюс 1/3?", a: "5/6. Общий знаменатель 6, числители становятся 3 и 2, а у 5 и 6 нет общего делителя больше 1." },
        { q: "Как сокращается результат?", a: "Числитель и знаменатель делятся на их наибольший общий делитель. 2/4 становится 1/2." },
        { q: "Что показывает смешанное число?", a: "Целую часть и положительный остаток. 7/3 — это 2 и 1/3. −7/3 — это −2 и 1/3. У правильной дроби целой части нет." },
        { q: "Почему десятичные отвергаются?", a: "Страница обещает дробь из целых. Десятичное было бы числом с плавающей точкой, и называть результат несократимой дробью значило бы преувеличить точность." }
      ]
    }
  }),
  tool({
    slug: "standard-deviation-calculator",
    cluster: "math",
    calc: "stats",
    category: "UtilitiesApplication",
    related: ["percentage-calculator", "fraction-calculator", "triangle-calculator"],
    en: {
      title: "Standard deviation calculator | Free Online Calculators",
      description: "Mean, population standard deviation, and sample standard deviation from a list of numbers. Population divides by n. Sample divides by n minus 1.",
      h1: "Standard deviation calculator",
      lede: "The mean and both standard deviations of the numbers you type, with the sum of squared deviations left visible in the variance.",
      banner: "Population variance divides by the count. Sample variance divides by the count minus one.",
      body: `<p>Type the numbers separated by spaces, commas, or new lines. The count is how many numbers were read. The sum is their total. The mean is the sum divided by the count. Each deviation is a number minus the mean. The sum of squared deviations is what both variances share. Population variance divides that sum by the count. Population standard deviation is the square root. Sample variance divides by the count minus one, and it is reported only when there are at least two numbers. Sample standard deviation is the square root of that. One number has a population standard deviation of zero and no sample line, because a sample denominator of zero is not a variance.</p>
<p>The set 2, 4, 4, 4, 5, 5, 7, 9 is the check. There are 8 numbers. The sum is 40. The mean is 5. The squared deviations are 9, 1, 1, 1, 0, 0, 4, and 16, which add to 32. Population variance is 32/8 = 4, and the population standard deviation is 2. Sample variance is 32/7. The page reports those values. Minimum and maximum are the smallest and largest numbers in the list, which for this set are 2 and 9. A blank list is rejected. A token that is not a number is rejected rather than skipped, so a stray word does not quietly shrink the count.</p>
<h2>Which line to read</h2>
<p>Use the population line when the numbers are the whole set you care about: every score in a class you are describing, every measurement you actually have and do not mean to generalize. Use the sample line when the numbers are a sample and the variance is meant to estimate a larger population. The sample divisor is the Bessel correction. It does not make the estimate unbiased for the standard deviation itself. It is the usual divisor for the variance. The page prints both so the choice stays on the page instead of inside a default you cannot see. Rounded display is not a change to the division. Very large lists are limited by what you can paste, not by a hidden cap in the formula.</p>
<p>A percentage question about two numbers is a different page. A fraction is a different page. This page will not tell you a percent change, and it will not reduce a ratio. If the numbers are a triangle's sides, the triangle page checks the triangle inequality and reports an area. The mean of three sides is not an area.</p>
<h2>What the two divisors are not</h2>
<ul>
<li>The sample line is not "more accurate" for a complete set.</li>
<li>The population line is not wrong for a sample. It answers a different question.</li>
<li>Neither line is a confidence interval.</li>
</ul>
<p>Two-number percent questions are on the <a href="{{href:percentage-calculator}}">percentage calculator</a>. Integer ratios are on the <a href="{{href:fraction-calculator}}">fraction calculator</a>. Three lengths are on the <a href="{{href:triangle-calculator}}">triangle calculator</a>.</p>`,
      faq: [
        { q: "What is the standard deviation of 2, 4, 4, 4, 5, 5, 7, 9?", a: "The mean is 5. The sum of squared deviations is 32. The population standard deviation is 2, because 32/8 is 4 and the square root of 4 is 2. The sample variance is 32/7." },
        { q: "Why are there two standard deviations?", a: "Population variance divides by the count. Sample variance divides by the count minus one. Use the sample line for a sample from a larger set, and the population line when the list is the whole set." },
        { q: "What happens with one number?", a: "The mean is that number and the population standard deviation is zero. The sample line is withheld, because the sample divisor would be zero." },
        { q: "Are blank lines ignored?", a: "Separators are ignored. A token that is not a number is an error, not a skipped item." }
      ]
    },
    ru: {
      title: "Калькулятор стандартного отклонения | Бесплатные калькуляторы",
      description: "Среднее, стандартное отклонение совокупности и выборки по списку чисел. Совокупность делит на n. Выборка делит на n минус 1.",
      h1: "Калькулятор стандартного отклонения",
      lede: "Среднее и оба стандартных отклонения введённых чисел. Сумма квадратов отклонений видна в дисперсии.",
      banner: "Дисперсия совокупности делит на количество. Дисперсия выборки делит на количество минус один.",
      body: `<p>Введите числа через пробел, запятую или с новой строки. Количество — сколько чисел прочитано. Сумма — их итог. Среднее — сумма, делённая на количество. Отклонение — число минус среднее. Сумма квадратов отклонений общая для обеих дисперсий. Дисперсия совокупности делит эту сумму на количество. Стандартное отклонение совокупности — квадратный корень. Дисперсия выборки делит на количество минус один и показывается, только когда чисел хотя бы два. Стандартное отклонение выборки — корень из неё. У одного числа стандартное отклонение совокупности равно нулю, а строки выборки нет: знаменатель выборки был бы нулём, а это не дисперсия.</p>
<p>Набор 2, 4, 4, 4, 5, 5, 7, 9 — проверка. Чисел 8. Сумма 40. Среднее 5. Квадраты отклонений — 9, 1, 1, 1, 0, 0, 4 и 16, в сумме 32. Дисперсия совокупности — 32/8 = 4, стандартное отклонение совокупности — 2. Дисперсия выборки — 32/7. Страница показывает эти значения. Минимум и максимум — самое маленькое и самое большое число, здесь 2 и 9. Пустой список отвергается. Жетон, который не число, отвергается, а не пропускается, чтобы случайное слово тихо не уменьшило количество.</p>
<h2>Какую строку читать</h2>
<p>Строку совокупности берут, когда числа — весь интересующий набор: все оценки класса, который вы описываете, все измерения, которые у вас есть и которые вы не собираетесь обобщать. Строку выборки берут, когда числа — выборка, а дисперсия должна оценить большую совокупность. Делитель выборки — поправка Бесселя. Она не делает оценку стандартного отклонения несмещённой. Это обычный делитель для дисперсии. Страница печатает обе строки, чтобы выбор оставался на странице, а не в спрятанном умолчании. Округление показа — не изменение деления. Очень длинные списки ограничены тем, что можно вставить, а не скрытым потолком формулы.</p>
<p>Вопрос про процент двух чисел — другая страница. Дробь — другая страница. Эта не скажет изменение в процентах и не сократит отношение. Если числа — стороны треугольника, страница треугольника проверяет неравенство и считает площадь. Среднее трёх сторон — не площадь.</p>
<h2>Чем два делителя не являются</h2>
<ul>
<li>Строка выборки не «точнее» для полного набора.</li>
<li>Строка совокупности не ошибочна для выборки. Она отвечает на другой вопрос.</li>
<li>Ни одна строка не является доверительным интервалом.</li>
</ul>
<p>Проверка набора из восьми чисел занимает минуту на бумаге. Сумма квадратов отклонений от пятёрки равна 32. Деление на 8 даёт дисперсию совокупности 4 и корень 2. Деление на 7 даёт дисперсию выборки. Если страница показывает другой корень, она поделила не на то число.</p>
<p>Процент по двум числам — на <a href="{{href:percentage-calculator}}">калькуляторе процентов</a>. Целые отношения — на <a href="{{href:fraction-calculator}}">калькуляторе дробей</a>. Три длины — на <a href="{{href:triangle-calculator}}">калькуляторе треугольника</a>.</p>`,
      faq: [
        { q: "Какое стандартное отклонение у 2, 4, 4, 4, 5, 5, 7, 9?", a: "Среднее равно 5. Сумма квадратов отклонений равна 32. Стандартное отклонение совокупности равно 2, потому что 32/8 = 4, а корень из 4 равен 2. Дисперсия выборки равна 32/7." },
        { q: "Почему стандартных отклонений два?", a: "Дисперсия совокупности делит на количество. Дисперсия выборки делит на количество минус один. Строку выборки берут для выборки из большего набора, строку совокупности — когда список и есть весь набор." },
        { q: "Что будет с одним числом?", a: "Среднее равно этому числу, стандартное отклонение совокупности равно нулю. Строка выборки скрыта, потому что делитель выборки был бы нулём." },
        { q: "Пустые строки игнорируются?", a: "Разделители игнорируются. Жетон, который не число, — это ошибка, а не пропущенный элемент." }
      ]
    }
  }),
  tool({
    slug: "triangle-calculator",
    cluster: "math",
    calc: "triangle",
    category: "UtilitiesApplication",
    related: ["fraction-calculator", "percentage-calculator", "standard-deviation-calculator"],
    en: {
      title: "Triangle calculator | Free Online Calculators",
      description: "Area of a right triangle from the two legs, area from three sides with Heron's formula, or area from base and height. A flat 1-2-3 set is rejected.",
      h1: "Triangle calculator",
      lede: "Area from two legs, from three sides that can form a triangle, or from a base and a height.",
      banner: "Each side of a three-sided triangle has to be shorter than the other two added together.",
      body: `<p>A right triangle is determined by its two legs. The hypotenuse is the square root of the sum of the squares of the legs. Legs of 3 and 4 give a hypotenuse of 5, because 9 + 16 is 25. The area is half the product of the legs, which is 6. The perimeter is 3 + 4 + 5, which is 12. The page does not ask which angle is the right angle. It treats the two numbers you type as the sides that meet at the right angle. If you have a hypotenuse and one leg, this mode is the wrong one. Solve the missing leg yourself with the same sum of squares, then come back if you want the area checked.</p>
<p>Three sides use Heron's formula. The semi-perimeter s is half of a + b + c. The area is the square root of s times (s − a) times (s − b) times (s − c). For 3, 4, and 5 the semi-perimeter is 6, and the product inside the root is 6 × 1 × 2 × 3, which is 36, and the root is 6. That matches the right-triangle area, which is the point of using a 3-4-5 set in both modes. Sides that fail the triangle inequality are rejected. One, two, and three add in pairs to a number that is not strictly greater than the third side: 1 + 2 equals 3. The area of that flat figure is not reported as zero. A zero or negative length is rejected in every mode.</p>
<h2>Base and height</h2>
<p>The third mode is base times height, divided by two. A base of 10 and a height of 4 give an area of 20. The height has to be the perpendicular height that belongs to that base, not the length of another side. The page cannot see your sketch. If you type a slanted side into the height box, the area will be wrong and the formula will not notice. This mode does not report a perimeter, because two numbers do not determine the other sides.</p>
<p>Units are whatever you typed. An area in centimetres comes from sides in centimetres. The page does not convert. The fraction page will reduce a ratio of two integers, which is a different job from an area. A list of side lengths is not a standard deviation problem unless that is actually what you wanted. The mean of 3, 4, and 5 is 4, and that number is not the area.</p>
<h2>What the formulas assume</h2>
<ul>
<li>The right-triangle mode assumes a right angle between the two legs.</li>
<li>Heron's formula assumes a triangle that is not flat and not inside-out.</li>
<li>Base and height assume the height is perpendicular to the base.</li>
</ul>
<p>Integer ratios are on the <a href="{{href:fraction-calculator}}">fraction calculator</a>. Percent questions are on the <a href="{{href:percentage-calculator}}">percentage calculator</a>. A list and its spread are on the <a href="{{href:standard-deviation-calculator}}">standard deviation calculator</a>.</p>`,
      faq: [
        { q: "What is the hypotenuse of a 3-4-5 triangle?", a: "5. The square root of 3 squared plus 4 squared is 5. The area is 6 and the perimeter is 12." },
        { q: "How does Heron's formula work here?", a: "The semi-perimeter is half the sum of the sides. The area is the square root of s(s−a)(s−b)(s−c). For 3, 4, and 5 that root is 6." },
        { q: "Why is 1, 2, 3 rejected?", a: "The sides are not strictly longer in pairs than the third side. 1 + 2 equals 3, so the figure is flat. The page does not report an area of zero for it." },
        { q: "Does base and height need a right angle?", a: "The height has to be perpendicular to the base you typed. A slanted side in the height box is not the height." }
      ]
    },
    ru: {
      title: "Калькулятор треугольника | Бесплатные калькуляторы",
      description: "Площадь прямоугольного треугольника по двум катетам, площадь по трём сторонам формулой Герона или площадь по основанию и высоте. Плоский набор 1-2-3 отвергается.",
      h1: "Калькулятор треугольника",
      lede: "Площадь по двум катетам, по трём сторонам, из которых собирается треугольник, или по основанию и высоте.",
      banner: "Каждая сторона треугольника из трёх сторон должна быть короче суммы двух других.",
      body: `<p>Прямоугольный треугольник задаётся двумя катетами. Гипотенуза — квадратный корень из суммы квадратов катетов. Катеты 3 и 4 дают гипотенузу 5, потому что 9 + 16 = 25. Площадь — половина произведения катетов, то есть 6. Периметр — 3 + 4 + 5, то есть 12. Страница не спрашивает, какой угол прямой. Два введённых числа она считает сторонами, которые сходятся в прямом угле. Если известны гипотенуза и один катет, этот режим не тот. Найдите второй катет той же суммой квадратов и возвращайтесь, если нужно проверить площадь.</p>
<p>Три стороны считаются формулой Герона. Полупериметр s — половина a + b + c. Площадь — корень из s × (s − a) × (s − b) × (s − c). Для 3, 4 и 5 полупериметр равен 6, а произведение под корнем — 6 × 1 × 2 × 3, то есть 36, и корень равен 6. Это совпадает с площадью прямоугольного режима. В том и смысл набора 3-4-5 в обоих режимах. Стороны, которые не проходят неравенство треугольника, отвергаются. Один, два и три в парах не строго больше третьей стороны: 1 + 2 равно 3. Площадь этой плоской фигуры нулём не показывают. Нулевая или отрицательная длина отвергается в любом режиме.</p>
<h2>Основание и высота</h2>
<p>Третий режим — основание умножить на высоту и делить на два. Основание 10 и высота 4 дают площадь 20. Высота должна быть перпендикуляром к этому основанию, а не длиной другой стороны. Рисунок страница не видит. Если в поле высоты вписать наклонную сторону, площадь будет неверной, и формула этого не заметит. Периметр этот режим не сообщает: двух чисел недостаточно, чтобы определить остальные стороны.</p>
<p>Единицы — те, что вы ввели. Площадь в сантиметрах получается из сторон в сантиметрах. Перевода нет. Страница дробей сократит отношение двух целых, и это другая задача, не площадь. Список длин сторон — не задача про стандартное отклонение, если вы на самом деле хотели не это. Среднее 3, 4 и 5 равно 4, и это число — не площадь.</p>
<h2>Что формулы предполагают</h2>
<ul>
<li>Режим прямоугольного треугольника предполагает прямой угол между катетами.</li>
<li>Формула Герона предполагает треугольник, который не плоский и не вывернутый.</li>
<li>Основание и высота предполагают, что высота перпендикулярна основанию.</li>
</ul>
<p>Один и тот же набор 3, 4 и 5 стоит прогнать в двух режимах. Прямоугольный режим и формула Герона оба должны дать площадь 6. Если они расходятся, одна из формул применена не к тем сторонам. Основание 10 и высота 4 должны дать 20 и не должны сообщать периметр.</p>
<p>Целые отношения — на <a href="{{href:fraction-calculator}}">калькуляторе дробей</a>. Вопросы про проценты — на <a href="{{href:percentage-calculator}}">калькуляторе процентов</a>. Список и разброс — на <a href="{{href:standard-deviation-calculator}}">калькуляторе стандартного отклонения</a>.</p>`,
      faq: [
        { q: "Чему равна гипотенуза треугольника 3-4-5?", a: "5. Корень из 3 в квадрате плюс 4 в квадрате равен 5. Площадь равна 6, периметр равен 12." },
        { q: "Как здесь работает формула Герона?", a: "Полупериметр — половина суммы сторон. Площадь — корень из s(s−a)(s−b)(s−c). Для 3, 4 и 5 этот корень равен 6." },
        { q: "Почему 1, 2, 3 отвергаются?", a: "Стороны в парах не строго длиннее третьей. 1 + 2 равно 3, фигура плоская. Площадь нулём для неё не показывают." },
        { q: "Нужен ли прямой угол для основания и высоты?", a: "Высота должна быть перпендикулярна введённому основанию. Наклонная сторона в поле высоты — не высота." }
      ]
    }
  }),
  tool({
    slug: "age-calculator",
    cluster: "other",
    calc: "age",
    category: "UtilitiesApplication",
    related: ["date-calculator", "time-calculator", "business-days-calculator"],
    en: {
      title: "Age calculator | Free Online Calculators",
      description: "Age in years, months, and days between a date of birth and a date you pick. A 29 February birthday reaches the next whole year on 1 March in a non-leap year.",
      h1: "Age calculator",
      lede: "Whole years, then whole months, then the remaining days, from a date of birth to the date you pick.",
      banner: "The day count is in UTC, so a daylight-saving change does not add or remove a day.",
      body: `<p>Age is the calendar gap from the date of birth to the as-of date. Whole years come first. If the as-of month and day are before the birthday in that year, the year count is one smaller and the months borrow. If the day of the month is before the birth day, the month count borrows, and the days are filled from the length of the previous month. Someone born on 15 January 2000 is, on 25 November 2026, 26 years, 10 months, and 10 days. The total-days line is the number of midnights between the two UTC dates. It does not depend on the time zone of the browser and it does not grow or shrink when the clocks change.</p>
<p>A birthday of 29 February is the awkward case. In a leap year the anniversary is 29 February. In a non-leap year February has no 29th, so the next date on which the year, month, and day counts land on a whole number of years is 1 March. Born on 29 February 2000, the age on 29 February 2024 is 24 years, 0 months, and 0 days. On 28 February 2025 the year count is still 24. On 1 March 2025 it is 25 years, 0 months, and 0 days, and the next-birthday line is that same 1 March with zero days to wait. The page states that rule because other calculators pick 28 February instead. Both are conventions. This one follows the calendar subtraction.</p>
<h2>The date the form starts with</h2>
<p>The birth field starts at 15 June 1990 so the form is not empty. The as-of field is filled with today's date in your browser when the page loads, and you can replace it. An as-of date before the birth date is rejected. An impossible date, such as 31 April, is rejected because it is not a calendar day. The business-days page is a different count: it skips weekends and the holidays you list. This page counts every calendar day. The time page counts hours. Age does not have a time of day. A birth at 23:00 and a birthday at 01:00 are the same date here.</p>
<p>The date calculator adds months and clamps the end of the month. This page does not add a duration to a birthday except to find the next anniversary. If you want "what date is 40 years after this birth," use the date calculator, and remember that 29 February plus a non-leap year of months is handled there by clamping, which is a related but separate rule.</p>
<h2>What the count is not</h2>
<ul>
<li>It is not a legal age for a contract, a licence, or a benefit.</li>
<li>It does not know the time of birth.</li>
<li>It does not skip weekends.</li>
</ul>
<p>Adding and subtracting dates is the <a href="{{href:date-calculator}}">date calculator</a>. Hours and clock times are the <a href="{{href:time-calculator}}">time calculator</a>. Weekdays with holidays removed are the <a href="{{href:business-days-calculator}}">business days calculator</a>.</p>`,
      faq: [
        { q: "How is age in years, months, and days calculated?", a: "Whole years first, then whole months, then the remaining days, borrowing from the previous month when the day of the month has not been reached. 15 January 2000 to 25 November 2026 is 26 years, 10 months, and 10 days." },
        { q: "What happens to a 29 February birthday in a non-leap year?", a: "The anniversary that completes a whole number of years is 1 March. On 28 February the year count has not stepped yet. On 1 March the months and days are zero." },
        { q: "Does daylight saving change the day count?", a: "No. Total days are UTC midnights between the two dates. A 23-hour or 25-hour civil day does not change that count." },
        { q: "Is this a legal age?", a: "No. It is the calendar gap between two dates you typed. A statute can define age differently." }
      ]
    },
    ru: {
      title: "Калькулятор возраста | Бесплатные калькуляторы",
      description: "Возраст в годах, месяцах и днях между датой рождения и выбранной датой. День рождения 29 февраля в невисокосном году добирает полный год 1 марта.",
      h1: "Калькулятор возраста",
      lede: "Полные годы, затем полные месяцы, затем оставшиеся дни от даты рождения до выбранной даты.",
      banner: "Число дней считается в UTC, поэтому перевод часов день не добавляет и не убирает.",
      body: `<p>Возраст — календарный промежуток от даты рождения до даты «на день». Сначала полные годы. Если месяц и день выбранной даты раньше дня рождения в этом году, лет на один меньше, а месяцы занимают. Если число месяца меньше дня рождения, месяц занимает, а дни добираются из длины предыдущего месяца. Рождённый 15 января 2000 года на 25 ноября 2026 года имеет 26 лет, 10 месяцев и 10 дней. Строка всех дней — число полуночей между двумя датами UTC. Она не зависит от часового пояса браузера и не растёт и не сжимается, когда переводят часы.</p>
<p>День рождения 29 февраля — неудобный случай. В високосном году годовщина — 29 февраля. В невисокосном у февраля нет 29-го, поэтому следующая дата, на которой годы, месяцы и дни становятся целым числом лет, — 1 марта. Рождённый 29 февраля 2000 года 29 февраля 2024 года имеет 24 года, 0 месяцев и 0 дней. 28 февраля 2025 года лет всё ещё 24. 1 марта 2025 года — 25 лет, 0 месяцев и 0 дней, и строка следующего дня рождения — то же 1 марта с нулём дней ожидания. Правило написано явно, потому что другие калькуляторы выбирают 28 февраля. Оба варианта — соглашения. Этот следует календарному вычитанию.</p>
<h2>С какой даты форма начинает</h2>
<p>Поле рождения начинается с 15 июня 1990 года, чтобы форма не была пустой. Поле «на дату» при загрузке заполняется сегодняшней датой браузера, и её можно заменить. Дата раньше рождения отвергается. Невозможная дата, например 31 апреля, отвергается: это не календарный день. Страница рабочих дней считает иначе: она пропускает выходные и перечисленные праздники. Эта страница считает каждый календарный день. Страница времени считает часы. У возраста нет времени суток. Рождение в 23:00 и день рождения в 01:00 здесь — одна дата.</p>
<p>Калькулятор дат прибавляет месяцы и усекает конец месяца. Эта страница не прибавляет срок к дню рождения, кроме поиска следующей годовщины. Если нужно «какая дата через 40 лет после этого рождения», откройте калькулятор дат и помните, что 29 февраля плюс месяцы невисокосного года там усекается. Это соседнее, но отдельное правило.</p>
<h2>Чем подсчёт не является</h2>
<ul>
<li>Это не юридический возраст для договора, прав или пособия.</li>
<li>Время рождения он не знает.</li>
<li>Выходные он не пропускает.</li>
</ul>
<p>Две даты стоит сверить с календарём, а не только с другой строкой этой страницы. 15 января 2000 года и 25 ноября 2026 года — это 26 лет, 10 месяцев и 10 дней. Если месяцы вышли другими, заняли не у того предыдущего месяца. Для 29 февраля сверка — 1 марта невисокосного года, а не 28 февраля.</p>
<p>Прибавление и вычитание дат — <a href="{{href:date-calculator}}">калькулятор дат</a>. Часы и моменты суток — <a href="{{href:time-calculator}}">калькулятор времени</a>. Будни без праздников — <a href="{{href:business-days-calculator}}">калькулятор рабочих дней</a>.</p>`,
      faq: [
        { q: "Как считаются годы, месяцы и дни?", a: "Сначала полные годы, потом полные месяцы, потом оставшиеся дни. Если число месяца ещё не наступило, занимают у предыдущего месяца. С 15 января 2000 по 25 ноября 2026 — 26 лет, 10 месяцев и 10 дней." },
        { q: "Что с днём рождения 29 февраля в невисокосном году?", a: "Годовщина, которая завершает целое число лет, — 1 марта. 28 февраля число лет ещё не шагнуло. 1 марта месяцы и дни равны нулю." },
        { q: "Меняет ли летнее время число дней?", a: "Нет. Всего дней — это полуночи UTC между двумя датами. Гражданский день в 23 или 25 часов этот счёт не меняет." },
        { q: "Это юридический возраст?", a: "Нет. Это календарный промежуток между двумя введёнными датами. Закон может определить возраст иначе." }
      ]
    }
  }),
  tool({
    slug: "date-calculator",
    cluster: "other",
    calc: "datecalc",
    category: "UtilitiesApplication",
    related: ["age-calculator", "time-calculator", "business-days-calculator"],
    en: {
      title: "Date calculator | Free Online Calculators",
      description: "Days between two dates, the count that includes both dates, and a date after adding years, months, and days. Adding a month to 31 January lands on the last day of February.",
      h1: "Date calculator",
      lede: "The calendar gap between two dates, or a date shifted by years, then months, then days, with the end of the month clamped.",
      banner: "Years are applied first, then months, then days. 31 January plus one month is the last day of February.",
      body: `<p>The between mode reports four readings of the same pair of dates. Days from the first date to the second is the UTC midnight count, so 1 January to 31 January is 30. The inclusive count adds one, because both dates are being counted, and that pair is 31. Weeks is the day count divided by 7, so 30 days is 4 and 2/7 weeks, not a rounded 4. The year-month-day line is the same calendar subtraction the age page uses. If the second date is earlier, the numbers are shown with a minus and the span is still the positive gap. An impossible date is rejected.</p>
<p>The add mode starts from the date you type. Years are added first, and if that lands on a day the destination month does not have, the day clamps to the last real day. Months are added next, with the same clamp. Days are added last, and days can roll into the next month because a day is a real calendar step. 31 January 2026 plus one month is 28 February 2026. 31 January 2024 plus one month is 29 February 2024, because 2024 is a leap year. 1 March 2026 plus minus one day is 28 February 2026. The order matters. Adding the days before the months would not be the same operation, and the page does years, then months, then days.</p>
<h2>How this differs from age and from business days</h2>
<p>The age page is this calendar subtraction aimed at a birthday, including the 29 February rule for the next anniversary. This page will also clamp 29 February when you add years into a non-leap February. Adding one year to 29 February 2024 lands on 28 February 2025, because the year step clamps. That is a different sentence from "the birthday anniversary is 1 March," which is what the age page says about completing a whole year. Use the page whose sentence matches the question. Business days skip Saturdays, Sundays, and the holidays you list. This page does not. A weekend in the middle of the span still counts.</p>
<p>Negative years, months, and days are allowed and mean subtract. They have to be whole numbers. A half month is not a calendar operation this page will invent. Time of day is the time calculator. Two clock times on the same date are zero days here and a duration there.</p>
<h2>What the clamp is for</h2>
<ul>
<li>It keeps 31 January plus one month inside February.</li>
<li>It does not mean February has a 31st that was hidden.</li>
<li>Inclusive days and the gap in days answer different questions. Both are labelled.</li>
</ul>
<p>Birthdays are on the <a href="{{href:age-calculator}}">age calculator</a>. Hours are on the <a href="{{href:time-calculator}}">time calculator</a>. Weekdays are on the <a href="{{href:business-days-calculator}}">business days calculator</a>.</p>`,
      faq: [
        { q: "How many days are there from 1 January to 31 January?", a: "30 days from the first date to the second. The count that includes both dates is 31." },
        { q: "What is 31 January plus one month?", a: "The last day of February: the 28th, or the 29th in a leap year. The day is clamped to the month instead of spilling into March." },
        { q: "In what order are years, months, and days added?", a: "Years first, then months, then days. Days can roll into the next month. Months clamp." },
        { q: "Does this skip weekends?", a: "No. Every calendar day counts. Weekdays with holidays removed are on the business-days page." }
      ]
    },
    ru: {
      title: "Калькулятор дат | Бесплатные калькуляторы",
      description: "Дни между двумя датами, число, которое включает обе даты, и дата после прибавления лет, месяцев и дней. Месяц к 31 января падает на последний день февраля.",
      h1: "Калькулятор дат",
      lede: "Календарный промежуток между двумя датами или дата, сдвинутая сначала на годы, потом на месяцы, потом на дни, с усечением конца месяца.",
      banner: "Сначала годы, потом месяцы, потом дни. 31 января плюс месяц — последний день февраля.",
      body: `<p>Режим «между» даёт четыре чтения одной пары дат. Дни от первой даты до второй — это счёт полуночей UTC, поэтому с 1 января по 31 января выходит 30. Число, которое включает обе даты, прибавляет единицу, и у этой пары оно равно 31. Недели — число дней, делённое на 7, так что 30 дней — это 4 и 2/7 недели, а не округлённые 4. Строка лет, месяцев и дней — то же календарное вычитание, что на странице возраста. Если вторая дата раньше, числа показываются с минусом, а промежуток остаётся положительным разрывом. Невозможная дата отвергается.</p>
<p>Режим прибавления начинает с введённой даты. Сначала прибавляются годы, и если день не существует в целевом месяце, он усекается до последнего настоящего дня. Затем месяцы, с тем же усечением. Дни прибавляются последними и могут перейти в следующий месяц, потому что день — настоящий календарный шаг. 31 января 2026 плюс один месяц — 28 февраля 2026. 31 января 2024 плюс один месяц — 29 февраля 2024, потому что 2024 високосный. 1 марта 2026 плюс минус один день — 28 февраля 2026. Порядок важен. Если прибавить дни до месяцев, операция была бы другой. Страница делает годы, потом месяцы, потом дни.</p>
<h2>Чем это отличается от возраста и от рабочих дней</h2>
<p>Страница возраста — это календарное вычитание, нацеленное на день рождения, включая правило 29 февраля для следующей годовщины. Эта страница тоже усечёт 29 февраля, если прибавить годы в невисокосный февраль. Один год к 29 февраля 2024 года падает на 28 февраля 2025 года, потому что шаг года усекает. Это другое предложение, чем «годовщина — 1 марта», которое страница возраста говорит о завершении целого года. Открывайте ту страницу, чья фраза совпадает с вопросом. Рабочие дни пропускают субботу, воскресенье и перечисленные праздники. Эта страница нет. Выходные в середине промежутка всё равно считаются.</p>
<p>Отрицательные годы, месяцы и дни разрешены и значат вычитание. Они должны быть целыми. Половину месяца страница не выдумывает. Время суток — калькулятор времени. Два момента одних суток здесь — ноль дней, а там — длительность.</p>
<h2>Зачем усечение</h2>
<ul>
<li>Оно держит 31 января плюс месяц внутри февраля.</li>
<li>Оно не значит, что у февраля есть спрятанное 31-е.</li>
<li>Дни включая обе даты и промежуток в днях отвечают на разные вопросы. Подписи у обоих есть.</li>
</ul>
<p>Две опорные даты стоит посчитать вручную до того, как доверять длинному сдвигу. С 1 по 31 января — 30 дней разрыва и 31 день, если считать обе даты. 31 января плюс месяц в 2026 году — 28 февраля, а в 2024 году — 29 февраля. Если високосный год дал 28-е, усечение не посмотрело на календарь.</p>
<p>Дни рождения — на <a href="{{href:age-calculator}}">калькуляторе возраста</a>. Часы — на <a href="{{href:time-calculator}}">калькуляторе времени</a>. Будни — на <a href="{{href:business-days-calculator}}">калькуляторе рабочих дней</a>.</p>`,
      faq: [
        { q: "Сколько дней с 1 января по 31 января?", a: "30 дней от первой даты до второй. Число, которое включает обе даты, равно 31." },
        { q: "Чему равно 31 января плюс один месяц?", a: "Последнему дню февраля: 28-му или 29-му в високосном году. День усекается до месяца и не перетекает в март." },
        { q: "В каком порядке прибавляются годы, месяцы и дни?", a: "Сначала годы, потом месяцы, потом дни. Дни могут перейти в следующий месяц. Месяцы усекаются." },
        { q: "Выходные пропускаются?", a: "Нет. Считается каждый календарный день. Будни без праздников — на странице рабочих дней." }
      ]
    }
  }),
  tool({
    slug: "time-calculator",
    cluster: "other",
    calc: "timecalc",
    category: "UtilitiesApplication",
    related: ["date-calculator", "age-calculator", "world-time-meeting-planner"],
    en: {
      title: "Time calculator | Free Online Calculators",
      description: "Add or subtract hours, minutes, and seconds, or measure the duration between two clock times. An earlier end time is counted into the next day.",
      h1: "Time calculator",
      lede: "Durations you can add and subtract, and the gap between two clock times, including one that crosses midnight.",
      banner: "Clock times use a 24-hour clock. An end that is earlier than the start is the next day, and the result says so.",
      body: `<p>A duration is hours, minutes, and seconds added into a single count of seconds. Adding two durations adds those counts. Subtracting takes the second away from the first. The result is carried back into days, hours, minutes, and seconds, with a minus when the result is negative. One hour and 30 minutes, plus 2 hours, 45 minutes, and 30 seconds, is 4 hours, 15 minutes, and 30 seconds. One hour minus 2 hours and 30 minutes is minus 1 hour and 30 minutes. The page does not hide the minus inside a "borrow" story that pretends the result is still positive. Minutes and seconds at or above 60 are normal inputs. They are carried: 90 minutes is 1 hour and 30 minutes inside the total, not an error.</p>
<p>The clock mode takes a start hour and minute and an end hour and minute, on a 24-hour clock. Hours have to be from 0 to 23 and minutes from 0 to 59. The duration is the end minus the start in minutes. If the end is earlier than the start, 24 hours are added and the result says the count crossed midnight. From 22:00 to 06:00 is 8 hours. From 09:15 to 17:45 is 8 hours and 30 minutes, and that one does not cross midnight. The mode does not know a time zone. Two civil times on a day when the clocks change can be 23 or 25 hours apart in elapsed time. This page treats every hour as 60 minutes, which is the clock-face question, not the elapsed-UTC question.</p>
<h2>What belongs on the date page instead</h2>
<p>A gap of several days is the date calculator. This page will add a duration longer than a day and show the day count in the result, so 30 hours is 1 day and 6 hours. It will not tell you which calendar date that lands on. Age is dates without a time of day. A meeting across time zones is the world-time planner, which uses IANA zones and the offset of a particular date, including daylight saving. This page does not. If you need 15:00 in London as a New York clock time, the planner is the page that knows the offset. If you need how long a shift is, this page is enough.</p>
<p>Negative clock inputs outside 0 to 23 are rejected. A duration field can be negative if you type a minus, and subtraction already covers that case more clearly. Zero is a valid duration. The result of adding zero is the first duration, carried into hours, minutes, and seconds.</p>
<h2>What the clock does not know</h2>
<ul>
<li>No time zone and no daylight-saving transition.</li>
<li>No date. A 30-hour result is a duration, not a calendar landing.</li>
<li>Seconds are not part of the clock-to-clock mode. They are part of the duration modes.</li>
</ul>
<p>Calendar gaps are on the <a href="{{href:date-calculator}}">date calculator</a>. Birthdays are on the <a href="{{href:age-calculator}}">age calculator</a>. A time in one zone shown in another is the <a href="{{href:world-time-meeting-planner}}">world time meeting planner</a>.</p>`,
      faq: [
        { q: "What is 1:30:00 plus 2:45:30?", a: "4:15:30. The page adds the seconds and carries 60 seconds into a minute and 60 minutes into an hour." },
        { q: "What is 1 hour minus 2 hours 30 minutes?", a: "Minus 1 hour and 30 minutes. The sign stays visible." },
        { q: "How long is it from 22:00 to 06:00?", a: "8 hours. The end is earlier than the start, so the page adds 24 hours and says the count crosses midnight." },
        { q: "Does this handle daylight saving?", a: "No. Every hour is 60 minutes. A civil day that is 23 or 25 hours long is a time-zone question, and the meeting planner is the page for zones." }
      ]
    },
    ru: {
      title: "Калькулятор времени | Бесплатные калькуляторы",
      description: "Сложение и вычитание часов, минут и секунд или длительность между двумя моментами суток. Более ранний конец считается уже следующими сутками.",
      h1: "Калькулятор времени",
      lede: "Длительности, которые можно складывать и вычитать, и промежуток между двумя моментами, в том числе через полночь.",
      banner: "Моменты задаются в 24-часовом формате. Если конец раньше начала, это следующие сутки, и результат об этом говорит.",
      body: `<p>Длительность — это часы, минуты и секунды, собранные в один счёт секунд. Сложение двух длительностей складывает эти счета. Вычитание отнимает вторую от первой. Результат снова раскладывается на дни, часы, минуты и секунды, с минусом, если он отрицательный. Один час и 30 минут плюс 2 часа, 45 минут и 30 секунд — это 4 часа, 15 минут и 30 секунд. Один час минус 2 часа и 30 минут — это минус 1 час и 30 минут. Страница не прячет минус в историю про «заём», которая делает вид, что результат всё ещё положительный. Минуты и секунды от 60 и выше — нормальный ввод. Они переносятся: 90 минут внутри итога — это 1 час и 30 минут, а не ошибка.</p>
<p>Режим часов берёт час и минуту начала и час и минуту конца в 24-часовом формате. Часы должны быть от 0 до 23, минуты от 0 до 59. Длительность — конец минус начало в минутах. Если конец раньше начала, прибавляются 24 часа, и результат говорит, что счёт перешёл через полночь. С 22:00 до 06:00 — 8 часов. С 09:15 до 17:45 — 8 часов и 30 минут, и этот промежуток полночь не пересекает. Часового пояса режим не знает. Два гражданских времени в день перевода часов могут отстоять на 23 или 25 часов прошедшего времени. Здесь каждый час — 60 минут. Это вопрос циферблата, а не прошедшего UTC.</p>
<h2>Что вместо этого считать на странице дат</h2>
<p>Промежуток в несколько дней — калькулятор дат. Эта страница сложит длительность длиннее суток и покажет дни в результате, так что 30 часов — это 1 день и 6 часов. Календарную дату, на которую это падает, она не назовёт. Возраст — даты без времени суток. Встреча через пояса — планировщик мирового времени: он берёт зоны IANA и смещение конкретной даты, включая летнее время. Эта страница нет. Если нужно 15:00 в Лондоне как время Нью-Йорка, смещение знает планировщик. Если нужна длина смены, хватает этой страницы.</p>
<p>Часы вне 0–23 отвергаются. В поле длительности можно ввести минус, но вычитание покрывает этот случай яснее. Ноль — допустимая длительность. Сумма с нулём — первая длительность, разложенная на часы, минуты и секунды.</p>
<h2>Чего часы не знают</h2>
<ul>
<li>Нет пояса и нет перехода на летнее время.</li>
<li>Нет даты. Результат в 30 часов — длительность, а не календарная точка.</li>
<li>В режиме от момента до момента секунд нет. Они есть в режимах длительности.</li>
</ul>
<p>Календарные промежутки — на <a href="{{href:date-calculator}}">калькуляторе дат</a>. Дни рождения — на <a href="{{href:age-calculator}}">калькуляторе возраста</a>. Время одного пояса в другом — <a href="{{href:world-time-meeting-planner}}">планировщик мирового времени</a>.</p>`,
      faq: [
        { q: "Чему равно 1:30:00 плюс 2:45:30?", a: "4:15:30. Страница складывает секунды и переносит 60 секунд в минуту и 60 минут в час." },
        { q: "Чему равен 1 час минус 2 часа 30 минут?", a: "Минус 1 час и 30 минут. Знак остаётся видимым." },
        { q: "Сколько длятся с 22:00 до 06:00?", a: "8 часов. Конец раньше начала, поэтому страница прибавляет 24 часа и говорит, что счёт переходит через полночь." },
        { q: "Учитывается ли летнее время?", a: "Нет. Каждый час — 60 минут. Гражданские сутки в 23 или 25 часов — вопрос пояса, и для поясов есть планировщик встреч." }
      ]
    }
  }),
  tool({
    slug: "gpa-calculator",
    cluster: "other",
    calc: "gpa",
    category: "UtilitiesApplication",
    related: ["grade-calculator", "percentage-calculator", "fraction-calculator"],
    en: {
      title: "GPA calculator | Free Online Calculators",
      description: "Credit-weighted GPA on a 4.0 scale where A and A+ are 4.0, A− is 3.7, and F is 0. The map is printed on the form.",
      h1: "GPA calculator",
      lede: "A credit-weighted average on one common 4.0 map. A+ does not rise above 4.0.",
      banner: "Schools that award 4.3 for A+, or that use a different step, will not match this map.",
      body: `<p>Each row is a letter and a number of credits. The grade points for the row are the letter's value times the credits. The GPA is the sum of grade points divided by the sum of credits. The map is A+ = 4.0, A = 4.0, A− = 3.7, B+ = 3.3, B = 3.0, B− = 2.7, C+ = 2.3, C = 2.0, C− = 1.7, D+ = 1.3, D = 1.0, D− = 0.7, and F = 0. An A and a B, three credits each, are (4×3 + 3×3) / 6, which is 3.5. An A− worth four credits and an F worth two credits are (3.7×4 + 0×2) / 6, which is 3.7×4/6, about 2.467. Empty credit rows are skipped. A credit count of zero with no letter is skipped. Negative credits are rejected. A letter that is not on the map is rejected.</p>
<p>A+ and A share 4.0 because that is the cap on this particular scale. A school that prints 4.3 or 4.33 for A+ is using a different scale, and typing A+ here will not reproduce that transcript. Weighted high-school GPA, where an honours course adds a point, is also a different scale. This page has no honours switch. If a course is worth more, give it more credits only when that is actually how the school weights it. Do not invent a credit to smuggle in a bonus the map does not have.</p>
<h2>How the rows add</h2>
<p>You can add up to twenty courses. Removing a row is blocked when it is the last one, so the form always has a place to type. The credits line in the result is the sum of the credits that were included. The grade-points line is the numerator, so you can divide it by the credits and recover the GPA. A course with zero credits adds nothing to either total. That is useful for a placeholder row and useless as a way to raise the average. The percentage page will not weight letters. The grade page on this site weights raw points and then maps 90, 80, 70, and 60 onto A, B, C, and D. It is not this GPA. A 3.5 GPA is not "87.5 percent" unless a school published that conversion, and this page does not invent one.</p>
<p>Pass/fail courses are not on the map. Leaving them off the form is the honest move when they do not enter the GPA. Putting them in as an A or an F would change the average by a rule the school did not use. Transfer credits that arrive already averaged are a single row only if you know the letter and the credits. The page will not unpack a previous GPA into courses it cannot see.</p>
<h2>What the map is not</h2>
<ul>
<li>It is not a 4.3 scale and not a 5.0 honours scale.</li>
<li>It is not a percent, and it does not convert to one.</li>
<li>It does not know which courses your school excludes.</li>
</ul>
<p>Points earned out of points possible are on the <a href="{{href:grade-calculator}}">grade calculator</a>. A plain percentage is the <a href="{{href:percentage-calculator}}">percentage calculator</a>. An exact ratio of two integers is the <a href="{{href:fraction-calculator}}">fraction calculator</a>.</p>`,
      faq: [
        { q: "What is the GPA of an A and a B, three credits each?", a: "3.5. Grade points are 4×3 plus 3×3, which is 21, divided by 6 credits." },
        { q: "What is A+ worth?", a: "4.0, the same as A. This scale does not go to 4.3." },
        { q: "What is A− worth?", a: "3.7. Then B+ is 3.3, B is 3.0, B− is 2.7, and the steps continue down to F at 0." },
        { q: "Can I include a pass/fail course?", a: "Only if your school actually folds it into the GPA as one of these letters. Otherwise leave it off. The page has no separate pass value." }
      ]
    },
    ru: {
      title: "Калькулятор среднего балла | Бесплатные калькуляторы",
      description: "Средний балл с весом кредитов по шкале 4,0, где A и A+ равны 4,0, A− равен 3,7, а F равен 0. Карта написана на форме.",
      h1: "Калькулятор среднего балла",
      lede: "Среднее с весом кредитов по одной распространённой шкале 4,0. A+ выше 4,0 не поднимается.",
      banner: "Школа, где за A+ дают 4,3 или где шаг другой, с этой картой не совпадёт.",
      body: `<p>Каждая строка — буква и число кредитов. Баллы строки — значение буквы, умноженное на кредиты. Средний балл — сумма баллов, делённая на сумму кредитов. Карта такая: A+ = 4,0, A = 4,0, A− = 3,7, B+ = 3,3, B = 3,0, B− = 2,7, C+ = 2,3, C = 2,0, C− = 1,7, D+ = 1,3, D = 1,0, D− = 0,7, F = 0. A и B по три кредита — это (4×3 + 3×3) / 6, то есть 3,5. A− на четыре кредита и F на два — это (3,7×4 + 0×2) / 6, около 2,467. Пустые строки кредитов пропускаются. Ноль кредитов без буквы пропускается. Отрицательные кредиты отвергаются. Буква не с карты отвергается.</p>
<p>A+ и A делят 4,0, потому что на этой шкале это потолок. Школа, которая печатает 4,3 или 4,33 за A+, использует другую шкалу, и A+ здесь такой транскрипт не повторит. Школьный средний балл, где профильный курс прибавляет балл, — тоже другая шкала. Переключателя профиля здесь нет. Давать курсу больше кредитов стоит только тогда, когда школа и правда так его взвешивает. Не выдумывайте кредит, чтобы протащить надбавку, которой в карте нет.</p>
<h2>Как складываются строки</h2>
<p>Курсов можно добавить до двадцати. Удаление строки блокируется, когда она последняя, чтобы в форме всегда было куда ввести. Строка кредитов в результате — сумма кредитов, которые вошли. Строка баллов — числитель, его можно разделить на кредиты и получить средний балл обратно. Курс с нулём кредитов не прибавляет ни к тому, ни к другому. Это удобно как пустая строка и бесполезно как способ поднять среднее. Страница процентов буквы не взвешивает. Страница оценки на этом сайте взвешивает сырые баллы и потом ставит 90, 80, 70 и 60 в соответствие A, B, C и D. Это не этот средний балл. Средний 3,5 — не «87,5 процента», пока школа не опубликовала такой перевод, а эта страница его не выдумывает.</p>
<p>Зачёт без оценки на карте нет. Честно не включать его, если в средний балл он не входит. Поставить его как A или F значило бы изменить среднее по правилу, которого у школы не было. Переведённые кредиты, которые пришли уже усреднёнными, — одна строка, только если известны буква и кредиты. Предыдущий средний балл на курсы, которых она не видит, страница не разложит.</p>
<h2>Чем карта не является</h2>
<ul>
<li>Это не шкала 4,3 и не шкала 5,0 для профильных курсов.</li>
<li>Это не процент, и в процент она не переводится.</li>
<li>Она не знает, какие курсы ваша школа исключает.</li>
</ul>
<p>Набранные баллы из возможных — на <a href="{{href:grade-calculator}}">калькуляторе оценки</a>. Обычный процент — <a href="{{href:percentage-calculator}}">калькулятор процентов</a>. Точное отношение двух целых — <a href="{{href:fraction-calculator}}">калькулятор дробей</a>.</p>`,
      faq: [
        { q: "Какой средний балл у A и B по три кредита?", a: "3,5. Баллы — 4×3 плюс 3×3, это 21, делённые на 6 кредитов." },
        { q: "Сколько стоит A+?", a: "4,0, как и A. Эта шкала до 4,3 не доходит." },
        { q: "Сколько стоит A−?", a: "3,7. Дальше B+ равен 3,3, B равен 3,0, B− равен 2,7, и шаги идут вниз до F, который равен 0." },
        { q: "Можно ли включить зачёт без оценки?", a: "Только если школа правда включает его в средний балл одной из этих букв. Иначе не включайте. Отдельного значения «зачёт» нет." }
      ]
    }
  }),
  tool({
    slug: "grade-calculator",
    cluster: "other",
    calc: "grade",
    category: "UtilitiesApplication",
    related: ["gpa-calculator", "percentage-calculator", "fraction-calculator"],
    en: {
      title: "Grade calculator | Free Online Calculators",
      description: "Weighted percent from points earned out of points possible, then a letter on a 90, 80, 70, 60 scale. A blank weight counts as 1.",
      h1: "Grade calculator",
      lede: "Each score is points earned divided by points possible, weighted, then mapped to A, B, C, D, or F.",
      banner: "The letters use 90, 80, 70, and 60. A school with a different cut will not match.",
      body: `<p>Each row is points earned, points possible, and a weight. The row's percent is earned divided by possible. That percent is multiplied by the weight. The result is the sum of those weighted percents divided by the sum of the weights, times 100. A blank weight counts as 1, so a single row with no weight is just earned divided by possible. Eighteen out of 20 with weight 40, and 45 out of 50 with weight 60, are both 90 percent. The weighted percent is (0.90×40 + 0.90×60) / 100, which is 90, and the letter is A. Forty-two out of 50 is 84 percent, which is a B. Fifty-nine out of 100 is an F. The cuts are 90 for A, 80 for B, 70 for C, and 60 for D. Anything under 60 is F. There is no A− and no plus.</p>
<p>Possible points have to be greater than zero. Earned points cannot be negative. A weight cannot be negative. A blank earned and a blank possible on the same row are skipped, so an unused row does not fail the form. Earned points may be larger than possible points. That is extra credit, and it can push the percent above 100. The letter is still A once the percent is at least 90. The page does not cap the percent at 100. If your course does, cap the earned points yourself before you type them.</p>
<h2>This is not a GPA</h2>
<p>The GPA page averages letters that already exist, weighted by credits, on a 4.0 map. This page starts from raw points and only then picks a letter. A 3.5 GPA is not fed back into this form, and an 84 percent is not reported as a 3.0. Those conversions belong to a school that published them. The percentage page will answer "84 is what percent of 100" and will not attach a letter. The fraction page will reduce 42/50 to 21/25 and will not call it a B. Use the page whose last line is the thing you were asked for.</p>
<p>Dropping the lowest score is not a switch. Delete that row if the syllabus says to drop it. A curve is not a switch either. If the instructor added points, type the points after the curve. The weights are relative. Weights of 40 and 60 are the same as weights of 2 and 3. Weights of 1 and 1 are an ordinary average of the two percents, not an average of the raw points. Eighteen out of 20 and 45 out of 50 are both 90 percent, so the unweighted average of the percents is 90. An average of the raw points, 63 out of 70, is also 90 in this particular example and is not the same operation in general. The page always averages the percents, then applies the weights.</p>
<h2>What the cuts assume</h2>
<ul>
<li>90, 80, 70, and 60 are the only letter boundaries.</li>
<li>A blank weight is 1, not zero. Zero would drop the row.</li>
<li>There is no extra-credit cap.</li>
</ul>
<p>Letters you already have are on the <a href="{{href:gpa-calculator}}">GPA calculator</a>. A percent without a letter is the <a href="{{href:percentage-calculator}}">percentage calculator</a>. A reduced ratio is the <a href="{{href:fraction-calculator}}">fraction calculator</a>.</p>`,
      faq: [
        { q: "What letter is 42 out of 50?", a: "84 percent, which is a B. The B band starts at 80 and stops before 90." },
        { q: "How do the weights work?", a: "Each row is earned divided by possible, multiplied by its weight. The weights are summed, and the weighted percents are divided by that sum. A blank weight counts as 1." },
        { q: "What is 18/20 at weight 40 and 45/50 at weight 60?", a: "Both rows are 90 percent, so the weighted percent is 90 and the letter is A." },
        { q: "Is this the same as the GPA calculator?", a: "No. GPA averages letters you already have, using credits and a 4.0 map. This page starts from points and only then picks a letter on a 90/80/70/60 scale." }
      ]
    },
    ru: {
      title: "Калькулятор оценки | Бесплатные калькуляторы",
      description: "Взвешенный процент из набранных баллов и максимума, затем буква по порогам 90, 80, 70 и 60. Пустой вес считается единицей.",
      h1: "Калькулятор оценки",
      lede: "Каждый результат — набранные баллы, делённые на максимум, с весом, и затем буква A, B, C, D или F.",
      banner: "Буквы стоят на 90, 80, 70 и 60. Школа с другими порогами не совпадёт.",
      body: `<p>Каждая строка — набранные баллы, максимум и вес. Процент строки — набранное, делённое на максимум. Этот процент умножается на вес. Результат — сумма взвешенных процентов, делённая на сумму весов, умножить на 100. Пустой вес считается единицей, поэтому одна строка без веса — просто набранное, делённое на максимум. Восемнадцать из 20 с весом 40 и 45 из 50 с весом 60 — оба по 90 процентов. Взвешенный процент — (0,90×40 + 0,90×60) / 100, то есть 90, буква A. Сорок два из 50 — 84 процента, это B. Пятьдесят девять из 100 — F. Пороги: 90 для A, 80 для B, 70 для C и 60 для D. Ниже 60 — F. Плюсов и минусов нет.</p>
<p>Максимум должен быть больше нуля. Набранные баллы не могут быть отрицательными. Вес не может быть отрицательным. Пустые набранные и пустой максимум в одной строке пропускаются, чтобы неиспользованная строка не ломала форму. Набранных баллов может быть больше максимума. Это дополнительные баллы, и процент может стать выше 100. Буква всё равно A, как только процент не ниже 90. Потолка в 100 страница не ставит. Если на курсе он есть, обрежьте набранные баллы сами, прежде чем вводить.</p>
<h2>Это не средний балл</h2>
<p>Страница среднего балла усредняет уже существующие буквы с весом кредитов по карте 4,0. Эта страница начинает с сырых баллов и только потом выбирает букву. Средний 3,5 сюда обратно не подставляется, и 84 процента не называются 3,0. Такие переводы принадлежат школе, которая их опубликовала. Страница процентов ответит, сколько процентов составляет 84 от 100, и букву не приклеит. Страница дробей сократит 42/50 до 21/25 и не назовёт это B. Открывайте страницу, чья последняя строка — то, о чём вас спросили.</p>
<p>Отбрасывания худшего результата переключателем нет. Удалите строку, если так написано в правилах курса. Кривой тоже нет. Если преподаватель прибавил баллы, введите баллы после кривой. Веса относительные. Веса 40 и 60 — то же, что 2 и 3. Веса 1 и 1 — обычное среднее двух процентов, а не среднее сырых баллов. Восемнадцать из 20 и 45 из 50 — оба по 90 процентов, поэтому невзвешенное среднее процентов равно 90. Среднее сырых баллов, 63 из 70, в этом частном примере тоже 90 и в общем случае это другая операция. Страница всегда усредняет проценты, а потом применяет веса.</p>
<h2>Что предполагают пороги</h2>
<ul>
<li>Границы букв — только 90, 80, 70 и 60.</li>
<li>Пустой вес — это 1, не ноль. Ноль выбросил бы строку.</li>
<li>Потолка для дополнительных баллов нет.</li>
</ul>
<p>Уже полученные буквы — на <a href="{{href:gpa-calculator}}">калькуляторе среднего балла</a>. Процент без буквы — <a href="{{href:percentage-calculator}}">калькулятор процентов</a>. Сокращённое отношение — <a href="{{href:fraction-calculator}}">калькулятор дробей</a>.</p>`,
      faq: [
        { q: "Какая буква у 42 из 50?", a: "84 процента, это B. Полоса B начинается с 80 и кончается перед 90." },
        { q: "Как работают веса?", a: "Каждая строка — набранное, делённое на максимум, умножить на вес. Веса складываются, взвешенные проценты делятся на эту сумму. Пустой вес считается единицей." },
        { q: "Чему равны 18/20 с весом 40 и 45/50 с весом 60?", a: "Обе строки — 90 процентов, поэтому взвешенный процент равен 90, а буква — A." },
        { q: "Это то же самое, что калькулятор среднего балла?", a: "Нет. Средний балл усредняет уже имеющиеся буквы по кредитам и карте 4,0. Эта страница начинает с баллов и только потом выбирает букву по порогам 90/80/70/60." }
      ]
    }
  }),
  tool({
    slug: "unit-converter",
    cluster: "other",
    calc: "unit",
    category: "UtilitiesApplication",
    related: ["pace-calculator", "bmi-calculator", "px-to-rem-converter"],
    en: {
      title: "Unit converter | Free Online Calculators",
      description: "Convert length, weight, temperature, and volume with exact factors. An inch is 2.54 centimetres, a mile is 1.609344 kilometres, and 32 Fahrenheit is 0 Celsius.",
      h1: "Unit converter",
      lede: "Length, weight, temperature, and volume, converted through exact factors. A length is not converted into a weight.",
      banner: "The factors are exact definitions, not rounded approximations. Mixed dimensions are rejected.",
      body: `<p>Every conversion goes through a base unit. Lengths use the metre. One kilometre is 1,000 metres, one centimetre is 0.01 metres, one millimetre is 0.001 metres, one inch is 0.0254 metres, one foot is 0.3048 metres, one yard is 0.9144 metres, and one mile is 1,609.344 metres. One inch is therefore exactly 2.54 centimetres, and one mile is exactly 1.609344 kilometres. Weights use the kilogram. One pound is 0.45359237 kilograms and one ounce is 0.028349523125 kilograms. Volumes use the litre. One US gallon is 3.785411784 litres, one US quart is 0.946352946 litres, one US cup is 0.2365882365 litres, and one US fluid ounce is 0.0295735295625 litres. Those are the international and US customary definitions, not grocery-label roundings.</p>
<p>Temperature does not pass through a multiplicative base, because the zeros differ. Celsius to Fahrenheit is the Celsius value times 9/5, plus 32. Fahrenheit to Celsius subtracts 32 and multiplies by 5/9. Kelvin is Celsius plus 273.15. The checks are 32 Fahrenheit = 0 Celsius, 212 Fahrenheit = 100 Celsius, and 0 Celsius = 273.15 Kelvin. A negative Celsius temperature is allowed. There is no absolute-zero guard beyond what the arithmetic produces. Selecting two units from different families, such as kilograms and metres, is rejected. The page will not invent a density to connect them. Selecting the same unit twice returns the value unchanged.</p>
<h2>Where these factors show up again</h2>
<p>The BMI page uses 0.45359237 kilograms per pound and 0.0254 metres per inch, which are the same factors. The calorie page uses 2.54 centimetres per inch. The pace page uses 1.609344 kilometres per mile. If those pages and this one ever disagreed, one of them would be wrong. The pixel converter is a different kind of unit. A pixel is not a metre, and a rem depends on a root font size you type. That page stays separate so this one does not pretend a CSS pixel has a single physical length. Cooking cups in other countries are not the US cup stored here. A metric cup is not offered, because adding it under the same name would make the US cup look interchangeable with it.</p>
<p>Very large and very small values are ordinary floating-point numbers. The exact factors are exact as written. The product of a huge value and a factor can still round in the last bits of a JavaScript number. For everyday conversions that rounding is far past the digits the page shows. The display keeps up to eight digits after the decimal and drops trailing noise by the formatter. The operation itself is one multiplication and one division through the base, or the temperature affine step.</p>
<h2>What is not in the list</h2>
<ul>
<li>No area, no speed, and no pressure. Pace has its own speed line.</li>
<li>No imperial gallon. The gallon here is the US gallon.</li>
<li>No stone, no tonne shortcut, and no temperature in Rankine.</li>
</ul>
<p>Running pace is the <a href="{{href:pace-calculator}}">pace calculator</a>. Body mass uses the same pound and inch factors on the <a href="{{href:bmi-calculator}}">BMI calculator</a>. CSS pixels are the <a href="{{href:px-to-rem-converter}}">PX to REM converter</a>.</p>`,
      faq: [
        { q: "How many centimetres are in an inch?", a: "Exactly 2.54. The inch is 0.0254 metres and the centimetre is 0.01 metres." },
        { q: "How many kilometres are in a mile?", a: "Exactly 1.609344. The mile is 1,609.344 metres." },
        { q: "What is 32 Fahrenheit in Celsius?", a: "0. Water's boiling point, 212 Fahrenheit, is 100 Celsius. Zero Celsius is 273.15 Kelvin." },
        { q: "Can I convert kilograms to metres?", a: "No. The page only converts inside length, inside weight, inside temperature, or inside volume." }
      ]
    },
    ru: {
      title: "Конвертер единиц | Бесплатные калькуляторы",
      description: "Перевод длины, веса, температуры и объёма по точным коэффициентам. Дюйм — 2,54 сантиметра, миля — 1,609344 километра, 32 по Фаренгейту — 0 по Цельсию.",
      h1: "Конвертер единиц",
      lede: "Длина, вес, температура и объём через точные коэффициенты. Длина в вес не переводится.",
      banner: "Коэффициенты — точные определения, не округления. Разные величины отвергаются.",
      body: `<p>Каждый перевод идёт через базовую единицу. Длины используют метр. Километр — 1 000 метров, сантиметр — 0,01 метра, миллиметр — 0,001 метра, дюйм — 0,0254 метра, фут — 0,3048 метра, ярд — 0,9144 метра, миля — 1 609,344 метра. Поэтому дюйм равен ровно 2,54 сантиметра, а миля — ровно 1,609344 километра. Веса используют килограмм. Фунт — 0,45359237 килограмма, унция — 0,028349523125 килограмма. Объёмы используют литр. Американский галлон — 3,785411784 литра, кварта — 0,946352946 литра, чашка — 0,2365882365 литра, жидкая унция — 0,0295735295625 литра. Это международные и американские определения, а не округления с этикетки.</p>
<p>Температура не проходит через множитель, потому что нули разные. Из Цельсия в Фаренгейт — значение Цельсия умножить на 9/5 и прибавить 32. Из Фаренгейта в Цельсий — вычесть 32 и умножить на 5/9. Кельвин — это Цельсий плюс 273,15. Проверки: 32 по Фаренгейту = 0 по Цельсию, 212 по Фаренгейту = 100 по Цельсию, 0 по Цельсию = 273,15 кельвина. Отрицательная температура Цельсия разрешена. Отдельной защиты абсолютного нуля нет: остаётся то, что даёт арифметика. Две единицы из разных семей, например килограммы и метры, отвергаются. Плотность, чтобы их связать, страница не выдумывает. Одна и та же единица дважды возвращает значение как есть.</p>
<h2>Где эти коэффициенты встречаются снова</h2>
<p>Страница ИМТ использует 0,45359237 килограмма в фунте и 0,0254 метра в дюйме — те же коэффициенты. Страница калорий использует 2,54 сантиметра в дюйме. Страница темпа использует 1,609344 километра в миле. Если те страницы и эта разойдутся, одна из них неправа. Перевод пикселей — единица другого рода. Пиксель — не метр, а rem зависит от корневого размера шрифта, который вы вводите. Та страница отдельно, чтобы здесь не делать вид, будто у CSS-пикселя одна физическая длина. Кухонные чашки других стран — не американская чашка, которая хранится здесь. Метрической чашки в списке нет: под тем же именем она сделала бы американскую чашку взаимозаменяемой с ней.</p>
<p>Очень большие и очень маленькие значения — обычные числа с плавающей точкой. Коэффициенты точны как написаны. Произведение огромного значения и коэффициента всё ещё может округлиться в последних битах числа JavaScript. Для бытовых переводов это округление далеко за знаками, которые страница показывает. Показ держит до восьми знаков после запятой. Само действие — одно умножение и одно деление через базу или аффинный шаг температуры.</p>
<h2>Чего в списке нет</h2>
<ul>
<li>Нет площади, скорости и давления. У темпа своя строка скорости.</li>
<li>Нет имперского галлона. Галлон здесь американский.</li>
<li>Нет стоуна, нет короткой тонны и нет температуры Ранкина.</li>
</ul>
<p>Темп бега — <a href="{{href:pace-calculator}}">калькулятор темпа</a>. Масса тела использует те же фунт и дюйм на <a href="{{href:bmi-calculator}}">калькуляторе ИМТ</a>. Пиксели CSS — <a href="{{href:px-to-rem-converter}}">конвертер PX в REM</a>.</p>`,
      faq: [
        { q: "Сколько сантиметров в дюйме?", a: "Ровно 2,54. Дюйм — 0,0254 метра, сантиметр — 0,01 метра." },
        { q: "Сколько километров в миле?", a: "Ровно 1,609344. Миля — 1 609,344 метра." },
        { q: "Сколько 32 по Фаренгейту в Цельсиях?", a: "0. Точка кипения, 212 по Фаренгейту, — 100 по Цельсию. Ноль по Цельсию — 273,15 кельвина." },
        { q: "Можно ли перевести килограммы в метры?", a: "Нет. Страница переводит только внутри длины, внутри веса, внутри температуры или внутри объёма." }
      ]
    }
  })
];
