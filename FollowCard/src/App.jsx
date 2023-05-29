// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { FollowCard } from './FollowCard.jsx';
import './App.css'

const users = [
  {
    userName: "Anita",
    name: "Ana María M.D.",
    isFollowing: false
  },
  {
    userName: "Dani",
    name: "Daniel A.G.",
    isFollowing: true
  },
  {
    userName: "Ángel04",
    name: "Ángel A.M.",
    isFollowing: false
  },
  {
    userName: "Nati",
    name: "Natalia A.M.",
    isFollowing: true
  }

]

export function App() {  
  //pasar esta función de abajo o callback para abajo a los hijos, los componentes que renderizo más abajo
  // por si quiero actualizar un estado, cambiar algo...
  // const format = (userName) => `@${userName}`;
 
 return (
    <section className="App"> 
    {/* creamos la sección para estilar los componentes sin cambiar la card para que no afecte otros sitios donde se use */}
      
      {/* <FollowCard 
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
        name="My dear Natalita"/> */}
      {
        users.map(user => {
          const { userName, name, isFollowing } = user
          // users.map(({userName, name, isFollowing}) => (
          return (
            <FollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >    
              {name}          
            </FollowCard>
          )
        })
      }
    </section>
  )
}
