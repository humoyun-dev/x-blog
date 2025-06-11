import React from "react";
import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div>
      <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
    </div>
  );
};

export default Loading;
