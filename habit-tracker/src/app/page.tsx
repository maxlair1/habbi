import { BaseStyles, Box, Heading } from "@primer/react";

export default function Page() {
  return (
    <BaseStyles>
      <Box m={4}>
        <Heading as="h2" sx={{ mb: 2 }}>
          Hello, world!
        </Heading>
        <p>This will get Primer text styles.</p>
      </Box>
    </BaseStyles>
  );
}
