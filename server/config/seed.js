/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      title: ' DevTalks ',
      info: 'Evenimentul DevTalks reprezinta o sursa de idei inovatoare in zona IT, unde participantii pot intalni experti recunoscuti pe plan local si international.',
      story: 'Pasionatii de tehnologie sunt asteptati pe 9 iunie la cea de-a treia editie a evenimentului DevTalks Bucuresti. Evenimentul din acest an va avea loc la Romexpo, pavilionul C1 si C2 unde vor fi prezenti peste 1000 de profesionisti IT. DevTalks Bucuresti este un proiect de referinta pentru industria IT, eveniment ce aduce impreuna lideri ai comunitatii IT, inovatie si fun, ingrediente cheie pentru a explora tendintele din zona Web, Mobile, BigData, Cloud Computing, dispozitive inteligente, machine learning, Augumented Reality, Virtual Reality sau Inteligenta Artificiala.Editia din acest an este construita pornind de la 5 zone de interes adresate participantilor, cu scopul de a crea un cadru potrivit pentru networking si sharing, prin care profesionistii IT pot face schimb de informatii si pot afla tendintele si ultimele trenduri tehnologice:1. Zona expozitionala – este cadrul prin care membrii companiilor partenere pot interactiona cu participantii evenimentului, isi pot prezenta portofoliile de produse, ultimele proiecte dezvoltate, dar si planurile in zona de dezvoltare. Printre companiile care au confirmat prezenta se numara: IBM, ING Bank, eMAG, Vodafone Shared Services, Accenture, Ubisoft Romania, Ymens, DB Global Technology, Bol.com, Optaros, AdsWizz, Axway, Stefanini Romania, Intralinks, Orange, EveryMatrix, Endava, Luxoft Romania, DRÄXLMAIER Group, Anritsu.2. Zona de networking – este spatiul dedicat participantilor pentru a interactiona cu profesionistii care impartasesc aceleasi puncte de interes. In acest cadru toti speakerii si participantii pot impartasi din experienta lor. De asemenea, interactiunea in mediul electronic va fi facilitata cu ajutorul aplicatiei MyCONNECTOR, aplicatie ce permite conectarea la nivel one-to-one.3. Fun Area le ofera participantiilor ocazia de a testa ultimele gadgeturi si dispozitive smart. Aceasta zona este sustinuta de compania eMAG, partener al evenimentului DevTalks Bucuresti. Cateva exemple de gadgeturi care pot fi testate in cadrul editiei din acest an sunt:BB-8 by Sphero - o replica a robotului BB-8 din Star Wars: The Force Awaken’s, care se deplaseaza exact ca in film, controlat prin telefon sau tableta;Lego Mindstorms EV3 - roboti care combina versatilitatea sistemelor de constructie LEGO cu cea mai avansata tehnologie dezvoltata vreodata;Ninebot – viitorul transportului urban, 100% eco friendly. Ninebot reprezinta urmatoarea generatie de transport personal, fiind, practic, un robot cu designului futurist sub forma unei trotinete;Dispozitivul SCIO - un scanner molecular. Acest mic scanner semnaleaza compozitia chimica exacta a alimentelor, indicand, de exemplu, aditivii pe care acestea le contin sau componenta anumitor  materialele si suprafete.Ochelari VR – care ofera participantilor posibilitatea sa experimenteze realitatea virtuala prin intermediul mai multor aplicatii dezvoltate si prezentate la DevTalks Bucuresti.4. Demo-uri live. Aceasta zona acorda oportunitatea companiilor de a oferi demonstratii live la standurile lor din cadrul evenimentului, iar participantilor posibilitatea de a interactiona „live” cu produsele si proiectele companiei.5. Zona start-upurilor reprezinta noutatea editiei din acest an. Aceasta este dezvoltata cu ajutorul comunitatii Impact HUB si are ca scop facilitarea interactiunii dintre antreprenori si participanti, respectiv posibili investitori. Aceasta zona ofera vizibilitate ideilor de business, proiectelor cu potential si ideilor inovatoare. In cadrul proiectului din Bucuresti va fi prezent un hub din Varna, Bulgaria – Beehive,  care va aduce pe scenele DevTalks cateva start-upuri din Bulgaria, care vor impartasi cu reprezentantii comunitatii din Romania experienta lor, idei si evolutia in business.',
      technology: 'java',
      video_online: 'https://www.youtube.com/embed/Bb2Taj_VdTY',
      author: 'ion',
      project_info_type: 'prototip',
      project_info_difficulty: 'Intermediate',
      project_info_estimated_time: '4 hours'
    },{
      title: ' Network',
      info: 'Build a full IPv6 network using MOMOTE Hardware running ContikiOS.',
      story: 'Contiki is open source software: Contiki can be freely used both in commercial and non-commercial systems and the full source code is available. Contiki provides powerful low-power Internet communication and supports fully standard IPv6 and IPv4, along with the recent low-power wireless standards: 6lowpan, RPL, CoAP. With Contikis ContikiMAC and sleepy routers, even wireless routers can be battery-operated.',
      technology: 'java',
      video_online: 'https://www.youtube.com/embed/Bb2Taj_VdTY',
      author: 'ion',
      project_info_type: 'pro',
      project_info_difficulty: 'Intermediate',
      project_info_estimated_time: '5 hours'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
