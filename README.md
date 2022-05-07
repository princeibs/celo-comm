# Celo Comm
![image](https://user-images.githubusercontent.com/64266194/167259237-6452e575-3657-4dd4-8279-61edc969ef4c.png)

## Description
This is a blogging dapp where users can: 
- See blog posts uploaded by other users
- Like a blog post
- Comment on a blog post
- Buy some coffee which costs cUSD to the author of a particular post
- Create their own blog posts (with markdown supported)
- See the cUSD balance in their Celo Wallet
- and others ...

## Live Demo
[Celo Comm](https://princeibs.github.io/celo-comm/)

## Usage 
### Requirements
1. Install the [CeloExtensionWallet](https://chrome.google.com/webstore/detail/celoextensionwallet/kkilomkmpmkbdnfelcpgckmpcaemjcdh?hl=en) from the Google Chrome Store.
2. Create a wallet.
3. Go to https://celo.org/developers/faucet and get tokens for the alfajores testnet.
4. Switch to the alfajores testnet in the CeloExtensionWallet.

### Test
1. Go to feeds 
2. Click on any blog post
3. Like on the post, make a comment, and see if it will reflect in frontend.
4. Create a second account in your extension wallet and use it to access the DApp.
5. Create new blog post with that second account.
6. Switch to the first account and then locate the newly created post.
7. Purchase some coffee for the author of that blog post.
8. Switch back to the second account used you used to create the post, check if your balance has  increased
9. Also check the first account to see if the balance has reduced.

## Project Setup
### Install dependencies
`npm install`
### Start the DApp
`npm start`

---
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
