(function(){
const SYLL={
  "Maths": {
    "Main": {
      "Sets, Relations & Functions": [
        "Sets and their representations",
        "Types of relations",
        "Composition of functions"
      ],
      "Complex Numbers": [
        "Complex arithmetic",
        "Modulus and conjugate",
        "Polar form"
      ],
      "Quadratic Equations & Expressions": [
        "Roots of quadratic",
        "Nature of roots",
        "Equations reducible to quadratic"
      ],
      "Sequence and Series": [
        "A.P., G.P.",
        "Sum of series",
        "Arithmetic Mean, Geometric Mean"
      ],
      "Trigonometry": [
        "Angles, identities",
        "General solutions",
        "Properties of triangles"
      ],
      "Coordinate Geometry": [
        "Pair of straight lines",
        "Circles",
        "Parabola, Ellipse, Hyperbola"
      ],
      "Vectors & 3D": [
        "Vector algebra",
        "Scalar and vector product",
        "Planes and lines in 3D"
      ],
      "Differential Calculus": [
        "Limits and continuity",
        "Derivatives",
        "Applications of derivatives"
      ],
      "Integral Calculus": [
        "Indefinite integration",
        "Definite integrals",
        "Application of integrals"
      ],
      "Matrices & Determinants": [
        "Determinants properties",
        "Inverse of matrix",
        "Applications"
      ],
      "Probability & Statistics": [
        "Probability rules",
        "Random variables",
        "Measures of central tendency"
      ]
    },
    "Advanced": {
      "Algebra Advanced": [
        "Inequalities",
        "Theory of equations",
        "Advanced sequence problems"
      ],
      "Complex Numbers Advanced": [
        "Roots of unity",
        "Advanced transformations"
      ],
      "Calculus Advanced": [
        "Multivariable calculus",
        "Multiple integrals",
        "Vector calculus basics"
      ],
      "Coordinate Advanced": [
        "Advanced conic sections",
        "Parametric forms"
      ],
      "Linear Algebra Advanced": [
        "Eigenvalues and eigenvectors",
        "Linear transformations"
      ],
      "Misc": [
        "Inequalities and functional equations",
        "Advanced numbers"
      ]
    }
  },
  "Physics": {
    "Main": {
      "Kinematics": [
        "Motion in straight line",
        "Motion in 2D",
        "Projectile motion"
      ],
      "Laws of Motion": [
        "Newton's laws",
        "Friction",
        "Circular motion"
      ],
      "Work, Energy & Power": [
        "Work done by a force",
        "Conservation of energy",
        "Power"
      ],
      "Electrostatics": [
        "Coulomb's law",
        "Electric field and potential",
        "Capacitors"
      ],
      "Current Electricity": [
        "Ohm's law",
        "Kirchhoff's laws",
        "RC circuits"
      ],
      "Magnetism": [
        "Magnetic field",
        "Biot-Savart law",
        "Ampere's law"
      ],
      "Optics": [
        "Reflection & Refraction",
        "Lens formula",
        "Wave optics basics"
      ],
      "Modern Physics": [
        "Photoelectric effect",
        "Atomic models",
        "Nuclear physics basics"
      ]
    },
    "Advanced": {
      "Mechanics Advanced": [
        "Lagrange's equations",
        "Rigid body dynamics",
        "Non-inertial frames"
      ],
      "Electrodynamics Advanced": [
        "Maxwell's equations basics",
        "Electromagnetic waves"
      ],
      "Quantum & Modern": [
        "Schrodinger basics",
        "Atomic spectroscopy"
      ],
      "Solid State & Nuclei": [
        "Semiconductors basics",
        "Radioactivity detailed"
      ]
    }
  },
  "Chemistry": {
    "Main": {
      "Some Basic Concepts": [
        "Mole concept",
        "Stoichiometry",
        "Molarity and normality"
      ],
      "Atomic Structure": [
        "Electron configuration",
        "Quantum numbers"
      ],
      "Chemical Bonding": [
        "Ionic and covalent bonds",
        "VSEPR",
        "Hybridization"
      ],
      "States of Matter": [
        "Gases and laws",
        "Liquids and solids basics"
      ],
      "Thermodynamics": [
        "Laws of thermodynamics",
        "Enthalpy and entropy basics"
      ],
      "Equilibrium": [
        "Chemical equilibrium",
        "Ionic equilibrium",
        "pH and buffers"
      ],
      "Organic Chemistry": [
        "Basics of organic reactions",
        "Hydrocarbons",
        "Functional groups"
      ],
      "Electrochemistry": [
        "Redox reactions",
        "Galvanic cells",
        "Electrolysis"
      ]
    },
    "Advanced": {
      "Inorganic Advanced": [
        "Coordination compounds",
        "d-block and f-block elements",
        "Advanced periodicity"
      ],
      "Organic Advanced": [
        "Reaction mechanisms",
        "Stereochemistry",
        "Biomolecules basics"
      ],
      "Physical Advanced": [
        "Statistical thermodynamics basics",
        "Spectroscopy (IR, NMR basics)"
      ]
    }
  }
};
(function(){const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>Array.from((r||document).querySelectorAll(s));const save=(k,v)=>localStorage.setItem(k,JSON.stringify(v));const load=(k,fb)=>{try{return JSON.parse(localStorage.getItem(k))??fb}catch(e){return fb}};const SUBJECTS=['Maths','Physics','Chemistry'];const KEY_PREFIX='sunstrike_syllabus_v1';const SAMPLE={Maths:{Main:{Algebra:['Quadratic Equations','Sequences & Series','Binomial Theorem'],Calculus:['Limits & Continuity','Differentiation','Application of Derivatives']},Advanced:{Algebra:['Inequalities','Complex Numbers','Matrices'],Calculus:['Multivariable Calculus','Multiple Integrals','Differential Equations']}},Physics:{Main:{Mechanics:['Kinematics','Newton\'s Laws','Work & Energy'],Waves:['Simple Harmonic Motion','Sound Waves']},Advanced:{Mechanics:['Rigid Body Dynamics','Lagrangian basics'],Modern:['Radioactivity','Atomic Models']}},Chemistry:{Main:{Physical:['Stoichiometry','Thermochemistry'],Organic:['Basic Concepts','Hydrocarbons']},Advanced:{Inorganic:['Coordination Compounds','Periodic Properties'],Organic:['Reaction Mechanisms','Aromaticity']}}};function keyFor(subj){return KEY_PREFIX+'_'+subj}function ensureData(){SUBJECTS.forEach(s=>{if(!load(keyFor(s),null)){save(keyFor(s),SAMPLE[s])}})}function renderSubject(subj){const data=load(keyFor(subj),{});const container=document.createElement('div');container.className='card';const progWrap=document.createElement('div');progWrap.innerHTML=`<div class="col-head"><strong class="h1">${subj} — Syllabus</strong><div class="controls"><button data-action="markAll" class="small-btn">Mark all</button><button data-action="resetAll" class="small-btn">Reset</button></div></div><div class="progressbar"><div id="prog-${subj}" class="progress"></div></div><div class="small muted" id="stat-${subj}">0 / 0</div>`;container.appendChild(progWrap);const grid=document.createElement('div');grid.className='grid';['Main','Advanced'].forEach(col=>{const colDiv=document.createElement('div');const head=document.createElement('div');head.className='col-head';head.innerHTML=`<strong>${col}</strong>`;colDiv.appendChild(head);const topics=data[col]||{};Object.entries(topics).forEach(([chapter,subs])=>{const ch=document.createElement('div');ch.className='chapter';const id=`${subj}||${col}||${chapter}`;ch.innerHTML=`<div class="chapter-row"><div class="checkbox-large" data-id="${id}"></div><div style="flex:1"><strong>${chapter}</strong></div></div>`;const subWrap=document.createElement('div');subWrap.className='subtopics';subs.forEach((st,i)=>{const sid=`${id}||${i}`;const sdiv=document.createElement('label');sdiv.style.display='flex';sdiv.style.alignItems='center';sdiv.innerHTML=`<div class="checkbox-small" data-id="${sid}"></div><div class="small">${st}</div>`;subWrap.appendChild(sdiv)});ch.appendChild(subWrap);colDiv.appendChild(ch)});grid.appendChild(colDiv)});container.appendChild(grid);return container}function attachHandlers(root,subj){root.addEventListener('click',e=>{const cb=e.target.closest('[data-id]');if(!cb) return;const id=cb.getAttribute('data-id');toggleCheck(subj,id);renderCurrent()});root.querySelectorAll('[data-action="markAll"]').forEach(b=>b.addEventListener('click',()=>{markAll(subj,true);renderCurrent()}));root.querySelectorAll('[data-action="resetAll"]').forEach(b=>b.addEventListener('click',()=>{if(confirm('Reset all progress for '+subj+'?')){markAll(subj,false);renderCurrent()}}))}function getState(subj){return load('state_'+subj,{})}function saveState(subj,st){save('state_'+subj,st)}function toggleCheck(subj,id){const st=getState(subj);st[id]=!st[id];if(!id.match(/\|\|\d+$/)){const data=load(keyFor(subj),{});const parts=id.split('||');const col=parts[1];const chapter=parts[2];const subs=(data[col]&&data[col][chapter])||[];subs.forEach((s,i)=>{st[id+'||'+i]=st[id]})}else{const base=id.replace(/\|\|\d+$/,'');const data=load(keyFor(subj),{});const parts=base.split('||');const col=parts[1];const chapter=parts[2];const subs=(data[col]&&data[col][chapter])||[];let all=true;for(let i=0;i<subs.length;i++){if(!st[base+'||'+i]){all=false;break}}st[base]=all}saveState(subj,st)}function markAll(subj,val){const st={};const data=load(keyFor(subj),{});['Main','Advanced'].forEach(col=>{Object.entries(data[col]||{}).forEach(([ch,subs])=>{const id=`${subj}||${col}||${ch}`;st[id]=!!val;subs.forEach((s,i)=>st[id+'||'+i]=!!val)})});saveState(subj,st)}function computeProgress(subj){const data=load(keyFor(subj),{});let total=0,done=0;['Main','Advanced'].forEach(col=>{Object.entries(data[col]||{}).forEach(([ch,subs])=>{total+=subs.length+1;const id=`${subj}||${col}||${ch}`;const st=getState(subj);if(st[id])done++;subs.forEach((s,i)=>{if(st[id+'||'+i])done++})})});return{total,done}}function renderCurrent(){const sel=document.querySelector('.subtab.active').getAttribute('data-sub');const area=document.getElementById('subjectArea');area.innerHTML='';const card=renderSubject(sel);area.appendChild(card);attachHandlers(card,sel);const st=getState(sel);card.querySelectorAll('[data-id]').forEach(el=>{const id=el.getAttribute('data-id');if(st[id])el.classList.add('checked');else el.classList.remove('checked')});const p=computeProgress(sel);const pct=p.total?Math.round((p.done/p.total)*100):0;const progEl=document.getElementById('prog-'+sel);if(progEl)progEl.style.width=pct+'%';const stat=document.getElementById('stat-'+sel);if(stat)stat.textContent=p.done+' / '+p.total;const overall=SUBJECTS.map(s=>computeProgress(s)).reduce((acc,v)=>{acc.total+=v.total;acc.done+=v.done;return acc},{total:0,done:0});const gPct=overall.total?Math.round((overall.done/overall.total)*100):0;document.getElementById('status').textContent=`Overall progress: ${gPct}% • Saved locally`}function applySearch(q){q=(q||'').trim().toLowerCase();document.querySelectorAll('.chapter').forEach(ch=>{const txt=ch.textContent.toLowerCase();if(!q){ch.style.display='block';return}if(txt.indexOf(q)!==-1)ch.style.display='block';else ch.style.display='none'})}function exportAll(){const out={};SUBJECTS.forEach(s=>{out[s]={syllabus:load(keyFor(s),{}),state:getState(s)}});const blob=new Blob([JSON.stringify(out,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='sunstrike_syllabus_export.json';a.click()}function handleImport(e){const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=ev=>{try{const data=JSON.parse(ev.target.result);SUBJECTS.forEach(s=>{if(data[s]&&data[s].syllabus)save(keyFor(s),data[s].syllabus);if(data[s]&&data[s].state)saveState(s,data[s].state)});alert('Import OK — reloading');location.reload()}catch(err){alert('Invalid file')}};r.readAsText(f)}function toggleTheme(){document.documentElement.classList.toggle('light')}function initTabs(){document.querySelectorAll('.subtab').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.subtab').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderCurrent()}))}ensureData();initTabs();document.getElementById('search').addEventListener('input',e=>applySearch(e.target.value));document.getElementById('exportBtn').addEventListener('click',exportAll);document.getElementById('importBtn').addEventListener('click',()=>document.getElementById('importFile').click());document.getElementById('importFile').addEventListener('change',handleImport);document.getElementById('themeToggle').addEventListener('click',toggleTheme);renderCurrent();
})();