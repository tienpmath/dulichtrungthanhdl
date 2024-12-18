import { Section } from "../craft";
import ListingCard from "../ui/listing";
import SeeMore from "../ui/see-more";

function BoatGrid(data: any) {
  // console.log(data);
  return (
    <div className="3xl:gap-y-10 grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.data.datas.map((item: any, index: any) => (
        <ListingCard
          key={`top-boat-grid-${index}`}
          id={`top-boat-grid-${index}`}
          slides={item.images}
          title={item.name}
          slug={item.slug}
          price={item.price}
        />
      ))}
    </div>
  );
}

const TopBoats = (datas: any) => {
  return (
    <Section className="group/section container-fluid mt-12 overflow-hidden lg:mt-16">
      <BoatGrid data={datas} />
    </Section>
  );
};

export default TopBoats;
