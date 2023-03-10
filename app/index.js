import React, { useEffect } from "react";
import { SafeAreaview } from "react-native-safe-area-context";
import { getPeople } from "./api/people";



export default function people() { 
  useEffect(() => {
    (async () => {
    await loadPeople();
  })();
  }, []);
  const loadPeople = async () => {
    try {
      const response = await getPeople();
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
  



  return(
    <SafeAreaview>
      <Text>People</Text>
    </SafeAreaview>
  );
}