

  // toggle BTN - doze
  const toggleBtn = document.querySelector('.es-toggleBtn')
  const contentBox = document.querySelector('.es-contentBox')
  const toggleImg = document.querySelector('.es-toggleImg')

  toggleBtn.addEventListener('click', ()=>{
    contentBox.classList.toggle('activeBtn');
  });

  toggleBtn.addEventListener('click', ()=>{
    toggleImg.classList.toggle('rotate-btn');
  });


  // toggle BTN - production
  const toggleBtn2 = document.querySelector('.es-production__btn')
  const contentBox2 = document.querySelector('.es-production__box')
  const toggleImg2 = document.querySelector('#es-production__btnImg')

  toggleBtn2.addEventListener('click', ()=>{
    contentBox2.classList.toggle('activeBtn');
  });

  toggleBtn2.addEventListener('click', ()=>{
    toggleImg2.classList.toggle('rotate-btn');
  });

  // cause icons with text

  const btnStres = document.querySelector('#btnStres');
  const btnFood = document.querySelector('#btnFood');
  const btnBladder = document.querySelector('#btnBladder');
  const btnBowels = document.querySelector('#btnBowels');
  const btnPeriod = document.querySelector('#btnPeriod');
  const content = document.querySelector('#es-cause__content');
  let title = document.querySelector('.es-cause__name');
  let text = document.querySelector('.es-cause__text');
  let claims = document.querySelector('.es-cause__claims')
  const closeBtn = document.querySelector('#closeBtn');

  closeBtn.addEventListener('click', ()=>{
    content.classList.remove('es-cause__active');
  })

  btnStres.addEventListener('click', ()=>{
    title.innerText = 'STRES';
    text.innerText = `Szacuje się, że problem bólu brzucha dotyka aż 62% Polaków1. W ciągu roku odnotowuje się ponad 100 milionów różnych przypadków bólów brzucha innych niż bóle menstruacyjne, związanych między innymi z: żołądkiem, jelitami, chorobami układu moczowego. Częstą przyczyną bólu jest stres, który wpływa na pracę przewodu pokarmowego2,3. NO-SPA MAX działając rozkurczowo usuwa ból brzucha który może być wywołany stresem. 4`;
    claims.innerText= `1 https://www.no-spa.pl/przyczyny-objawy/brzuch-polakow dostęp 13.05.2022
    2  Kotarski P. Zastosowanie leków rozkurczowych w leczeniu bólów brzucha. Terapia 2014; 2(300): 46-48.
    3. Konturek P. C., Brzozowski T.,. Konturek S. J, Stress and the gut: pathophysiology, clinical consequences, diagnostic approach and treatment options, Journal of Physiology and Pharmacology 2011, 62, 6, 591-599.
    4ChPL No-Spy MAX 80 mg, zatwierdzona 04/2022
    `
    content.classList.add('es-cause__active');
  });

  btnFood.addEventListener('click', ()=>{
    title.innerText = 'JEDZENIE';
    text.innerText = `Ból brzucha po jedzeniu stanowi częstą przypadłość, która może pojawić się zarówno u dorosłych, jak i u dzieci. Dolegliwości bólowe brzucha, żołądka i jelit po posiłku mogą mieć różnorodne podłoże1. NO-SPA MAX działając rozkurczowo usuwa ból brzucha który może wystąpić po jedzeniu2. `;
    claims.innerText= `1 https://www.wapteka.pl/blog/artykul/bol-jelit-po-jedzeniu dostęp 13.05.2022
    2ChPL No-Spy MAX 80 mg, zatwierdzona 04/2022
    `
    content.classList.add('es-cause__active');
  });

  btnBladder.addEventListener('click', ()=>{
    title.innerText = 'ZAPALENIE PĘCHERZA';
    text.innerText = `Zakażenie układu moczowego jest to obecność drobnoustrojów (najczęściej bakterii) w drogach moczowych. Zakażenia układu moczowego są zdecydowanie częstsze u kobiet. Typowe objawy zapalenia pęcherza moczowego to1:
    - ból lub pieczenie podczas oddawania moczu
    - konieczność częstego lub natychmiastowego oddawania moczu
    - pobolewanie w dole brzucha.
    NO-SPA MAX poprzez działanie rozkurczowe łagodzi ból i zmniejsza bolesne parcie na mocz2.
    `;
    claims.innerText= `1 https://www.mp.pl/pacjent/nefrologia/choroby/chorobyudoroslych/51947,zapalenie-pecherza-i-inne-zakazenia-ukladu-moczowego dostęp 13.05.2022
    2ChPL No-Spy MAX 80 mg, zatwierdzona 04/2022
    `
    content.classList.add('es-cause__active');
  });

  btnBowels.addEventListener('click', ()=>{
    title.innerText = 'ZESPÓŁ JELITA DRAŻLIWEGO';
    text.innerText = `Zespół jelita drażliwego (IBS, ang. irritable bowel syndrome) jest jednym z najczęstszych zaburzeń czynnościowych jelit. Często jako główną przyczynę powstawania IBS wskazuje się niezdrowy tryb życia, nieregularne ciężkostrawne posiłki i brak aktywności fizycznej1. 36% Polaków cierpiących na IBS doświadcza bólu brzucha2. NO-SPA MAX może zostać użyta bezpiecznie i z pożądanym skutkiem w leczeniu IBS3. `;
    claims.innerText= `1 https://www.medicover.pl/o-zdrowiu/zespol-jelita-drazliwego-ibs-objawy-przyczyny-i-leczenie,176,n,192 dostęp 13.05.2022
    2Pain segmentation study for Sanofi, 04/2021
    3ChPL No-Spy MAX 80 mg, zatwierdzona 04/2022
    `
    content.classList.add('es-cause__active');
  });

  btnPeriod.addEventListener('click', ()=>{
    title.innerText = 'MIESIĄCZKA';
    text.innerText = `51% kobiet podczas miesiączki odczuwa ból brzucha1. 
    Badania szacują, że 81% miesiączkujących kobiet, odczuwających ból podczas tych trudnych dni, sięga po NO-SPĘ MAX2 Dlaczego?
     Ponieważ NO-SPA MAX działa na przyczynę bólu – skurcz mięśniówki gładkiej macicy3.
    `;
    claims.innerText= `1Pain segmentation study for Sanofi, 04/2021
    2Opinion Way, 2011, Abdominal Pain in Poland (N=1001, próba reprezentatywna względem płci, regionu oraz wieku, badanie przeprowadzone metodą CATI, w tym n=189 kobiety odczuwające ból miesiączkowy w wieku: 18-34 r.ż.) badanie w posiadaniu firmy.
    3ChPL No-Spy MAX 80 mg, zatwierdzona 04/2022

    `
    content.classList.add('es-cause__active');
  });