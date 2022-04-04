import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';

type FormData = {
  cep: string;
};

type Address = {
  avatar: string;
  logradouro: string;
  localidade: string;
};

const CepSearch = () => {
  const [address, setAddress] = useState<Address>();

  const [formData, setFormData] = useState<FormData>({
    cep: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://viacep.com.br/ws/${formData.cep}/json/`)
      .then((response) => {
        setAddress(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setAddress(undefined);
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
              name="cep"
              value={formData.cep}
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

      {address && (
        <div className="container-fluid result-card-container">
          <img
            src="https://avatars.githubusercontent.com/u/13897257?v=4"
            alt="Foto de perfil"
          />
          {/* <ResultCard title="Avatar" description={address.avatar} /> */}
          <div className="container-fluid information-card">
            <h2>Informações</h2>
            <ResultCard title="Perfil" description={address.logradouro} />
            <ResultCard title="Seguidores" description={address.localidade} />
            <ResultCard title="Localidade" description={address.localidade} />
            <ResultCard title="Nome" description={address.localidade} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CepSearch;
