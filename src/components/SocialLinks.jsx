import React from "react";

function SocialLinks({platform, url}) {

  function openLink() {
    window.open(url, "_blank");
  }

  return (
    <div>
        <button onClick={openLink}>
            {platform}
        </button>
    </div>
  );
}

export default SocialLinks;
