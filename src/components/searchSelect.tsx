import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectSearch() {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Search method" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Who">By Who</SelectItem>
          <SelectItem value="words">By words</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
