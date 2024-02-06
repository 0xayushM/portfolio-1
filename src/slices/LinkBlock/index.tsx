import { Content, isFilled } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { FaGithub, FaGlobe, FaYoutube } from "react-icons/fa6";

/**
 * Props for `LinkBlock`.
 */
export type LinkBlockProps = SliceComponentProps<Content.LinkBlockSlice>;

/**
 * Component for "LinkBlock" Slices.
 */
const LinkBlock = ({ slice }: LinkBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="socials inline-flex justify-center sm:justify-end">
          {isFilled.link(slice.primary.github_link) && (
            <PrismicNextLink
              field={slice.primary.github_link}
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
            >
              <FaGithub />
            </PrismicNextLink>
          )}
          {isFilled.link(slice.primary.youtube_link) && (
            <PrismicNextLink
              field={slice.primary.youtube_link}
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
            >
              <FaYoutube />
            </PrismicNextLink>
          )}
          {isFilled.link(slice.primary.deployed_link) && (
            <PrismicNextLink
              field={slice.primary.deployed_link}
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
            >
              <FaGlobe />
            </PrismicNextLink>
          )}
        </div>
    </section>
  );
};

export default LinkBlock;
