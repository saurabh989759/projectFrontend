/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createPayment } from "@/redux/Payment/Action";
import { getUserSubscription } from "@/redux/Subscription/Action";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
const SubscriptionCard = ({ data }) => {
  const dispatch = useDispatch();
  const handleUpgrade = () => {
    dispatch(
      createPayment({
        planType: data.planType,
        jwt: localStorage.getItem("jwt"),
      })
    );
  };

 
  return (
    <Card className="card p-5 space-y-5 w-[18rem]">
      <p>{data.planName}</p>
      <p className="">
        <span className="text-xl font-semibold">₹{data.price}/</span>{" "}
        <span>{data.planType}</span>
      </p>
      {data.planType=="ANNUALLY"&&<p className="text-green-500">30% off</p>}
      <Button
        disabled={data.planName == "Free" ? true : false}
        className="w-full"
        onClick={handleUpgrade}
      >
        {data.buttonName}
      </Button>
      <div>
        {data.features.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckCircledIcon />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SubscriptionCard;