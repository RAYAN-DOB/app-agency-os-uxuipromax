/* Agency OS — UX/UI Pro Max Concept v0.1
   Offline-first UI demonstration. No production APIs or credentials. */
(() => {
  'use strict';
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const nav = [
    { key:'overview',label:"Vue d'ensemble",icon:'grid' },
    { key:'agents',label:'Mes agents',icon:'orbit' },
    { key:'missions',label:'Missions',icon:'layers' },
    { key:'models',label:'Modèles IA',icon:'sparkles' },
    { key:'infrastructure',label:'Infrastructure',icon:'activity' },
    { key:'studio',label:'Design studio',icon:'box' },
    { key:'settings',label:'Préférences',icon:'settings' }
  ];
  const agents = [
    {id:'director',name:'Director',role:'Orchestration & décisions',desc:'Coordonne les intentions, répartit le travail et veille à la cohérence des résultats.',symbol:'✳',tone:'',status:'Prêt'},
    {id:'research',name:'Research',role:'Recherche & synthèse',desc:'Observe les tendances, recoupe les sources et transforme la recherche en connaissance.',symbol:'◈',tone:'lilac',status:'Actif'},
    {id:'design',name:'Design',role:'Direction artistique',desc:'Imagine des identités singulières et des expériences digitales attentives aux détails.',symbol:'✦',tone:'pink',status:'Actif'},
    {id:'dev',name:'Builder',role:'Développement & intégration',desc:'Donne forme aux idées : interfaces, applications et services maintenables.',symbol:'⌘',tone:'',status:'Prêt'},
    {id:'quality',name:'Quality',role:'Tests & validation',desc:'Vérifie les interactions, l’accessibilité, la performance et la qualité finale.',symbol:'✓',tone:'mint',status:'Prêt'},
    {id:'automation',name:'Automation',role:'Workflows & processus',desc:'Fluidifie les tâches répétitives et connecte les outils de votre studio.',symbol:'↗',tone:'lilac',status:'Actif'}
  ];
  const defaultMissions = [
    {id:'m-1',title:'Nouvelle identité visuelle',notes:'Moodboard et premières pistes créatives',stage:'progress',agent:'Design',category:'Branding'},
    {id:'m-2',title:'Veille des interfaces IA',notes:'Analyse des interfaces et interactions remarquables',stage:'progress',agent:'Research',category:'Research'},
    {id:'m-3',title:'Composants Liquid Glass',notes:'Navigation, boutons et micro-interactions',stage:'progress',agent:'Builder',category:'UI Design'},
    {id:'m-4',title:'Optimisation du workflow',notes:'Clarification des étapes et automatisations',stage:'todo',agent:'Director',category:'Ops'},
    {id:'m-5',title:'Audit de performance',notes:'Vérification mobile et accessibilité',stage:'todo',agent:'Quality',category:'Quality'},
    {id:'m-6',title:'Système de design v0',notes:'Tokens, atmosphères et composants de base',stage:'done',agent:'Design',category:'Design System'}
  ];
  const models = [
    {name:'Claude',desc:'Raisonnement, écriture et orchestration',symbol:'✳',state:'Exemple'},
    {name:'DeepSeek',desc:'Analyse structurée et tâches techniques',symbol:'◇',state:'Exemple'},
    {name:'Qwen local',desc:'Inférence hébergée sur votre infrastructure',symbol:'◉',state:'Exemple'},
    {name:'Gemini',desc:'Analyse et compréhension multimodale',symbol:'✦',state:'Exemple'}
  ];
  const infrastructure = [
    {name:'Compute cluster',desc:'Ressources de calcul et virtualisation',symbol:'⌘'},
    {name:'Agent runtime',desc:'Exécution des workers et orchestration',symbol:'✳'},
    {name:'Data services',desc:'Mémoire, stockage et bases de données',symbol:'◈'},
    {name:'Observability',desc:'Journalisation, mesures et supervision',symbol:'⌁'}
  ];
  const storage = {get(k){try{return localStorage.getItem(k)}catch{return null}},set(k,v){try{localStorage.setItem(k,v)}catch{}}};
  let missions = [...defaultMissions];
  try { const saved = JSON.parse(storage.get('agency-demo-missions') || '[]'); if (Array.isArray(saved)) missions = [...saved.filter(m => m && typeof m.title === 'string' && typeof m.stage === 'string').slice(0,50),...defaultMissions]; } catch { /* Storage unavailable or invalid */ }
  let filterActive = false;
  let commandSelection = 0;
  let commandTargets = [];
  let toastTimer;
  let lastFocusedElement = null;

  function icon(name) { return `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`; }
  function toast(message) { const element = $('#toast'); element.textContent = message; element.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => element.classList.remove('show'), 3800); }
  function routeTo(route) {if (!nav.some(item => item.key === route)) route='overview'; if (location.hash !== `#${route}`) location.hash=route; showPage(route);}
  function showPage(route) {
    if (!nav.some(item => item.key === route)) route='overview';
    $$('.page').forEach(page => page.classList.toggle('active',page.dataset.page===route));
    $$('[data-route]').forEach(el => { if (el.classList.contains('nav-link')) {const active=el.dataset.route===route;el.classList.toggle('active',active);if(active)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current');} });
    const match=nav.find(item=>item.key===route);$('#crumb-title').textContent=match.label;document.title=`${match.label} — Agency OS`;window.scrollTo({top:0,behavior:'instant'});
  }
  function setTheme(theme) {
    if (!['pearl','midnight','aurora'].includes(theme)) theme='pearl';
    document.body.dataset.theme=theme;
    storage.set('agency-theme',theme);
    $$('.theme-card').forEach(el=>el.classList.toggle('selected',el.dataset.setTheme===theme));
    $('#theme-select').value=theme;
    $('#theme-toggle').innerHTML=icon(theme==='midnight'?'sun':'moon');
  }
  function renderAgents() {
    const subset=agents.filter(agent=>!filterActive||agent.status==='Actif');
    $('#agent-count').textContent=`${subset.length} agent${subset.length>1?'s':''} affiché${subset.length>1?'s':''} · Données fictives`;
    $('#filter-agents').innerHTML=`${icon('sliders')} ${filterActive?'Agents actifs':'Tous les agents'}`;
    $('#agents-grid').innerHTML=subset.map(agent=>`<article class="agent-card"><div class="agent-card-head"><div class="agent-emblem ${agent.tone}">${agent.symbol}</div><span class="status-chip"><i></i>${agent.status}</span></div><h3>${agent.name}</h3><p>${agent.desc}</p><div class="agent-card-footer"><span style="color:var(--text-muted);font-size:9px">${agent.role}</span><button class="agent-open" data-agent-detail="${agent.id}">Détails ${icon('arrow')}</button></div></article>`).join('');
  }
  function renderMissions() {
    const stages=[{key:'todo',label:'À explorer'},{key:'progress',label:'En mouvement'},{key:'done',label:'Accomplies'}];
    $('#missions-count').textContent=`${missions.length} missions · Démonstration locale`;
    $('#missions-board').innerHTML=stages.map(stage=>{
      const items=missions.filter(item=>item.stage===stage.key);
      return `<div class="mission-column"><div class="mission-column-title">${stage.label}<span>${items.length}</span></div>${items.map(item=>`<article class="mission-ticket"><small>${escapeHTML(item.category || 'Nouvelle idée')}</small><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.notes || 'Une nouvelle intention à explorer.')}</p><div class="mission-ticket-bottom"><span class="ticket-avatar">${escapeHTML((item.agent||'A').slice(0,1))}</span><span>${escapeHTML(item.agent || 'Director')}</span></div></article>`).join('') || `<p class="inline-disclaimer">Un peu de calme pour l'instant.</p>`}</div>`;
    }).join('');
    const count=12+missions.filter(item=>item.id?.startsWith('custom-')).length;
    $('#metric-missions').innerHTML=`${count} <span class="metric-sub">/ ${count+6}</span>`;
  }
  function renderModels() {$('#models-grid').innerHTML=models.map(m=>`<div class="model-card"><div class="model-mark">${m.symbol}</div><div><h3>${m.name}</h3><p>${m.desc}</p></div><span class="model-state">${m.state}</span></div>`).join('');}
  function renderInfrastructure() {$('#infra-grid').innerHTML=infrastructure.map(item=>`<div class="infra-card"><div class="infra-mark">${item.symbol}</div><div><h3>${item.name}</h3><p>${item.desc}</p></div><span class="model-state">Non connecté</span></div>`).join('');}
  function renderActivity() {
    const activities=[
      {icon:'✦',tone:'',name:'Design · Une piste créative explorée',desc:'Bibliothèque de composants et interactions',time:'14:32'},
      {icon:'✓',tone:'green',name:'Quality · Contrôles terminés',desc:'Vérifications d’une interface de démonstration',time:'14:18'},
      {icon:'◈',tone:'peach',name:'Research · Références identifiées',desc:'Nouvelles sources design pour inspiration',time:'13:56'},
      {icon:'⌘',tone:'',name:'Builder · Prototype mis en forme',desc:'Interface responsive et animations',time:'13:24'}
    ];
    $('#activity-list').innerHTML=activities.map(item=>`<div class="activity-item"><div class="activity-bullet ${item.tone}">${item.icon}</div><div class="activity-desc"><strong>${item.name}</strong><small>${item.desc}</small></div><span class="activity-time">${item.time}</span></div>`).join('');
  }
  function getAgent(id) { return agents.find(agent=>agent.id===id); }
  function openMissionModal() {
    lastFocusedElement=document.activeElement;
    closeCommand(false);$('#modal-backdrop').hidden=false;document.body.style.overflow='hidden';
    setTimeout(()=>$('#mission-title').focus(),50);
  }
  function closeMissionModal(returnFocus=true) {
    $('#modal-backdrop').hidden=true;document.body.style.overflow='';$('#mission-form').reset();if(returnFocus)lastFocusedElement?.focus?.();
  }
  function renderCommands(query='') {
    const q=query.trim().toLocaleLowerCase('fr');
    commandTargets=[...nav.map(item=>({...item,type:'Page',action:()=>{closeCommand();routeTo(item.key);}})),{key:'new',label:'Créer une nouvelle mission',icon:'plus',type:'Action',action:()=>{closeCommand(false);openMissionModal();}},{key:'theme',label:'Changer de thème',icon:'moon',type:'Action',action:()=>{closeCommand();setTheme(document.body.dataset.theme==='midnight'?'pearl':'midnight');toast('Atmosphère mise à jour.');}}].filter(item=>(item.label+' '+item.type).toLocaleLowerCase('fr').includes(q));
    commandSelection=Math.max(0,Math.min(commandSelection,commandTargets.length-1));
    $('#command-results').innerHTML=commandTargets.map((item,i)=>`<button class="command-result ${commandSelection===i?'selected':''}" data-command-index="${i}">${icon(item.icon)}<span>${escapeHTML(item.label)}</span><small>${item.type}</small></button>`).join('')||'<div class="inline-disclaimer" style="padding:15px">Aucun résultat. Essayez « agents » ou « mission ».</div>';
  }
  function openCommand() {lastFocusedElement=document.activeElement;closeMissionModal(false);$('#command-backdrop').hidden=false;$('#command-input').value='';commandSelection=0;renderCommands();document.body.style.overflow='hidden';setTimeout(()=>$('#command-input').focus(),50);}
  function closeCommand(returnFocus=true) {$('#command-backdrop').hidden=true;document.body.style.overflow='';if(returnFocus)lastFocusedElement?.focus?.();}

  document.addEventListener('click',event=>{
    const route=event.target.closest('[data-route]');if(route){event.preventDefault();routeTo(route.dataset.route);}
    if(event.target.closest('[data-action="new-mission"]'))openMissionModal();
    const set=event.target.closest('[data-set-theme]');if(set)setTheme(set.dataset.setTheme);
    const agentDetail=event.target.closest('[data-agent-detail]');if(agentDetail){const agent=getAgent(agentDetail.dataset.agentDetail);if(agent)toast(`${agent.name} — ${agent.role}. Simulation : aucune commande envoyée.`);}
    const node=event.target.closest('.network-node');if(node){const agent=getAgent(node.dataset.agent);toast(agent?`${agent.name} · ${agent.role} · ${agent.status} (démo)`:'Director · Centre de coordination (démo)');}
    const command=event.target.closest('[data-command-index]');if(command){const item=commandTargets[Number(command.dataset.commandIndex)];item?.action?.();}
  });
  $('#filter-agents').addEventListener('click',()=>{filterActive=!filterActive;renderAgents();});
  $('#theme-toggle').addEventListener('click',()=>setTheme(document.body.dataset.theme==='midnight'?'pearl':'midnight'));
  $('#theme-select').addEventListener('change',event=>setTheme(event.target.value));
  $('#search-btn').addEventListener('click',openCommand);
  $('#network-details').addEventListener('click',()=>routeTo('agents'));
  $('#activity-more').addEventListener('click',()=>routeTo('missions'));
  $('#alerts-btn').addEventListener('click',()=>toast('Aucune notification réelle : interface en mode démonstration.'));
  $('#motion-switch').addEventListener('click',()=>{
    const isOn=$('#motion-switch').getAttribute('aria-checked')==='true';
    $('#motion-switch').setAttribute('aria-checked',String(!isOn));$('#motion-switch').classList.toggle('on',!isOn);
    document.body.classList.toggle('motion-off',isOn);storage.set('agency-motion',isOn?'off':'on');
  });
  $('#modal-close').addEventListener('click',()=>closeMissionModal());
  $('#modal-cancel').addEventListener('click',()=>closeMissionModal());
  $('#modal-backdrop').addEventListener('click',event=>{if(event.target.id==='modal-backdrop')closeMissionModal();});
  $('#command-backdrop').addEventListener('click',event=>{if(event.target.id==='command-backdrop')closeCommand();});
  $('#command-input').addEventListener('input',event=>{commandSelection=0;renderCommands(event.target.value);});
  $('#command-input').addEventListener('keydown',event=>{
    if(event.key==='ArrowDown'){event.preventDefault();commandSelection=Math.min(commandSelection+1,commandTargets.length-1);renderCommands(event.target.value);}
    if(event.key==='ArrowUp'){event.preventDefault();commandSelection=Math.max(0,commandSelection-1);renderCommands(event.target.value);}
    if(event.key==='Enter'){event.preventDefault();commandTargets[commandSelection]?.action?.();}
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'){if(!$('#modal-backdrop').hidden)closeMissionModal();if(!$('#command-backdrop').hidden)closeCommand();}
    if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){event.preventDefault();if($('#command-backdrop').hidden)openCommand();else closeCommand();}
  });
  $('#mission-form').addEventListener('submit',event=>{
    event.preventDefault();const title=$('#mission-title').value.trim(),notes=$('#mission-notes').value.trim();
    if(title.length<3)return;
    const created={id:`custom-${Date.now()}`,title:title.slice(0,100),notes:notes.slice(0,500),stage:'todo',agent:'Director',category:'Nouvelle mission'};
    missions.unshift(created);
    storage.set('agency-demo-missions',JSON.stringify(missions.filter(item=>String(item.id).startsWith('custom-')).slice(0,50)));
    renderMissions();closeMissionModal(false);routeTo('missions');toast('Mission ajoutée à votre démonstration locale. ✳');
  });
  const motionAllowed=storage.get('agency-motion')!=='off';
  $('#motion-switch').classList.toggle('on',motionAllowed);$('#motion-switch').setAttribute('aria-checked',String(motionAllowed));document.body.classList.toggle('motion-off',!motionAllowed);
  setTheme(storage.get('agency-theme')||'pearl');
  renderAgents();renderMissions();renderModels();renderInfrastructure();renderActivity();
  window.addEventListener('hashchange',()=>showPage(location.hash.replace(/^#/,'')||'overview'));
  showPage(location.hash.replace(/^#/,'')||'overview');
})();
