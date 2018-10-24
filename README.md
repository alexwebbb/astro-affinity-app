# Astrology Affinity App
[Visit the site now!](https://astrology-app.herokuapp.com/)

This capstone app is demonstration of a fullstack JavaScript app that utilizes Node.js and Express with React and Redux to create a single page app experience. This app also utilizes D3.js and Materialize to create an engaging visual and interactive experience.
view of the app in action

![view of the app](https://res.cloudinary.com/execool/image/upload/v1532957701/astro-app/app-view.png "App View")

This app allows a user to create an account, add a profile with their birthdate, and the app will calculate their western zodiac sign and chinese sign and use those to determine what their affinity is with other profiles that are added. It also allows you to sort profiles based on their affinity using a particular zodiac.

Many people take astrology and the zodiacs very seriously. The data used in this project was hand transcribed from charts found via google by myself. It is by no means conclusive in the meaning behind the scores granted, and a serious astrologer should be sought out if deeper analysis is desired.
Example of a payment being applied to purchase more slots

The goal of the app is to allow users to have fun making quick comparisons to people they know, without having to do more rigorous analysis. Because this app is just a demonstration, a "social media" approach was not used, ie you cannot see or rate other existing users, although that type of utility can be easily added in the future.

![purchasing tokens](https://res.cloudinary.com/execool/image/upload/v1532922949/astro-app/payment-example.png "Payment view")

One more feature I will make note of, is the "slots" you will see when using the app. In order to use the app, no purchase is necessary. However, you are only given five profile slots initially. If you wish to make comparisons with large numbers of people, you must either purchase additional slots, or be willing to delete and re-add profiles by hand.

Celebrity info and copy used in autofill button is sourced from [Famous Birthdays](https://www.famousbirthdays.com/).

The API in this project utilizes Mongo DB and redux to manage state. The primary data being stored for each user is the celebrity profiles they have created. Otherwise, the user is identified by their unique google ID, which can be deleted (thus deleting the account) from the settings page.

## Tech Used
+ HTML
+ CSS
+ JavaScript
+ Materialize
+ Node.js
+ Express
+ MongoDB
+ Passport
+ Stripe
+ React
+ Redux
+ D3.js
