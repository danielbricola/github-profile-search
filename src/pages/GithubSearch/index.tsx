import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';

type FormData = {
  login: string;
};

type Github = {
  avatar_url: string;
  url: string;
  followers: string;
  location: string;
  name: string;
};

const GithubSearch = () => {
  const [github, setGithub] = useState<Github>();

  const [formData, setFormData] = useState<FormData>({
    login: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.login}`)
      .then((response) => {
        setGithub(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setGithub(undefined);
        console.log(error);
      });
  };

  return (
    <div className="github-search-container">
      <div className="container-fluid search-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="login"
              value={formData.login}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>

      {github && (
        <div className="container-fluid result-card-container">
          <img src={github.avatar_url} alt="Foto de perfil" />
          <div className="container-fluid information-card">
            <h2>Informações</h2>
            <ResultCard title="Perfil" description={github.url} link={true}/>
            <ResultCard title="Seguidores" description={github.followers} link={false}/>
            <ResultCard title="Localidade" description={github.location} link={false}/>
            <ResultCard title="Nome" description={github.name} link={false}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default GithubSearch;
