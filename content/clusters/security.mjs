export const securityTools = [
  {
    slug: "password-generator",
    cluster: "security",
    calc: "password",
    category: "SecurityApplication",
    affiliate: "proton",
    secondary: "bitwarden",
    related: ["password-strength-checker", "hash-generator", "disposable-email-generator", "aes-encryptor"],
    guide: "best-password-manager",
    en: {
      title: "Password Generator | Free Online Calculators",
      description: "Generate a random password or a passphrase in this browser. Entropy is length times log2 of the alphabet. Nothing you generate here is uploaded.",
      h1: "Password generator",
      lede: "A random password or a passphrase, drawn in this browser, with the entropy printed beside it.",
      banner: "Passwords, photos, and text stay in this browser, except the IP test, which says which public service it calls.",
      ctaTitle: "Keep the password you just made",
      ctaBody: "A manager stores a unique password for each site, so the one you generated is not typed into the next signup as well. Proton and Bitwarden both do this. Plans and prices change, so read the current page before you pay.",
      ctaButton: "Proton",
      secondaryButton: "Bitwarden",
      body: `<p>This page builds a password or a passphrase on your device and shows the entropy next to it. The characters come from crypto.getRandomValues, not from Math.random. Math.random is a general-purpose generator, and it is the wrong tool for a secret. Draws that would make some characters more likely than others are thrown away, so the alphabet stays even. Nothing is uploaded. There is no account. When you close the tab, this page no longer holds the string.</p>
<h2>How the bits are counted</h2>
<p>Entropy for a random password is the length times log2 of the alphabet size. A 12-character password from 62 symbols, a to z, A to Z, and 0 to 9, is about 71.5 bits. That is 12 times log2 of 62, and it describes the space only when every string is equally likely. The time next to a result is a 50 percent chance under a random search of that whole space. It is not a date until which the password is guaranteed to hold. At 10 billion guesses a second, the fast offline rate this page uses, that chance for 71.5 bits arrives on the order of 5,100 years. The slow figure is 10 thousand guesses a second, closer to an online form that slows people down. Both assume the attacker already has something to check, such as a stolen hash, and tries the whole space in random order.</p>
<p>The form does not open on the 12-character example. It starts at 16 characters, with lower case, upper case, and digits on, symbols off, and lookalikes such as 0, O, 1, and l removed. Letters and digits with those lookalikes removed are 57 symbols, not 62. A longer string from that slightly smaller set still carries more entropy than the worked example, about 93 bits at the default length, but the number to trust is the one printed beside the password you actually generated. Turning symbols on enlarges the alphabet. A separator you choose between passphrase words is fixed by you, so it adds no bits.</p>
<h2>Why 48 real bits can beat a clever password</h2>
<p>Human passwords fall to dictionaries much faster than the alphabet formula suggests. People capitalise a word, swap in a digit, and append a year. Attackers try leaked lists and those patterns before they ever walk from a to z. A shorter password that looks clever, because it has a capital and a symbol, can still be one entry on that list. Length times log2 of a huge alphabet then overstates the work, because that alphabet is not the search they run.</p>
<p>Passphrase entropy is the word count times log2 of the list size. This site's list has 256 words, so each word is 8 bits, because 2 to the 8 is 256. Six words are 48 bits. The Russian list is another 256 words and the same arithmetic. The words are picked uniformly, with the biased draws thrown away. Forty-eight bits of a real passphrase can beat a shorter clever password that is already in a dictionary: the dictionary search ends quickly, and the random words are still work the attacker has to do. That holds only if you keep the words the page dealt. A pet name or a proverb spends the bits. At 10 billion guesses a second, a 50 percent chance against 48 bits is about four hours, not 5,100 years. At 10 thousand guesses a second it is about 450 years. Each extra word adds 8 bits. Four words from this list are only 32 bits, and at the fast rate a 50 percent chance is about a fifth of a second. Six is the default on the form for a reason.</p>
<h2>Store a unique password</h2>
<p>A strong password you then reuse is already lost if one site leaks it. No entropy figure on this page can see that leak. Keep a separate password for each account in a manager. <a href="{{aff:proton}}">Proton</a> and <a href="{{aff:bitwarden}}">Bitwarden</a> both store those entries. Plans change, so read the current offer rather than a price copied from an article. The <a href="{{href:blog/best-password-manager}}">password manager guide</a> describes what to compare. Use the <a href="{{href:password-strength-checker}}">strength checker</a> when you want the penalties for repeats and sequences applied to something you typed yourself. A key for the <a href="{{href:aes-encryptor}}">AES encryptor</a> belongs in the same manager. A <a href="{{href:hash-generator}}">hash</a> is a fingerprint, not a login. The <a href="{{href:disposable-email-generator}}">address builder</a> makes a string and does not open a mailbox.</p>`,
      faq: [
        { q: "Is the password sent to a server?", a: "No. crypto.getRandomValues runs in your browser, and the string is shown on the page. This site never receives it. Closing the tab drops it from the page." },
        { q: "Why does my result not say 71.5 bits?", a: "71.5 bits is the worked example of 12 characters from all 62 letters and digits. The form starts at 16 characters and, unless you keep lookalikes, uses 57 symbols. Read the entropy printed next to the password you generated." },
        { q: "Is a six-word passphrase stronger than every shorter password?", a: "It beats a short password that is really a dictionary entry. Six random words from this 256-word list are 48 bits. Against a fast offline attacker who knows the list, a 50 percent chance is about four hours. Against human habits, the random words usually win." },
        { q: "Why not Math.random?", a: "Math.random is not built to be unpredictable. This page uses crypto.getRandomValues and discards draws that would make some characters more likely than others." },
        { q: "Should I reuse this password on a second site?", a: "Reuse means one leak opens the other account. Store a unique password in a manager. Proton and Bitwarden are two options here, and their plans change." }
      ]
    },
    ru: {
      title: "Генератор паролей | Бесплатные калькуляторы",
      description: "Случайный пароль или парольная фраза прямо в этом браузере. Энтропия равна длине, умноженной на log2 алфавита. Строка никуда не отправляется.",
      h1: "Генератор паролей",
      lede: "Случайный пароль или парольная фраза в этом браузере, энтропия написана рядом.",
      banner: "Пароли, фото и текст остаются в этом браузере. Исключение — проверка IP: на странице написано, какую публичную службу она вызывает.",
      ctaTitle: "Сохраните пароль, который только что собрали",
      ctaBody: "Менеджер хранит отдельный пароль для каждого сайта, и строку с этой страницы не придётся вставлять в следующую регистрацию. Для этого подходят Proton и Bitwarden. Тарифы меняются, цену смотрите на их странице.",
      ctaButton: "Proton",
      secondaryButton: "Bitwarden",
      body: `<p>Страница собирает пароль или парольную фразу на вашем устройстве и показывает энтропию рядом. Символы берёт crypto.getRandomValues, а не Math.random. Math.random — генератор на все случаи, для секрета он не подходит. Лишние значения отбрасываются, иначе остаток от деления делал бы одни символы чуть чаще других. На сервер ничего не уходит. Аккаунта нет. Закроете вкладку — строка с этой страницы исчезнет.</p>
<h2>Как считаются биты</h2>
<p>Энтропия случайного пароля — это длина, умноженная на логарифм размера алфавита по основанию 2. Двенадцать символов из 62 знаков, то есть строчные, заглавные и цифры, дают около 71,5 бита. Это 12 умножить на log2 от 62, и цифра описывает пространство, только если каждая строка равновероятна. Время рядом — не дата, до которой пароль «точно простоит». Это момент, когда случайный перебор всего пространства уже имеет шанс около 50%. При 10 миллиардах попыток в секунду, быстром офлайн-темпе этой страницы, для 71,5 бита такой момент наступает порядка 5100 лет. Вторая цифра — 10 тысяч попыток в секунду, ближе к форме, которая ставит паузу между попытками. Обе цифры предполагают, что проверять уже есть что, например украденный хеш, и что перебор идёт по всему пространству в случайном порядке. Блокировка или второй фактор в сумму не входят.</p>
<p>Форма открывается не на примере из 12 символов. Сначала там 16 символов: строчные, заглавные и цифры включены, знаки выключены, похожие символы вроде 0, O, 1 и l убраны. Букв и цифр в таком наборе 57, не 62. Более длинная строка из чуть меньшего алфавита всё равно несёт больше энтропии, чем учебный пример: на длине по умолчанию выходит около 93 бита. Верить стоит цифре, которую страница написала у только что собранного пароля. Включённые знаки увеличивают алфавит. Разделитель между словами фразы вы задаёте сами, бит он не добавляет.</p>
<h2>Почему 48 настоящих бит берут хитрый пароль</h2>
<p>Пароли, которые человек сочиняет сам, словари забирают гораздо быстрее, чем обещает формула алфавита. Берут слово, делают первую букву большой, меняют букву на цифру и дописывают год. Такие списки давно лежат открыто. Перебор начинается с них, а не с честного прохода от a до z. Короткий пароль, который выглядит хитрым из-за заглавной и знака, всё равно может быть строкой из этого списка. Длина, умноженная на логарифм огромного алфавита, тогда завышает объём работы: этот алфавит никто не перебирает.</p>
<p>Энтропия парольной фразы — число слов, умноженное на логарифм размера списка. В списке сайта 256 слов, поэтому каждое слово даёт 8 бит, потому что два в восьмой степени — это 256. Шесть слов — 48 бит. Русский список — другие 256 слов и та же арифметика. Слова выбираются равномерно, перекошенные значения выбрасываются. 48 бит настоящей парольной фразы обходят короткий хитрый пароль, который уже лежит в словаре: словарь кончается быстро, а случайные слова ещё надо угадать. Это верно, пока вы не подменили слова. Кличка или пословица съедают биты. Масштаб честно меньше примера на 71,5 бита. При 10 миллиардах попыток в секунду шанс 50% для 48 бит — около четырёх часов, а не 5100 лет. При 10 тысячах попыток в секунду — около 450 лет. Каждое лишнее слово добавляет 8 бит. Четыре слова из этого списка — только 32 бита, и быстрый темп закрывает их примерно за пятую часть секунды. Шесть слов стоят в форме по умолчанию не зря.</p>
<h2>Куда деть готовую строку</h2>
<p>Сильный пароль, который вы пустили на второй сайт, уже потерян, если первый сайт утёк. Эту утечку цифра на странице не видит. Держите отдельный пароль на каждый аккаунт в менеджере. Так умеют <a href="{{aff:proton}}">Proton</a> и <a href="{{aff:bitwarden}}">Bitwarden</a>. Тарифы меняются, цену смотрите у них, а не в чужой статье. В <a href="{{href:blog/best-password-manager}}">статье про менеджеры паролей</a> сказано, что сравнивать. <a href="{{href:password-strength-checker}}">Проверка стойкости</a> нужна, когда хотите штраф за повтор и ряд у пароля, который набрали сами. Ключ для <a href="{{href:aes-encryptor}}">шифрования AES</a> живёт в том же менеджере. <a href="{{href:hash-generator}}">Хеш</a> — отпечаток, им на сайт не входят. <a href="{{href:disposable-email-generator}}">Сборщик адреса</a> делает строку и ящик не открывает.</p>`,
      faq: [
        { q: "Пароль уходит на сервер?", a: "Нет. crypto.getRandomValues работает в браузере, строка показывается на странице. Сайт её не получает. Закрыли вкладку — на странице её нет." },
        { q: "Почему у меня не 71,5 бита?", a: "71,5 бита — это учебный пример: 12 символов из всех 62 букв и цифр. Форма начинает с 16 символов и, если похожие знаки выключены, берёт 57 символов. Смотрите энтропию рядом с вашим паролем." },
        { q: "Шесть слов сильнее любого короткого пароля?", a: "Они сильнее короткого пароля, который на деле словарная строка. Шесть случайных слов из списка в 256 штук — 48 бит. Против быстрого офлайн-перебора, если список известен, 50% наступает примерно за четыре часа. Против человеческих привычек случайные слова обычно выигрывают." },
        { q: "Почему не Math.random?", a: "Math.random не задуман как непредсказуемый источник. Страница берёт crypto.getRandomValues и отбрасывает значения, из-за которых одни символы выпадали бы чаще." },
        { q: "Можно поставить этот пароль на второй сайт?", a: "Повтор означает, что одна утечка открывает и второй аккаунт. Храните отдельный пароль в менеджере. Proton и Bitwarden — два варианта на этой странице, их тарифы меняются." }
      ]
    }
  },
  {
    slug: "password-strength-checker",
    cluster: "security",
    calc: "strength",
    category: "SecurityApplication",
    affiliate: "bitwarden",
    secondary: "onepassword",
    related: ["password-generator", "hash-generator", "aes-encryptor", "disposable-email-generator"],
    guide: "best-password-manager",
    en: {
      title: "Password Strength Checker | Free Online Calculators",
      description: "Estimate crack time from the character classes in a password, then penalise common passwords, repeats, and sequences. The check stays in this browser.",
      h1: "Password strength checker",
      lede: "A local estimate of crack time from the classes in the password, with penalties for patterns people actually use.",
      banner: "Passwords, photos, and text stay in this browser, except the IP test, which says which public service it calls.",
      ctaTitle: "Store a different password for each site",
      ctaBody: "If one site leaks a password you reused, this checker cannot know that. Unique passwords belong in a manager. Bitwarden and 1Password are the two named here. Compare current plans yourself. They change.",
      ctaButton: "Bitwarden",
      secondaryButton: "1Password",
      body: `<p>The checker reads the field in this browser and nowhere else. The password is not uploaded, and the arithmetic does not need a network. The estimate starts from the character classes that are actually present. Lower case contributes 26, upper case 26, digits 10, and any symbol or other character a further 32. Bits are the length times log2 of that sum. What you get is a model of brute force over the classes it saw.</p>
<h2>What gets penalised</h2>
<p>After the class count, the page penalises habits. A password on its short list of common ones, matched without caring about letter case, is capped at a very small estimate. A run of the same character, three or more in a row, cuts the estimate. A sequence cuts it too: abcd, 1234, or four keys along a keyboard row such as qwerty, including that row typed backwards. The penalties stack. A common password is limited first, a repeat cuts what remains, and a sequence cuts it again when the string has both. Password1 is on the common list once case is ignored. A long string can still be cut by 1234 or by qwerty sitting in the middle. Read the bits and the warning under them together.</p>
<p>The time on screen is a 50 percent brute-force estimate at the guess rate you pick: 10 billion a second, 10 thousand, or 1 thousand. It assumes the attacker tries that reduced space at random. It is not zxcvbn. It is not a breach check. The page never asks a leak collection whether this string has been seen. A reused password is already lost if one site leaked it, and this page cannot know that. The number can look large while the password is still a bad one to type into a second account. A fresh unique password comes from the <a href="{{href:password-generator}}">password generator</a>. A <a href="{{href:hash-generator}}">hash</a> of the string is not a replacement password. A key you are about to use on the <a href="{{href:aes-encryptor}}">AES encryptor</a> is worth a look here before you trust it. An alias from the <a href="{{href:disposable-email-generator}}">address builder</a> is a different string and says nothing about strength.</p>
<h2>The field is on the screen</h2>
<p>If you are on a shared computer, close the tab when you finish. The password sits in the field, in plain sight. Anyone who can see the display can read it. The script does not send the field anywhere. You can disconnect and the check still runs. The screen remains a copy until the tab is gone. Prefer to test a sample if you do not control the machine, rather than a password you still use on a bank or a mail account. Store unique passwords in a manager. <a href="{{aff:bitwarden}}">Bitwarden</a> and <a href="{{aff:onepassword}}">1Password</a> are the two named on this page. Plans change, and this page does not quote a price. The <a href="{{href:blog/best-password-manager}}">password manager guide</a> is the comparison of what to check before you pick one.</p>
<p>Treat the whole result as a model. It tells you how large a class-based search looks after the obvious patterns are taxed. It does not tell you that a site you already signed up to has kept your password safe, and it does not score passphrases from the generator's word list the way that page counts words times 8 bits. If the generator dealt the words, trust that page's entropy. If you typed the string yourself, trust the warnings here.</p>`,
      faq: [
        { q: "Does this send my password anywhere?", a: "No. The script reads the field locally. You can disconnect the network and the check still runs. This site does not receive the password." },
        { q: "Is this zxcvbn or a search of leaked passwords?", a: "Neither. It is an estimate from the character classes present, then a penalty for a common password, a repeat, or a sequence. It does not ask a breach list whether the string has leaked." },
        { q: "What does the time mean?", a: "It is a 50 percent brute-force estimate at the guess rate you pick: 10 billion, 10 thousand, or 1 thousand guesses a second. It assumes a random walk over the reduced space, not a promise about a leak that already happened." },
        { q: "Why did a long password score badly?", a: "A known common password is capped. Three or more of the same character, a run such as abcd or 1234, or a keyboard row such as qwerty, cuts the estimate. Those penalties can apply together." },
        { q: "I am on a shared computer. What should I do?", a: "Close the tab when you finish. The password is on screen in the field. Anyone who can see the display can read it. The page does not store it, but the screen does until the tab is gone." }
      ]
    },
    ru: {
      title: "Проверка стойкости пароля | Бесплатные калькуляторы",
      description: "Оценка времени перебора по классам символов, со штрафом за частый пароль, повтор и ряд. Проверка идёт в браузере и никуда не отправляет поле.",
      h1: "Проверка стойкости пароля",
      lede: "Локальная оценка времени перебора по классам символов, со штрафом за шаблоны, которыми люди пользуются на самом деле.",
      banner: "Пароли, фото и текст остаются в этом браузере. Исключение — проверка IP: на странице написано, какую публичную службу она вызывает.",
      ctaTitle: "Держите отдельный пароль на каждый сайт",
      ctaBody: "Если один сайт утёк, а пароль там был тот же, эта проверка об утечке не узнает. Уникальные пароли живут в менеджере. Здесь названы Bitwarden и 1Password. Сравните текущие тарифы сами: они меняются.",
      ctaButton: "Bitwarden",
      secondaryButton: "1Password",
      body: `<p>Проверка читает поле только в этом браузере. Пароль никуда не отправляется, для счёта сеть не нужна. Оценка начинается с тех классов символов, которые в строке правда есть. Строчные дают 26, заглавные 26, цифры 10, а любой знак или другой символ добавляет ещё 32. Биты — это длина, умноженная на логарифм этой суммы по основанию 2. Получается модель перебора по тем классам, которые страница увидела.</p>
<h2>За что идёт штраф</h2>
<p>После подсчёта классов страница штрафует привычки. Пароль из короткого списка частых, без учёта регистра, обрезается до очень маленькой оценки. Три одинаковых символа подряд оценку снижают. Ряд тоже снижает: abcd, 1234 или четыре клавиши вдоль ряда клавиатуры, как qwerty, в том числе ряд задом наперёд. Штрафы складываются. Частый пароль сначала ограничивает оценку сверху, повтор режет остаток, ряд режет ещё раз, если в строке есть и то и другое. Password1 после снятия регистра попадает в частые. Длинную строку всё равно режет 1234 или qwerty в середине. Смотрите биты и предупреждение под ними вместе.</p>
<p>Время на экране — это 50% при том темпе перебора, который вы выбрали: 10 миллиардов, 10 тысяч или 1 тысяча попыток в секунду. Предполагается случайный проход по уже уменьшенному пространству. Это не zxcvbn. Это не сверка с утечками. Страница никуда не отправляет строку, чтобы узнать, светилась ли она раньше. Повторно использованный пароль уже потерян, если хотя бы один сайт его слил, и узнать это здесь нельзя. Цифра может выглядеть большой, а нести пароль на второй аккаунт всё равно нельзя. Новый уникальный пароль собирает <a href="{{href:password-generator}}">генератор паролей</a>. <a href="{{href:hash-generator}}">Хеш</a> этой строки пароль не заменяет. Ключ, которым вы собираетесь зашифровать заметку на странице <a href="{{href:aes-encryptor}}">AES</a>, имеет смысл глянуть здесь заранее. Псевдоним со <a href="{{href:disposable-email-generator}}">сборщика адреса</a> — другая строка, про стойкость она ничего не говорит.</p>
<h2>Поле видно на экране</h2>
<p>Если компьютер общий, закройте вкладку, когда закончите. Пароль лежит в поле, открытым текстом. Кто видит монитор, тот его читает. Скрипт поле не отправляет. Сеть можно отключить, проверка всё равно посчитает. Экран остаётся копией, пока вкладка открыта. На чужой машине лучше проверить образец, а не пароль, которым вы до сих пор входите в банк или в почту. Уникальные пароли храните в менеджере. На этой странице названы <a href="{{aff:bitwarden}}">Bitwarden</a> и <a href="{{aff:onepassword}}">1Password</a>. Тарифы меняются, цену страница не называет. <a href="{{href:blog/best-password-manager}}">Статья про менеджеры паролей</a> как раз про то, что проверить до выбора.</p>
<p>Весь результат — модель. Она говорит, насколько большим выглядит перебор по классам, когда очевидные шаблоны уже получили штраф. Про то, слил ли сайт пароль раньше, она молчит. И парольную фразу с генератора она не считает так, как та страница: там слова умножают на 8 бит. Если слова выдала страница генератора, верьте её энтропии. Если строку набрали вы, верьте предупреждениям здесь.</p>
<p>Темп в меню — ваше допущение, не свойство сайта, куда вы входите. 10 миллиардов попыток в секунду — быстрый офлайн, когда хеш уже украден. 10 тысяч и 1 тысяча ближе к форме, которая не даёт стучаться без остановки. Страница не знает, какой темп будет у конкретного сервиса. Она считает ровно тот, который выбран в списке.</p>`,
      faq: [
        { q: "Пароль куда-нибудь уходит?", a: "Нет. Скрипт читает поле на месте. Сеть можно отключить, проверка всё равно сработает. Сайт пароль не получает." },
        { q: "Это zxcvbn или поиск по утёкшим паролям?", a: "Ни то, ни другое. Это оценка по классам символов, которые есть в строке, и штраф за частый пароль, повтор или ряд. Со списком утечек строка не сверяется." },
        { q: "Что означает время?", a: "Это оценка до вероятности 50% при том темпе, который вы выбрали: 10 миллиардов, 10 тысяч или 1 тысяча попыток в секунду. Речь о случайном проходе по уменьшенному пространству, не об утечке, которая уже случилась." },
        { q: "Почему длинный пароль получил плохую оценку?", a: "Известный частый пароль обрезается. Три одинаковых символа, ряд вроде abcd или 1234, или клавиатурный ряд вроде qwerty снижают оценку. Штрафы могут действовать вместе." },
        { q: "Я за общим компьютером. Что сделать?", a: "Закройте вкладку, когда закончите. Пароль виден в поле на экране. Кто видит монитор, тот его читает. Страница его не хранит, но экран хранит, пока вкладка открыта." }
      ]
    }
  },
  {
    slug: "ip-leak-test",
    cluster: "security",
    calc: "ip",
    category: "SecurityApplication",
    affiliate: "nordvpn",
    secondary: "surfshark",
    related: ["exif-remover", "disposable-email-generator", "aes-encryptor", "meeting-planner"],
    guide: "nordvpn-vs-surfshark-vs-proton-vpn",
    en: {
      title: "IP Leak Test | Free Online Calculators",
      description: "See the public IP that ipify and ipwho.is report, then compare WebRTC candidates from a Google STUN server. This page cannot see your DNS resolver.",
      h1: "IP leak test",
      lede: "The public address ipify and ipwho.is see, set next to whatever WebRTC is willing to reveal.",
      banner: "Passwords, photos, and text stay in this browser, except the IP test, which says which public service it calls.",
      ctaTitle: "A tunnel only changes the address while it is on",
      ctaBody: "NordVPN and Surfshark can change the address these lookups see, for as long as the tunnel stays up. This page does not rank them by speed. Plans change. The comparison guide says what to check.",
      ctaButton: "NordVPN",
      secondaryButton: "Surfshark",
      body: `<p>Press the button and the browser does the lookups itself. It fetches api.ipify.org for the public IP, fetches ipwho.is for a coarse place and the network name, and opens WebRTC with stun.l.google.com. Candidate addresses from that connection are compared with the public IP. A different public address is reported as a leak. The place, when the lookup returns it, is a city, a region, and a country, not a street and not a house. The network line is the provider name from the same answer. If a lookup fails, that line stays empty. The page does not guess an address to fill the gap. The WebRTC listen is brief, a couple of seconds, then the candidates gathered so far are what you see.</p>
<h2>Who sees the IP</h2>
<p>Those services see the IP they are asked about. The requests leave your browser and go to them. This site does not receive the response. There is no account here that could store it. That is the exception named in the banner: passwords, photos, and text stay on the page, and this test is the one that says which public service it calls. Run it when you want to know the address a website would see, including after you have switched a tunnel on or off. Run it again after the change. One result from yesterday does not describe the path you are on now.</p>
<p>Names that end in .local are mDNS. The browser is hiding local addresses behind them. That is a privacy feature, not a leak, and the comparison skips those names. <strong>A web page cannot see your DNS resolver.</strong> This test does not ask which resolver you use, and an ordinary page is not able to see it. Do not read the result as a DNS leak test. The comparison that exists here is the public IP against the WebRTC list. A matching public address, with no extra public candidate, is the clean result this page knows how to report. It is not a certificate that every possible bypass is absent.</p>
<h2>What a tunnel changes</h2>
<p>A VPN tunnel changes the address those services see only while it is on. Disconnect, and they see the previous address again. The useful part of a leak test is noticing a WebRTC candidate that bypasses the tunnel and still names your real public address. <a href="{{aff:nordvpn}}">NordVPN</a> and <a href="{{aff:surfshark}}">Surfshark</a> are two products that can hold such a tunnel. This page does not rank them by speed. It has no speed test, and it will not invent one. Plans change. Read the current terms on their sites. The <a href="{{href:blog/nordvpn-vs-surfshark-vs-proton-vpn}}">comparison guide</a> lists what to check instead of a ranking this site did not measure.</p>
<p>GPS inside a photo, which the <a href="{{href:exif-remover}}">EXIF remover</a> reads, is a place you stood. It is not this network address. Stripping a picture does not change what ipify sees, and a tunnel does not scrub a coordinate already stored in a file. An alias from the <a href="{{href:disposable-email-generator}}">address builder</a> hides neither the IP nor the GPS point. A note on the <a href="{{href:aes-encryptor}}">AES page</a> is a third job: secrecy of text, not of the path your packets take. The <a href="{{href:meeting-planner}}">meeting planner</a> only converts clocks across time zones. None of those pages replaces the button on this one.</p>`,
      faq: [
        { q: "Which services see my IP?", a: "On the button press the browser asks api.ipify.org for the address, ipwho.is for a coarse place and the network name, and stun.l.google.com while it gathers WebRTC candidates. Those services see the IP. This site does not receive their response." },
        { q: "Will this show my DNS resolver?", a: "No. A normal web page cannot see which resolver you use. This is not a DNS leak test. Compare the public IP with the WebRTC list." },
        { q: "What counts as a leak here?", a: "A public address from WebRTC that differs from the ipify address. Names that end in .local are mDNS. The browser is hiding local addresses, which is a privacy feature, not a leak." },
        { q: "Does a VPN change the address this page shows?", a: "Only while the tunnel is on. The lookups then see the VPN address. If WebRTC still offers your real public address, the page reports that difference. Turning the VPN off returns the previous address." },
        { q: "Which is faster, NordVPN or Surfshark?", a: "This page did not measure speed and does not rank them that way. Plans change. The comparison guide lists what to check before you buy." }
      ]
    },
    ru: {
      title: "Проверка утечки IP | Бесплатные калькуляторы",
      description: "Какой публичный IP видят ipify и ipwho.is и какие адреса отдаёт WebRTC через STUN Google. Страница не видит ваш DNS-резолвер и не делает DNS-тест.",
      h1: "Проверка утечки IP",
      lede: "Публичный адрес, который видят ipify и ipwho.is, рядом с тем, что готов показать WebRTC.",
      banner: "Пароли, фото и текст остаются в этом браузере. Исключение — проверка IP: на странице написано, какую публичную службу она вызывает.",
      ctaTitle: "Туннель меняет адрес, только пока он включён",
      ctaBody: "NordVPN и Surfshark могут подменить адрес, который видят эти службы, на время работы туннеля. По скорости страница их не расставляет. Тарифы меняются. Что сравнивать, написано в статье.",
      ctaButton: "NordVPN",
      secondaryButton: "Surfshark",
      body: `<p>Кнопка запускает запросы из самого браузера. Страница берёт публичный IP у api.ipify.org, спрашивает ipwho.is о городе, регионе, стране и об имени сети и открывает WebRTC через stun.l.google.com. Адреса из кандидатов сравниваются с публичным IP. Другой публичный адрес страница считает утечкой. Место, если служба его вернула, — город, регион и страна, без улицы и дома. Строка сети — имя провайдера из того же ответа. Если запрос не удался, строка остаётся пустой: адрес страница не выдумывает. Страница слушает WebRTC недолго, пару секунд, и показывает кандидатов, которые успели прийти.</p>
<h2>Кто видит IP</h2>
<p>Эти службы видят IP, о котором их спросили. Запрос уходит из вашего браузера к ним. Ответ этот сайт не получает. Аккаунта, куда его можно было бы положить, здесь нет. В этом и есть исключение из плашки наверху: пароли, фото и текст остаются на странице, а эта проверка прямо говорит, какую публичную службу вызывает. Запускайте её, когда хотите знать адрес, который увидел бы сайт, в том числе после того, как туннель включили или выключили. После смены пути нажмите ещё раз. Вчерашний результат не описывает сегодняшний маршрут.</p>
<p>Имена, которые кончаются на .local, — это mDNS. Браузер прячет за ними локальные адреса. Так задумано, это не утечка, и сравнение такие имена пропускает. <strong>Страница не видит ваш DNS-резолвер.</strong> Тест не спрашивает, каким сервером имён вы пользуетесь, и обычная страница этого увидеть не может. Не читайте результат как проверку утечки DNS. Сравнение, которое здесь есть, — публичный IP против списка WebRTC. Совпавший публичный адрес и ни одного лишнего публичного кандидата — это чистый результат, который страница умеет показать. Это не справка, что любой мыслимый обход отсутствует.</p>
<h2>Что меняет туннель</h2>
<p>Туннель VPN меняет адрес, который видят эти службы, только пока он включён. Выключили — они снова видят прежний. Польза теста в том, чтобы заметить адрес из WebRTC, который обходит туннель и всё ещё называет ваш настоящий публичный адрес. <a href="{{aff:nordvpn}}">NordVPN</a> и <a href="{{aff:surfshark}}">Surfshark</a> умеют держать такой туннель. По скорости страница их не расставляет. Замера нет, и выдумывать его она не станет. Тарифы меняются. Актуальные условия читайте у них. <a href="{{href:blog/nordvpn-vs-surfshark-vs-proton-vpn}}">Сравнительная статья</a> перечисляет, что проверить, вместо рейтинга, которого этот сайт не измерял.</p>
<p>GPS на снимке, который читает <a href="{{href:exif-remover}}">снятие EXIF</a>, — это место, где вы стояли. Это не адрес в сети. Снимок без меток не меняет то, что видит ipify, а туннель не стирает координату, уже лежащую в файле. Псевдоним со <a href="{{href:disposable-email-generator}}">сборщика адреса</a> не прячет ни IP, ни точку GPS. Заметка на странице <a href="{{href:aes-encryptor}}">AES</a> — третья задача: скрыть текст, а не путь пакетов. <a href="{{href:meeting-planner}}">Планировщик созвона</a> только переводит часы между поясами. Ни одна из этих страниц не заменяет кнопку здесь.</p>
<p>Службы показывают тот адрес, с которого к ним пришёл запрос. Офисный прокси в этой строке — адрес прокси, а не поломка теста. WebRTC иногда добавляет адрес внутри локальной сети, если браузер не спрятал его за именем .local. Он отличается от публичного, и страница его покажет. Это повод глянуть, не светится ли внутренняя сеть. Вывод, что утёк DNS, из этого не следует: резолвер по-прежнему не виден. Повторите тест после включения туннеля и после выключения. Два результата рядом полезнее одного снимка экрана.</p>`,
      faq: [
        { q: "Какие службы видят мой IP?", a: "По кнопке браузер спрашивает api.ipify.org об адресе, ipwho.is о городе, регионе, стране и имени сети, и stun.l.google.com, пока собирает кандидатов WebRTC. Эти службы видят IP. Сайт их ответ не получает." },
        { q: "Тест покажет мой DNS-резолвер?", a: "Нет. Обычная страница не видит, каким резолвером вы пользуетесь. Это не проверка утечки DNS. Сравнивайте публичный IP со списком WebRTC." },
        { q: "Что здесь считается утечкой?", a: "Публичный адрес из WebRTC, который отличается от адреса ipify. Имена на .local — это mDNS. Браузер прячет локальные адреса, так и задумано, это не утечка." },
        { q: "VPN меняет адрес на этой странице?", a: "Только пока туннель включён. Тогда службы видят адрес VPN. Если WebRTC всё ещё предлагает ваш настоящий публичный адрес, страница покажет разницу. Выключили VPN — вернётся прежний адрес." },
        { q: "Кто быстрее, NordVPN или Surfshark?", a: "Страница скорость не мерила и так их не расставляет. Тарифы меняются. Что проверить до покупки, написано в сравнительной статье." }
      ]
    }
  },
  {
    slug: "disposable-email-generator",
    cluster: "security",
    calc: "email",
    category: "SecurityApplication",
    affiliate: "proton",
    related: ["password-generator", "password-strength-checker", "privacy-policy-generator", "ip-leak-test"],
    guide: "best-password-manager",
    en: {
      title: "Disposable Email Generator | Free Online Calculators",
      description: "Build an alias from two words and four digits, plus a domain you type. This does not create a mailbox. The format check only tests the shape.",
      h1: "Disposable email generator",
      lede: "An alias string from two words and four digits. It does not open a mailbox.",
      banner: "Passwords, photos, and text stay in this browser, except the IP test, which says which public service it calls.",
      ctaTitle: "Use a real mailbox when the mail has to arrive",
      ctaBody: "Proton Mail is an actual inbox. Alias and hide-my-email style addresses, where a provider offers them, depend on the plan, and plans change. This generator only builds a string.",
      ctaButton: "Proton Mail",
      body: `<p><strong>This page does not create a mailbox.</strong> It builds an alias string: two words from the list, a dot between them, four digits, an @ sign, and the domain you type. The digits are a random integer from 0000 to 9999, padded so the string always has four. example.com is the placeholder in the form, and example.com does not accept mail. Unless the domain is one whose inbox you already control, nobody can open this address. Pasting it into a signup is useful only when that signup will never need to write to you, or when you own the domain and catch the mail yourself. The words come from the same kind of list as the password generator, picked in the browser. Nothing is uploaded.</p>
<h2>Plus-addresses</h2>
<p>Plus-addressing writes the shape local+tag@domain. The page can build that from an address and a tag you supply. It takes the part of the local name before any plus you already had, then adds the tag you typed. It works only if the provider keeps the tag. Some deliver every plus-variant to the same inbox, some strip the tag and ignore it, and some reject the address. The tag this form accepts is letters, digits, dots, underscores, and hyphens, from 1 to 40 characters. The page cannot ask your provider which of those policies you are under. A tag that looks tidy in the box is still only a string until the provider agrees.</p>
<h2>Shape, not a live inbox</h2>
<p>The format checker tests shape, not whether the mailbox exists. A practical check is the one it runs: one @, a dot in the domain, and a local part that is present and at most 64 characters long. The whole address also has to fit in 254 characters, and each part of the domain has to look like a hostname label. A string can pass and still point nowhere. example.com can satisfy a shape check and still accepts no mail. The checker does not open a connection to a mail server to find out. Do not treat a passing note on this page as proof that a person, a company, or a throwaway host is listening.</p>
<h2>When you need a real inbox</h2>
<p>When a message has to arrive, use a real provider. <a href="{{aff:proton}}">Proton Mail</a> is one such mailbox. Alias and hide-my-email style addresses, where a provider offers them, differ by plan, and plans change. This page does not switch those features on, and it does not keep a catalogue of what each plan includes this month. A new address still wants its own password from the <a href="{{href:password-generator}}">password generator</a>, and you can look at that password on the <a href="{{href:password-strength-checker}}">strength checker</a> before you save it. The <a href="{{href:privacy-policy-generator}}">policy draft</a> is a separate page, for a site that collects mail and needs to say so. The <a href="{{href:ip-leak-test}}">IP test</a> does not create an inbox either. The <a href="{{href:blog/best-password-manager}}">password manager guide</a> is about storing the password, not about receiving the message.</p>`,
      faq: [
        { q: "Did this create an inbox I can open?", a: "No. It built a string from two words, four digits, and the domain you typed. There is no mailbox behind it unless that domain is one you already control." },
        { q: "Can I receive mail at the example.com address?", a: "No. example.com does not accept mail. It is a placeholder. Replace it only with a domain whose mailbox you control, or treat the string as a label." },
        { q: "What does the format check prove?", a: "That the shape looks like an address: one @, a dot in the domain, and a local part that is present and not over 64 characters. It does not ask a server whether the mailbox exists." },
        { q: "Will plus-addressing always work?", a: "Only if your provider keeps the tag. The page can write local+tag@domain. Some providers deliver those to the same inbox, some strip the tag, and some reject the address. The page cannot see which kind you have." },
        { q: "Does Proton hide my address for me?", a: "Proton Mail is a real mailbox. Alias and hide-my-email style features, where a provider offers them, differ by plan, and plans change. This generator does not turn those features on." }
      ]
    },
    ru: {
      title: "Генератор одноразового адреса | Бесплатные калькуляторы",
      description: "Строка из двух слов и четырёх цифр плюс домен, который вы вводите. Ящик не создаётся. Проверка смотрит форму адреса, а не существование почты.",
      h1: "Генератор одноразового адреса",
      lede: "Строка-псевдоним из двух слов и четырёх цифр. Ящик при этом не открывается.",
      banner: "Пароли, фото и текст остаются в этом браузере. Исключение — проверка IP: на странице написано, какую публичную службу она вызывает.",
      ctaTitle: "Настоящий ящик, если письмо должно прийти",
      ctaBody: "Proton Mail — это настоящая почта. Псевдонимы и адреса в духе hide-my-email, если провайдер их даёт, зависят от тарифа, а тарифы меняются. Этот генератор собирает только строку.",
      ctaButton: "Proton Mail",
      body: `<p><strong>Ящика эта страница не создаёт.</strong> Она собирает строку: два слова из списка, точка между ними, четыре цифры, знак @ и домен, который вы вписали. Цифры — случайное число от 0000 до 9999, с нулями слева, чтобы цифр всегда было четыре. В форме по умолчанию стоит example.com, а example.com почту не принимает. Пока домен не ваш и ящик на нём не ваш, открыть этот адрес некому. Вставлять строку в регистрацию имеет смысл, только если письмо вам не понадобится или вы сами ловите почту на этом домене. Слова берутся из такого же списка, как у генератора паролей, и выбираются в браузере. На сервер ничего не уходит.</p>
<h2>Плюс в адресе</h2>
<p>Плюс-адресация собирает вид local+tag@domain. Страница построит такую строку из вашего адреса и метки. Она берёт часть имени до плюса, если плюс у вас уже был, и добавляет метку, которую вы ввели. Работать это будет, только если провайдер метку сохраняет. Кто-то кладёт все варианты с плюсом в тот же ящик, кто-то метку отрезает и не смотрит на неё, кто-то такой адрес отвергает. Метка в этой форме — буквы, цифры, точки, подчёркивания и дефисы, от 1 до 40 символов. Спросить вашего провайдера, какой у него порядок, страница не может. Акуратная метка в поле всё равно остаётся строкой, пока провайдер с ней согласен.</p>
<h2>Форма, а не живой ящик</h2>
<p>Проверка смотрит форму строки, а не то, существует ли почта. Практический тест такой: один знак @, точка в домене и локальная часть, которая есть и не длиннее 64 символов. Весь адрес ещё должен уложиться в 254 символа, а части домена должны быть похожи на обычные имена. Строка может пройти проверку и никуда не вести. example.com по форме выглядит правдоподобно и всё равно почту не принимает. Соединения с почтовым сервером проверка не открывает. Строку «форма верная» не стоит читать как доказательство, что человек, фирма или чужой хост письмо примут.</p>
<h2>Когда нужен настоящий ящик</h2>
<p>Если письмо должно прийти, нужен настоящий провайдер. Один из них — <a href="{{aff:proton}}">Proton Mail</a>. Псевдонимы и адреса в духе hide-my-email, если провайдер их вообще даёт, зависят от тарифа, а тарифы меняются. Эта страница такие функции не включает и не хранит каталог того, что входит в план в этом месяце. Новому адресу нужен свой пароль с <a href="{{href:password-generator}}">генератора паролей</a>, и до сохранения его можно посмотреть на <a href="{{href:password-strength-checker}}">проверке стойкости</a>. <a href="{{href:privacy-policy-generator}}">Черновик политики</a> — отдельная страница для сайта, который почту собирает и должен об этом сказать. <a href="{{href:ip-leak-test}}">Проверка IP</a> ящик тоже не заводит. <a href="{{href:blog/best-password-manager}}">Статья про менеджеры паролей</a> про то, где хранить пароль, а не про приём писем.</p>
<p>Четыре цифры не превращают строку в одноразовый ящик. Они только снижают шанс, что два запуска выпадут одинаково. Если домен ваш, письмо на этот адрес придёт лишь тогда, когда ваш сервер его примет и доставка настроена вами. Если домен чужой, строка может попасть в чужой ящик или в пустоту. Страница этого не проверяет. Плюс в адресе ящик тоже не создаёт: он просит провайдера, который у вас уже есть, сохранить метку. Пока провайдер молчит, у вас на руках только текст.</p>`,
      faq: [
        { q: "Мне открыли ящик, в который можно войти?", a: "Нет. Собрана строка из двух слов, четырёх цифр и домена, который вы вписали. Ящика за ней нет, если этот домен уже не ваш." },
        { q: "На адрес example.com придёт почта?", a: "Нет. example.com почту не принимает. Это заглушка. Подставляйте только домен, ящиком которого вы владеете, или считайте строку меткой." },
        { q: "Что доказывает проверка формата?", a: "Что форма похожа на адрес: один знак @, точка в домене и локальная часть, которая есть и не длиннее 64 символов. Существует ли ящик, сервер не спрашивают." },
        { q: "Плюс в адресе всегда сработает?", a: "Только если провайдер сохраняет метку. Страница умеет собрать local+tag@domain. Кто-то кладёт такие письма в тот же ящик, кто-то метку отрезает, кто-то адрес отвергает. Узнать ваш случай страница не может." },
        { q: "Proton сам спрячет мой адрес?", a: "Proton Mail — настоящий ящик. Псевдонимы и адреса в духе hide-my-email, если провайдер их даёт, зависят от тарифа, а тарифы меняются. Этот генератор такие функции не включает." }
      ]
    }
  },
  {
    slug: "exif-remover",
    cluster: "security",
    calc: "exif",
    category: "SecurityApplication",
    affiliate: "nordvpn",
    related: ["ip-leak-test", "image-compressor", "aes-encryptor", "disposable-email-generator"],
    guide: "nordvpn-vs-surfshark-vs-proton-vpn",
    en: {
      title: "EXIF Remover | Free Online Calculators",
      description: "Read JPEG Make, Model, date, software, and GPS in the browser, then download a copy with APP1 and comments removed. The file is not uploaded.",
      h1: "EXIF remover",
      lede: "Read device and GPS tags from a JPEG in the browser, then download a copy with those segments removed.",
      banner: "Passwords, photos, and text stay in this browser, except the IP test, which says which public service it calls.",
      ctaTitle: "An IP and a photo are two different leaks",
      ctaBody: "Stripping GPS from a picture does not change the address a website sees. A VPN such as NordVPN changes that address only while the tunnel is on. Plans change, and this page did not measure speeds.",
      ctaButton: "NordVPN",
      body: `<p>A JPEG file starts with the bytes FF D8, then a series of segments. EXIF lives in an APP1 segment whose contents start with Exif. This page reads that segment in the browser and, when the tags are present, shows Make, Model, DateTime, Software, and GPS. It can then download a copy with APP1 segments and comment segments removed. The compressed image data stays. The pixels are not redrawn, so this path does not recompress the picture. The file never leaves the device. There is no upload, and the download is built from the bytes already in memory.</p>
<h2>What the reader can miss</h2>
<p>Uncommon tags may be missed. The reader is looking for those device and GPS fields, not for every metadata type on every format. A file that is neither a JPEG nor a PNG is not walked segment by segment. Other metadata can still be sitting in it. PNG text chunks can be dropped, and the page can show the text pairs it found before the drop. Re-encoding is the thorough option when you need tags this parser does not look for. Draw the picture through a canvas and save it again. That drops metadata, including kinds the segment reader skipped, and it also recompresses, so the file is no longer the original encoding. The <a href="{{href:image-compressor}}">image compressor</a> is the page on this site that redraws through a canvas. Use the stripped download from this page when you want the same compressed image data with APP1 and comments gone. Use a re-encode when thoroughness matters more than a byte-for-byte image stream.</p>
<h2>A place in the photo, and an address on the network</h2>
<p>GPS in a photo is a location, a place the camera recorded. Hiding an IP is a different problem. Stripping the picture does not change the address a website sees when you load a page, and a VPN does not scrub a coordinate already baked into a file you later upload somewhere else. The <a href="{{href:ip-leak-test}}">IP test</a> is the page for that address. It asks public services what they see, and it says so. <a href="{{aff:nordvpn}}">NordVPN</a> can change what that test sees, only while the tunnel is on. This page did not measure speed and does not rank NordVPN against any other tunnel. Plans change. The <a href="{{href:blog/nordvpn-vs-surfshark-vs-proton-vpn}}">comparison guide</a> says what to read on the current plan, which is the right place for that question.</p>
<p>Encrypting a note on the <a href="{{href:aes-encryptor}}">AES page</a> does not touch the photo. An alias from the <a href="{{href:disposable-email-generator}}">address builder</a> does not either. If you are about to publish the picture, decide the two leaks separately: what the file still contains, and what address the upload request will show. Removing Make and Model also removes a convenient fingerprint of the camera, which matters on a shared album even when GPS was empty. DateTime can narrow when the photo was taken. Read the table before you download, so you know what was actually present rather than assuming every file carries a map pin.</p>`,
      faq: [
        { q: "Is the photo uploaded?", a: "No. The browser reads the file you picked. The download is built on the device. This site does not receive the bytes." },
        { q: "Which tags are shown?", a: "For a JPEG: Make, Model, DateTime, Software, and GPS when those tags are present. Uncommon tags may be missed. The reader does not claim to parse every metadata type on every format." },
        { q: "What does the stripped JPEG still contain?", a: "The compressed image data. APP1 segments, which is where EXIF lives, and comment segments are removed. The picture is not redrawn, so the pixels are not recompressed." },
        { q: "When should I re-encode instead?", a: "When you want a thorough pass, including tags this parser skips. Drawing the image through a canvas drops metadata and also recompresses, so the file changes. The image compressor on this site is that path." },
        { q: "Does removing GPS hide my IP?", a: "No. GPS is a place stored in the photo. The IP a website sees is a separate problem. Stripping the picture does not change that address. The IP test is the page for it." }
      ]
    },
    ru: {
      title: "Удаление EXIF | Бесплатные калькуляторы",
      description: "Прочитать у JPEG марку, модель, дату, программу и GPS в браузере и скачать копию без сегмента APP1 и комментариев. Файл на сервер не уходит.",
      h1: "Удаление EXIF",
      lede: "Прочитать у JPEG данные камеры и GPS в браузере и скачать копию без этих сегментов.",
      banner: "Пароли, фото и текст остаются в этом браузере. Исключение — проверка IP: на странице написано, какую публичную службу она вызывает.",
      ctaTitle: "IP и фото — две разные утечки",
      ctaBody: "Снять GPS со снимка не значит сменить адрес, который видит сайт. VPN вроде NordVPN меняет этот адрес, только пока туннель включён. Тарифы меняются, скорость страница не мерила.",
      ctaButton: "NordVPN",
      body: `<p>Файл JPEG начинается с байтов FF D8, дальше идут сегменты. EXIF лежит в сегменте APP1, и внутри этого сегмента текст начинается с Exif. Страница читает сегмент в браузере и, если метки есть, показывает производителя, модель, дату, программу и GPS. Затем можно скачать копию, из которой убраны сегменты APP1 и комментарии. Сжатые данные картинки остаются. Пиксели заново не рисуются, поэтому этот путь файл не пережимает. Файл с устройства не уходит. Загрузки нет, скачивание собирается из байтов, которые уже в памяти.</p>
<h2>Что разбор может пропустить</h2>
<p>Редкие метки могут не попасть в разбор. Читаются поля камеры и GPS, а не каждый тип метаданных в каждом формате. Файл, который не JPEG и не PNG, по сегментам страница не разбирает. Другие метаданные в нём всё ещё могут лежать. Текстовые чанки PNG можно выкинуть, и перед этим страница может показать пары «ключ и текст», которые нашла. Перекодирование — тщательный путь, когда нужны метки, которые этот разбор не ищет. Нарисуйте снимок через canvas и сохраните заново. Так пропадают метаданные, в том числе те, что сегментный разбор пропустил, но браузер ещё и пережимает картинку, и кодировка уже не та, что была в файле. <a href="{{href:image-compressor}}">Сжатие картинок</a> на этом сайте как раз рисует снимок через canvas. Берите очищенную копию с этой страницы, если нужны те же сжатые данные без APP1 и комментариев. Берите перекодирование, если важнее вычистить всё, чем сохранить картинку байт в байт.</p>
<h2>Место на снимке и адрес в сети</h2>
<p>GPS на фото — это место, которое записала камера. Спрятать IP — другая задача. Снимок без меток не меняет адрес, который сайт видит, когда вы открываете страницу, а VPN не стирает координату, уже вшитую в файл, который вы потом куда-то отправите. Адрес смотрит <a href="{{href:ip-leak-test}}">проверка IP</a>. Она спрашивает публичные службы, что они видят, и так и пишет. <a href="{{aff:nordvpn}}">NordVPN</a> может сменить то, что видит этот тест, только пока туннель включён. Скорость страница не мерила и NordVPN с другими туннелями по ней не расставляет. Тарифы меняются. Что читать в текущем плане, сказано в <a href="{{href:blog/nordvpn-vs-surfshark-vs-proton-vpn}}">сравнительной статье</a>. Туда и стоит нести этот вопрос.</p>
<p>Заметка на странице <a href="{{href:aes-encryptor}}">AES</a> фото не касается. <a href="{{href:disposable-email-generator}}">Псевдоним адреса</a> тоже. Если снимок вот-вот уйдёт в публикацию, решите две утечки по отдельности: что ещё лежит в файле и какой адрес покажет сам запрос загрузки. Производитель и модель — удобный отпечаток камеры, он важен и в общем альбоме, даже если GPS пустой. Дата сужает, когда снимок сделан. Прочитайте таблицу до скачивания, чтобы знать, что в файле было на самом деле, а не считать, будто в каждом снимке есть точка на карте.</p>
<p>Сегмент APP1 страница узнаёт по маркеру и по тому, что внутри текст начинается с Exif. Комментарий JPEG — отдельный сегмент, очищенная копия выкидывает и его. Прочие сегменты APP, если это не APP1, этот проход не трогает. Поэтому снимок, где метаданные лежат непривычно, лучше перекодировать через canvas, даже если в таблице одни прочерки. Прочерк значит, что знакомых меток не прочитано, а не то, что файл пустой. Дата, если она есть, сужает время съёмки. Модель камеры узнаётся и без координат.</p>`,
      faq: [
        { q: "Фото уходит на сервер?", a: "Нет. Браузер читает файл, который вы выбрали. Скачивание собирается на устройстве. Байты сайт не получает." },
        { q: "Какие метки показываются?", a: "У JPEG: производитель, модель, дата, программа и GPS, если эти метки есть. Редкие метки могут быть пропущены. Разбор не обещает каждый тип метаданных в каждом формате." },
        { q: "Что остаётся в очищенном JPEG?", a: "Сжатые данные картинки. Сегменты APP1, где живёт EXIF, и комментарии убираются. Снимок заново не рисуется, пиксели не пережимаются." },
        { q: "Когда лучше перекодировать?", a: "Когда нужен тщательный проход, включая метки, которые этот разбор пропускает. Рисунок через canvas убирает метаданные и заодно пережимает файл. На этом сайте так работает сжатие картинок." },
        { q: "Если убрать GPS, спрячется ли IP?", a: "Нет. GPS — место, записанное в фото. IP, который видит сайт, — другая задача. Снимок без меток этот адрес не меняет. Для адреса есть проверка IP." }
      ]
    }
  },
  {
    slug: "aes-encryptor",
    cluster: "security",
    calc: "aes",
    category: "SecurityApplication",
    affiliate: "proton",
    related: ["password-generator", "hash-generator", "exif-remover", "password-strength-checker"],
    guide: "best-password-manager",
    en: {
      title: "AES Text Encryptor | Free Online Calculators",
      description: "Encrypt a note with AES-GCM. The key comes from PBKDF2 and SHA-256, 150,000 rounds, a random salt, and a random IV. A wrong password fails closed.",
      h1: "AES text encryptor",
      lede: "AES-GCM for a note that stays in this browser, with no recovery if the password is lost.",
      banner: "Passwords, photos, and text stay in this browser, except the IP test, which says which public service it calls.",
      ctaTitle: "Send the password on a different channel",
      ctaBody: "The ciphertext is only as private as the place you paste it. If someone else needs the password, that message is a separate step. A private mailbox such as Proton can carry it. Plans change, and this page does not list every mail feature.",
      ctaButton: "Proton Mail",
      body: `<p>The page encrypts text with AES-GCM. The key is a 256-bit key derived from the password with PBKDF2 and SHA-256, using 150,000 iterations, a random 16-byte salt, and a random 12-byte IV. Salt and IV both come from crypto.getRandomValues. The output you copy is base64. Decoded, the bytes start with a version marker, the four characters ENC1, then the salt, then the IV, then the ciphertext. One string carries the whole package, so the same password can open it later without a separate file for the salt. Nothing is uploaded. There is no account that could keep a recovery copy. The work happens in the browser, and closing the tab drops both the note and the password from this page.</p>
<h2>A wrong password fails closed</h2>
<p>GCM checks integrity. A wrong password or a flipped character fails the check, and the page returns no text. It does not hand back a partial note, and it does not try nearby passwords in case you were close. <strong>There is no recovery.</strong> If the password is lost, the text is gone. This site cannot help, because the password never left the browser and we do not hold a spare. Write the password into a manager before you close the tab. Make that key on the <a href="{{href:password-generator}}">password generator</a>, where the entropy is counted properly, and look at it on the <a href="{{href:password-strength-checker}}">strength checker</a> if you typed it yourself. A short password undermines the 150,000 iterations. Those rounds slow a guess. They do not invent bits the password did not have.</p>
<h2>The password has to travel separately</h2>
<p>This is not a way to send a secret by email unless the password goes by a different channel. The ciphertext is only as private as the place you paste it. One email, one chat, or one ticket that contains both the base64 and the password has handed over both pieces. A shared document stays shared, even when the bytes look random. Someone who can open that document can copy the string and, if the password is there too, open the note. Keep your copy of the password in a manager. If another person must have the password, send it as its own message, not as a footnote under the ciphertext. A private mailbox is a modest way to carry that one message. <a href="{{aff:proton}}">Proton</a> is a mailbox you can use for the exchange. Plans change. This page is not a catalogue of mail features, and it does not claim the ciphertext becomes safer because of a brand name on the button.</p>
<p>A <a href="{{href:hash-generator}}">hash</a> of the note is not a substitute. Anyone can recompute a hash, and a hash does not hide the text. Stripping <a href="{{href:exif-remover}}">EXIF</a> is about photos, not about this string. The <a href="{{href:blog/best-password-manager}}">password manager guide</a> is where the comparison of storage tools lives. Put the password there, paste the ciphertext only where the people who should not read the note cannot also read the password, and assume that a backup of the base64 without the password is a backup of nothing you can open.</p>`,
      faq: [
        { q: "Which algorithm is this?", a: "AES-GCM with a 256-bit key. The key comes from PBKDF2 and SHA-256, 150,000 iterations, a random 16-byte salt, and a random 12-byte IV. The output is base64. The decoded bytes start with the version marker ENC1." },
        { q: "What if I forget the password?", a: "There is no recovery. The password never left the browser, and this site has no copy. A lost password means the text is gone." },
        { q: "Why does one changed character fail?", a: "GCM checks integrity. A wrong password or a damaged character fails the check, and the page returns no text. It does not guess or return a partial note." },
        { q: "Can I email the ciphertext on its own?", a: "Only if the password travels on a different channel. The ciphertext is as private as the place you paste it. The same email as the password hands over both pieces." },
        { q: "How should I choose the password?", a: "Use the password generator and store the result in a manager. The iteration count slows guessing. It does not add bits the password never had. A private mailbox such as Proton can carry the password to another person, separate from the ciphertext. Plans change." }
      ]
    },
    ru: {
      title: "Шифрование текста AES | Бесплатные калькуляторы",
      description: "Шифрование заметки AES-GCM. Ключ из PBKDF2 и SHA-256, 150000 раундов, случайные соль и IV. Неверный пароль текст не открывает, восстановления нет.",
      h1: "Шифрование текста AES",
      lede: "AES-GCM для заметки, которая остаётся в браузере. Потеряли пароль — текста больше нет.",
      banner: "Пароли, фото и текст остаются в этом браузере. Исключение — проверка IP: на странице написано, какую публичную службу она вызывает.",
      ctaTitle: "Пароль отправьте другим путём",
      ctaBody: "Зашифрованный текст приватен ровно настолько, насколько приватно место, куда вы его вставили. Если пароль нужен другому человеку, это отдельное сообщение. Его может отвезти закрытая почта, например Proton. Тарифы меняются, и полный список функций страница не обещает.",
      ctaButton: "Proton Mail",
      body: `<p>Страница шифрует текст алгоритмом AES-GCM. Ключ на 256 бит выводится из пароля через PBKDF2 и SHA-256: 150 000 итераций, случайная соль на 16 байт и случайный IV на 12 байт. Соль и IV берёт crypto.getRandomValues. То, что вы копируете, — base64. Если строку раскодировать, байты начинаются с маркера версии, четырёх знаков ENC1, затем идут соль, IV и шифротекст. Одна строка несёт весь пакет, и тот же пароль потом откроет её без отдельного файла для соли. На сервер ничего не уходит. Аккаунта, где лежала бы запасная копия, нет. Работа идёт в браузере, и закрытая вкладка уносит с этой страницы и заметку, и пароль.</p>
<h2>Неверный пароль ничего не открывает</h2>
<p>GCM проверяет целостность. Неверный пароль или один изменённый символ проверку не проходят, и страница не отдаёт текст. Обрывка заметки она не показывает и соседние пароли «на всякий случай» не перебирает. <strong>Восстановления нет.</strong> Потеряли пароль — текста нет. Сайт не поможет: пароль браузер не покидал, запасной копии у нас нет. Запишите пароль в менеджер до того, как закроете вкладку. Собрать ключ стоит в <a href="{{href:password-generator}}">генераторе паролей</a>, там энтропия считается явно, а свою строку можно глянуть на <a href="{{href:password-strength-checker}}">проверке стойкости</a>. Короткий пароль обесценивает 150 000 итераций. Раунды замедляют догадку. Биты, которых в пароле не было, они не создают.</p>
<h2>Пароль едет отдельно</h2>
<p>Отправить секрет обычным письмом, положив пароль в то же письмо, не выйдет: канал должен быть другой. Зашифрованный текст приватен ровно настолько, насколько приватно место, куда вы его вставили. Одно письмо, один чат или одна заявка, где есть и base64, и пароль, отдаёт обе части. Общий документ остаётся общим, даже если байты выглядят случайными. Кто открывает документ, тот копирует строку и, если пароль лежит там же, открывает заметку. Свою копию пароля держите в менеджере. Если пароль нужен другому человеку, отправьте его отдельным сообщением, а не припиской под шифротекстом. Закрытая почта — скромный способ передать именно это сообщение. Для обмена подойдёт <a href="{{aff:proton}}">Proton</a>. Тарифы меняются. Эта страница не каталог почтовых функций и не обещает, что шифротекст становится надёжнее из-за имени на кнопке.</p>
<p><a href="{{href:hash-generator}}">Хеш</a> заметки шифрование не заменяет. Хеш может посчитать кто угодно, текст он не прячет. <a href="{{href:exif-remover}}">Снятие EXIF</a> про фото, не про эту строку. Сравнение мест, где хранить ключ, лежит в <a href="{{href:blog/best-password-manager}}">статье про менеджеры паролей</a>. Пароль уберите туда, шифротекст вставляйте только туда, где люди, которым заметку читать не следует, не прочитают заодно и пароль. Копия base64 без пароля — это копия того, что вы уже не откроете.</p>
<p>Соль нужна, чтобы один и тот же пароль на двух заметках не давал одинаковое начало. IV нужен, чтобы один ключ не шифровал два текста одинаково. Оба значения случайные и уже лежат внутри base64, отдельным файлом их хранить не надо. Хранить надо пароль. Маркер ENC1 в начале помогает отличить эту упаковку от случайной строки base64. 150 000 итераций на слабом телефоне ощущаются как пауза. Это плата за то, что перебор пароля дороже одного прохода SHA-256. Пауза не повод укорачивать пароль: число раундов здесь не меняется, а короткий пароль перебирается легче.</p>`,
      faq: [
        { q: "Какой здесь алгоритм?", a: "AES-GCM с ключом на 256 бит. Ключ из PBKDF2 и SHA-256, 150 000 итераций, случайная соль на 16 байт и случайный IV на 12 байт. На выходе base64. В раскодированных байтах сначала маркер версии ENC1." },
        { q: "Что, если я забуду пароль?", a: "Восстановления нет. Пароль браузер не покидал, копии у сайта нет. Нет пароля — нет текста." },
        { q: "Почему один изменённый символ всё ломает?", a: "GCM проверяет целостность. Неверный пароль или испорченный символ проверку не проходят, и страница не отдаёт текст. Она не угадывает пароль и не показывает обрывок." },
        { q: "Можно отправить шифротекст письмом?", a: "Только если пароль едет другим путём. Зашифрованный текст приватен настолько, насколько приватно место, куда вы его вставили. То же письмо, что и пароль, отдаёт обе части." },
        { q: "Как выбрать пароль?", a: "Возьмите его в генераторе паролей и положите в менеджер. Число итераций замедляет перебор. Биты, которых в пароле не было, оно не добавляет. Закрытая почта вроде Proton может передать пароль другому человеку отдельно от шифротекста. Тарифы меняются." }
      ]
    }
  },
  {
    slug: "hash-generator",
    cluster: "security",
    calc: "hash",
    category: "SecurityApplication",
    affiliate: "bitwarden",
    related: ["password-generator", "aes-encryptor", "json-csv-sql-formatter", "seo-text-analyzer"],
    guide: "best-password-manager",
    en: {
      title: "Hash and UUID Generator | Free Online Calculators",
      description: "Make UUID v4 values, a SHA-256 digest, an unbiased random integer, or a random key in hex and base64. A hash is not a password you can reuse.",
      h1: "Hash and key generator",
      lede: "UUID v4, a SHA-256 fingerprint, an unbiased integer, and a random key in hex and base64.",
      banner: "Passwords, photos, and text stay in this browser, except the IP test, which says which public service it calls.",
      ctaTitle: "Put a key you must not lose in a manager",
      ctaBody: "A hash cannot be turned back into the text, and a random key cannot be rebuilt from memory. Bitwarden is one place to keep that key. Plans change. A hash is not a password.",
      ctaButton: "Bitwarden",
      body: `<p>This page makes four different things, and only one of them is a hash. UUID v4 values come from crypto.randomUUID. You can ask for several, up to twenty. They are random identifiers. They are not a fingerprint of the text in the box, and they are not a password. SHA-256 is the fingerprint. SHA-256 of the empty string is e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855. The box starts with a sample word, so clear it if you want to see that known value and confirm you are looking at SHA-256 rather than a vaguely similar digest. The same text always gives the same hash. That stable result is why a hash is not encryption. Encryption hides the text so that a reader without the key sees nothing useful. A hash lets you notice that the text changed. You cannot turn the hash back into the text. The page computes the digest locally. The text is not uploaded.</p>
<h2>An unbiased number, and a key made of bytes</h2>
<p>A random integer uses rejection sampling so the range is unbiased. The page draws a 32-bit value from crypto.getRandomValues and throws away draws that would make some integers between your minimum and your maximum more common than others, then maps what remains onto that range. A raw remainder would lean, because the size of the range rarely divides the 32-bit space evenly. The span you ask for has to fit in 32 bits. A random key is separate again: it is bytes from crypto.getRandomValues, shown as hex and as base64, at the length the form offers, 128, 256, or 512 bits. That key is a secret. Lose it and there is nothing to recompute, because it was not derived from a sentence you remember. The hash is not a secret in that sense. Anyone who has the text can produce the hash.</p>
<h2>Do not store a hash as if it were the password</h2>
<p>Do not call a hash a password, and do not save a hash in a manager as though it would log you in. Showing the hash to a login form will not open the account. If what you must not lose is the random key, put the key in a manager. <a href="{{aff:bitwarden}}">Bitwarden</a> is one place to keep it. Plans change, and this page does not quote a fee. The <a href="{{href:password-generator}}">password generator</a> is for passwords and passphrases, which are a different shape of secret, counted as length times log2 of an alphabet or as words times 8 bits on this site's list. Real secrecy for a note, the kind that hides the words, is the <a href="{{href:aes-encryptor}}">AES encryptor</a>. A hash of that note would only prove the note is unchanged. It would publish nothing you can read, and it would also fail to conceal the note if you left the note beside it.</p>
<p>People sometimes hash a snippet while they are preparing a page: a small file, a block of JSON, a paragraph they do not want to alter by accident. The <a href="{{href:json-csv-sql-formatter}}">formatter</a> and the <a href="{{href:seo-text-analyzer}}">text checker</a> stay in the browser for that kind of editing. They do not replace the digest, and the digest does not edit the text. The <a href="{{href:blog/best-password-manager}}">password manager guide</a> compares where a key you cannot rebuild should live. Use it for the key. Leave the hash as a fingerprint you can publish, recompute, and compare, which is the job it actually does.</p>`,
      faq: [
        { q: "Can I reverse a SHA-256 hash?", a: "No. SHA-256 is one way. The same text always produces the same hash, which is why it is not encryption. Encryption, which hides the text, is the AES page." },
        { q: "What should an empty field hash to?", a: "SHA-256 of the empty string is e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855. The box starts with a sample word. Clear it if you want that known value." },
        { q: "Where do the UUIDs come from?", a: "crypto.randomUUID, version 4. They are random identifiers, not hashes of your text, and not passwords. The form can make up to twenty at a time." },
        { q: "Why does the random number throw some draws away?", a: "So the range is unbiased. A raw remainder would make some integers slightly more common. Rejection sampling keeps only draws that map evenly onto the minimum and maximum you set." },
        { q: "Should I save the hash in a password manager and use it to log in?", a: "No. A hash is not a password. If you generated a random key, that key is the secret, and a manager is where it belongs, because you cannot rebuild it. Bitwarden is one place to keep it. Plans change." }
      ]
    },
    ru: {
      title: "Хеш SHA-256 и UUID | Бесплатные калькуляторы",
      description: "UUID версии 4, хеш SHA-256, целое число без перекоса диапазона и случайный ключ в hex и base64. Хеш нельзя обратить в текст: это не пароль для входа.",
      h1: "Хеш и случайный ключ",
      lede: "UUID версии 4, отпечаток SHA-256, целое без перекоса и случайный ключ в hex и base64.",
      banner: "Пароли, фото и текст остаются в этом браузере. Исключение — проверка IP: на странице написано, какую публичную службу она вызывает.",
      ctaTitle: "Ключ, который нельзя потерять, положите в менеджер",
      ctaBody: "Хеш не обратить обратно в текст, а случайный ключ не восстановить по памяти. Bitwarden — одно место, где такой ключ можно держать. Тарифы меняются. Хеш паролем не называют.",
      ctaButton: "Bitwarden",
      body: `<p>На странице четыре разные вещи, и хеш из них только одна. UUID версии 4 берётся из crypto.randomUUID. Можно запросить несколько, до двадцати. Это случайные идентификаторы. Они не отпечаток текста в поле и не пароль. Отпечаток — SHA-256. SHA-256 пустой строки равен e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855. В поле сначала лежит пример слова: очистите его, если хотите увидеть это известное значение и убедиться, что перед вами именно SHA-256, а не «похожий хеш». Один и тот же текст всегда даёт один и тот же хеш. Из-за этой устойчивости хеш — не шифрование. Шифрование прячет текст, и без ключа читатель не видит ничего полезного. По хешу видно, что текст изменился. Обратить хеш в текст нельзя. Отпечаток считается на месте. Текст на сервер не уходит.</p>
<h2>Число без перекоса и ключ из байтов</h2>
<p>Случайное целое считается выборкой с отбраковкой, чтобы диапазон не перекашивался. Страница берёт 32-битное значение из crypto.getRandomValues и выбрасывает те, из-за которых одни числа между вашим минимумом и максимумом выпадали бы чаще других, а оставшиеся отображает на диапазон. Простой остаток от деления дал бы перекос: длина диапазона редко делит 32-битное пространство нацело. Промежуток, который вы просите, должен уложиться в 32 бита. Случайный ключ — опять другая вещь. Это байты из crypto.getRandomValues, показанные как hex и как base64, той длины, которую предлагает форма: 128, 256 или 512 бит. Такой ключ — секрет. Потеряли его — пересчитать не из чего, он не выведен из фразы, которую вы помните. Хеш в этом смысле не секрет. У кого есть текст, тот получит хеш.</p>
<h2>Хеш паролем не называют</h2>
<p>Не называйте хеш паролем и не кладите хеш в менеджер так, будто им входят на сайт. Форма входа от хеша не откроется. Если терять нельзя именно случайный ключ, в менеджер кладут ключ. Для этого подойдёт <a href="{{aff:bitwarden}}">Bitwarden</a>. Тарифы меняются, плату страница не называет. <a href="{{href:password-generator}}">Генератор паролей</a> делает пароли и парольные фразы. Это другой вид секрета: длина на логарифм алфавита или, на списке этого сайта, число слов на 8 бит. Настоящее сокрытие заметки, то, которое прячет слова, — на странице <a href="{{href:aes-encryptor}}">AES</a>. Хеш той же заметки только подтвердил бы, что она не изменилась. Прочитать по нему заметку нельзя, и рядом с открытым текстом он текст не спрячет.</p>
<p>Иногда хеш считают с куска, который готовят к публикации: небольшой файл, блок JSON, абзац, который не хочется случайно поправить. <a href="{{href:json-csv-sql-formatter}}">Форматтер</a> и <a href="{{href:seo-text-analyzer}}">проверка текста</a> для такой правки тоже остаются в браузере. Они отпечаток не заменяют, а отпечаток текст не правит. <a href="{{href:blog/best-password-manager}}">Статья про менеджеры паролей</a> сравнивает, где держать ключ, который не восстановить. Туда и кладите ключ. Хеш оставьте отпечатком, который можно опубликовать, пересчитать и сверить. Это его настоящая работа.</p>
<p>UUID можно копировать пачкой. Каждый новый, и ни один не зависит от текста в поле. Хеш, наоборот, зависит от текста целиком. Пробел в конце, другая буква или пустая строка дают другой отпечаток. Поэтому значение пустой строки годится как контроль: если очищенное поле даёт иной хеш, перед вами не SHA-256. Hex и base64 у ключа — одни и те же байты в двух записях. Храните одну. Вторую заново не получить, если байты уже потеряны.</p>`,
      faq: [
        { q: "Можно обратить хеш SHA-256 обратно в текст?", a: "Нет. SHA-256 односторонний. Один и тот же текст всегда даёт один и тот же хеш, поэтому это не шифрование. Прячет текст страница AES." },
        { q: "Чему равен хеш пустого поля?", a: "SHA-256 пустой строки — e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855. В поле сначала лежит пример слова. Очистите его, если нужно это известное значение." },
        { q: "Откуда берутся UUID?", a: "Из crypto.randomUUID, версия 4. Это случайные идентификаторы, не хеш вашего текста и не пароль. Форма делает до двадцати за раз." },
        { q: "Почему часть случайных чисел выбрасывается?", a: "Чтобы диапазон не перекашивался. Простой остаток делал бы одни числа чуть чаще. Выборка с отбраковкой оставляет только те значения, которые ложатся на ваш минимум и максимум равномерно." },
        { q: "Положить хеш в менеджер и входить им на сайт?", a: "Нет. Хеш — не пароль. Если вы собрали случайный ключ, секрет — это ключ, и место ему в менеджере: заново его не собрать. Bitwarden — одно такое место. Тарифы меняются." }
      ]
    }
  }
];
