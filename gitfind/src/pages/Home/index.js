import { useState } from 'react';
import { Header } from '../../components/Header';
import background from '../../assets/background.png'
import './styles.css'
import ItemList from '../../components/ItemList'

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState('VictorAlexisL');
  const [repos, setRepos] = useState(null);
  let wasFirstSearchMade = false;

  const getData = async () => {
    wasFirstSearchMade = true;
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if(newUser?.name) {
      const {avatar_url, name, login, bio} = newUser;
      setCurrentUser({avatar_url, name, login, bio});

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if(newRepos?.length){
        setRepos(newRepos)
      }
    } else {
      setCurrentUser(null);
    }
  };

  const SearchResults = () => {
    if (currentUser) {
      return (
        <div className='results'>
        <div className='profile-info'>
          <img src={currentUser.avatar_url} className='profile-img' alt='Profile'/>
          <div>
            <h3>{currentUser.name}</h3>
            <h4>{currentUser.login}</h4>
            <br/>
            <p>{currentUser.bio}</p>
          </div>
        </div>
      
        <hr/>
    
        <div className='repositories'>
          <h3 className='repositories-title'>Repositórios</h3>
          <div className='repositories-info'>
          {repos?.map(repo => (
            <ItemList url={repo.html_url} title={repo.name} description={repo.description}/>
          ))}
          </div>
        </div>
      </div>)
    } else if (wasFirstSearchMade) {
      return <div>Usuário não encontrado</div>
    } else {
      return ''
    }
  }
      return (
        <div className='App'>    
          <Header />
          <div className='content'> 
            <img src={ background } className='background' alt='Github Logo'/>
            <div className='info'>
              
              <div className='search-bar'>
                <input className='user' placeholder='@username' value={user} onChange={(event => setUser(event.target.value))}/>
                <button onClick={getData}>Buscar</button>
              </div>
              
              <SearchResults/>
    
            </div>
          </div>
        </div>
      );
    }


export default App;
