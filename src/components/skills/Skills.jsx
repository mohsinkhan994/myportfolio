import { useEffect, useState } from "react";
import List from "../List/List";
import "./skills.scss";
import {
  skillsBackend,
  
} from "../../data";
export default function Skills() {
  const [selected, setSelected] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
      setData(skillsBackend);
  }, [selected]);

  return (
    <div className="skills" id="skill">
      <h1>SKILLS</h1>
      <ul>
          <List
            setSelected={setSelected}
          />
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
