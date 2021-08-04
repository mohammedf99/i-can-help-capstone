import React from "react";

import { Avatar } from "antd";

import { createFromIconfontCN } from "@ant-design/icons";
import { signout } from "../../Utilities/FirebaseUtilities";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const SignedinNavbar = () => (
  <div className="btn">
    <Avatar
      className="avatar"
      src="https://images.squarespace-cdn.com/content/v1/5fff77cecbbc994cdc1ee140/1610738319344-3G1CDOQBSD6BF3F5U3JD/billy-chester-pdC8onszs6o-unsplash.jpg"
      size={35}
    />

    <Avatar
      className="avatar"
      size={35}
      icon={<IconFont type="icon-tuichu" size="21.25px" />}
      style={{ backgroundColor: "#EE4266", marginLeft: "15px" }}
      onClick={() => signout()}
    />
  </div>
);

export default SignedinNavbar;
