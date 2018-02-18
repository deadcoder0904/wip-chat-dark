import React from "react";

import "./styles.scss";

const InstallGuide = () => (
  <div className="list">
    <h3>Step 1 - Install Required User Script</h3>
    <ul className="unordered-list">
      <li>
        Chrome - Install{" "}
        <a
          href="https://tampermonkey.net/?ext=dhdg&amp;browser=chrome"
          target="_blank"
        >
          Tampermonkey
        </a>
      </li>
      <li>
        Dolphin - Install{" "}
        <a
          href="https://tampermonkey.net/?ext=dhdg&amp;browser=dolphin"
          target="_blank"
        >
          Tampermonkey
        </a>
      </li>
      <li>
        Firefox - Install{" "}
        <a
          href="https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/"
          target="_blank"
        >
          Greasemonkey
        </a>
      </li>
      <li>
        Maxthon - Install{" "}
        <a
          href="http://extension.maxthon.com/detail/index.php?view_id=1680"
          target="_blank"
        >
          Tampermonkey
        </a>
      </li>
      <li>
        Microsoft Edge - Install{" "}
        <a
          href="https://www.microsoft.com/store/p/tampermonkey/9nblggh5162s"
          target="_blank"
        >
          Tampermonkey
        </a>
      </li>
      <li>
        Opera - Install{" "}
        <a
          href="https://tampermonkey.net/?ext=dhdg&amp;browser=opera"
          target="_blank"
        >
          Tampermonkey
        </a>{" "}
        or{" "}
        <a
          href="https://addons.opera.com/en/extensions/details/violent-monkey/"
          target="_blank"
        >
          Violent Monkey
        </a>
      </li>
      <li>Qupzilla - No Additional Software required</li>
      <li>
        Safari - Install{" "}
        <a
          href="https://tampermonkey.net/?ext=dhdg&amp;browser=safari"
          target="_blank"
        >
          Tampermonkey
        </a>
      </li>
      <li>
        UC Browser - Install{" "}
        <a
          href="https://tampermonkey.net/?ext=dhdg&amp;browser=ucweb"
          target="_blank"
        >
          Tampermonkey
        </a>
      </li>
    </ul>
    <h3>Step 2 - Install Stylish</h3>
    <ul className="unordered-list">
      <li>
        <a href="https://addons.mozilla.org/en-US/firefox/addon/2108/">
          Firefox Addon
        </a>
      </li>
      <li>
        <a href="https://chrome.google.com/extensions/detail/fjnbnpbmkenffdnngjfgmeleoegfcffe">
          Chrome Extension
        </a>
      </li>
      <li>
        <a href="https://addons.opera.com/en/extensions/details/stylish/">
          Opera Extension
        </a>
      </li>
      <li>
        <a href="http://sobolev.us/stylish/">Safari Extension</a>
      </li>
      <li>
        <a href="https://addons.mozilla.org/en-US/firefox/addon/2108/">
          Firefox Mobile Addon
        </a>
      </li>
    </ul>
    <h3>Step 3 - Install WIP Dark</h3>
    <div className="text">
      <a href="https://userstyles.org/styles/153848/wip-chat" target="_blank">
        Dark Theme
      </a>{" "}
      for 🚧WIP made by{" "}
      <a href="http://twitter.com/deadcoder0904" target="_blank">
        @deadcoder0904
      </a>
    </div>
  </div>
);

export default InstallGuide;
