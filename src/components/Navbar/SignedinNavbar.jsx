import React, { useContext } from "react";

import { Avatar } from "antd";

import { createFromIconfontCN } from "@ant-design/icons";
import { signout } from "../../Utilities/FirebaseUtilities";
import { AuthContext } from "../../Utilities/auth/Auth";


const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const SignedinNavbar = () => {
  const { userData } = useContext(AuthContext);
  return (
    <div className="btn">
      <Avatar className="avatar" src={userData?.picture} size={35} />

      <Avatar
        className="avatar"
        size={35}
        icon={<IconFont type="icon-tuichu" size="21.25px" />}
        style={{ backgroundColor: "#EE4266", marginLeft: "15px" }}
        onClick={() => signout()}
      />
    </div>
  );
};


export default SignedinNavbar;
