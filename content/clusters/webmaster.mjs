export const webmasterTools = [
  {
    slug: "llm-token-calculator",
    cluster: "webmaster",
    calc: "llm",
    category: "DeveloperApplication",
    affiliate: "semrush",
    related: ["seo-text-analyzer", "roas-calculator", "meta-tag-generator", "page-speed-revenue-calculator"],
    guide: "semrush-for-seo",
    en: {
      title: "LLM Token Cost Calculator | Free Online Calculators",
      description: "Work out what one model call costs from the input and output prices you type, then scale it to a day and to thirty days. The starter table is only a placeholder.",
      h1: "LLM token cost calculator",
      lede: "One call costs the input tokens times your input price plus the output tokens times your output price, both prices per million tokens.",
      banner: "Prices and rates you type are yours. Vendor tariffs change. This page does not measure your live site.",
      ctaTitle: "A model bill is not a ranking bill",
      ctaBody: "The total above is token spend at the prices you typed. It does not say whether the page you publish will be found. Semrush is a research suite for queries and competitors. This form does not open it and does not read a live tariff.",
      ctaButton: "Research pages in Semrush",
      body: `<p>A token is a piece of text the model counts. It is not a whole word, and it is not one character. A short common word is often one token. A long word, a word in another script, or a string of punctuation can be several tokens. This page does not split a prompt for you. You type the counts a vendor tokenizer, or your API log, already produced. Input tokens are everything you send on that call: the system prompt, the instructions, notes you retrieved, and the question. Output tokens are the text the model writes back. Vendors price the two streams apart, so the form has two prices.</p>
<p>The cost of one call is the input tokens divided by one million, times the input price, plus the output tokens divided by one million, times the output price. A day is that cost times the calls you type. The month on this page is that day times 30. It is a flat 30, not a calendar month and not a vendor billing cycle. A platform fee, a tax, or a price quoted in another currency sits outside the formula. Type the prices you were offered, per million tokens.</p>
<h2>A worked example</h2>
<p>Take 1000 input tokens at 5 per million and 500 output tokens at 15 per million. The input part is 1000 divided by one million, times 5, which is 0.005. The output part is 500 divided by one million, times 15, which is 0.0075. One call is 0.0125. One thousand calls in a day is 12.50 for that day. Thirty days at the same pace is 375. Change any of the five numbers and the result moves with them. The page does not round this into a plan name.</p>
<h2>The menu is a placeholder dated 2026-11-19</h2>
<p>The model list is read from assets/js/llm-prices.js. The file says the figures were filled in on 2026-11-19, and the names say placeholder. The numbers are round so the form is not empty offline. They are not a quote from a lab. This page does not refresh them. Choosing a row fills the two price fields, and you can overwrite either field. The cost uses the fields, not the label in the menu. If a vendor changed a rate after that date, the file did not hear about it.</p>
<h2>A long system prompt is paid on every call</h2>
<p>The output price is easy to stare at. The input is where a long instruction hides. A system prompt of a few thousand tokens is sent again on every call, even when the person typed one sentence. Chat history, retrieved pages, and tool results sit on the input side too. Paste a whole article in so the model can rewrite it, and you pay for that article on every attempt, including the ones you discard. The output is only the reply. A short reply can still cost more than a long prompt when the output price is several times the input price. In the example, 500 output tokens cost 0.0075 and 1000 input tokens cost 0.005.</p>
<p>Nothing here is sent to a model. The script multiplies the form. It does not check that your tokenizer matches the vendor, and it does not apply a cache discount, a batch discount, or a free tier. If the invoice has a line the formula cannot see, the page will not invent it. Treat the total as a sketch of token spend, then read the bill you were actually sent.</p>
<h2>Token spend is not the cost of being found</h2>
<p>Paying a model to draft a paragraph is a different bill from being found for the query that paragraph should answer. The <a href="{{href:seo-text-analyzer}}">text checker</a> can say how many words the draft has and how often a phrase appears. It cannot say which queries deserve that draft. <a href="{{aff:semrush}}">Semrush</a> is one place people look up queries, pages, and competitors. Opening it does not change the token arithmetic, and a research subscription is not the model invoice.</p>
<ul>
<li>Count tokens with the vendor tokenizer, then type that count.</li>
<li>Put the system prompt in the input. There is no free field for it.</li>
<li>Include retries in the calls per day, not only the calls you keep.</li>
<li>Replace the placeholder prices before a total becomes a budget.</li>
</ul>`,
      faq: [
        { q: "What is the difference between input and output tokens?", a: "Input tokens are what you send, including the system prompt. Output tokens are what the model writes back. They are priced separately, per million." },
        { q: "Does a long system prompt cost money on every call?", a: "Yes, if the vendor counts it as input. It is sent again with each call, so a long instruction is paid every time, not once." },
        { q: "Are the prices in the model menu current?", a: "No. They are placeholders in assets/js/llm-prices.js, dated 2026-11-19. Replace them with the prices on the vendor page you have open." },
        { q: "Does this page call a model?", a: "No. It multiplies the token counts and prices you type. Your prompt is not uploaded." },
        { q: "Why is the month 30 times the day?", a: "The page uses a flat 30 so the scale is obvious. It is not your vendor's billing cycle and not a calendar month." }
      ]
    },
    ru: {
      title: "Калькулятор стоимости токенов | Бесплатные калькуляторы",
      description: "Посчитайте цену одного вызова модели по ценам входных и выходных токенов, затем масштаб на день и на 30 дней. Стартовая таблица — заглушка с датой, не котировка.",
      h1: "Калькулятор стоимости токенов",
      lede: "Один вызов стоит как входные токены по вашей входной цене плюс выходные токены по выходной цене. Обе цены — за миллион токенов.",
      banner: "Цены и ставки вводите вы. Тарифы продавцов меняются. Страница не замеряет ваш живой сайт.",
      ctaTitle: "Счёт модели — это не счёт за место в выдаче",
      ctaBody: "Сумма выше — расход на токены по тем ценам, которые вы ввели. Она не говорит, найдут ли опубликованную страницу. Semrush — сервис для запросов и конкурентов. Форма его не открывает и живой тариф не читает.",
      ctaButton: "Смотреть запросы в Semrush",
      body: `<p>Токен — это кусок текста, который считает модель. Это не целое слово и не один знак. Короткое обычное слово часто занимает один токен. Длинное слово, слово на другой письменности или ряд знаков препинания может занять несколько. Страница сама промпт не режет. Вы вводите числа, которые уже выдал токенизатор продавца или лог вашего API. Входные токены — это всё, что вы отправляете в этом вызове: системный промпт, инструкции, найденные заметки и сам вопрос. Выходные токены — это текст, который модель пишет в ответ. Продавцы оценивают два потока отдельно, поэтому в форме две цены.</p>
<p>Цена одного вызова равна входным токенам, делённым на миллион и умноженным на входную цену, плюс выходные токены, делённые на миллион и умноженные на выходную цену. День — это эта цена, умноженная на число вызовов. Месяц на этой странице — день, умноженный на 30. Это ровные 30, а не календарный месяц и не расчётный период продавца. Платформенный сбор, налог и цена в другой валюте в формулу не входят. Вводите цены, которые вам назвали, за миллион токенов.</p>
<h2>Пример на числах</h2>
<p>Возьмите 1000 входных токенов по 5 за миллион и 500 выходных по 15 за миллион. Входная часть: 1000 разделить на миллион и умножить на 5, получается 0,005. Выходная часть: 500 разделить на миллион и умножить на 15, получается 0,0075. Один вызов стоит 0,0125. Тысяча таких вызовов в день — 12,50 за день. Тридцать дней в том же темпе — 375. Поменяйте любое из пяти чисел, и результат сдвинется вместе с ним. Страница не округляет это до названия тарифа.</p>
<h2>Список моделей — заглушка от 2026-11-19</h2>
<p>Список читается из файла assets/js/llm-prices.js. В файле написано, что цифры заполнены 2026-11-19, а в названиях стоит placeholder. Числа круглые, чтобы форма не была пустой без сети. Это не котировка лаборатории. Страница их не обновляет. Выбор строки подставляет две цены, и любую можно переписать. Считает форма по полям, а не по подписи в списке. Если продавец сменил ставку после этой даты, файл об этом не узнал.</p>
<h2>Длинный системный промпт платится каждый вызов</h2>
<p>На выходную цену легко смотреть. На входе прячется длинная инструкция. Системный промпт в несколько тысяч токенов уходит снова с каждым вызовом, даже если человек написал одно предложение. История чата, подтянутые страницы и ответы инструментов тоже сидят на входе. Вставите целую статью, чтобы модель её переписала, — заплатите за эту статью на каждой попытке, включая выброшенные. Выход — только ответ. Короткий ответ всё равно может стоить дороже длинного промпта, если выходная цена в разы выше входной. В примере 500 выходных токенов стоят 0,0075, а 1000 входных — 0,005.</p>
<p>На модель отсюда ничего не уходит. Скрипт перемножает поля. Он не проверяет, совпадает ли ваш токенизатор с токенизатором продавца, и не применяет скидку за кэш, пакет или бесплатный порог. Если в счёте есть строка, которой в формуле нет, страница её не выдумает. Сумма — набросок расхода на токены. Дальше смотрите счёт, который вам правда выставили.</p>
<h2>Расход на токены — не цена того, что страницу найдут</h2>
<p>Заплатить модели за абзац и попасть в выдачу по запросу, на который этот абзац должен отвечать, — разные счета. <a href="{{href:seo-text-analyzer}}">Проверка текста</a> скажет, сколько в черновике слов и как часто встречается фраза. Она не скажет, какие запросы этот черновик заслуживает. <a href="{{aff:semrush}}">Semrush</a> — одно из мест, где смотрят запросы, страницы и конкурентов. Открыть его — не значит изменить арифметику токенов, а подписка на исследование — не счёт от модели.</p>
<ul>
<li>Посчитайте токены токенизатором продавца и введите это число.</li>
<li>Системный промпт кладите во вход. Отдельного бесплатного поля нет.</li>
<li>В вызовы за день включите повторы, а не только удачные ответы.</li>
<li>Замените цены-заглушки, прежде чем считать сумму бюджетом.</li>
</ul>`,
      faq: [
        { q: "Чем входные токены отличаются от выходных?", a: "Входные — это то, что вы отправляете, включая системный промпт. Выходные — то, что модель пишет в ответ. Цены у них разные, обе за миллион." },
        { q: "Длинный системный промпт стоит денег на каждом вызове?", a: "Да, если продавец считает его входом. Он уходит снова с каждым вызовом, поэтому длинная инструкция платится каждый раз, а не один." },
        { q: "Цены в списке моделей актуальные?", a: "Нет. Это заглушки в файле assets/js/llm-prices.js с датой 2026-11-19. Подставьте цены со страницы продавца, которая открыта у вас." },
        { q: "Страница вызывает модель?", a: "Нет. Она умножает введённые числа токенов и цены. Промпт никуда не отправляется." },
        { q: "Почему месяц — это день, умноженный на 30?", a: "Так масштаб виден сразу. Это не расчётный период продавца и не календарный месяц." }
      ]
    }
  },

  {
    slug: "seo-text-analyzer",
    cluster: "webmaster",
    calc: "seo",
    category: "DeveloperApplication",
    affiliate: "semrush",
    related: ["meta-tag-generator", "llm-token-calculator", "robots-sitemap-generator", "wcag-contrast-checker"],
    guide: "low-competition-keywords-semrush",
    en: {
      title: "SEO Text Analyzer | Free Online Calculators",
      description: "Count words, characters, sentences, reading time, and keyword density in text that stays in your browser. Density is a diagnostic, not a reason to stuff a phrase.",
      h1: "SEO text analyzer",
      lede: "Words are split on whitespace, characters are Unicode code points, and keyword density is hits times the words in the phrase, divided by all words.",
      banner: "Prices and rates you type are yours. Vendor tariffs change. This page does not measure your live site.",
      ctaTitle: "Open Semrush to see past this paste",
      ctaBody: "The counts above read one draft. Open Semrush to look up queries, pages, and competitors. This form does not log in, and the density figure is not a Semrush score.",
      ctaButton: "Open Semrush",
      body: `<p>Paste the draft into the box. The count runs in the browser, and the text is not uploaded. Words are the pieces left after the text is trimmed and split on whitespace. Two spaces do not make an extra word. A hyphenated form stays one word if you did not put a space in it. Characters are Unicode code points, which is what you get from walking the string one code point at a time. A character count with spaces and a count without spaces are both shown. An emoji that uses two code points counts as two, because that is the length the script measures, not a guess about what a person calls one character.</p>
<p>Sentences are split on a full stop, an exclamation mark, or a question mark. A piece counts as a sentence only when it still contains a letter or a number after the split. A line of dots does not become several sentences. Reading time is the word count divided by 200. Speaking time is the word count divided by 130. Both answers are in minutes. They describe a steady pace, not your reader and not a stage. A technical paragraph can take longer to read than the 200-word pace, and the page will not adjust for that.</p>
<h2>How density is counted</h2>
<p>Keyword density is the number of non-overlapping hits, times the number of words in the phrase, divided by the word count of the whole text. The search walks the lowercased text and, after each hit, continues after the phrase, so the same characters are not counted twice. Take the phrase new york inside the sentence new york and new york. That is two hits. The sentence has five words. The phrase is two words, so the numerator is 2 times 2, which is 4, and the density is 4 divided by 5. A one-word keyword in the same sentence would use a numerator of hits times 1.</p>
<p>Density is a diagnostic. It tells you how large a share of the words the phrase occupies. It is not a ranking factor you can stuff. Repeating a phrase until the percentage looks familiar does not make a page deserve a query, and this tool does not pretend that it does. If the phrase is absent, the count is zero. If the box is empty of words, density stays at zero rather than dividing by zero.</p>
<h2>Top words skip a small stopword list</h2>
<p>Beside the counts, the page lists frequent words. A short stopword list is skipped, so words such as the, and, and for do not fill the list in English, and a matching list of function words is skipped in Russian. The list is small and fixed in the script. It is not a judgment about which words matter to a reader. A word shorter than two characters is skipped as well. The result is a hint about repetition in this draft, nothing more.</p>
<p>Nothing you paste is stored. Close the tab and the draft is gone from this page. The check also does not fetch your live URL, so a paragraph that differs from the published page will not be reconciled. If you want tags for the same draft, the <a href="{{href:meta-tag-generator}}">meta tag generator</a> writes a title and description you still have to paste into the real page. Token cost for a model that helped write the draft is a separate sum on the <a href="{{href:llm-token-calculator}}">token calculator</a>.</p>
<h2>Research past a single paste</h2>
<p>A density figure cannot tell you which queries people use. Open <a href="{{aff:semrush}}">Semrush</a> for that research. This page does not send your draft there. The notes next to this tool cover a <a href="{{href:blog/semrush-free-trial}}">Semrush free trial</a>, <a href="{{href:blog/semrush-vs-ahrefs}}">Semrush and Ahrefs</a>, <a href="{{href:blog/low-competition-keywords-semrush}}">low-competition keywords</a>, and <a href="{{href:blog/semrush-for-seo}}">Semrush for SEO</a>. They say what to check. They do not change the word count.</p>
<ul>
<li>Word count follows whitespace, not a dictionary.</li>
<li>Reading time uses 200 words a minute. Speaking time uses 130.</li>
<li>A two-word phrase adds two words to the density numerator on every hit.</li>
<li>Do not raise the percentage by repeating the phrase. The number will not repay you.</li>
</ul>`,
      faq: [
        { q: "How is a word counted?", a: "The text is trimmed and split on whitespace. Repeated spaces do not add words. The script does not look words up in a dictionary." },
        { q: "Why is density 4/5 for new york and new york?", a: "There are two non-overlapping hits, the phrase is two words, and the sentence is five words. Two times two, divided by five, is 4/5." },
        { q: "Is a higher density better for ranking?", a: "No. Density is a diagnostic of how much of the draft the phrase occupies. Stuffing the phrase is not a ranking method this tool supports." },
        { q: "Is my text uploaded?", a: "No. The counts run in your browser. The page does not send the draft to a server." },
        { q: "What do the reading and speaking times assume?", a: "Reading time is words divided by 200. Speaking time is words divided by 130. Both are steady paces, not a measurement of your reader." }
      ]
    },
    ru: {
      title: "Анализ текста для SEO | Бесплатные калькуляторы",
      description: "Посчитайте слова, знаки, предложения, время чтения и плотность ключа. Текст остаётся в браузере. Плотность — диагностика, а не повод напихивать фразу.",
      h1: "Анализ текста для SEO",
      lede: "Слова режутся по пробелам, знаки считаются кодовыми точками Юникода, а плотность ключа — это вхождения, умноженные на слова во фразе и делённые на все слова.",
      banner: "Цены и ставки вводите вы. Тарифы продавцов меняются. Страница не замеряет ваш живой сайт.",
      ctaTitle: "Откройте Semrush, чтобы увидеть дальше этого текста",
      ctaBody: "Счётчики выше читают один черновик. Откройте Semrush, чтобы смотреть запросы, страницы и конкурентов. Форма в сервис не входит, а плотность — не оценка Semrush.",
      ctaButton: "Открыть Semrush",
      body: `<p>Вставьте черновик в поле. Подсчёт идёт в браузере, текст никуда не отправляется. Слова — это то, что остаётся, когда строку обрезают по краям и режут по пробелам. Два пробела подряд лишнего слова не дают. Слово через дефис остаётся одним словом, если вы сами не поставили пробел. Знаки — это кодовые точки Юникода: скрипт проходит строку точка за точкой. Показываются и длина с пробелами, и длина без них. Эмодзи из двух кодовых точек считается как две, потому что измеряется длина строки, а не бытовое «один значок».</p>
<p>Предложения режутся по точке, восклицательному и вопросительному знаку. Кусок считается предложением, только если после разреза в нём осталась буква или цифра. Ряд точек несколькими предложениями не становится. Время чтения — число слов, делённое на 200. Время речи — число слов, делённое на 130. Оба ответа в минутах. Это ровный темп, не ваш читатель и не сцена. Технический абзац может читаться дольше, чем темп 200 слов, и страница под это не подстраивается.</p>
<h2>Как считается плотность</h2>
<p>Плотность ключа — это число неперекрывающихся вхождений, умноженное на число слов во фразе и делённое на число слов во всём тексте. Поиск идёт по строке в нижнем регистре и после каждого попадания продолжается за фразой, поэтому одни и те же знаки дважды не считаются. Возьмите фразу new york внутри предложения new york and new york. Это два вхождения. В предложении пять слов. Во фразе два слова, значит числитель — 2 умножить на 2, то есть 4, и плотность — 4 разделить на 5. Однословный ключ в том же предложении умножил бы вхождения на 1.</p>
<p>Плотность — диагностика. Она показывает, какую долю слов занимает фраза. Это не фактор ранжирования, который можно набить повторами. Повторять фразу, пока процент не станет «привычным», не значит заслужить запрос, и инструмент этого не обещает. Если фразы нет, счётчик равен нулю. Если слов нет совсем, плотность остаётся нулём, а не делением на ноль.</p>
<h2>Частые слова пропускают короткий список стоп-слов</h2>
<p>Рядом со счётчиками страница показывает частые слова. Короткий список стоп-слов пропускается: в английском туда попадают the, and, for и похожие, в русском — служебные слова вроде «и», «в», «не». Список короткий и зашит в скрипт. Это не оценка того, какие слова нужны читателю. Слово короче двух знаков тоже пропускается. На выходе — подсказка о повторах в этом черновике, и только она.</p>
<p>Вставленный текст не хранится. Закроете вкладку — черновика на странице нет. Живой адрес страница не скачивает, поэтому абзац, который разошёлся с опубликованной страницей, сам не сверится. Если к тому же черновику нужны теги, <a href="{{href:meta-tag-generator}}">генератор мета-тегов</a> напишет title и description, которые всё равно надо вставить в настоящую страницу. Цена модели, которая помогала писать, считается отдельно в <a href="{{href:llm-token-calculator}}">калькуляторе токенов</a>.</p>
<h2>Исследование шире одной вставки</h2>
<p>Цифра плотности не скажет, какими запросами пользуются люди. Для этого откройте <a href="{{aff:semrush}}">Semrush</a>. Черновик туда не отправляется. Рядом есть заметки про <a href="{{href:blog/semrush-free-trial}}">пробный доступ Semrush</a>, <a href="{{href:blog/semrush-vs-ahrefs}}">Semrush и Ahrefs</a>, <a href="{{href:blog/low-competition-keywords-semrush}}">низкоконкурентные запросы</a> и <a href="{{href:blog/semrush-for-seo}}">Semrush для SEO</a>. Там сказано, что проверять. Подсчёт слов они не меняют.</p>
<ul>
<li>Слова считаются по пробелам, не по словарю.</li>
<li>Чтение — 200 слов в минуту. Речь — 130.</li>
<li>Фраза из двух слов добавляет два слова в числитель плотности на каждое вхождение.</li>
<li>Не поднимайте процент повтором фразы. Число за это не отплатит.</li>
</ul>`,
      faq: [
        { q: "Как считается слово?", a: "Текст обрезается и режется по пробелам. Повторные пробелы слов не добавляют. В словаре слова не ищутся." },
        { q: "Почему у new york and new york плотность 4/5?", a: "Два неперекрывающихся вхождения, во фразе два слова, в предложении пять. Два умножить на два и разделить на пять — это 4/5." },
        { q: "Чем выше плотность, тем лучше для выдачи?", a: "Нет. Плотность показывает, какую долю черновика занимает фраза. Набивать фразу повторами этот инструмент не предлагает." },
        { q: "Текст куда-нибудь уходит?", a: "Нет. Подсчёт идёт в браузере. Черновик на сервер не отправляется." },
        { q: "На что опираются время чтения и время речи?", a: "Чтение — слова разделить на 200. Речь — слова разделить на 130. Это ровный темп, а не замер вашего читателя." }
      ]
    }
  },
  {
    slug: "meta-tag-generator",
    cluster: "webmaster",
    calc: "meta",
    category: "DeveloperApplication",
    affiliate: "semrush",
    related: ["seo-text-analyzer", "robots-sitemap-generator", "utm-qr-generator", "privacy-policy-generator"],
    guide: "semrush-vs-ahrefs",
    en: {
      title: "Meta Tag Generator | Free Online Calculators",
      description: "Write a title, meta description, canonical link, Open Graph and Twitter tags, and a small WebPage JSON-LD block. Length warnings are display habits, not hard rules.",
      h1: "Meta tag generator",
      lede: "The form writes the head tags from the fields you fill. You still paste them into a real page. The tool does not invent the H1.",
      banner: "Prices and rates you type are yours. Vendor tariffs change. This page does not measure your live site.",
      ctaTitle: "Open Semrush before you freeze the title",
      ctaBody: "A title and a description help a result get read. They do not choose the query. Open Semrush to research that. This generator does not send your title anywhere.",
      ctaButton: "Open Semrush",
      body: `<p>The generator writes a title element, a meta description, a canonical link when you give a URL, and the Open Graph tags people expect on a share: title, description, url, type, site name, and image. The Twitter card is summary_large_image, with the same title, description, and image, plus a site handle if you typed one. A small JSON-LD block of type WebPage carries the name, the description, and the URL when there is one. Empty optional fields are left out, so you do not get an Open Graph image tag with a blank address.</p>
<p>The page warns when the title is past about 60 characters and when the description is past about 160. Those numbers are display habits. Search results often cut a long title or a long description, and social cards do something similar, but there is no hard rule that a longer string is invalid HTML or that a shorter string will rank. The warning is a nudge to look at the line, not a pass or fail grade. Count is by code points, the same way the text tool counts characters.</p>
<h2>Quotes are escaped so the tag does not break</h2>
<p>HTML is escaped before it is placed in an attribute or in the title element. A quote, an ampersand, or a less-than sign in your title becomes the matching character reference. That is why a title with a quotation mark cannot close the content attribute early and spill the rest of the tag. The JSON-LD is produced by a JSON serializer, so quotes inside the description are escaped there too. You can copy the block and paste it into the head of a page. The generator does not upload it, and it does not edit your host.</p>
<p>One H1 on the page itself is a separate question. This tool does not invent the H1, and it does not check the H1 you already published. The title element and the visible H1 can match, or they can differ, and the form has no opinion. If you want a word count of the body that sits under that H1, use the <a href="{{href:seo-text-analyzer}}">text analyzer</a>. It will not write the H1 either.</p>
<h2>What you still have to do by hand</h2>
<p>Pasting the tags into a real page is your step. A preview on this site is not the head of your site. The canonical URL should be the URL you want counted as the original, not a copy with tracking parameters. The Open Graph image should be an address that a crawler can fetch, not a file that only exists on your laptop. The type field defaults to website if you leave the usual value. Change it only when you mean a different Open Graph type.</p>
<p>The block will not tell you which title people search for. Open <a href="{{aff:semrush}}">Semrush</a> and look that up before you freeze the wording. This page does not send your title there. Read the notes on a <a href="{{href:blog/semrush-free-trial}}">Semrush free trial</a>, <a href="{{href:blog/semrush-vs-ahrefs}}">Semrush and Ahrefs</a>, <a href="{{href:blog/low-competition-keywords-semrush}}">low-competition keywords</a>, and <a href="{{href:blog/semrush-for-seo}}">Semrush for SEO</a>. A robots file, if you still need one, comes from the <a href="{{href:robots-sitemap-generator}}">robots and sitemap generator</a>.</p>
<ul>
<li>About 60 and about 160 are habits of display, not validity rules.</li>
<li>A quote in the title is escaped. It does not break the attribute.</li>
<li>The visible H1 is not generated here.</li>
<li>Paste the result into the real page. The preview is not published.</li>
</ul>`,
      faq: [
        { q: "Will a title over 60 characters be rejected?", a: "No. The warning means search results often cut long titles. It is a display habit, not a rule that the HTML is invalid." },
        { q: "What happens if the title contains a quote?", a: "The quote is escaped before it is placed in the attribute, so it cannot close the attribute early." },
        { q: "Does this write the H1?", a: "No. It writes head tags. The single H1 on the page is a separate decision, and the form does not invent one." },
        { q: "Which tags are included?", a: "Title, meta description, canonical, Open Graph title, description, url, type, site name, and image, a Twitter card, and a small WebPage JSON-LD block." },
        { q: "Does the page publish the tags for me?", a: "No. You copy them and paste them into the head of a real page. Nothing is uploaded." }
      ]
    },
    ru: {
      title: "Генератор мета-тегов | Бесплатные калькуляторы",
      description: "Соберите title, description, canonical, Open Graph, Twitter и небольшой JSON-LD WebPage. Предупреждение о длине — привычка показа в выдаче, а не жёсткое правило.",
      h1: "Генератор мета-тегов",
      lede: "Форма собирает теги шапки из полей, которые вы заполнили. В настоящую страницу их вставляете вы. H1 инструмент не придумывает.",
      banner: "Цены и ставки вводите вы. Тарифы продавцов меняются. Страница не замеряет ваш живой сайт.",
      ctaTitle: "Откройте Semrush, прежде чем зафиксировать title",
      ctaBody: "Title и description помогают прочитать сниппет. Запрос они не выбирают. Откройте Semrush и посмотрите его там. Генератор ваш заголовок никуда не отправляет.",
      ctaButton: "Открыть Semrush",
      body: `<p>Генератор пишет элемент title, meta description, ссылку canonical, если вы дали адрес, и теги Open Graph, которые ждут при репосте: title, description, url, type, site_name и image. Карточка Twitter — summary_large_image, с тем же заголовком, описанием и картинкой, плюс имя аккаунта, если вы его ввели. Небольшой блок JSON-LD типа WebPage несёт имя, описание и адрес, когда адрес есть. Пустые необязательные поля не выводятся, поэтому тега картинки с пустым адресом вы не получите.</p>
<p>Страница предупреждает, если заголовок длиннее примерно 60 знаков, а описание длиннее примерно 160. Это привычки показа. В выдаче длинный title или description часто обрезают, карточки соцсетей делают похожее, но жёсткого правила нет: более длинная строка не становится неверным HTML, а более короткая сама не ранжируется. Предупреждение просит посмотреть на строку, это не зачёт и не незачёт. Длина считается кодовыми точками, как знаки в инструменте текста.</p>
<h2>Кавычки экранируются, чтобы тег не сломался</h2>
<p>HTML экранируется до того, как попадёт в атрибут или в элемент title. Кавычка, амперсанд или знак «меньше» в заголовке становятся ссылкой на символ. Поэтому заголовок с кавычкой не закроет атрибут content раньше времени и не вывалит хвост тега. JSON-LD собирает сериализатор JSON, так что кавычки внутри описания экранируются и там. Блок можно скопировать и вставить в шапку страницы. Генератор его не загружает и хост ваш не правит.</p>
<p>Один H1 на самой странице — отдельный вопрос. Этот инструмент H1 не придумывает и уже опубликованный H1 не проверяет. Элемент title и видимый H1 могут совпадать или различаться, у формы на это нет мнения. Если нужен подсчёт слов в тексте под этим H1, откройте <a href="{{href:seo-text-analyzer}}">анализ текста</a>. H1 он тоже не напишет.</p>
<p>Карточка Twitter и блок JSON-LD повторяют те же поля, а не придумывают второй заголовок. Если картинки нет, тег картинки не появляется. Если адреса нет, canonical и og:url тоже не появляются. Это видно в тексте, который вы копируете. Живую шапку уже опубликованной страницы инструмент не открывает, поэтому после вставки откройте исходный код той страницы, куда вставили блок, и проверьте, что старый title не остался вторым рядом с новым.</p>
<h2>Что всё равно делать руками</h2>
<p>Вставить теги в настоящую страницу — ваш шаг. Просмотр на этом сайте — не шапка вашего сайта. Canonical должен быть адресом, который вы считаете исходным, а не копией с метками перехода. Картинка Open Graph должна быть адресом, который робот может забрать, а не файлом, который лежит только на ноутбуке. Поле type по умолчанию остаётся website, если вы не меняли обычное значение. Меняйте его, только когда нужен другой тип Open Graph.</p>
<p>Блок не скажет, какой заголовок люди ищут. Откройте <a href="{{aff:semrush}}">Semrush</a> и посмотрите запросы, прежде чем зафиксировать формулировку. Сюда ваш title не отправляется. Заметки рядом: <a href="{{href:blog/semrush-free-trial}}">пробный доступ Semrush</a>, <a href="{{href:blog/semrush-vs-ahrefs}}">Semrush и Ahrefs</a>, <a href="{{href:blog/low-competition-keywords-semrush}}">низкоконкурентные запросы</a> и <a href="{{href:blog/semrush-for-seo}}">Semrush для SEO</a>. Файл robots, если он ещё нужен, собирается в <a href="{{href:robots-sitemap-generator}}">генераторе robots и sitemap</a>.</p>
<ul>
<li>Примерно 60 и примерно 160 — привычки показа, не правила годности HTML.</li>
<li>Кавычка в заголовке экранируется и атрибут не ломает.</li>
<li>Видимый H1 здесь не создаётся.</li>
<li>Вставьте результат в настоящую страницу. Просмотр — ещё не публикация.</li>
</ul>`,
      faq: [
        { q: "Заголовок длиннее 60 знаков отклонят?", a: "Нет. Предупреждение значит, что в выдаче длинные заголовки часто обрезают. Это привычка показа, а не правило, что HTML неверен." },
        { q: "Что будет, если в заголовке есть кавычка?", a: "Кавычка экранируется до подстановки в атрибут, поэтому закрыть атрибут раньше времени она не может." },
        { q: "Инструмент пишет H1?", a: "Нет. Он пишет теги шапки. Один H1 на странице — отдельное решение, форма его не придумывает." },
        { q: "Какие теги входят в блок?", a: "Title, meta description, canonical, Open Graph title, description, url, type, site_name и image, карточка Twitter и небольшой JSON-LD типа WebPage." },
        { q: "Страница публикует теги за меня?", a: "Нет. Вы копируете их и вставляете в шапку настоящей страницы. Загрузки нет." }
      ]
    }
  },

  {
    slug: "page-speed-revenue-calculator",
    cluster: "webmaster",
    calc: "speed",
    category: "DeveloperApplication",
    affiliate: "semrush",
    secondary: "kinsta",
    related: ["image-compressor", "wcag-contrast-checker", "px-to-rem-converter", "roas-calculator"],
    guide: "semrush-for-seo",
    en: {
      title: "Page Speed Revenue Calculator | Free Online Calculators",
      description: "Sketch monthly revenue if a slower load were faster, using the conversion and the per-second loss you type. The default loss is an assumption, not a law.",
      h1: "Page speed revenue calculator",
      lede: "The conversion you type is the rate you have now, on the slower site. Each extra second is assumed to have multiplied that rate by one minus the loss you type.",
      banner: "Prices and rates you type are yours. Vendor tariffs change. This page does not measure your live site.",
      ctaTitle: "Open Semrush before you blame the host",
      ctaBody: "A host does not replace keyword research, and it does not shrink a huge image. Open Semrush for the queries. Kinsta is a host people compare later. This form does not time your site.",
      ctaButton: "Open Semrush",
      secondaryButton: "See Kinsta",
      body: `<p>The conversion rate in the form is the rate you have now, on the slower site. Revenue now is visits times that rate times the value of one conversion. Extra seconds are the current load minus the faster load, and only when that difference is positive. If the faster number is not actually faster, extra seconds are zero and the two revenues match. Each extra second is assumed to have multiplied conversion by one minus the loss. Revenue if faster is revenue now divided by that factor raised to the extra seconds. The gap is the faster revenue minus the revenue now. The page also shows the gap times 12, as a flat year of the same month, not a forecast.</p>
<p>The loss field starts at 7 percent because the form needs a number. That 7 percent is an assumption you can edit. It is not a law. Published studies do not agree on one percent of conversion lost per second, and this page does not pick a winner among them or quote a study as if it were your shop. If you have your own before-and-after, type that loss. If you do not, treat the default as a dial, not as a measurement of your visitors.</p>
<h2>A worked example</h2>
<p>Ten thousand visits, a conversion of 2 percent, and 50 per conversion give revenue now of 10000. Move from 4 seconds to 2 seconds and the extra time is 2 seconds. At a loss of 7 percent the kept factor per second is 0.93, and 0.93 raised to 2 is 0.8649. Faster revenue is 10000 divided by 0.8649, which is about 11562. The gap is about 1562 in that month. Replace the 7 with another loss and both the factor and the gap change. The visits, the rate, and the value are yours as well. The page did not observe them.</p>
<h2>This page does not time your site</h2>
<p>There is no probe, no lab run, and no field metric. You type the seconds. A figure you copied from a report is only as good as that report, and a figure you guessed is a guess. Milliseconds are not invented here to make a host look quicker. If you do not know the two load times, the revenue gap is not ready to be believed.</p>
<p>A faster host does not fix a huge image. If the heavy part of the page is a picture, start with the <a href="{{href:image-compressor}}">image compressor</a>, which resizes and re-encodes in the browser and shows the bytes you actually saved on that file. The speed model only becomes a story about images when the image was the heavy part. Contrast and type size are separate checks. They do not move the seconds in this form.</p>
<h2>Hosts are a later decision</h2>
<p>A host does not replace keyword research. Open <a href="{{aff:semrush}}">Semrush</a> for the queries this sketch never sees. The notes cover a <a href="{{href:blog/semrush-free-trial}}">Semrush free trial</a>, <a href="{{href:blog/semrush-vs-ahrefs}}">Semrush and Ahrefs</a>, <a href="{{href:blog/low-competition-keywords-semrush}}">low-competition keywords</a>, and <a href="{{href:blog/semrush-for-seo}}">Semrush for SEO</a>. <a href="{{aff:kinsta}}">Kinsta</a> is a host, not that research. This page does not time it and does not know your stack. Use the form to see how sensitive the month is to the loss you assume.</p>
<ul>
<li>Revenue now is visits times the current conversion times the value.</li>
<li>The loss per second is yours. The starting 7 percent is not a law.</li>
<li>Type real seconds. The page does not time the live site.</li>
<li>A smaller image helps this model only when the image was the heavy part.</li>
</ul>`,
      faq: [
        { q: "Is the 7 percent a real finding?", a: "No. It is the starting value of an assumption you can edit. Published studies do not agree on one percent per second, and this page does not pick one." },
        { q: "Which conversion rate do I type?", a: "The rate you have now, on the slower site. The formula treats each extra second as having multiplied that rate by one minus the loss." },
        { q: "Does the page measure my load time?", a: "No. You type both times. There is no probe and no invented millisecond." },
        { q: "Will a faster host fix a large image?", a: "No. If the image is the heavy part, compress that file. A host change does not resize it." },
        { q: "What does the example come to?", a: "Ten thousand visits at 2 percent and 50 each is 10000 now. From 4 seconds to 2 seconds at 7 percent loss, faster revenue is about 11562 and the gap is about 1562." }
      ]
    },
    ru: {
      title: "Выручка и скорость страницы | Бесплатные калькуляторы",
      description: "Прикиньте месячную выручку, если загрузка станет быстрее, по конверсии и потере за секунду, которые вводите вы. Процент по умолчанию — допущение, не закон.",
      h1: "Калькулятор выручки и скорости страницы",
      lede: "Конверсия, которую вы вводите, — это конверсия сейчас, на более медленном сайте. Каждая лишняя секунда, по допущению, умножала её на единицу минус ваша потеря.",
      banner: "Цены и ставки вводите вы. Тарифы продавцов меняются. Страница не замеряет ваш живой сайт.",
      ctaTitle: "Откройте Semrush, прежде чем винить хост",
      ctaBody: "Хост не заменяет исследование запросов и не уменьшает огромную картинку. Откройте Semrush для запросов. Kinsta — хост, который сравнивают позже. Форма ваш сайт не замеряет.",
      ctaButton: "Открыть Semrush",
      secondaryButton: "Смотреть Kinsta",
      body: `<p>Конверсия в форме — это конверсия сейчас, на более медленном сайте. Выручка сейчас равна визитам, умноженным на эту долю и на ценность одной конверсии. Лишние секунды — текущая загрузка минус более быстрая, и только если разница положительная. Если «быстрое» число не быстрее, лишних секунд ноль, и две выручки совпадают. Каждая лишняя секунда, по допущению, умножала конверсию на единицу минус потеря. Выручка при большей скорости — нынешняя выручка, делённая на этот множитель в степени лишних секунд. Разрыв — быстрая выручка минус нынешняя. Страница ещё умножает разрыв на 12: это тот же месяц, повторённый двенадцать раз, а не прогноз.</p>
<p>Поле потери начинается с 7 процентов, потому что форме нужно число. Эти 7 процентов — допущение, которое можно поменять. Это не закон. Опубликованные исследования не сходятся на одном проценте конверсии за секунду, и страница не выбирает между ними победителя и не выдаёт чужую работу за ваш магазин. Есть свой замер до и после — введите эту потерю. Нет — крутите значение как ручку, а не как измерение ваших посетителей.</p>
<h2>Пример на числах</h2>
<p>Десять тысяч визитов, конверсия 2 процента и 50 с конверсии дают нынешнюю выручку 10000. Переход с 4 секунд на 2 даёт 2 лишние секунды. При потере 7 процентов множитель за секунду — 0,93, а 0,93 в степени 2 — 0,8649. Более быстрая выручка — 10000 разделить на 0,8649, около 11562. Разрыв за этот месяц — около 1562. Подставьте другую потерю вместо 7, и сдвинутся и множитель, и разрыв. Визиты, доля и ценность тоже ваши. Страница их не наблюдала.</p>
<h2>Страница ваш сайт не замеряет</h2>
<p>Нет зонда, нет лабораторного прогона и нет полевой метрики. Секунды вводите вы. Цифра, скопированная из отчёта, стоит столько, сколько стоит отчёт, а цифра, которую вы угадали, остаётся догадкой. Миллисекунды здесь не выдумываются, чтобы хост выглядел быстрее. Если двух времён загрузки вы не знаете, разрыву выручки верить рано.</p>
<p>Более быстрый хост не чинит огромную картинку. Если тяжёлая часть страницы — изображение, начните со <a href="{{href:image-compressor}}">сжатия картинок</a>: оно меняет размер и перекодирует файл в браузере и показывает, сколько байт вы реально сэкономили на этом файле. Модель скорости становится историей про картинки только тогда, когда картинка и была тяжёлой частью. Контраст и размер шрифта — отдельные проверки. Секунды в этой форме они не двигают.</p>
<h2>Хост — более позднее решение</h2>
<p>Хост не заменяет исследование запросов. Откройте <a href="{{aff:semrush}}">Semrush</a> для запросов, которых этот набросок не видит. Заметки рядом: <a href="{{href:blog/semrush-free-trial}}">пробный доступ Semrush</a>, <a href="{{href:blog/semrush-vs-ahrefs}}">Semrush и Ahrefs</a>, <a href="{{href:blog/low-competition-keywords-semrush}}">низкоконкурентные запросы</a> и <a href="{{href:blog/semrush-for-seo}}">Semrush для SEO</a>. <a href="{{aff:kinsta}}">Kinsta</a> — хост, а не это исследование. Страница его не мерит и ваш стек не знает. Форма показывает, как месяц зависит от потери, которую вы допускаете.</p>
<ul>
<li>Выручка сейчас — визиты умножить на текущую конверсию и на ценность.</li>
<li>Потеря за секунду — ваша. Стартовые 7 процентов — не закон.</li>
<li>Вводите настоящие секунды. Живой сайт страница не замеряет.</li>
<li>Меньшая картинка помогает модели только если тяжёлой была она.</li>
</ul>`,
      faq: [
        { q: "7 процентов — это результат исследования?", a: "Нет. Это стартовое значение допущения, которое можно изменить. Исследования не сходятся на одном проценте за секунду, и страница ни одно не выбирает." },
        { q: "Какую конверсию вводить?", a: "Ту, что есть сейчас, на более медленном сайте. Формула считает, что каждая лишняя секунда умножала эту долю на единицу минус потеря." },
        { q: "Страница мерит время загрузки?", a: "Нет. Оба времени вводите вы. Зонда нет, и миллисекунды не выдумываются." },
        { q: "Быстрый хост починит большую картинку?", a: "Нет. Если тяжела картинка, сожмите этот файл. Смена хоста её не уменьшит." },
        { q: "Чему равен пример?", a: "Десять тысяч визитов при 2 процентах и 50 с конверсии — это 10000 сейчас. С 4 секунд до 2 при потере 7 процентов быстрая выручка около 11562, разрыв около 1562." }
      ]
    }
  },
  {
    slug: "robots-sitemap-generator",
    cluster: "webmaster",
    calc: "robots",
    category: "DeveloperApplication",
    affiliate: "semrush",
    related: ["meta-tag-generator", "seo-text-analyzer", "utm-qr-generator", "page-speed-revenue-calculator"],
    guide: "semrush-free-trial",
    en: {
      title: "Robots.txt and Sitemap Generator | Free Online Calculators",
      description: "Build a robots.txt with Allow, Disallow, and Sitemap lines, plus an XML sitemap of the canonical URLs you list. You still place both files on the real host.",
      h1: "Robots.txt and sitemap generator",
      lede: "You get a robots.txt and an XML sitemap from the paths and URLs you type. Putting the files on the host, and submitting the map, is still your work.",
      banner: "Prices and rates you type are yours. Vendor tariffs change. This page does not measure your live site.",
      ctaTitle: "Open Semrush to see the crawl picture",
      ctaBody: "Robots and a sitemap are files you upload. They do not show how the site is crawled. Open Semrush for that wider look. This generator does not submit anything and does not log you in.",
      ctaButton: "Open Semrush",
      body: `<p>The robots text starts with a user-agent line for every crawler, written as User-agent with an asterisk. Each path you list under Allow becomes an Allow line. Each path under Disallow becomes a Disallow line. A Sitemap line points at the map. If you listed page URLs and a site address, the robots file points at a sitemap.xml on that host. The XML file is a urlset. Each address you typed becomes a loc element. The generator escapes XML, so an ampersand in a URL cannot break the document. Blank lines are dropped.</p>
<p>A disallow of /admin asks cooperating crawlers not to fetch URLs that begin with that path. It does not hide a URL that is linked from somewhere else. A person with the address can still open it. A crawler that ignores robots.txt can still fetch it. If the page must stay private, you need access control on the server, not a line in a text file. Allow is the matching exception: a more specific allow can sit beside a broader disallow. The order and the way a given crawler reads the two lines are defined by that crawler. This page writes the lines you asked for. It does not simulate Google, Bing, or anyone else.</p>
<h2>A sitemap is a list, not a boost</h2>
<p>A sitemap is a list of canonical URLs you would like crawled. It is not a ranking boost by itself. Listing a URL does not make it deserve a query, and leaving a URL out does not erase a page that is linked. Put the canonical address in the list, not a copy with tracking parameters and not a duplicate you hope to demote. The file will not check that the URL returns a page, that the canonical tag agrees, or that the page is the one you meant. Those checks happen on the host, after you upload.</p>
<p>You must put both files on the real host. A preview here is not robots.txt at the root of your domain, and it is not /sitemap.xml. Save the text, upload it to the place your server actually serves, and request the URL in a browser to see that the file is the one you wrote. This site does not deploy it for you.</p>
<h2>Where a sitemap is submitted</h2>
<p>Google Search Console is the place to submit a sitemap for a site you have verified there. This page does not submit it, does not sign you in, and does not know whether the property is verified. Other engines have their own submission pages. Mentioning Search Console is a pointer to the usual door, not a claim that we opened it. After a submission, what gets crawled is still the engine's decision.</p>
<p>Tags for the pages are a different file, from the <a href="{{href:meta-tag-generator}}">meta tag generator</a>. The wording is the <a href="{{href:seo-text-analyzer}}">text analyzer</a>. Neither replaces the upload. Open <a href="{{aff:semrush}}">Semrush</a> for a wider look at indexed URLs. The notes cover a <a href="{{href:blog/semrush-free-trial}}">Semrush free trial</a>, <a href="{{href:blog/semrush-vs-ahrefs}}">Semrush and Ahrefs</a>, <a href="{{href:blog/low-competition-keywords-semrush}}">low-competition keywords</a>, and <a href="{{href:blog/semrush-for-seo}}">Semrush for SEO</a>. None of that is wired to this form.</p>
<ul>
<li>Disallow asks cooperating crawlers not to fetch. It does not hide a linked URL.</li>
<li>The sitemap lists canonical URLs. It is not a ranking boost.</li>
<li>XML is escaped. You still upload the file.</li>
<li>Search Console is where you submit a map. This page does not submit it.</li>
</ul>`,
      faq: [
        { q: "Does Disallow: /admin hide the page?", a: "No. It asks cooperating crawlers not to fetch that path. A linked URL can still be requested, and a crawler that ignores robots.txt can still fetch it." },
        { q: "Does a sitemap raise rankings?", a: "No. It is a list of canonical URLs you would like crawled. The list itself is not a ranking boost." },
        { q: "Are special characters in URLs safe in the XML?", a: "The generator escapes XML, so an ampersand does not break the document. You still have to put the file on the host." },
        { q: "Will this page submit the sitemap to Google?", a: "No. Google Search Console is where a verified owner submits a sitemap. This generator only writes the text." },
        { q: "Where do the files have to live?", a: "On the real host, where the server will return them. A preview on this site is not your robots.txt and not your sitemap.xml." }
      ]
    },
    ru: {
      title: "Генератор robots.txt и sitemap | Бесплатные калькуляторы",
      description: "Соберите robots.txt со строками Allow, Disallow и Sitemap и XML-карту из канонических адресов. Оба файла всё равно нужно положить на настоящий хост.",
      h1: "Генератор robots.txt и sitemap",
      lede: "Вы получаете robots.txt и XML-карту из путей и адресов, которые ввели. Положить файлы на хост и отправить карту — по-прежнему ваша работа.",
      banner: "Цены и ставки вводите вы. Тарифы продавцов меняются. Страница не замеряет ваш живой сайт.",
      ctaTitle: "Откройте Semrush, чтобы увидеть картину обхода",
      ctaBody: "Robots и sitemap — файлы, которые вы загружаете. Как сайт обходят на самом деле, они не показывают. Откройте Semrush для более широкого взгляда. Генератор ничего не отправляет и в сервис вас не входит.",
      ctaButton: "Открыть Semrush",
      body: `<p>Текст robots начинается со строки user-agent для всех роботов: User-agent и звёздочка. Каждый путь в списке Allow становится строкой Allow. Каждый путь в Disallow становится строкой Disallow. Строка Sitemap указывает на карту. Если вы перечислили адреса страниц и адрес сайта, файл robots указывает на sitemap.xml на этом хосте. XML — это urlset. Каждый введённый адрес становится элементом loc. Генератор экранирует XML, поэтому амперсанд в адресе не ломает документ. Пустые строки выбрасываются.</p>
<p>Disallow для /admin просит сотрудничающих роботов не забирать адреса, которые начинаются с этого пути. Он не прячет адрес, на который где-то стоит ссылка. Человек с адресом всё равно его откроет. Робот, который игнорирует robots.txt, всё равно может его забрать. Если страница должна оставаться закрытой, нужен контроль доступа на сервере, а не строка в текстовом файле. Allow — парное исключение: более точный allow может стоять рядом с более широким disallow. Порядок и то, как конкретный робот читает две строки, задаёт этот робот. Страница пишет строки, которые вы попросили. Google, Bing и остальных она не имитирует.</p>
<h2>Sitemap — это список, а не усиление</h2>
<p>Sitemap — список канонических адресов, которые вы хотели бы отдать в обход. Сам по себе он не поднимает позиции. Внести адрес не значит заслужить запрос, а не внести — не значит стереть страницу, на которую есть ссылка. В список кладите канонический адрес, а не копию с метками перехода и не дубль, который вы надеетесь приглушить. Файл не проверит, что адрес отдаёт страницу, что canonical с ним согласен и что это та страница, которую вы имели в виду. Эти проверки — на хосте, после загрузки.</p>
<p>Оба файла нужно положить на настоящий хост. Просмотр здесь — не robots.txt в корне вашего домена и не /sitemap.xml. Сохраните текст, загрузите его туда, откуда сервер его правда отдаёт, и откройте адрес в браузере, чтобы увидеть тот файл, который вы написали. Этот сайт за вас его не выкладывает.</p>
<h2>Куда отправляют карту</h2>
<p>Google Search Console — место, где отправляют sitemap для сайта, который вы там подтвердили. Эта страница карту не отправляет, в аккаунт вас не входит и не знает, подтверждена ли собственность. У других систем свои страницы отправки. Упоминание Search Console — указатель на обычную дверь, а не заявление, что мы её открыли. После отправки решение об обходе всё равно остаётся за системой.</p>
<p>Теги страниц — другой файл, его пишет <a href="{{href:meta-tag-generator}}">генератор мета-тегов</a>. Формулировки смотрит <a href="{{href:seo-text-analyzer}}">анализ текста</a>. Загрузку это не заменяет. Откройте <a href="{{aff:semrush}}">Semrush</a>, если нужен более широкий взгляд на адреса в индексе. Заметки рядом: <a href="{{href:blog/semrush-free-trial}}">пробный доступ Semrush</a>, <a href="{{href:blog/semrush-vs-ahrefs}}">Semrush и Ahrefs</a>, <a href="{{href:blog/low-competition-keywords-semrush}}">низкоконкурентные запросы</a> и <a href="{{href:blog/semrush-for-seo}}">Semrush для SEO</a>. К этой форме они не подключены.</p>
<ul>
<li>Disallow просит сотрудничающих роботов не забирать адрес. Ссылку он не прячет.</li>
<li>Sitemap перечисляет канонические адреса. Это не усиление в выдаче.</li>
<li>XML экранируется. Файл всё равно загружаете вы.</li>
<li>Карту отправляют в Search Console. Эта страница её не отправляет.</li>
</ul>`,
      faq: [
        { q: "Disallow: /admin прячет страницу?", a: "Нет. Строка просит сотрудничающих роботов не забирать этот путь. По ссылке адрес всё равно можно запросить, а робот, который игнорирует robots.txt, может его забрать." },
        { q: "Sitemap поднимает позиции?", a: "Нет. Это список канонических адресов, которые вы хотите отдать в обход. Сам список позиции не усиливает." },
        { q: "Спецсимволы в адресе не сломают XML?", a: "Генератор экранирует XML, поэтому амперсанд документ не ломает. Файл на хост всё равно кладёте вы." },
        { q: "Страница отправит карту в Google?", a: "Нет. Карту отправляет подтверждённый владелец в Google Search Console. Генератор только пишет текст." },
        { q: "Где должны лежать файлы?", a: "На настоящем хосте, откуда сервер их отдаст. Просмотр на этом сайте — не ваш robots.txt и не ваш sitemap.xml." }
      ]
    }
  },

  {
    slug: "image-compressor",
    cluster: "webmaster",
    calc: "image",
    category: "DeveloperApplication",
    affiliate: "cloudways",
    secondary: "kinsta",
    related: ["exif-remover", "page-speed-revenue-calculator", "wcag-contrast-checker", "px-to-rem-converter"],
    guide: "cloudways-vs-kinsta",
    en: {
      title: "Image Compressor | Free Online Calculators",
      description: "Resize and re-encode an image to WebP, AVIF, JPEG, or PNG in the browser. The file is not uploaded. Aspect ratio is kept, and the picture is never enlarged.",
      h1: "Image compressor",
      lede: "The browser draws your image to a canvas and encodes a WebP, AVIF, JPEG, or PNG. Nothing is uploaded. The picture is never scaled up.",
      banner: "Prices and rates you type are yours. Vendor tariffs change. This page does not measure your live site.",
      ctaTitle: "A smaller file is not a faster host",
      ctaBody: "Cloudways and Kinsta host sites. They do not resize the picture in this tab. If the image was the heavy part of a page, start here. This page does not time either host.",
      ctaButton: "See Cloudways",
      secondaryButton: "See Kinsta",
      body: `<p>Choose a file. The browser decodes it and draws it onto a canvas element, then asks the canvas for a blob in the format you picked: WebP, AVIF, JPEG, or PNG. The file is not uploaded. There is no account and no copy on a server of ours. When you download, the blob is the one the browser just encoded. Close the tab and that work is gone.</p>
<p>Resize keeps the aspect ratio and never upscales. The scale is the smaller of one, the max width divided by the current width, and the max height divided by the current height. A picture that already fits inside the box stays at its own pixel size. A picture that is wider or taller is reduced so both edges fit, and the other edge follows the ratio. The new width and height are rounded to whole pixels and never below one. You will see those dimensions next to the byte counts.</p>
<h2>Quality and the formats</h2>
<p>Quality is passed for the lossy formats. You type a number from the field, and the encoder receives it for WebP, AVIF, and JPEG. PNG is the lossless encoding of the resized pixels. A lower quality number asks the lossy encoder for a smaller file and a rougher picture. The page does not decide a correct quality for you. Look at the preview and the byte count, then keep or discard the result.</p>
<p>AVIF depends on the browser. If that browser cannot encode AVIF, the canvas returns no blob and the page says the encoding failed. Switch to WebP, JPEG, or PNG in that case. A failure is a limit of the browser you are using, not a measurement of your image and not a claim about another computer. WebP and JPEG are more widely encoded. PNG will often be larger than a lossy result of the same pixels, which is expected when you asked for a lossless file.</p>
<h2>Bytes saved, and what they do not prove</h2>
<p>Bytes saved are the original file size minus the new size. If the new file is larger, the difference is negative. That can happen when you re-encode a small PNG as a high-quality JPEG, or when the source was already compressed harder than the settings you chose. The number is arithmetic on the two sizes. It is not a score for the page that will contain the picture.</p>
<p>Re-encoding draws new pixels and writes a new file, so the metadata in the original is not carried along. That includes the camera notes and the location a JPEG often stores. The <a href="{{href:exif-remover}}">EXIF tool</a> does that job more carefully for a JPEG: it can drop the metadata segments and leave the compressed image data in place, instead of painting the picture again. Use this compressor when you also want a new size or a new format. Use the EXIF tool when the pixels should stay and only the notes should go.</p>
<p>A smaller image helps the <a href="{{href:page-speed-revenue-calculator}}">speed and revenue sketch</a> only if the image was actually the heavy part of the page. The sketch does not see this file. You would type seconds yourself, and only after you know the image mattered. <a href="{{aff:cloudways}}">Cloudways</a> and <a href="{{aff:kinsta}}">Kinsta</a> are hosts. Changing host does not perform this resize. This page does not time them.</p>
<ul>
<li>The canvas draw stays on your device. The file is not uploaded.</li>
<li>The picture is never enlarged. Aspect ratio is kept.</li>
<li>If AVIF encoding fails, the page says so. Pick another format.</li>
<li>Saved bytes are original size minus new size, and can be negative.</li>
</ul>`,
      faq: [
        { q: "Is the image uploaded?", a: "No. The browser draws it on a canvas and encodes the blob locally. There is no account and no copy kept by this site." },
        { q: "Will a small image be enlarged to the max width?", a: "No. The scale never goes above one, so a picture that already fits is not upscaled. Aspect ratio is kept." },
        { q: "What if AVIF fails?", a: "The page says the encoding failed. AVIF depends on the browser. Choose WebP, JPEG, or PNG." },
        { q: "Does compression remove EXIF?", a: "Re-encoding does not carry the original metadata along. The EXIF tool is the more careful way to drop JPEG metadata without painting the picture again." },
        { q: "Do the saved bytes speed up my live page?", a: "Only if this image was the heavy part. The byte gap is original size minus new size. It does not measure the page." }
      ]
    },
    ru: {
      title: "Сжатие изображений | Бесплатные калькуляторы",
      description: "Уменьшите и перекодируйте картинку в WebP, AVIF, JPEG или PNG в браузере. Файл не уходит на сервер. Пропорции сохраняются, увеличение запрещено.",
      h1: "Сжатие изображений в браузере",
      lede: "Браузер рисует картинку на canvas и кодирует WebP, AVIF, JPEG или PNG. На сервер файл не уходит. Увеличивать снимок страница не станет.",
      banner: "Цены и ставки вводите вы. Тарифы продавцов меняются. Страница не замеряет ваш живой сайт.",
      ctaTitle: "Файл меньше — это не хост быстрее",
      ctaBody: "Cloudways и Kinsta размещают сайты. Картинку в этой вкладке они не уменьшают. Если изображение было тяжёлой частью страницы, начните здесь. Ни один из хостов страница не замеряет.",
      ctaButton: "Смотреть Cloudways",
      secondaryButton: "Смотреть Kinsta",
      body: `<p>Выберите файл. Браузер раскодирует его, нарисует на элементе canvas и попросит у холста двоичный результат в формате, который вы выбрали: WebP, AVIF, JPEG или PNG. Файл не загружается на сервер. Аккаунта нет, и копии у нас не остаётся. Скачивание отдаёт тот результат, который браузер только что закодировал. Закроете вкладку — этой работы нет.</p>
<p>Изменение размера сохраняет пропорции и никогда не увеличивает снимок. Масштаб — меньшее из единицы, максимальной ширины, делённой на текущую ширину, и максимальной высоты, делённой на текущую высоту. Картинка, которая уже влезает в рамку, остаётся в своих пикселях. Картинка шире или выше уменьшается так, чтобы обе стороны влезли, а вторая сторона следует пропорции. Новые ширина и высота округляются до целых пикселей и не опускаются ниже единицы. Эти размеры видны рядом с байтами.</p>
<h2>Качество и форматы</h2>
<p>Качество передаётся для форматов с потерями. Число из поля уходит в кодировщик WebP, AVIF и JPEG. PNG — это кодирование изменённых пикселей без потерь. Меньшее качество просит у кодировщика с потерями файл меньше и картинку грубее. Верное качество страница за вас не выбирает. Смотрите на предпросмотр и на число байт, затем оставляйте результат или выбрасывайте.</p>
<p>AVIF зависит от браузера. Если этот браузер не умеет кодировать AVIF, холст не отдаёт результат, и страница говорит, что кодирование не удалось. Переключитесь на WebP, JPEG или PNG. Неудача — предел того браузера, которым вы пользуетесь, а не замер картинки и не заявление про чужой компьютер. WebP и JPEG кодируются шире. PNG часто тяжелее результата с потерями на тех же пикселях, и это ожидаемо, когда вы просили файл без потерь.</p>
<h2>Сэкономленные байты и чего они не доказывают</h2>
<p>Сэкономленные байты — это исходный размер минус новый. Если новый файл больше, разница отрицательная. Так бывает, когда маленький PNG перекодируют в JPEG высокого качества или когда исходник уже сжат жёстче, чем выбранные настройки. Число — арифметика двух размеров. Это не оценка страницы, в которую картинка потом попадёт.</p>
<p>Перекодирование рисует новые пиксели и пишет новый файл, поэтому метаданные оригинала с собой не переносятся. Туда входят заметки камеры и место, которое JPEG часто хранит. <a href="{{href:exif-remover}}">Инструмент EXIF</a> делает эту работу аккуратнее для JPEG: он может выкинуть сегменты метаданных и оставить сжатые данные картинки на месте, а не рисовать снимок заново. Этот компрессор нужен, когда хотите ещё и новый размер или новый формат. Инструмент EXIF — когда пиксели должны остаться, а уйти должны только заметки.</p>
<p>Меньшая картинка помогает <a href="{{href:page-speed-revenue-calculator}}">наброску скорости и выручки</a>, только если изображение и было тяжёлой частью страницы. Набросок этот файл не видит. Секунды вы введёте сами, и только когда знаете, что картинка имела значение. <a href="{{aff:cloudways}}">Cloudways</a> и <a href="{{aff:kinsta}}">Kinsta</a> — хостинги. Смена хоста этого уменьшения не делает. Страница их не замеряет.</p>
<ul>
<li>Рисунок на canvas остаётся на устройстве. Файл не загружается.</li>
<li>Снимок не увеличивается. Пропорции сохраняются.</li>
<li>Если AVIF не закодировался, страница так и скажет. Выберите другой формат.</li>
<li>Экономия — исходный размер минус новый, и она может быть отрицательной.</li>
</ul>`,
      faq: [
        { q: "Картинка загружается на сервер?", a: "Нет. Браузер рисует её на canvas и кодирует результат локально. Аккаунта нет, и копию этот сайт не хранит." },
        { q: "Маленькую картинку растянут до максимальной ширины?", a: "Нет. Масштаб не бывает больше единицы, поэтому снимок, который уже влезает, не увеличивается. Пропорции сохраняются." },
        { q: "Что если AVIF не получился?", a: "Страница скажет, что кодирование не удалось. AVIF зависит от браузера. Выберите WebP, JPEG или PNG." },
        { q: "Сжатие убирает EXIF?", a: "Перекодирование не переносит исходные метаданные. Инструмент EXIF аккуратнее убирает метаданные JPEG, не рисуя снимок заново." },
        { q: "Сэкономленные байты ускорят живую страницу?", a: "Только если эта картинка была тяжёлой частью. Разница байт — исходный размер минус новый. Страницу она не замеряет." }
      ]
    }
  },
  {
    slug: "utm-qr-generator",
    cluster: "webmaster",
    calc: "utm",
    category: "DeveloperApplication",
    affiliate: "semrush",
    related: ["roas-calculator", "meta-tag-generator", "seo-text-analyzer", "page-speed-revenue-calculator"],
    guide: "semrush-free-trial",
    en: {
      title: "UTM and QR Code Generator | Free Online Calculators",
      description: "Build a landing URL with encoded utm fields and a QR code at error correction H. Empty fields are omitted. The link labels a click. It does not create the campaign.",
      h1: "UTM and QR code generator",
      lede: "The five utm fields are added with the browser's own query encoder. Empty ones are left out. The QR is drawn here, at error correction H.",
      banner: "Prices and rates you type are yours. Vendor tariffs change. This page does not measure your live site.",
      ctaTitle: "Open Semrush to see the campaign",
      ctaBody: "A UTM only labels the click. Open Semrush to study the queries and pages around that campaign. This form does not create the campaign and does not read a report.",
      ctaButton: "Open Semrush",
      body: `<p>Type a landing page address and the labels you want on the click. The builder uses URLSearchParams, so each value is encoded the way a query string should be encoded. A space, an ampersand, or a non-ASCII character will not break the pair it sits in. The keys are utm_source, utm_medium, utm_campaign, utm_term, and utm_content. Empty fields are omitted. A blank term does not become utm_term with an empty value, and it does not wipe a parameter that was already on the URL unless you typed the same key. The result is a normal address you can copy.</p>
<p>The address has to be a full URL. A bare path without a scheme is rejected, because the builder cannot know the host. Fix the address and run it again. The page does not look the URL up, does not check that it returns a page, and does not add a redirect. What you copy is what the parameters produced.</p>
<h2>The QR code is drawn in the browser</h2>
<p>The same link is drawn as a QR code on a canvas, on your device. The error correction level is H, the highest of the four usual levels. That spare capacity is why a small logo can sit in the centre. The logo, if you add one, is placed on a white pad so the pattern around it stays a clean quiet zone rather than a busy photograph. The drawing keeps the logo to a modest fraction of the code.</p>
<p>A logo that is too large will make the code unscannable. Error correction can rebuild a damaged or covered patch. It cannot rebuild a code whose middle has been replaced by a picture that eats the finders and the data. If a phone cannot read the result, shrink the logo or export the code with no logo at all. This page does not test a scan against a particular phone, and it does not promise that every camera will like a dark logo on a dark code. Print a sample before you send a run of posters.</p>
<h2>A UTM labels the click. It does not create the campaign</h2>
<p>The parameters do not start an ad, do not reserve a budget, and do not tell a shop what the click is worth. They only label the click so that whatever analytics you already run can group it later. If the landing page ignores query strings, the label is still on the request, but your report will not grow a campaign by magic. Naming source, medium, and campaign consistently matters more than inventing a new spelling each week. This form will not police the spelling.</p>
<p>What you do with the numbers later is the <a href="{{href:roas-calculator}}">ROAS calculator</a>. It does not read this QR. Open <a href="{{aff:semrush}}">Semrush</a> to see which queries and ads the campaign sat next to. The notes cover a <a href="{{href:blog/semrush-free-trial}}">Semrush free trial</a>, <a href="{{href:blog/semrush-vs-ahrefs}}">Semrush and Ahrefs</a>, <a href="{{href:blog/low-competition-keywords-semrush}}">low-competition keywords</a>, and <a href="{{href:blog/semrush-for-seo}}">Semrush for SEO</a>. This page does not open a report and does not invent a case study.</p>
<ul>
<li>Values are encoded. Empty fields are left out.</li>
<li>The QR uses error correction H so a small centre logo has room.</li>
<li>A logo that covers too much of the pattern will not scan.</li>
<li>The link labels a click. It does not create the campaign.</li>
</ul>`,
      faq: [
        { q: "Are the utm values encoded?", a: "Yes. They are set with URLSearchParams, so spaces and reserved characters are encoded. Empty fields are omitted." },
        { q: "Why is the QR at error correction H?", a: "H leaves the most spare capacity of the usual levels, so a small logo can sit on a white pad in the centre." },
        { q: "Can the logo make the code fail?", a: "Yes. A logo that covers too much of the pattern will make the code unscannable. Error correction cannot rebuild a code that has lost too much of itself." },
        { q: "Does a UTM create the campaign?", a: "No. It only labels the click. The campaign, the budget, and the report already have to exist somewhere else." },
        { q: "Does this page store the links?", a: "No. The address and the QR are built in the browser. Nothing is uploaded." }
      ]
    },
    ru: {
      title: "Генератор UTM и QR | Бесплатные калькуляторы",
      description: "Соберите адрес с полями utm, которые браузер кодирует, и QR с уровнем коррекции H. Пустые поля не попадают в ссылку. Код не создаёт кампанию, он только метит клик.",
      h1: "Генератор UTM и QR-кода",
      lede: "Пять полей utm добавляются кодировщиком адреса в браузере. Пустые не попадают в ссылку. QR рисуется здесь, с уровнем коррекции H.",
      banner: "Цены и ставки вводите вы. Тарифы продавцов меняются. Страница не замеряет ваш живой сайт.",
      ctaTitle: "Откройте Semrush, чтобы увидеть кампанию",
      ctaBody: "UTM только метит клик. Откройте Semrush и посмотрите запросы и страницы вокруг этой кампании. Форма кампанию не создаёт и отчёт не читает.",
      ctaButton: "Открыть Semrush",
      body: `<p>Введите адрес посадочной страницы и метки, которые хотите видеть на клике. Сборщик использует URLSearchParams, поэтому каждое значение кодируется так, как должна кодироваться строка запроса. Пробел, амперсанд или знак не из ASCII не сломают пару, в которой стоят. Ключи такие: utm_source, utm_medium, utm_campaign, utm_term и utm_content. Пустые поля опускаются. Пустой term не станет utm_term с пустым значением и не сотрёт параметр, который уже был в адресе, если вы не ввели тот же ключ. На выходе обычный адрес, который можно скопировать.</p>
<p>Адрес должен быть полным URL. Голый путь без схемы отклоняется, потому что сборщик не знает хост. Поправьте адрес и соберите снова. Страница адрес не открывает, не проверяет, что он отдаёт страницу, и редирект не добавляет. Что скопировали, то параметры и собрали.</p>
<h2>QR рисуется в браузере</h2>
<p>Та же ссылка рисуется QR-кодом на canvas, на вашем устройстве. Уровень коррекции ошибок — H, самый высокий из четырёх обычных. Запас как раз для того, чтобы небольшой логотип мог сесть в центр. Если логотип добавлен, он ложится на белую подложку, чтобы узор вокруг оставался чистой зоной, а не пёстрым фото. Рисунок держит логотип в скромной доле кода.</p>
<p>Одинаковые подписи source, medium и campaign важнее красивого рисунка. Если на одной неделе рассылка названа email, а на другой Email, отчёт разрежет одну кампанию надвое. Форма регистр не выравнивает и опечатку не исправляет. QR и адрес собираются заново при каждом запуске. Предыдущую картинку страница не хранит, поэтому перед печатью сохраните её сами, если она ещё понадобится.</p>
<p>Слишком крупный логотип сделает код нечитаемым. Коррекция умеет восстановить испорченный или закрытый кусок. Она не восстановит код, у которого середину съела картинка вместе с поисковыми маркерами и данными. Если телефон результат не читает, уменьшите логотип или выгрузите код совсем без него. Страница не проверяет сканирование конкретным телефоном и не обещает, что любая камера примет тёмный логотип на тёмном коде. Напечатайте пробный лист, прежде чем отправлять тираж.</p>
<h2>UTM метит клик. Кампанию он не создаёт</h2>
<p>Параметры не запускают объявление, не резервируют бюджет и не сообщают магазину, чего клик стоит. Они только метят клик, чтобы аналитика, которая у вас уже есть, могла позже его сгруппировать. Если посадочная страница игнорирует строку запроса, метка на запросе всё равно есть, но отчёт сам кампанию не вырастит. Одинаковые source, medium и campaign важнее, чем новое написание каждую неделю. Сверять написание форма не станет.</p>
<p>Что делать с цифрами потом — <a href="{{href:roas-calculator}}">калькулятор ROAS</a>. Этот QR он не читает. Откройте <a href="{{aff:semrush}}">Semrush</a>, чтобы увидеть, рядом с какими запросами и объявлениями сидела кампания. Заметки рядом: <a href="{{href:blog/semrush-free-trial}}">пробный доступ Semrush</a>, <a href="{{href:blog/semrush-vs-ahrefs}}">Semrush и Ahrefs</a>, <a href="{{href:blog/low-competition-keywords-semrush}}">низкоконкурентные запросы</a> и <a href="{{href:blog/semrush-for-seo}}">Semrush для SEO</a>. Отчёт эта страница не открывает и кейс не выдумывает.</p>
<ul>
<li>Значения кодируются. Пустые поля не попадают в ссылку.</li>
<li>У QR коррекция H, чтобы небольшой логотип в центре имел запас.</li>
<li>Логотип, который закрывает слишком много узора, не отсканируется.</li>
<li>Ссылка метит клик. Кампанию она не создаёт.</li>
</ul>`,
      faq: [
        { q: "Значения utm кодируются?", a: "Да. Они ставятся через URLSearchParams, поэтому пробелы и служебные знаки кодируются. Пустые поля опускаются." },
        { q: "Почему у QR коррекция H?", a: "У H самый большой запас из обычных уровней, поэтому небольшой логотип может сесть на белую подложку в центре." },
        { q: "Логотип может сломать код?", a: "Да. Слишком крупный логотип сделает код нечитаемым. Коррекция не восстановит код, который потерял слишком большую часть себя." },
        { q: "UTM создаёт кампанию?", a: "Нет. Он только метит клик. Кампания, бюджет и отчёт должны уже где-то существовать." },
        { q: "Страница хранит ссылки?", a: "Нет. Адрес и QR собираются в браузере. Ничего не загружается." }
      ]
    }
  },

  {
    slug: "json-csv-sql-formatter",
    cluster: "webmaster",
    calc: "format",
    category: "DeveloperApplication",
    affiliate: "cloudways",
    related: ["meta-tag-generator", "llm-token-calculator", "hash-generator", "robots-sitemap-generator"],
    guide: "cloudways-vs-kinsta",
    en: {
      title: "JSON, CSV and SQL Formatter | Free Online Calculators",
      description: "Pretty-print JSON with an indent, tidy CSV that respects quotes, and break a SQL statement before common clauses. The SQL step is not a full parser.",
      h1: "JSON, CSV and SQL formatter",
      lede: "JSON is parsed and printed with an indent. CSV keeps quoted commas inside the cell. SQL is broken before a short list of words and is not a full parser.",
      banner: "Prices and rates you type are yours. Vendor tariffs change. This page does not measure your live site.",
      ctaTitle: "Formatting a query is not hosting it",
      ctaBody: "A tidy statement is easier to read. It does not run on a server, and it does not choose a host. Cloudways is a host people compare for that later step. This page does not deploy anything.",
      ctaButton: "See Cloudways",
      body: `<p>Pick JSON, CSV, or SQL. The text stays in the browser. Nothing is uploaded, and nothing is executed. The formatted result is there to copy. A database, an API, or a spreadsheet on your machine is unchanged until you paste the text somewhere yourself.</p>
<h2>JSON is parsed, then printed</h2>
<p>JSON goes through JSON.parse and then JSON.stringify with the indent you set. The indent is a small whole number of spaces. If the number is out of the range the script accepts, it falls back to two spaces. The keys come out in the order the parser produced, which for ordinary objects is the order they had in the text. The formatter does not sort keys to make two files look alike, and it does not drop a key you did not mention.</p>
<p>If the text is not JSON, the error message is the engine's own parse error. The page does not rewrite that message into a friendlier guess. A trailing comma, a single-quoted string, or a comment is invalid JSON, and the engine will say so in its own words. Fix the text and run it again. The script will not silently strip comments.</p>
<h2>CSV keeps a quoted comma in one cell</h2>
<p>The CSV reader walks the text. A comma outside quotes starts a new cell. A newline outside quotes starts a new row. A quote starts a quoted cell, and a doubled quote inside that cell is one quote character, not the end of the cell. A row written as Doe, Ann inside quotes stays one cell, even though a comma sits between Doe and Ann. A bare comma without quotes is a real separator. A row that never closes its quote is an error, not a guess. The printer then quotes a cell again only when the cell contains a comma, a quote, or a line break.</p>
<h2>SQL is a pretty-printer, not a parser</h2>
<p>The SQL step checks that quotes and parentheses balance, then breaks the line before a fixed list of words and uppercases those words. The breaks include SELECT, FROM, WHERE, AND, OR, JOIN, GROUP BY, and ORDER BY, along with a few neighbours such as HAVING, LIMIT, and INSERT INTO. Words inside a quoted string are left alone, because the balance check tracks the quote. A line comment that starts with two hyphens is skipped while the parentheses are counted.</p>
<p>This is not a full SQL parser. It will not catch a wrong column, a missing table, or a dialect feature it has never heard of. Balanced quotes and balanced parentheses are the only structural checks. A statement can be neatly broken and still be wrong when it runs. Do not treat a successful format as permission to execute the statement against production data.</p>
<p>Pretty-printing is also not hosting. <a href="{{aff:cloudways}}">Cloudways</a> is a host you might use when a query has to run somewhere. This page does not open an account, does not measure a server, and does not know which engine you use. If the text beside the query is a page you are about to publish, the <a href="{{href:meta-tag-generator}}">meta tag generator</a> is the separate step for the head. Hashes of a string, when you need one, live on the <a href="{{href:hash-generator}}">hash tool</a>, which is also local.</p>
<ul>
<li>JSON errors are the engine's parse error, passed through.</li>
<li>A quoted comma stays inside one CSV cell. A doubled quote is one quote.</li>
<li>SQL is uppercased and broken on a short word list. A bad column still passes.</li>
<li>Nothing is uploaded, and nothing is executed.</li>
</ul>`,
      faq: [
        { q: "What does a JSON error look like?", a: "It is the engine's own parse error from JSON.parse. The page does not replace it with a guess." },
        { q: "Does a comma inside quotes split a CSV cell?", a: "No. A field such as Doe, Ann kept inside quotes stays one cell. A doubled quote inside the field is a single quote character." },
        { q: "Will the SQL formatter catch a wrong column?", a: "No. It checks that quotes and parentheses balance, then breaks and uppercases a list of words. It is not a full parser." },
        { q: "Which SQL words start a new line?", a: "The printer breaks before SELECT, FROM, WHERE, AND, OR, JOIN, GROUP BY, and ORDER BY, and before a few neighbours such as HAVING and LIMIT." },
        { q: "Is the text uploaded or run?", a: "Neither. Formatting happens in the browser. A database does not see the statement." }
      ]
    },
    ru: {
      title: "Формат JSON, CSV и SQL | Бесплатные калькуляторы",
      description: "Разберите JSON с отступом, причешите CSV с учётом кавычек и разбейте SQL перед привычными словами. Шаг SQL — не полный разбор запроса и не ловит неверную колонку.",
      h1: "Форматирование JSON, CSV и SQL",
      lede: "JSON разбирается и печатается с отступом. CSV оставляет запятую в кавычках внутри ячейки. SQL режется перед коротким списком слов и полным разбором не является.",
      banner: "Цены и ставки вводите вы. Тарифы продавцов меняются. Страница не замеряет ваш живой сайт.",
      ctaTitle: "Причесать запрос — не значит его хостить",
      ctaBody: "Аккуратный оператор легче читать. На сервере он от этого не выполняется и хост не выбирает. Cloudways — хостинг, который сравнивают уже на следующем шаге. Страница ничего не разворачивает.",
      ctaButton: "Смотреть Cloudways",
      body: `<p>Выберите JSON, CSV или SQL. Текст остаётся в браузере. Ничего не загружается и ничего не выполняется. Результат нужен, чтобы его скопировать. База, API или таблица на вашей машине не изменятся, пока вы сами куда-нибудь текст не вставите.</p>
<h2>JSON сначала разбирается, потом печатается</h2>
<p>JSON проходит через JSON.parse, затем через JSON.stringify с тем отступом, который вы задали. Отступ — небольшое целое число пробелов. Если число вне диапазона, который принимает скрипт, остаётся два пробела. Ключи выходят в том порядке, который дал разбор, а для обычного объекта это порядок в тексте. Форматировщик не сортирует ключи, чтобы два файла стали похожи, и не выбрасывает ключ, о котором вы не просили.</p>
<p>Если текст — не JSON, сообщение об ошибке принадлежит самому движку. Страница не переписывает его в более мягкую догадку. Висячая запятая, строка в одинарных кавычках или комментарий для JSON неверны, и движок скажет об этом своими словами. Поправьте текст и запустите снова. Комментарии скрипт молча не вырезает.</p>
<h2>CSV оставляет запятую в кавычках в одной ячейке</h2>
<p>Читатель CSV идёт по тексту. Запятая вне кавычек начинает новую ячейку. Перевод строки вне кавычек начинает новую строку таблицы. Кавычка открывает ячейку в кавычках, а удвоенная кавычка внутри этой ячейки — один символ кавычки, а не конец ячейки. Строка, где Doe, Ann стоит в кавычках, остаётся одной ячейкой, хотя между Doe и Ann есть запятая. Голая запятая без кавычек — настоящий разделитель. Строка, которая так и не закрыла кавычку, — ошибка, а не догадка. Печать снова берёт ячейку в кавычки только если в ней есть запятая, кавычка или перевод строки.</p>
<h2>SQL — причёсывание, а не полный разбор</h2>
<p>Шаг SQL проверяет, что кавычки и скобки сходятся, затем переносит строку перед фиксированным списком слов и пишет эти слова заглавными. Переносы включают SELECT, FROM, WHERE, AND, OR, JOIN, GROUP BY и ORDER BY, а рядом ещё HAVING, LIMIT и INSERT INTO. Слова внутри строки в кавычках не трогаются, потому что проверка баланса следит за кавычкой. Комментарий, который начинается с двух дефисов, пропускается, пока считаются скобки.</p>
<p>Это не полный разбор SQL. Неверную колонку, пропавшую таблицу или возможность диалекта, о которой шаг не слышал, он не поймает. Сходящиеся кавычки и сходящиеся скобки — единственная структурная проверка. Оператор может быть аккуратно разбит и всё равно оказаться неверным в момент запуска. Удачное форматирование — не разрешение выполнить оператор на боевых данных.</p>
<p>Причёсывание — ещё и не хостинг. <a href="{{aff:cloudways}}">Cloudways</a> — хост, который может пригодиться, когда запрос правда должен где-то выполниться. Страница счёт не открывает, сервер не мерит и не знает, каким движком вы пользуетесь. Если рядом с запросом есть страница, которую вы собираетесь опубликовать, отдельный шаг для шапки — <a href="{{href:meta-tag-generator}}">генератор мета-тегов</a>. Хеш строки, когда он нужен, считается в <a href="{{href:hash-generator}}">инструменте хешей</a>, тоже локально.</p>
<ul>
<li>Ошибка JSON — это ошибка разбора движка, как есть.</li>
<li>Запятая в кавычках остаётся в одной ячейке CSV. Удвоенная кавычка — одна кавычка.</li>
<li>SQL пишется заглавными и режется по короткому списку слов. Плохая колонка всё равно проходит.</li>
<li>Ничего не загружается и ничего не выполняется.</li>
</ul>`,
      faq: [
        { q: "Как выглядит ошибка JSON?", a: "Это собственная ошибка разбора движка из JSON.parse. Страница не подменяет её догадкой." },
        { q: "Запятая в кавычках разбивает ячейку CSV?", a: "Нет. Поле вроде Doe, Ann внутри кавычек остаётся одной ячейкой. Удвоенная кавычка внутри поля — один символ кавычки." },
        { q: "Форматировщик SQL поймает неверную колонку?", a: "Нет. Он проверяет, что кавычки и скобки сходятся, затем переносит строку и пишет заглавными список слов. Это не полный разбор." },
        { q: "Перед какими словами SQL начинается новая строка?", a: "Перед SELECT, FROM, WHERE, AND, OR, JOIN, GROUP BY и ORDER BY, а также перед соседними вроде HAVING и LIMIT." },
        { q: "Текст загружается или выполняется?", a: "Ни то ни другое. Форматирование идёт в браузере. База оператор не видит." }
      ]
    }
  },
  {
    slug: "roas-calculator",
    cluster: "webmaster",
    calc: "roas",
    category: "DeveloperApplication",
    affiliate: "semrush",
    related: ["margin-markup-calculator", "page-speed-revenue-calculator", "utm-qr-generator", "llm-token-calculator"],
    guide: "semrush-vs-ahrefs",
    en: {
      title: "ROAS Calculator | Free Online Calculators",
      description: "Divide attributed revenue by ad spend, then apply the margin and other costs you type to get profit and ROMI. The attribution in the form is your assumption.",
      h1: "ROAS calculator",
      lede: "ROAS is revenue divided by ad spend. Profit then subtracts that spend and any other cost from revenue times the margin you type.",
      banner: "Prices and rates you type are yours. Vendor tariffs change. This page does not measure your live site.",
      ctaTitle: "Open Semrush to see where the spend went",
      ctaBody: "ROAS uses the revenue and the spend you type. It does not know which queries or ads that spend belonged to. Open Semrush for that. This form does not import a campaign and does not tell a case study.",
      ctaButton: "Open Semrush",
      body: `<p>ROAS is revenue divided by ad spend. Type both numbers in the same currency and for the same period. If spend is zero the ratio is not a useful finite number, so do not read a blank campaign as an infinite success. Gross profit is revenue times the margin. The margin is the share of revenue you keep before ads. A margin of 1, shown as 100 percent, means you typed no cost of goods, so the whole revenue is still there before the ad bill. A margin of one half means half the revenue is gone to the product before any ad is paid. Profit is that gross figure minus ad spend minus the other marketing cost you type. ROMI is profit divided by spend plus that other cost. The other cost can be zero.</p>
<h2>A worked example</h2>
<p>Spend 1000, revenue 4000, margin 100 percent, other cost 0. ROAS is 4000 divided by 1000, which is 4. Gross profit is the full 4000, because the margin keeps all of the revenue. Profit is 4000 minus 1000 minus 0, which is 3000. ROMI is 3000 divided by 1000, which is 300 percent. The same revenue at a margin of 50 percent changes the story. Gross profit is 2000. Profit is 2000 minus 1000, which is 1000. Break-even ROAS is 2, because you need 2 of revenue per 1 of spend to cover a 50 percent margin: half of that revenue is the gross you keep, and that half has to equal the spend. At a ROAS of 4 with a 50 percent margin you are above that line. At a ROAS of 4 with a thin margin you may not be.</p>
<p>Break-even is the spend, plus any other cost, divided by the margin, and then divided by the spend to turn it back into a ROAS. If the margin is zero, there is no finite break-even, because no amount of revenue leaves a gross profit. The page will not invent a healthy ratio to hide that.</p>
<h2>Attribution is an assumption</h2>
<p>The revenue you type is the revenue you decided to attribute to the ads. The form cannot see your shop, your call log, or the clicks that never bought. A last-click rule, a first-click rule, and a rule that shares credit across a week will put different numbers in the same box, and all of them are assumptions. If two campaigns share a customer, typing the full order against both will double the revenue. The calculator will happily divide whatever you typed. It will not warn you that the same order was counted twice, because it cannot see the order.</p>
<p>Labels on the click, if you use them, are built in the <a href="{{href:utm-qr-generator}}">UTM and QR tool</a>. They do not fill this form. The gap between a price and the cost of the goods, if you need it before you choose a margin, is the <a href="{{href:margin-markup-calculator}}">margin and markup calculator</a>. People mix those two percentages and then type the wrong share here.</p>
<h2>Which queries the spend belonged to</h2>
<p>Seeing which queries or ads the spend belonged to is a research question, not a division. Open <a href="{{aff:semrush}}">Semrush</a> for that. The notes cover a <a href="{{href:blog/semrush-free-trial}}">Semrush free trial</a>, <a href="{{href:blog/semrush-vs-ahrefs}}">Semrush and Ahrefs</a>, <a href="{{href:blog/low-competition-keywords-semrush}}">low-competition keywords</a>, and <a href="{{href:blog/semrush-for-seo}}">Semrush for SEO</a>. This page does not connect to an ad account and does not quote a case study. Use the ratio on numbers you can defend.</p>
<ul>
<li>ROAS is revenue divided by ad spend.</li>
<li>Margin is the share of revenue kept before ads. One means no cost of goods.</li>
<li>A 50 percent margin breaks even at a ROAS of 2 when there is no other cost.</li>
<li>The revenue you attribute is an assumption. The form cannot see the orders.</li>
</ul>`,
      faq: [
        { q: "What is ROAS?", a: "Revenue divided by ad spend. Spend 1000 and revenue 4000 is a ROAS of 4." },
        { q: "What does the margin field mean?", a: "It is the share of revenue kept before ads. One, or 100 percent, means you typed no cost of goods. One half means half the revenue is gone before ads." },
        { q: "Why is break-even ROAS 2 at a 50 percent margin?", a: "You need 2 of revenue per 1 of spend so the half you keep covers the spend. That is with no other marketing cost." },
        { q: "Does the calculator know which orders came from the ads?", a: "No. The revenue you type is your attribution. Two rules can put two different numbers in the same box." },
        { q: "What is ROMI here?", a: "Profit divided by ad spend plus the other marketing cost. Profit is revenue times margin, minus spend, minus that other cost." }
      ]
    },
    ru: {
      title: "Калькулятор ROAS | Бесплатные калькуляторы",
      description: "Поделите отнесённую выручку на расход рекламы, затем посчитайте прибыль и ROMI с маржой и прочими затратами. То, что вы относите к рекламе, — ваше допущение.",
      h1: "Калькулятор ROAS",
      lede: "ROAS — это выручка, делённая на расход рекламы. Прибыль потом вычитает этот расход и прочие затраты из выручки, умноженной на введённую маржу.",
      banner: "Цены и ставки вводите вы. Тарифы продавцов меняются. Страница не замеряет ваш живой сайт.",
      ctaTitle: "Откройте Semrush, чтобы увидеть, куда ушёл расход",
      ctaBody: "ROAS берёт выручку и расход, которые вы ввели. К каким запросам или объявлениям относился расход, форма не знает. Откройте Semrush и посмотрите там. Кампанию она не импортирует и историю успеха не рассказывает.",
      ctaButton: "Открыть Semrush",
      body: `<p>ROAS — это выручка, делённая на расход рекламы. Оба числа вводите в одной валюте и за один период. Если расход ноль, отношение не даёт полезного конечного числа, поэтому пустую кампанию не читайте как бесконечный успех. Валовая прибыль — выручка, умноженная на маржу. Маржа — доля выручки, которая остаётся до рекламы. Маржа 1, на экране 100 процентов, значит, себестоимость товара вы не закладывали и вся выручка ещё на месте до рекламного счёта. Маржа в одну вторую значит, что половина выручки ушла в товар до любой оплаты рекламы. Прибыль — эта валовая цифра минус расход на рекламу минус прочие маркетинговые затраты, которые вы ввели. ROMI — прибыль, делённая на расход плюс эти прочие затраты. Прочие затраты могут быть нулём.</p>
<h2>Пример на числах</h2>
<p>Расход 1000, выручка 4000, маржа 100 процентов, прочие затраты 0. ROAS — 4000 разделить на 1000, то есть 4. Валовая прибыль — все 4000, потому что маржа оставляет всю выручку. Прибыль — 4000 минус 1000 минус 0, то есть 3000. ROMI — 3000 разделить на 1000, то есть 300 процентов. Та же выручка при марже 50 процентов меняет историю. Валовая прибыль — 2000. Прибыль — 2000 минус 1000, то есть 1000. ROAS безубыточности равен 2, потому что нужно 2 выручки на 1 расхода, чтобы закрыть маржу 50 процентов: половина этой выручки — то, что вы оставляете, и эта половина должна равняться расходу. При ROAS 4 и марже 50 процентов вы выше этой линии. При ROAS 4 и тонкой марже можете оказаться ниже.</p>
<p>Безубыточность — это расход плюс прочие затраты, делённые на маржу, а затем ещё раз делённые на расход, чтобы снова получить ROAS. Если маржа ноль, конечной безубыточности нет, потому что никакая выручка не оставляет валовой прибыли. Страница не выдумает здоровое отношение, чтобы это спрятать.</p>
<h2>Отнесение выручки — допущение</h2>
<p>Выручка, которую вы вводите, — та, которую вы решили отнести к рекламе. Форма не видит магазин, журнал звонков и клики, которые ничего не купили. Правило последнего клика, правило первого клика и правило, которое делит заслугу на неделю, положат в одно поле разные числа, и все они — допущения. Если две кампании делят одного покупателя, а вы впишете весь заказ в обе, выручка удвоится. Калькулятор поделит то, что вы ввели. Он не предупредит, что один заказ посчитан дважды, потому что заказа он не видит.</p>
<p>Метки на клике, если вы ими пользуетесь, собираются в <a href="{{href:utm-qr-generator}}">генераторе UTM и QR</a>. Эту форму они не заполняют. Разрыв между ценой и себестоимостью, если он нужен до выбора маржи, считает <a href="{{href:margin-markup-calculator}}">калькулятор маржи и наценки</a>. Эти два процента часто путают и потом вводят сюда не ту долю.</p>
<h2>К каким запросам относился расход</h2>
<p>Увидеть, к каким запросам или объявлениям относился расход, — вопрос исследования, а не деления. Откройте <a href="{{aff:semrush}}">Semrush</a> для этого. Заметки рядом: <a href="{{href:blog/semrush-free-trial}}">пробный доступ Semrush</a>, <a href="{{href:blog/semrush-vs-ahrefs}}">Semrush и Ahrefs</a>, <a href="{{href:blog/low-competition-keywords-semrush}}">низкоконкурентные запросы</a> и <a href="{{href:blog/semrush-for-seo}}">Semrush для SEO</a>. Страница не подключается к рекламному кабинету и не цитирует кейс. Считайте отношение на числах, которые можете защитить.</p>
<ul>
<li>ROAS — выручка, делённая на расход рекламы.</li>
<li>Маржа — доля выручки до рекламы. Единица значит, что себестоимости товара нет.</li>
<li>При марже 50 процентов безубыточный ROAS равен 2, если прочих затрат нет.</li>
<li>Выручка, которую вы относите, — допущение. Заказов форма не видит.</li>
</ul>`,
      faq: [
        { q: "Что такое ROAS?", a: "Выручка, делённая на расход рекламы. Расход 1000 и выручка 4000 — это ROAS 4." },
        { q: "Что означает поле маржи?", a: "Это доля выручки, которая остаётся до рекламы. Единица, или 100 процентов, значит, себестоимость товара вы не вводили. Половина значит, что половина выручки ушла до рекламы." },
        { q: "Почему при марже 50 процентов безубыточный ROAS равен 2?", a: "Нужно 2 выручки на 1 расхода, чтобы оставшаяся половина закрыла расход. Это если прочих маркетинговых затрат нет." },
        { q: "Калькулятор знает, какие заказы пришли с рекламы?", a: "Нет. Выручка, которую вы вводите, — ваше отнесение. Два правила могут положить в одно поле два разных числа." },
        { q: "Что здесь такое ROMI?", a: "Прибыль, делённая на расход рекламы плюс прочие маркетинговые затраты. Прибыль — это выручка умножить на маржу, минус расход, минус эти прочие затраты." }
      ]
    }
  },

  {
    slug: "wcag-contrast-checker",
    cluster: "webmaster",
    calc: "contrast",
    category: "DeveloperApplication",
    affiliate: "kinsta",
    related: ["px-to-rem-converter", "image-compressor", "seo-text-analyzer", "meta-tag-generator"],
    guide: "cloudways-vs-kinsta",
    en: {
      title: "WCAG Contrast Checker | Free Online Calculators",
      description: "Compare two colours with the sRGB luminance formula and the WCAG AA and AAA thresholds. The page does not know your font size. It only checks the pair.",
      h1: "WCAG contrast checker",
      lede: "Contrast is the lighter relative luminance plus 0.05, divided by the darker one plus 0.05. You type both colours. The page does not know your font size.",
      banner: "Prices and rates you type are yours. Vendor tariffs change. This page does not measure your live site.",
      ctaTitle: "A host does not pick the two colours",
      ctaBody: "Kinsta hosts sites. It does not choose a text colour or a background. This check scores the pair you type. It does not measure a live theme and does not rank hosts.",
      ctaButton: "See Kinsta",
      body: `<p>Relative luminance follows the sRGB formula. Each channel is turned into a linear light value: a channel at or below the sRGB breakpoint is divided by 12.92, and a channel above it is shifted and raised to 2.4. Luminance is then 0.2126 times red, plus 0.7152 times green, plus 0.0722 times blue. Contrast is the lighter of the two luminances plus 0.05, divided by the darker plus 0.05. The same pair in either order gives the same ratio, because the formula sorts lighter and darker itself. Black on white is 21 to 1. White on white is 1 to 1.</p>
<p>You type two colours as hex. The checker does not sample your screen, does not read a stylesheet, and does not know which element sits on which. If the text colour and the background colour are swapped in the fields, the ratio does not change. A colour written with a short hex or with a word such as black has to be a six-digit hex here. The page will say the value is not a colour it can read rather than guessing.</p>
<h2>The thresholds, and what large text means</h2>
<p>The usual WCAG cutoffs are applied to that ratio. AA for normal text is 4.5. AA for large text, and the cutoff used for UI components and graphical objects, is 3. AAA for normal text is 7. AAA for large text is 4.5. Large text in WCAG is 18 point, or 14 point bold. This tool does not know your font size, your weight, or your line height. It checks the two colours. You decide whether the text you are about to ship is large. A pass at 3 is not a pass for body copy.</p>
<p>Two greys are worth remembering because they sit on either side of the normal-text line. #767676 on white is just over 4.5, so it meets AA for normal text and misses AAA. #777777 on white is under 4.5, so it fails AA for normal text and still clears the large-text and UI line of 3. One step in the hex can cross the line. Do not round a grey by eye and assume the neighbour still passes.</p>
<h2>The palette is a set of stops, not a finished theme</h2>
<p>From the background colour the page builds lighter and darker stops. They are a starting set of related colours, not a palette that has been tested. You still have to run each pair you mean to use, text on background and background on text if both occur. A stop that looks calm next to the background can fail the 4.5 line. A stop that passes on white can fail on a tinted page. The list does not replace the check.</p>
<p>Contrast is also not a hosting question. <a href="{{aff:kinsta}}">Kinsta</a> can serve the page. It cannot see the two hex values, and moving host will not lift a grey over 4.5. If the type size is what you are changing, the <a href="{{href:px-to-rem-converter}}">pixel converter</a> turns a px length into rem from the root size you type. It still does not know whether that length counts as large text in WCAG. Pictures that sit behind type are a different problem. The <a href="{{href:image-compressor}}">compressor</a> changes bytes. It does not score the contrast of text drawn on top of a photograph.</p>
<ul>
<li>Contrast uses sRGB relative luminance, then lighter plus 0.05 over darker plus 0.05.</li>
<li>AA normal text is 4.5. AA large text and UI components are 3. AAA normal is 7. AAA large is 4.5.</li>
<li>#767676 on white clears 4.5. #777777 on white does not.</li>
<li>The page checks the pair. It does not know your font size.</li>
</ul>`,
      faq: [
        { q: "How is contrast calculated?", a: "Each colour becomes a relative luminance with the sRGB formula. Contrast is the lighter luminance plus 0.05, divided by the darker plus 0.05." },
        { q: "What is black on white?", a: "21 to 1. White on white is 1 to 1. The order of the two fields does not change the ratio." },
        { q: "Does #777777 on white pass AA for body text?", a: "No. It is under 4.5. #767676 on white is just over 4.5. Large text and UI components use 3, which both greys clear." },
        { q: "Does the checker know if my text is large?", a: "No. WCAG large text is 18 point or 14 point bold. The tool only compares the two colours you type." },
        { q: "Are the palette stops already approved?", a: "No. They are lighter and darker stops from the background. Test each pair you intend to ship." }
      ]
    },
    ru: {
      title: "Проверка контраста WCAG | Бесплатные калькуляторы",
      description: "Сравните два цвета по формуле относительной яркости sRGB и порогам WCAG AA и AAA. Страница не знает размер шрифта. Она проверяет только эту пару.",
      h1: "Проверка контраста WCAG",
      lede: "Контраст — это более светлая относительная яркость плюс 0,05, делённая на более тёмную плюс 0,05. Оба цвета вводите вы. Размер шрифта страница не знает.",
      banner: "Цены и ставки вводите вы. Тарифы продавцов меняются. Страница не замеряет ваш живой сайт.",
      ctaTitle: "Хост не выбирает два цвета",
      ctaBody: "Kinsta размещает сайты. Цвет текста и цвет фона он не выбирает. Проверка оценивает пару, которую вы ввели. Живую тему она не мерит и хосты не ранжирует.",
      ctaButton: "Смотреть Kinsta",
      body: `<p>Относительная яркость считается по формуле sRGB. Каждый канал переводится в линейный свет: канал на пороге sRGB или ниже делится на 12,92, а канал выше сдвигается и возводится в степень 2,4. Яркость — это 0,2126 красного плюс 0,7152 зелёного плюс 0,0722 синего. Контраст — более светлая из двух яркостей плюс 0,05, делённая на более тёмную плюс 0,05. Одна и та же пара в любом порядке даёт одно отношение, потому что формула сама раскладывает светлое и тёмное. Чёрный на белом — 21 к 1. Белый на белом — 1 к 1.</p>
<p>Два цвета вводятся как hex. Проверка не снимает цвет с экрана, не читает таблицу стилей и не знает, какой элемент на каком лежит. Если цвет текста и цвет фона в полях перепутаны, отношение не меняется. Короткий hex или слово вроде black здесь должны быть шестизначным hex. Страница скажет, что значение не читается как цвет, а не станет угадывать.</p>
<h2>Пороги и что считается крупным текстом</h2>
<p>К этому отношению применяются обычные пороги WCAG. AA для обычного текста — 4,5. AA для крупного текста и порог для компонентов интерфейса и графических объектов — 3. AAA для обычного текста — 7. AAA для крупного текста — 4,5. Крупный текст в WCAG — это 18 пунктов или 14 пунктов жирным. Инструмент не знает размер шрифта, насыщенность и интерлиньяж. Он проверяет два цвета. Решаете вы, крупный ли текст, который вы собираетесь выпустить. Прохождение на 3 — это не прохождение для основного текста.</p>
<p>Два серых стоит помнить, потому что они стоят по разные стороны линии обычного текста. #767676 на белом чуть выше 4,5, поэтому проходит AA для обычного текста и не дотягивает до AAA. #777777 на белом ниже 4,5, поэтому не проходит AA для обычного текста и всё ещё выше линии 3 для крупного текста и интерфейса. Один шаг в hex может пересечь линию. Не округляйте серый на глаз и не считайте, что сосед тоже проходит.</p>
<h2>Палитра — набор ступеней, а не готовая тема</h2>
<p>От цвета фона страница строит более светлые и более тёмные ступени. Это стартовый набор родственных цветов, а не палитра, которую уже проверили. Каждую пару, которую вы правда будете использовать, всё равно надо прогнать: текст на фоне и фон на тексте, если бывает и так. Ступень, которая выглядит спокойно рядом с фоном, может не пройти линию 4,5. Ступень, которая проходит на белом, может провалиться на подкрашенной странице. Список проверку не заменяет.</p>
<p>Контраст — это ещё и не вопрос хостинга. <a href="{{aff:kinsta}}">Kinsta</a> может отдавать страницу. Два значения hex он не видит, и переезд на другой хост не поднимет серый выше 4,5. Если вы меняете размер шрифта, <a href="{{href:px-to-rem-converter}}">перевод пикселей</a> превращает длину в px в rem от корневого размера, который вы ввели. Крупный ли это текст по WCAG, он всё равно не знает. Картинка под текстом — другая задача. <a href="{{href:image-compressor}}">Сжатие</a> меняет байты. Контраст текста поверх фотографии оно не оценивает.</p>
<ul>
<li>Контраст берёт относительную яркость sRGB, затем светлое плюс 0,05 к тёмному плюс 0,05.</li>
<li>AA для обычного текста — 4,5. AA для крупного и для интерфейса — 3. AAA для обычного — 7. AAA для крупного — 4,5.</li>
<li>#767676 на белом проходит 4,5. #777777 на белом — нет.</li>
<li>Страница проверяет пару. Размер шрифта она не знает.</li>
</ul>`,
      faq: [
        { q: "Как считается контраст?", a: "Каждый цвет становится относительной яркостью по формуле sRGB. Контраст — более светлая яркость плюс 0,05, делённая на более тёмную плюс 0,05." },
        { q: "Сколько у чёрного на белом?", a: "21 к 1. Белый на белом — 1 к 1. Порядок полей отношение не меняет." },
        { q: "#777777 на белом проходит AA для основного текста?", a: "Нет. Он ниже 4,5. #767676 на белом чуть выше 4,5. Крупный текст и компоненты интерфейса используют 3, и оба серых это проходят." },
        { q: "Проверка знает, крупный ли у меня текст?", a: "Нет. Крупный текст в WCAG — 18 пунктов или 14 пунктов жирным. Инструмент сравнивает только два цвета, которые вы ввели." },
        { q: "Ступени палитры уже одобрены?", a: "Нет. Это более светлые и более тёмные ступени от цвета фона. Проверьте каждую пару, которую собираетесь выпустить." }
      ]
    }
  },
  {
    slug: "px-to-rem-converter",
    cluster: "webmaster",
    calc: "px",
    category: "DeveloperApplication",
    affiliate: "cloudways",
    related: ["wcag-contrast-checker", "image-compressor", "page-speed-revenue-calculator", "seo-text-analyzer"],
    guide: "cloudways-vs-kinsta",
    en: {
      title: "PX to REM Converter | Free Online Calculators",
      description: "Convert a pixel length to rem, em, and vw from the root size, parent size, and viewport width you type. Sixteen pixels is a common default, not a rule.",
      h1: "PX to REM converter",
      lede: "rem is the pixels divided by the root font size. em uses the parent. vw is the pixels divided by the viewport width, times 100.",
      banner: "Prices and rates you type are yours. Vendor tariffs change. This page does not measure your live site.",
      ctaTitle: "A unit conversion is not a hosting choice",
      ctaBody: "rem, em, and vw are lengths in the page you ship. Cloudways is a host, not a unit. This converter does not read your stylesheet and does not time a server.",
      ctaButton: "See Cloudways",
      body: `<p>Three conversions share the pixel length you type. rem is that length divided by the root font size. em is the same length divided by the parent font size. vw is the length divided by the viewport width, times 100, because one vw is one percent of the width. A zero or a negative root, parent, or viewport is rejected, since the page will not divide by zero or pretend a negative width is a screen. The three answers are independent. Changing the parent does not change the rem, and changing the root does not change the em.</p>
<h2>A worked example</h2>
<p>Take 32 pixels, a root of 16, a parent of 20, and a viewport of 1280. rem is 32 divided by 16, which is 2. em is 32 divided by 20, which is 1.6. vw is 32 divided by 1280, times 100, which is 2.5. If your root is not 16, the rem is not 2. Type the root the page actually uses, including a root you set in your own stylesheet. The form does not read that stylesheet. The 16 in the field is a common default, not a rule. Browsers often start at 16 pixels for the root font, and plenty of sites change it.</p>
<h2>What scales, and what does not</h2>
<p>rem follows the root. A person who enlarges the default font scales every length you expressed in rem, which is why body copy in rem can grow with that preference. px does not. A length in px stays the number of CSS pixels you wrote, even when the reader asked for larger type. That is the practical difference, not a moral one. Use px when you mean a fixed CSS pixel length, such as a hairline or a bitmap you already sized. Use rem when you mean type and the spaces that should travel with type.</p>
<p>em follows the parent, not the root. Nested em values compound. A child of 1.2 em inside a parent that is already 1.2 em is not 1.2 times the root. It is 1.2 times that parent. The converter shows one step, from the parent size you type to the pixel length. It does not walk a chain of elements. If you have three nested levels, multiply them yourself or type the parent size you already computed.</p>
<p>vw changes when the window changes. A font size in vw becomes smaller as the window becomes narrower, which is why a heading set only in vw can turn unreadably small on a phone. The converter will give you the vw for the width you typed. It will not stop you from using that number as a font size. If the width in the field is a desktop window, do not assume the same vw is comfortable at 360 pixels wide. Divide again with the narrow width if that is the case you care about.</p>
<p>None of these units fixes contrast. The <a href="{{href:wcag-contrast-checker}}">contrast checker</a> scores two colours and does not know the font size, even after you convert it. A large image is still bytes, which is the <a href="{{href:image-compressor}}">compressor</a>. Hosting is a separate decision. <a href="{{aff:cloudways}}">Cloudways</a> does not convert px to rem, and this page does not measure a host or recommend one.</p>
<ul>
<li>rem is px divided by the root font size. em uses the parent.</li>
<li>vw is px divided by the viewport width, times 100.</li>
<li>16 pixels is a common default, not a rule.</li>
<li>A font in vw can become unreadably small when the window shrinks.</li>
</ul>`,
      faq: [
        { q: "What is 32px at a root of 16, a parent of 20, and a viewport of 1280?", a: "2 rem, 1.6 em, and 2.5 vw. Each figure uses only its own denominator." },
        { q: "Does rem follow the user font size?", a: "rem follows the root. If the reader enlarges the default font, lengths in rem scale with it. Lengths in px do not." },
        { q: "Why can vw text become hard to read?", a: "vw is a share of the window. When the window gets narrower, a font set only in vw gets smaller, sometimes unreadably so." },
        { q: "Is 16px required?", a: "No. It is a common default for the root font. Type the root your page actually uses." },
        { q: "Does em compound?", a: "Yes, in real CSS, because em is relative to the parent. This form shows one step from the parent size you type. It does not walk a nest of elements." }
      ]
    },
    ru: {
      title: "Конвертер px в rem | Бесплатные калькуляторы",
      description: "Переведите длину в пикселях в rem, em и vw по корневому шрифту, шрифту родителя и ширине окна. Шестнадцать пикселей — частый старт, а не правило.",
      h1: "Конвертер пикселей в rem",
      lede: "rem — это пиксели, делённые на корневой размер шрифта. em берёт родителя. vw — пиксели, делённые на ширину окна и умноженные на 100.",
      banner: "Цены и ставки вводите вы. Тарифы продавцов меняются. Страница не замеряет ваш живой сайт.",
      ctaTitle: "Перевод единиц — не выбор хостинга",
      ctaBody: "rem, em и vw — длины на странице, которую вы выпускаете. Cloudways — хост, а не единица измерения. Конвертер не читает вашу таблицу стилей и сервер не замеряет.",
      ctaButton: "Смотреть Cloudways",
      body: `<p>Три перевода делят одну длину в пикселях. rem — эта длина, делённая на корневой размер шрифта. em — та же длина, делённая на размер шрифта родителя. vw — длина, делённая на ширину окна и умноженная на 100, потому что один vw — это один процент ширины. Нулевой или отрицательный корень, родитель или окно отклоняются: на ноль страница не делит и отрицательную ширину экраном не притворяет. Три ответа независимы. Смена родителя не меняет rem, смена корня не меняет em.</p>
<h2>Пример на числах</h2>
<p>Возьмите 32 пикселя, корень 16, родителя 20 и окно 1280. rem — 32 разделить на 16, то есть 2. em — 32 разделить на 20, то есть 1,6. vw — 32 разделить на 1280 и умножить на 100, то есть 2,5. Если ваш корень не 16, rem не равен 2. Введите корень, которым страница правда пользуется, включая корень из вашей таблицы стилей. Форма эту таблицу не читает. 16 в поле — частый старт, а не правило. Браузеры часто начинают с 16 пикселей для корневого шрифта, и множество сайтов это меняет.</p>
<h2>Что масштабируется, а что нет</h2>
<p>rem следует за корнем. Человек, который увеличивает шрифт по умолчанию, масштабирует каждую длину в rem, поэтому основной текст в rem может расти вместе с этой настройкой. px так не делает. Длина в px остаётся тем числом CSS-пикселей, которое вы написали, даже если читатель просил буквы крупнее. Это практическая разница, а не мораль. px уместен, когда нужна фиксированная длина в CSS-пикселях, например волосяная линия или уже нарезанная картинка. rem уместен, когда речь о тексте и об отступах, которые должны ехать вместе с текстом.</p>
<p>em следует за родителем, не за корнем. Вложенные em складываются множителями. Ребёнок 1,2 em внутри родителя, который уже 1,2 em, — это не 1,2 от корня. Это 1,2 от этого родителя. Конвертер показывает один шаг: от размера родителя, который вы ввели, к длине в пикселях. Цепочку элементов он не обходит. Если уровней три, перемножьте их сами или введите уже посчитанный размер родителя.</p>
<p>vw меняется, когда меняется окно. Размер шрифта во vw становится меньше, когда окно уже, поэтому заголовок только во vw может стать нечитаемо мелким на телефоне. Конвертер даст vw для той ширины, которую вы ввели. Он не остановит вас, если вы поставите это число размером шрифта. Если ширина в поле — настольное окно, не считайте, что тот же vw удобен при 360 пикселях. Поделите ещё раз с узкой шириной, если важен именно этот случай.</p>
<p>Ни одна из этих единиц не чинит контраст. <a href="{{href:wcag-contrast-checker}}">Проверка контраста</a> оценивает два цвета и не знает размер шрифта, даже после перевода. Большая картинка — по-прежнему байты, это <a href="{{href:image-compressor}}">сжатие</a>. Хостинг — отдельное решение. <a href="{{aff:cloudways}}">Cloudways</a> не переводит px в rem, а эта страница хост не мерит и ни один не рекомендует.</p>
<ul>
<li>rem — px разделить на корневой размер шрифта. em берёт родителя.</li>
<li>vw — px разделить на ширину окна и умножить на 100.</li>
<li>16 пикселей — частый старт, а не правило.</li>
<li>Шрифт во vw может стать нечитаемо мелким, когда окно сужается.</li>
</ul>`,
      faq: [
        { q: "Чему равны 32px при корне 16, родителе 20 и окне 1280?", a: "2 rem, 1,6 em и 2,5 vw. Каждая величина использует только свой знаменатель." },
        { q: "rem следует за шрифтом пользователя?", a: "rem следует за корнем. Если читатель увеличивает шрифт по умолчанию, длины в rem растут вместе с ним. Длины в px — нет." },
        { q: "Почему текст во vw бывает трудно читать?", a: "vw — это доля окна. Когда окно уже, шрифт только во vw становится меньше, иногда нечитаемо." },
        { q: "16px обязательны?", a: "Нет. Это частый старт для корневого шрифта. Введите корень, которым ваша страница правда пользуется." },
        { q: "em складывается?", a: "Да, в настоящем CSS, потому что em считается от родителя. Форма показывает один шаг от введённого размера родителя. Гнездо элементов она не обходит." }
      ]
    }
  },

  {
    slug: "privacy-policy-generator",
    cluster: "webmaster",
    calc: "policy",
    category: "DeveloperApplication",
    affiliate: "proton",
    related: ["disposable-email-generator", "aes-encryptor", "meta-tag-generator", "seo-text-analyzer"],
    guide: "best-password-manager",
    en: {
      title: "Privacy Policy Draft Generator | Free Online Calculators",
      description: "Assemble a privacy-policy draft from the site name, URL, email, country, and the boxes you tick. It is not legal advice. Delete any sentence that is not true.",
      h1: "Privacy policy draft generator",
      lede: "The draft is built from the site name, the URL, the contact email, the country, and the boxes you tick. Delete any sentence that is not true of the real site.",
      banner: "Prices and rates you type are yours. Vendor tariffs change. This page does not measure your live site.",
      ctaTitle: "Use a mailbox that is not your everyday one",
      ctaBody: "The draft can name a contact address. Proton is one way to keep that mailbox off your personal everyday inbox. This generator does not open an account and does not certify the text.",
      ctaButton: "See Proton",
      body: `<p>The draft is assembled from what you type and what you tick. The pieces are the site name, the URL, the contact email, the country, and the date. The boxes cover analytics, cookies, affiliate links, accounts, a contact path, and whether a page calls a public IP service. Each box adds or withholds a paragraph. Leave a box off and the draft says the matching thing is not happening, which is only safe if that is actually true. Turn a box on and the draft says the thing may happen, and it leaves a blank where you still have to name the provider.</p>
<p>One paragraph is always there: calculations that stay in the browser are not sent to the publisher. The draft says numbers typed into the finance tools, the password generator, the encryptor, and the strength check stay on the device. That sentence matches a site built the way this one is built. If your site posts those fields to a server, the sentence is false, and you should delete it. The draft tells the reader to delete any sentence that is not true. Read it as an editor, not as a customer.</p>
<h2>What the draft is not</h2>
<p>It is not legal advice, and it is not a GDPR certificate. Ticking a country does not register you with a regulator, does not appoint a representative, and does not list a lawful basis in the language a lawyer would use for your facts. A real policy has to match the real processors. If you turn analytics on, name the counter and link to that company's own policy. If a payment firm, an email host, or a support desk holds data, the draft does not know their names until you write them in. The IP box mentions the services this site's IP page calls. If your page calls different ones, replace the names.</p>
<p>Accounts, if you tick them, produce a reminder to describe what you store, where, and for how long. The reminder is not that description. A contact path says that a message contains what the person wrote and is used to reply. It does not create the mailbox. The affiliate box says a partner can see that a click arrived through an affiliate link and may set a cookie on the partner's own site, and that the price does not go up because of the link. If your site has no affiliate links, leave the box off.</p>
<h2>Read this site's own pages before you copy the shape</h2>
<p>This site publishes its own <a href="{{href:privacy-policy}}">privacy policy</a> and its own <a href="{{href:affiliate-disclosure}}">affiliate disclosure</a>. Those pages describe this site. They are not a template you can stamp on a shop, and the generator is the closer tool when the site is yours. Copying this site's policy onto a different product would make sentences that are not true. The generator exists so the sentences follow your boxes instead.</p>
<p>The contact address in the draft is public once you publish the page. A mailbox that is not your personal everyday address keeps that page from becoming a direct line to the inbox you use for everything else. <a href="{{aff:proton}}">Proton</a> is one provider people use for a separate address. This page does not open the account, does not know the current plan, and does not store the draft. When you are done, paste the text into your site and have someone who knows your facts read it. A password manager, if the address has a password, is a different product from the policy text.</p>
<ul>
<li>The draft follows the boxes. A box left off claims that thing is absent.</li>
<li>Browser-only calculations are described as not sent. Delete that if it is false.</li>
<li>This is not legal advice and not a GDPR certificate.</li>
<li>Name the real processors. The draft does not know them.</li>
</ul>`,
      faq: [
        { q: "Is the draft legal advice?", a: "No. It is text assembled from your boxes. It is not a legal opinion and not a GDPR certificate." },
        { q: "What if a sentence is not true of my site?", a: "Delete it. The draft says so. A box you leave off writes that the thing is not happening, which is only right when that is true." },
        { q: "Are calculator inputs sent to the publisher?", a: "The draft says calculations that stay in the browser are not sent. If your site posts those fields to a server, delete that sentence." },
        { q: "Does the tool name my processors?", a: "No. A real policy has to match the real processors. If you enable analytics, you still have to name the counter and link to its policy." },
        { q: "Where is this site's own policy?", a: "This site's privacy policy and affiliate disclosure are separate pages. They describe this site, not yours." }
      ]
    },
    ru: {
      title: "Черновик политики конфиденциальности | Бесплатные калькуляторы",
      description: "Соберите черновик политики из названия, адреса, почты, страны и галочек. Это не юридическая консультация. Вычеркните любое предложение, которое неправда.",
      h1: "Черновик политики конфиденциальности",
      lede: "Черновик собирается из названия сайта, адреса, почты для связи, страны и галочек. Вычеркните любое предложение, которое неправда для настоящего сайта.",
      banner: "Цены и ставки вводите вы. Тарифы продавцов меняются. Страница не замеряет ваш живой сайт.",
      ctaTitle: "Почта для связи — не повседневный ящик",
      ctaBody: "В черновике можно назвать адрес для писем. Proton — один из способов держать этот ящик отдельно от личной повседневной почты. Генератор счёт не открывает и текст не заверяет.",
      ctaButton: "Смотреть Proton",
      body: `<p>Черновик собирается из того, что вы ввели и что отметили. Составные части — название сайта, адрес, почта для связи, страна и дата. Галочки закрывают аналитику, cookie, партнёрские ссылки, аккаунты, путь для писем и то, обращается ли страница к публичной службе IP. Каждая галочка добавляет абзац или убирает его. Снятая галочка означает, что в тексте этого нет, и так можно оставить только если этого правда нет. Включённая галочка говорит, что так может быть, и оставляет место, где обработчика вам ещё предстоит назвать.</p>
<p>Один абзац есть всегда: расчёты, которые остаются в браузере, издателю не отправляются. Черновик пишет, что числа в финансовых инструментах, в генераторе паролей, в шифровании и в проверке стойкости остаются на устройстве. Это предложение совпадает с сайтом, устроенным как этот. Если ваш сайт отправляет эти поля на сервер, предложение ложно, и его надо вычеркнуть. Черновик прямо говорит читателю вычеркнуть любое предложение, которое неправда. Читайте его как редактор, не как клиент.</p>
<h2>Чем черновик не является</h2>
<p>Это не юридическая консультация и не сертификат GDPR. Галочка страны не регистрирует вас у регулятора, не назначает представителя и не выписывает правовое основание так, как это сделал бы юрист по вашим фактам. Настоящая политика должна совпадать с настоящими обработчиками. Включили аналитику — назовите счётчик и дайте ссылку на его собственную политику. Если данные держит платёжная фирма, почтовый хост или служба поддержки, черновик их имён не знает, пока вы их не впишете. Галочка IP упоминает службы, которые вызывает страница IP этого сайта. Если ваша страница вызывает другие, замените названия.</p>
<p>Аккаунты, если их отметить, дают напоминание описать, что вы храните, где и как долго. Напоминание — ещё не это описание. Путь для писем говорит, что сообщение содержит то, что человек написал, и нужно для ответа. Ящик он не создаёт. Галочка партнёрских ссылок говорит, что партнёр может увидеть переход по партнёрской ссылке и поставить cookie уже на своём сайте, и что цена из-за ссылки не растёт. Если партнёрских ссылок нет, галочку не ставьте.</p>
<h2>Сначала прочитайте страницы этого сайта</h2>
<p>У этого сайта есть своя <a href="{{href:privacy-policy}}">политика конфиденциальности</a> и своё <a href="{{href:affiliate-disclosure}}">раскрытие партнёрских ссылок</a>. Эти страницы описывают этот сайт. Это не бланк, который можно поставить на магазин, и для вашего сайта ближе генератор. Скопировать политику этого сайта на другой продукт значит оставить предложения, которые неправда. Генератор нужен, чтобы предложения шли за вашими галочками.</p>
<p>Адрес в черновике станет публичным, когда вы опубликуете страницу. Ящик, который не является вашей повседневной личной почтой, не превращает эту страницу в прямой вход в почту, которой вы пользуетесь для всего остального. <a href="{{aff:proton}}">Proton</a> — один из сервисов, где заводят отдельный адрес. Эта страница счёт не открывает, текущий тариф не знает и черновик не хранит. Когда закончите, вставьте текст на свой сайт и дайте прочитать его человеку, который знает ваши факты. Менеджер паролей, если у адреса есть пароль, — другой продукт, не текст политики.</p>
<ul>
<li>Черновик следует галочкам. Снятая галочка утверждает, что этого нет.</li>
<li>Расчёты в браузере описаны как неотправка. Вычеркните фразу, если она ложна.</li>
<li>Это не юридическая консультация и не сертификат GDPR.</li>
<li>Назовите настоящих обработчиков. Черновик их не знает.</li>
</ul>`,
      faq: [
        { q: "Черновик — это юридическая консультация?", a: "Нет. Это текст, собранный по вашим галочкам. Это не правовое заключение и не сертификат GDPR." },
        { q: "Что делать, если предложение неправда для моего сайта?", a: "Вычеркнуть. Черновик так и просит. Снятая галочка пишет, что этого нет, и так верно только когда этого правда нет." },
        { q: "Ввод в калькуляторах уходит издателю?", a: "Черновик пишет, что расчёты, которые остаются в браузере, не отправляются. Если ваш сайт шлёт эти поля на сервер, вычеркните это предложение." },
        { q: "Инструмент называет моих обработчиков?", a: "Нет. Настоящая политика должна совпадать с настоящими обработчиками. Включили аналитику — счётчик и ссылку на его политику всё равно называете вы." },
        { q: "Где политика этого сайта?", a: "Политика конфиденциальности и раскрытие партнёрских ссылок — отдельные страницы. Они описывают этот сайт, не ваш." }
      ]
    }
  },
  {
    slug: "margin-markup-calculator",
    cluster: "webmaster",
    calc: "margin",
    category: "DeveloperApplication",
    affiliate: "wise",
    related: ["roas-calculator", "freelance-rate-calculator", "compound-interest-calculator", "fire-calculator"],
    guide: null,
    en: {
      title: "Margin and Markup Calculator | Free Online Calculators",
      description: "Turn a cost and a price into margin and markup, or solve the price from a margin or a markup. A percent mode covers of, change, and what share A is of B.",
      h1: "Margin and markup calculator",
      lede: "Margin divides the gap by the price. Markup divides the same gap by the cost. The two percentages are not interchangeable, and mixing them underprices the work.",
      banner: "Prices and rates you type are yours. Vendor tariffs change. This page does not measure your live site.",
      ctaTitle: "The currency fee is not inside the margin",
      ctaBody: "Wise is one way people collect a payment in another currency. That fee sits outside the margin you just computed. This page does not know a Wise tariff and does not quote one.",
      ctaButton: "See Wise",
      body: `<p>Margin is the price minus the cost, divided by the price. Markup is the price minus the cost, divided by the cost. The gap in the numerator is the same. The denominator is not, so the percentages differ, and they answer different questions. Margin says what share of the money you receive is left after the cost. Markup says how far the price sits above the cost. A shop that thinks in shelf price usually wants margin. A shop that thinks in a multiplier on cost usually wants markup. Using one word for both is how prices end up too low.</p>
<h2>The same gap, two percentages</h2>
<p>Cost 60 and price 100. The gap is 40. Margin is 40 divided by 100, which is 40 percent. Markup is 40 divided by 60, which is 66.67 percent when you show it to two decimals, because 40 divided by 60 is two thirds. If you hear 40 percent and apply it as a markup, you price 60 times 1.40, which is 84. The margin on 84 is 24 divided by 84, about 28.6 percent, not 40. That is the underpricing. The customer sees a lower shelf price than the margin you thought you had set.</p>
<h2>Price from a margin, price from a markup</h2>
<p>Price from a margin is the cost divided by one minus the margin. Cost 80 at a margin of 50 percent is 80 divided by 0.5, which is 160. Check it: the gap is 80, and 80 divided by 160 is one half. The margin has to be below one. A margin of 100 percent would divide by zero, because nothing would be left for the cost. The form rejects that rather than printing an infinite price.</p>
<p>Price from a markup is the cost times one plus the markup. Cost 80 at a markup of 25 percent is 80 times 1.25, which is 100. The gap is 20, the markup is 20 divided by 80, and the margin on that same pair is 20 divided by 100, which is 20 percent. Again the two rates are not the same number. Write down which one the brief asked for before you type it.</p>
<h2>The percent mode is ordinary arithmetic</h2>
<p>A separate mode answers three plain questions. What is a percent of a number: 15 percent of 80 is 12. What is the change from one number to another: from 200 to 250 is plus 25 percent, because the gap of 50 divided by the start of 200 is one quarter. What percent A is of B: A divided by B. Going backwards, 250 down to 200, is a different question, because the base is then 250 and the change is minus 20 percent. The page uses the base you put in the first field for a change. It does not guess which number you think of as the original.</p>
<p>None of this is a quote for moving the money. Collecting the payment across currencies is a separate fee from the margin. <a href="{{aff:wise}}">Wise</a> is one service people use for that transfer. This calculator does not know the fee Wise would charge today, and it will not invent a tariff. If the margin has to cover advertising as well, take the percentage you just found into the <a href="{{href:roas-calculator}}">ROAS calculator</a> as the share kept before ads. A freelance hour, a compound balance, and a retirement sum are other questions, on their own calculators, and they do not change this division.</p>
<ul>
<li>Margin is the gap divided by the price. Markup is the gap divided by the cost.</li>
<li>Cost 60 and price 100 is a 40 percent margin and a 66.67 percent markup.</li>
<li>Cost 80 at a 50 percent margin is a price of 160. Cost 80 at a 25 percent markup is 100.</li>
<li>A fee to collect the money in another currency is not inside the margin.</li>
</ul>`,
      faq: [
        { q: "Why are margin and markup different on the same price?", a: "The gap is the same, but margin divides by the price and markup divides by the cost. Cost 60 and price 100 is a 40 percent margin and a 66.67 percent markup." },
        { q: "How do I get a price from a margin?", a: "Divide the cost by one minus the margin. Cost 80 at a 50 percent margin is 160." },
        { q: "How do I get a price from a markup?", a: "Multiply the cost by one plus the markup. Cost 80 at a 25 percent markup is 100." },
        { q: "What does the percent mode cover?", a: "A percent of a number, the change from one number to another, and what percent A is of B. 15 percent of 80 is 12. From 200 to 250 is plus 25 percent." },
        { q: "Does the margin include a currency-conversion fee?", a: "No. Collecting the payment in another currency is a separate fee. This page does not quote a Wise tariff." }
      ]
    },
    ru: {
      title: "Калькулятор маржи и наценки | Бесплатные калькуляторы",
      description: "Из себестоимости и цены получите маржу и наценку или найдите цену по проценту маржи или наценки. Отдельный режим считает долю, изменение и «сколько процентов».",
      h1: "Калькулятор маржи и наценки",
      lede: "Маржа делит разницу на цену. Наценка делит ту же разницу на себестоимость. Эти проценты не взаимозаменяемы, и путаница занижает цену.",
      banner: "Цены и ставки вводите вы. Тарифы продавцов меняются. Страница не замеряет ваш живой сайт.",
      ctaTitle: "Валютная комиссия не сидит внутри маржи",
      ctaBody: "Wise — один из способов получить оплату в другой валюте. Эта комиссия лежит вне маржи, которую вы только что посчитали. Тариф Wise страница не знает и не выдумывает.",
      ctaButton: "Смотреть Wise",
      body: `<p>Маржа — это цена минус себестоимость, делённая на цену. Наценка — цена минус себестоимость, делённая на себестоимость. В числителе одна и та же разница. Знаменатель другой, поэтому проценты расходятся и отвечают на разные вопросы. Маржа говорит, какая доля полученных денег остаётся после себестоимости. Наценка говорит, насколько цена выше себестоимости. Магазин, который думает полкой, обычно хочет маржу. Магазин, который думает множителем на себестоимость, обычно хочет наценку. Одно слово на оба смысла — как раз тот путь, которым цена оказывается слишком низкой.</p>
<h2>Одна разница, два процента</h2>
<p>Себестоимость 60 и цена 100. Разница — 40. Маржа — 40 разделить на 100, то есть 40 процентов. Наценка — 40 разделить на 60, то есть 66,67 процента, если показать два знака, потому что 40 разделить на 60 — это две трети. Услышали 40 процентов и применили их как наценку — получите 60 умножить на 1,40, то есть 84. Маржа на 84 — это 24 разделить на 84, около 28,6 процента, а не 40. Вот занижение. Покупатель видит полку ниже, чем маржа, которую вы думали задать.</p>
<h2>Цена из маржи и цена из наценки</h2>
<p>Цена из маржи — себестоимость, делённая на единицу минус маржа. Себестоимость 80 при марже 50 процентов — это 80 разделить на 0,5, то есть 160. Проверка: разница 80, и 80 разделить на 160 — одна вторая. Маржа должна быть меньше единицы. Маржа 100 процентов делила бы на ноль, потому что на себестоимость ничего бы не осталось. Форма это отклоняет, а не печатает бесконечную цену.</p>
<p>Цена из наценки — себестоимость, умноженная на единицу плюс наценка. Себестоимость 80 при наценке 25 процентов — это 80 умножить на 1,25, то есть 100. Разница 20, наценка — 20 разделить на 80, а маржа на той же паре — 20 разделить на 100, то есть 20 процентов. Снова два процента — не одно число. Запишите, о чём просило задание, до того как вводить его в поле.</p>
<h2>Режим процентов — обычная арифметика</h2>
<p>Отдельный режим отвечает на три простых вопроса. Сколько будет процент от числа: 15 процентов от 80 — это 12. Каково изменение от одного числа к другому: от 200 к 250 — это плюс 25 процентов, потому что разница 50, делённая на старт 200, — одна четверть. A — это сколько процентов от B: A разделить на B. Обратный ход, с 250 к 200, — другой вопрос, потому что база тогда 250 и изменение — минус 20 процентов. Для изменения страница берёт базу из первого поля. Какое число вы считаете исходным, она не угадывает.</p>
<p>Всё это не котировка на перевод денег. Получить оплату в другой валюте — отдельная комиссия, не маржа. <a href="{{aff:wise}}">Wise</a> — один из сервисов, которым для такого перевода пользуются. Калькулятор не знает, какую комиссию Wise взял бы сегодня, и тариф не выдумает. Если маржа должна покрыть ещё и рекламу, отнесите найденную долю в <a href="{{href:roas-calculator}}">калькулятор ROAS</a> как долю, которая остаётся до рекламы. Час фрилансера, сложный процент и сумма к выходу на пенсию — другие вопросы, на своих калькуляторах, и это деление они не меняют.</p>
<ul>
<li>Маржа — разница, делённая на цену. Наценка — разница, делённая на себестоимость.</li>
<li>Себестоимость 60 и цена 100 — это маржа 40 процентов и наценка 66,67 процента.</li>
<li>Себестоимость 80 при марже 50 процентов даёт цену 160. При наценке 25 процентов — цену 100.</li>
<li>Комиссия за получение денег в другой валюте внутри маржи не сидит.</li>
</ul>`,
      faq: [
        { q: "Почему маржа и наценка на одной цене разные?", a: "Разница одна, но маржа делит на цену, а наценка — на себестоимость. Себестоимость 60 и цена 100 — это маржа 40 процентов и наценка 66,67 процента." },
        { q: "Как получить цену из маржи?", a: "Разделите себестоимость на единицу минус маржа. Себестоимость 80 при марже 50 процентов — это 160." },
        { q: "Как получить цену из наценки?", a: "Умножьте себестоимость на единицу плюс наценка. Себестоимость 80 при наценке 25 процентов — это 100." },
        { q: "Что считает режим процентов?", a: "Процент от числа, изменение от одного числа к другому и сколько процентов A составляет от B. 15 процентов от 80 — это 12. От 200 к 250 — плюс 25 процентов." },
        { q: "Маржа включает комиссию за обмен валюты?", a: "Нет. Получить оплату в другой валюте — отдельная комиссия. Тариф Wise эта страница не приводит." }
      ]
    }
  },

  {
    slug: "business-days-calculator",
    cluster: "webmaster",
    calc: "dates",
    category: "DeveloperApplication",
    affiliate: "wise",
    related: ["schengen-stay-calculator", "freelance-rate-calculator", "world-time-meeting-planner", "margin-markup-calculator"],
    guide: null,
    en: {
      title: "Business Days Calculator | Free Online Calculators",
      description: "Count calendar days and Monday-to-Friday business days between two dates, then add business days while skipping weekends and the weekday holidays you list.",
      h1: "Business days calculator",
      lede: "Calendar days between two dates exclude the start and include the end. Business days are the Mondays to Fridays in that span, minus the weekday holidays you list.",
      banner: "Prices and rates you type are yours. Vendor tariffs change. This page does not measure your live site.",
      ctaTitle: "A due date is not a transfer speed",
      ctaBody: "People count business days because an invoice has a due date and a payout has a timing. Wise moves money across currencies. This page does not know how long a given transfer takes and will not invent a speed.",
      ctaButton: "See Wise",
      body: `<p>The span between two dates is counted in UTC calendar dates. The start day is excluded and the end day is included, which is the ordinary way to say how many days you step forward. Friday to the following Monday is three calendar days: Saturday, Sunday, and Monday. The Friday you started on is not one of them. If you put the later date first, the range is rejected rather than silently swapped, so a reversed pair does not look like a short trip.</p>
<p>Business days are the Monday-to-Friday dates inside that same span. Saturday and Sunday are weekends. A holiday counts only when it falls on a weekday you listed. Weekends are not also counted as holidays. If you type a Saturday into the holiday list, it stays a weekend in the weekend tally and does not appear again as a holiday, and it is not subtracted a second time. A weekday you list is removed from the business-day count and shown in the holiday count. The list is yours. The page does not know public holidays for a country, and it will not invent a national calendar.</p>
<h2>A Friday, a Monday, and a holiday</h2>
<p>Friday 20 November 2026 to Monday 23 November 2026 is 3 calendar days and 1 business day. The business day is the Monday. Add 1 business day to Friday 20 November 2026 and you land on Monday 23 November 2026. The counter walks forward one UTC date at a time, skips Saturday and Sunday, and stops when it has collected the number of business days you asked for. A holiday on that Monday pushes the landing day to Tuesday 24 November. The Monday is a real calendar day. It is simply not a business day once you listed it. Adding zero business days stays on the start date. The walk does not treat the start date itself as a day you have added.</p>
<p>Dates are parsed as UTC dates from the year, month, and day you pick. A time zone cannot shift the calendar day, because the page never converts a local midnight into UTC and back. 20 November is 20 November whether the browser is in a zone that is hours ahead or hours behind. An impossible day, such as 31 November, is rejected. The date control on the form already speaks in calendar dates. The arithmetic keeps that promise.</p>
<h2>This is not the Schengen count</h2>
<p>A stay under the Schengen 90-in-180 rule counts each calendar day you are present, and both the entry day and the exit day count. That is a different question from the number of business days between two dates, and this page does not answer it. Use the <a href="{{href:schengen-stay-calculator}}">Schengen stay calculator</a> for days of presence in a window. Do not paste a business-day total into a visa question. A meeting across zones, if the issue is the clock rather than the count of days, belongs on the <a href="{{href:world-time-meeting-planner}}">meeting planner</a>, which still will not turn a holiday into a working hour.</p>
<p>Invoice due dates and payout timing are why people count business days. A contract that says ten business days means this kind of walk, once you have listed the holidays the contract actually names. <a href="{{aff:wise}}">Wise</a> is one way to collect or send the money the invoice describes. How long a particular transfer takes is on Wise's own page for that corridor and that moment. This calculator does not know it and will not print a speed. The margin on the invoice, if you still need it, is the <a href="{{href:margin-markup-calculator}}">margin calculator</a>, which is also silent on transfer time.</p>
<ul>
<li>Calendar days exclude the start and include the end.</li>
<li>Business days are Monday to Friday in that span, minus weekday holidays you list.</li>
<li>A weekend you also list is not counted twice.</li>
<li>The dates are UTC dates, so a time zone cannot move the day.</li>
</ul>`,
      faq: [
        { q: "How many days from Friday 20 November 2026 to Monday 23 November 2026?", a: "3 calendar days and 1 business day. The start is excluded, the end is included, and the weekend is not a business day." },
        { q: "What if I add one business day to that Friday and Monday is a holiday?", a: "Without the holiday you land on Monday 23 November 2026. A holiday on that Monday pushes the result to Tuesday 24 November." },
        { q: "Does listing Saturday subtract it twice?", a: "No. Weekends are counted as weekends. A holiday removes a weekday. A Saturday in the list is not also a holiday in the holiday tally." },
        { q: "Can my time zone change the date?", a: "No. The page reads year, month, and day as a UTC date. Local midnight is not converted, so the calendar day does not shift." },
        { q: "Is this the Schengen day count?", a: "No. Schengen counts days of presence, including entry and exit. This tool counts a span of calendar days and the business days inside it." }
      ]
    },
    ru: {
      title: "Калькулятор рабочих дней | Бесплатные калькуляторы",
      description: "Посчитайте календарные дни и рабочие дни с понедельника по пятницу между двумя датами и прибавьте рабочие дни, пропуская выходные и ваши праздники.",
      h1: "Калькулятор рабочих дней",
      lede: "Календарные дни между двумя датами не включают начало и включают конец. Рабочие дни — это понедельники–пятницы в этом промежутке минус праздники в будни, которые вы перечислили.",
      banner: "Цены и ставки вводите вы. Тарифы продавцов меняются. Страница не замеряет ваш живой сайт.",
      ctaTitle: "Срок счёта — это не скорость перевода",
      ctaBody: "Рабочие дни считают, потому что у счёта есть срок, а у выплаты — свой срок зачисления. Wise переводит деньги между валютами. Сколько займёт конкретный перевод, страница не знает и скорость не выдумает.",
      ctaButton: "Смотреть Wise",
      body: `<p>Промежуток между двумя датами считается в календарных датах UTC. День начала не входит, день конца входит — так обычно говорят, на сколько дней вы шагнули вперёд. От пятницы до следующего понедельника три календарных дня: суббота, воскресенье и понедельник. Пятница, с которой начали, в них не входит. Если более позднюю дату поставить первой, диапазон отклоняется, а не молча меняется местами, поэтому перевёрнутая пара не выглядит короткой поездкой.</p>
<p>Рабочие дни — это даты с понедельника по пятницу внутри того же промежутка. Суббота и воскресенье — выходные. Праздник считается, только если он попал на будний день, который вы указали. Выходные ещё раз как праздники не считаются. Если вписать субботу в список праздников, она останется выходным в счётчике выходных и второй раз праздником не станет, и второй раз её не вычтут. Будний день из списка уходит из рабочих и показывается в счётчике праздников. Список ваш. Государственные праздники страны страница не знает и национальный календарь не выдумает.</p>
<h2>Пятница, понедельник и праздник</h2>
<p>С пятницы 20 ноября 2026 по понедельник 23 ноября 2026 выходит 3 календарных дня и 1 рабочий. Рабочий день — этот понедельник. Прибавить 1 рабочий день к пятнице 20 ноября 2026 — попасть на понедельник 23 ноября 2026. Счётчик шагает вперёд на одну дату UTC, пропускает субботу и воскресенье и останавливается, когда набрал нужное число рабочих дней. Праздник в этот понедельник сдвигает дату на вторник 24 ноября. Понедельник остаётся настоящим календарным днём. Рабочим он просто не является, раз вы его указали. Ноль рабочих дней оставляет дату старта. Сам день старта шагом, который вы прибавили, не считается.</p>
<p>Даты разбираются как даты UTC из года, месяца и дня, которые вы выбрали. Часовой пояс не может сдвинуть календарный день, потому что страница не переводит местную полночь в UTC и обратно. 20 ноября остаётся 20 ноября, в каком бы поясе ни был браузер, впереди или позади. Невозможный день, например 31 ноября, отклоняется. Поле даты в форме и так говорит календарными датами. Арифметика это обещание держит.</p>
<h2>Это не подсчёт шенгенских дней</h2>
<p>Пребывание по правилу Шенгена 90 из 180 считает каждый календарный день, когда вы были на месте, и день въезда, и день выезда оба входят. Это другой вопрос, не число рабочих дней между двумя датами, и эта страница на него не отвечает. Дни присутствия в окне считает <a href="{{href:schengen-stay-calculator}}">калькулятор шенгенского пребывания</a>. Не подставляйте сумму рабочих дней в визовый вопрос. Встреча по поясам, если дело в часах, а не в числе дней, живёт в <a href="{{href:world-time-meeting-planner}}">планировщике встреч</a>. Праздник в рабочий час он всё равно не превратит.</p>
<p>Сроки счетов и сроки выплат — вот зачем люди считают рабочие дни. Договор, где сказано «десять рабочих дней», означает именно такой шаг, когда вы перечислили праздники, которые договор правда называет. <a href="{{aff:wise}}">Wise</a> — один из способов получить или отправить деньги, о которых говорит счёт. Сколько займёт конкретный перевод, написано на странице Wise для этого направления и этого момента. Калькулятор этого не знает и скорость не напечатает. Маржа по счёту, если она ещё нужна, считается в <a href="{{href:margin-markup-calculator}}">калькуляторе маржи</a>, который про время перевода тоже молчит.</p>
<ul>
<li>Календарные дни не включают начало и включают конец.</li>
<li>Рабочие дни — понедельник–пятница в этом промежутке минус ваши праздники в будни.</li>
<li>Выходной, который вы ещё и вписали, дважды не вычитается.</li>
<li>Даты — даты UTC, поэтому пояс не сдвигает день.</li>
</ul>`,
      faq: [
        { q: "Сколько дней с пятницы 20 ноября 2026 по понедельник 23 ноября 2026?", a: "3 календарных дня и 1 рабочий. Начало не входит, конец входит, а выходные рабочими не являются." },
        { q: "Что если прибавить один рабочий день к этой пятнице, а понедельник — праздник?", a: "Без праздника вы попадёте на понедельник 23 ноября 2026. Праздник в этот понедельник сдвигает результат на вторник 24 ноября." },
        { q: "Суббота в списке вычитается дважды?", a: "Нет. Выходные считаются выходными. Праздник убирает будний день. Суббота в списке не становится ещё и праздником в счётчике праздников." },
        { q: "Часовой пояс может сменить дату?", a: "Нет. Страница читает год, месяц и день как дату UTC. Местная полночь не переводится, поэтому календарный день не сдвигается." },
        { q: "Это подсчёт шенгенских дней?", a: "Нет. Шенген считает дни присутствия, включая въезд и выезд. Здесь считается промежуток календарных дней и рабочие дни внутри него." }
      ]
    }
  },
  {
    slug: "pomodoro-timer",
    cluster: "webmaster",
    calc: "pomodoro",
    category: "DeveloperApplication",
    affiliate: "nordvpn",
    related: ["world-time-meeting-planner", "freelance-rate-calculator", "seo-text-analyzer", "password-generator"],
    guide: "nordvpn-vs-surfshark-vs-proton-vpn",
    en: {
      title: "Pomodoro Timer | Free Online Calculators",
      description: "Run a focus block, a short break, and a long break after the number of focus blocks you set. Defaults are 25, 5, 15, and 4. Nothing you time is stored.",
      h1: "Pomodoro timer",
      lede: "A focus block, then a short break, and a long break after the number of focus blocks you set. The clock follows a timestamp so a background tab drifts less.",
      banner: "Prices and rates you type are yours. Vendor tariffs change. This page does not measure your live site.",
      ctaTitle: "The timer does not need a tunnel",
      ctaBody: "A cafe network is a fair reason to use a VPN while you work. NordVPN is one such tunnel. The timer does not depend on it, does not check your network, and does not store the session.",
      ctaButton: "See NordVPN",
      body: `<p>The timer is a focus block, a short break, and a long break. The long break arrives after a number of focus blocks you set. The fields start at 25 minutes of focus, 5 minutes of short break, 15 minutes of long break, and 4 focus blocks before the long break. Change any of them before you start, or while you are paused on that phase. The labels on the page follow the phase you are in. Nothing about the plan is stored. Refresh the page and you are back to whatever the fields say now, with the count of finished focus blocks at zero.</p>
<h2>The clock uses a timestamp</h2>
<p>When you press start, the page notes the moment the phase should end. Each tick asks the clock what time it is and subtracts. A naive counter would subtract a quarter second every quarter second and drift when the browser slows a background tab. This one recomputes the time left from the end timestamp, so a tab that slept and woke tends to show the right remaining time instead of a count that kept ticking in the dark. It is still a page timer. A computer that sleeps entirely, or a browser that freezes the tab until you return, will correct when the tick runs again. It is not a hardware alarm, and it will not buzz a phone that is locked in another room.</p>
<p>A short beep uses the Web Audio API, and only after you have pressed start. Browsers block audio that a page tries to play before a gesture. The start button is that gesture. The tone is brief. If the browser refuses the audio context, the clock still moves and the beep is simply absent. There is no soundtrack and no account tied to the sound.</p>
<h2>What the buttons do</h2>
<p>Start begins or resumes the current phase. Pause keeps the time left and stops the clock. Skip ends the phase early and moves on: a finished focus block counts toward the long break, and a break returns you to focus. Reset clears the finished count, returns to focus, and puts the full focus length back on the clock. The long break is chosen when the number of finished focus blocks divides evenly by the block count you set. With the default of 4, the long break follows the fourth, the eighth, and so on. The short break follows the others.</p>
<p>The timer does not make the work billable. Sitting through four focus blocks is not a rate, a tax gross-up, or a count of hours a client will pay. Utilization, days you cannot bill, and the hourly figure that falls out of them live on the <a href="{{href:freelance-rate-calculator}}">freelance rate calculator</a>. If the work was writing, the <a href="{{href:seo-text-analyzer}}">text analyzer</a> can count the draft afterwards. The timer will not attach itself to that draft.</p>
<h2>A cafe network is a separate decision</h2>
<p>Working from a cafe is a reasonable reason to put the laptop on a tunnel. The timer does not depend on that tunnel. It runs the same on a home connection, on a cafe network, and with no network at all once the page has loaded. <a href="{{aff:nordvpn}}">NordVPN</a> is one VPN people use for an untrusted network. This page does not test your connection, does not rank VPN products, and does not claim the beep is safer because a tunnel is on. Turn a tunnel on for the network. Leave it off if you do not need it. The clock does not care.</p>
<ul>
<li>Defaults are 25 minutes, a 5 minute short break, a 15 minute long break, and 4 focus blocks.</li>
<li>The end time is a timestamp, so a background tab drifts less than a naive counter.</li>
<li>The beep plays after you press start. Nothing is stored.</li>
<li>The timer does not price the hour. The freelance calculator does that.</li>
</ul>`,
      faq: [
        { q: "What are the default lengths?", a: "25 minutes of focus, 5 minutes of short break, 15 minutes of long break, and a long break after 4 focus blocks. You can change each number." },
        { q: "Why does a background tab not lose as much time?", a: "The page stores the moment the phase should end and recomputes the time left from the clock. A counter that only subtracts ticks drifts more when the tab is slowed." },
        { q: "When does the beep play?", a: "After you have pressed start, using the Web Audio API, when a phase ends. If the browser blocks audio, the clock still runs." },
        { q: "Is the session stored?", a: "No. Refresh the page and the finished count is gone. There is no account." },
        { q: "Does the timer make the time billable?", a: "No. It only runs the blocks. The freelance rate calculator is where utilization and the hour are priced." }
      ]
    },
    ru: {
      title: "Таймер помодоро | Бесплатные калькуляторы",
      description: "Запустите блок фокуса, короткий перерыв и длинный перерыв после заданного числа блоков. По умолчанию 25, 5, 15 и 4. То, что вы засекли, никуда не пишется.",
      h1: "Таймер помодоро",
      lede: "Блок фокуса, затем короткий перерыв, а длинный перерыв — после заданного числа блоков фокуса. Часы держатся за метку времени, поэтому фоновая вкладка плывёт меньше.",
      banner: "Цены и ставки вводите вы. Тарифы продавцов меняются. Страница не замеряет ваш живой сайт.",
      ctaTitle: "Таймеру туннель не нужен",
      ctaBody: "Сеть в кафе — нормальный повод включить VPN, пока вы работаете. NordVPN — один из таких туннелей. Таймер от него не зависит, сеть не проверяет и сессию не хранит.",
      ctaButton: "Смотреть NordVPN",
      body: `<p>Таймер — это блок фокуса, короткий перерыв и длинный перерыв. Длинный приходит после стольких блоков фокуса, сколько вы задали. Сначала в полях стоят 25 минут фокуса, 5 минут короткого перерыва, 15 минут длинного и 4 блоков фокуса до длинного перерыва. Любое число можно сменить до старта или на паузе в текущей фазе. Подписи на странице следуют за фазой, в которой вы находитесь. План никуда не пишется. Обновите страницу — снова то, что сейчас в полях, а счётчик законченных блоков фокуса на нуле.</p>
<h2>Часы держатся за метку времени</h2>
<p>Когда вы нажимаете старт, страница запоминает момент, когда фаза должна кончиться. Каждый тик спрашивает часы, который час, и вычитает. Наивный счётчик вычитал бы четверть секунды каждые четверть секунды и плыл бы, когда браузер замедляет фоновую вкладку. Здесь оставшееся время каждый раз считается от метки конца, поэтому вкладка, которая уснула и проснулась, чаще показывает верный остаток, а не число, которое тикало в темноте. Это всё ещё таймер страницы. Компьютер, который уснул целиком, или браузер, который морозит вкладку, пока вы не вернётесь, поправится, когда тик снова пойдёт. Это не аппаратный будильник, и он не зажужжит в телефоне, который лежит запертым в другой комнате.</p>
<p>Короткий сигнал идёт через Web Audio API и только после того, как вы нажали старт. Браузеры блокируют звук, который страница пытается сыграть до жеста. Кнопка старта — этот жест. Тон короткий. Если браузер отказывает звуковому контексту, часы всё равно идут, а сигнала просто нет. Дорожки нет, и к звуку не привязан аккаунт.</p>
<h2>Что делают кнопки</h2>
<p>Старт начинает или продолжает текущую фазу. Пауза сохраняет остаток и останавливает часы. Дальше заканчивает фазу досрочно и переходит: законченный блок фокуса идёт в счёт до длинного перерыва, а перерыв возвращает к фокусу. Сброс обнуляет счётчик, возвращает фокус и ставит на часы полную длину фокуса. Длинный перерыв выбирается, когда число законченных блоков фокуса делится нацело на заданное число блоков. При четвёрке по умолчанию длинный перерыв идёт после четвёртого, восьмого и так далее. После остальных — короткий.</p>
<p>Таймер не делает работу оплачиваемой. Четыре блока фокуса — это не ставка, не наращивание на налог и не число часов, за которые заплатит клиент. Загрузка, дни, которые нельзя выставить, и почасовая цифра, которая из них выпадает, живут в <a href="{{href:freelance-rate-calculator}}">калькуляторе ставки фрилансера</a>. Если работа была текстом, <a href="{{href:seo-text-analyzer}}">анализ текста</a> может потом посчитать черновик. Таймер к этому черновику не приклеится.</p>
<h2>Сеть в кафе — отдельное решение</h2>
<p>Работать из кафе — нормальный повод посадить ноутбук в туннель. Таймер от этого туннеля не зависит. Он идёт одинаково на домашнем соединении, в сети кафе и совсем без сети, когда страница уже загрузилась. <a href="{{aff:nordvpn}}">NordVPN</a> — один из VPN, которым пользуются в чужой сети. Страница соединение не проверяет, продукты VPN не ранжирует и не утверждает, что сигнал безопаснее, потому что туннель включён. Включайте туннель ради сети. Не включайте, если он не нужен. Часам всё равно.</p>
<ul>
<li>По умолчанию 25 минут, короткий перерыв 5, длинный 15 и 4 блока фокуса.</li>
<li>Конец фазы — метка времени, поэтому фоновая вкладка плывёт меньше, чем наивный счётчик.</li>
<li>Сигнал звучит после нажатия старта. Ничего не записывается.</li>
<li>Таймер час не оценивает. Это делает калькулятор фрилансера.</li>
</ul>`,
      faq: [
        { q: "Какие длины стоят по умолчанию?", a: "25 минут фокуса, 5 минут короткого перерыва, 15 минут длинного и длинный перерыв после 4 блоков фокуса. Каждое число можно сменить." },
        { q: "Почему фоновая вкладка меньше теряет время?", a: "Страница запоминает момент конца фазы и заново считает остаток по часам. Счётчик, который только вычитает тики, плывёт сильнее, когда вкладку замедляют." },
        { q: "Когда звучит сигнал?", a: "После того как вы нажали старт, через Web Audio API, в конце фазы. Если браузер блокирует звук, часы всё равно идут." },
        { q: "Сессия сохраняется?", a: "Нет. Обновите страницу — счётчик законченных блоков пропадёт. Аккаунта нет." },
        { q: "Таймер делает время оплачиваемым?", a: "Нет. Он только ведёт блоки. Ставка и загрузка считаются в калькуляторе ставки фрилансера." }
      ]
    }
  },

];
