import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Settings`.
 */
export type SettingsProps = SliceComponentProps<Content.SettingsSlice>;

/**
 * Component for "Settings" Slices.
 */
const Settings = ({ slice }: SettingsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for settings (variation: {slice.variation}) Slices
    </section>
  );
};

export default Settings;
