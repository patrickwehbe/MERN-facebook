import React from "react";
import "./Widget.css";

function Widget() {
  return (
    <div className="widget">
      <div
        class="fb-page"
        data-href="https://www.facebook.com/TasteLifeOfficial/"
        data-tabs="timeline"
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/TasteLifeOfficial/"
          class="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/TasteLifeOfficial/">Facebook</a>
        </blockquote>
      </div>
    </div>
  );
}

export default Widget;
