import React from "react";
import ReactQuill from "react-quill";

const Editor = ({ value, onChange }) => {
  let quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  let quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  return (
    <div>
      <ReactQuill
        value={value}
        onChange={onChange}
        theme={'snow'}
        modules={quillModules}
        formats={quillFormats}
      />
    </div>
  );
};

export default Editor;
