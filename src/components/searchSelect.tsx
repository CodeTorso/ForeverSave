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
          <SelectItem value="apple">By Title</SelectItem>
          <SelectItem value="banana">By ID</SelectItem>
          <SelectItem value="blueberry">By words</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
