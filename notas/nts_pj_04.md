Basic Projeto

/*======================================================*/
ººº MONGODB
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
<!-- ir la la pasta de mongo -->
cd /Applications/mongodb-osx-x86_64-4.0.8/
<!-- crea una pasta por ejemplo 04merndb -->
mkdir 04merndb
<!-- entra na pasta bin -->
cd /Applications/mongodb-osx-x86_64-4.0.8/bin
/*======================================================*/
<!-- INICIOANDO E CREANDO SERVIDOR DE MONGO MONGO EM 04merndb-->
./mongod --dbpath /Applications/mongodb-osx-x86_64-4.0.8/04merndb/
/*======================================================*/
/*---------------------------*/
<!-- INICIOANDO MONGO mudando porta-->
<!-- ./mongod --dbpath /Applications/mongodb-osx-x86_64-4.0.8/nome_pasta_db/ -port 27017 -->
<!-- ./mongod --dbpath /Applications/mongodb-osx-x86_64-4.0.8/nome_pasta_db/ -port 27018 -->
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
<!-- TESTEAR MONGO E NO TERMINAL -->
cd /Applications/mongodb-osx-x86_64-4.0.8/bin 
./mongo
<!-- se mudei a porta então indoca porta -->
<!-- ./mongo --port 27018 -->
/*---------------------------*/
show databases
use tabela
db.tabela.find()
db.tabela.find().pretty()
db.clientes.count()
/*---------------------------*/ 



/*======================================================*/
ººº TERMINAL 
/*++++++++++++++++++++++++*/
<!-- RPi -->
<!-- ssh pi@192.168.1.104 -->
ssh pi@192.168.1.104
<!-- rodando no -->
http://192.168.1.104:3000/api
/*++++++++++++++++++++++++*/
sudo npm init -y

sudo npm i express mongoose cors dotenv

sudo npm i express
sudo npm i mongoose
sudo npm i cors
sudo npm i dotenv
/*++++++++++++++++++++++++*/
<!-- sudo npm i morgan -->
<!-- sudo npm i consign -->
<!-- sudo npm i dblite -->
<!-- sudo npm i express dblite consign -->
/*++++++++++++++++++++++++*/
sudo npm i nodemon -D
/*++++++++++++++++++++++++*/
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/




/*======================================================*/
ººº CURL
/*++++++++++++++++++++++++*/
get
curl http://localhost:4000/api/notes
curl http://localhost:4000/api/notes -v
curl http://localhost:4000/api/notes -i
curl http://localhost:4000/api/notes/1

post
curl --data "title:hola mundo&body:un cuerpo" http://localhost:4000/api/notes

put
curl -X PUT --data "title:hola mundo&body:un cuerpo" http://localhost:4000/api/notes/1


delete
curl -X DELETE --data "title:hola mundo&body:un cuerpo" http://localhost:4000/api/notes/1


curl google.com
/*++++++++++++++++++++++++*/
/*++++++++++++++++++++++++*/





/*======================================================*/
ººº NODEJS
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
<script>
/*++++++++++++++++++++++++*/
// index.js
const app = require('./app');

async function main(){
	//const = await app listen(4000, () => console.log('okokokokok'));
	await app.listen(4000);
	console.log('OKOKOKOKOKOK');
}

main();
/*++++++++++++++++++++++++*/

/*++++++++++++++++++++++++*/
// app.js

const express = require('express');
const app = express(); 


module.exports = app;
/*++++++++++++++++++++++++*/




</script>
/*++++++++++++++++++++++++*/
<!-- testa servidor -->
node src/index.js
/*++++++++++++++++++++++++*/
<!-- package.json -->
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js"
  },
/*++++++++++++++++++++++++*/
npx nodemon src/index.js
npm run dev
/*++++++++++++++++++++++++*/

/*++++++++++++++++++++++++*/
<script>
// database.js

</script>
./mongod --dbpath /Applications/mongodb-osx-x86_64-4.0.8/04merndb/
/*++++++++++++++++++++++++*/




/*++++++++++++++++++++++++*/
<!-- variables de entorno -->
<script>
// .env
MONGODB_URI=mongodb://localhost/merndatabase
PORT=3000

// app.js
console.log(process.env.PORT);
app.set('port', process.env.PORT || 4000);
</script>
/*++++++++++++++++++++++++*/

/*++++++++++++++++++++++++*/
<script>
// app.js
//middlewares
app.use(cors());
app.use(express.json());
</script>
/*++++++++++++++++++++++++*/

/*++++++++++++++++++++++++*/
<script>
// rutas no app.js

//routes
app.get('/api/users', (req,res) => res.send('USERS USERS'));
app.get('/api/routes', (req,res) => res.send('USERS ROUTES'));

// para usar o arquivo notes.js users.js
app.use('/api/notes', require('./routes/notes'));
app.use('/api/users', require('./routes/users'));


/*++++++++++++++++++++++++*/
// notes.js
const { Router } = require('express');
const router = Router();
router.route('/')
	// .get((req, res) => res.send('notes notes notes notes'));
	/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	repare que so o ultimo tem ";"
	/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	.get((req, res) => res.json({message: 'AXAXAXAXAXAXAXAX'}))
	.post((req, res) => res.json({message: 'post_post_post_post'}));
	/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// routes.route('/:id')
// 	.get()
// 	.put()
// 	.delete()
module.exports = router;
</script>
curl http://localhost:4000/api/notes
curl http://localhost:4000/api/notes -v
/*++++++++++++++++++++++++*/



Variando com controllers
/*++++++++++++++++++++++++*/
<script>
// controllers/notes.controllers
const notesCrtl = {};

notesCrtl.getNotes = (req, res) => res.json({message: 'OKOKOKOK'})
notesCrtl.createNotes = (req, res) => res.json({message: 'Notes Saved'});

notesCrtl.getNote = (req, res) => res.json({message: 'get_get_get'})
notesCrtl.putNote = (req, res) => res.json({message: 'put_put_put'})
notesCrtl.deleteNote = (req, res) => res.json({message: 'delete_delete_delete'});

module.exports = notesCrtl;
/*++++++++++++++++++++++++*/


// notes.js
const { Router } = require('express');
const router = Router();

const { getNotes, createNotes, getNote, putNote, deleteNote } = require('../controllers/notes.controllers.js');

router.route('/')
	// .get((req, res) => res.send('notes notes notes notes'));
	/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	.get(getNotes)
	.post(createNotes);
	/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
router.route('/:id')
	.get(getNote)
	.put(putNote)
	.delete(deleteNote);

module.exports = router;

</script>

put
curl -X PUT --data "title:hola mundo&body:un cuerpo" http://localhost:4000/api/notes/1


delete
curl -X DELETE --data "title:hola mundo&body:un cuerpo" http://localhost:4000/api/notes/1

/*++++++++++++++++++++++++*/

/*++++++++++++++++++++++++*/
<script></script>
curl --header "Content-Type: application/json"--request POST --data '{"username":"xyz","password":"xyz"}'http://localhost:4000/api/login

curl -H 'Content-Type: application/json' -X PUT -d '[JSON]' http://example.com/service
curl -H 'Content-Type: application/json' -X PUT -d '{"tags":["tag1","tag2"],"question":"Which band?","answers":[{"id":"a0","answer":"Answer1"},{"id":"a1","answer":"answer2"}]}' http://example.com/service
/*++++++++++++++++++++++++*/

/*++++++++++++++++++++++++*/
<script>
// controllers/notes.controllers
const notesCrtl = {};

const Note = require('../models/Note');

notesCrtl.getNotes = async (req, res) => {
	const notes = await Note.find();
	res.json(notes)
}

notesCrtl.createNotes = (req, res) => {
	const { test } = req.body;
	console.log(test);
	res.json({message: 'Notes Saved'})
};

notesCrtl.getNote = (req, res) => res.json({message: 'get_get_get'})
notesCrtl.putNote = (req, res) => res.json({message: 'put_put_put'})
notesCrtl.deleteNote = (req, res) => res.json({message: 'delete_delete_delete'});

module.exports = notesCrtl;
/*++++++++++++++++++++++++*/
</script>
<!-- test post -->
curl -H 'Content-Type: application/json' -X POST -d '{"test":"Buen test"}' http://localhost:4000/api/notes
/*++++++++++++++++++++++++*/

/*++++++++++++++++++++++++*/
<script></script>
curl -H 'Content-Type: application/json' -X POST -d '{"title":"title_title_title_title", "content":"content_content_content_content", "author":"author_author_author_author"}' http://localhost:4000/api/notes
curl -H 'Content-Type: application/json' -X POST -d '{"title":"title_b itle_b itle_b itle_b itle_b", "content":"Lorem_b lorem_b lorem_b lorem_b lorem_b", "author":"autor_b"}' http://localhost:4000/api/notes
curl http://localhost:4000/api/notes
https://facebook.github.io/react-native/movies.json
curl http://localhost:4000/api/notes/5d30dd559302323fe7f554c7
curl -X DELETE http://localhost:4000/api/notes/5d30dd559302323fe7f554c7
/*++++++++++++++++++++++++*/
curl http://localhost:4000/api/users
curl -H 'Content-Type: application/json' -X POST -d '{"username":"usuario_a"}' http://localhost:4000/api/users
curl -H 'Content-Type: application/json' -X POST -d '{"username":"usuario_b"}' http://localhost:4000/api/users
curl -H 'Content-Type: application/json' -X POST -d '{"username":"usuario_c"}' http://localhost:4000/api/users
curl -H 'Content-Type: application/json' -X POST -d '{"username":"usuario_d"}' http://localhost:4000/api/users
/*++++++++++++++++++++++++*/


/*++++++++++++++++++++++++*/
<script>
const notesCrtl = {};

const Note = require('../models/Note');

notesCrtl.getNotes = async (req, res) => {
	const notes = await Note.find();
	res.json(notes)
}

notesCrtl.createNotes = async (req, res) => {
	const { title, content, date, author } = req.body;
	const newNote = new Note({
		title: title,
		content: content, 
		date: date,
		author: author
	})
	await newNote.save();
	// console.log(newNote);
	res.json({message: 'Notes Saved'})
};

notesCrtl.getNote = async (req, res) => {
	// console.log(req.params.id);
	const note = await Note.findById(req.params.id);
	res.json(note)
}

notesCrtl.updateNote = async (req, res) => {
	const { title, content, date, author } = req.body;
	await Note.findOneAndUpdate(req.params.id, {title, content, date, author});
	res.json({message: 'put_put_put'})
}

notesCrtl.deleteNote = async (req, res) => {
	const note = await Note.findByIdAndDelete(req.params.id);
	res.json({message: 'delete_delete_delete'})
};

module.exports = notesCrtl;
</script>
curl -H 'Content-Type: application/json' -X POST -d '{"title":"title_title_title_title", "content":"content_content_content_content", "author":"author_author_author_author"}' http://localhost:4000/api/notes/5d30dd559302323fe7f554c7

curl -H 'Content-Type: application/json' -X PUT -d '{"title":"AAAAAAA", "content":"BBBBBB", "author":"CCCCCCCCCC"}' http://localhost:4000/api/notes/5d30e47f15979440e6a226d6
/*++++++++++++++++++++++++*/

/*++++++++++++++++++++++++*/
<script></script>
/*++++++++++++++++++++++++*/
/*++++++++++++++++++++++++*/





/*======================================================*/
ºº REACT
<!-- crear projeto -->
npx create-react-app frontend
<!-- inicia -->
npm start


/*++++++++++++++++++++++++*/
<!-- elimina -->

/*+++++++++*/
App.test.js

/*+++++++++*/
<!-- index.js -->
import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/*+++++++++*/
logo.svg

<!-- App.js -->
import logo from './logo.svg';

<!-- e deixa so  a função-->

/*+++++++++*/
function App() {
  return (
    <div>
      Hellow World
    </div>
  );
}
/*+++++++++*/

<!-- apaga todo css -->
App.css
<!-- apaga todo css -->
index.css
/*++++++++++++++++++++++++*/

/*++++++++++++++++++++++++*/
npm install react-router-dom
npm install bootstrap
npm install axios
npm install react-datepicker
npm install timeago.js

/*++++++++++++++++++++++++*/
/*++++++++++++++++++++++++*/
<script></script>

/*++++++++++++++++++++++++*/
<script></script>
/*++++++++++++++++++++++++*/

/*++++++++++++++++++++++++*/
/*======================================================*/



curl http://localhost:4000/api/notes
curl http:192.168.1.102:4000/api/notes
http://192.168.1.102:4000/api/notes





/*======================================================*/
REACT NATIVE


npx react-native-cli init aaarctn --verbose

<!-- CRTL+C PARA PARAR EM: info Installing required CocoaPods dependencies-->

cd aaarctn
npm start

<!--RELOAD NO CELULAR EM: Loading dependency graph, done - 192.168.1.102:8081 RELOAD NO CELULAR EM: Loading dependency graph, done -->
/*++++++++++++++++++++++++*/

yarn add axios

/*++++++++++++++++++++++++*/
<!-- app.js -->
<script>
	import React, { Component } from 'react';
	import axios from 'axios';
	import { Text, View } from 'react-native';
	// import { BrowserRouter as Router, Route } from 'react-router-dom'

	// import Navigation from './components/Navigation'
	// import Lista from './components/Lista'

	export default class HelloWorldApp extends Component {

	  state = {
	    users: []
	  }
	  async componentDidMount() {
	    try {
	      const res = await axios.get('http://192.168.1.102:4000/api/users');
	      // console.warn(res);
	      this.setState({users: res.data})
	      // console.warn(this.state.users);
	      // console.warn(this.state.users.map(users => <Text key={users._id} >{users.username}</Text> ))
	      
	    } catch (e) {
	      console.warn(e);
	    }
	  };

	  render() {
	    return (
	      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
	        <Text>ASASAS</Text>
	        {this.state.users.map(users => <Text key={users._id} >{users.username}</Text> )}
	      </View>
	    );
	  }

	  
	}
</script>
/*++++++++++++++++++++++++*/








<!-- Procurar por AsyncStorage para salvar usuario e senha do usuario -->




/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
<!-- EXPORTAR APK -->
<!-- ira a pasta do projeto e dar permissoes rd para a pasta y subdirectorios -->

<!-- creando apk -->
cd /Library/Java/JavaVirtualMachines/jdk1.8.0_161.jdk/Contents/Home/bin

sudo keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
sudo keytool -genkeypair -v -keystore recrctntst.keystore -alias recrctn -keyalg RSA -keysize 2048 -validity 10000

sudo keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

<!-- android/glade.propieties -->

MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****


MYAPP_UPLOAD_STORE_FILE=recrctntst.keystore
MYAPP_UPLOAD_KEY_ALIAS=recrctn
MYAPP_UPLOAD_STORE_PASSWORD=105474
MYAPP_UPLOAD_KEY_PASSWORD=105474

/*-----------------*/
<!-- editar arquivos -->

/*-----------------*/
<!-- android -->

./gradlew bundleRelease --verbose


/*-----------------*/

react-native run-android --variant=release


/*-----------------*/













































































































































