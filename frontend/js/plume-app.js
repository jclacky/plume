(function(){
const D=window.PLUME,$=s=>document.querySelector(s);
const icons=()=>window.lucide&&lucide.createIcons();
let subj="ma",fiche=null,quiz={step:"intro",sel:["fr"]};

function chapState(s,i){const n=s.ch.length;const done=Math.floor(n*s.p/100);return i<done?"done":i===done&&s.p>0?"now":"";}

function renderDash(){
 $("#pillars").innerHTML=D.pillars.map(([n,v])=>`<div class="bar"><span>${n}<b>${v} %</b></span><div class="progress ${n==="Oral"||n==="Registres"?"progress-accent":""}"><i style="--v:${v}%"></i></div></div>`).join("");
 $("#subj-mini").innerHTML=D.subjects.map(s=>`<div class="subj-row" data-s="${s.id}"><span class="dot" style="background:${s.bg};color:${s.fg}"><i data-lucide="${s.icon}"></i></span><div style="display:grid;gap:6px">${s.name}<div class="progress progress-thin progress-aqua"><i style="--v:${s.p}%"></i></div></div><b class="num" style="text-align:right;font-weight:600">${s.p} %</b></div>`).join("");
 document.querySelectorAll(".subj-row").forEach(r=>r.onclick=()=>{subj=r.dataset.s;location.hash="matieres";});
}

function renderSubj(){
 $("#tiles").innerHTML=D.subjects.map(s=>`<button class="tile" aria-pressed="${s.id===subj}" data-s="${s.id}" style="background:${s.bg};color:${s.fg}"><i data-lucide="${s.icon}"></i><div><b>${s.name}</b><br><small>${s.hours}</small></div></button>`).join("");
 document.querySelectorAll(".tile").forEach(t=>t.onclick=()=>{subj=t.dataset.s;renderSubj();icons();});
 const s=D.subjects.find(x=>x.id===subj);
 $("#d-label").innerHTML=`<span>${s.name} · ${s.ch.length||"—"} ${s.id==="fr"?"étapes":"chapitres"}</span><span>${s.ref}</span>`;
 // Les parties de chaque chapitre. Le français n'a pas de « Notes » :
 // il n'y a pas de cours de français à l'université, Plume est le cours.
 const parts=s.id==="fr"?["Cours","Fiche","Exercices","Quiz"]:["Cours","Fiche","Exercices","Notes","Quiz"];
 if(s.id==="fr"){renderEtapes();}else
 $("#chapters").innerHTML=s.ch.length?s.ch.map((c,i)=>{const st=chapState(s,i);const ok=st==="done"?parts.length:st==="now"?2:0;
  return `<div class="chap ${st}"><span class="k">${st==="done"?'<i data-lucide="check" style="width:16px;height:16px"></i>':i+1}</span><div><b>${c}</b><div class="parts">${parts.map((p,j)=>`<span class="${j<ok?"ok":""}">${p}</span>`).join("")}</div></div>${st==="now"?'<a class="btn btn-primary btn-sm" href="#accueil">Reprendre</a>':st==="done"?'<span class="tag tag-accent-2">Validé</span>':'<span class="tag tag-outline">À venir</span>'}</div>`}).join("")
  :`<div class="card" style="padding:28px"><div class="card-title">Programme à définir</div><p class="card-body">Les chapitres de culture générale seront ajoutés quand le programme sera fixé.</p></div>`;
 const done=s.ch.filter((_,i)=>chapState(s,i)==="done").length;
 $("#d-side").innerHTML=`<div class="sec" style="margin:0">Progression</div><div class="big">${s.p}<span style="font-size:28px"> %</span></div><div class="progress"><i style="--v:${s.p}%"></i></div><p style="margin:0;font-size:14px">${done} ${s.id==="fr"?"étape":"chapitre"}${done>1?"s":""} validé${s.id==="fr"?"e":""}${done>1?"s":""} sur ${s.ch.length||"—"}.${s.id==="ma"||s.id==="ph"||s.id==="ch"||s.id==="bi"?" Examen écrit en juin 2027.":""}</p>${s.id==="fr"?"":`<a class="btn btn-secondary btn-block" href="#accueil"><i data-lucide="upload"></i>Ajouter mes notes</a>`}`;
}

// Français : une carte par étape du programme, avec ses chapitres.
// Un chapitre déjà écrit (slug) s'ouvre ; les autres sont « À écrire ».
function renderEtapes(){
 $("#chapters").innerHTML=D.etapes.map((e,i)=>`<div class="chap etape ${i===0?"now":""}"><span class="k">${i+1}</span><div><b>${e.t}</b><div class="eyebrow" style="margin:2px 0 0">${e.dates} · ${e.final}</div>
 <div class="items">${e.items.map(it=>it.slug?`<a class="item on" href="#cours/${it.slug}"><span class="tag tag-neutral">${it.type}</span><span class="it">${it.t}</span><i data-lucide="arrow-right"></i></a>`:`<div class="item"><span class="tag tag-outline">${it.type}</span><span class="it">${it.t}</span><small>À écrire</small></div>`).join("")}</div></div></div>`).join("");
}

function renderMethods(){
 const box=$("#m-fiches");
 if(fiche!==null){const f=D.fiches[fiche];
  box.innerHTML=`<button class="btn btn-ghost btn-sm back" id="mback"><i data-lucide="arrow-left"></i>Toutes les fiches</button><div class="g12"><div class="c5"><div class="glow glow-dawn" style="padding:28px;min-height:240px;display:flex;flex-direction:column;gap:12px"><span class="tag tag-dark" style="align-self:flex-start">${f.time} de lecture</span><h2 style="margin:auto 0 0">${f.t}</h2><p style="margin:0">${f.d}</p></div></div><ol class="ol c7">${f.steps.map(([a,b])=>`<li><div><b>${a}</b>${b}</div></li>`).join("")}</ol></div>`;
  $("#mback").onclick=()=>{fiche=null;renderMethods();icons();};return;}
 box.innerHTML=`<div class="mgrid">${D.fiches.map((f,i)=>`<button class="mcard ${i===0?"feat glow glow-sun":""}" data-f="${i}"><span class="tag ${i===0?"tag-dark":"tag-neutral"}" style="align-self:flex-start">${f.time}</span><h4>${f.t}</h4><p>${f.d}</p></button>`).join("")}</div>`;
 document.querySelectorAll(".mcard").forEach(c=>c.onclick=()=>{fiche=+c.dataset.f;renderMethods();icons();});
}
function renderVocab(q=""){
 const n=q.trim().toLowerCase();const hl=w=>n&&w.toLowerCase().includes(n)?w.replace(new RegExp("("+n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","i"),"<mark>$1</mark>"):w;
 $("#vocab").innerHTML=D.vocab.map(v=>{const gs=v.groups.map(([g,ws])=>[g,ws.filter(w=>!n||w.toLowerCase().includes(n))]).filter(([,ws])=>ws.length);
  return `<div class="vgroup"><h5>${v.t}</h5>${gs.length?gs.map(([g,ws])=>`<div class="vsub">${g}</div><div class="chips">${ws.map(w=>`<span class="chip">${hl(w)}</span>`).join("")}</div>`).join(""):'<p class="text-muted" style="font-size:13px;margin:0">Aucun résultat.</p>'}</div>`}).join("");
}
document.querySelectorAll('input[name="mtab"]').forEach(r=>r.onchange=()=>{const v=r.value==="vocab";$("#m-vocab").hidden=!v;$("#m-fiches").hidden=v;});
$("#vsearch").oninput=e=>renderVocab(e.target.value);

const LANG=id=>id==="fr"||id==="en";
function lvl(id,ok,n){const r=n?ok/n:0;if(LANG(id))return r>=1?"B2":r>=.6?"B1":r>=.3?"A2":"A1";return r>=1?"Avancé":r>=.5?"Intermédiaire":"Bases";}
function startQuiz(sel){const T=D.tests,list=[];sel.forEach(s=>T[s].forEach((q,k)=>list.push({s,k})));quiz={step:"q",sel,list,i:0,pick:null,checked:false,by:{}};sel.forEach(s=>quiz.by[s]={ok:0,n:T[s].length});}
const sub=id=>D.subjects.find(x=>x.id===id);
function renderTest(){
 const R=$("#t-root"),T=D.tests,rr=()=>{renderTest();icons();};
 if(quiz.step==="intro"){
  const sel=quiz.sel,nq=sel.reduce((t,s)=>t+T[s].length,0);
  R.innerHTML=`<div class="head"><div><div class="eyebrow">Positionnement</div><h1>Test de niveau</h1></div></div>
<div class="glow glow-ember t-intro" style="min-height:0"><span class="tag" style="align-self:flex-start;background:var(--plume-snow);color:var(--plume-kite)">Matières au choix · environ 1 min par question</span><h2 style="max-width:18ch">Où en êtes-vous, matière par matière ?</h2><p style="max-width:52ch;margin:0;color:color-mix(in srgb,var(--plume-snow) 82%,transparent)">Le français est recommandé : c'est le socle de toutes les autres matières. Ajoutez celles que vous reprenez. Après chaque réponse, Plume explique la règle.</p></div>
<div class="sec" style="margin-top:28px">Choisissez vos matières<span>${sel.length} sur 6</span></div>
<div class="ptiles">${D.subjects.map(s=>{const t=T[s.id],on=sel.includes(s.id);return `<button class="ptile" data-p="${s.id}" aria-pressed="${on}" ${t?"":"disabled"} style="${on?`background:${s.bg};color:${s.fg}`:""}"><span class="ck"><i data-lucide="check" style="width:14px;height:14px"></i></span><span class="ic" style="background:${s.bg};color:${s.fg}"><i data-lucide="${s.icon}"></i></span><div><b>${s.name}</b><small>${t?`${t.length} questions · ${LANG(s.id)?"CECRL":"par chapitre"}`:"Bientôt"}</small></div></button>`}).join("")}</div>
<div class="t-bar"><span><b style="font-weight:600">${nq} questions</b> · environ ${nq} min · ${sel.map(x=>sub(x).name).join(", ")||"aucune matière"}</span><button class="btn btn-primary" id="tgo" ${sel.length?"":"disabled"}>Commencer le test<i data-lucide="arrow-right"></i></button></div>`;
  document.querySelectorAll(".ptile").forEach(b=>b.onclick=()=>{const id=b.dataset.p;quiz.sel=sel.includes(id)?sel.filter(x=>x!==id):D.subjects.map(x=>x.id).filter(x=>x===id||sel.includes(x));rr();});
  $("#tgo").onclick=()=>{startQuiz(quiz.sel);rr();};return;}
 if(quiz.step==="q"){const it=quiz.list[quiz.i],q=T[it.s][it.k],S=sub(it.s),ok=quiz.pick===q.a,N=quiz.list.length;
  const cur=quiz.sel.indexOf(it.s);
  R.innerHTML=`<div class="quiz"><div class="q-top"><button class="btn btn-ghost btn-icon btn-sm" id="tquit" aria-label="Quitter"><i data-lucide="x"></i></button><div class="progress progress-accent"><i style="--v:${(quiz.i+(quiz.checked?1:0))/N*100}%"></i></div><span class="num" style="font-size:13px">${quiz.i+1} / ${N}</span></div>
${quiz.sel.length>1?`<div class="substep">${quiz.sel.map((x,j)=>`<span class="${j<cur?"ok":j===cur?"on":""}">${sub(x).name}</span>`).join("")}</div>`:""}
<div style="display:flex;gap:6px;flex-wrap:wrap"><span class="tag" style="background:${S.bg};color:${S.fg}">${S.name}</span><span class="tag tag-neutral">${q.part}</span><span class="tag tag-outline">Question ${it.k+1} / ${T[it.s].length}</span></div><div class="q-prompt">${q.q}</div><div class="q-opts">${q.o.map((o,j)=>{let st="";if(quiz.checked){if(j===q.a)st="border-color:var(--color-accent-2-600);background:var(--color-accent-2-100)";else if(j===quiz.pick)st="border-color:var(--plume-orange);background:var(--color-accent-100)";}
   return `<button class="choice" data-o="${j}" aria-pressed="${quiz.pick===j}" ${quiz.checked?"disabled":""} style="${st}"><span class="key">${"ABCD"[j]}</span>${o}</button>`}).join("")}</div>${quiz.checked?`<div class="block ${ok?"block-aqua":"block-mist"}" style="margin-bottom:20px"><b style="display:block;margin-bottom:4px">${ok?"Juste.":"Pas tout à fait."}</b><span style="font-size:14px">${q.why}</span></div>`:""}<div class="q-foot"><span></span>${quiz.checked?`<button class="btn btn-dark" id="tnext">${quiz.i<N-1?(quiz.list[quiz.i+1].s!==it.s?`Passer à : ${sub(quiz.list[quiz.i+1].s).name}`:"Question suivante"):"Voir mes résultats"}<i data-lucide="arrow-right"></i></button>`:`<button class="btn btn-primary" id="tcheck" ${quiz.pick===null?"disabled":""}>Valider</button>`}</div></div>`;
  document.querySelectorAll(".choice").forEach(b=>b.onclick=()=>{quiz.pick=+b.dataset.o;rr();});
  $("#tquit").onclick=()=>{quiz={step:"intro",sel:quiz.sel};rr();};
  if($("#tcheck"))$("#tcheck").onclick=()=>{quiz.checked=true;if(ok)quiz.by[it.s].ok++;rr();};
  if($("#tnext"))$("#tnext").onclick=()=>{if(quiz.i<N-1){quiz.i++;quiz.pick=null;quiz.checked=false;}else quiz.step="res";rr();};return;}
 const by=quiz.by,sel=quiz.sel,tot=sel.reduce((t,s)=>t+by[s].ok,0),N=sel.reduce((t,s)=>t+by[s].n,0);
 const main=sel.includes("fr")?"fr":sel[0],ML=lvl(main,by[main].ok,by[main].n);
 const ratio=s=>by[s].ok/by[s].n,min=Math.min(...sel.map(ratio)),weak=sel.filter(s=>ratio(s)===min);
 R.innerHTML=`<div class="head"><div><div class="eyebrow">Résultat · ${sel.length} matière${sel.length>1?"s":""}</div><h1>Vos niveaux</h1></div><button class="btn btn-secondary" id="tagain"><i data-lucide="rotate-ccw"></i>Refaire le test</button></div>
<div class="result"><div class="glow glow-sun res-hero"><span class="tag tag-dark" style="align-self:flex-start">${tot} / ${N} réponses justes</span><div style="margin-top:auto;font-size:18px;font-weight:600">${sub(main).name}</div><div class="level" style="${ML.length>3?"font-size:72px;letter-spacing:-0.045em":""}">${ML}</div><p style="margin:0;max-width:38ch">${LANG(main)?"Niveau estimé sur l'échelle CECRL. Le test complet, avec l'écrit et l'oral, affinera ce résultat.":"Positionnement estimé sur le programme. Plume vous fait commencer au bon chapitre."}</p></div>
<div class="card" style="padding:24px;gap:16px"><div class="sec" style="margin:0">Par matière</div>${sel.map(s=>{const S=sub(s),r=ratio(s);return `<div class="srow"><span class="dot" style="width:32px;height:32px;border-radius:50%;display:grid;place-items:center;background:${S.bg};color:${S.fg}"><i data-lucide="${S.icon}" style="width:15px;height:15px"></i></span><div style="display:grid;gap:6px;font-size:14px"><span style="display:flex;justify-content:space-between">${S.name}<span class="num text-muted">${by[s].ok} / ${by[s].n}</span></span><div class="progress progress-thin ${r>=.6?"progress-aqua":"progress-accent"}"><i style="--v:${Math.max(r*100,6)}%"></i></div></div><span class="tag ${r>=.6?"tag-accent-2":"tag-accent"}">${lvl(s,by[s].ok,by[s].n)}</span></div>`}).join("")}<div class="hr" style="margin:4px 0"></div><div class="sec" style="margin:0">On commence par</div><div class="chips">${weak.map(s=>`<span class="chip">${sub(s).name}</span>`).join("")}</div><a class="btn btn-primary" href="#accueil" style="align-self:flex-start">Construire mon programme<i data-lucide="arrow-right"></i></a></div></div>`;
 $("#tagain").onclick=()=>{quiz={step:"intro",sel};rr();};
}

// ---------- Écran d'un chapitre ----------
// Le chapitre est un fichier Markdown de base-connaissances, découpé par titres « ## ».
let chap={slug:null,secs:{},tab:"Cours",mode:"oral",rep:{}};
const md=t=>window.marked?marked.parse(t,{breaks:true}):`<pre>${t}</pre>`;
function decouper(texte){
 const sans=texte.replace(/^---[\s\S]*?---\s*/,""),secs={};let titre="_";
 sans.split("\n").forEach(l=>{const m=l.match(/^## (.+)/);if(m){titre=m[1].trim();secs[titre]="";}else secs[titre]=(secs[titre]||"")+l+"\n";});
 return {titre:(sans.match(/^# (.+)/m)||[,""])[1],secs};
}
// Le quiz du fichier : « 1. question », puis « - a) choix », la bonne réponse marquée ✔, puis « - Pourquoi : … »
function lireQuiz(t){
 return t.split(/\n(?=\d+\. )/).map(b=>b.trim()).filter(b=>/^\d+\. /.test(b)).map(b=>{
  const l=b.split("\n").map(x=>x.trim());const q={q:l[0].replace(/^\d+\.\s*/,""),o:[],a:0,why:""};
  l.slice(1).forEach(x=>{const m=x.match(/^- [a-d]\)\s*(.+)/);if(m){if(m[1].includes("✔"))q.a=q.o.length;q.o.push(m[1].replace(/\*\*/g,"").replace("✔","").trim());}
   const w=x.match(/^- Pourquoi\s*:\s*(.+)/);if(w)q.why=w[1];});return q;});
}
function lireDialogue(){
 const t=chap.secs["Cours oral"]||"";return t.split("\n").filter(l=>/^>\s*\*\*/.test(l)).map(l=>l.replace(/^>\s*\*\*[^*]+\*\*\s*:\s*/,"").replace(/[*_]/g,""));
}
function ecouter(){
 if(!("speechSynthesis" in window))return alert("Votre navigateur ne sait pas lire à voix haute.");
 speechSynthesis.cancel();const voix=speechSynthesis.getVoices().filter(v=>v.lang.startsWith("fr"));
 lireDialogue().forEach((phrase,i)=>{const u=new SpeechSynthesisUtterance(phrase);u.lang="fr-FR";u.rate=.95;if(voix.length)u.voice=voix[i%Math.min(voix.length,2)];speechSynthesis.speak(u);});
}
async function ouvrirChapitre(slug){
 if(chap.slug!==slug){
  $("#c-root").innerHTML='<p class="text-muted">Chargement du chapitre…</p>';
  try{const r=await fetch("contenu/grammaire/"+slug+".md");if(!r.ok)throw 0;const d=decouper(await r.text());chap={slug,titre:d.titre,secs:d.secs,tab:"Cours",mode:"oral",rep:{}};}
  catch(e){$("#c-root").innerHTML='<p>Ce chapitre n\'est pas disponible hors ligne. Reconnectez-vous puis réessayez.</p>';return;}
 }
 renderChapitre();icons();
}
function renderChapitre(){
 const C=$("#c-root"),tabs=["Cours","Fiche","Exercices","Quiz"],rr=()=>{renderChapitre();icons();};
 let corps="";
 if(chap.tab==="Cours"){
  corps=`<div class="seg" role="radiogroup" style="margin-bottom:20px"><label class="seg-opt"><input type="radio" name="cmode" value="oral" ${chap.mode==="oral"?"checked":""}>Cours oral</label><label class="seg-opt"><input type="radio" name="cmode" value="ecrit" ${chap.mode==="ecrit"?"checked":""}>Cours écrit</label></div>`+
  (chap.mode==="oral"?`<button class="btn btn-dark btn-sm" id="listen" style="margin-bottom:16px"><i data-lucide="volume-2"></i>Écouter le dialogue</button><div class="md">${md(chap.secs["Cours oral"]||"")}</div>`:`<div class="md">${md(chap.secs["Cours écrit"]||"")}</div>`);
 }else if(chap.tab==="Fiche"){corps=`<div class="md block block-mist">${md(chap.secs["Fiche"]||"")}</div>`;}
 else if(chap.tab==="Exercices"){
  // Le corrigé est caché : on cherche d'abord, on vérifie ensuite.
  const [ex,cor]=(chap.secs["Exercices"]||"").split(/^### Corrigé\s*$/m);
  corps=`<div class="md">${md(ex)}</div>${cor?`<details class="corrige"><summary>Voir le corrigé</summary><div class="md">${md(cor)}</div></details>`:""}`;
 }else{
  const Q=lireQuiz(chap.secs["Quiz"]||"");
  corps=`<div class="quiz">${Q.map((q,i)=>{const r=chap.rep[i];return `<div style="margin-bottom:28px"><div class="sec" style="margin-bottom:6px">Question ${i+1} / ${Q.length}</div><div class="q-prompt" style="font-size:20px;margin:0 0 14px">${md(q.q).replace(/<\/?p>/g,"")}</div><div class="q-opts" style="margin-bottom:12px">${q.o.map((o,j)=>{let st="";if(r!==undefined){if(j===q.a)st="border-color:var(--color-accent-2-600);background:var(--color-accent-2-100)";else if(j===r)st="border-color:var(--plume-orange);background:var(--color-accent-100)";}
   return `<button class="choice" data-q="${i}" data-o="${j}" ${r!==undefined?"disabled":""} style="${st}"><span class="key">${"ABCD"[j]}</span>${o}</button>`}).join("")}</div>${r!==undefined?`<div class="block ${r===q.a?"block-aqua":"block-mist"}"><b style="display:block;margin-bottom:4px">${r===q.a?"Juste.":"Pas tout à fait."}</b><span style="font-size:14px">${md(q.why).replace(/<\/?p>/g,"")}</span></div>`:""}</div>`}).join("")}
  ${Object.keys(chap.rep).length===Q.length&&Q.length?`<div class="t-bar"><span><b style="font-weight:600">${Q.filter((q,i)=>chap.rep[i]===q.a).length} / ${Q.length}</b> bonnes réponses</span><button class="btn btn-secondary" id="qagain"><i data-lucide="rotate-ccw"></i>Recommencer</button></div>`:""}</div>`;
 }
 C.innerHTML=`<a class="btn btn-ghost btn-sm back" href="#matieres/fr"><i data-lucide="arrow-left"></i>Français</a>
<div class="head"><div><div class="eyebrow">Français · Grammaire</div><h1>${chap.titre}</h1></div></div>
<div class="ctabs" role="tablist">${tabs.map(t=>`<button role="tab" class="ctab" aria-selected="${chap.tab===t}" data-t="${t}">${t}</button>`).join("")}</div>${corps}`;
 C.querySelectorAll(".ctab").forEach(b=>b.onclick=()=>{chap.tab=b.dataset.t;rr();});
 C.querySelectorAll('input[name="cmode"]').forEach(r=>r.onchange=()=>{chap.mode=r.value;rr();});
 C.querySelectorAll(".choice[data-q]").forEach(b=>b.onclick=()=>{chap.rep[+b.dataset.q]=+b.dataset.o;rr();});
 if($("#listen"))$("#listen").onclick=ecouter;
 if($("#qagain"))$("#qagain").onclick=()=>{chap.rep={};rr();};
}

function route(){
 const [h,sub]=(location.hash||"#accueil").slice(1).split("/");
 if(h==="methodes"&&sub){if(sub==="vocab"){const r=document.querySelector('input[name="mtab"][value="vocab"]');r.checked=true;r.onchange();}else if(sub.startsWith("fiche")){fiche=+sub.slice(5)||0;renderMethods();}}
 if(h==="test"&&sub){if(sub==="q"){startQuiz(["fr","en","ma"]);quiz.pick=1;quiz.checked=true;quiz.by.fr.ok=1;}else if(sub==="res"){startQuiz(["fr","en","ma","ph","ch","bi"]);quiz.step="res";[["fr",3],["en",2],["ma",1],["ph",2],["ch",3],["bi",1]].forEach(([s,v])=>quiz.by[s].ok=v);}else if(sub==="all"){quiz={step:"intro",sel:["fr","en","ma","ph","ch","bi"]};}renderTest();}
 if(h==="matieres"&&sub)subj=sub;if(h==="cours"&&sub)ouvrirChapitre(sub);const id=["accueil","matieres","methodes","test","cours"].includes(h)?h:"accueil";
 document.querySelectorAll(".screen").forEach(s=>s.classList.toggle("on",s.id==="s-"+id));
 const nav=id==="cours"?"matieres":id;document.querySelectorAll("[data-nav]").forEach(a=>a.dataset.nav===nav?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current"));
 if(id==="matieres")renderSubj();if(id==="test"&&!document.querySelector("#t-root").innerHTML)renderTest();
 window.scrollTo(0,0);icons();
}
renderDash();renderSubj();renderMethods();renderVocab();renderTest();
window.addEventListener("hashchange",route);route();
})();
