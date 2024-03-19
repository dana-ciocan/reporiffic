# Reporiffic!

See all your team's PRs in one place, organised by repository. This is super useful for teams who have many multiple repos in their remit - it can sometimes be a struggle to have an overview of everything that's open and up for review and this little app aims to solve that.

## Running the app

1. Run `npm install`
1. Run `npm run dev`
1. Go to http://localhost:3000

## To sign in

1. Go to http://localhost:3000/api/auth/signin
1. Click on the `Sign in with Github` button
1. Authorise Reporiffic
1. You will get sent back to the app

## Running Storybook

I've set up Storybook for viewing the UI components in this project. To view it locally, run the following command:

```bash
npm run storybook
```

Then go to http://localhost:6006/ to see the components in Storybook

## The plan:

- Create a next.js app with the shiny new app router ✅
- Use Github auth to sign in and get user tokens
  - Create Github app ✅ (https://github.com/settings/apps/reporiffic)
  - Deploy to Vercel ✅
  - Set up Github auth ✅
- Add Storybook 👈🏻 currently working on this
- Use React Server Components for data fetching
- Display a bunch of repos and PRs!
- Add a nice vintage look-and-feel interface
- Add the ability to "star" repos that are important to you

Let's see how this goes! It is my intention to blog about my progress at danaciocan.com, so do follow along there if you find this idea interesting.
