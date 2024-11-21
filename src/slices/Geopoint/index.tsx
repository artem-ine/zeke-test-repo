import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Geopoint`.
 */
export type GeopointProps = SliceComponentProps<Content.GeopointSlice>;

/**
 * Component for "Geopoint" Slices.
 */
const Geopoint = ({ slice }: GeopointProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
{slice.primary.geopoint_test.latitude}, {slice.primary.geopoint_test.longitude}    </section>
  );
};

export default Geopoint;
