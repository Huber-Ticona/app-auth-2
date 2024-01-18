<script>
    import {userStore} from '$lib/store/user'
    import {PUBLIC_BASE_PATH} from '$env/static/public'
    import {page} from '$app/stores';
    console.log("URL PARAMS: ", $page.params)
    
/* // Obtener el token de la URL
    const urlParams = $page.url.searchParams;
    const token = urlParams.get('token'); // El token que deseas decodificar y verificar
    console.log("|urlparams: ", urlParams)
    console.log("|token: ",token)

    const secret = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwJJdr1dRQnPr3eu5cXHD
YfB/W/C49LQ05RhSTLLF2RCWT2x7S9dBXjRm9Zux+gHmY1Uk8ksbKejHvxcTD9tc
D6EbbzjQu2eG59Ch+7OYhwNM1h2VHT4Xql1EpO/ptmjWvuWED3OMfb68+0x5m78n
wbpr51z1o3En1mZEGwN3zmM8I2D0+Bc6lFXPJMlJtnnL8KrqEoX9agHP5cOQYgI4
2Frk0kYAGK7TH905PHgMlCDxrmlGWHuJDS0jax7sJburcEcw3oAT53SghRnv2GOW
a69kopEbPeQuaral/zgoeVD7zIBsSeu0SWqVsW91n1YGpIy2kPLJACAs6h4+1L4T
wQIDAQAB
-----END PUBLIC KEY-----
`; // La clave secreta utilizada para firmar el token

if(token){
        console.log("|(Existe token) Token : ",token)
        console.log("|-- EVALUANDO TOKEN ...")
        try {
            const decoded = jwt.verify(token, secret);
            console.log("Decoded: ",decoded);
            } catch (err) {
            if (err instanceof jwt.JsonWebTokenError) {
            console.log('Error: Token JWT no válido');
        } else {
            console.log(err);
        }
    }
} */
    function login(){
        console.log("Logueando")
        let user = {
            id: 12,
            name: "huber ticona",
            authenticated: true
        }
        userStore.set(user)
        
    }
</script>

<div>
    redirigiendo ...
    Si no se redirige , ingresar a:  
    <a href="https://sound-juice-1f68.e2.loginrocket.com/login?redirect_uri={PUBLIC_BASE_PATH}/account">login</a>
    {#if $userStore && $userStore.authenticated}
         <ul>
        <li><a href="https://sound-juice-1f68.e2.loginrocket.com/logout">logout</a></li>
        <li><a href="https://sound-juice-1f68.e2.loginrocket.com/accounts">account</a></li>
        <li><a href="https://sound-juice-1f68.e2.loginrocket.com/profile">profile</a></li>
        <li><a href="https://sound-juice-1f68.e2.loginrocket.com/signup">signup</a></li>
    </ul>
    {/if}
    <button on:click={login}>
        loguear
    </button>
    <hr>


</div>