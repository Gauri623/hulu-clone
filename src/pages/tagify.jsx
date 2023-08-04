import React, { useRef, useEffect, useState } from "react";
import tagify from "@yaireo/tagify";
import "@yaireo/tagify/dist/tagify.css";

const CustomTagify = () => {
  const [data, setData] = useState([]);
  const inputRef = useRef(null);
  const tagifyRef = useRef(null);

  useEffect(() => {
    tagifyRef.current = new tagify(inputRef.current, {
      maxTags: 20,
      addTagOnBlur: false,
      dropdown: {
        enabled: 0,
      },
    });

    const tagifyInstance = tagifyRef.current;

    tagifyRef.current.on("change", (e) => {
      const editedTags = e.detail.value;
      setData(JSON.parse(editedTags));
    });

    const handleClickOutside = (event) => {
      if (
        tagifyRef.current &&
        tagifyRef.current.DOM.input !== event.target &&
        tagifyInstance.DOM.scope &&
        !tagifyRef.current.DOM.scope.contains(event.target)
      ) {
        tagifyInstance.dropdown.hide();
        tagifyInstance.DOM.input.blur();
        saveEditedData();
      }
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
      tagifyRef.current.destroy();
    };
  }, []);

  const saveEditedData = () => {
    if (tagifyRef.current) {
      const editedTags = tagifyRef.current.value;
      setData(JSON.parse(editedTags));
    }
  };

  return (
    <div className="input-group input-group-merge">
      <input
        type="text"
        id="basic-default-message"
        className="form-control custom-input"
        ref={inputRef}
        aria-describedby="basic-icon-default-message2"
      />
    </div>
  );
};

export default CustomTagify;
