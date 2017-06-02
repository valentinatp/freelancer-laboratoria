(function principal(){
	var fotos = Array.from(document.getElementsByClassName("col-4"));
	var cont = document.getElementById("contenedor");
	var caja, close, icon, texto;

	fotos.forEach(function(el){
		el.addEventListener("click", function(){
			caja = document.createElement("div");
			caja.classList.add("caja-contenedora");
			caja.innerHTML = el.innerHTML;

			cont.appendChild(caja);
			cont.classList.remove("hide");

			close = document.createElement("div");
			close.classList.add("close");
			icon = document.createElement("i");
			icon.setAttribute("class", "fa fa-time fa-2x");
			icon.setAttribute("aria-hidden", "true");

			close.appendChild(icon);
			caja.appendChild(close);
			close.addEventListener("click", function(){
				caja.classList.add("hide");

		   texto = document.createElement("p");
	       textoContenido = document.createTextNode("Use this area to describe your project. The icon above is part of a free icon set by Flat Icons. On their website you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!");
	       texto.appendChild(textoContenido);
	       caja.appendChild(texto);
				
			});
		});
	});
})() 

var enviar = document.getElementById("botoncito");
enviar.addEventListener("click", function(){
	var nombre = document.getElementById("nombre").value;
	var correo = document.getElementById("email").value;
	var num = document.getElementById("numero").value;
	var mensaje = document.getElementById("msj").value;

	if(nombre == "" || nombre.length == 0){
			var span = document.createElement("span");
			var ident = document.getElementById("nombre");
			var padre = ident.parentNode;
			padre.appendChild(span);

			var contenido = document.createTextNode("Debe ingresar su nombre");
			span.appendChild(contenido);
		return span;
	}	
	if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(correo))){ 
			var span = document.createElement("span");
			var ident = document.getElementById("email");
			var padre = ident.parentNode;
			padre.appendChild(span);

			var contenido = document.createTextNode("Debe ingresar su email");
			span.appendChild(contenido);
		return span;
	}
	
	if( !(/^\d{9}$/.test(num)) ) {	
			var span = document.createElement("span");
			var ident = document.getElementById("numero");
			var padre = ident.parentNode;
			padre.appendChild(span);

			var contenido = document.createTextNode("Debe ingresar su número");
			span.appendChild(contenido);
		return span;
	}

	if(mensaje == ""){
			var span = document.createElement("span");
			var ident = document.getElementById("msj");
			var padre = ident.parentNode;
			padre.appendChild(span);

			var contenido = document.createTextNode("Debe ingresar un mensaje");
			span.appendChild(contenido);
		return span;
	}
})