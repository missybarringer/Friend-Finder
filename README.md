# Friend-Finder

## Contributors
@missybarringer
____________________________________
## Technology
* Javascript
* jQuery
* node.js
* Express.js
* Cors
* HTML
* Bootstrap
____________________________________
## Links
* [Click here to View the Friend Finder App in action](https://tranquil-citadel-96703.herokuapp.com/)
* [GitHub Repository Link](https://github.com/missybarringer/Friend-Finder.git)
![alt text](http://webwabisabi.com/assets/images/friendFinder.PNG)
____________________________________
## Problem - create a dating app

Create a "FriendFinder" application -- basically a dating app. This site will take in results from your users' surveys then compare their answers with those from other users. The app then displays the name and picture of the user with the best overall match.
____________________________________
### The solution:
I used Express to handle routing. Make sure you deploy your app to Heroku so other users can fill it out.

The survey has 10 questions to find your best match. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with the question.

2. The `server.js` file uses the npm packages: `express`, `cors`, `path`.

3. The `htmlRoutes.js` file includes two routes:

   * A GET Route to `/survey` which displays the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page.

4. The `apiRoutes.js` file contains two routes:

   * A GET route with the url `/api/friends`. This is used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This is used to handle incoming survey results. This route will also be used to handle the compatibility logic.

5. The application's data is saved inside of `app/data/friends.js` as an array of objects.
6. The most compatible friend is found by comparing the current user's scores against the scores from other users, question by question. The user with the least amount of difference is then displayed in a modal pop-up with their name & picture.
____________________________________
## License
*This product is licensed under the MIT License (MIT).
____________________________________
## Contributing Guidelines
All contributions and suggestions are welcome!
For direct contributions, please fork the repository and file a pull request.
____________________________________
## Contact
* e-mail: barringer.margaret@gmail.com
* Twitter: @webwabisabi_com
* Instagram: @webwabisabi_com
* Added to [Personal Portfolio webpage](https://missybarringer.github.io/)