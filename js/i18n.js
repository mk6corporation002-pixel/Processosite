/* =========================================================
   BELLAVISTA · traduções (ES é o idioma original do HTML)
   - Elementos com data-i18n="chave" recebem o texto (aceita <br> e <em>)
   - Elementos com data-i18n-ph="chave" recebem o placeholder
   ========================================================= */

(function () {
  // Chaves usadas só pelo JavaScript (mensagens, WhatsApp)
  const extra = {
    es: {
      'form.error': 'Por favor, completa nombre, correo y fechas.',
      'form.success': 'Abrimos WhatsApp con tu consulta. ¡Gracias!',
      'wa.greeting': 'Hola, quiero consultar disponibilidad en Bellavista Cabaña Boutique.',
      'wa.quick': 'Hola, quiero consultar disponibilidad en Bellavista Cabaña Boutique.',
    },
    en: {
      'form.error': 'Please fill in your name, email and dates.',
      'form.success': 'WhatsApp opened with your request. Thank you!',
      'wa.greeting': 'Hi, I would like to check availability at Bellavista Cabaña Boutique.',
      'wa.quick': 'Hi, I would like to check availability at Bellavista Cabaña Boutique.',
    },
    pt: {
      'form.error': 'Por favor, preencha nome, e-mail e datas.',
      'form.success': 'Abrimos o WhatsApp com a sua consulta. Obrigado!',
      'wa.greeting': 'Olá, quero consultar disponibilidade na Bellavista Cabaña Boutique.',
      'wa.quick': 'Olá, quero consultar disponibilidade na Bellavista Cabaña Boutique.',
    },
  };

  const dict = {
    en: {
      'nav.casa': 'The house', 'nav.tinaja': 'The hot tub', 'nav.galeria': 'Gallery', 'nav.experiencias': 'Experiences', 'nav.guia': 'Stay guide',
      'cta.fechas': 'Check dates',

      'hero.eyebrow': 'Pucón · La Araucanía · Chile',
      'hero.title': 'Your home between<br><em>the lake and the volcano.</em>',
      'hero.text': 'A mountain house to gather, rest and look far away. Up to 10 guests, with a panoramic hot tub and the Villarrica landscape ahead.',
      'hero.cta1': 'Check availability', 'hero.cta2': 'Discover the house',
      'hero.h1': 'Entire house', 'hero.h2': 'Lake Villarrica view', 'hero.h3': 'A hot tub to slow down',

      'specs.intro': 'A getaway with room for everyone.',
      'specs.a1': 'Up to 10', 'specs.a1s': 'guests',
      'specs.a2': '1 suite', 'specs.a2s': 'to rest',
      'specs.a3': 'Living, kitchen & dining', 'specs.a3s': 'open-plan',
      'specs.a4': '2 shared bathrooms', 'specs.a4s': 'for the group',
      'specs.a5': '3 bedrooms', 'specs.a5s': 'to share',
      'specs.a6': 'Cozy lounge', 'specs.a6s': 'to slow down',
      'specs.cta': 'Explore dates',

      'casa.eyebrow': 'Bellavista, at your pace',
      'casa.title': 'More than arriving,<br><em>it is living the view.</em>',
      'casa.p1': 'Bellavista was made for unhurried days: long breakfasts, conversations by the wood and a house where the group finds its own corner. Here the experience isn’t split into rooms: it is shared in full.',
      'casa.p2': 'The mountain, the lake and the volcano change color throughout the day. From the house, that landscape becomes part of your stay.',
      'casa.cta': 'Walk through the spaces',
      'casa.seal': 'A refuge<br>with a horizon',

      'tinaja.eyebrow': 'Hot water, open horizon',
      'tinaja.title': 'The pause<br>comes with<br><em>a lake view.</em>',
      'tinaja.text': 'As evening falls, the hot tub sets a different pace. Hot water, mountain air and the Villarrica horizon: a place to end the day with the group you chose to bring.',
      'tinaja.c1': 'An outdoor experience designed to look far away.',
      'tinaja.c2': 'The forest brings privacy; the landscape, perspective.',

      'gal.eyebrow': 'Photos of Bellavista',
      'gal.title': 'A place to<br><em>share.</em>',
      'gal.lead': 'A selection to feel Bellavista: togetherness, water and horizon. Whenever you like, explore every corner of the house at your own pace.',
      'gal.btn': 'Tour the house by space',
      'gal.quote': 'Explore each space like a travel note, without losing the thread of the house.',
      'gal.sub': 'House · water · horizon',
      'gal.subtext': 'Seven moments to feel Bellavista before exploring each space.',
      'gal.g1': 'Arriving at the cabin', 'gal.g2': 'Living room by the stove', 'gal.g3': 'Dining room with lake view',
      'gal.g4': 'Sunset from the hot tub', 'gal.g5': 'Bedroom in afternoon light', 'gal.g6': 'Volcano view from the back of the house', 'gal.g7': 'Open view to the lake',
      'gal.sign': 'The house reveals itself between wood, water and mountain.',

      'exp.asideTitle': 'Time to<br><em>enjoy your way.</em>',
      'exp.eyebrow': 'Design your stay',
      'exp.title': 'Experiences to<br><em>feel more.</em>',
      'exp.lead': 'Tell us what you would like to experience in Pucón. We coordinate in advance the options that best suit your group’s rhythm.',
      'exp.e1': 'Mushroom wellness experiences', 'exp.e1t': 'With authorized operators and prior coordination.',
      'exp.e2': 'Holistic therapies', 'exp.e2t': 'Spaces for pause, reconnection and self-care.',
      'exp.e3': 'Adventure sports', 'exp.e3t': 'Mountain, water and outdoors for different paces.',
      'exp.e4': 'Local gastronomy', 'exp.e4t': 'Southern flavors, signature cuisine and moments to share.',

      'srv.eyebrow': 'Tailored services',
      'srv.title': 'Comforts to<br><em>travel light.</em>',
      'srv.s1': 'Daily cleaning', 'srv.s1t': 'To keep the house ready to enjoy.',
      'srv.s2': 'Stocked pantry', 'srv.s2t': 'Food and drinks arranged before you arrive.',
      'srv.s3': 'Airport transfer', 'srv.s3t': 'Simpler arrivals and departures, booked in advance.',
      'srv.s4': 'Driver', 'srv.s4t': 'Transfers and tours arranged around your itinerary.',
      'srv.s5': 'Laundry', 'srv.s5t': 'Practical support for more comfortable stays.',
      'srv.note': 'Services subject to prior coordination, availability and each provider’s conditions.',
      'srv.cta': 'Plan my stay',

      'guia.eyebrow': 'Things to do in Pucón',
      'guia.title': 'Your guide to<br><em>go out and explore.</em>',
      'guia.lead': 'Parks, water, hot springs and landscape: ways to enjoy Pucón during your stay. Check schedules, access and conditions with official sources beforehand.',
      'guia.p1w': 'Huerquehue National Park', 'guia.p1': 'Trails among araucarias.', 'guia.p1t': 'Ancient forests, lakes and routes to choose according to the weather and the group’s pace.',
      'guia.p2w': 'Ojos del Caburgua', 'guia.p2': 'Turquoise water and waterfalls.', 'guia.p2t': 'A natural escape to contemplate the water, walk nearby trails and breathe the forest.',
      'guia.p3w': 'Local hot springs', 'guia.p3': 'Thermal water in the forest.', 'guia.p3t': 'Natural pools and mountain steam for a day of total rest.',
      'guia.p4w': 'Lake Villarrica', 'guia.p4': 'Beach, waterfront and sunset.', 'guia.p4t': 'Lakeside walks, water sports and the best light at the end of the day.',
      'guia.p5w': 'Pillán Mountain Center', 'guia.p5': 'The mountain, closer.', 'guia.p5t': 'A panoramic outing to see lakes and volcanoes from the slopes of Villarrica. Check the status of activities beforehand.',
      'guia.link': 'See official information',
      'guia.source': 'Orientation information based on', 'guia.and': 'and',
      'guia.locK': 'Real location',

      'book.eyebrow': 'Check your stay',
      'book.title': 'The next<br>view<br><em>could be yours.</em>',
      'book.lead': 'Tell us when you’d like to travel and how many people are coming. We’ll arrange a relaxed conversation to imagine the arrival, the rhythm of the days and a stay tailored to your group at Bellavista.',
      'book.f1': 'House for up to 10 people', 'book.f2': 'Pucón, La Araucanía, Chile', 'book.f3': 'Hot tub with a lake horizon',
      'book.note': 'Your request opens a direct WhatsApp conversation, with no unnecessary steps.',

      'form.title': 'Tell us how you imagine your arrival',
      'form.sub': 'From Pucón, let’s talk about a stay between lake, forest and volcano.',
      'form.name': 'Full name', 'form.nameph': 'What’s your name?',
      'form.email': 'Email',
      'form.stay': 'Your stay', 'form.stayph': 'Approximate dates, number of guests or anything you’d like to share...',
      'form.btn': 'Open conversation',
      'form.legal': 'When you send, WhatsApp will open with your request details ready to share with Bellavista Cabaña Boutique.',

      'foot.tag': 'A mountain house to see Pucón from another height.',
      'foot.top': 'Back to top',
    },

    pt: {
      'nav.casa': 'A casa', 'nav.tinaja': 'A tinaja', 'nav.galeria': 'Galeria', 'nav.experiencias': 'Experiências', 'nav.guia': 'Guia da estadia',
      'cta.fechas': 'Consultar datas',

      'hero.eyebrow': 'Pucón · La Araucanía · Chile',
      'hero.title': 'Sua casa entre<br><em>o lago e o vulcão.</em>',
      'hero.text': 'Uma casa de montanha para reunir, descansar e olhar longe. Até 10 pessoas, com tinaja panorâmica e a paisagem de Villarrica à frente.',
      'hero.cta1': 'Consultar disponibilidade', 'hero.cta2': 'Conhecer a casa',
      'hero.h1': 'Casa completa', 'hero.h2': 'Vista para o Lago Villarrica', 'hero.h3': 'Tinaja para voltar ao ritmo',

      'specs.intro': 'Uma escapada com espaço para todos.',
      'specs.a1': 'Até 10', 'specs.a1s': 'hóspedes',
      'specs.a2': '1 suíte', 'specs.a2s': 'para descansar',
      'specs.a3': 'Sala, cozinha e jantar', 'specs.a3s': 'em conceito aberto',
      'specs.a4': '2 banheiros sociais', 'specs.a4s': 'para o grupo',
      'specs.a5': '3 quartos', 'specs.a5s': 'para compartilhar',
      'specs.a6': 'Saleta íntima', 'specs.a6s': 'para desacelerar',
      'specs.cta': 'Explorar datas',

      'casa.eyebrow': 'Bellavista, no seu ritmo',
      'casa.title': 'Mais que chegar,<br><em>é habitar a vista.</em>',
      'casa.p1': 'A Bellavista nasce para os dias sem pressa: cafés da manhã longos, conversas junto à madeira e uma casa onde o grupo encontra seu próprio canto. Aqui a experiência não se divide em quartos: é compartilhada por inteiro.',
      'casa.p2': 'A montanha, o lago e o vulcão mudam de cor ao longo do dia. Da casa, essa paisagem se torna parte da estadia.',
      'casa.cta': 'Percorrer os espaços',
      'casa.seal': 'Um refúgio<br>com horizonte',

      'tinaja.eyebrow': 'Água quente, horizonte aberto',
      'tinaja.title': 'A pausa<br>tem<br><em>vista para o lago.</em>',
      'tinaja.text': 'Quando a tarde cai, a tinaja propõe outro ritmo. Água quente, ar de montanha e o horizonte de Villarrica: um lugar para encerrar o dia com o grupo que você escolheu trazer.',
      'tinaja.c1': 'Uma experiência ao ar livre pensada para olhar longe.',
      'tinaja.c2': 'O bosque traz privacidade; a paisagem, perspectiva.',

      'gal.eyebrow': 'As fotos da Bellavista',
      'gal.title': 'Um lugar para<br><em>compartilhar.</em>',
      'gal.lead': 'Uma seleção para sentir a Bellavista: convivência, água e horizonte. Quando quiser, percorra cada canto da casa no seu ritmo.',
      'gal.btn': 'Percorra a casa por ambiente',
      'gal.quote': 'Percorra cada ambiente como uma nota de viagem, sem perder o fio da casa.',
      'gal.sub': 'Casa · água · horizonte',
      'gal.subtext': 'Sete momentos para sentir a Bellavista antes de explorar cada ambiente.',
      'gal.g1': 'Chegada à cabana', 'gal.g2': 'Sala de estar junto à lareira', 'gal.g3': 'Sala de jantar com vista para o lago',
      'gal.g4': 'Pôr do sol na tinaja', 'gal.g5': 'Quarto com luz da tarde', 'gal.g6': 'Vista do vulcão dos fundos da casa', 'gal.g7': 'Vista aberta para o lago',
      'gal.sign': 'A casa se revela entre madeira, água e montanha.',

      'exp.asideTitle': 'Tempo para<br><em>aproveitar do seu jeito.</em>',
      'exp.eyebrow': 'Desenhe sua estadia',
      'exp.title': 'Experiências para<br><em>sentir mais.</em>',
      'exp.lead': 'Conte o que você gostaria de viver em Pucón. Coordenamos com antecedência as opções que melhor acompanham o ritmo do seu grupo.',
      'exp.e1': 'Experiências de bem-estar com cogumelos', 'exp.e1t': 'Com operadores autorizados e coordenação prévia.',
      'exp.e2': 'Terapias holísticas', 'exp.e2t': 'Espaços de pausa, reconexão e cuidado pessoal.',
      'exp.e3': 'Esportes de aventura', 'exp.e3t': 'Montanha, água e ar livre para diferentes ritmos.',
      'exp.e4': 'Gastronomia local', 'exp.e4t': 'Sabores do sul, cozinhas autorais e encontros para compartilhar.',

      'srv.eyebrow': 'Serviços sob medida',
      'srv.title': 'Mordomias para<br><em>chegar leve.</em>',
      'srv.s1': 'Limpeza diária', 'srv.s1t': 'Para manter a casa pronta para aproveitar.',
      'srv.s2': 'Despensa abastecida', 'srv.s2t': 'Alimentos e bebidas coordenados antes da sua chegada.',
      'srv.s3': 'Transfer do aeroporto', 'srv.s3t': 'Chegada e saída mais simples, com reserva prévia.',
      'srv.s4': 'Motorista', 'srv.s4t': 'Traslados e passeios coordenados conforme seu roteiro.',
      'srv.s5': 'Lavanderia', 'srv.s5t': 'Um apoio prático para estadias mais confortáveis.',
      'srv.note': 'Serviços sujeitos a coordenação prévia, disponibilidade e condições de cada fornecedor.',
      'srv.cta': 'Coordenar minha estadia',

      'guia.eyebrow': 'O que fazer em Pucón',
      'guia.title': 'Seu guia para<br><em>sair e explorar.</em>',
      'guia.lead': 'Parques, água, termas e paisagem: maneiras de aproveitar Pucón durante sua estadia. Confirme antes horários, acessos e condições nas fontes oficiais.',
      'guia.p1w': 'Parque Nacional Huerquehue', 'guia.p1': 'Trilhas entre araucárias.', 'guia.p1t': 'Bosques antigos, lagos e rotas para escolher conforme o tempo e o ritmo do grupo.',
      'guia.p2w': 'Ojos del Caburgua', 'guia.p2': 'Água turquesa e cachoeiras.', 'guia.p2t': 'Uma escapada natural para contemplar a água, percorrer trilhas próximas e respirar bosque.',
      'guia.p3w': 'Termas da região', 'guia.p3': 'Água termal no meio do bosque.', 'guia.p3t': 'Piscinas naturais e vapor de montanha para um dia de descanso total.',
      'guia.p4w': 'Lago Villarrica', 'guia.p4': 'Praia, orla e pôr do sol.', 'guia.p4t': 'Caminhadas à beira do lago, esportes náuticos e a melhor luz no fim do dia.',
      'guia.p5w': 'Centro de Montanha Pillán', 'guia.p5': 'A montanha, mais perto.', 'guia.p5t': 'Um passeio panorâmico para ver lagos e vulcões das encostas do Villarrica. Verifique antes o status das atividades.',
      'guia.link': 'Ver informação oficial',
      'guia.source': 'Informação de orientação baseada em', 'guia.and': 'e',
      'guia.locK': 'Localização real',

      'book.eyebrow': 'Consulte sua estadia',
      'book.title': 'A próxima<br>vista<br><em>pode ser a sua.</em>',
      'book.lead': 'Conte em que datas vocês querem viajar e quantas pessoas serão. Organizaremos uma conversa tranquila para imaginar a chegada, o ritmo dos dias e uma estadia sob medida para o seu grupo na Bellavista.',
      'book.f1': 'Casa para até 10 pessoas', 'book.f2': 'Pucón, La Araucanía, Chile', 'book.f3': 'Tinaja com horizonte do lago',
      'book.note': 'Sua consulta abre uma conversa direta pelo WhatsApp, sem etapas desnecessárias.',

      'form.title': 'Conte como você imagina sua chegada',
      'form.sub': 'De Pucón, vamos conversar sobre uma estadia entre lago, bosque e vulcão.',
      'form.name': 'Nome completo', 'form.nameph': 'Como você se chama?',
      'form.email': 'E-mail',
      'form.stay': 'Sua estadia', 'form.stayph': 'Datas aproximadas, número de hóspedes ou algo que queira contar...',
      'form.btn': 'Abrir conversa',
      'form.legal': 'Ao enviar, o WhatsApp será aberto com os dados da sua consulta prontos para compartilhar com a Bellavista Cabaña Boutique.',

      'foot.tag': 'Uma casa de montanha para ver Pucón de outra altura.',
      'foot.top': 'Voltar ao topo',
    },
  };

  // Guarda o espanhol original do HTML na primeira execução
  const original = { text: {}, ph: {} };
  const captureOriginal = () => {
    if (original.captured) return;
    document.querySelectorAll('[data-i18n]').forEach(el => { original.text[el.dataset.i18n] ??= el.innerHTML; });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => { original.ph[el.dataset.i18nPh] ??= el.placeholder; });
    original.captured = true;
  };

  let current = 'es';

  function t(key, lang = current) {
    if (extra[lang] && extra[lang][key]) return extra[lang][key];
    if (lang !== 'es' && dict[lang] && dict[lang][key]) return stripTags(dict[lang][key]);
    captureOriginal();
    return stripTags(original.text[key] || key);
  }

  function stripTags(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent;
  }

  function apply(lang) {
    captureOriginal();
    current = dict[lang] || lang === 'es' ? lang : 'es';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      el.innerHTML = current === 'es' ? original.text[key] : (dict[current][key] ?? original.text[key]);
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.dataset.i18nPh;
      el.placeholder = current === 'es' ? original.ph[key] : (dict[current][key] ?? original.ph[key]);
    });
  }

  window.BV_I18N = { apply, t };
})();
