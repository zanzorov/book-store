import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={236}
    height={400}
    viewBox="0 0 236 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="47" y="0" rx="0" ry="0" width="142" height="222" />
    <rect x="0" y="248" rx="6" ry="6" width="80" height="15" />
    <rect x="0" y="280" rx="0" ry="0" width="189" height="29" />
    <rect x="0" y="316" rx="0" ry="0" width="172" height="17" />
    <rect x="0" y="350" rx="0" ry="0" width="76" height="32" />
    <rect x="96" y="348" rx="6" ry="6" width="110" height="40" />
  </ContentLoader>
);

export default Skeleton;
