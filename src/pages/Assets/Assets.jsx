import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Card } from "../../components/Card";
import { API } from '../../services/api';

import './Assets.scss'

export function Assets() {

  const [companies, setCompanies] = useState([]);
  const { unitId } = useParams();


  useEffect(() => {
    async function getInitialData() {
      const response = await API.get(`assets?unitId=${unitId}`)
      setCompanies(response.data)
      console.log(response.data)
    }
    getInitialData();
  }, [unitId])
  return (
    <main className="list">
      <br />
      {companies.map(company => (
        <Card
          className={`card-company ${company.status === 'inAlert' ? 'alert' : ''}`}
          key={company.id}
          to={`unit/${company.id}`}
        >
          <CardCompanyTemplate company={company} />
        </Card>
      ))}
    </main>
  );
}

function CardCompanyTemplate({ company }) {
  return (
    <>
      <h2>{company.name}</h2>
      <img src={company.image} alt={company.name} />
      <div className="texts">
        <p>Status: {company.status}</p>
        <p>Max Temp: {company.specifications.maxTemp}</p>
        <p>Heathscore: {company.healthscore}</p>
        <br />
        <h4>Metrics</h4>
        <p>Last Uptime At: {new Date(company.metrics.lastUptimeAt).toLocaleString('pt-br')}</p>
        <p>Total Collects Uptime: {company.metrics.totalCollectsUptime}</p>
        <p>Total Uptime: {company.metrics.totalUptime}</p>
      </div>
    </>
  );
}