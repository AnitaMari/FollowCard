// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { FollowCard } from './FollowCard.jsx';
import './App.css'

export function App() {  
  //pasar esta función de abajo o callback para abajo a los hijos, los componentes que renderizo más abajo
  // por si quiero actualizar un estado, cambiar algo...
  const format = (userName) => `@${userName}`;
 
 return (
    <section className="App"> 
    {/* creamos la sección para estilar los componentes sin cambiar la card para que no afecte otros sitios donde se use */}
      <FollowCard 
        formatUserName={format} 
        // isFollowing={true} 
        userName="Anita79" 
        name="Ana María"/>

      <FollowCard 
        formatUserName={format} 
        // isFollowing={false} 
        userName="Luna" 
        name="My doggy Luna"/>

      <FollowCard 
        formatUserName={format} 
        // isFollowing 
        userName="Dexter" 
        name="My doggy Dexter"/>

      <FollowCard 
        formatUserName={format} 
        // isFollowing={false} 
        userName="Bruno" 
        name="My doggy Bruno"/>

      <FollowCard 
        formatUserName={format} 
        // isFollowing={false} 
        userName="Natalia" 
        name="My dear Natalita"/>
    </section>
  )
}
