import { Link } from "react-router-dom";

import './Card.scss';

export function Card({ children, className, to }) {
  return (
    <>
    <Link className={`card ${className}`} to={to}>
      { children ? children : '' }
    </Link>
    </>
  );
}