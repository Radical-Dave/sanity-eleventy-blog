export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f807efbf4b25e30b6aa277',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-ysjavfci',
                  apiId: 'f84dd2dd-204f-40bf-a02f-90e7ac535ded'
                },
                {
                  buildHookId: '61f807ef22bfa4e952f7d48e',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-8o2bzkzs',
                  apiId: 'd2bc434f-751d-4c3f-9f0b-6b51b1ab3813'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Radical-Dave/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-8o2bzkzs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
