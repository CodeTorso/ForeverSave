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

export function Post() {
  return (
    <Tabs defaultValue="post" className="w-[400px] flex flex-col items-center">
      <TabsList>
        <TabsTrigger value="post">Post</TabsTrigger>
        <TabsTrigger value="search">Search</TabsTrigger>
        <TabsTrigger value="random">Random</TabsTrigger>
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
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="grokisgross" defaultValue="" />
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
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you&apos;re
              done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="random">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you&apos;re
              done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
