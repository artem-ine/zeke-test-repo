import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `EveryTypeTest`.
 */
export type EveryTypeTestProps =
  SliceComponentProps<Content.EveryTypeTestSlice>;

/**
 * Component for "EveryTypeTest" Slices.
 */
const EveryTypeTest = ({ slice }: EveryTypeTestProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage field={slice.primary.image} />
      {slice.primary.text}
      <PrismicRichText field={slice.primary.rich_text} />
      <PrismicNextLink field={slice.primary.link} />
      {slice.primary.select}
      {slice.primary.boolean}
      {slice.primary.number}
      {slice.primary.color}
      {slice.primary.date}
      {slice.primary.timestamp}
      {slice.primary.geopoint.latitude}, {slice.primary.geopoint.longitude}
      <PrismicNextLink field={slice.primary.link_to_media} />
      {slice.primary.repeatable_group?.map((item, index) => (
        item.repeated_rich_text && (
          <PrismicRichText 
            key={index} 
            field={item.repeated_rich_text} 
          />
        )
      ))}
    </section>
  );
};

export default EveryTypeTest;
