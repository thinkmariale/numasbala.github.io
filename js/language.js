

function changeLang(lang){
	if(lang.current == 'ES'){
		lang.setEnglish();
	}
	else if(lang.current == 'EN'){		
		lang.setSpanish();		
	}	 
	
	 $('#_home').text(lang.navBar.home);
	 $('#_music').text(lang.navBar.music);
	 $('#_about').text(lang.navBar.about);
	 $('#_video').text(lang.navBar.videos);
	 $('#_players').text(lang.navBar.players);
	 $('#_events').text(lang.navBar.events);
	 $('#_media').text(lang.navBar.media);
	 $('#_quotes').text(lang.navBar.quotes);
	 $('#_contact').text(lang.navBar.contact);
	 $('#_language').text(lang.navBar.lang);

	lang.setAbout();
	lang.setTitles();
	
	return lang;
}

function language() {
	this.navBar= {};
	this.current = 'ES';	
}

language.prototype.setEnglish = function() {
	var self = this;
	self.current = 'EN';
	self.navBar = {
		home : 'Home',
		music : 'Music',
		about : 'About',
		videos: 'Videos',
		players :'Players',
		events : 'Events',
		media : 'Media',
		quotes : 'Quotes',
		contact: 'Contact',
		lang: '[Español]'
	};
};

language.prototype.setSpanish = function() {
	var self = this;
	self.current = 'ES';
	self.navBar = {
		home : 'La Cubierta',
		music : 'Música',
		about : 'Nosotros',
		videos: 'Videos',
		players : 'Players',
		events : 'Eventos',
		media : 'Midea',
		quotes : 'Quotes',
		contact: 'Contacto',
		lang: '[English]'
	};
};

language.prototype.setLang = function(cookie){
	var name = "lang=";
    var ca = cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
			this.current = c.substring(name.length,c.length);
			changeLang(this);
			return c.substring(name.length,c.length);
		}
    }
    return "";
};


language.prototype.setTitles = function() {
	if(lang.current == 'ES'){
		$('#intro_p').html("Te invita a seguirlo en sus viajes intergalacticos");
		
		if($('#video-title')){
			$('#video-title').html("Videos");
		}
		if($('#music-title')){
			$('#music-title').html("Música");
		}
		if($('#music-title_1')){
			$('#music-title_1').html("Numasbala se construye en el 2006 liderado por Fabio Montenegro (El Capitán Placer) con el propósito de crear un vehículo transmisor capaz de comunicar ideas y emociones, poder generar preguntas y posibles respuestas a través de sonidos, letras y ritmos que contribuyan al bienestar de su público.");
		}
		if($('#music-title_2')){
			$('#music-title_2').html("<br/> Disfruta gratis nuestra colección de ritmos intergatacticos publicados!");
		}
		if($('#contact-title')){
			$('#contact-title').html("Contactanos");
		}
	}
	else {
		$('#intro_p').html("Invites you to join our intergalactic journey");
		if($('#video-title')){
			$('#video-title').html("Video");
		}
		if($('#music-title')){
			$('#music-title').html("Music");
		}
		if($('#music-title_1')){
			$('#music-title_1').html("The collection of our latest intergalactic published work.");
		}
		if($('#music-title_2')){
			$('#music-title_2').html("Enjoy our free downloads!");
		}
		if($('#contact-title')){
			$('#contact-title').html("Contact Us");
		}
		
	}
};

language.prototype.setAbout = function() {
	
	if($('#about-one')) {
		if(lang.current == 'ES'){
			$('#about-one').html("Numasbala es una nave intergaláctica conocida por su increíble fusión de sentimientos, ideas, cumbia, reggae, funk, afro-beat, champeta, gypsy y ska, conocida como “Sacudón”.");
			
			$('#about-two').html("El Capit&aacute;n");
			$('#about-three').html("La Nave");
			$('#about-two_').html("Un visitante del espacio que vino a iluminarnos con sus mensajes de amor y paz.");
			$('#about-three_').html("Una nave intergalactica que corre a la velocidad de la luz, trayendo con ella los sonidos del futuro a nuestros oidos y cuerpos. ");
		}
		else if(lang.current == 'EN'){		
			$('#about-one').html("Numasbala is an intergalactic vessel known for its incredible fusion of feelings, ideas, cumbia, reggae, funk, afro-beat, champeta, gipsy and ska, called “Sacudón”. ");
			
			$('#about-two').html("Our Captain");
			$('#about-three').html("Our Vessel");
			$('#about-two_').html("A visitor from space that came to enlight and bring messages about peace and love to the world.");
			$('#about-three_').html("A intergalactic space ship that runs at the speed of light, bringing the sound of the future to our ears and to our shaking bodies.");
		}		
	}
};
