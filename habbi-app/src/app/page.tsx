import { BaseStyles, Box, Heading, Button, Header } from "@primer/react";
import { BeakerIcon, ZapIcon } from "@primer/octicons-react";
import navbar from "./navbar";

export default function Page() {
  return (
    <>
      {navbar()}
      <BeakerIcon></BeakerIcon>
    </>
  );
}
