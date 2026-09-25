import CategoryBlock from './CategoryBlock';
import PriceFilter from './PriceFilter';
import TagCloud from './TagCloud';

export default function Sidebar() {
  return (
    <aside className="relative flex flex-col gap-5">
      <CategoryBlock />
      <PriceFilter />
      <TagCloud />
    </aside>
  );
}
