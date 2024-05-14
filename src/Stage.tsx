import React, { useState } from "react";

export default function Stage({
  stageTitle,
  getItems,
  onItemClick,
}: {
  stageTitle: string;
  getItems: () => any[];
  onItemClick: (task: { name: any; state: any }) => void;
}) {
  const handleItemCLick = (item: { name: any }) => {
    onItemClick({ name: item, state: stageTitle });
  };
  return (
    <div>
      <h2>{stageTitle}</h2>
      <ul>
        {getItems().map((item, index) => (
          <li key={index} onClick={() => handleItemCLick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
