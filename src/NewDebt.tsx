import React from 'react';
import { Link } from 'react-router-dom';
import './newdebt.css'

export default function NewDebt() {
  return (
    <div className="newdebt">
      <Link className="newlink" to="/">+</Link>
    </div>
  );
}
