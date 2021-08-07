import React, { useState } from "react";
import { Upload, Button, message, Tooltip } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const UploadPng = () => {
  const props = {
    beforeUpload: (file) => {
      if (file.type !== "image/png") {
        message.error(`${file.name} is not a png file`);
      }
      return file.type === "image/png" ? true : Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      console.log(info.fileList);
    },
  };
  return (
    <Upload {...props}>
      <Tooltip placement="bottom" title="PNG image only">
        <Button icon={<UploadOutlined />} className="upload-btn">
          Upload image
        </Button>
      </Tooltip>
    </Upload>
  );
};

export default UploadPng;
