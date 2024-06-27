"use client"
import { Button } from "@/components/ui/button";
import { MdDelete } from "react-icons/md";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ProfileForm } from "@/components/Form";
import { useEffect, useState } from "react";
import { getLorem } from "@/actions/getLorem";
import { deleteLorem } from "@/actions/deleteLorem";

export default function Home() {

  // const cardInfo=[
  //   {id:1,
  //     name:"safa"
  //   },
  //   {id:2,
  //     name:"moiz"
  //   },
  //   {id:3,
  //     name:"dawood"
  //   }
  // ]

  const [cardInfo, setCardInfo] = useState<any>();

  useEffect(() => {
    getLorem()
      .then((data) => {
        setCardInfo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cardInfo]);
  return (
   
    <main className="border border-black rounded-md bg-yellow-200  flex  flex-col justify-center items-center  m-4 p-4">
      <div className="grid grid-cols-3 gap-4 w-3/4  ">
        <div className="border border-black rounded-xl h-40 bg-green-300 flex flex-col justify-center items-center">
          <div>Lorem ipsum</div>
          <div className="text-6xl">03</div>
        </div>
        <div className="h-40 border border-black bg-pink-300 rounded-xl flex flex-col justify-center items-center">
          <div>Lorem ipsum</div>
          <div className="text-6xl">11</div>
        </div>
        <div className="h-40 border border-black bg-orange-300 rounded-xl flex flex-col justify-center items-center">
          <div>Lorem ipsum</div>
          <div className="text-6xl">52</div>
        </div>
        
       
         <ProfileForm/>
         

      {cardInfo?.map((cardInfo:any)=>{
        return(
          <Card key={cardInfo.id} className="col-span-3">
        
        <CardHeader>
          <CardTitle>{cardInfo.name}</CardTitle>
         
        </CardHeader>
       
        <CardFooter className="flex items-center justify-between">
          <Button variant={'destructive'}>Click me</Button>
          <Button variant={'ghost'}><MdDelete size={30} onClick={()=>deleteLorem(cardInfo.id)}/></Button>
         </CardFooter>
       
      </Card>


        )
      })}

      
      </div>
    
    </main>

   

    
  );
}
