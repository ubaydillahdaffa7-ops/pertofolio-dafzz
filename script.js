const defaults={
 name:"Daffa Ubaydillah",tag:"Kreator • Pelajar • Freelancer",
 about:"Halo, saya Daffa Ubaydillah. Selamat datang di portfolio pribadi saya. Di sini kamu bisa mengenal saya, melihat foto, menemukan tautan penting, dan menjelajahi proyek yang pernah saya buat.",
 heroImage:"images/hero.jpg",
 links:[{title:"YouTube",desc:"Ikuti aktivitas saya",url:"https://youtube.com/@KINGDAFFZ-n3x",symbol:"◎"},{title:"TikTok",desc:"Video dan konten saya",url:"https://www.tiktok.com/@daffaubaydillah95",symbol:"♪"},{title:"WhatsApp",desc:"Hubungi saya",url:"https://wa.me/6285151833180",symbol:"✆"}],
 photos:["images/galeri-1.jpg","images/galeri-2.jpg","images/galeri-3.jpg"],
 projects:[{title:"Belajar SI",desc:"Proyek website pembelajaran Sistem Informasi.",category:"WEB",image:"images/proyek-1.jpg",url:"https://belajar-si.onrender.com"},{title:"My Life Dafzz",desc:"Website personal tentang kehidupan dan aktivitas saya.",category:"PERSONAL",image:"images/proyek-2.jpg",url:"https://my-life-dafzz.onrender.com"},{title:"Hollow Dafzz",desc:"Proyek kreatif digital karya saya.",category:"CREATIVE",image:"images/proyek-3.jpg",url:"https://hollow-dafzz.onrender.com"}]
};
let data;try{data=JSON.parse(localStorage.getItem('myPortfolio'))||structuredClone(defaults)}catch(e){data=JSON.parse(JSON.stringify(defaults))}
const $=s=>document.querySelector(s);
function persist(){localStorage.setItem('myPortfolio',JSON.stringify(data));render();toast('Perubahan berhasil disimpan di perangkat ini.')}
function safe(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function render(){
 $('#heroName').textContent=data.name;$('#aboutName').textContent=data.name;$('#heroTag').textContent=data.tag;$('#aboutText').textContent=data.about;$('#heroImage').src=data.heroImage;$('#year').textContent=new Date().getFullYear();
 $('#linkList').innerHTML=data.links.map(x=>`<a class="link-card" href="${safe(x.url)}" target="_blank" rel="noopener"><span class="symbol">${safe(x.symbol||'↗')}</span><span class="arrow">↗</span><h3>${safe(x.title)}</h3><p>${safe(x.desc)}</p></a>`).join('');
 $('#photoList').innerHTML=data.photos.map((x,i)=>`<div class="photo-card"><img src="${safe(x)}" alt="Foto ${i+1}" loading="lazy"></div>`).join('');
 $('#projectList').innerHTML=data.projects.map(x=>`<a class="project-card" href="${safe(x.url||'#')}" target="_blank" rel="noopener"><img src="${safe(x.image)}" alt="${safe(x.title)}" loading="lazy"><div class="project-info"><small>${safe(x.category)}</small><h3>${safe(x.title)}</h3><p>${safe(x.desc)}</p></div></a>`).join('');
}
function toast(s){let t=$('#toast');t.textContent=s;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2500)}
let current='';
function field(label,value,key,type='text'){return `<div class="field"><label>${label}</label><input type="${type}" data-key="${key}" value="${safe(value||'')}"></div>`}
function area(label,value,key){return `<div class="field"><label>${label}</label><textarea data-key="${key}">${safe(value||'')}</textarea></div>`}
function itemEditor(arr,type){return arr.map((x,i)=>`<div class="editor-item" data-index="${i}">${type==='links'?field('Nama link',x.title,'title')+field('Deskripsi',x.desc,'desc')+field('Alamat link (URL)',x.url,'url')+field('Simbol',x.symbol,'symbol'):type==='projects'?field('Nama proyek',x.title,'title')+field('Kategori',x.category,'category')+area('Deskripsi',x.desc,'desc')+field('Link proyek',x.url,'url')+field('URL gambar',x.image,'image'):field('URL foto',x,'photo')}<button type="button" class="remove-item">Hapus</button></div>`).join('')}
function openEditor(type){
 current=type;let html='',title='';
 if(type==='profile'){title='Edit Profil';html=field('Nama kamu',data.name,'name')+field('Tulisan singkat',data.tag,'tag')+area('Tentang saya',data.about,'about')+field('URL foto utama',data.heroImage,'heroImage')+`<div class="field"><label>Atau pilih foto dari HP</label><input type="file" id="heroUpload" accept="image/*"></div>`}
 if(type==='links'){title='Ubah Link';html=itemEditor(data.links,'links')+`<button class="add-btn" id="addItem">＋ Tambah Link</button>`}
 if(type==='photos'){title='Ubah Foto';html=`<div class="field"><label>Pilih foto dari galeri HP</label><input type="file" id="photoUpload" accept="image/*" multiple></div>`+itemEditor(data.photos,'photos')+`<button class="add-btn" id="addItem">＋ Tambah URL Foto</button>`}
 if(type==='projects'){title='Ubah Proyek';html=itemEditor(data.projects,'projects')+`<button class="add-btn" id="addItem">＋ Tambah Proyek</button>`}
 $('#editorTitle').textContent=title;$('#editorBody').innerHTML=html;$('#editor').classList.add('open');$('#editor').setAttribute('aria-hidden','false');
 $('#addItem')?.addEventListener('click',()=>{if(type==='links')data.links.push({title:'Link baru',desc:'Deskripsi link',url:'https://',symbol:'↗'});if(type==='photos')data.photos.push('https://');if(type==='projects')data.projects.push({title:'Proyek baru',desc:'Deskripsi proyek',category:'PROJECT',image:'https://',url:'#'});openEditor(type)});
 $('#editorBody').querySelectorAll('.remove-item').forEach(b=>b.addEventListener('click',()=>{let i=Number(b.closest('.editor-item').dataset.index);if(type==='links')data.links.splice(i,1);if(type==='photos')data.photos.splice(i,1);if(type==='projects')data.projects.splice(i,1);openEditor(type)}));
}
function close(){ $('#editor').classList.remove('open');$('#editor').setAttribute('aria-hidden','true')}
$('#editToggle').onclick=()=>openEditor('profile');
document.querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>openEditor(b.dataset.edit));
$('#closeEditor').onclick=$('#cancelEdit').onclick=close;
$('#editor').addEventListener('click',e=>{if(e.target===$('#editor'))close()});
$('#saveEdit').onclick=async()=>{
 const body=$('#editorBody');
 if(current==='profile'){body.querySelectorAll('[data-key]').forEach(el=>data[el.dataset.key]=el.value);let f=$('#heroUpload')?.files[0];if(f)data.heroImage=await fileToData(f)}
 if(current==='links'||current==='projects'){body.querySelectorAll('.editor-item').forEach(el=>{let i=+el.dataset.index;let obj=current==='links'?data.links[i]:data.projects[i];el.querySelectorAll('[data-key]').forEach(inp=>obj[inp.dataset.key]=inp.value)})}
 if(current==='photos'){body.querySelectorAll('.editor-item').forEach(el=>{let i=+el.dataset.index;data.photos[i]=el.querySelector('[data-key]').value});let fs=[...($('#photoUpload')?.files||[])];for(let f of fs)data.photos.push(await fileToData(f))}
 persist();close();
};
function fileToData(file){return new Promise((resolve,reject)=>{let r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file)})}
render();