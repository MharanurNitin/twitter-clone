import React from "react";
import SearchTwitter from "../../atoms/searchTwitter/SearchTwitter";
import "./Widgets.css";
// import WhatsHappening from '../../components/whatsHappening/WhatsHappening'
import WhoToFollw from "../../components/whoToFollw/WhoToFollw";
import WhatsHappening from '../../components/whats-happening/whats-happening'


function Widgets() {
  return (
    <div className="widgets">
      <div className="feed_header">
        <SearchTwitter/>
      </div>
      {/* <WhatsHappening /> */}
      <WhatsHappening/>
      <WhoToFollw />
    </div>
  );
}

export default React.memo(Widgets);
