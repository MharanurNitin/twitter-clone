import style from "./whats-happening.module.css";
import Trendings from "../../atoms/trendings/trendings";
import { useState } from "react";
import { trendinsData } from "../../const";
import { nanoid } from "nanoid";
export default function WhatsHappening() {
  const [trending, setTrendings] = useState(trendinsData.slice(0, 4));
  const [isShowingAllTrendings, setIsShowingAllTrendings] = useState(false);

  // handle seeAll request
  function handleRequestSeeAll() {
    setIsShowingAllTrendings(!isShowingAllTrendings);
    if (isShowingAllTrendings) {
      return setTrendings(trendinsData.slice(0, 4));
    }
    setTrendings(trendinsData);
  }

  // remove not intrseted item
  function handleClickPopover(id) {
    const trendingArr = [...trending];
    trendingArr.forEach((data) => {
      if (data.id === id) {
        data.isNotIntrested = true;
      }
    });
    setTrendings(trendingArr);
  }

  return (
    <div className={style.wrapper}>
      <h2 className={style.heading}> What's Happeinings ?</h2>
      {trending.map(
        (data) =>
          !data.isNotIntrested && (
            <Trendings key={nanoid()}
              data={data}
              customCss={style.trending}
              handleClickPopover={handleClickPopover}
            />
          )
      )}
      {trending.length && (
        <p className={style.seeAll} onClick={handleRequestSeeAll}>
          {isShowingAllTrendings ? "Show Less" : "Show More"}
        </p>
      )}
    </div>
  );
}
