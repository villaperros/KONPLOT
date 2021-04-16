




///////////////////////SERIAL PORT /////////////////////////////

const SerialPort = require('serialport')
const port = new SerialPort('COM6', { baudRate: 115200 })

///////////////////////////OBS //////////////////////////////////
// INTALAR EL PLUGGIN DE obs WEBSOCKET

const OBSWebSocket = require('obs-websocket-js');
const obs = new OBSWebSocket();
const CAM1 = "DIBUJANDO";
const CAM2 = "DETALLE DIBUJO";
const CAM3 = "DETALLE DIBUJO 2";
const CAM4 = "cellcam";
const coman2 = "coman2";
const color = "colores";



obs.connect({
	address: 'localhost:4444',
	password: '$up3rSecretP@ssw0rd'
})
	.then(() => {
		console.log(`Success! We're connected & authenticated.`);

		return obs.send('GetSceneList');
	})
	.then(data => {
		console.log(`${data.scenes.length} Available Scenes!`);
	})
	.catch(err => { // Promise convention dicates you have a catch on every chain.
		console.log(err);
	});

obs.on('SwitchScenes', data => {
	console.log(`OBS escena ${data.sceneName}`);
});

// You must add this handler to avoid uncaught exceptions.
obs.on('error', err => {
	console.error('socket error:', err);
});

 


////////////////////////TWITCH TMI /////////////////////////////

const tmi = require('tmi.js');

const client = new tmi.Client({
	connection: {
		secure: true,
		reconnect: true
	},
	channels: ['lajauria']

});

///////////////CONECTAR EL BOT A TWITCH//////////////////
client.connect();
/////////////////////////////////////////////////////////


client.on('message', (channel, tags, message, self) => {
	if ((message === 'KON' || message === 'kon')) {   //////////////////////////////// LECTURA KON?
		console.log(`${tags['display-name']}: ${message}`);
		port.write('KON\r\n')

	}
	if ((message === 'PLOT' || message === 'plot')) { //////////////////////////////// LECTURA PLOT?
		console.log(`${tags['display-name']}: ${message}`);
		port.write('PLOT\r\n')
	}
	if ((message === 'STOP' || message === 'stop')) { //////////////////////////////// LECTURA STOP?
		console.log(`${tags['display-name']}: ${message}`);
		port.write('STOP\r\n')
	}
	if ((message === 'START' || message === 'start')) { //////////////////////////////// LECTURA START?
		console.log(`${tags['display-name']}: ${message}`);
		port.write('START\r\n')
	} 

	if ((message === 'covid' || message === 'COVID')) { //////////////////////////////// LECTURA START?
		console.log(`${tags['display-name']}: ${message}`);
		port.write('COVID\r\n')
	} 

	if ((message === 'caos' || message === 'CAOS')) { //////////////////////////////// LECTURA START?
		console.log(`${tags['display-name']}: ${message}`);
		port.write('CAOS\r\n')
	} 

	if ((message === 'RIZOMA' || message === 'rizoma')) { //////////////////////////////// LECTURA START?
		console.log(`${tags['display-name']}: ${message}`);
		port.write('RIZOMA\r\n')
	} 


	if ((message === 'x' || message === 'X')) { //////////////////////////////// LECTURA START?
		console.log(`${tags['display-name']}: ${message}`);
		port.write('X\r\n')
	} 

	if ((message === 'Y' || message === 'y')) { //////////////////////////////// LECTURA START?
		console.log(`${tags['display-name']}: ${message}`);
		port.write('Y\r\n')
	} 


	////////////////// LECTURAS CON TEMPORIZADOR ////////////////////////

	if ((message === 'TONICA')) {
		console.log(`${tags['display-name']}: ${message}`);
		port.write('START\r\n')
		port.write('PLOT\r\n')
		setTimeout(myFunction, 60000)
		function myFunction() {
			port.write('KON\r\n')
			port.write('STOP\r\n')
					}
	}

	if ((message === '3RA')) {
		console.log(`${tags['display-name']}: ${message}`);
		port.write('START\r\n')
		port.write('PLOT\r\n')
		setTimeout(myFunction, 75937)
		function myFunction() {
			port.write('KON\r\n')
			port.write('STOP\r\n')


		}
	}

	if ((message === '5TA')) {
		console.log(`${tags['display-name']}: ${message}`);
		port.write('START\r\n')
		port.write('PLOT\r\n')
		setTimeout(myFunction, 90000)
		function myFunction() {
			port.write('KON\r\n')
			port.write('STOP\r\n')


		}
	}
	if ((message === '7TA')) {
		console.log(`${tags['display-name']}: ${message}`);
		port.write('START\r\n')
		port.write('PLOT\r\n')
		setTimeout(myFunction, 113906)
		function myFunction() {
			port.write('KON\r\n')
			port.write('STOP\r\n')


		}
	}

	////////////////////////CAMBIO DE CAMARA EN OBS//////////////////
	if ((message === 'SeemsGood' || message === 'cam1' || message === 'CAM1' )) {
		console.log(`${tags['display-name']}: ${message}`);
	
		obs.send('SetCurrentScene', {
		'scene-name': CAM1
	});

	}
	if ((message === 'DarkMode' || message === 'cam2' || message === 'CAM2')) {
		console.log(`${tags['display-name']}: ${message}`);

		obs.send('SetCurrentScene', {
			'scene-name': CAM2
		});

	}
	if ((message === 'PogChamp' || message === 'cam3' || message === 'CAM3')) {
		console.log(`${tags['display-name']}: ${message}`);

		obs.send('SetCurrentScene', {
			'scene-name': CAM3
		});

	}
	if ((message === 'LUL' || message === 'cam4' || message === 'CAM4')) {
		console.log(`${tags['display-name']}: ${message}`);

		obs.send('SetCurrentScene', {
			'scene-name': CAM4
		});

	}
	if ((message === 'coman2')) {
		console.log(`${tags['display-name']}: ${message}`);

		obs.send('SetCurrentScene', {
			'scene-name': coman2
		});

	}
	if ((message === 'color')) {
		console.log(`${tags['display-name']}: ${message}`);

		obs.send('SetCurrentScene', {
			'scene-name': color
		});

	}


});
