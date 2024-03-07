"use state";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreateQuote, SearchQuote } from "./createSearchQuote";

export function Post() {
  return (
    <Tabs
      defaultValue="post"
      className="relative -top-20 min-w-[400px] max-w-[95vw] flex flex-col items-center"
    >
      <TabsList>
        <TabsTrigger value="post">Post</TabsTrigger>
        <TabsTrigger value="search">Search</TabsTrigger>
      </TabsList>
      <TabsContent value="post">
        <CreateQuote />
      </TabsContent>
      <TabsContent value="search">
        <SearchQuote />
      </TabsContent>
    </Tabs>
  );
}
