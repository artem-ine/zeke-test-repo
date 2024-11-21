import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./index.module.css";


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
      className={styles.everytypetest}
    >
        <PrismicNextImage field={slice.primary.image} />
        {slice.primary.text}
        <PrismicRichText field={slice.primary.rich_text} />
        <PrismicNextLink field={slice.primary.link} />
        <p>{slice.primary.select}</p>
        <p>{slice.primary.boolean}</p>
        <p>{slice.primary.number}</p>
        <p>{slice.primary.color}</p>
        <p>{slice.primary.date}</p>
        <p>{slice.primary.timestamp}</p>
        <p>{slice.primary.geopoint.latitude}, {slice.primary.geopoint.longitude}</p>
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
