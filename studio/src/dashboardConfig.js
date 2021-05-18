export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60a34293ac5b40532d35e85c",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-s8gyqdgm",
                  apiId: "50a4593f-81ce-4511-8cd2-6bfc6011a126",
                },
                {
                  buildHookId: "60a342933dd2fd5d8e5d167e",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-t6xdr4ar",
                  apiId: "82ea6c43-d4a4-494f-8900-2e1ddadf747c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/salemaziel/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-t6xdr4ar.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
