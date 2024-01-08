import { FC } from "react";

interface FlexibleFilePathProps {
  path: string;
}

export const FlexibleFilePath: FC<FlexibleFilePathProps> = ({ path }) => {
  const splitFilePath = (url: string) => url.split("\\");

  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {splitFilePath(path).map((section, idx) => (
        <p key={`${section.substring(0, 1)}`}>{`${section}${idx === splitFilePath(path).length - 1 ? "" : "\\"}`}</p>
      ))}
    </div>
  );
};
