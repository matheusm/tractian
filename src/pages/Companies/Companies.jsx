import { useEffect, useState } from "react";

import { Card } from "../../components/Card";
import { API } from '../../services/api';

export function Companies() {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getInitialData() {
      const response = await API.get('units')
      setCompanies(response.data)
    }
    getInitialData();
  }, [])
  return (
    <main className="home">
      <h2>Agora escolha uma UNIDADE</h2>
      <br />
      {companies.map(company => (
        <Card className="card-company" key={company.id} to={`unit/${company.id}`}>
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