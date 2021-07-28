import React from 'react'

export default function List({ active, setSelected}) {
    return (
        <li
        className={active ? "list active" : "list"}
      >
      </li>
    );
}
