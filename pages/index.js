import { Typography } from "@material-ui/core";
import React from "react";
import useSWR from "swr";

export default function HomePage() {
  const { API_URL } = process.env;
  const key = API_URL + "/dokumen";

  const { data, error } = useSWR(key);
  console.log(data);

  return (
    <div>
      <Typography variant="h1">Home Page</Typography>
    </div>
  );
}
