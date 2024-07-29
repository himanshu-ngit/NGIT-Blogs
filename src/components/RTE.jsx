import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Controller } from "react-hook-form";

const RTE = ({ name, control, label, defaultValue = "" }) => {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <CKEditor
            editor={ClassicEditor}
            data={value || defaultValue}
            onChange={(event, editor) => {
              const data = editor.getData();
              onChange(data);
            }}
          />
        )}
      />
    </div>
  );
};

export default RTE;
