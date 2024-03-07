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
import { Button } from "@/components/ui/button";

import { SelectSearch } from "./searchSelect";



export function CreateQuote() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Make a Quote</CardTitle>
        <CardDescription>
          Get your short thought saved forever for the world to laugh at.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          {/* Somehow using title or even title form as heading gives error  */}
          <Label htmlFor="postHeading">Who</Label>
          <Input id="postHeading" placeholder="- Sun Tzu" defaultValue="" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="post">What</Label>
          <Input id="post" placeholder="Damn! What that/?" defaultValue="" />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Post it!</Button>
      </CardFooter>
    </Card>
  );
}



export function SearchQuote() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Search that thought</CardTitle>
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
  );
}

