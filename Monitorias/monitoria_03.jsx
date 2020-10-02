//Configuração de fonts
//Configuração svg
//LinearGradient
//Imagem
//Montagem do login
//Asycnstorage

const { AsyncLocalStorage } = require("async_hooks");
const [nome, setNome] = useState('');
const [senha, setSenha] = useState('');

//salva usuario
async function salvar(){
    const usuario = {
        nome, senha
    }
    await AsyncLocalStorage.setItem("", JSON.stringify(usuario))
}

//Pegar usuario ver se funcinou
async function mostrarUsuario() {
    const usuariojson = await AsyncLocalStorage.getItem('usuario');
    const usuario = JSON.parse(usuariojson);
    alert.alert(usuario.nome, usuario.senha)
}