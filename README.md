[![Version](https://img.shields.io/npm/v/@arturthemaslov/gatsby-theme-intro-maslov)](https://www.npmjs.com/package/@arturthemaslov/gatsby-theme-intro-maslov)
[![Downloads](https://img.shields.io/npm/dt/@arturthemaslov/gatsby-theme-intro-maslov)](https://www.npmjs.com/package/@arturthemaslov/gatsby-theme-intro-maslov)
![License](https://img.shields.io/github/license/neone35/gatsby-theme-intro-maslov)

# Intro - Personal branding theme for developers

Intro is an open source [Gatsby](https://www.gatsbyjs.org/) theme built specially for developers. Tell your story by showing your skills, projects and career path.

This is heavily modified fork of original theme at [link](https://github.com/wkocjan/gatsby-theme-intro)


## Upgrades

- New YAML files for education, ceritifications
- Work, Education and certifications now in tab layout
- Projects are sorted into tabs by new YAML property 'type'
- Location div now has map overlay which is lazy-loaded
- Profile skills and tools now have links
- Project spheres are now spinning and reacting to mouse
- Other CSS reactions to mouse movements to make site alive
- New social link options for stackoverflow and spotify

## 🚀 Getting Started

### Install theme & dependencies

```shell
mkdir my-site
cd my-site
yarn init -y
yarn add gatsby react react-dom @arturthemaslov/gatsby-theme-intro-maslov
```

### Enable theme

Then add the theme to your `gatsby-config.js`.

```javascript
module.exports = {
  plugins: [
    {
      resolve: "@arturthemaslov/gatsby-theme-intro-maslov",
      options: {
        theme: "classic",
      },
    },
  ],
}
```

### Run your site

That's it, you can now run your site using

```shell
gatsby develop
```

This process will create `content/` directory within your site with a sample data.

### Edit content

You can change the website's content by editing `.yaml` files in `content/` directory:

#### `profile.yaml`

Follow existing convention to provide your profile information, skills & tools.

Do not remove existing parameters from the file, as it may break the website.

#### `projects.yaml`

For each project you can provide:

| Parameter   | Value                          | Is required? |
| ----------- | ------------------------------ | ------------ |
| name        | Name of the project            | yes          |
| url         | URL of the project             | no           |
| description | Project's description          | no           |
| status      | Either `in progress` or `live` | no           |
| tags        | List of tags                   | no           |
| icon        | Either `github` or `website`   | no           |
| image       | Path to the image              | no           |

#### `work-history.yaml`

For each entry you can provide:

| Parameter | Value                        | Is required? |
| --------- | ---------------------------- | ------------ |
| company   | Name of the company          | yes          |
| period    | Start / End date             | no           |
| position  | Your position at the company | no           |
| url       | URL of the company           | no           |

#### `education-history.yaml`

For each entry you can provide:

| Parameter | Value                        | Is required? |
| --------- | ---------------------------- | ------------ |
| school    | Name of the school           | yes          |
| period    | Start / End date             | no           |
| level     | Your gained degree           | no           |
| url       | URL of the company           | no           |

#### `certifications.yaml`

For each entry you can provide:

| Parameter | Value                        | Is required? |
| --------- | ---------------------------- | ------------ |
| issuer    | Name of the issuer           | yes          |
| program   | Name of the program          | yes          |
| date      | Start / End date             | no           |
| image     | Image of certification       | no           |
| url       | URL of the issuer            | no           |

#### `social.yaml`

List of your social media accounts. Please just fill the url parameter or leave it empty.

Do not add custom items to the list.

### Enable email notifications

Contact form is integrated with [Formspree](https://formspree.io/). Any form submissions will be sent to your e-mail (set in `profile.yaml`).

You need to confirm your e-mail - to do it, please just send any message using the contact form. Shortly after doing it, you'll receive message from Formspree with an activation link.

### Please refer to [original theme docs](https://github.com/wkocjan/gatsby-theme-intro) for more info on customization

## About

- Intro. is a theme originally created by [Wojciech Kocjan](https://kocjan.net) from [Weeby Studio](https://weeby.studio).
- The theme has been initially [launched](https://www.producthunt.com/posts/intro-8) in 2018 as a commercial project written in JavaScript. In 2020 it's been rewritten to Gatsby and open sourced.
- Heavy modified by [Artur Maslov](https://arturmaslov.com/) in 2020.

**Thank you for using it!**
