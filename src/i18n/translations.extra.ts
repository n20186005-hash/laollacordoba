type T = { zh: string; en: string; it: string; es: string };

// ── Encyclopedia ──
export const encyclopedia = {
  sectionNum: { zh: `深度百科`, en: `Encyclopedia`, it: `Enciclopedia`, es: `Enciclopedia` } as T,
  heading: { zh: `瀑布、岩与<em class="text-[color:var(--color-emerald)]">一座山谷的来由</em>`, en: `Water, rock &amp;<br/><em class="text-[color:var(--color-emerald)]"> a valley's making</em>`, it: `Acqua, roccia e<br/><em class="text-[color:var(--color-emerald)]"> l'origine di una valle</em>`, es: `Agua, roca y<br/><em class="text-[color:var(--color-emerald)]"> el origen de un valle</em>` } as T,
  subtitle: {
    zh: `从瀑布千万年打磨出的壶穴，到拉昆布雷西塔的步行传统，再到科梅青人（Comechingón）对山谷的守望——这口碧潭背后，藏着卡拉穆奇塔几段关键的自然与人文记忆。`,
    en: `From the pothole polished by a waterfall over millennia, to La Cumbrecita's pedestrian tradition, to the Comechingón people who watched over the valley — behind this green pool lie key natural and human memories of Calamuchita.`,
    it: `Dalla marmitta levigata da una cascata per millenni, alla tradizione pedonale di La Cumbrecita, ai Comechingón che vegliavano sulla valle — dietro questa pozza verde ci sono ricordi naturali e umani chiave di Calamuchita.`,
    es: `Desde la marmita pulida por una cascada durante milenios, hasta la tradición peatonal de La Cumbrecita, y los Comechingón que velaron por el valle — detrás de esta poza verde están los recuerdos naturales y humanos clave de Calamuchita.`,
  } as T,
  items: [
    {
      icon: '💧',
      title: { zh: `瀑布如何雕出 La Olla`, en: `How the waterfall carved La Olla`, it: `Come la cascata ha scolpito La Olla`, es: `Cómo la cascada talló La Olla` } as T,
      body: {
        zh: `<p>La Olla 并非人工水坝，而是典型的“壶穴”（marmita de gigante）。当溪流从高处跌落，水中裹挟的沙石在岩面上高速旋转、研磨，日积月累便在坚硬的花岗岩上磨出一口近乎正圆、深约 6 米的凹坑，再被流水注满成潭。</p><p><span class="science-only">严格说，壶穴是流水涡旋（whirlpool）携带砾石对基岩进行“磨蚀”（abrasion）的结果，因此 La Olla 的坑壁格外圆滑、深邃，呈现出天然的翡翠色。</span></p>`,
        en: `<p>La Olla is not a dam but a classic "pothole" (marmita). As the stream drops from above, the sand and pebbles it carries spin and grind against the rock at high speed, gradually hollowing a near-circular pit about 6 m deep in the hard granite, which the water then fills.</p><p><span class="science-only">Strictly, a pothole is the result of a flowing whirlpool carrying gravel that "abrades" the bedrock, which is why La Olla's walls are so smooth and deep and take on a natural emerald hue.</span></p>`,
        it: `<p>La Olla non è una diga ma una classica "marmitta". Mentre il ruscello cade dall'alto, la sabbia e i ciottoli che trasporta ruotano e macinano la roccia ad alta velocità, scavando col tempo una fossa quasi circolare di circa 6 m nel granito duro, che l'acqua poi riempie.</p><p><span class="science-only">In senso stretto, la marmitta è il risultato di un vortice d'acqua che trasporta ghiaia e "abrade" la roccia madre: ecco perché le pareti di La Olla sono così lisce e profonde e prendono una tonalità verde smeraldo naturale.</span></p>`,
        es: `<p>La Olla no es una represa sino una clásica "marmita". Mientras el arroyo cae desde arriba, la arena y las piedras que arrastra giran y pulen la roca a gran velocidad, ahuecando con el tiempo una fosa casi circular de unos 6 m en el granito duro, que el agua luego llena.</p><p><span class="science-only">Estrictamente, la marmita es el resultado de un remolino de agua que arrastra gravilla y "abrade" la roca madre, por eso las paredes de La Olla son tan lisas y profundas y toman un tono verde esmeralda natural.</span></p>`,
      } as T,
      img: '/gallery/la-olla-4.jpg',
    },
    {
      icon: '⛰️',
      title: { zh: `卡拉穆奇塔与科尔多瓦山脉`, en: `Calamuchita & the Sierras`, it: `Calamuchita e le Sierras`, es: `Calamuchita y las Sierras` } as T,
      body: {
        zh: `<p>拉昆布雷西塔坐落在科尔多瓦山脉（Sierras de Córdoba）南段的卡拉穆奇塔山谷。这里的山体主要由古老的变质岩与花岗岩构成，经过亿万年的风化与流水切割，形成了连绵起伏、溪谷密布的丘陵地貌。</p><p>受亚热带与温带交叠影响，山谷四季分明：夏季多午后阵雨，冬季凉爽；充沛的降水汇成众多溪流，正是 La Olla 这类天然水潭得以存在的基础。<span class="science-only">科尔多瓦山脉因其独特的“Sierras Pampeanas”构造背景，是研究冈瓦纳大陆裂解的重要窗口。</span></p>`,
        en: `<p>La Cumbrecita lies in the Calamuchita Valley, in the southern Sierras de Córdoba. The hills are mostly ancient metamorphic rock and granite, shaped over eons of weathering and stream incision into rolling, stream-cut terrain.</p><p>Between subtropical and temperate influences, the valley has distinct seasons: summer afternoon showers, cool winters. Abundant rain feeds many streams — the very basis for natural pools like La Olla. <span class="science-only">The Sierras de Córdoba, part of the "Sierras Pampeanas", are a key window into the breakup of Gondwana.</span></p>`,
        it: `<p>La Cumbrecita si trova nella valle di Calamuchita, nella parte meridionale delle Sierras de Córdoba. Le colline sono per lo più rocce metamorfiche antiche e granito, modellate nel corso dei millenni da meteorizzazione e incisione fluviale in un territorio ondulato solcato da ruscelli.</p><p>Tra influenze subtropicali e temperate, la valle ha stagioni marcate: rovesci pomeridiani d'estate, inverni freschi. Le abbondanti piogge alimentano molti corsi d'acqua — la base stessa delle pozze naturali come La Olla. <span class="science-only">Le Sierras de Córdoba, parte delle "Sierras Pampeanas", sono una finestra chiave sulla frattura del Gondwana.</span></p>`,
        es: `<p>La Cumbrecita está en el Valle de Calamuchita, en el sur de las Sierras de Córdoba. Los cerros son sobre todo rocas metamórficas antiguas y granito, modelados a lo largo de milenios por meteorización y disección fluvial en un terreno ondulado surcado por arroyos.</p><p>Entre influencias subtropicales y templadas, el valle tiene estaciones marcadas: chaparrones por la tarde en verano, inviernos frescos. La abundante lluvia alimenta muchos cursos de agua — la base misma de pozas naturales como La Olla. <span class="science-only">Las Sierras de Córdoba, parte de las "Sierras Pampeanas", son una ventana clave sobre la ruptura de Gondwana.</span></p>`,
      } as T,
      img: '/gallery/la-olla-5.jpg',
    },
    {
      icon: '🚶',
      title: { zh: `拉昆布雷西塔：一座步行小镇`, en: `La Cumbrecita: a pedestrian town`, it: `La Cumbrecita: un paese pedonale`, es: `La Cumbrecita: un pueblo peatonal` } as T,
      body: {
        zh: `<p>拉昆布雷西塔（“小山顶”之意）是一座没有汽车的步行小镇。20 世纪中叶，来自中欧的德裔与瑞士移民在此定居，依山傍溪建起阿尔卑斯风格的建筑，并以花岗岩铺就主街。</p><p>为保护宁静的山地氛围，镇内至今禁止机动车通行，访客须将车辆停在镇外，步行进入。<span class="science-only">这种“步行小镇”模式在阿根廷并不多见，使 La Cumbrecita 成为卡拉穆奇塔山谷最具辨识度的旅游名片之一。</span></p>`,
        en: `<p>La Cumbrecita ("the little summit") is a car-free pedestrian town. In the mid-20th century, German- and Swiss-origin settlers from Central Europe built Alpine-style buildings by the hills and streams, paving the main street with granite.</p><p>To preserve the tranquil mountain mood, cars are still banned in town; visitors park outside and walk in. <span class="science-only">This "pedestrian town" model is rare in Argentina, making La Cumbrecita one of Calamuchita's most recognisable travel signatures.</span></p>`,
        it: `<p>La Cumbrecita ("la piccola cima") è un paese pedonale senza auto. A metà del '900, coloni di origine tedesca e svizzera dell'Europa centrale costruirono edifici in stile alpino tra colli e ruscelli, lastricando la via principale con granito.</p><p>Per preservare l'atmosfera montana tranquilla, le auto sono ancora vietate nel paese: i visitatori parcheggiano fuori e entrano a piedi. <span class="science-only">Questo modello di "paese pedonale" è raro in Argentina, e rende La Cumbrecita una delle immagini turistiche più riconoscibili di Calamuchita.</span></p>`,
        es: `<p>La Cumbrecita ("la pequeña cima") es un pueblo peatonal sin autos. A mediados del siglo XX, pobladores de origen alemán y suizo de Europa central se asentaron aquí, construyendo edificios de estilo alpino entre cerros y arroyos, y empedrando la calle principal con granito.</p><p>Para preservar el ambiente montano tranquilo, los autos siguen prohibidos en el pueblo: los visitantes estacionan afuera y entran a pie. <span class="science-only">Este modelo de "pueblo peatonal" es poco común en Argentina, lo que hace de La Cumbrecita una de las cartas turísticas más reconocibles de Calamuchita.</span></p>`,
      } as T,
      img: '/gallery/la-olla-6.jpg',
    },
    {
      icon: '🪶',
      title: { zh: `科梅青人（Comechingón）与山谷`, en: `The Comechingón & the valley`, it: `I Comechingón e la valle`, es: `Los Comechingón y el valle` } as T,
      body: {
        zh: `<p>在欧洲移民到来之前，科梅青人（Comechingón）世代栖息于科尔多瓦山脉的溪谷之间，以狩猎、采集与简易农耕为生，并在岩壁留下大量抽象的几何岩画。</p><p>他们视山川溪水为充满灵性的存在，取用有度。<span class="science-only">今天，山谷周边仍可见科梅青人的考古遗址与岩画点，是理解这片土地最古老记忆的钥匙。</span></p>`,
        en: `<p>Long before European settlers, the Comechingón lived for generations among the stream valleys of the Córdoba Sierras, hunting, gathering and practising simple farming, and leaving many abstract geometric rock paintings on the cliffs.</p><p>They saw mountains, streams and water as living, spiritual presences to be used with restraint. <span class="science-only">Today, archaeological sites and rock-art spots of the Comechingón still dot the valley — a key to the oldest memory of this land.</span></p>`,
        it: `<p>Molto prima dei coloni europei, i Comechingón vissero per generazioni tra le valli dei ruscelli delle Sierras de Córdoba, cacciando, raccogliendo e praticando una semplice agricoltura, e lasciando molte pitture rupestri geometriche e astratte sulle rocce.</p><p>Consideravano montagne, ruscelli e acque presenze vive e spirituali da usare con parsimonia. <span class="science-only">Oggi, siti archeologici e punti di arte rupestre dei Comechingón costellano ancora la valle: una chiave per la memoria più antica di questa terra.</span></p>`,
        es: `<p>Mucho antes de los colonos europeos, los Comechingón vivieron generaciones entre los valles de arroyos de las Sierras de Córdoba, cazando, recolectando y practicando una agricultura sencilla, y dejando muchas pinturas rupestres geométricas y abstractas en las rocas.</p><p>Veían montañas, arroyos y aguas como presencias vivas y espirituales que debían usarse con mesura. <span class="science-only">Hoy, sitios arqueológicos y puntos de arte rupestre de los Comechingón siguen salpicando el valle: una clave para la memoria más antigua de esta tierra.</span></p>`,
      } as T,
      img: '/gallery/la-olla-7.jpg',
    },
    {
      icon: '💦',
      title: { zh: `亚坎托河：山谷的水源`, en: `Río Yacanto: the valley's water`, it: `Río Yacanto: l'acqua della valle`, es: `Río Yacanto: el agua del valle` } as T,
      body: {
        zh: `<p>滋养 La Olla 与整片卡拉穆奇塔的，是来自亚坎托河流域的溪流。雨水顺着科尔多瓦山脉的沟壑汇集，沿原生林与草甸蜿蜒而下，最终注入这口碧潭。</p><p>正因水源来自未受污染的山林，潭水常年清澈见底。<span class="science-only">保护上游水源林（bosque de relictos）不被砍伐与放牧，是维持 La Olla 水质与水量最根本的一环。</span></p>`,
        en: `<p>What feeds La Olla and the whole of Calamuchita is the stream network of the Río Yacanto basin. Rain gathers in the gullies of the Sierras, meanders down through native forest and meadows, and finally fills this green pool.</p><p>Because the water comes from unpolluted hills, the pool stays clear year-round. <span class="science-only">Protecting the upstream source forest (bosque de relictos) from logging and grazing is the most fundamental step in keeping La Olla's water clean and plentiful.</span></p>`,
        it: `<p>Ciò che alimenta La Olla e tutta Calamuchita è la rete di ruscelli del bacino del Río Yacanto. La pioggia si raccoglie nei solchi delle Sierras, serpeggia tra bosco nativo e prati e infine riempie questa pozza verde.</p><p>Poiché l'acqua proviene da colline non inquinate, la pozza resta limpida tutto l'anno. <span class="science-only">Proteggere il bosco sorgente a monte (bosque de relictos) da disboscamento e pascolo è il passo più fondamentale per mantenere pulita e abbondante l'acqua di La Olla.</span></p>`,
        es: `<p>Lo que alimenta La Olla y todo Calamuchita es la red de arroyos de la cuenca del Río Yacanto. La lluvia se reúne en las quebradas de las Sierras, serpentea entre bosque nativo y praderas y finalmente llena esta poza verde.</p><p>Como el agua proviene de cerros no contaminados, la poza se mantiene clara todo el año. <span class="science-only">Proteger el bosque de cabecera aguas arriba (bosque de relictos) de la tala y el pastoreo es el paso más fundamental para mantener limpia y abundante el agua de La Olla.</span></p>`,
      } as T,
      img: '/gallery/la-olla-8.jpg',
    },
    {
      icon: '🌿',
      title: { zh: `卡拉穆奇塔的原生植物`, en: `Native flora of Calamuchita`, it: `La flora autoctona di Calamuchita`, es: `La flora nativa de Calamuchita` } as T,
      body: {
        zh: `<p>La Olla 四周属于科尔多瓦山脉的“Sierras”植被带。河谷里常见高大的霍尔科莫雷（Horco Molle）与香气扑鼻的胡椒木（Molle）；山间草甸则点缀着卡洛亚标志性的纺锤树（Palo Borracho，俗称“酒瓶树”）与巨大的仙人掌（Cardón）。</p><p>这些植物对水土与海拔极其敏感，是判断当地微气候的“活指标”。<span class="science-only">由原生树种构成的“ relics 林”为众多鸟兽提供庇护，也是涵养 La Olla 水源的关键。</span></p>`,
        en: `<p>Around La Olla grows the "Sierras" vegetation band of the Córdoba Sierras. Valley floors are home to tall Horco Molle (Aphananthe) and fragrant Pepper Tree (Molle); the mountain meadows are dotted with Calamuchita's emblematic bottle tree (Palo Borracho) and giant Cardón cactus.</p><p>These plants are extremely sensitive to soil and altitude, making them living indicators of the local microclimate. <span class="science-only">The "relict" forest of native species shelters many birds and animals and is key to sustaining La Olla's water.</span></p>`,
        it: `<p>Attorno a La Olla cresce la fascia vegetale delle "Sierras" delle Sierras de Córdoba. I fondovalle ospitano l'alto Horco Molle (Aphananthe) e il profumato Pepper Tree (Molle); i prati di montagna sono punteggiati dal caratteristico albero bottiglia (Palo Borracho) e dal gigantesco cactus Cardón.</p><p>Queste piante sono estremamente sensibili a suolo e altitudine, diventando indicatori vivi del microclima locale. <span class="science-only">Il "bosco relitto" di specie native offre riparo a molti uccelli e animali ed è chiave per sostenere l'acqua di La Olla.</span></p>`,
        es: `<p>Alrededor de La Olla crece el cinturón de vegetación de "Sierras" de las Sierras de Córdoba. Los fondos de valle albergan el alto Horco Molle (Aphananthe) y el aromático Molle (pimiento); los prados de montaña están salpicados por el emblemático árbol botella (Palo Borracho) y el gigantesco cactus Cardón.</p><p>Estas plantas son extremadamente sensibles al suelo y la altura, convirtiéndose en indicadores vivos del microclima local. <span class="science-only">El "bosque relicto" de especies nativas brinda refugio a muchas aves y animales y es clave para sostener el agua de La Olla.</span></p>`,
      } as T,
      img: '/gallery/la-olla-9.jpg',
    },
  ],
};

// ── Ecology ──
export const ecology = {
  sectionNum: { zh: `生态名录`, en: `Ecology`, it: `Elenco ecologico`, es: `Ecología` } as T,
  heading: { zh: `山野间的<em class="text-[color:var(--color-emerald)]">生命脉动</em>`, en: `The pulse of life<br/><em class="text-[color:var(--color-emerald)]"> in the wild</em>`, it: `Il pulsare<br/><em class="text-[color:var(--color-emerald)]"> della vita selvatica</em>`, es: `El pulso de la vida<br/><em class="text-[color:var(--color-emerald)]"> en el monte</em>` } as T,
  intro: {
    zh: `拉昆布雷西塔虽是旅游小镇，却坐落在科尔多瓦山脉的原生林与溪流之间。从岩缝里探头的和尚鼠（Vizcacha），到林缘高歌的 Benteveo，再到山间标志性的纺锤树与仙人掌，这片风景是高海拔生命交织的网络。请放慢脚步，你与这些山民的相遇，往往只在一阵风之间。`,
    en: `Though a tourist town, La Cumbrecita sits between the native forest and streams of the Córdoba Sierras. From the vizcacha peeking from the rocks to the benteveo singing at the forest edge and the emblematic bottle tree and cactus, this landscape is a web of highland life. Slow down — your meeting with these mountain dwellers often lasts but a single gust of wind.`,
    it: `Pur essendo un paese turistico, La Cumbrecita sorge tra il bosco nativo e i ruscelli delle Sierras de Córdoba. Dalla vizcacha che spunta tra le rocce al benteveo che canta ai margini del bosco, fino all'albero bottiglia e al cactus, questo paesaggio è una rete di vita di alta quota. Vai piano: l'incontro con questi abitanti della montagna dura spesso solo una folata di vento.`,
    es: `Aunque es un pueblo turístico, La Cumbrecita se encuentra entre el bosque nativo y los arroyos de las Sierras de Córdoba. Desde la vizcacha que asoma entre las rocas hasta el benteveo que canta al borde del bosque, y el emblemático árbol botella y el cactus, este paisaje es una red de vida de altura. Vaya despacio: su encuentro con estos habitantes del monte a menudo dura solo una ráfaga de viento.`,
  } as T,
  iucnVU: { zh: `易危 VU`, en: `Vulnerable VU`, it: `Vulnerabile VU`, es: `Vulnerable VU` } as T,
  iucnNT: { zh: `近危 NT`, en: `Near Threatened NT`, it: `Quasi minacciato NT`, es: `Casi Amenazado NT` } as T,
  iucnLC: { zh: `无危 LC`, en: `Least Concern LC`, it: `Rischio minimo LC`, es: `Preocupación Menor LC` } as T,
  iucnEN: { zh: `极危 EN`, en: `Endangered EN`, it: `In pericolo EN`, es: `En Peligro EN` } as T,
  secUmbrella: { zh: `旗舰与伞护物种`, en: `Flagship & Umbrella Species`, it: `Specie bandiera e ombrello`, es: `Especies bandera y paraguas` } as T,
  secCommensal: { zh: `常见可见物种`, en: `Commensal & Observable Species`, it: `Specie commensali e osservabili`, es: `Especies observables` } as T,
  secFlora: { zh: `山地植物群`, en: `Montane Flora`, it: `Flora montana`, es: `Flora de montaña` } as T,
  species: [
    {
      name: { zh: `山地和尚鼠（Vizcacha）`, en: `Mountain Vizcacha`, it: `Vizcacha di montagna`, es: `Vizcacha de la sierra` } as T,
      latin: 'Lagidium viscacia',
      niche: { zh: `岩间居民`, en: `Rock dweller`, it: `Abitatore delle rocce`, es: `Morador de rocas` } as T,
      desc: {
        zh: `一种形似兔、尾似松鼠的安第斯啮齿动物，常栖于岩坡与峭壁，善于在石缝间跳跃躲避天敌。它们是科尔多瓦山脉岩生生态的“旗舰物种”。`,
        en: `A rabbit-like rodent with a squirrel-like tail, living on rocky slopes and cliffs where it hops between crevices to escape predators. A flagship species of the Sierras' rock ecology.`,
        it: `Un roditore simile a un coniglio con la coda da scoiattolo, che vive su pendii rocciosi e dirupi e salta tra le fessure per sfuggire ai predatori. Specie bandiera della ecologia rocciosa delle Sierras.`,
        es: `Un roedor parecido a un conejo con cola de ardilla, que vive en laderas rocosas y acantilados y salta entre las grietas para escapar de los depredadores. Especie bandera de la ecología rocosa de las Sierras.`,
      } as T,
      iucn: 'LC',
      icon: '🦫',
    },
    {
      name: { zh: `野豚鼠（Cuis）`, en: `Cui (Wild Guinea Pig)`, it: `Cui (Cavia selvatica)`, es: `Cui (Cuis común)` } as T,
      latin: 'Cavia aperea',
      niche: { zh: `草丛居民`, en: `Grassland dweller`, it: `Abitatore dell'erba`, es: `Morador de pastizales` } as T,
      desc: {
        zh: `豚鼠的野生近亲，体型小巧、行动敏捷，常见于溪边草甸与林缘。它们机警而好奇，但请切勿投喂——人类食物会损害其健康。`,
        en: `The wild relative of the guinea pig — small, nimble and common in streamside meadows and forest edges. Wary and curious, but never feed them; human food harms their health.`,
        it: `Il parente selvatico del porcellino d'India: piccolo, agile e comune nei prati lungo i ruscelli e ai margini del bosco. Cauto e curioso, ma non dategli cibo: il cibo umano danneggia la sua salute.`,
        es: `El pariente silvestre del cuy: pequeño, ágil y común en los prados junto a los arroyos y al borde del bosque. Recela y curiosea, pero nunca lo alimente: la comida humana daña su salud.`,
      } as T,
      iucn: 'LC',
      icon: '🐹',
    },
    {
      name: { zh: `南美大绿鹃（Benteveo）`, en: `Benteveo`, it: `Benteveo`, es: `Benteveo` } as T,
      latin: 'Pitangus sulphuratus',
      niche: { zh: `林缘歌手`, en: `Forest-edge singer`, it: `Cantore di bordo bosco`, es: `Cantante de borde` } as T,
      desc: {
        zh: `科尔多瓦山野最常见、最吵闹的鸣禽之一，头顶有一撮黄羽，叫声清亮。常在步道旁枝头伫立，是徒步者最熟悉的“向导鸟”。`,
        en: `One of the commonest, noisiest songbirds of the Córdoba hills, with a tuft of yellow on its head and a bright call. It often perches by the trail — the hiker's familiar "guide bird".`,
        it: `Uno degli uccelli canori più comuni e rumorosi delle colline di Córdoba, con un ciuffo giallo sulla testa e un canto limpido. Spesso posato sul sentiero: l'uccello "guida" familiare a chi cammina.`,
        es: `Uno de los pájaros cantores más comunes y ruidosos de los cerros de Córdoba, con un copete amarillo en la cabeza y un canto claro. Suele posarse junto al sendero: el "pájaro guía" familiar de quien camina.`,
      } as T,
      iucn: 'LC',
      icon: '🐦',
    },
    {
      name: { zh: `霍尔科莫雷（Horco Molle）`, en: `Horco Molle`, it: `Horco Molle`, es: `Horco Molle` } as T,
      latin: 'Aphananthe tenuiflora',
      niche: { zh: `河谷乔木`, en: `Valley tree`, it: `Albero di valle`, es: `Árbol de valle` } as T,
      desc: {
        zh: `卡拉穆奇塔河谷的本土乔木，树形舒展、冠大荫浓，是众多鸟兽的栖息之所。耐湿、喜溪边，是判断当地水脉的“活坐标”。`,
        en: `A native tree of the Calamuchita valleys — spreading, broad-canopied and shady, home to many birds and animals. Moisture-loving and fond of stream banks, it is a living marker of the local water courses.`,
        it: `Albero nativo delle valli di Calamuchita: chioma ampia e ombrosa, casa di molti uccelli e animali. Ama l'umidità e le rive dei ruscelli, ed è un "segnale vivo" dei corsi d'acqua locali.`,
        es: `Árbol nativo de los valles de Calamuchita: de copa amplia y sombría, hogar de muchos pájaros y animales. Amo del agua y las orillas de arroyos, es una "señal viva" de los cursos de agua locales.`,
      } as T,
      iucn: 'LC',
      icon: '🌳',
    },
    {
      name: { zh: `巨柱仙人掌（Cardón）`, en: `Cardón cactus`, it: `Cactus Cardón`, es: `Cactus Cardón` } as T,
      latin: 'Echinopsis candicans',
      niche: { zh: `山地仙人掌`, en: `Mountain cactus`, it: `Cactus di montagna`, es: `Cactus de montaña` } as T,
      desc: {
        zh: `科尔多瓦山脉标志性的高大仙人掌，夜间绽放白色大花。极耐旱、喜向阳坡地，是山野里最上镜的植物之一。`,
        en: `The emblematic tall cactus of the Córdoba Sierras, opening large white flowers at night. Extremely drought-tolerant and fond of sunny slopes — among the most photogenic plants of the hills.`,
        it: `Il cactus alto ed emblematico delle Sierras de Córdoba, che apre grandi fiori bianchi di notte. Estremamente resistente alla siccità e amante dei pendii assolati: tra le piante più fotogeniche delle colline.`,
        es: `El cactus alto y emblemático de las Sierras de Córdoba, que abre grandes flores blancas de noche. Muy resistente a la sequía y amante de las laderas soleadas: entre las plantas más fotogénicas de los cerros.`,
      } as T,
      iucn: 'LC',
      icon: '🌵',
    },
    {
      name: { zh: `纺锤树（Palo Borracho）`, en: `Bottle Tree`, it: `Albero bottiglia`, es: `Árbol botella (Palo Borracho)` } as T,
      latin: 'Chorisia speciosa',
      niche: { zh: `庭院标志树`, en: `Landmark tree`, it: `Albero emblematico`, es: `Árbol emblemático` } as T,
      desc: {
        zh: `树干膨大如酒瓶、满布尖刺的落叶乔木，春末开粉红绸缎般的花。常植于拉昆布雷西塔的庭院与路旁，是小镇最具辨识度的植物符号。`,
        en: `A deciduous tree with a bottle-shaped, spiny trunk and satin-pink flowers in late spring. Often planted in La Cumbrecita's yards and roadsides, it is the town's most recognisable botanical symbol.`,
        it: `Albero caduco dal tronco a forma di bottiglia e pieno di spine, con fiori rosa satinati a tarda primavera. Spesso piantato nei cortili e lungo le strade di La Cumbrecita, è il simbolo botanico più riconoscibile del paese.`,
        es: `Árbol caduco de tronco abombado como botella y lleno de espinas, con flores rosadas aterciopeladas a finales de primavera. Plantado a menudo en patios y veredas de La Cumbrecita, es el símbolo botánico más reconocible del pueblo.`,
      } as T,
      iucn: 'LC',
      icon: '🌸',
    },
  ],
};

// ── FAQ ──
export const faq = {
  sectionNum: { zh: `官方访客指南`, en: `Official Visitor Guide`, it: `Guida ufficiale del visitante`, es: `Guía Oficial del Visitante` } as T,
  heading: { zh: `访客指南与<em class="text-[color:var(--color-emerald)]">常见问题</em>`, en: `Visitor Guide &<br/><em class="text-[color:var(--color-emerald)]"> FAQ</em>`, it: `Guida del visitante e<br/><em class="text-[color:var(--color-emerald)]"> domande frequenti</em>`, es: `Guía del visitante &<br/><em class="text-[color:var(--color-emerald)]"> preguntas</em>` } as T,
  disclaimer: {
    zh: `以下信息由 laolla 独立科普团队根据公开资料整理，仅供访客参考。出行前请通过阿根廷官方旅游与科尔多瓦省旅游渠道核实最新政策。`,
    en: `The following information has been compiled by the independent laolla editorial team from publicly available sources and is provided for visitor reference only. Please verify the latest policies through official Argentine tourism and Córdoba Province channels before your visit.`,
    it: `Le seguenti informazioni sono state raccolte dal team editoriale indipendente di laolla da fonti pubbliche e sono fornite solo come riferimento per i visitatori. Verificate le politiche più recenti tramite i canali ufficiali del turismo argentino e della provincia di Córdoba prima della visita.`,
    es: `La siguiente información fue compilada por el equipo editorial independiente de laolla a partir de fuentes públicas y se proporciona solo como referencia. Verifique las políticas más recientes a través de los canales oficiales de turismo de Argentina y de la provincia de Córdoba antes de su visita.`,
  } as T,
  items: [
    {
      q: { zh: `需要门票吗？开放时间是？`, en: `Is there an entrance fee? What are the hours?`, it: `C'è un biglietto d'ingresso? Quali sono gli orari?`, es: `¿Se paga entrada? ¿Cuál es el horario?` } as T,
      a: {
        zh: `La Olla 是免费开放的天然区域，没有任何售票亭或闸口，沿步道步行即可抵达。建议白天前往、趁着天黑前返回；夜间无照明、气温低，不建议逗留。`,
        en: `La Olla is a free natural area with no booth or gate — you simply walk in along the trail. Go in daylight and return before dark; at night there is no lighting and it is cold, so lingering is not advised.`,
        it: `La Olla è un'area naturale gratuita, senza biglietteria né cancelletti: ci si arriva a piedi lungo il sentiero. Vai di giorno e torna prima del buio; di notte non c'è luce ed è freddo, perciò non conviene trattenersi.`,
        es: `La Olla es un área natural gratuita, sin boletería ni cerco: se llega caminando por el sendero. Ve de día y regresa antes de oscurecer; de noche no hay iluminación y hace frío, por lo que no se recomienda demorarse.`,
      } as T,
    },
    {
      q: { zh: `如何前往 La Olla？`, en: `How do I get to La Olla?`, it: `Come arrivo a La Olla?`, es: `¿Cómo llego a La Olla?` } as T,
      a: {
        zh: `从科尔多瓦市自驾约 2 小时到拉昆布雷西塔，将车辆停在镇外停车场后，沿主街与标识步道步行 1–2 小时即可抵达；也可乘前往卡拉穆奇塔山谷的班车到拉昆布雷西塔，下车后步行进入这座步行小镇与步道。`,
        en: `From Córdoba city it is about a 2-hour drive to La Cumbrecita; park outside the town and walk the main street and signed trail for 1–2 hours. Or take a Calamuchita Valley bus to La Cumbrecita and walk into the pedestrian town and onto the trail.`,
        it: `Da Córdoba in auto sono circa 2 ore fino a La Cumbrecita; parcheggia fuori dal paese e cammina la via principale e il sentiero segnalato per 1–2 ore. Oppure prendi un bus per la valle di Calamuchita fino a La Cumbrecita e prosegui a piedi nel paese pedonale e sul sentiero.`,
        es: `Desde Córdoba en auto son unas 2 horas hasta La Cumbrecita; estacione fuera del pueblo y camine la calle principal y el sendero señalizado unas 1–2 horas. O tome un bus del Valle de Calamuchita hasta La Cumbrecita y camine al pueblo peatonal y al sendero.`,
      } as T,
    },
    {
      q: { zh: `什么时候是最佳到访时间？`, en: `When is the best time to visit?`, it: `Qual è il momento migliore per visitare?`, es: `¿Cuál es el mejor momento para visitar?` } as T,
      a: {
        zh: `<strong>戏水与丰水：</strong>春夏季（10 月至次年 3 月）水量充沛、适合跃入潭中，是最佳到访期。<br/><br/><strong>清静与光影：</strong>清晨人少、薄雾未散，岩壁被晨光染成暖色，是摄影的黄金窗口；雨后瀑布最为壮观。`,
        en: `<strong>Swimming & full water:</strong> spring and summer (Oct–Mar) bring plenty of water and are the best time to leap in.<br/><br/><strong>Quiet & light:</strong> early morning is uncrowded with mist still hanging and the rock glowing warm — the golden window for photography; after rain the waterfall is most spectacular.`,
        it: `<strong>Bagni e acqua piena:</strong> primavera ed estate (ott–mar) regalano molta acqua ed è il momento migliore per tuffarsi.<br/><br/><strong>Quiete e luce:</strong> il mattino presto è poco affollato, con la nebbia sospesa e la roccia che splende calda: la finestra dorata per la fotografia; dopo la pioggia la cascata è spettacolare.`,
        es: `<strong>Baños y agua llena:</strong> primavera y verano (oct–mar) traen mucha agua y son la mejor época para lanzarse.<br/><br/><strong>Calma y luz:</strong> la madrugada está tranquila, con la neblina suspendida y la roca brillando cálida: la ventana dorada para la fotografía; tras la lluvia la cascada es espectacular.`,
      } as T,
    },
    {
      q: { zh: `参观安全吗？`, en: `Is it safe to visit?`, it: `È sicuro visitarlo?`, es: `¿Es seguro visitar?` } as T,
      a: {
        zh: `潭边岩壁<strong>湿滑无比</strong>，水深约 6 米且无救生员，请穿防滑鞋、与边缘保持距离、看护儿童、切勿跳水；周边无任何设施，请自备饮水与食物，并带走所有垃圾。`,
        en: `The rock by the pool is <strong>extremely slippery</strong> and the water is ~6 m deep with no lifeguard — wear grippy shoes, keep clear of the edge, supervise children and never dive; there are no facilities nearby, so bring water and food and carry out all litter.`,
        it: `La roccia accanto alla pozza è <strong>molto scivolosa</strong> e l'acqua è profonda circa 6 m senza bagnino: indossa scarpe antiscivolo, resta lontano dal bordo, sorveglia i bambini e non tuffarti; non ci sono servizi vicino, porta acqua e cibo e porta via i rifiuti.`,
        es: `La roca junto a la poza está <strong>muy resbalosa</strong> y el agua tiene unos 6 m de profundidad sin guardavidas: usa calzado antideslizante, mantente lejos del borde, vigila a los niños y nunca te lances; no hay servicios cercanos, traiga agua y comida y llève su basura.`,
      } as T,
    },
  ],
};

// ── Leave No Trace ──
export const leaveNoTrace = {
  sectionNum: { zh: `游览公约`, en: `Visitor Code`, it: `Codice del visitante`, es: `Código del visitante` } as T,
  heading: { zh: `无痕山林<br/><em class="text-[color:var(--color-emerald)]">公约</em>`, en: `Leave No Trace<br/><em class="text-[color:var(--color-emerald)]"> Code</em>`, it: `Non lasciare traccia<br/><em class="text-[color:var(--color-emerald)]"> codice</em>`, es: `No Dejar Rastro<br/><em class="text-[color:var(--color-emerald)]"> Código</em>` } as T,
  subtitle: {
    zh: `作为卡拉穆奇塔山谷中一处免费的天然公共风景，La Olla 属于每一位旅人与下代访客。请在到访前阅读并承诺遵守以下准则，让这潭碧水长久清澈。`,
    en: `As a free natural public landscape in the Calamuchita Valley, La Olla belongs to every traveller and to the visitors who come after. Please read and commit to the code below so this green pool stays clear for all.`,
    it: `Come paesaggio naturale pubblico e gratuito nella valle di Calamuchita, La Olla appartiene a ogni viaggiatore e a chi verrà dopo. Leggi e impegnati a rispettare il codice qui sotto, perché questa pozza verde resti limpida per tutti.`,
    es: `Como paisaje natural público y gratuito en el Valle de Calamuchita, La Olla pertenece a cada viajero y a quienes vengan después. Lea y comprométase con el código siguiente para que esta poza verde siga clara para todos.`,
  } as T,
  rules: [
    {
      icon: '🚯',
      title: { zh: `不留垃圾`, en: `Pack It In, Pack It Out`, it: `Porta via ciò che porti`, es: `Lleva lo que traes` } as T,
      desc: {
        zh: `水潭周边没有任何垃圾桶。所有废弃物（包括果皮、纸巾、水瓶）请自行带走。被水流冲走的塑料会伤害溪鱼与下游生态。`,
        en: `There are no bins at the pool. Carry out all waste (peels, tissues, bottles). Plastic swept away by the stream harms fish and the downstream ecosystem.`,
        it: `Alla pozza non ci sono cestini. Porta via tutti i rifiuti (buccie, fazzoletti, bottiglie). La plastica trascinata dal ruscello danneggia i pesci e l'ecosistema a valle.`,
        es: `No hay tachos en la poza. Lleve todo (cáscaras, pañuelos, botellas). El plástico que el agua arrastra daña a los peces y la ecología aguas abajo.`,
      } as T,
    },
    {
      icon: '🔥',
      title: { zh: `严禁烟火`, en: `No Fire, No Smoking`, it: `Niente fuoco, niente fumo`, es: `Prohibido fuego y fumar` } as T,
      desc: {
        zh: `科尔多瓦夏季干燥，山林极易发生林火。水潭周边绝对禁止吸烟、生火或使用明火；哪怕一个烟头也可能引燃整片植被。`,
        en: `Córdoba summers are dry and the hills are extremely fire-prone. Absolutely no smoking, fires or open flames around the pool — even a single cigarette end can ignite the whole vegetation.`,
        it: `Le estati di Córdoba sono secche e le colline molto soggette agli incendi. Vietato fumare, accendere fuochi o fiamme libere vicino alla pozza: anche un solo mozzicone può incendiare tutta la vegetazione.`,
        es: `Los veranos de Córdoba son secos y los cerros muy propensos a incendios. Está totalmente prohibido fumar, hacer fuego o usar llama abierta cerca de la poza: una sola colilla puede incendiar toda la vegetación.`,
      } as T,
    },
    {
      icon: '🦊',
      title: { zh: `不投喂野生动物`, en: `No Feeding Wildlife`, it: `Non dare cibo alla fauna`, es: `No alimente la fauna` } as T,
      desc: {
        zh: `岩坡上的和尚鼠与林间小鸟看似亲近，但投喂会改变其行为并带来健康风险。请只远观，把食物收好。`,
        en: `The vizcachas on the rocks and the birds in the trees look friendly, but feeding changes their behaviour and risks their health. Observe from afar and keep food stowed.`,
        it: `Le vizcache tra le rocce e gli uccelli tra gli alberi sembrano amichevoli, ma nutrirli ne cambia il comportamento e ne mette a rischio la salute. Osservali da lontano e tieni il cibo al sicuro.`,
        es: `Las vizcachas entre las rocas y los pájaros en los árboles parecen amigables, pero alimentarlos cambia su comportamiento y pone en riesgo su salud. Obsérvelos de lejos y guarde la comida.`,
      } as T,
    },
    {
      icon: '👣',
      title: { zh: `不离开步道`, en: `Stay on the Trail`, it: `Resta sul sentiero`, es: `Quédese en el sendero` } as T,
      desc: {
        zh: `步道之外的岩面湿滑、且临近未开放的山地。请勿翻越或进入未开放区域，以免破坏植被或引发险情。`,
        en: `Off-trail rock is slippery and borders unopened hillside. Do not climb over or enter closed areas, to avoid damaging vegetation or risking accidents.`,
        it: `Fuori dal sentiero la roccia è scivolosa e confina con versanti non aperti. Non oltrepassare né entrare in zone chiuse, per non danneggiare la vegetazione né rischiare incidenti.`,
        es: `La roca fuera del sendero está resbalosa y linda con laderas no abiertas. No cruce ni ingrese a zonas cerradas, para no dañar la vegetación ni arriesgarse.`,
      } as T,
    },
    {
      icon: '🤫',
      title: { zh: `保持安静，尊重自然`, en: `Keep Quiet, Respect Nature`, it: `Silenzio, rispetta la natura`, es: `Silencio, respete la naturaleza` } as T,
      desc: {
        zh: `清晨与黄昏是观景与静享的时刻。请收起外放音响，将交谈降到最低，让每个人都能听见瀑布落入壶穴的回声。`,
        en: `Dawn and dusk are for quiet enjoyment. Put away speakers, lower your voice, and let everyone hear the echo of the falls dropping into the pothole.`,
        it: `Alba e tramonto sono per il silenzio. Metti via gli altoparlanti, abbassa la voce e lascia che tutti sentano l'eco della cascata nella marmitta.`,
        es: `El amanecer y el atardecer son para disfrutar en silencio. Guarde los parlantes, baje la voz y deje que todos oigan el eco de la cascada en la marmita.`,
      } as T,
    },
    {
      icon: '🧗',
      title: { zh: `防滑保暖，注意安全`, en: `Dress for Slippery Rock & Weather`, it: `Vestiti per roccia scivolosa e clima`, es: `Al abrigo de roca resbalosa y clima` } as T,
      desc: {
        zh: `岩面常年湿滑、山谷气温多变，即使在夏季也可能骤冷。请穿戴防滑鞋与保暖衣物，与潭边保持距离，照顾好同行的老人与儿童。`,
        en: `The rock is slippery year-round and the valley temperature swings — even in summer it can turn cold fast. Wear grippy shoes and warm clothing, keep clear of the pool edge, and look after older companions and children.`,
        it: `La roccia è scivolosa tutto l'anno e la temperatura della valle cambia: anche in estate può raffreddarsi in fretta. Indossa scarpe antiscivolo e abiti caldi, resta lontano dal bordo e cura anziani e bambini.`,
        es: `La roca está resbalosa todo el año y la temperatura de la valle cambia: incluso en verano puede enfriar rápido. Use calzado antideslizante y ropa abrigada, manténgase lejos del borde y cuide a mayores y niños.`,
      } as T,
    },
  ],
  closing: {
    zh: `只带走照片，只留下脚印。<br/>让山谷，始终保持野性。`,
    en: `Take only photos, leave only footprints.<br/>Keep the valley wild.`,
    it: `Porta via solo foto, lascia solo impronte.<br/>Che la valle resti selvaggia.`,
    es: `Lleva solo fotos, deja solo huellas.<br/>Que la valle siga salvaje.`,
  } as T,
};

// ── Friend Links (友情链接) ──
export const partners = {
  heading: {
    zh: `友情链接`,
    en: `Friend Links`,
    it: `Link amici`,
    es: `Enlaces de amigos`,
  } as T,
  items: [
    {
      name: { zh: `阿根廷国家旅游局`, en: `Argentina National Tourism`, it: `Turismo Nazionale Argentina`, es: `Turismo Nacional de Argentina` } as T,
      url: 'https://www.argentina.travel/es/pr/',
      abbr: 'ART',
      note: { zh: `国家旅游推广`, en: `National tourism promo`, it: `Promozione turistica nazionale`, es: `Promoción turística nacional` } as T,
      attr: { zh: `阿根廷国家旅游局（INPROTUR）面向全球游客的官方推广网站，该专页详细介绍了景点所在的内格罗河省（Río Negro）的自然风光与旅游资源。`, en: `The official global promotion site of Argentina's national tourism board (INPROTUR); this page details the natural scenery and travel resources of Río Negro Province where the attraction is located.`, it: `Il sito ufficiale di promozione globale del turismo nazionale argentino (INPROTUR); questa pagina illustra i paesaggi naturali e le risorse turistiche della provincia di Río Negro dove si trova l'attrazione.`, es: `El sitio oficial de promoción global del turismo nacional argentino (INPROTUR); esta página detalla los paisajes naturales y los recursos turísticos de la provincia de Río Negro donde se encuentra el atractivo.` } as T,
    },
    {
      name: { zh: `拉昆布雷西塔官方网站`, en: `La Cumbrecita Official Site`, it: `Sito Ufficiale di La Cumbrecita`, es: `Sitio Oficial de La Cumbrecita` } as T,
      url: 'https://lacumbrecita.gob.ar',
      abbr: 'LC',
      note: { zh: `小镇官网`, en: `Town website`, it: `Sito del paese`, es: `Sitio del pueblo` } as T,
      attr: { zh: `这是 La Cumbrecita 这个步行小镇的唯一官方网站，提供关于小镇历史、住宿、餐饮以及所有步道（包括通往 La Olla 的路线）的权威信息。`, en: `The only official website of the pedestrian town of La Cumbrecita, providing authoritative information on the town's history, lodging, dining and all trails, including the route to La Olla.`, it: `L'unico sito ufficiale del paese pedonale di La Cumbrecita, con informazioni autorevoli su storia, alloggi, ristoranti e tutti i sentieri, compreso il percorso per La Olla.`, es: `El único sitio oficial del pueblo peatonal de La Cumbrecita, con información autorizada sobre la historia, el alojamiento, la gastronomía y todos los senderos, incluida la ruta a La Olla.` } as T,
    },
    {
      name: { zh: `La Olla 景点官方介绍页`, en: `La Olla Official Page`, it: `Pagina Ufficiale di La Olla`, es: `Página Oficial de La Olla` } as T,
      url: 'https://lacumbrecita.gob.ar/olla.html',
      abbr: 'OLLA',
      note: { zh: `景点专页`, en: `Attraction page`, it: `Pagina dell'attrazione`, es: `Página del atractivo` } as T,
      attr: { zh: `小镇官网针对 La Olla 设立的具体页面。详细介绍了这个由瀑布冲击岩石形成的 6 米深天然水潭的景观特色和夏季游览指南。`, en: `The dedicated La Olla page on the town's official site, detailing the 6 m-deep natural pool carved by a waterfall and offering a summer visiting guide.`, it: `La pagina dedicata a La Olla sul sito ufficiale del paese, con i dettagli della pozza naturale di 6 m scolpita da una cascata e una guida estiva.`, es: `La página dedicada a La Olla en el sitio oficial del pueblo, con el detalle de la poza natural de 6 m tallada por una cascada y una guía de visita de verano.` } as T,
    },
    {
      name: { zh: `科尔多瓦省官方旅游局`, en: `Córdoba Tourism Agency`, it: `Agenzia Turismo Córdoba`, es: `Agencia Córdoba Turismo` } as T,
      url: 'https://cordobaturismo.gov.ar',
      abbr: 'CBA',
      note: { zh: `省级旅游`, en: `Provincial tourism`, it: `Turismo provinciale`, es: `Turismo provincial` } as T,
      attr: { zh: `La Cumbrecita 所在的科尔多瓦省旅游局官网。该网站涵盖了整个卡拉穆奇塔山谷（Valle de Calamuchita）的自驾路线、气候和旅游安全提示。`, en: `The official tourism site of Córdoba Province, where La Cumbrecita lies. It covers driving routes, climate and travel-safety tips for the whole Calamuchita Valley.`, it: `Il sito ufficiale del turismo della provincia di Córdoba, dove si trova La Cumbrecita. Copre itinerari in auto, clima e consigli di sicurezza per tutto il Valle di Calamuchita.`, es: `El sitio oficial de turismo de la provincia de Córdoba, donde está La Cumbrecita. Abarca rutas en auto, clima y consejos de seguridad para todo el Valle de Calamuchita.` } as T,
    },
  ],
};

// ── Footer ──
export const footer = {
  cta: { zh: `今天，去<br/><em class="text-[color:var(--color-sun)]">遇见山谷的碧水</em>。`, en: `Today, go<br/><em class="text-[color:var(--color-sun)]">meet the valley's green water</em>.`, it: `Oggi, vai<br/><em class="text-[color:var(--color-sun)]">a incontrare l'acqua verde della valle</em>.`, es: `Hoy, ve<br/><em class="text-[color:var(--color-sun)]">a encontrar el agua verde del valle</em>.` } as T,
  address: { zh: `La Olla · 拉昆布雷西塔 · 卡拉穆奇塔，科尔多瓦省，阿根廷`, en: `La Olla · La Cumbrecita · Calamuchita, Córdoba, Argentina`, it: `La Olla · La Cumbrecita · Calamuchita, Córdoba, Argentina`, es: `La Olla · La Cumbrecita · Calamuchita, Córdoba, Argentina` } as T,
  copyright: { zh: `© 2026 laolla · 保留所有权利。`, en: `© 2026 laolla. All rights reserved.`, it: `© 2026 laolla. Tutti i diritti riservati.`, es: `© 2026 laolla. Todos los derechos reservados.` } as T,
  disclaimer: { zh: `本网站是一个独立的第三方自然教育项目，与任何政府机构、景点运营方或商业机构均无关联。`, en: `This website is an independent third-party nature-education project. We are not affiliated with any government agency, attraction operator or commercial entity.`, it: `Questo sito è un progetto indipendente di educazione naturalistica di terze parti. Non è affiliato a nessun ente governativo, gestore di attrazioni o entità commerciale.`, es: `Este sitio es un proyecto independiente de educación natural de terceros. No estamos afiliados a ningún organismo gubernamental, operador de atracciones o entidad comercial.` } as T,
  sourcesNote: { zh: `下列外部链接仅用于公共信息核验与友情推荐，不构成景点、服务或机构的商业推荐。`, en: `The external links below are provided only for public-information verification and as friend links; they do not constitute commercial recommendations of any attraction, service or institution.`, it: `I link esterni qui sotto sono forniti solo per la verifica di informazioni pubbliche e come link amici; non costituiscono raccomandazioni commerciali di attrazioni, servizi o istituzioni.`, es: `Los enlaces externos de abajo se ofrecen solo para verificar informacion publica y como enlaces de amigos; no constituyen recomendaciones comerciales de ningun atractivo, servicio o institucion.` } as T,
  privacy: { zh: `隐私政策`, en: `Privacy Policy`, it: `Informativa sulla privacy`, es: `Política de Privacidad` } as T,
  terms: { zh: `服务条款`, en: `Terms of Service`, it: `Termini di servizio`, es: `Términos del Servicio` } as T,
  cookies: { zh: `Cookie 设置`, en: `Cookie Settings`, it: `Impostazioni cookie`, es: `Configuración de Cookies` } as T,
  leaveNoTrace: { zh: `游览公约`, en: `Visitor Code`, it: `Codice del visitante`, es: `Código del visitante` } as T,
};

// ── Privacy Policy Page ──
export const privacy = {
  title: { zh: `隐私政策 — laolla`, en: `Privacy Policy — laolla`, it: `Informativa sulla privacy — laolla`, es: `Política de Privacidad — laolla` } as T,
  lastUpdated: { zh: `最后更新时间：2026年7月`, en: `Last updated: July 2026`, it: `Ultimo aggiornamento: luglio 2026`, es: `Última actualización: Julio de 2026` } as T,
  h1: { zh: `隐私政策`, en: `Privacy Policy`, it: `Informativa sulla privacy`, es: `Política de Privacidad` } as T,
  h2_collect: { zh: `我们收集的信息`, en: `Information We Collect`, it: `Informazioni che raccogliamo`, es: `Información que recopilamos` } as T,
  p_collect: {
    zh: `我们仅收集提供服务所必需的最低限度数据。这些数据可能包括：浏览数据（IP 地址、浏览器类型、访问页面）、Cookie 和类似技术、您通过联系表格或电子邮件自愿提供的任何信息。`,
    en: `We collect only the minimum data necessary to provide our services. This may include: browsing data (IP address, browser type, pages visited), cookies and similar technologies, and any information you voluntarily provide through contact forms or email.`,
    it: `Raccogliamo solo i dati minimi necessari a fornire i nostri servizi. Possono includere: dati di navigazione (indirizzo IP, tipo di browser, pagine visitate), cookie e tecnologie simili, e qualsiasi informazione fornita volontariamente tramite moduli di contatto o email.`,
    es: `Recopilamos solo los datos mínimos necesarios para brindar nuestros servicios. Esto puede incluir: datos de navegación (dirección IP, tipo de navegador, páginas visitadas), cookies y tecnologías similares, e información que usted proporcione voluntariamente por formularios o correo.`,
  } as T,
  h2_use: { zh: `我们如何使用您的信息`, en: `How We Use Your Information`, it: `Come usiamo le tue informazioni`, es: `Cómo usamos su información` } as T,
  p_use: {
    zh: `我们使用收集到的信息用于：改善网站内容和用户体验、分析流量和使用模式、回应请求、遵守我们的法律义务。`,
    en: `We use the collected information to: improve website content and user experience, analyze traffic and usage patterns, respond to inquiries, and comply with our legal obligations.`,
    it: `Usiamo le informazioni raccolte per: migliorare i contenuti del sito e l'esperienza utente, analizzare il traffico e i modelli d'uso, rispondere alle richieste e rispettare i nostri obblighi legali.`,
    es: `Usamos la información recopilada para: mejorar el contenido y la experiencia del sitio, analizar el tráfico y los patrones de uso, responder consultas y cumplir obligaciones legales.`,
  } as T,
  h2_third: { zh: `第三方服务`, en: `Third-Party Services`, it: `Servizi di terze parti`, es: `Servicios de terceros` } as T,
  p_third: {
    zh: `我们的网站可能会使用第三方服务，例如谷歌地图（用于嵌入式地图和位置数据）和谷歌分析（用于流量分析）。本站图片均为 La Olla 实地拍摄并存储于本服务器。这些服务均有各自的隐私政策。`,
    en: `Our website may use third-party services, such as Google Maps (for embedded maps and location data) and Google Analytics (for traffic analysis). All photographs on this site are taken at La Olla and hosted on our own server. These services have their own privacy policies.`,
    it: `Il nostro sito può usare servizi di terze parti, come Google Maps (per mappe incorporate e dati di posizione) e Google Analytics (per l'analisi del traffico). Tutte le foto del sito sono scattate a La Olla e ospitate sul nostro server. Questi servizi hanno le proprie politiche sulla privacy.`,
    es: `Nuestro sitio puede usar servicios de terceros, como Google Maps (para mapas y datos de ubicación) y Google Analytics (para análisis de tráfico). Todas las fotos del sitio fueron tomadas en La Olla y alojadas en nuestro propio servidor. Estos servicios tienen sus propias políticas de privacidad.`,
  } as T,
  h2_rights: { zh: `您的权利`, en: `Your Rights`, it: `I tuoi diritti`, es: `Sus derechos` } as T,
  p_rights: {
    zh: `根据《通用数据保护条例》(GDPR) 及相关法规，您享有以下权利：访问您的个人数据、要求更正或删除、反对处理、向监管机构提出投诉。`,
    en: `Under the General Data Protection Regulation (GDPR) and related regulations, you have the following rights: access your personal data, request correction or deletion, object to processing, and lodge a complaint with a supervisory authority.`,
    it: `Ai sensi del Regolamento generale sulla protezione dei dati (GDPR) e di normative affini, hai i seguenti diritti: accedere ai tuoi dati personali, richiederne correzione o cancellazione, opporti al trattamento e presentare reclamo a un'autorità di controllo.`,
    es: `Según el Reglamento General de Protección de Datos (GDPR) y normas afines, usted tiene los siguientes derechos: acceder a sus datos personales, solicitar corrección o eliminación, oponerse al tratamiento y presentar una queja ante una autoridad de control.`,
  } as T,
};

// ── Terms of Service Page ──
export const terms = {
  title: { zh: `服务条款 — laolla`, en: `Terms of Service — laolla`, it: `Termini di servizio — laolla`, es: `Términos del Servicio — laolla` } as T,
  lastUpdated: { zh: `最后更新时间：2026年7月`, en: `Last updated: July 2026`, it: `Ultimo aggiornamento: luglio 2026`, es: `Última actualización: Julio de 2026` } as T,
  h1: { zh: `服务条款`, en: `Terms of Service`, it: `Termini di servizio`, es: `Términos del Servicio` } as T,
  h2_acceptance: { zh: `接受条款`, en: `Acceptance of Terms`, it: `Accettazione dei termini`, es: `Aceptación de términos` } as T,
  p_acceptance: {
    zh: `访问和使用 laolla，即表示您同意受这些服务条款的约束。`,
    en: `By accessing and using laolla, you agree to be bound by these Terms of Service.`,
    it: `Accedendo e utilizzando laolla, accetti di essere vincolato da questi Termini di servizio.`,
    es: `Al acceder y usar laolla, usted acepta quedar sujeto a estos Términos del Servicio.`,
  } as T,
  h2_content: { zh: `内容使用`, en: `Content Usage`, it: `Utilizzo dei contenuti`, es: `Uso del contenido` } as T,
  p_content: {
    zh: `本网站所有内容仅供参考。我们是一家独立的第三方自然教育网站，与任何旅游景点、政府机构或商业运营商均无关联。`,
    en: `All content on this website is for informational purposes only. We are an independent third-party nature-education website and are not affiliated with any tourist attractions, government agencies, or commercial operators.`,
    it: `Tutto il contenuto di questo sito ha solo scopo informativo. Siamo un sito indipendente di educazione naturalistica di terze parti e non siamo affiliati a nessuna attrazione turistica, ente governativo o operatore commerciale.`,
    es: `Todo el contenido de este sitio es solo informativo. Somos un sitio independiente de educación natural de terceros y no estamos afiliados a ninguna atracción turística, organismo gubernamental u operador comercial.`,
  } as T,
  h2_accuracy: { zh: `信息的准确性`, en: `Accuracy of Information`, it: `Accuratezza delle informazioni`, es: `Exactitud de la información` } as T,
  p_accuracy: {
    zh: `我们力求提供准确及时的信息，但无法保证信息的完整性或准确性。行程安排、条件和服务如有变更，恕不另行通知。请务必在出行前通过官方渠道核实重要信息。`,
    en: `We strive to provide accurate and timely information, but we cannot guarantee the completeness or accuracy of the information. Schedules, conditions, and services are subject to change without notice. Please always verify important information through official channels before traveling.`,
    it: `Ci impegniamo a fornire informazioni accurate e tempestive, ma non possiamo garantirne completezza o esattezza. Orari, condizioni e servizi possono cambiare senza preavviso. Verifica sempre le informazioni importanti tramite i canali ufficiali prima di viaggiare.`,
    es: `Nos esforzamos por brindar información precisa y oportuna, pero no podemos garantizar su integridad o exactitud. Horarios, condiciones y servicios pueden cambiar sin aviso. Verifique siempre la información importante por canales oficiales antes de viajar.`,
  } as T,
  h2_ip: { zh: `知识产权`, en: `Intellectual Property`, it: `Proprietà intellettuale`, es: `Propiedad intelectual` } as T,
  p_ip: {
    zh: `本网站设计和原创内容受版权保护。站内图片均为 La Olla 实地拍摄，版权归本网站所有。Google 地图数据的使用符合 Google 的服务条款。`,
    en: `The website design and original content are protected by copyright. All photographs on this site are taken at La Olla and are owned by this website. Google Maps data is used in accordance with Google's Terms of Service.`,
    it: `Il design del sito e i contenuti originali sono protetti da copyright. Tutte le foto del sito sono scattate a La Olla e appartengono a questo sito. I dati di Google Maps sono usati secondo i Termini di servizio di Google.`,
    es: `El diseño del sitio y el contenido original están protegidos por derechos de autor. Todas las fotos del sitio fueron tomadas en La Olla y pertenecen a este sito. Los datos de Google Maps se usan según los Términos del Servicio de Google.`,
  } as T,
  h2_liability: { zh: `责任限制`, en: `Limitation of Liability`, it: `Limitazione di responsabilità`, es: `Limitación de responsabilidad` } as T,
  p_liability: {
    zh: `本网站按"现状"提供，不作任何担保。对于因使用本网站信息而造成的任何损失，包括但不限于基于本网站内容做出的旅行决定，我们概不负责。`,
    en: `This website is provided "as is" without any warranties. We are not responsible for any losses resulting from the use of information on this website, including but not limited to travel decisions made based on the content of this website.`,
    it: `Questo sito è fornito "così com'è" senza alcuna garanzia. Non siamo responsabili per eventuali perdite derivanti dall'uso delle informazioni sul sito, inclusi, a titolo esemplificativo, i viaggi decisi in base ai suoi contenuti.`,
    es: `Este sitio se proporciona "tal cual", sin garantías. No nos responsabilizamos por pérdidas derivadas del uso de la información del sitio, incluidas las decisiones de viaje basadas en su contenido.`,
  } as T,
  backLink: { zh: `← 返回首页`, en: `← Back to home`, it: `← Torna alla home`, es: `← Volver al inicio` } as T,
};

// ── Cookie Settings Page ──
export const cookies = {
  title: { zh: `Cookie 设置 — laolla`, en: `Cookie Settings — laolla`, it: `Impostazioni cookie — laolla`, es: `Configuración de Cookies — laolla` } as T,
  lastUpdated: { zh: `最后更新时间：2026年7月`, en: `Last updated: July 2026`, it: `Ultimo aggiornamento: luglio 2026`, es: `Última actualización: Julio de 2026` } as T,
  h1: { zh: `Cookie 设置`, en: `Cookie Settings`, it: `Impostazioni cookie`, es: `Configuración de Cookies` } as T,
  intro: {
    zh: `我们使用 Cookie 来改善您的浏览体验。您可以在下方管理您的偏好设置。`,
    en: `We use cookies to improve your browsing experience. You can manage your preferences below.`,
    it: `Usiamo i cookie per migliorare la tua esperienza di navigazione. Puoi gestire le tue preferenze qui sotto.`,
    es: `Usamos cookies para mejorar su experiencia de navegación. Puede gestionar sus preferencias abajo.`,
  } as T,

  cat_necessary: { zh: `必要 Cookie`, en: `Necessary Cookies`, it: `Cookie necessari`, es: `Cookies necesarias` } as T,
  cat_necessary_desc: { zh: `这些 Cookie 对于网站正常运行至关重要，无法禁用。`, en: `These cookies are essential for the website to function properly and cannot be disabled.`, it: `Questi cookie sono essenziali per il corretto funzionamento del sito e non possono essere disattivati.`, es: `Estas cookies son esenciales para el funcionamiento del sitio y no se pueden desactivar.` } as T,
  alwaysActive: { zh: `始终保持活跃`, en: `Always active`, it: `Sempre attivi`, es: `Siempre activas` } as T,

  cat_analytics: { zh: `分析型 Cookie`, en: `Analytics Cookies`, it: `Cookie analitici`, es: `Cookies analíticas` } as T,
  cat_analytics_desc: { zh: `它们通过收集匿名使用数据，帮助我们了解访客如何与我们的网站互动。`, en: `They help us understand how visitors interact with our website by collecting anonymous usage data.`, it: `Ci aiutano a capire come i visitatori interagiscono con il sito raccogliendo dati d'uso anonimi.`, es: `Nos ayudan a entender cómo los visitantes interactúan con el sitio recopilando datos de uso anónimos.` } as T,
  ga_label: 'Google Analytics',
  ga_desc: { zh: `它会收集访客如何使用我们网站的匿名信息。`, en: `Collects anonymous information about how visitors use our website.`, it: `Raccoglie informazioni anonime su come i visitatori usano il nostro sito.`, es: `Recopila información anónima sobre cómo los visitantes usan el sitio.` } as T,
  activated: { zh: `激活`, en: `Active`, it: `Attivo`, es: `Activa` } as T,

  cat_preference: { zh: `偏好 Cookie`, en: `Preference Cookies`, it: `Cookie di preferenza`, es: `Cookies de preferencia` } as T,
  cat_preference_desc: { zh: `它们会记住您的设置，例如语言和主题偏好。`, en: `They remember your settings, such as language and theme preferences.`, it: `Ricordano le tue impostazioni, come lingua e preferenze di tema.`, es: `Recuerdan sus ajustes, como idioma y preferencias de tema.` } as T,
  pref_label: { zh: `用户偏好`, en: `User Preferences`, it: `Preferenze utente`, es: `Preferencias del usuario` } as T,
  pref_desc: { zh: `保存您的语言偏好和网站设置。`, en: `Saves your language preferences and website settings.`, it: `Salva le tue preferenze linguistiche e le impostazioni del sito.`, es: `Guarda su preferencia de idioma y ajustes del sitio.` } as T,

  cat_marketing: { zh: `营销 Cookie`, en: `Marketing Cookies`, it: `Cookie di marketing`, es: `Cookies de marketing` } as T,
  cat_marketing_desc: { zh: `它们用于展示相关广告并衡量广告活动的有效性。`, en: `They are used to display relevant advertisements and measure the effectiveness of ad campaigns.`, it: `Servono a mostrare annunci pertinenti e misurare l'efficacia delle campagne.`, es: `Se usan para mostrar anuncios relevantes y medir la efectividad de campañas.` } as T,
  ads_label: { zh: `个性化广告`, en: `Personalized Ads`, it: `Annunci personalizzati`, es: `Anuncios personalizados` } as T,
  ads_desc: { zh: `它可以根据你的兴趣为你展示相关的广告。`, en: `Shows you relevant ads based on your interests.`, it: `Mostra annunci pertinenti in base ai tuoi interessi.`, es: `Muestra anuncios relevantes según sus intereses.` } as T,
  deactivated: { zh: `停用`, en: `Inactive`, it: `Inattivo`, es: `Inactiva` } as T,

  consent_title: { zh: `同意管理`, en: `Consent Management`, it: `Gestione del consenso`, es: `Gestión del consentimiento` } as T,
  consent_desc: { zh: `您可以随时更改您的 Cookie 设置。请注意，禁用某些 Cookie 可能会影响网站的功能。`, en: `You can change your cookie settings at any time. Please note that disabling certain cookies may affect the website's functionality.`, it: `Puoi cambiare le impostazioni dei cookie in qualsiasi momento. Disattivare alcuni cookie può influire sulle funzionalità del sito.`, es: `Puede cambiar sus ajustes de cookies en cualquier momento. Desactivar algunas puede afectar la funcionalidad del sitio.` } as T,
  savePrefs: { zh: `保存偏好设置`, en: `Save Preferences`, it: `Salva preferenze`, es: `Guardar preferencias` } as T,
  rejectAll: { zh: `拒绝一切`, en: `Reject All`, it: `Rifiuta tutto`, es: `Rechazar todo` } as T,
  backLink: { zh: `← 返回首页`, en: `← Back to home`, it: `← Torna alla home`, es: `← Volver al inicio` } as T,
};

// ── Meta ──
export const meta = {
  title: { zh: `La Olla · 拉昆布雷西塔天然水潭 — 科尔多瓦卡拉穆奇塔远足与戏水指南`, en: `La Olla · La Cumbrecita's natural pool — Calamuchita hiking & swim guide, Córdoba`, it: `La Olla · La pozza naturale di La Cumbrecita — guida a escursioni e bagni a Calamuchita, Córdoba`, es: `La Olla · La poza natural de La Cumbrecita — guía de senderismo y baños en Calamuchita, Córdoba` } as T,
  description: { zh: `La Olla（拉昆布雷西塔）完整指南：6 米深天然水潭、瀑布壶穴、免费开放、从科尔多瓦自驾与山谷班车、卡拉穆奇塔生态与游览公约。`, en: `The complete guide to La Olla in La Cumbrecita: the 6 m natural pool, waterfall pothole, free access, driving from Córdoba and valley buses, Calamuchita ecology and the visitor code.`, it: `La guida completa a La Olla a La Cumbrecita: la pozza naturale di 6 m, la marmitta della cascata, accesso libero, auto da Córdoba e bus di valle, ecologia di Calamuchita e codice del visitatore.`, es: `La guía completa de La Olla en La Cumbrecita: la poza natural de 6 m, la marmita de la cascada, acceso libre, auto desde Córdoba y buses de valle, ecología de Calamuchita y el código del visitante.` } as T,
};
