import { categories } from "../data/products";
import { SegmentGroup } from "@chakra-ui/react";

interface CategoryProps {
  setSelectedCategory: (category: string) => void;
}

export default function Category({ setSelectedCategory }: CategoryProps) {
  return (
    <div className="flex items-center justify-center gap-7 relative top-36 ">
      <SegmentGroup.Root
  
        defaultValue="Todos os produtos"
        onValueChange={(details) => {
          if (details.value) setSelectedCategory(details.value);
        }}
      >
        <SegmentGroup.Indicator/>
        <div className="flex items-center justify-center flex-wrap gap-4 w-[250px] sm:w-full">
          {categories.map((item, index) => (
            <SegmentGroup.Item        className="break-words text-center basis-full max-w-xs sm:basis-auto sm:max-w-none"  key={index} value={item.name}>
              <SegmentGroup.ItemText>{item.name}</SegmentGroup.ItemText>
              <SegmentGroup.ItemHiddenInput />
            </SegmentGroup.Item>
          ))}
        </div>
      </SegmentGroup.Root>
    </div>
  );
}
