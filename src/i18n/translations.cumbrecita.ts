type T = { zh: string; en: string; it: string; es: string };

// Content for the /[lang]/la-cumbrecita/ hub page.
export const cumbrecita = {
  meta: {
    title: {
      zh: `拉昆布雷西塔，科尔多瓦：怎么玩、步道与必去景点`,
      en: `La Cumbrecita, Córdoba: things to do, trails & places to visit`,
      it: `La Cumbrecita, Córdoba: cosa fare, sentieri e luoghi da visitare`,
      es: `La Cumbrecita, Córdoba: qué hacer, senderos y lugares para visitar`,
    } as T,
    description: {
      zh: `拉昆布雷西塔（La Cumbrecita）科尔多瓦旅游指南：怎么玩、步道、La Olla 水潭、必去景点、地图、交通、停车、餐厅与行程建议。`,
      en: `La Cumbrecita, Córdoba guide: things to do, trails, La Olla, places to visit, map, how to get there, parking, restaurants and tips to plan your visit.`,
      it: `Guida di La Cumbrecita, Córdoba: cosa fare, sentieri, La Olla, luoghi da visitare, mappa, come arrivare, parcheggio, ristoranti e consigli per organizzare la visita.`,
      es: `Guía de La Cumbrecita, Córdoba: qué hacer, senderos, La Olla, lugares para visitar, mapa, cómo llegar, estacionamiento, restaurantes y consejos para organizar tu visita.`,
    } as T,
  },
  hero: {
    breadcrumb: {
      zh: `阿根廷 › 科尔多瓦 › 卡拉穆奇塔山谷 › 拉昆布雷西塔`,
      en: `Argentina › Córdoba › Calamuchita Valley › La Cumbrecita`,
      it: `Argentina › Córdoba › Valle di Calamuchita › La Cumbrecita`,
      es: `Argentina › Córdoba › Valle de Calamuchita › La Cumbrecita`,
    } as T,
    title: {
      zh: `拉昆布雷西塔，科尔多瓦`,
      en: `La Cumbrecita, Córdoba`,
      it: `La Cumbrecita, Córdoba`,
      es: `La Cumbrecita, Córdoba`,
    } as T,
    subtitle: {
      zh: `科尔多瓦山脉脚下一座没有汽车的步行小镇，溪水穿过花岗岩街道，La Olla 静候在步道尽头。`,
      en: `A car-free village at the foot of the Córdoba Sierras, where the stream crosses granite streets and La Olla waits at the end of the trail.`,
      it: `Un paese pedonale ai piedi delle Sierras de Córdoba, dove il ruscello attraversa vie di granito e La Olla ti aspetta in fondo al sentiero.`,
      es: `Un pueblo peatonal al pie de las Sierras de Córdoba, donde el arroyo cruza calles de granito y La Olla espera al final del sendero.`,
    } as T,
  },
  intro: {
    heading: {
      zh: `一座为步行而生的小镇`,
      en: `A village made for walking`,
      it: `Un paese fatto per camminare`,
      es: `Un pueblo que se camina`,
    } as T,
    body: {
      zh: `拉昆布雷西塔（La Cumbrecita，「小山顶」之意）是位于科尔多瓦省卡拉穆奇塔山谷的一座没有汽车的步行小镇。20 世纪中叶，来自德国与瑞士的移民定居于此，用花岗岩铺就街道、在溪上架起木桥，并亲手种下一片针叶林，建起阿尔卑斯风格的山村。因此它被称为「科尔多瓦的阿尔卑斯一角」。这里没有商业招牌，也没有引擎噪声：你抵达、把车停在外围，然后步行进入。`,
      en: `La Cumbrecita ("the little summit") is a car-free pedestrian village in the Calamuchita Valley, Córdoba. In the mid-20th century, German- and Swiss-origin settlers built an Alpine-style village with granite-paved streets, wooden bridges over the stream and a hand-planted conifer forest. That is why it is known as "the corner of the Córdoba Alps". There are no commercial billboards or engine noise: you arrive, park outside and walk in.`,
      it: `La Cumbrecita ("la piccola cima") è un paese pedonale senza auto nel Valle di Calamuchita, Córdoba. A metà del Novecento, coloni di origine tedesca e svizzera costruirono un villaggio in stile alpino con vie lastricate di granito, ponti di legno sul ruscello e un bosco di conifere piantato a mano. Per questo è conosciuto come "l'angolo delle Alpi cordobesi". Niente insegne commerciali né rumore di motori: si arriva, si parcheggia fuori e si cammina.`,
      es: `La Cumbrecita ("la pequeña cima") es un pueblo peatonal sin autos en el Valle de Calamuchita, Córdoba. A mediados del siglo XX, inmigrantes de origen alemán y suizo se asentaron aquí y construyeron un pueblo de estilo alpino con calles empedradas de granito, puentes de madera sobre el arroyo y un bosque de coníferas plantado a mano. Por eso se le conoce como "el rincón de los Alpes cordobeses". No hay carteles comerciales ni ruido de motores: se llega, se estaciona afuera y se camina.`,
    } as T,
  },
  things: {
    heading: {
      zh: `在拉昆布雷西塔怎么玩`,
      en: `Things to do in La Cumbrecita`,
      it: `Cosa fare a La Cumbrecita`,
      es: `Qué hacer en La Cumbrecita`,
    } as T,
    subtitle: {
      zh: `从水到美食，几步之内皆有。`,
      en: `From water to food, all within a few steps.`,
      it: `Dall'acqua al cibo, tutto a pochi passi.`,
      es: `Del agua a la gastronomía, todo a pocos pasos.`,
    } as T,
    items: [
      {
        icon: '💧',
        title: { zh: `La Olla 水潭`, en: `La Olla`, it: `La Olla`, es: `La Olla` } as T,
        desc: {
          zh: `镇上最著名的天然水潭：一处约 6 米深的瀑布壶穴，从镇中心沿标识步道步行 1–2 小时可达。请穿防滑鞋，勿靠近湿滑的潭边。`,
          en: `The village's best-known natural pool: a ~6 m-deep waterfall pothole, a signed 1–2 h walk from the centre. Wear grippy shoes and keep clear of the slippery edge.`,
          it: `La pozza naturale più famosa del paese: una marmitta di cascata di circa 6 m di profondità, a 1–2 h a piedi dal centro su sentiero segnalato. Usa scarpe antiscivolo e non avvicinarti al bordo scivoloso.`,
          es: `La poza natural más famosa del pueblo: una marmita de cascada de unos 6 m de profundidad, a 1–2 h a pie desde el centro por un sendero señalizado. Lleva calzado antideslizante y no te acerques al borde resbaloso.`,
        } as T,
      },
      {
        icon: '🌊',
        title: { zh: `溪流与瀑布`, en: `Stream & waterfalls`, it: `Ruscello e cascate`, es: `Arroyo y cascadas` } as T,
        desc: {
          zh: `阿尔姆巴赫溪（Arroyo Almbach）穿镇而过。观景台、木桥与小型瀑布距镇中心仅几分钟；水声是漫步的天然背景乐。`,
          en: `Arroyo Almbach runs through the whole village. Lookouts, bridges and small falls sit minutes from the centre; the sound of water is the walk's soundtrack.`,
          it: `L'Arroyo Almbach attraversa tutto il paese. Passaggi panoramici, ponti e piccole cascate a pochi minuti dal centro; il suono dell'acqua fa da colonna sonora alla passeggiata.`,
          es: `El Arroyo Almbach acompaña todo el pueblo. Hay miradores, puentes y pequeñas cascadas a pocos minutos del centro; el sonido del agua es la banda sonora del paseo.`,
        } as T,
      },
      {
        icon: '🌲',
        title: { zh: `步道与森林`, en: `Trails & forest`, it: `Sentieri e bosco`, es: `Senderos y bosque` } as T,
        desc: {
          zh: `沿针叶林与溪畔的标识步道，适合家庭与摄影。从第一步起就能感受到山间空气。`,
          en: `Signed walks through the conifer forest and along the stream bank, great for families and photography. Mountain air is felt from the first step.`,
          it: `Passeggiate segnalate nel bosco di conifere e lungo la riva del ruscello, ideali per famiglie e fotografia. L'aria di montagna si sente dal primo passo.`,
          es: `Caminatas señalizadas por el bosque de coníferas y la ribera del arroyo, ideales para familias y fotografía. El aire de montaña se siente desde el primer paso.`,
        } as T,
      },
      {
        icon: '🚶',
        title: { zh: `步行小镇中心`, en: `Pedestrian centre`, it: `Centro pedonale`, es: `El centro peatonal` } as T,
        desc: {
          zh: `花岗岩街道、手作小店、教堂与广场。不慌不忙地散步、坐在桥上看溪水流过，就是这里的主要活动。`,
          en: `Granite streets, crafts, the church and the square. Strolling without hurry, sitting on a bridge and watching the stream is the main activity.`,
          it: `Vie di granito, artigianato, la chiesa e la piazza. Passeggiare con calma, sedersi su un ponte e guardare il ruscello è l'attività principale.`,
          es: `Calles de granito, artesanías, la iglesia y la plaza. Pasear sin prisa, sentarse en un puente y mirar correr el arroyo es la actividad principal.`,
        } as T,
      },
      {
        icon: '🍺',
        title: { zh: `美食与饮品`, en: `Food & drink`, it: `Gastronomia`, es: `Gastronomía` } as T,
        desc: {
          zh: `德式根源的美食：奶酪火锅、精酿啤酒与黑森林蛋糕。镇中心有多家店可供温暖小憩。`,
          en: `German-rooted food: fondue, craft beer and black forest cake. Several spots in the centre invite a warm break.`,
          it: `Cibo di radice tedesca: fonduta, birra artigianale e torta della foresta nera. Diversi locali nel centro invitano a una pausa calda.`,
          es: `Comida de raíz alemana: fondue, cerveza artesanal y pastelería negra. Varios locales en el centro invitan a una pausa caliente.`,
        } as T,
      },
      {
        icon: '⛺',
        title: { zh: `露营`, en: `Camping`, it: `Camping`, es: `Camping` } as T,
        desc: {
          zh: `镇外围与卡拉穆奇塔山谷内有露营区域。出发前请先了解选项与可订情况；旺季建议提前预约。`,
          en: `Camping areas sit on the outskirts and across the Calamuchita Valley. Check options and availability before you go; in high season booking ahead helps.`,
          it: `Ci sono aree di campeggio in periferia e nel Valle di Calamuchita. Controlla opzioni e disponibilità prima di partire; in alta stagione conviene prenotare.`,
          es: `Hay zonas de acampe en las afueras del pueblo y en el Valle de Calamuchita. Consulta las opciones y la disponibilidad antes de tu visita; en temporada alta conviene reservar.`,
        } as T,
      },
    ],
  },
  llegar: {
    heading: {
      zh: `如何前往拉昆布雷西塔`,
      en: `How to get to La Cumbrecita`,
      it: `Come arrivare a La Cumbrecita`,
      es: `Cómo llegar a La Cumbrecita`,
    } as T,
    body: {
      zh: `从科尔多瓦市沿 RN36 向南进入卡拉穆奇塔山谷，经 Villa General Belgrano（约 20 分钟车程）约 2 小时可达。自驾需停在镇外入口再步行进入；乘公共交通可搭山谷班车至镇口。小镇禁行机动车，最后一段永远是步行。`,
      en: `From Córdoba city it is about 2 h via RN36 into the Calamuchita Valley, through Villa General Belgrano (about 20 min away). By car, park at the entrance and walk in; by public transport, valley buses reach the village entrance. The village is car-free: the last stretch is always on foot.`,
      it: `Da Córdoba città sono circa 2 h sulla RN36 verso il Valle di Calamuchita, via Villa General Belgrano (a circa 20 min). In auto si parcheggia all'ingresso e si entra a piedi; con i mezzi, i bus di valle arrivano all'ingresso del paese. Il paese è pedonale: l'ultimo tratto è sempre a piedi.`,
      es: `Desde la ciudad de Córdoba son unas 2 h por la RN36 hacia el Valle de Calamuchita, vía Villa General Belgrano (a unos 20 min). En auto, se estaciona en la entrada y se entra a pie; en transporte público, los buses de valle llegan a la entrada del pueblo. El pueblo es peatonal: el último tramo siempre es a pie.`,
    } as T,
  },
  parking: {
    heading: {
      zh: `在哪里停车`,
      en: `Where to park`,
      it: `Dove parcheggiare`,
      es: `Dónde estacionar`,
    } as T,
    body: {
      zh: `镇内禁止驾驶机动车。入口处有公共停车场，周末与旺季容易停满；尽早到达是最佳策略。停好之后，一切靠步行。`,
      en: `Driving inside the village is forbidden. There is a public car park at the entrance that fills on weekends and in high season; arriving early is the best strategy. From there, everything is on foot.`,
      it: `È vietato circolare in auto nel paese. C'è un parcheggio pubblico all'ingresso che si riempie nei weekend e in alta stagione; arrivare presto è la strategia migliore. Da lì, tutto si fa a piedi.`,
      es: `Está prohibido circular en auto dentro del pueblo. Existe un estacionamiento público en la entrada que se llena los fines de semana y en temporada alta; llegar temprano es la mejor estrategia. Desde allí, todo se recorre caminando.`,
    } as T,
  },
  map: {
    heading: {
      zh: `地图与位置`,
      en: `Map & location`,
      it: `Mappa e posizione`,
      es: `Mapa y ubicación`,
    } as T,
    body: {
      zh: `拉昆布雷西塔，卡拉穆奇塔山谷，科尔多瓦省，阿根廷。Plus Code 465F+6G。主要参照点是步行小镇的入口，通往 La Olla 的步道由此出发。`,
      en: `La Cumbrecita, Calamuchita Valley, Córdoba, Argentina. Plus Code 465F+6G. The main reference point is the entrance to the pedestrian village, where the trail to La Olla begins.`,
      it: `La Cumbrecita, Valle di Calamuchita, Córdoba, Argentina. Plus Code 465F+6G. Il punto di riferimento principale è l'ingresso al paese pedonale, da cui parte il sentiero per La Olla.`,
      es: `La Cumbrecita, Valle de Calamuchita, Córdoba, Argentina. Plus Code 465F+6G. El punto de referencia principal es la entrada al pueblo peatonal, desde donde parte el sendero a La Olla.`,
    } as T,
  },
  climate: {
    heading: {
      zh: `最佳到访季节`,
      en: `Best time to visit`,
      it: `Miglior periodo per visitare`,
      es: `Mejor época para visitar`,
    } as T,
    body: {
      zh: `春夏季（10 月至次年 3 月）水量充沛、气候宜人，适合徒步与在 La Olla 戏水。秋冬较冷且安静，适合森林与摄影。请穿防滑鞋：岩石一年四季都湿滑。`,
      en: `Spring and summer (Oct–Mar) bring more water and good weather for walking and swimming in La Olla. Autumn and winter are colder and quieter, ideal for the forest and photography. Wear grippy shoes: the rocks are wet all year.`,
      it: `Primavera ed estate (ott–mar) portano più acqua e bel tempo per camminare e fare il bagno a La Olla. Autunno e inverno sono più freddi e tranquilli, ideali per il bosco e la fotografia. Usa scarpe antiscivolo: le pietre sono bagnate tutto l'anno.`,
      es: `Primavera y verano (oct–mar) traen más agua y buen clima para caminar y bañarse en La Olla. Otoño e invierno son más fríos y tranquilos, ideales para el bosque y la fotografía. Lleva calzado antideslizante: las piedras están húmedas todo el año.`,
    } as T,
  },
  itinerary: {
    heading: {
      zh: `如何安排你的行程`,
      en: `How to plan your visit`,
      it: `Come organizzare la visita`,
      es: `Cómo organizar tu visita`,
    } as T,
    half: { zh: `半日`, en: `Half a day`, it: `Mezza giornata`, es: `Media jornada` } as T,
    halfText: {
      zh: `抵达、停车、步行至镇中心、午餐，再走 La Olla 步道（往返 1–2 小时）。足以看遍精华。`,
      en: `Arrive, park, walk to the centre, lunch and the trail to La Olla (1–2 h round trip). Enough to see the essentials.`,
      it: `Arrivo, parcheggio, passeggiata al centro, pranzo e sentiero per La Olla (andata e ritorno 1–2 h). Sufficiente per il essenziale.`,
      es: `Llegada, estacionar, caminata al centro, almuerzo y sendero a La Olla (ida y vuelta 1–2 h). Suficiente para conocer lo esencial.`,
    } as T,
    full: { zh: `一整天`, en: `Full day`, it: `Giornata intera`, es: `Jornada completa` } as T,
    fullText: {
      zh: `上午在小镇与溪畔，中午用餐，下午前往 La Olla 与周边观景台。若自驾，回程可顺路游览 Villa General Belgrano。`,
      en: `Morning in the village and by the stream, lunch, afternoon at La Olla and nearby lookouts. If driving, add Villa General Belgrano on the way back.`,
      it: `Mattina nel paese e lungo il ruscello, pranzo, pomeriggio a La Olla e punti panoramici vicini. Se vai in auto, aggiungi Villa General Belgrano al ritorno.`,
      es: `Mañana en el pueblo y el arroyo, mediodía gastronómico, tarde en La Olla y miradores cercanos. Si vas en auto, suma Villa General Belgrano de regreso.`,
    } as T,
  },
  faq: {
    heading: {
      zh: `常见问题`,
      en: `Frequently asked questions`,
      it: `Domande frequenti`,
      es: `Preguntas frecuentes`,
    } as T,
    items: [
      {
        q: {
          zh: `怎么去拉昆布雷西塔？`,
          en: `How do I get to La Cumbrecita?`,
          it: `Come si arriva a La Cumbrecita?`,
          es: `¿Cómo se llega a La Cumbrecita?`,
        } as T,
        a: {
          zh: `从科尔多瓦市沿 RN36 经 Villa General Belgrano 约 2 小时。把车停在入口步行进入，或搭山谷班车到镇口。`,
          en: `From Córdoba city about 2 h via RN36 through Villa General Belgrano. Park at the entrance and walk, or take a valley bus to the village entrance.`,
          it: `Da Córdoba città circa 2 h sulla RN36 via Villa General Belgrano. Parcheggia all'ingresso e cammina, o prendi un bus di valle fino all'ingresso del paese.`,
          es: `Desde Córdoba capital unas 2 h por la RN36 vía Villa General Belgrano. Estaciona en la entrada y camina; o toma un bus de valle hasta la entrada del pueblo.`,
        } as T,
      },
      {
        q: {
          zh: `拉昆布雷西塔免费吗？`,
          en: `Is La Cumbrecita free?`,
          it: `La Cumbrecita è gratis?`,
          es: `¿La Cumbrecita es gratis?`,
        } as T,
        a: {
          zh: `小镇免费进入，La Olla 也免费。你只需为餐饮、住宿等服务付费。`,
          en: `The village is free to enter and La Olla is also free. You only pay for services like food or lodging.`,
          it: `Il paese è ad accesso libero e anche La Olla è gratuita. Paghiamo solo servizi come cibo o alloggio.`,
          es: `El pueblo es de acceso libre y La Olla también es gratuita. Solo se pagan servicios como comida o alojamiento.`,
        } as T,
      },
      {
        q: {
          zh: `带孩子玩什么？`,
          en: `What to do with kids?`,
          it: `Cosa fare con i bambini?`,
          es: `¿Qué hacer con niños?`,
        } as T,
        a: {
          zh: `平缓的步道、溪流与 La Olla（注意湿滑潭边）都适合家庭。带件保暖衣物与零食。`,
          en: `Gentle trails, the stream and La Olla (watch the slippery edge) are great for families. Bring warm clothes and a snack.`,
          it: `Sentieri dolci, il ruscello e La Olla (vigila il bordo scivoloso) sono ideali in famiglia. Porta abbigliamento caldo e uno spuntino.`,
          es: `Senderos suaves, el arroyo y La Olla (vigila la orilla resbalosa) son ideales en familia. Lleva abrigo y merienda.`,
        } as T,
      },
      {
        q: {
          zh: `什么时候最好？`,
          en: `When is the best time?`,
          it: `Qual è il miglior periodo?`,
          es: `¿Cuándo es la mejor época?`,
        } as T,
        a: {
          zh: `10 月至 3 月可在 La Olla 戏水；全年都适合徒步与赏林。`,
          en: `October to March for swimming in La Olla; all year is good for walking and the forest.`,
          it: `Ottobre-marzo per il bagno a La Olla; tutto l'anno va bene per camminare e il bosco.`,
          es: `Octubre a marzo para bañarse en La Olla; todo el año es bueno para caminar y disfrutar del bosque.`,
        } as T,
      },
      {
        q: {
          zh: `在哪里停车？`,
          en: `Where do I park?`,
          it: `Dove parcheggio?`,
          es: `¿Dónde estacionar?`,
        } as T,
        a: {
          zh: `入口处的停车场。周末与旺季容易停满：尽早到达。`,
          en: `At the entrance car park. It fills on weekends and in high season: arrive early.`,
          it: `Nel parcheggio all'ingresso. Si riempie nei weekend e in alta stagione: arriva presto.`,
          es: `En el estacionamiento de la entrada. Se llena en fines de semana y temporada alta: llega temprano.`,
        } as T,
      },
      {
        q: {
          zh: `La Olla 在哪里？`,
          en: `Where is La Olla?`,
          it: `Dove si trova La Olla?`,
          es: `¿Dónde está La Olla?`,
        } as T,
        a: {
          zh: `从步行小镇中心沿标识步道步行 1–2 小时。跟着指向水潭的标识走即可。`,
          en: `A signed 1–2 h walk from the pedestrian centre. Follow the signs to the pool.`,
          it: `A 1–2 h a piedi dal centro pedonale su sentiero segnalato. Segui le indicazioni per la pozza.`,
          es: `A 1–2 h a pie desde el centro peatonal por un sendero señalizado. Sigue las indicaciones hacia la poza.`,
        } as T,
      },
    ],
  },
  links: {
    laOlla: {
      zh: `从拉昆布雷西塔前往 La Olla 的步道`,
      en: `Trail to La Olla from La Cumbrecita`,
      it: `Sentiero per La Olla da La Cumbrecita`,
      es: `Sendero a La Olla desde La Cumbrecita`,
    } as T,
  },
  cta: {
    title: {
      zh: `认识 La Olla——拉昆布雷西塔的天然水潭`,
      en: `Discover La Olla, La Cumbrecita's natural pool`,
      it: `Scopri La Olla, la pozza naturale di La Cumbrecita`,
      es: `Conoce La Olla, la poza natural de La Cumbrecita`,
    } as T,
    linkLabel: {
      zh: `La Olla 指南（拉昆布雷西塔）`,
      en: `La Olla guide (La Cumbrecita)`,
      it: `Guida di La Olla (La Cumbrecita)`,
      es: `Guía de La Olla (La Cumbrecita)`,
    } as T,
  },
  teaser: {
    kicker: {
      zh: `拉昆布雷西塔总攻略`,
      en: `The full La Cumbrecita guide`,
      it: `La guida completa di La Cumbrecita`,
      es: `La guía completa de La Cumbrecita`,
    } as T,
    title: {
      zh: `不止 La Olla：拉昆布雷西塔怎么玩`,
      en: `Beyond La Olla: what to do in La Cumbrecita`,
      it: `Oltre La Olla: cosa fare a La Cumbrecita`,
      es: `Más allá de La Olla: qué hacer en La Cumbrecita`,
    } as T,
    text: {
      zh: `步行小镇、溪流与瀑布、德式美食、露营与步道——一篇承接「La Cumbrecita」大词的完整攻略。`,
      en: `The pedestrian village, streams and waterfalls, German food, camping and trails — a full guide that catches the broad "La Cumbrecita" searches.`,
      it: `Il paese pedonale, ruscelli e cascate, cibo tedesco, campeggio e sentieri: una guida completa per le ricerche ampie su "La Cumbrecita".`,
      es: `El pueblo peatonal, arroyos y cascadas, comida alemana, camping y senderos: una guía completa que recoge las búsquedas amplias de "La Cumbrecita".`,
    } as T,
    link: {
      zh: `查看拉昆布雷西塔旅游指南`,
      en: `Read the La Cumbrecita travel guide`,
      it: `Leggi la guida di La Cumbrecita`,
      es: `Ver la guía de La Cumbrecita`,
    } as T,
  },
};
