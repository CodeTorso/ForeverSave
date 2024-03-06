"use state";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SelectSearch } from "./searchSelect";
export function Post() {
  return (
    <Tabs
      defaultValue="post"
      className="relative -top-20 w-[400px] flex flex-col items-center"
    >
      <TabsList>
        <TabsTrigger value="post">Post</TabsTrigger>
        <TabsTrigger value="search">Search</TabsTrigger>
      </TabsList>
      <TabsContent value="post">
        <Card>
          <CardHeader>
            <CardTitle>Post your thought</CardTitle>
            <CardDescription>
              Get your thought saved forever. This is visible to the world.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              {/* Somehow using title or even title form as heading gives error  */}
              <Label htmlFor="postHeading">Title</Label>
              <Input
                id="postHeading"
                placeholder="grokisgross"
                defaultValue=""
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="post">Post</Label>
              <Input id="post" placeholder="I hate it!" defaultValue="" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Post</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="search">
        <Card>
          <CardHeader>
            <CardTitle>Search your thoughts</CardTitle>
            <CardDescription>
              In the realm of thoughts find the thoughts that mean to you.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <SelectSearch />
            </div>
            <div className="space-y-1">
              <Input defaultValue="Select a method" disabled />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Search</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
