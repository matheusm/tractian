import { useEffect, useState } from "react";

import { Card } from "../../components/Card";
import { API } from '../../services/api';

import './Home.scss';

export function Home() {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getInitialData() {
      const response = await API.get('companies')
      setCompanies(response.data)
    }
    getInitialData();
  }, [])
  return (
    <main className="home">
      <h2>Escolha uma empresa para começar:</h2>
      <br />
      {companies.map(company => (
        <Card className="card-company" key={company.id} to={`companies/${company.id}`}>
          <CardCompanyTemplate company={company} />
        </Card>
      ))}
    </main>
  );
}

function CardCompanyTemplate({ company }) {
  return (
    <div>
      {company.name}
    </div>
  );
}