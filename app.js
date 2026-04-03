/* صيحة تحذير من دعاة التنصير — WARNING AGAINST MISSIONARIES — app.js v1.0 */
/* Based on "Sayhah Tahdhir min Du'at al-Tansir" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'صيحة تحذير',
    splashSub: 'حماية الهوية للنشء',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة البقرة ١٢٠',
    tabHome: 'الرئيسية', tabCards: 'البطاقات', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    cardsTitle: 'التحديات والحلول',
    cardsDesc: '١٥ بطاقة عن التحديات وطرق الحماية من كتاب الشيخ محمد الغزالي — كل بطاقة بآية وحديث وتطبيق عملي',
    quizTitle: '🏆 من سيصبح عالِماً؟',
    quizDesc: 'اختبر معلوماتك عن حماية الهوية — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي في الوعي',
    progressDesc: 'تقدمك وإنجازاتك في رحلة الوعي',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية الثبات والحماية',
    dailyLabel: '✨ بطاقة اليوم',
    searchPlaceholder: 'ابحث في البطاقات...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '١٥ بطاقة عن التحديات وطرق الحماية',
      'مسابقة "من سيصبح عالماً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'A Warning Cry',
    splashSub: 'Protecting identity for young minds',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Baqarah 120',
    tabHome: 'Home', tabCards: 'Cards', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    cardsTitle: 'Challenges & Solutions',
    cardsDesc: '15 cards about challenges and protection methods from Sheikh al-Ghazali — each with a verse, hadith, and practical application',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge about protecting identity — 4 choices per question',
    progressTitle: 'My Awareness Journey',
    progressDesc: 'Your progress and achievements in the awareness journey',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for Steadfastness & Protection',
    dailyLabel: "✨ Today's Card",
    searchPlaceholder: 'Search cards...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 cards about challenges and protection methods',
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: 'Un Cri d\'Alerte',
    splashSub: 'Proteger l\'identite pour les jeunes',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Baqarah 120',
    tabHome: 'Accueil', tabCards: 'Cartes', tabQuiz: 'Quiz',
    tabProgress: 'Progres', tabAbout: 'Livre',
    cardsTitle: 'Defis et Solutions',
    cardsDesc: '15 cartes sur les defis et les methodes de protection du livre du Sheikh al-Ghazali — chacune avec un verset, un hadith et une application pratique',
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: 'Testez vos connaissances sur la protection de l\'identite — 4 choix par question',
    progressTitle: 'Mon Parcours de Conscience',
    progressDesc: 'Vos progres et realisations dans le parcours de conscience',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour la Fermete et la Protection',
    dailyLabel: '✨ Carte du Jour',
    searchPlaceholder: 'Rechercher les cartes...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: 'Points d\'Experience',
    levelLabel: 'Niveau',
    streakMsg: 'jours consecutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Ref. Coran',
    correct: 'Bravo ! Bonne reponse ! 🎉',
    wrong: 'Reessayez la prochaine fois 💪',
    quizComplete: 'Quiz Termine !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Debutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Perseverant',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 cartes sur les defis et les methodes de protection',
      'Quiz << Qui Veut Devenir Savant ? >> avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 15 CARDS DATA ═══════════════
const CARDS = [
  {
    id:1, emoji:'🎯',
    ar:{title:'استغلال الفقر',desc:'بعض الجهات تستغل فقر المسلمين لتغيير معتقداتهم. يقدمون المساعدات المادية مشروطة بتغيير الدين. الشيخ الغزالي يحذر من أن الجوع لا يبرر التخلي عن العقيدة ويدعو لمؤسسات إسلامية تسد الحاجة.',verse:'وَلَنْ تَرْضَى عَنْكَ الْيَهُودُ وَلَا النَّصَارَى حَتَّى تَتَّبِعَ مِلَّتَهُمْ',verseRef:'البقرة ١٢٠',hadith:'ليس المؤمن الذي يشبع وجاره جائع إلى جنبه — رواه البيهقي',action:'تبرع اليوم لمؤسسة خيرية إسلامية تساعد الفقراء في الحفاظ على كرامتهم',young:'ساعد من يحتاج! عندما نعطي الفقراء نحميهم من أي شخص يريد استغلالهم 🎯'},
    en:{title:'Exploiting Poverty',desc:'Some groups exploit the poverty of Muslims to change their beliefs. They offer material aid conditioned on changing religion. Sheikh al-Ghazali warns that hunger does not justify abandoning faith and calls for Islamic institutions to fill the need.',verse:'And never will the Jews or Christians approve of you until you follow their religion',verseRef:'Al-Baqarah 120',hadith:'He is not a believer who eats his fill while his neighbor goes hungry — Bayhaqi',action:'Donate today to an Islamic charity that helps the poor while preserving their dignity',young:'Help those in need! When we give to the poor, we protect them from anyone who wants to take advantage 🎯'},
    fr:{title:'Exploiter la Pauvrete',desc:'Certains groupes exploitent la pauvrete des musulmans pour changer leurs croyances. Ils offrent une aide materielle conditionnee au changement de religion. Le Sheikh al-Ghazali avertit que la faim ne justifie pas l\'abandon de la foi et appelle a des institutions islamiques pour combler le besoin.',verse:'Et jamais les Juifs ni les Chretiens ne seront satisfaits de toi jusqu\'a ce que tu suives leur religion',verseRef:'Al-Baqarah 120',hadith:'N\'est pas croyant celui qui mange a sa faim alors que son voisin a faim a cote de lui — Bayhaqi',action:'Faites un don aujourd\'hui a une organisation caritative islamique qui aide les pauvres en preservant leur dignite',young:'Aide ceux qui en ont besoin ! Quand nous donnons aux pauvres, nous les protegeons de ceux qui veulent en profiter 🎯'}
  },
  {
    id:2, emoji:'🏫',
    ar:{title:'التسلل عبر التعليم',desc:'إنشاء مدارس وجامعات في البلاد الإسلامية تحت غطاء التعليم الحديث بينما الهدف الحقيقي هو تغيير القيم والمعتقدات. الشيخ الغزالي يدعو لتعليم إسلامي قوي يجمع بين العلم والإيمان.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَتَّخِذُوا بِطَانَةً مِنْ دُونِكُمْ لَا يَأْلُونَكُمْ خَبَالًا',verseRef:'آل عمران ١١٨',hadith:'طلب العلم فريضة على كل مسلم — رواه ابن ماجه',action:'تأكد من أن مدرستك أو جامعتك تحترم هويتك الإسلامية',young:'تعلّم العلوم وكن ذكياً، لكن لا تنسَ أن تعرف دينك جيداً أيضاً 🏫'},
    en:{title:'Infiltrating Education',desc:'Establishing schools and universities in Muslim countries under the guise of modern education while the real goal is changing values and beliefs. Sheikh al-Ghazali calls for strong Islamic education combining knowledge and faith.',verse:'O you who believe, do not take as intimates those other than yourselves, for they will not spare you any ruin',verseRef:'Al Imran 118',hadith:'Seeking knowledge is an obligation upon every Muslim — Ibn Majah',action:'Ensure your school or university respects your Islamic identity',young:'Learn all the sciences and be smart, but don\'t forget to know your religion well too 🏫'},
    fr:{title:'Infiltrer l\'Education',desc:'Creer des ecoles et des universites dans les pays musulmans sous couvert d\'education moderne alors que le vrai but est de changer les valeurs et les croyances. Le Sheikh al-Ghazali appelle a une education islamique forte combinant savoir et foi.',verse:'O vous qui croyez, ne prenez pas de confidents en dehors de vous-memes, ils ne manqueront pas de vous nuire',verseRef:'Al Imran 118',hadith:'La quete du savoir est une obligation pour chaque musulman — Ibn Majah',action:'Assurez-vous que votre ecole ou universite respecte votre identite islamique',young:'Apprends toutes les sciences et sois intelligent, mais n\'oublie pas de bien connaitre ta religion aussi 🏫'}
  },
  {
    id:3, emoji:'🏥',
    ar:{title:'الخدمات الطبية كطُعم',desc:'تقديم خدمات طبية مجانية في المناطق الفقيرة مع ربطها بأنشطة دينية مخالفة. الشيخ الغزالي يدعو المسلمين لإنشاء مستشفيات ومراكز صحية تخدم الناس دون شروط.',verse:'وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا',verseRef:'المائدة ٣٢',hadith:'من فرّج عن مسلم كربة من كرب الدنيا فرّج الله عنه كربة من كرب يوم القيامة — رواه مسلم',action:'ادعم مستشفى أو عيادة إسلامية تخدم الناس مجاناً بلا شروط',young:'عندما نبني مستشفيات نساعد المرضى بدون أن نطلب منهم أي شيء — هذا هو الإسلام الحقيقي 🏥'},
    en:{title:'Medical Services as Bait',desc:'Offering free medical services in poor areas while linking them to opposing religious activities. Sheikh al-Ghazali calls on Muslims to establish hospitals and health centers that serve people without conditions.',verse:'And whoever saves a life, it is as if he saved all of mankind',verseRef:'Al-Ma\'idah 32',hadith:'Whoever relieves a Muslim of a hardship, Allah will relieve them of a hardship on the Day of Judgment — Muslim',action:'Support an Islamic hospital or clinic that serves people for free without conditions',young:'When we build hospitals, we help the sick without asking them for anything — that is true Islam 🏥'},
    fr:{title:'Les Services Medicaux comme Appat',desc:'Offrir des services medicaux gratuits dans les zones pauvres tout en les liant a des activites religieuses contraires. Le Sheikh al-Ghazali appelle les musulmans a creer des hopitaux et centres de sante servant les gens sans conditions.',verse:'Et quiconque sauve une vie, c\'est comme s\'il avait sauve l\'humanite entiere',verseRef:'Al-Ma\'idah 32',hadith:'Quiconque soulage un musulman d\'une difficulte, Allah le soulagera d\'une difficulte le Jour du Jugement — Muslim',action:'Soutenez un hopital ou une clinique islamique qui sert les gens gratuitement sans conditions',young:'Quand nous construisons des hopitaux, nous aidons les malades sans rien leur demander — c\'est le vrai Islam 🏥'}
  },
  {
    id:4, emoji:'👶',
    ar:{title:'استهداف الأطفال',desc:'التركيز على الأطفال والأيتام لأنهم الأكثر ضعفاً وتأثراً. إنشاء دور أيتام ورياض أطفال تغرس قيماً مخالفة. واجبنا حماية أطفالنا بتعليمهم هويتهم منذ الصغر.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنْفُسَكُمْ وَأَهْلِيكُمْ نَارًا',verseRef:'التحريم ٦',hadith:'كفى بالمرء إثماً أن يُضيّع من يعول — رواه أبو داود',action:'علّم طفلاً اليوم شيئاً عن الإسلام — آية قصيرة أو قصة نبي',young:'تعلّم عن دينك منذ الصغر! اسأل والديك عن قصص الأنبياء والصحابة 👶'},
    en:{title:'Targeting Children',desc:'Focusing on children and orphans because they are the most vulnerable and impressionable. Establishing orphanages and kindergartens that instill opposing values. Our duty is to protect our children by teaching them their identity from an early age.',verse:'O you who believe, protect yourselves and your families from a Fire',verseRef:'At-Tahrim 6',hadith:'It is enough sin for a person to neglect those he supports — Abu Dawud',action:'Teach a child something about Islam today — a short verse or a story of a prophet',young:'Learn about your religion from a young age! Ask your parents about the stories of the prophets and companions 👶'},
    fr:{title:'Cibler les Enfants',desc:'Se concentrer sur les enfants et les orphelins car ils sont les plus vulnerables et influencables. Creer des orphelinats et des jardins d\'enfants inculquant des valeurs contraires. Notre devoir est de proteger nos enfants en leur enseignant leur identite des le plus jeune age.',verse:'O vous qui croyez, protegez-vous et vos familles d\'un Feu',verseRef:'At-Tahrim 6',hadith:'Il suffit comme peche a une personne de negliger ceux qu\'elle nourrit — Abu Dawud',action:'Enseignez a un enfant quelque chose sur l\'Islam aujourd\'hui — un court verset ou une histoire d\'un prophete',young:'Apprends ta religion des le plus jeune age ! Demande a tes parents les histoires des prophetes et des compagnons 👶'}
  },
  {
    id:5, emoji:'🌍',
    ar:{title:'التآكل الثقافي',desc:'محاولة إبعاد المسلمين عن ثقافتهم وتراثهم من خلال نشر ثقافة استهلاكية مادية. الهدف هو إفراغ المسلم من محتواه الحضاري وجعله تابعاً ثقافياً.',verse:'وَلَا تَتَّبِعُوا أَهْوَاءَ قَوْمٍ قَدْ ضَلُّوا مِنْ قَبْلُ',verseRef:'المائدة ٧٧',hadith:'من تشبّه بقوم فهو منهم — رواه أبو داود',action:'تعرّف اليوم على جانب من تراثك الإسلامي واعتز به',young:'ثقافتنا جميلة! تعلّم عن تراثنا الإسلامي وكن فخوراً بهويتك 🌍'},
    en:{title:'Cultural Erosion',desc:'Attempting to distance Muslims from their culture and heritage by spreading a materialistic consumer culture. The goal is to empty the Muslim of their civilizational content and make them a cultural follower.',verse:'And do not follow the desires of a people who went astray before',verseRef:'Al-Ma\'idah 77',hadith:'Whoever imitates a people is one of them — Abu Dawud',action:'Learn today about an aspect of your Islamic heritage and take pride in it',young:'Our culture is beautiful! Learn about our Islamic heritage and be proud of your identity 🌍'},
    fr:{title:'L\'Erosion Culturelle',desc:'Tenter d\'eloigner les musulmans de leur culture et de leur patrimoine en repandant une culture materialiste et consumériste. L\'objectif est de vider le musulman de son contenu civilisationnel et d\'en faire un suiveur culturel.',verse:'Et ne suivez pas les desirs d\'un peuple qui s\'est egare auparavant',verseRef:'Al-Ma\'idah 77',hadith:'Quiconque imite un peuple en fait partie — Abu Dawud',action:'Apprenez aujourd\'hui un aspect de votre patrimoine islamique et soyez-en fier',young:'Notre culture est belle ! Apprends notre patrimoine islamique et sois fier de ton identite 🌍'}
  },
  {
    id:6, emoji:'📚',
    ar:{title:'التعليم الإسلامي القوي',desc:'أقوى سلاح لحماية الهوية هو تعليم إسلامي عميق يجعل المسلم يفهم دينه حق الفهم. من يعرف دينه جيداً لا يسهل خداعه. العلم نور يحمي صاحبه.',verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'الزمر ٩',hadith:'من يرد الله به خيراً يفقّهه في الدين — متفق عليه',action:'خصص ١٥ دقيقة يومياً لتعلّم شيء جديد عن الإسلام',young:'كن عالماً بدينك! اقرأ كل يوم شيئاً عن الإسلام — العلم هو سلاحك الأقوى 📚'},
    en:{title:'Strong Islamic Education',desc:'The strongest weapon to protect identity is deep Islamic education that makes the Muslim truly understand their religion. Those who know their religion well are not easily deceived. Knowledge is a light that protects its bearer.',verse:'Say: Are those who know equal to those who do not know?',verseRef:'Az-Zumar 9',hadith:'When Allah wills good for someone, He grants them understanding of the religion — Agreed upon',action:'Dedicate 15 minutes daily to learning something new about Islam',young:'Be knowledgeable about your religion! Read something about Islam every day — knowledge is your strongest weapon 📚'},
    fr:{title:'L\'Education Islamique Forte',desc:'L\'arme la plus puissante pour proteger l\'identite est une education islamique profonde qui fait que le musulman comprend vraiment sa religion. Celui qui connait bien sa religion n\'est pas facilement trompe. Le savoir est une lumiere qui protege son porteur.',verse:'Dis : Sont-ils egaux, ceux qui savent et ceux qui ne savent pas ?',verseRef:'Az-Zumar 9',hadith:'Quand Allah veut du bien pour quelqu\'un, Il lui accorde la comprehension de la religion — Unanimement reconnu',action:'Consacrez 15 minutes par jour a apprendre quelque chose de nouveau sur l\'Islam',young:'Sois savant sur ta religion ! Lis chaque jour quelque chose sur l\'Islam — le savoir est ton arme la plus puissante 📚'}
  },
  {
    id:7, emoji:'🏘️',
    ar:{title:'المؤسسات المجتمعية',desc:'بناء مؤسسات مجتمعية إسلامية قوية: مساجد نشطة، مراكز شبابية، جمعيات خيرية، نوادي ثقافية. هذه المؤسسات تملأ الفراغ الذي يستغله الآخرون.',verse:'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَى',verseRef:'المائدة ٢',hadith:'يد الله مع الجماعة — رواه الترمذي',action:'شارك في نشاط مجتمعي إسلامي هذا الأسبوع',young:'المسجد ليس فقط للصلاة! يمكن أن يكون مكاناً للعب والتعلم وتكوين الصداقات 🏘️'},
    en:{title:'Community Institutions',desc:'Building strong Islamic community institutions: active mosques, youth centers, charitable organizations, cultural clubs. These institutions fill the vacuum that others exploit.',verse:'And cooperate in righteousness and piety',verseRef:'Al-Ma\'idah 2',hadith:'The hand of Allah is with the community — Tirmidhi',action:'Participate in an Islamic community activity this week',young:'The mosque is not just for praying! It can be a place for playing, learning, and making friends 🏘️'},
    fr:{title:'Les Institutions Communautaires',desc:'Construire des institutions communautaires islamiques fortes : mosquees actives, centres de jeunesse, organisations caritatives, clubs culturels. Ces institutions comblent le vide que d\'autres exploitent.',verse:'Et entraidez-vous dans la bienfaisance et la piete',verseRef:'Al-Ma\'idah 2',hadith:'La main d\'Allah est avec la communaute — Tirmidhi',action:'Participez a une activite communautaire islamique cette semaine',young:'La mosquee n\'est pas que pour la priere ! Ca peut etre un endroit pour jouer, apprendre et se faire des amis 🏘️'}
  },
  {
    id:8, emoji:'📱',
    ar:{title:'الوعي الإعلامي',desc:'تعلّم كيف تميّز بين الأخبار الصادقة والمضللة. الإعلام قد يُستخدم لتشويه صورة الإسلام والمسلمين. التفكير النقدي هو درعك الأول ضد التضليل.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا',verseRef:'الحجرات ٦',hadith:'كفى بالمرء كذباً أن يحدث بكل ما سمع — رواه مسلم',action:'قبل أن تشارك خبراً اليوم تحقق من صحته أولاً',young:'لا تصدق كل شيء تراه على الإنترنت! تأكد دائماً من المعلومات قبل أن تشاركها 📱'},
    en:{title:'Media Literacy',desc:'Learn to distinguish between honest and misleading news. Media can be used to distort the image of Islam and Muslims. Critical thinking is your first shield against misinformation.',verse:'O you who believe, if a wrongdoer comes to you with news, investigate',verseRef:'Al-Hujurat 6',hadith:'It is enough of a lie for a person to narrate everything they hear — Muslim',action:'Before sharing news today, verify its accuracy first',young:'Don\'t believe everything you see on the internet! Always check information before sharing it 📱'},
    fr:{title:'La Litteratie Mediatique',desc:'Apprendre a distinguer entre les informations honnetes et trompeuses. Les medias peuvent etre utilises pour deformer l\'image de l\'Islam et des musulmans. La pensee critique est votre premier bouclier contre la desinformation.',verse:'O vous qui croyez, si un pervers vous apporte une nouvelle, verifiez-la',verseRef:'Al-Hujurat 6',hadith:'Il suffit comme mensonge a une personne de raconter tout ce qu\'elle entend — Muslim',action:'Avant de partager une nouvelle aujourd\'hui, verifiez d\'abord son exactitude',young:'Ne crois pas tout ce que tu vois sur internet ! Verifie toujours les informations avant de les partager 📱'}
  },
  {
    id:9, emoji:'📖',
    ar:{title:'حفظ العربية والقرآن',desc:'اللغة العربية والقرآن هما حصن الهوية الإسلامية. من يحفظ القرآن ويفهم العربية يملك أقوى سلاح ضد أي محاولة لتغيير هويته. الابتعاد عن العربية يضعف الرابطة بالقرآن.',verse:'إِنَّا أَنْزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَعَلَّكُمْ تَعْقِلُونَ',verseRef:'يوسف ٢',hadith:'خيركم من تعلّم القرآن وعلّمه — رواه البخاري',action:'احفظ آية جديدة من القرآن اليوم وتدبّر معناها',young:'احفظ القرآن! كل آية تحفظها تصبح نوراً في قلبك ودرعاً يحميك 📖'},
    en:{title:'Preserving Arabic & Quran',desc:'The Arabic language and the Quran are the fortress of Islamic identity. Those who memorize the Quran and understand Arabic possess the strongest weapon against any attempt to change their identity. Distancing from Arabic weakens the bond with the Quran.',verse:'Indeed, We have sent it down as an Arabic Quran so that you might understand',verseRef:'Yusuf 2',hadith:'The best among you are those who learn the Quran and teach it — Bukhari',action:'Memorize a new verse from the Quran today and reflect on its meaning',young:'Memorize the Quran! Every verse you memorize becomes a light in your heart and a shield to protect you 📖'},
    fr:{title:'Preserver l\'Arabe et le Coran',desc:'La langue arabe et le Coran sont la forteresse de l\'identite islamique. Ceux qui memorisent le Coran et comprennent l\'arabe possedent l\'arme la plus puissante contre toute tentative de changer leur identite. S\'eloigner de l\'arabe affaiblit le lien avec le Coran.',verse:'Nous l\'avons fait descendre en un Coran arabe afin que vous raisonniez',verseRef:'Yusuf 2',hadith:'Les meilleurs d\'entre vous sont ceux qui apprennent le Coran et l\'enseignent — Bukhari',action:'Memorisez un nouveau verset du Coran aujourd\'hui et reflechissez a son sens',young:'Memorise le Coran ! Chaque verset que tu memorises devient une lumiere dans ton coeur et un bouclier pour te proteger 📖'}
  },
  {
    id:10, emoji:'💪',
    ar:{title:'التنمية الاقتصادية',desc:'الفقر يجعل الناس عرضة للاستغلال. التنمية الاقتصادية في البلاد الإسلامية تحمي المسلمين من الحاجة التي قد تُستغل. الاكتفاء الذاتي قوة.',verse:'وَأَعِدُّوا لَهُمْ مَا اسْتَطَعْتُمْ مِنْ قُوَّةٍ',verseRef:'الأنفال ٦٠',hadith:'المؤمن القوي خير وأحب إلى الله من المؤمن الضعيف — رواه مسلم',action:'ادعم مشروعاً اقتصادياً محلياً يساعد على توفير فرص عمل',young:'كن قوياً ومستقلاً! تعلّم مهارات جديدة حتى تستطيع مساعدة نفسك وغيرك 💪'},
    en:{title:'Economic Development',desc:'Poverty makes people vulnerable to exploitation. Economic development in Muslim countries protects Muslims from the need that can be exploited. Self-sufficiency is strength.',verse:'And prepare against them whatever you are able of power',verseRef:'Al-Anfal 60',hadith:'The strong believer is better and more beloved to Allah than the weak believer — Muslim',action:'Support a local economic project that helps provide job opportunities',young:'Be strong and independent! Learn new skills so you can help yourself and others 💪'},
    fr:{title:'Le Developpement Economique',desc:'La pauvrete rend les gens vulnerables a l\'exploitation. Le developpement economique dans les pays musulmans protege les musulmans du besoin qui peut etre exploite. L\'autosuffisance est une force.',verse:'Et preparez contre eux tout ce que vous pouvez de force',verseRef:'Al-Anfal 60',hadith:'Le croyant fort est meilleur et plus aime d\'Allah que le croyant faible — Muslim',action:'Soutenez un projet economique local qui aide a fournir des opportunites d\'emploi',young:'Sois fort et independant ! Apprends de nouvelles competences pour pouvoir t\'aider toi-meme et aider les autres 💪'}
  },
  {
    id:11, emoji:'🤝',
    ar:{title:'الحوار الحضاري',desc:'الإسلام يدعو للحوار الحضاري المبني على الاحترام المتبادل. الحوار ليس تنازلاً بل هو فرصة لعرض الحق. المسلم الواثق من دينه لا يخاف الحوار بل يرحب به.',verse:'ادْعُ إِلَى سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ',verseRef:'النحل ١٢٥',hadith:'بلّغوا عني ولو آية — رواه البخاري',action:'حاور شخصاً من ديانة مختلفة باحترام وعرّفه على جمال الإسلام',young:'تكلّم عن دينك بثقة وأدب! عندما يسألك أحد عن الإسلام أجبه بابتسامة 🤝'},
    en:{title:'Civilized Dialogue',desc:'Islam calls for civilized dialogue based on mutual respect. Dialogue is not concession but an opportunity to present the truth. A Muslim confident in their faith does not fear dialogue but welcomes it.',verse:'Invite to the way of your Lord with wisdom and good instruction',verseRef:'An-Nahl 125',hadith:'Convey from me even if it is one verse — Bukhari',action:'Have a respectful conversation with someone of a different faith and show them the beauty of Islam',young:'Talk about your religion with confidence and politeness! When someone asks about Islam, answer with a smile 🤝'},
    fr:{title:'Le Dialogue Civilise',desc:'L\'Islam appelle au dialogue civilise base sur le respect mutuel. Le dialogue n\'est pas une concession mais une opportunite de presenter la verite. Un musulman confiant dans sa foi ne craint pas le dialogue mais l\'accueille.',verse:'Appelle au sentier de ton Seigneur par la sagesse et la bonne exhortation',verseRef:'An-Nahl 125',hadith:'Transmettez de ma part ne serait-ce qu\'un verset — Bukhari',action:'Ayez une conversation respectueuse avec quelqu\'un d\'une autre foi et montrez-lui la beaute de l\'Islam',young:'Parle de ta religion avec confiance et politesse ! Quand quelqu\'un te pose des questions sur l\'Islam, reponds avec un sourire 🤝'}
  },
  {
    id:12, emoji:'📜',
    ar:{title:'الوعي التاريخي',desc:'معرفة تاريخ محاولات التنصير وأساليبها يحمي من الوقوع فيها. التاريخ يكرر نفسه، ومن لا يعرف تاريخه يسهل خداعه. الشيخ الغزالي يوثّق هذه المحاولات بالأدلة.',verse:'قَدْ خَلَتْ مِنْ قَبْلِكُمْ سُنَنٌ فَسِيرُوا فِي الْأَرْضِ',verseRef:'آل عمران ١٣٧',hadith:'لا يُلدغ المؤمن من جحر واحد مرتين — متفق عليه',action:'اقرأ اليوم عن تجربة تاريخية في مقاومة التغيير الثقافي',young:'تعلّم من التاريخ! من يعرف ماذا حدث في الماضي يستطيع حماية نفسه في المستقبل 📜'},
    en:{title:'Historical Awareness',desc:'Knowing the history of missionary attempts and their methods protects against falling into them. History repeats itself, and those who do not know their history are easily deceived. Sheikh al-Ghazali documents these attempts with evidence.',verse:'There have been patterns before you, so travel through the earth',verseRef:'Al Imran 137',hadith:'A believer is not stung from the same hole twice — Agreed upon',action:'Read today about a historical experience in resisting cultural change',young:'Learn from history! Those who know what happened in the past can protect themselves in the future 📜'},
    fr:{title:'La Conscience Historique',desc:'Connaitre l\'histoire des tentatives missionnaires et leurs methodes protege contre le risque d\'y tomber. L\'histoire se repete, et ceux qui ne connaissent pas leur histoire sont facilement trompes. Le Sheikh al-Ghazali documente ces tentatives avec des preuves.',verse:'Il y a eu des exemples avant vous, parcourez la terre',verseRef:'Al Imran 137',hadith:'Le croyant n\'est pas pique deux fois du meme trou — Unanimement reconnu',action:'Lisez aujourd\'hui une experience historique de resistance au changement culturel',young:'Apprends de l\'histoire ! Ceux qui savent ce qui s\'est passe dans le passe peuvent se proteger dans le futur 📜'}
  },
  {
    id:13, emoji:'🧑‍🤝‍🧑',
    ar:{title:'برامج الشباب',desc:'الشباب هم المستقبل وهم الهدف الأول. إنشاء برامج شبابية إسلامية جذابة تملأ وقت الفراغ وتبني الشخصية وتقوي الانتماء. الشباب الذي لا يجد بديلاً إسلامياً يبحث عن بدائل أخرى.',verse:'نَحْنُ نَقُصُّ عَلَيْكَ نَبَأَهُمْ بِالْحَقِّ إِنَّهُمْ فِتْيَةٌ آمَنُوا بِرَبِّهِمْ',verseRef:'الكهف ١٣',hadith:'اغتنم خمساً قبل خمس: شبابك قبل هرمك — رواه الحاكم',action:'شارك في أو أنشئ نشاطاً شبابياً إسلامياً في مجتمعك',young:'الأنشطة الإسلامية ممتعة! انضم لنادي قرآني أو رياضي في مسجدك 🧑‍🤝‍🧑'},
    en:{title:'Youth Programs',desc:'Youth are the future and the primary target. Creating attractive Islamic youth programs fills free time, builds character, and strengthens belonging. Youth who do not find an Islamic alternative look for other alternatives.',verse:'We relate to you their story in truth. They were youths who believed in their Lord',verseRef:'Al-Kahf 13',hadith:'Take advantage of five before five: your youth before your old age — Hakim',action:'Participate in or create an Islamic youth activity in your community',young:'Islamic activities are fun! Join a Quran club or sports team at your mosque 🧑‍🤝‍🧑'},
    fr:{title:'Les Programmes Jeunesse',desc:'Les jeunes sont l\'avenir et la cible principale. Creer des programmes jeunesse islamiques attrayants remplit le temps libre, construit le caractere et renforce l\'appartenance. Les jeunes qui ne trouvent pas d\'alternative islamique cherchent d\'autres alternatives.',verse:'Nous te racontons leur histoire en toute verite. C\'etaient des jeunes qui croyaient en leur Seigneur',verseRef:'Al-Kahf 13',hadith:'Profite de cinq avant cinq : ta jeunesse avant ta vieillesse — Hakim',action:'Participez ou creez une activite jeunesse islamique dans votre communaute',young:'Les activites islamiques sont amusantes ! Rejoins un club coranique ou une equipe sportive a ta mosquee 🧑‍🤝‍🧑'}
  },
  {
    id:14, emoji:'👨‍👩‍👧‍👦',
    ar:{title:'تقوية الأسرة',desc:'الأسرة المسلمة هي الحصن الأول. تقوية الروابط الأسرية وبناء بيت إسلامي دافئ يحمي الأبناء من أي تأثير خارجي. الأسرة المفككة هي البيئة الأسهل للاختراق.',verse:'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا',verseRef:'الروم ٢١',hadith:'خيركم خيركم لأهله وأنا خيركم لأهلي — رواه الترمذي',action:'اجلس مع عائلتك اليوم وتحدثوا عن شيء إسلامي معاً',young:'عائلتك هي حصنك! اجلسوا معاً واقرأوا قصة إسلامية كل مساء 👨‍👩‍👧‍👦'},
    en:{title:'Strengthening Family',desc:'The Muslim family is the first fortress. Strengthening family bonds and building a warm Islamic home protects children from any external influence. A broken family is the easiest environment to infiltrate.',verse:'And among His signs is that He created for you spouses from yourselves that you may find peace in them',verseRef:'Ar-Rum 21',hadith:'The best of you is the best to his family, and I am the best to my family — Tirmidhi',action:'Sit with your family today and discuss something Islamic together',young:'Your family is your fortress! Sit together and read an Islamic story every evening 👨‍👩‍👧‍👦'},
    fr:{title:'Renforcer la Famille',desc:'La famille musulmane est la premiere forteresse. Renforcer les liens familiaux et construire un foyer islamique chaleureux protege les enfants de toute influence exterieure. Une famille brisee est l\'environnement le plus facile a infiltrer.',verse:'Et parmi Ses signes, Il a cree pour vous des epouses issues de vous-memes afin que vous trouviez la paix aupres d\'elles',verseRef:'Ar-Rum 21',hadith:'Le meilleur d\'entre vous est le meilleur envers sa famille, et je suis le meilleur envers ma famille — Tirmidhi',action:'Asseyez-vous avec votre famille aujourd\'hui et discutez de quelque chose d\'islamique ensemble',young:'Ta famille est ta forteresse ! Asseyez-vous ensemble et lisez une histoire islamique chaque soir 👨‍👩‍👧‍👦'}
  },
  {
    id:15, emoji:'🧠',
    ar:{title:'الاستعداد الفكري',desc:'المسلم يجب أن يكون مستعداً فكرياً للرد على الشبهات. تعلّم الحجج وفهم المقارنة بين الأديان يجعل المسلم قادراً على الدفاع عن دينه بالعقل والدليل.',verse:'وَجَادِلْهُمْ بِالَّتِي هِيَ أَحْسَنُ',verseRef:'النحل ١٢٥',hadith:'إنما العلم بالتعلّم — رواه البخاري',action:'اقرأ اليوم عن شبهة شائعة ضد الإسلام وتعلّم الرد عليها بالدليل',young:'كن ذكياً واستعد! تعلّم كيف تجيب على الأسئلة عن دينك بثقة 🧠'},
    en:{title:'Intellectual Preparation',desc:'A Muslim must be intellectually prepared to respond to doubts. Learning arguments and understanding comparative religion makes a Muslim capable of defending their faith with reason and evidence.',verse:'And argue with them in a way that is best',verseRef:'An-Nahl 125',hadith:'Knowledge is only gained through learning — Bukhari',action:'Read today about a common misconception about Islam and learn how to refute it with evidence',young:'Be smart and prepared! Learn how to answer questions about your religion with confidence 🧠'},
    fr:{title:'La Preparation Intellectuelle',desc:'Un musulman doit etre intellectuellement prepare a repondre aux doutes. Apprendre les arguments et comprendre la religion comparee rend le musulman capable de defendre sa foi par la raison et la preuve.',verse:'Et discute avec eux de la meilleure maniere',verseRef:'An-Nahl 125',hadith:'Le savoir ne s\'acquiert que par l\'apprentissage — Bukhari',action:'Lisez aujourd\'hui sur une idee fausse courante sur l\'Islam et apprenez a la refuter avec des preuves',young:'Sois intelligent et prepare ! Apprends a repondre aux questions sur ta religion avec confiance 🧠'}
  }
];

// ═══════════════ QUIZ DATA (10 Questions) ═══════════════
const QUIZ = [
  {
    ar:{q:'أكمل الآية: "ولن ترضى عنك اليهود ولا النصارى حتى تتّبع ..."',opts:['سنتهم','طريقهم','ملتهم','أمرهم'],correct:2,hint:'الآية في سورة البقرة',quran:'البقرة ١٢٠'},
    en:{q:'Complete the verse: "And never will the Jews or Christians approve of you until you follow their..."',opts:['Tradition','Way','Religion','Command'],correct:2,hint:'This verse is in Surah Al-Baqarah',quran:'Al-Baqarah 120'},
    fr:{q:'Completez le verset : "Et jamais les Juifs ni les Chretiens ne seront satisfaits de toi jusqu\'a ce que tu suives leur..."',opts:['Tradition','Voie','Religion','Ordre'],correct:2,hint:'Ce verset est dans Sourate Al-Baqarah',quran:'Al-Baqarah 120'}
  },
  {
    ar:{q:'ما أقوى سلاح لحماية هوية المسلم؟',opts:['المال','السلاح','العلم الشرعي','العزلة'],correct:2,hint:'من يعرف دينه لا يسهل خداعه',quran:'الزمر ٩'},
    en:{q:'What is the strongest weapon to protect Muslim identity?',opts:['Money','Weapons','Islamic knowledge','Isolation'],correct:2,hint:'Those who know their religion are not easily deceived',quran:'Az-Zumar 9'},
    fr:{q:'Quelle est l\'arme la plus puissante pour proteger l\'identite musulmane ?',opts:['L\'argent','Les armes','Le savoir islamique','L\'isolement'],correct:2,hint:'Ceux qui connaissent leur religion ne sont pas facilement trompes',quran:'Az-Zumar 9'}
  },
  {
    ar:{q:'أكمل الحديث: "لا يُلدغ المؤمن من ... واحد مرتين"',opts:['طريق','باب','جحر','مكان'],correct:2,hint:'حديث عن التعلم من التجارب',quran:'آل عمران ١٣٧'},
    en:{q:'Complete the hadith: "A believer is not stung from the same ... twice"',opts:['Path','Door','Hole','Place'],correct:2,hint:'A hadith about learning from experiences',quran:'Al Imran 137'},
    fr:{q:'Completez le hadith : "Le croyant n\'est pas pique deux fois du meme..."',opts:['Chemin','Porte','Trou','Endroit'],correct:2,hint:'Un hadith sur l\'apprentissage des experiences',quran:'Al Imran 137'}
  },
  {
    ar:{q:'في أي سورة وردت آية "إن جاءكم فاسق بنبأ فتبينوا"؟',opts:['البقرة','النساء','الحجرات','المائدة'],correct:2,hint:'سورة تتحدث عن آداب التعامل بين المسلمين',quran:'الحجرات ٦'},
    en:{q:'In which surah does the verse "if a wrongdoer comes to you with news, investigate" appear?',opts:['Al-Baqarah','An-Nisa','Al-Hujurat','Al-Ma\'idah'],correct:2,hint:'A surah about etiquette among Muslims',quran:'Al-Hujurat 6'},
    fr:{q:'Dans quelle sourate apparait le verset "si un pervers vous apporte une nouvelle, verifiez-la" ?',opts:['Al-Baqarah','An-Nisa','Al-Hujurat','Al-Ma\'idah'],correct:2,hint:'Une sourate sur l\'etiquette entre musulmans',quran:'Al-Hujurat 6'}
  },
  {
    ar:{q:'مؤلف كتاب "صيحة تحذير من دعاة التنصير" هو:',opts:['يوسف القرضاوي','أحمد ديدات','محمد الغزالي','سيد قطب'],correct:2,hint:'عالم مصري لُقب بأديب الدعوة',quran:'البقرة ١٢٠'},
    en:{q:'The author of "A Warning Cry Against Missionaries" is:',opts:['Yusuf al-Qaradawi','Ahmed Deedat','Mohammed al-Ghazali','Sayyid Qutb'],correct:2,hint:'An Egyptian scholar nicknamed "The Literary Preacher"',quran:'Al-Baqarah 120'},
    fr:{q:'L\'auteur de "Un Cri d\'Alerte contre les Missionnaires" est :',opts:['Yusuf al-Qaradawi','Ahmed Deedat','Mohammed al-Ghazali','Sayyid Qutb'],correct:2,hint:'Un savant egyptien surnomme "Le Litteraire de la Predication"',quran:'Al-Baqarah 120'}
  },
  {
    ar:{q:'ما الحصن الأول لحماية الأطفال المسلمين؟',opts:['المدرسة','المسجد','الأسرة','الحكومة'],correct:2,hint:'هي النواة الأولى للمجتمع',quran:'التحريم ٦'},
    en:{q:'What is the first fortress for protecting Muslim children?',opts:['School','Mosque','Family','Government'],correct:2,hint:'It is the first nucleus of society',quran:'At-Tahrim 6'},
    fr:{q:'Quelle est la premiere forteresse pour proteger les enfants musulmans ?',opts:['L\'ecole','La mosquee','La famille','Le gouvernement'],correct:2,hint:'C\'est le premier noyau de la societe',quran:'At-Tahrim 6'}
  },
  {
    ar:{q:'أكمل الحديث: "من تشبّه بقوم فهو ..."',opts:['مثلهم','معهم','منهم','عندهم'],correct:2,hint:'حديث عن التقليد الأعمى',quran:'المائدة ٧٧'},
    en:{q:'Complete the hadith: "Whoever imitates a people is ... them"',opts:['Like','With','One of','Near'],correct:2,hint:'A hadith about blind imitation',quran:'Al-Ma\'idah 77'},
    fr:{q:'Completez le hadith : "Quiconque imite un peuple en fait..."',opts:['Ressemble','Est avec','Partie','Proche'],correct:2,hint:'Un hadith sur l\'imitation aveugle',quran:'Al-Ma\'idah 77'}
  },
  {
    ar:{q:'ما المقصود بـ"الغزو الفكري"؟',opts:['الحرب العسكرية','محاولة تغيير أفكار وقيم الأمة','التجارة الدولية','السياحة الثقافية'],correct:1,hint:'غزو بالأفكار لا بالأسلحة',quran:'البقرة ١٢٠'},
    en:{q:'What is meant by "intellectual invasion"?',opts:['Military war','Attempting to change a nation\'s ideas and values','International trade','Cultural tourism'],correct:1,hint:'Invasion with ideas, not weapons',quran:'Al-Baqarah 120'},
    fr:{q:'Que signifie "l\'invasion intellectuelle" ?',opts:['La guerre militaire','Tenter de changer les idees et les valeurs d\'une nation','Le commerce international','Le tourisme culturel'],correct:1,hint:'L\'invasion par les idees, pas par les armes',quran:'Al-Baqarah 120'}
  },
  {
    ar:{q:'ما أسلوب الدعوة الذي يأمر به القرآن؟',opts:['بالقوة','بالحكمة والموعظة الحسنة','بالتهديد','بالمال'],correct:1,hint:'من سورة النحل',quran:'النحل ١٢٥'},
    en:{q:'What method of calling does the Quran command?',opts:['By force','With wisdom and good instruction','By threats','With money'],correct:1,hint:'From Surah An-Nahl',quran:'An-Nahl 125'},
    fr:{q:'Quelle methode d\'appel le Coran ordonne-t-il ?',opts:['Par la force','Par la sagesse et la bonne exhortation','Par les menaces','Par l\'argent'],correct:1,hint:'De Sourate An-Nahl',quran:'An-Nahl 125'}
  },
  {
    ar:{q:'أكمل الحديث: "المؤمن القوي خير و... إلى الله من المؤمن الضعيف"',opts:['أقرب','أحب','أعلى','أعز'],correct:1,hint:'حديث عن القوة بكل أنواعها',quran:'الأنفال ٦٠'},
    en:{q:'Complete the hadith: "The strong believer is better and more ... to Allah than the weak believer"',opts:['Near','Beloved','High','Honored'],correct:1,hint:'A hadith about strength in all its forms',quran:'Al-Anfal 60'},
    fr:{q:'Completez le hadith : "Le croyant fort est meilleur et plus ... d\'Allah que le croyant faible"',opts:['Proche','Aime','Eleve','Honore'],correct:1,hint:'Un hadith sur la force sous toutes ses formes',quran:'Al-Anfal 60'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء الثبات',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'آل عمران ٨'},
    en:{label:'Dua for Steadfastness',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'Our Lord, do not let our hearts deviate after You have guided us, and grant us mercy — Al Imran 8'},
    fr:{label:'Dua pour la Fermete',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'Notre Seigneur, ne fais pas devier nos coeurs apres que Tu nous as guides et accorde-nous misericorde — Al Imran 8'} },
  { ar:{label:'دعاء الحماية',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْفِتَنِ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ',tr:'رواه مسلم'},
    en:{label:'Dua for Protection',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْفِتَنِ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ',tr:'O Allah, I seek refuge in You from trials, both apparent and hidden — Muslim'},
    fr:{label:'Dua pour la Protection',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْفِتَنِ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ',tr:'O Allah, je cherche refuge aupres de Toi contre les epreuves, apparentes et cachees — Muslim'} },
  { ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'},
    en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'},
    fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'التوبة ١٢٩'},
    en:{label:'Dua of Trust',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah is sufficient for me; there is no god except Him. I rely on Him, Lord of the Great Throne — At-Tawbah 129'},
    fr:{label:'Dua de Confiance',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah me suffit ; il n\'y a de dieu que Lui. Je m\'en remets a Lui, Seigneur du Trone immense — At-Tawbah 129'} },
  { ar:{label:'دعاء النصرة',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'البقرة ٢٥٠'},
    en:{label:'Dua for Victory',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Our Lord, pour upon us patience, plant firmly our feet, and give us victory — Al-Baqarah 250'},
    fr:{label:'Dua pour la Victoire',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Notre Seigneur, deverse sur nous la patience, affermis nos pas et donne-nous la victoire — Al-Baqarah 250'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'sayhah-xp';
const BADGES_KEY = 'sayhah-badges';
const READ_KEY = 'sayhah-read';
const STREAK_KEY = 'sayhah-streak';
const MODE_KEY = 'sayhah-mode';
const QUIZ_BEST_KEY = 'sayhah-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Debutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Perseverant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) { const xp = getXP() + pts; localStorage.setItem(XP_KEY, xp); checkBadges(xp); updateXPDisplay(); return xp; }
function getLevel(xp) { if (xp >= 1000) return 5; if (xp >= 500) return 4; if (xp >= 300) return 3; if (xp >= 100) return 2; return 1; }
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) { const earned = getEarnedBadges(); BADGE_DEFS.forEach(b => { if (xp >= b.xp && !earned.includes(b.id)) { earned.push(b.id); localStorage.setItem(BADGES_KEY, JSON.stringify(earned)); showToast(`${b.emoji} ${b[lang]}!`); playSound('success'); } }); }
function getReadCards() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markCardRead(id) { const read = getReadCards(); if (!read.includes(id)) { read.push(id); localStorage.setItem(READ_KEY, JSON.stringify(read)); addXP(10); } }

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() { const today = new Date().toDateString(); const s = getStreak(); if (s.lastDate === today) return s.count; const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1); if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; } s.lastDate = today; localStorage.setItem(STREAK_KEY, JSON.stringify(s)); return s.count; }

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() { ageMode = ageMode === 'young' ? 'teen' : 'young'; localStorage.setItem(MODE_KEY, ageMode); document.body.classList.toggle('young-mode', ageMode === 'young'); renderAll(); showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode); playSound('theme'); }

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentPrincipleIdx = -1;

function setLang(l) { lang = l; document.documentElement.lang = l; document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr'; document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l)); renderAll(); }
function cycleTheme() { const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length; currentTheme = THEMES[idx]; document.documentElement.dataset.theme = currentTheme; document.getElementById('themeIcon').textContent = THEME_ICONS[currentTheme]; playSound('theme'); }

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  document.getElementById('appTitle').textContent = t.appTitle;
  document.getElementById('splashSub').textContent = t.splashSub;
  document.getElementById('splashHint').textContent = t.splashHint;
  document.getElementById('tabHome').textContent = t.tabHome;
  document.getElementById('tabCards').textContent = t.tabCards;
  document.getElementById('tabQuiz').textContent = t.tabQuiz;
  document.getElementById('tabProgress').textContent = t.tabProgress;
  document.getElementById('tabAbout').textContent = t.tabAbout;
  document.getElementById('cardsTitle').textContent = t.cardsTitle;
  document.getElementById('cardsDesc').textContent = t.cardsDesc;
  document.getElementById('quizTitle').textContent = t.quizTitle;
  document.getElementById('quizDesc').textContent = t.quizDesc;
  document.getElementById('progressTitle').textContent = t.progressTitle;
  document.getElementById('progressDesc').textContent = t.progressDesc;
  document.getElementById('helpTitle').textContent = t.helpTitle;
  document.getElementById('duaPanelTitle').textContent = t.duaPanelTitle;
  document.getElementById('ageModeBtn').textContent = ageMode === 'young' ? t.youngMode : t.teenMode;
  renderHome(); renderCards(); renderProgress(); renderAbout(); renderHelp(); renderDuas(); renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang]; const dayIdx = new Date().getDate() % CARDS.length; const card = CARDS[dayIdx]; const d = card[lang];
  document.getElementById('dailyCard').innerHTML = `<div class="daily-label">${t.dailyLabel}</div><div class="daily-title">${card.emoji} ${d.title}</div><div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div><div class="daily-action" onclick="switchTab('cards');toggleCard('card-${card.id}')">${t.readMore} &#8594;</div>`;
  document.getElementById('homeGrid').innerHTML = CARDS.map(c => { const dd = c[lang]; return `<div class="home-card" onclick="switchTab('cards');toggleCard('card-${c.id}')"><span class="hc-icon">${c.emoji}</span><div class="hc-title">${dd.title}</div></div>`; }).join('');
}

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang]; const readCards = getReadCards(); const container = document.getElementById('cardsContainer');
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="cardsSearch" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"></div>`;
  container.innerHTML = searchHTML + CARDS.map(c => { const d = c[lang]; const isRead = readCards.includes(c.id);
    return `<div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="card-${c.id}"><div class="trait-head" onclick="toggleCard('card-${c.id}');markCardRead(${c.id})"><span class="trait-num">${c.id}</span><span class="trait-emoji">${c.emoji}</span><span class="trait-title">${d.title}</span>${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}<span class="trait-chev">&#9660;</span></div><div class="trait-body"><div class="trait-inner"><div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div><div class="verse-box"><div class="verse-arabic">${d.verse}</div><div class="verse-ref">${d.verseRef}</div></div><div class="hadith-box"><span class="hadith-label">📜 ${t.hadith}</span><div class="hadith-text">${d.hadith}</div></div><div class="action-box"><span class="action-icon">💡</span><span>${d.action}</span></div><button class="share-btn" onclick="shareCard(${c.id})"><span class="share-icon">📤</span> ${t.share}</button></div></div></div>`; }).join('');
}

function filterCards(query) { const cards = document.querySelectorAll('.trait-card'); const q = query.toLowerCase(); cards.forEach(card => { const title = card.querySelector('.trait-title').textContent.toLowerCase(); const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : ''; card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none'; }); }
function shareCard(id) { const card = CARDS.find(c => c.id === id); if (!card) return; const d = card[lang]; const text = `${card.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`; if (navigator.share) { navigator.share({ title: d.title, text }); } else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); } }

// ═══════════════ RENDER: QUIZ ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };
function renderQuiz() { quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true }; showQuizQuestion(); }

function showQuizQuestion() {
  const t = T[lang]; const container = document.getElementById('quizContainer'); const result = document.getElementById('quizResult'); result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) { showQuizResult(); return; }
  const q = QUIZ[quizState.current][lang]; const total = QUIZ.length; const num = quizState.current + 1;
  container.innerHTML = `<div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div><div class="quiz-counter">${num} / ${total}</div><div class="quiz-question-card scroll-reveal"><div class="quiz-q-text">${q.q}</div><div class="quiz-options" id="quizOpts">${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}</div><div class="quiz-lifelines"><button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button><button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button><button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button></div><div id="quizFeedback" class="quiz-feedback hidden"></div></div>`;
}

function answerQuiz(idx) { if (!quizState.active) return; const q = QUIZ[quizState.current][lang]; const correct = q.correct; const opts = document.querySelectorAll('.quiz-opt'); opts.forEach((o, i) => { o.disabled = true; if (i === correct) o.classList.add('correct'); if (i === idx && i !== correct) o.classList.add('wrong'); }); const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); if (idx === correct) { quizState.score++; addXP(5); feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`; playSound('success'); } else { feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`; playSound('click'); } quizState.answers.push(idx); quizState.current++; setTimeout(() => showQuizQuestion(), 1800); }
function useFiftyFifty() { if (!quizState.lifelines.fifty) return; quizState.lifelines.fifty = false; const q = QUIZ[quizState.current][lang]; const correct = q.correct; const wrongIdxs = [0,1,2,3].filter(i => i !== correct); const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2); toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }}); document.querySelector('.lifeline-btn').classList.add('used'); playSound('click'); }
function useHint() { if (!quizState.lifelines.hint) return; quizState.lifelines.hint = false; const q = QUIZ[quizState.current][lang]; const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`; playSound('click'); }
function useQuranRef() { if (!quizState.lifelines.quran) return; quizState.lifelines.quran = false; const q = QUIZ[quizState.current][lang]; const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`; playSound('click'); }

function showQuizResult() {
  const t = T[lang]; const total = QUIZ.length; const pct = Math.round(quizState.score / total * 100); const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0'); if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct); addXP(20);
  let emoji, title; if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; } else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; } else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  document.getElementById('quizContainer').innerHTML = ''; const result = document.getElementById('quizResult'); result.classList.remove('hidden');
  result.innerHTML = `<div class="qr-emoji">${emoji}</div><div class="qr-score">${quizState.score}/${total}</div><div class="qr-title">${title}</div><div class="qr-desc">${pct}%</div><button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' }); if (pct >= 80) launchConfetti(); quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang]; const xp = getXP(); const level = getLevel(xp); const streak = getStreak().count; const readCards = getReadCards(); const earned = getEarnedBadges(); const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0'); const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id)); const nextXP = nextBadge ? nextBadge.xp : 1000; const progressPct = Math.min(100, (xp / nextXP) * 100);
  document.getElementById('progressContainer').innerHTML = `<div class="progress-xp-card"><div class="xp-header"><span class="xp-icon">⭐</span><span class="xp-amount">${xp} ${t.xpLabel}</span></div><div class="xp-bar-wrap"><div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div><span class="xp-level">${t.levelLabel} ${level}</span></div>${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}</div>${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}<div class="progress-stats"><div class="stat-card"><span class="stat-num">${readCards.length}</span><span class="stat-label">${lang==='ar'?'بطاقة مقروءة':lang==='fr'?'Cartes lues':'Cards Read'}</span><span class="stat-total">/ ${CARDS.length}</span></div><div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div><div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div></div><div class="badges-section"><h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3><div class="badges-grid">${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}</div></div>`;
}
function updateXPDisplay() { const panel = document.getElementById('panel-progress'); if (panel && panel.classList.contains('active')) renderProgress(); }

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: { disclaimerTitle:'⚠️ تنبيه مهم', disclaimer:'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة. ليست فتوى.', authorName:'الشيخ محمد الغزالي', authorDates:'١٩١٧ — ١٩٩٦', authorBio:'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل.', bookTitle:'عن الكتاب', bookDesc:'«صيحة تحذير من دعاة التنصير» كتاب يكشف أساليب استهداف المسلمين ثقافياً ودينياً. يوضح الشيخ الغزالي كيف يُستغل الفقر والجهل لتغيير عقائد المسلمين، ويقدم حلولاً عملية لحماية الهوية الإسلامية من خلال التعليم والتنمية والوعي.', sourcesTitle:'المصادر', sources:['كتاب "صيحة تحذير من دعاة التنصير" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأبي داود'], contact:'تواصل: abdelhak.bourdim@gmail.com' },
    en: { disclaimerTitle:'⚠️ Important Notice', disclaimer:'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.', authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996', authorBio:'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner.', bookTitle:'About the Book', bookDesc:'"A Warning Cry Against Missionaries" exposes methods of targeting Muslims culturally and religiously. Sheikh al-Ghazali explains how poverty and ignorance are exploited to change Muslim beliefs, and offers practical solutions to protect Islamic identity through education, development, and awareness.', sourcesTitle:'Sources', sources:['"A Warning Cry Against Missionaries" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi and Abu Dawud'], contact:'Contact: abdelhak.bourdim@gmail.com' },
    fr: { disclaimerTitle:'⚠️ Avis Important', disclaimer:'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.', authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996', authorBio:'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.', bookTitle:'A Propos du Livre', bookDesc:'"Un Cri d\'Alerte contre les Missionnaires" expose les methodes de ciblage des musulmans culturellement et religieusement. Le Sheikh al-Ghazali explique comment la pauvrete et l\'ignorance sont exploitees pour changer les croyances des musulmans, et offre des solutions pratiques pour proteger l\'identite islamique par l\'education, le developpement et la sensibilisation.', sourcesTitle:'Sources', sources:['"Un Cri d\'Alerte contre les Missionnaires" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi et Abu Dawud'], contact:'Contact : abdelhak.bourdim@gmail.com' }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `<div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div><div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div><div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div><div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div><div class="about-section"><p class="about-text">${a.contact}</p></div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [{title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},{title:'📚 المصادر',body:'كتاب "صيحة تحذير من دعاة التنصير" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},{title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ١٥ بطاقة، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},{title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},{title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'}],
    en: [{title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},{title:'📚 Sources',body:'"A Warning Cry Against Missionaries" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},{title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 15 cards, interactive quiz, XP and badges system, 2 age modes.'},{title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},{title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'}],
    fr: [{title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},{title:'📚 Sources',body:'"Un Cri d\'Alerte contre les Missionnaires" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},{title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 15 cartes, quiz interactif, systeme XP et badges, 2 modes d\'age.'},{title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},{title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'}]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() { document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => { const dd = d[lang]; return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`; }).join(''); }

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = { ar:['📖 اقرأ بطاقة جديدة كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ دعاء الثبات والحماية','⭐ أكمل ١٥ بطاقة لتصبح خبيراً'], en:['📖 Read a new card every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget duas for steadfastness','⭐ Complete all 15 cards to become an Expert'], fr:['📖 Lisez une nouvelle carte chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas pour la fermete','⭐ Completez les 15 cartes pour devenir Expert'] };
  const items = tips[lang]; const doubled = [...items, ...items]; const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() { const features = document.getElementById('splashFeatures'); if (features) { features.innerHTML = T[lang].splashFeatures.map((f, i) => `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`).join(''); } let count = 5; const counter = document.getElementById('splashCount'); splashTimer = setInterval(() => { count--; if (counter) counter.textContent = count; if (count <= 0) dismissSplash(); }, 1000); }
function dismissSplash() { clearInterval(splashTimer); const splash = document.getElementById('splash'); if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); } }

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() { document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => { switchTab(tab.dataset.tab); }); }); }
function switchTab(name) { document.querySelectorAll('.panel').forEach(p => p.classList.remove('active')); document.querySelectorAll('.tab').forEach(t => t.classList.remove('active')); const panel = document.getElementById('panel-' + name); const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`); if (panel) panel.classList.add('active'); if (tabBtn) tabBtn.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); playSound('click'); setTimeout(() => { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => { if (window._scrollObserver) window._scrollObserver.observe(el); }); initTypewriter(); }, 100); }

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() { if (!('IntersectionObserver' in window)) return; window._scrollObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); window._scrollObserver.unobserve(entry.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }); document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el)); }

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() { document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { const hp = document.getElementById('helpPanel'); if (!hp.classList.contains('hidden')) { toggleHelp(); return; } const dp = document.getElementById('duaPanel'); if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; } document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open')); } if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { const panel = document.getElementById('panel-cards'); if (!panel || !panel.classList.contains('active')) return; if (document.activeElement && document.activeElement.id === 'cardsSearch') return; e.preventDefault(); const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none'); if (!cards.length) return; if (currentPrincipleIdx >= 0 && currentPrincipleIdx < cards.length) cards[currentPrincipleIdx].classList.remove('open'); const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1); currentPrincipleIdx = Math.max(0, Math.min(cards.length-1, currentPrincipleIdx+dir)); cards[currentPrincipleIdx].classList.add('open'); cards[currentPrincipleIdx].scrollIntoView({ behavior:'smooth', block:'center' }); playSound('click'); } }); }

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'); const m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) { try { if (!audioCtx) audioCtx = new AudioCtx(); const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); gain.gain.value = 0.06; if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; } else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; } else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; } osc.start(); osc.stop(audioCtx.currentTime + 0.1); } catch(e) {} }

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() { const canvas = document.getElementById('confettiCanvas'); if (!canvas) return; canvas.style.display = 'block'; const ctx = canvas.getContext('2d'); canvas.width = window.innerWidth; canvas.height = window.innerHeight; const particles = []; const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7']; for (let i = 0; i < 120; i++) { particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 }); } let frame = 0; function draw() { ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); }); frame++; if (frame < 120) requestAnimationFrame(draw); else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; } } draw(); }

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() { const dailyTitle = document.querySelector('.daily-card .daily-title'); if (!dailyTitle || dailyTitle.dataset.twDone) return; const fullText = dailyTitle.textContent; dailyTitle.textContent = ''; dailyTitle.classList.add('typewriter-text'); dailyTitle.dataset.twDone = '1'; let i = 0; const speed = Math.max(30, 2000 / fullText.length); function typeChar() { if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); } else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); } } setTimeout(typeChar, 500); }

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() { let touchStartX = 0, touchStartY = 0; const tabOrder = ['home','cards','quiz','progress','about']; document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true }); document.addEventListener('touchend', e => { const dx = e.changedTouches[0].screenX - touchStartX; const dy = e.changedTouches[0].screenY - touchStartY; if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return; const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); }); if (current < 0) return; const isRTL = document.documentElement.dir === 'rtl'; let next; if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1; if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]); }, { passive: true }); }

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.toggle('young-mode', ageMode === 'young');
  updateStreak();
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
