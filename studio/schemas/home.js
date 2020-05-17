export default {
  name: "home",
  title: "Site Assets",
  type: "document",
  fields: [
    {
      name: "metaDescription",
      title: "Meta Description",
      description:
        "Good for SEO. Keep in mind Google only counts the first 155-160 characters!",
      type: "blockContent",
    },
    {
      name: "heroImage",
      tite: "Landing Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "alt",
      title: "Logo Alternative Text",
      description: "Good for SEO and accessibility.",
      type: "string",
    },
    {
      name: "socials",
      title: "Social Media Links",
      type: "socials",
    },
    {
      name: "resume",
      title: "Resume",
      type: "resume",
    },
  ],
};
