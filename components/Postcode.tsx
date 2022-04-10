import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

const Postcode: React.FC = () => {
  // state 추가
  const [zipCode, setZipcode] = useState<string>("");
  const [roadAddress, setRoadAddress] = useState<string>("");
  const oncomplete = async (data: any) => {
    console.log(data);
    setZipcode(data.zonecode); // 추가
    setRoadAddress(data.roadAddress); // 추가
  };
  return (
    <div>
      <p>{zipCode}</p>
      <p>{roadAddress}</p>
      <DaumPostcode onComplete={oncomplete} />
    </div>
  );
};

export default Postcode;
