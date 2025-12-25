import axios from "axios";
import { useEffect, useState } from "react";

const News = async () => {
  const endpoint = "http://localhost:3000/news";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(endpoint).then((res) => {
      if (res.status === 200 && res.statusText === "OK") {
        setData(res.data);
      }
    });
  }, []);

  return (
    <div>
      {data.map(({ id, imgSrc, newsTitle }) => {
        return (
          <div key={id} className={`bg-[url('${imgSrc}')]`}>
            <p>{newsTitle}</p>
          </div>
        );
      })}
    </div>
  );
};

export default News;
