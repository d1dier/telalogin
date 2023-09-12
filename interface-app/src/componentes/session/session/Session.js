import './Session.css';

export default function Session(){

    return (
       <div className="meio">
         <session>
            <h2>Entrar</h2>
            <input type='text' placeholder='email'/> <br/><br/>
            <input type='password' placeholder='senha'/> <br/> <br/>
            <button>Entrar</button>
            <p><strong>Novo por aqui?</strong> assine agora</p>
            <body></body>
        </session>
       </div>

      );

}