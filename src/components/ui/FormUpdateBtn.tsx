"use client";

import { useFormStatus } from "react-dom";
import HoverButton from "./HoverButton";

const FormUpdateBtn = () => {
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-row items-center space-x-2">
      <HoverButton>
        <span>{pending ? "Updating..." : "Submit"}</span>
      </HoverButton>
    </div>
  );
};

export default FormUpdateBtn;
