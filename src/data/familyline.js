const familyLine = [
  {
    id: 1,
    name_ar: "إبراهيم عليه السلام",
    name_en: "Ibrahim (Abraham)",
    wives: ["هاجر", "سارة"],
    wives_info: [
      {
        name_ar: "هاجر",
        name_en: "Hajar (Hagar)",
        description_ar:
          "أم إسماعيل عليه السلام، مصرية الأصل، ضربت أروع الأمثلة في الصبر والتوكل حين تركها إبراهيم مع ابنها في مكة، وهي صاحبة قصة بئر زمزم.",
        description_en:
          "Mother of Ismail (Ishmael), originally from Egypt. She exemplified patience and trust in God when Ibrahim left her and her son in Makkah. She is associated with the story of Zamzam well.",
      },
      {
        name_ar: "سارة",
        name_en: "Sarah",
        description_ar:
          "زوجة إبراهيم الأولى وأم إسحاق عليه السلام، عُرفت بجمالها وإيمانها وصبرها الطويل مع زوجها في الدعوة والترحال.",
        description_en:
          "The first wife of Ibrahim and mother of Isaac (Ishaq). Known for her beauty, faith, and long patience alongside her husband during his mission and travels.",
      },
    ],
    description_ar:
      "إبراهيم عليه السلام هو خليل الرحمن ومن أعظم الأنبياء، دعا قومه إلى التوحيد وترك عبادة الأصنام، وابتلاه الله بذبح ابنه إسماعيل فكان مثالًا للطاعة، وهو من بَنى الكعبة مع ابنه. وهو أصل نسب العرب العدنانية ومنه جاء نسل النبي محمد ﷺ.",
    description_en:
      "Prophet Abraham (Ibrahim) is the Friend of Allah and one of the greatest prophets. He called his people to monotheism, opposed idolatry, and was tested by Allah with the command to sacrifice his son Ismail. He built the Kaaba with Ismail and is considered the ancestor of the Adnanite Arabs and Prophet Muhammad.",
  },
  {
    id: 2,
    name_ar: "إسماعيل عليه السلام",
    name_en: "Ismail (Ishmael)",
    wives: ["رَبة بنت مضاض الجرهمي"],
    wives_info: [
      {
        name_ar: "رَبة بنت مضاض الجرهمي",
        name_en: "Rabah bint Mudad al-Jurhumi",
        description_ar:
          "زوجة إسماعيل عليه السلام من قبيلة جُرهم، عاشت معه في مكة وكانت من أوائل من سكنها معه بعد بناء الكعبة.",
        description_en:
          "Wife of Ismail (peace be upon him) from the Jurhum tribe. She lived with him in Makkah and was among the first to settle there with him after the Kaaba was built.",
      },
    ],
    description_ar:
      "إسماعيل عليه السلام هو ابن إبراهيم، نبي عاش في مكة وساهم في بناء الكعبة مع والده. يُعدّ أول من نطق العربية الفصحى، وكان معروفًا بالصدق والوفاء، ومن ذريته جاء عدنان وأجداد النبي ﷺ.",
    description_en:
      "Prophet Ismail, son of Ibrahim, lived in Makkah and helped build the Kaaba. He was known for his truthfulness and loyalty, and is considered the first to speak eloquent Arabic. From his lineage came Adnan and the ancestors of Prophet Muhammad.",
  },
  {
    id: 3,
    name_ar: "عدنان",
    name_en: "Adnan",
    wives: [],
    description_ar:
      "عدنان هو الجد الأعلى للعرب العدنانية، ويُعتبر من أشهر آباء العرب بعد إسماعيل عليه السلام. استقر نسله في الحجاز، ومن ذريته جاء معدّ ونزار وغيرهم من أجداد النبي ﷺ.",
    description_en:
      "Adnan is known as the great ancestor of the Adnanite Arabs and is a prominent forefather after Ismail. His descendants settled in the Hijaz region, and from his lineage came Ma'ad, Nizar, and others among the ancestors of Prophet Muhammad.",
  },
  {
    id: 4,
    name_ar: "معد",
    name_en: "Ma'ad",
    wives: [],
    description_ar:
      "معد بن عدنان هو ابن عدنان وأحد أجداد العرب العدنانية. عُرف بشجاعته وقوته، ويُروى أنه صمد في وجه الأعداء في زمنه. من ذريته نزار، وهو أحد تسلسل أجداد النبي ﷺ.",
    description_en:
      "Ma'ad, the son of Adnan, was known for his strength and bravery. He is one of the early ancestors of the Adnanite Arabs, and through him came Nizar, continuing the lineage that leads to Prophet Muhammad.",
  },
  {
    id: 5,
    name_ar: "نزار",
    name_en: "Nizar",
    wives: [],
    description_ar:
      "نزار بن معد هو من أجداد العرب العدنانية. تميز بالحكمة والقيادة بين العرب، وقُسّمت القبائل من ذريته إلى أربعة فروع، مما جعل له أثرًا كبيرًا في تاريخ النسب العربي.",
    description_en:
      "Nizar, son of Ma'ad, was known among the Arabs for his wisdom and leadership. The Arab tribes from his line were divided into four main branches, giving him a significant role in Arab lineage and history.",
  },
  {
    id: 6,
    name_ar: "مضر",
    name_en: "Mudar",
    wives: [],
    description_ar:
      "مضر بن نزار كان مشهورًا بالفروسية والشجاعة، وتُنسب إليه قبائل مُضرية عديدة في الجزيرة العربية. يُعد من أهم أجداد النبي محمد ﷺ وكانت ذريته ذات شأن كبير في قريش.",
    description_en:
      "Mudar, son of Nizar, was renowned for his chivalry and courage. Many Arab tribes (known as Mudari tribes) are traced back to him. He plays a major role in the lineage of Prophet Muhammad, and his descendants were significant in Quraysh.",
  },
  {
    id: 7,
    name_ar: "إلياس",
    name_en: "Ilyas",
    wives: [],
    description_ar:
      "إلياس بن مضر يُنسب إليه بنو إلياس، وهو من أجداد النبي ﷺ ومن أوائل من عُرف عنهم الحكمة والهيبة بين العرب. ينحدر من ذريته مدركة وخزيمة وغيرهما.",
    description_en:
      "Ilyas, son of Mudar, is considered the progenitor of the Banu Ilyas. He was known for wisdom and honor among the Arabs. From his lineage came Mudrika, Khuzaimah and other key ancestors of Prophet Muhammad.",
  },
  {
    id: 8,
    name_ar: "مدركة",
    name_en: "Mudrika",
    wives: [],
    description_ar:
      "مدركة بن إلياس هو الجد الذي تنحدر منه قبائل قريش الأولى، وهو والد خزيمة. اشتهر بالإصلاح بين الناس وسُمي مدركة لأنه أدرك شرف آبائه وسار على منهجهم.",
    description_en:
      "Mudrika, son of Ilyas, is the forefather from whom the early Quraysh tribes descend. He was known for reconciling disputes among people and was called 'Mudrika' because he upheld the nobility of his forefathers.",
  },
  {
    id: 9,
    name_ar: "خزيمة",
    name_en: "Khuzaimah",
    wives: [],
    description_ar:
      "خزيمة بن مدركة من سلالة مضر، وهو من الأجداد الذين حافظوا على نسب العرب العدنانية. وُلِد له كنانة الذي يُعد من أجداد قريش مباشرة.",
    description_en:
      "Khuzaimah, son of Mudrika, was part of the Mudar lineage and preserved the Adnanite lineage. His son Kinanah became one of the direct ancestors of the Quraysh.",
  },
  {
    id: 10,
    name_ar: "كنانة",
    name_en: "Kinanah",
    wives: [],
    description_ar:
      "كنانة بن خزيمة هو الجد الذي تنتسب إليه قبائل بني كنانة ومنهم قريش. عُرف بالحكمة والاحترام بين العرب، ومن ذريته النضر بن كنانة.",
    description_en:
      "Kinanah, son of Khuzaimah, is the ancestor of the Banu Kinanah tribes, from which Quraysh is descended. He was respected for his wisdom. His son was An-Nadr, one of the key ancestors of the Prophet's lineage.",
  },
  {
    id: 11,
    name_ar: "النضر",
    name_en: "An-Nadr",
    wives: [],
    description_ar:
      "النضر بن كنانة يُعد الجد الذي تنتسب إليه قريش مباشرة، حتى أن قريش تُعرف أيضاً ببني النضر. من ذريته مالك، الذي تُواصل منه سلسلة نسب النبي ﷺ.",
    description_en:
      "An-Nadr, son of Kinanah, is considered the ancestor to whom the Quraysh tribe directly traces its lineage. The Quraysh are sometimes called Banu An-Nadr. His descendant was Malik, from whom the Prophet's lineage continues.",
  },
  {
    id: 12,
    name_ar: "مالك",
    name_en: "Malik",
    wives: [],
    description_ar:
      "مالك بن النضر هو أحد الأجداد المباشرين لقريش، وكان من رجالها المعروفين بالهيبة والاحترام. من ذريته جاء فهر بن مالك الذي يُعد مؤسس اسم قريش.",
    description_en:
      "Malik, son of An-Nadr, was one of the honorable ancestors of the Quraysh. He was known for his dignity and respect among his people. From his lineage came Fihr ibn Malik, who is regarded as the founder of the Quraysh identity.",
  },
  // *** التكملة بعد مالك ***

  {
    id: 13,
    name_ar: "فهر",
    name_en: "Fihr",
    wives: [],
    description_ar:
      "فهر بن مالك هو الذي تُنسب إليه قبيلة قريش، فهو الجد الذي يحمل اسم “قريش” ومنه جاءت القبيلة المعروفة. كان قائدًا حكيمًا ومحترمًا في مكة، ومن نسله جاءت قريش كافة.",
    description_en:
      "Fihr ibn Malik is considered the ancestor to whom the Quraysh tribe is attributed. He was a wise and respected leader in Makkah, and from his lineage came all the Quraysh tribes.",
  },
  {
    id: 14,
    name_ar: "غالب",
    name_en: "Ghalib",
    wives: [],
    description_ar:
      "غالب بن فهر هو من نسل قريش وواصل المكانة الكريمة لأجداده في مكة. كانت عائلته ذات شرف كبير ومن ذريته جاء لؤي بن غالب.",
    description_en:
      "Ghalib, son of Fihr, inherited the noble status of Quraysh in Makkah. His family held great honor, and from his lineage came Lu'ayy ibn Ghalib.",
  },
  {
    id: 15,
    name_ar: "لؤي",
    name_en: "Lu'ayy",
    wives: [],
    description_ar:
      "لؤي بن غالب يعد من وجهاء قريش ومن كبار ساداتها في عصره. عُرف بالحكمة والقرار بين القبائل، ومن ذريته كعب بن لؤي.",
    description_en:
      "Lu'ayy ibn Ghalib was one of the noble leaders of Quraysh. He was known for wisdom and good judgment among the tribes, and from his descendants was Ka'b ibn Lu'ayy.",
  },
  {
    id: 16,
    name_ar: "كعب",
    name_en: "Ka'b",
    wives: [],
    description_ar:
      "كعب بن لؤي من أعلام قريش ومن سادتها، وقد اجتمع نسب قبائل قريش على ذريته. وكان يقدّر شعائر البيت الحرام ويعظم مكة.",
    description_en:
      "Ka'b ibn Lu'ayy was a prominent figure among Quraysh, and many Quraysh clans trace their lineage through him. He respected the Sacred House and honored Makkah greatly.",
  },
  {
    id: 17,
    name_ar: "مرة",
    name_en: "Murrah",
    wives: [],
    description_ar:
      "مُرّة بن كعب من أجداد النبي ﷺ ومن وجهاء قريش، وكان معروفًا بالحكمة والبأس. من ذريته جاء كلاب بن مرة وسلسلة النسب الكريمة.",
    description_en:
      "Murrah ibn Ka'b was a forefather of the Prophet and a respected leader in Quraysh. Known for wisdom and strength, his descendants included Kilab ibn Murrah and the noble lineage that followed.",
  },
  {
    id: 18,
    name_ar: "كلاب",
    name_en: "Kilab",
    wives: [],
    description_ar:
      "كلاب بن مرة كان سيدًا في قومه ومن كبار قريش. أنجب قُصيّ بن كلاب الذي وحّد قبائل قريش واستلم سدانة الكعبة.",
    description_en:
      "Kilab ibn Murrah was an honorable chief of Quraysh. He was the father of Qusai ibn Kilab, who later united the Quraysh and gained control of the Kaaba’s guardianship.",
  },
  {
    id: 19,
    name_ar: "قصي",
    name_en: "Qusai",
    wives: [],
    description_ar:
      "قُصي بن كلاب هو الذي جمع شمل قبيلة قريش في مكة وامتلك سدانة الكعبة ودار الندوة، لذلك يُعتبر مؤسس سيادة قريش في الحرم المكي.",
    description_en:
      "Qusai ibn Kilab united the Quraysh tribes in Makkah and took over guardianship of the Kaaba and the Dar al-Nadwa (council house). He is considered the founder of Quraysh’s authority in the holy sanctuary.",
  },
  {
    id: 20,
    name_ar: "عبد مناف",
    name_en: "Abd Manaf",
    wives: [],
    description_ar:
      "عبد مناف بن قصي كان من أشرف رجال قريش وأكثرهم مكانة، وقد ورِث أبناؤه السيادة في مكة. ومن ذريته جاء هاشم بن عبد مناف.",
    description_en:
      "Abd Manaf ibn Qusai was one of the most honored men of Quraysh. His sons inherited leadership in Makkah, and from his lineage came Hashim ibn Abd Manaf.",
  },
  {
    id: 21,
    name_ar: "هاشم",
    name_en: "Hashim",
    wives: [],
    description_ar:
      "هاشم بن عبد مناف هو الذي سنّ رحلتي الشتاء والصيف لقريش، وكان صاحب كرم وسؤدد. اسمه الأصلي عمرو وهُشِم الثريد للحجيج فسُمِّي هاشم.",
    description_en:
      "Hashim ibn Abd Manaf organized the winter and summer trade caravans for Quraysh and was known for his generosity. His original name was Amr, and he was called Hashim because he would break bread into broth for the pilgrims.",
  },
  {
    id: 22,
    name_ar: "عبد المطلب",
    name_en: "Abdul Muttalib",
    wives: [],
    description_ar:
      "عبد المطلب بن هاشم هو جد النبي محمد ﷺ، وكان سيد قريش والمطّلع على أمر الكعبة. اشتهر بحفر بئر زمزم وإعادة مائها، وكان ذا مهابة ووقار عظيم.",
    description_en:
      "Abdul Muttalib ibn Hashim was the grandfather of Prophet Muhammad and the chief of Quraysh. He was known for re-discovering the Zamzam well and restoring its water. He was highly respected and revered in Makkah.",
  },
  {
    id: 23,
    name_ar: "عبد الله",
    name_en: "Abdullah",
    wives: ["آمنة بنت وهب"],
    wives_info: [
      {
        name_ar: "آمنة بنت وهب",
        name_en: "Aminah bint Wahb",
        description_ar:
          "زوجة عبد الله وأم النبي محمد ﷺ، عُرفت بالطهر والنسب الكريم، توفي زوجها وهي حامل بالنبي، وتوفيت بعد ولادته بسنوات قليلة.",
        description_en:
          "Wife of Abdullah and mother of Prophet Muhammad ﷺ. Known for her purity and noble lineage. Her husband died while she was pregnant, and she passed away a few years after the Prophet’s birth.",
      },
    ],
    description_ar:
      "عبد الله بن عبد المطلب هو والد النبي محمد ﷺ. كان معروفًا بحسن الخُلق والجمال، وتُوفي شابًا في طريق عودته من الشام قبل ولادة النبي، ودُفن في المدينة.",
    description_en:
      "Abdullah ibn Abdul Muttalib was the father of Prophet Muhammad. He was known for his good character and beauty. He died at a young age on his return from a trade trip to Sham, before the Prophet’s birth, and was buried in Yathrib (Madinah).",
  },
  {
    id: 24,
    name_ar: "محمد ﷺ",
    name_en: "Prophet Muhammad (peace be upon him)",
    wives: [
      "خديجة بنت خويلد",
      "سودة بنت زمعة",
      "عائشة بنت أبي بكر",
      "حفصة بنت عمر",
      "زينب بنت جحش",
      "أم سلمة",
      "جويرية بنت الحارث",
      "ميمونة بنت الحارث",
      "صفية بنت حيي",
    ],
    wives_info: [
      {
        name_ar: "خديجة بنت خويلد",
        name_en: "Khadijah bint Khuwaylid",
        description_ar:
          "أول زوجات النبي ﷺ وأم أولاده، كانت سيدة قريش في الجاهلية والإسلام، وقفت معه في بداية الدعوة وساندته حتى وفاتها.",
        description_en:
          "The first wife of the Prophet ﷺ and mother of his children. She was a noblewoman of Quraysh, supported him at the start of his mission, and remained by his side until her death.",
      },
      {
        name_ar: "سودة بنت زمعة",
        name_en: "Sawda bint Zam'a",
        description_ar:
          "ثانية زوجات النبي ﷺ بعد خديجة، عُرفت بالتقوى والفكاهة، تزوجها النبي بعد وفاة خديجة وكانت من أوائل المهاجرات.",
        description_en:
          "The Prophet’s ﷺ second wife after Khadijah. Known for her piety and sense of humor, she married the Prophet after Khadijah’s death and was among the early emigrants.",
      },
      {
        name_ar: "عائشة بنت أبي بكر",
        name_en: "Aisha bint Abi Bakr",
        description_ar:
          "ابنة أبي بكر الصديق رضي الله عنه، من أكثر زوجات النبي ﷺ علمًا وفقهًا، روت عنه أحاديث كثيرة، وتوفي النبي ﷺ في بيتها.",
        description_en:
          "Daughter of Abu Bakr, she was among the most knowledgeable of the Prophet’s wives and narrated many hadiths. The Prophet ﷺ passed away in her house.",
      },
      {
        name_ar: "حفصة بنت عمر",
        name_en: "Hafsa bint Umar",
        description_ar:
          "ابنة عمر بن الخطاب رضي الله عنه، حفظت المصحف بعد وفاة النبي ﷺ، وكانت من النساء العابدات الصابرات.",
        description_en:
          "Daughter of Umar ibn al-Khattab, she was entrusted with the written Qur’an after the Prophet’s death and was known for her devotion and patience.",
      },
      {
        name_ar: "زينب بنت جحش",
        name_en: "Zaynab bint Jahsh",
        description_ar:
          "ابنة عمة النبي ﷺ، تزوجها بأمر من الله، عُرفت بكثرة الصدقة والعبادة، وكانت من أوائل زوجاته لحوقًا به بعد وفاته.",
        description_en:
          "A cousin of the Prophet ﷺ, married to him by Allah’s command. She was known for her charity and worship, and was among the first of his wives to pass away after him.",
      },
      {
        name_ar: "أم سلمة",
        name_en: "Umm Salama (Hind bint Abi Umayya)",
        description_ar:
          "من أوائل المهاجرات، عُرفت بالحكمة والرأي السديد، شهدت أحداثًا مهمة في السيرة، وكانت من أكثر زوجاته رواية للحديث.",
        description_en:
          "Among the earliest emigrants, known for her wisdom and sound judgment. She witnessed important events in the Prophet’s life and narrated many hadiths.",
      },
      {
        name_ar: "جويرية بنت الحارث",
        name_en: "Juwayriya bint al-Harith",
        description_ar:
          "أسرت في غزوة بني المصطلق ثم تزوجها النبي ﷺ، فأسلم بسببها كثير من قومها، وكانت كثيرة الذكر لله.",
        description_en:
          "Captured in the Battle of Banu Mustaliq, she married the Prophet ﷺ, leading many of her tribe to embrace Islam. She was known for her devotion and remembrance of Allah.",
      },
      {
        name_ar: "ميمونة بنت الحارث",
        name_en: "Maymunah bint al-Harith",
        description_ar:
          "آخر من تزوج النبي ﷺ من النساء، عُرفت بالتقوى والكرم، وتوفيت في مكة ودفنت في المكان الذي تزوجها فيه النبي.",
        description_en:
          "The last woman the Prophet ﷺ married. She was known for her piety and generosity, and died in Makkah where she had married the Prophet.",
      },
      {
        name_ar: "صفية بنت حيي",
        name_en: "Safiyyah bint Huyayy",
        description_ar:
          "كانت من بني النضير اليهودية، أسلمت وتزوجها النبي ﷺ بعد غزوة خيبر، عُرفت بالحلم والصبر.",
        description_en:
          "Originally from the Jewish tribe of Banu Nadir, she embraced Islam and married the Prophet ﷺ after the Battle of Khaybar. She was known for her patience and forbearance.",
      },
    ],

    children: [
      {
        id: 101,
        name_ar: "القاسم",
        name_en: "Al-Qasim",
        gender: "male",
        mother: "خديجة بنت خويلد",
        description_ar:
          "القاسم هو أول أبناء النبي محمد ﷺ، سُمّي به كُنية النبي (أبو القاسم)، وتوفي صغيراً في مكة.",
        description_en:
          "Al-Qasim was the first son of the Prophet Muhammad ﷺ and the reason for the Prophet’s kunya ‘Abu al-Qasim’. He died young in Makkah.",
      },
      {
        id: 102,
        name_ar: "زينب",
        name_en: "Zaynab",
        gender: "female",
        mother: "خديجة بنت خويلد",
        description_ar:
          "زينب هي أكبر بنات النبي ﷺ، تزوجت من أبي العاص بن الربيع وأسلم زوجها لاحقاً، توفيت في المدينة.",
        description_en:
          "Zaynab was the eldest daughter of the Prophet ﷺ. She married Abu al-As ibn al-Rabi' who later embraced Islam. She passed away in Madinah.",
      },
      {
        id: 103,
        name_ar: "رقية",
        name_en: "Ruqayyah",
        gender: "female",
        mother: "خديجة بنت خويلد",
        description_ar:
          "رقية بنت محمد ﷺ تزوّجت عثمان بن عفان رضي الله عنه وكانت من المهاجرات إلى الحبشة وتوفيت في المدينة.",
        description_en:
          "Ruqayyah, daughter of the Prophet ﷺ, married Uthman ibn Affan, and migrated to Abyssinia. She died in Madinah.",
      },
      {
        id: 104,
        name_ar: "أم كلثوم",
        name_en: "Umm Kulthum",
        gender: "female",
        mother: "خديجة بنت خويلد",
        description_ar:
          "أم كلثوم بنت محمد ﷺ تزوّجت عثمان بن عفان بعد وفاة أختها رقية، وتوفيت أيضًا في المدينة دون ذرية.",
        description_en:
          "Umm Kulthum, daughter of the Prophet ﷺ, married Uthman ibn Affan after Ruqayyah’s death. She also passed away in Madinah without children.",
      },
      {
        id: 105,
        name_ar: "فاطمة",
        name_en: "Fatimah",
        gender: "female",
        mother: "خديجة بنت خويلد",
        description_ar:
          "فاطمة الزهراء رضي الله عنها، أصغر بنات النبي ﷺ وأحبّهن إليه. تزوّجها علي بن أبي طالب وأنجبت الحسن والحسين، وتوفيت بعد النبي بستة أشهر.",
        description_en:
          "Fatimah az-Zahra was the youngest and most beloved daughter. She married Ali ibn Abi Talib and gave birth to Hasan and Husayn. She died six months after the Prophet ﷺ.",
      },
      {
        id: 106,
        name_ar: "عبد الله",
        name_en: "Abdullah (At-Tayyib or At-Tahir)",
        gender: "male",
        mother: "خديجة بنت خويلد",
        description_ar:
          "عبد الله كان أصغر أبناء النبي ﷺ من خديجة، ويُلقّب بالطيب أو الطاهر، وتوفي صغيرًا.",
        description_en:
          "Abdullah, known as At-Tayyib or At-Tahir, was the youngest son from Khadijah and died in childhood.",
      },
      {
        id: 107,
        name_ar: "إبراهيم",
        name_en: "Ibrahim",
        gender: "male",
        mother: "مارية القبطية",
        description_ar:
          "إبراهيم بن النبي ﷺ من مارية القبطية، ولد في المدينة وتوفي وهو رضيع، وبكاه النبي بكاءً شديداً.",
        description_en:
          "Ibrahim was born to the Prophet ﷺ from Mariya the Copt in Madinah. He died in infancy, and the Prophet grieved deeply for him.",
      },
    ],
    description_ar:
      "محمد بن عبد الله ﷺ هو خاتم الأنبياء والمرسلين، بعثه الله رحمة للعالمين فأنزل عليه القرآن في مكة. عاش يتيمًا ثم رباه جده ثم عمه، وبدأ بالدعوة إلى التوحيد في سن الأربعين. هاجر إلى المدينة وأسس الدولة الإسلامية ونشر رسالة الإسلام. توفي في المدينة بعد أن بلغ الرسالة وأدى الأمانة.",
    description_en:
      "Muhammad, son of Abdullah, peace be upon him, is the final Prophet and Messenger. Allah sent him as a mercy to all creation and revealed the Qur’an to him in Makkah. Orphaned young, he was raised by his grandfather and then by his uncle. At the age of 40, he was commanded to call people to monotheism. He migrated to Madinah, established the Islamic state, and delivered the divine message before he passed away there.",
  },
];

export default familyLine;
