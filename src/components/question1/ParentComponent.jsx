import React, { useState } from "react";
import { FirstSibling } from "./FirstSibling";
import { SecondSibling } from "./SecondSibling";

export const ParentComponent = () => {
  const [firstSiblingData, setFirstSiblingData] = useState("Waiting...");
  const [secondSiblingData, setSecondSiblingData] = useState("Waiting...");

  return (
    <div className="w-full mt-[5%]">
      <h1 className="text-center">ParentComponent</h1>
      <div className=" w-full ">
        <table className="border mx-auto mt-[5%]">
          <tr>
            <td className="border p-8">
              <FirstSibling
                firstSiblingData={firstSiblingData}
                setSecondSiblingData={setSecondSiblingData}
              />
            </td>
            <td className="border p-8">
              <SecondSibling
                secondSiblingData={secondSiblingData}
                setFirstSiblingData={setFirstSiblingData}
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
