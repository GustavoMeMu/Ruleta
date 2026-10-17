let citasData = [
    { id: 1, titulo: "IR AL CINE", precio: 400, descripcion: "Disfrutar de una buena película en la pantalla grande con palomitas y bebidas.", activa: true },
    { id: 2, titulo: "SALIR A COMER", precio: 500, descripcion: "Probar un nuevo restaurante o platillo juntos en una comida especial.", activa: true },
    { id: 3, titulo: "IR AL PARQUE", precio: 0, descripcion: "Caminar al aire libre, disfrutar de la naturaleza y platicar tranquilamente.", activa: true },
    { id: 4, titulo: "DIA DE PICNIC", precio: 400, descripcion: "Preparar sándwiches, fruta y mantita para pasar la tarde sobre el pasto.", activa: true },
    { id: 5, titulo: "CENAR EN UN RESTAURANTE BONITO", precio: 700, descripcion: "Una velada romántica con luz de velas y platillos gourmet.", activa: true },
    { id: 6, titulo: "VIAJE FUERA DE LA CIUDAD", precio: 3500, descripcion: "Escape de fin de semana para conocer un lugar nuevo y desconectarse.", activa: true },
    { id: 7, titulo: "IR A UN MUSEO", precio: 150, descripcion: "Explorar exposiciones de arte, historia o ciencia y aprender juntos.", activa: true },
    { id: 8, titulo: "PEDIR CENA A DOMICILIO", precio: 350, descripcion: "Ordenar comida favorita y disfrutar una cena relajada en casa.", activa: true },
    { id: 9, titulo: "ARMAR UN ROMPECABEZAS", precio: 250, descripcion: "Reto de paciencia y equipo para completar una gran imagen pieza por pieza.", activa: true },
    { id: 10, titulo: "PREPARAR UN POSTRE", precio: 200, descripcion: "Hornear pastel, brownies o galletas endulzando el momento en la cocina.", activa: true },
    { id: 11, titulo: "PINTAR UN CUADRO", precio: 300, descripcion: "Liberar el lado artístico con lienzos, pinturas y mucha creatividad.", activa: true },
    { id: 12, titulo: "IR A PATINAR", precio: 350, descripcion: "Diversión sobre ruedas en pista de hielo o patines tradicionales.", activa: true },
    { id: 13, titulo: "HACER GALLETAS", precio: 180, descripcion: "Amasar, cortar con moldes y disfrutar galletas caseras recién horneadas.", activa: true },
    { id: 14, titulo: "MARATON DE SERIES O PELICULAS", precio: 200, descripcion: "Frazadas, palomitas y maratón completo de su saga o serie favorita.", activa: true },
    { id: 15, titulo: "IR A LA PLAYA", precio: 2500, descripcion: "Escapada al mar, sentir la arena y escuchar las olas juntos.", activa: true },
    { id: 16, titulo: "IR A UN CONCIERTO", precio: 1500, descripcion: "Vibrar con música en vivo de su artista o banda favorita.", activa: true },
    { id: 17, titulo: "IR A UN MIRADOR", precio: 100, descripcion: "Admirar el paisaje urbano o natural desde lo más alto.", activa: true },
    { id: 18, titulo: "IR A UN ZOOLÓGICO", precio: 400, descripcion: "Conocer animales exóticos y caminar por las áreas naturales.", activa: true },
    { id: 19, titulo: "IR DE COMPRAS", precio: 800, descripcion: "Salida de tiendas para consentirse con alguna prenda o detalle.", activa: true },
    { id: 20, titulo: "IR A REMAR/PESCAR", precio: 600, descripcion: "Aventura acuática en bote o lago disfrutando el agua.", activa: true },
    { id: 21, titulo: "IR A UN TOUR", precio: 800, descripcion: "Visita guiada por sitios históricos o rincones turísticos de la región.", activa: true },
    { id: 22, titulo: "IR A UN CIRCO", precio: 500, descripcion: "Asombro y diversión con actos circenses, malabaristas y risas.", activa: true },
    { id: 23, titulo: "IR A UNA FIESTA", precio: 400, descripcion: "Bailar y festejar en una reunión con amigos o conocidos.", activa: true },
    { id: 24, titulo: "IR A UN NACIMIENTO NAVIDEÑO", precio: 100, descripcion: "Visitar exhibiciones tradicionales decembrinas llenas de luz.", activa: true },
    { id: 25, titulo: "IR POR UN HELADO", precio: 120, descripcion: "Disfrutar un cono o vaso de helado con sabores favoritos.", activa: true },
    { id: 26, titulo: "IR A UN CUMPLEAÑOS", precio: 300, descripcion: "Celebrar la vida de un ser querido con pastel y buenos deseos.", activa: true },
    { id: 27, titulo: "IR A UN BABYSHOWER", precio: 300, descripcion: "Acompañar en la dulce espera de un nuevo integrante familiar.", activa: true },
    { id: 28, titulo: "IR A UNA BODA", precio: 1000, descripcion: "Festejar el amor de una pareja cercana en su gran día.", activa: true },
    { id: 29, titulo: "IR A UNA CASCADA", precio: 400, descripcion: "Excursión a naturaleza viva para contemplar una hermosa caída de agua.", activa: true },
    { id: 30, titulo: "IR A PEDIR DULCES", precio: 150, descripcion: "Divertido recorrido de Halloween disfrazados recolectando golosinas.", activa: true },
    { id: 31, titulo: "COCINAR JUNTOS", precio: 350, descripcion: "Preparar una receta especial en pareja combinando talentos culinarios.", activa: true },
    { id: 32, titulo: "IR A ACAMPAR", precio: 600, descripcion: "Noche bajo las estrellas, fogata y dormir en tienda de campaña.", activa: true },
    { id: 33, titulo: "CAMINAR BAJO LA LLUVIA", precio: 0, descripcion: "Romántico paseo protegidos por un paraguas sintiendo el clima fresco.", activa: true },
    { id: 34, titulo: "VER UN ATARDECER", precio: 50, descripcion: "Contemplar el cielo pintado de tonos naranjas y rosas al atardecer.", activa: true },
    { id: 35, titulo: "VER UNA PELICULA", precio: 150, descripcion: "Función especial de cine en casa con buena compañía.", activa: true },
    { id: 36, titulo: "DESAYUNAR JUNTOS", precio: 300, descripcion: "Empezar el día con unos ricos chilaquiles, café y plática matutina.", activa: true },
    { id: 37, titulo: "VER UNA SERIE COMPLETA", precio: 200, descripcion: "Maratón intensivo de fin de semana descubriendo el final de una historia.", activa: true },
    { id: 38, titulo: "LEER UN LIBRO", precio: 0, descripcion: "Tarde de lectura en silencio compartido o turnándose capítulos.", activa: true },
    { id: 39, titulo: "HACER ORIGAMI", precio: 50, descripcion: "Arte en papel creando figuras divertidas con técnica japonesa.", activa: true },
    { id: 40, titulo: "PINTAR UNA PARED", precio: 400, descripcion: "Renovar un espacio del hogar dándole color y estilo juntos.", activa: true },
    { id: 41, titulo: "DIBUJAR ALGO", precio: 50, descripcion: "Retretrarse el uno al otro o plasmar paisajes en papel.", activa: true },
    { id: 42, titulo: "CULTIVAR UNA PLANTA", precio: 120, descripcion: "Sembrar una plantita y verla crecer como símbolo de su relación.", activa: true },
    { id: 43, titulo: "ARMAR UN LEGO", precio: 800, descripcion: "Construir un set complejo siguiendo instrucciones en equipo.", activa: true },
    { id: 44, titulo: "VESTIR IGUALES", precio: 0, descripcion: "Elegir un outfit coordinado ('twinning') para salir a pasear.", activa: true },
    { id: 45, titulo: "DISFRAZ EN PAREJA", precio: 350, descripcion: "Diseñar y usar disfraces complementarios para una ocasión especial.", activa: true },
    { id: 46, titulo: "JUGAR UN VIDEOJUEGO", precio: 200, descripcion: "Competir o hacer cooperativo en consola o PC.", activa: true },
    { id: 47, titulo: "ESTUDIAR JUNTOS", precio: 0, descripcion: "Apoyarse mutuamente en tareas, cursos o preparación académica.", activa: true },
    { id: 48, titulo: "HACER UNA LIMPIEZA FACIAL", precio: 200, descripcion: "Mascarillas, skincare y relajación consintiéndose mutuamente.", activa: true },
    { id: 49, titulo: "BAILAR", precio: 100, descripcion: "Poner música y bailar abrazados en la sala de casa.", activa: true },
    { id: 50, titulo: "VER UN DOCUMENTAL", precio: 100, descripcion: "Aprender sobre ciencia, naturaleza o historia con un buen documental.", activa: true },
    { id: 51, titulo: "ESCUCHAR MÚSICA", precio: 50, descripcion: "Compartir audífonos y descubrir canciones nuevas favoritos.", activa: true },
    { id: 52, titulo: "ARMAR UN MUEBLE", precio: 500, descripcion: "Herramientas en mano y manual para ensamblar un mueble nuevo.", activa: true },
    { id: 53, titulo: "VOLAR UN PAPALOTE", precio: 80, descripcion: "Lanzar el papalote al viento en un campo abierto.", activa: true },
    { id: 54, titulo: "GUERRA DE ALMOHADAS", precio: 0, descripcion: "Divertidísima batalla de plumas y risas en la cama.", activa: true },
    { id: 55, titulo: "PIJAMADA", precio: 250, descripcion: "Noche de pijamas con snacks, películas y confesiones.", activa: true },
    { id: 56, titulo: "OBSERVAR LAS ESTRELLAS", precio: 0, descripcion: "Acostarse bajo el cielo nocturno buscando constelaciones.", activa: true },
    { id: 57, titulo: "HACER UNA CITA CON TEMÁTICA", precio: 300, descripcion: "Cita ambientada en los años 80, parisina o tropical en casa.", activa: true },
    { id: 58, titulo: "PASEAR A NUESTRAS MASCOTAS", precio: 50, descripcion: "Caminata alegre con los lomitos o michis de la familia.", activa: true },
    { id: 59, titulo: "SALIR A CAMINAR", precio: 0, descripcion: "Recorrer las calles del vecindario platicando sin rumbo fijo.", activa: true },
    { id: 60, titulo: "HACER UNA FOGATA", precio: 250, descripcion: "Fuego nocturno, malvaviscos tostados y charlas íntimas.", activa: true },
    { id: 61, titulo: "HACER UNA SESIÓN DE FOTOS", precio: 100, descripcion: "Capturar momentos divertidos con poses creativas y buena iluminación.", activa: true },
    { id: 62, titulo: "HACER UNA MANUALIDAD", precio: 150, descripcion: "Crear algo único con manualidades, pegamento y paciencia.", activa: true },
    { id: 63, titulo: "JUGAR UN JUEGO DE MESA", precio: 200, descripcion: "Estrategia, risas y retos con un buen juego de mesa o cartas.", activa: true },
    { id: 64, titulo: "ESCRIBIR UN DESEO EN UN GLOBO", precio: 50, descripcion: "Dejar volar un deseo compartido hacia el cielo.", activa: true },
    { id: 65, titulo: "COMER DONAS", precio: 150, descripcion: "Visitar una repostería y probar donas de distintos sabores.", activa: true },
    { id: 66, titulo: "PEDIR PIZZA", precio: 300, descripcion: "Pizza gigante a domicilio para disfrutar sin cocinar.", activa: true },
    { id: 67, titulo: "IR A UN BUFFET", precio: 600, descripcion: "Comer de todo un poco en un buffet ilimitado.", activa: true },
    { id: 68, titulo: "HACER UNA CAJA DE AHORRO", precio: 80, descripcion: "Crear y decorar una alcancía para su próximo viaje juntos.", activa: true },
    { id: 69, titulo: "VER LA LUNA", precio: 0, descripcion: "Contemplar las fases lunares con telescopio o a simple vista.", activa: true },
    { id: 70, titulo: "HACER UNA CARTA", precio: 30, descripcion: "Escribir palabras de amor sinceras plasmadas en papel.", activa: true },
    { id: 71, titulo: "HACERNOS UN TATUAJE", precio: 1200, descripcion: "Sellar su amor en la piel con un diseño minimalista significativo.", activa: true },
    { id: 72, titulo: "IR A UN PUEBLITO MÁGICO", precio: 1500, descripcion: "Escapada de fin de semana a conocer calles empedradas y cultura.", activa: true },
    { id: 73, titulo: "IR A UN SPA", precio: 2000, descripcion: "Masajes relajantes, jacuzzi y descanso total en pareja.", activa: true },
    { id: 74, titulo: "CENA FAMILIAR", precio: 500, descripcion: "Reunión cálida compartiendo alimentos con seres queridos.", activa: true },
    { id: 75, titulo: "IR POR HAMBURGUESAS", precio: 350, descripcion: "Deliciosas hamburguesas artesanales con papas fritas.", activa: true },
    { id: 76, titulo: "UN PASEO FAMILIAR", precio: 400, descripcion: "Excursión en familia disfrutando un día de campo o ciudad.", activa: true },
    { id: 77, titulo: "VIAJAR EN AVIÓN", precio: 5000, descripcion: "Volar hacia un destino lejano para vivir una gran aventura.", activa: true },
    { id: 78, titulo: "SALIR CON AMIGOS", precio: 400, descripcion: "Noche de diversión y charlas con el círculo amistoso.", activa: true },
    { id: 79, titulo: "HACER HOT CAKES", precio: 150, descripcion: "Preparar torre de hot cakes esponjosos con miel y fruta.", activa: true },
    { id: 80, titulo: "IR A CENAR TACOS", precio: 250, descripcion: "Tacos al pastor o de suadero para cerrar la noche con sabor.", activa: true },
    { id: 81, titulo: "IR A SIX FLAGS", precio: 1800, descripcion: "Adrenalina máxima en juegos mecánicos y montañas rusas.", activa: true },
    { id: 82, titulo: "IR A UNA FERIA", precio: 400, descripcion: "Juegos de destreza, algodones de azúcar y rueda de la fortuna.", activa: true },
    { id: 83, titulo: "SACAR UN PELUCHE DE UNA MÁQUINA", precio: 100, descripcion: "Intentar atrapar el peluche perfecto en la máquina de gancho.", activa: true },
    { id: 84, titulo: "IR A UN PARQUE ACUÁTICO", precio: 900, descripcion: "Toboganes, albercas y diversión bajo el sol.", activa: true },
    { id: 85, titulo: "IR A JUGAR BOLOS", precio: 450, descripcion: "Competencia amistosa derribando pinos en la pista de boliche.", activa: true },
    { id: 86, titulo: "GUERRA DE GLOBOS DE AGUA", precio: 80, descripcion: "Divertida batalla refrescante en días calurosos.", activa: true },
    { id: 87, titulo: "PASEO NOCTURNO EN BICICLETA", precio: 50, descripcion: "Rodada en bici bajo las luces de la ciudad.", activa: true },
    { id: 88, titulo: "IR A UN PLANETARIO", precio: 150, descripcion: "Viaje por el universo y proyecciones estelares inmersivas.", activa: true },
    { id: 89, titulo: "IR A UN ACUARIO", precio: 500, descripcion: "Descubrir la vida marina, tiburones y especies acuáticas.", activa: true },
    { id: 90, titulo: "IR A UNA OBRA DE TEATRO", precio: 600, descripcion: "Disfrutar del talento escénico en una puesta en escena teatral.", activa: true },
    { id: 91, titulo: "CITA PERSONALIZADA 1", precio: 300, descripcion: "Actividad especial diseñada por ustedes mismos.", activa: true },
    { id: 92, titulo: "CITA PERSONALIZADA 2", precio: 400, descripcion: "Actividad especial diseñada por ustedes mismos.", activa: true },
    { id: 93, titulo: "CITA PERSONALIZADA 3", precio: 500, descripcion: "Actividad especial diseñada por ustedes mismos.", activa: true },
    { id: 94, titulo: "CITA PERSONALIZADA 4", precio: 250, descripcion: "Actividad especial diseñada por ustedes mismos.", activa: true },
    { id: 95, titulo: "CITA PERSONALIZADA 5", precio: 350, descripcion: "Actividad especial diseñada por ustedes mismos.", activa: true },
    { id: 96, titulo: "CITA PERSONALIZADA 6", precio: 600, descripcion: "Actividad especial diseñada por ustedes mismos.", activa: true },
    { id: 97, titulo: "CITA PERSONALIZADA 7", precio: 450, descripcion: "Actividad especial diseñada por ustedes mismos.", activa: true },
    { id: 98, titulo: "CITA PERSONALIZADA 8", precio: 200, descripcion: "Actividad especial diseñada por ustedes mismos.", activa: true },
    { id: 99, titulo: "CITA PERSONALIZADA 9", precio: 550, descripcion: "Actividad especial diseñada por ustedes mismos.", activa: true },
    { id: 100, titulo: "CITA PERSONALIZADA 10", precio: 700, descripcion: "Actividad especial diseñada por ustedes mismos.", activa: true }
];


const money = value => new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN',maximumFractionDigits:0}).format(value);
const escapeHTML = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
let currentViewMode='cards', currentFilteredCitas=[], appliedMinPrice=0, appliedMaxPrice=10000;
let startAngle=0,isSpinning=false;
const canvas=document.getElementById('wheelCanvas'),ctx=canvas.getContext('2d');
const colors=['#a83d5b','#f3c7cb','#d98699','#7d344e','#e7ad9d','#bd647d','#f7e1d9','#93516a'];
let selectedBudgetIds=new Set();

document.getElementById('login-form').addEventListener('submit',e=>{
 e.preventDefault();
 const user=document.getElementById('username').value.trim(),pass=document.getElementById('password').value;
 if(user==='Gus'&&pass==='123456'){
  document.getElementById('login-container').classList.add('hidden');
  document.getElementById('app-container').classList.remove('hidden');
  document.getElementById('login-error').classList.add('hidden');initApp();
 }else document.getElementById('login-error').classList.remove('hidden');
});
document.getElementById('logout-btn').addEventListener('click',()=>{
 document.getElementById('app-container').classList.add('hidden');
 document.getElementById('login-container').classList.remove('hidden');
 document.getElementById('username').value='';document.getElementById('password').value='';
 document.getElementById('login-error').classList.add('hidden');
});
function switchTab(tabName,button){
 document.querySelectorAll('.tab-content').forEach(el=>el.classList.add('hidden'));
 document.querySelectorAll('.tab-content').forEach(el=>el.classList.remove('active'));
 document.querySelectorAll('.tab-btn').forEach(el=>el.classList.remove('active'));
 const section=document.getElementById('tab-'+tabName);
 if(section){section.classList.remove('hidden');section.classList.add('active');}
 if(button)button.classList.add('active');
 if(tabName==='wheel')drawWheel();
 if(tabName==='catalog')renderCatalog();
 if(tabName==='budgets')renderBudgets();
}
function switchViewMode(mode){
 currentViewMode=mode;
 document.getElementById('catalog-cards-container').classList.toggle('hidden',mode!=='cards');
 document.getElementById('catalog-table-container').classList.toggle('hidden',mode!=='table');
 document.getElementById('btn-view-cards').classList.toggle('active',mode==='cards');
 document.getElementById('btn-view-table').classList.toggle('active',mode==='table');
 renderCatalog();
}
function applyBudgetFilter(){
 const minInput=document.getElementById('min-price'),maxInput=document.getElementById('max-price');
 const min=Number(minInput.value),max=Number(maxInput.value);
 if(min<0||max<0||!Number.isFinite(min)||!Number.isFinite(max)||min>max){alert('Revisa el rango: el mínimo debe ser menor o igual al máximo y ambos deben ser positivos.');return;}
 appliedMinPrice=min;appliedMaxPrice=max;updateWheelOptions();
}
function getFilteredCitas(){return citasData.filter(c=>c.activa&&c.precio>=appliedMinPrice&&c.precio<=appliedMaxPrice);}
function updateWheelOptions(){
 currentFilteredCitas=getFilteredCitas();
 const countText=document.getElementById('active-count-text'),spinBtn=document.getElementById('spin-btn');
 countText.textContent=currentFilteredCitas.length?`${currentFilteredCitas.length} ${currentFilteredCitas.length===1?'cita disponible':'citas disponibles'}`:'No hay citas en este rango';
 document.getElementById('wheel-active-summary').textContent=`${currentFilteredCitas.length} de ${citasData.filter(c=>c.activa).length} citas activas`;
 spinBtn.disabled=currentFilteredCitas.length===0||isSpinning;
 spinBtn.innerHTML=currentFilteredCitas.length===0?'<i class="fa-solid fa-circle-exclamation"></i> Ajusta tu presupuesto':(isSpinning?'<i class="fa-solid fa-spinner fa-spin"></i> Girando...':'<i class="fa-solid fa-play"></i> ¡GIRAR LA RULETA!');
 drawWheel();
}
function drawWheel(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
 const cx=canvas.width/2,cy=canvas.height/2,r=canvas.width/2-12;
 if(!currentFilteredCitas.length){ctx.fillStyle='#9b858d';ctx.font='bold 22px sans-serif';ctx.textAlign='center';ctx.fillText('Sin citas disponibles',cx,cy);return;}
 const arc=2*Math.PI/currentFilteredCitas.length;
 currentFilteredCitas.forEach((cita,i)=>{
  const angle=startAngle+i*arc;
  ctx.beginPath();ctx.moveTo(cx,cy);ctx.arc(cx,cy,r,angle,angle+arc);ctx.closePath();
  ctx.fillStyle=colors[i%colors.length];ctx.fill();ctx.strokeStyle='#fffaf8';ctx.lineWidth=2;ctx.stroke();
  if(currentFilteredCitas.length<=35){
   ctx.save();ctx.translate(cx,cy);ctx.rotate(angle+arc/2);ctx.textAlign='right';
   ctx.fillStyle=['#7b304a','#653347','#7d344e'].includes(colors[i%colors.length])?'#fff':'#57323f';
   const title=cita.titulo.length>20?cita.titulo.slice(0,18)+'…':cita.titulo;
   ctx.font=currentFilteredCitas.length>20?'600 10px sans-serif':'600 12px sans-serif';
   ctx.fillText(title,r-18,4);ctx.restore();
  }
 });
 ctx.beginPath();ctx.arc(cx,cy,31,0,Math.PI*2);ctx.fillStyle='#fffaf8';ctx.fill();ctx.strokeStyle='#f0d4db';ctx.lineWidth=5;ctx.stroke();
 ctx.fillStyle='#a83d5b';ctx.font='bold 23px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('♥',cx,cy+1);
}
function spinWheel(){
 if(isSpinning||!currentFilteredCitas.length)return;
 isSpinning=true;updateWheelOptions();
 const spins=5+Math.random()*4,extra=Math.random()*Math.PI*2,total=spins*2*Math.PI+extra;
 const duration=4300,startTime=performance.now(),initial=startAngle;
 function animate(now){
  const progress=Math.min((now-startTime)/duration,1),ease=1-Math.pow(1-progress,4);
  startAngle=initial+total*ease;drawWheel();
  if(progress<1)requestAnimationFrame(animate);
  else{isSpinning=false;updateWheelOptions();determineWinner();}
 }
 requestAnimationFrame(animate);
}
function determineWinner(){
 const arc=2*Math.PI/currentFilteredCitas.length;
 const normalized=((startAngle%(2*Math.PI))+(2*Math.PI))%(2*Math.PI);
 const pointer=(1.5*Math.PI-normalized+2*Math.PI)%(2*Math.PI);
 showWinnerModal(currentFilteredCitas[Math.floor(pointer/arc)%currentFilteredCitas.length]);
}
function showWinnerModal(winner){
 document.getElementById('winner-number').textContent=`CITA #${String(winner.id).padStart(2,'0')}`;
 document.getElementById('winner-title').textContent=winner.titulo;
 document.getElementById('winner-price').textContent=winner.precio===0?'¡Una cita gratis!':money(winner.precio);
 document.getElementById('winner-desc').textContent=winner.descripcion;
 document.getElementById('winner-modal').classList.remove('hidden');
}
function closeModal(){document.getElementById('winner-modal').classList.add('hidden');}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});

function cardMarkup(cita,forBudget=false){
 const isSelected=selectedBudgetIds.has(cita.id);
 return `<article class="cita-card ${forBudget&&isSelected?'budget-card-selected':''}">
 <div><div class="cita-card-header"><span class="cita-card-title">#${String(cita.id).padStart(2,'0')} · ${escapeHTML(cita.titulo)}</span><span class="cita-card-price">${cita.precio===0?'Gratis':money(cita.precio)}</span></div>
 <p class="cita-card-desc">${escapeHTML(cita.descripcion)}</p></div>
 <div class="cita-card-footer">${forBudget
 ? `<label class="budget-select"><input type="checkbox" ${isSelected?'checked':''} onchange="toggleBudgetSelection(${cita.id},this.checked)"> ${isSelected?'Añadida al presupuesto':'Añadir al presupuesto'}</label><span>${cita.activa?'Disponible':'Desactivada'}</span>`
 : `<span class="badge ${cita.activa?'active':'inactive'}">${cita.activa?'Activa':'Desactivada'}</span><label class="switch" title="Activar o desactivar cita"><input type="checkbox" ${cita.activa?'checked':''} aria-label="Activar ${escapeHTML(cita.titulo)}" onchange="toggleCita(${cita.id})"><span class="slider"></span></label>`}
 </div></article>`;
}
function renderCatalog(){
 const input=document.getElementById('search-input'),search=(input?.value||'').trim().toLocaleLowerCase('es');
 const filtered=citasData.filter(c=>`${c.titulo} ${c.descripcion} ${c.id}`.toLocaleLowerCase('es').includes(search));
 document.getElementById('catalog-counter').textContent=`${filtered.length} de 100 citas`;
 const cards=document.getElementById('catalog-cards-container');
 cards.innerHTML=filtered.length?filtered.map(c=>cardMarkup(c)).join(''):'<div class="empty-state"><i class="fa-solid fa-magnifying-glass"></i><strong>No encontramos citas</strong>Prueba con otro nombre o descripción.</div>';
 const tbody=document.getElementById('catalog-tbody');
 tbody.innerHTML=filtered.map(c=>`<tr><td>${c.id}</td><td><strong>${escapeHTML(c.titulo)}</strong></td><td>${money(c.precio)}</td><td>${escapeHTML(c.descripcion)}</td><td><span class="badge ${c.activa?'active':'inactive'}">${c.activa?'Activa':'Desactivada'}</span></td><td><label class="switch"><input type="checkbox" ${c.activa?'checked':''} aria-label="Activar ${escapeHTML(c.titulo)}" onchange="toggleCita(${c.id})"><span class="slider"></span></label></td></tr>`).join('');
}
function toggleCita(id){
 const cita=citasData.find(c=>c.id===id);if(!cita)return;
 cita.activa=!cita.activa;updateWheelOptions();renderCatalog();renderBudgets();
}
function toggleBudgetSelection(id,checked){
 if(checked)selectedBudgetIds.add(id);else selectedBudgetIds.delete(id);
 renderBudgets();
}
function clearBudgetSelection(){selectedBudgetIds.clear();renderBudgets();}
function renderBudgets(){
 const search=(document.getElementById('budget-search')?.value||'').trim().toLocaleLowerCase('es');
 const onlySelected=document.getElementById('budget-selected-only')?.checked||false;
 const selected=citasData.filter(c=>selectedBudgetIds.has(c.id));
 const total=selected.reduce((sum,c)=>sum+c.precio,0);
 document.getElementById('budget-total').innerHTML=`${money(total)} <small>MXN</small>`;
 document.getElementById('budget-selected-count').textContent=`${selected.length} ${selected.length===1?'seleccionada':'seleccionadas'}`;
 document.getElementById('budget-summary-copy').textContent=selected.length?`Costo estimado de ${selected.length} ${selected.length===1?'cita':'citas'} seleccionadas. Los importes son estimaciones.`:'Selecciona una o más tarjetas para sumar sus presupuestos.';
 const filtered=citasData.filter(c=>(`${c.titulo} ${c.descripcion} ${c.id}`).toLocaleLowerCase('es').includes(search)&&(!onlySelected||selectedBudgetIds.has(c.id)));
 const container=document.getElementById('budget-cards-container');
 container.innerHTML=filtered.length?filtered.map(c=>cardMarkup(c,true)).join(''):'<div class="empty-state"><i class="fa-solid fa-heart"></i><strong>No hay citas para mostrar</strong>Cambia la búsqueda o desactiva “Solo seleccionadas”.</div>';
}
function initApp(){updateWheelOptions();renderCatalog();renderBudgets();}
