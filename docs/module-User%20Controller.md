<div id="main">

# Module: User Controller

<section>

<header></header>

<article>

### Members

#### <span class="type-signature">(inner, constant)</span> findUser<span class="type-signature"></span>

<div class="description">Promisify a few mongoose methods with the `q` promise library</div>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [server/users/userController.js](server_users_userController.js.html), [line 14](server_users_userController.js.html#line14)

</dd>

</dl>

### Methods

#### <span class="type-signature">(inner)</span> checkAuth<span class="signature">(req, res, next)</span> <span class="type-signature">→ {number}</span>

<div class="description">This function is used to signup a user if the user is authenticated.</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`req`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">request object</td>

</tr>

<tr>

<td class="name">`res`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">response object</td>

</tr>

<tr>

<td class="name">`next`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">callback function to execute</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [server/users/userController.js](server_users_userController.js.html), [line 156](server_users_userController.js.html#line156)

</dd>

</dl>

##### Returns:

<div class="param-desc">status code</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">number</span></dd>

</dl>

#### <span class="type-signature">(inner)</span> getAllUsers<span class="signature">(req, res, next)</span> <span class="type-signature">→ {object}</span>

<div class="description">This function is used to get all users from database.</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`req`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">request object</td>

</tr>

<tr>

<td class="name">`res`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">response object</td>

</tr>

<tr>

<td class="name">`next`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">callback function to execute</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [server/users/userController.js](server_users_userController.js.html), [line 19](server_users_userController.js.html#line19)

</dd>

</dl>

##### Returns:

<div class="param-desc">all users</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">object</span></dd>

</dl>

#### <span class="type-signature">(inner)</span> getPendingGames<span class="signature">(req, res, next)</span> <span class="type-signature">→ {object}</span>

<div class="description">This function is used to get all pending game challenges.</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`req`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">request object</td>

</tr>

<tr>

<td class="name">`res`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">response object</td>

</tr>

<tr>

<td class="name">`next`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">callback function to execute</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [server/users/userController.js](server_users_userController.js.html), [line 58](server_users_userController.js.html#line58)

</dd>

</dl>

##### Returns:

<div class="param-desc">pending games</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">object</span></dd>

</dl>

#### <span class="type-signature">(inner)</span> getUserHighScore<span class="signature">(req, res, next)</span> <span class="type-signature">→ {object}</span>

<div class="description">This function is used to get highest score of currently signed in user.</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`req`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">request object</td>

</tr>

<tr>

<td class="name">`res`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">response object</td>

</tr>

<tr>

<td class="name">`next`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">callback function to execute</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [server/users/userController.js](server_users_userController.js.html), [line 34](server_users_userController.js.html#line34)

</dd>

</dl>

##### Returns:

<div class="param-desc">highest score</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">object</span></dd>

</dl>

#### <span class="type-signature">(inner)</span> signin<span class="signature">(req, res, next)</span> <span class="type-signature">→ {object}</span>

<div class="description">This function is used to signin a user if user exists in database and passwords match.</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`req`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">request object</td>

</tr>

<tr>

<td class="name">`res`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">response object</td>

</tr>

<tr>

<td class="name">`next`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">callback function to execute</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [server/users/userController.js](server_users_userController.js.html), [line 88](server_users_userController.js.html#line88)

</dd>

</dl>

##### Returns:

<div class="param-desc">if user is found, returns the user token</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">object</span></dd>

</dl>

#### <span class="type-signature">(inner)</span> signup<span class="signature">(req, res, next)</span> <span class="type-signature">→ {object}</span>

<div class="description">This function is used to signup a user if username doesn't exist in database .</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`req`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">request object</td>

</tr>

<tr>

<td class="name">`res`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">response object</td>

</tr>

<tr>

<td class="name">`next`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">callback function to execute</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [server/users/userController.js](server_users_userController.js.html), [line 120](server_users_userController.js.html#line120)

</dd>

</dl>

##### Returns:

<div class="param-desc">if user is created successfully, returns the user token</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">object</span></dd>

</dl>

</article>

</section>

</div>

<nav>

## [Home](index.html)

### Modules

*   [Authentication Utility Client-Side Functions](module-Authentication%2520Utility%2520Client-Side%2520Functions.html)
*   [Authentication Utility Server-Side Functions](module-Authentication%2520Utility%2520Server-Side%2520Functions.html)
*   [Board](module-Board.html)
*   [Board Tools Functions](module-Board%2520Tools%2520Functions.html)
*   [Game Model](module-Game%2520Model.html)
*   [Middleware](module-Middleware.html)
*   [Played Words](module-Played%2520Words.html)
*   [Router](module-Router.html)
*   [Score](module-Score.html)
*   [Server](module-Server.html)
*   [User Controller](module-User%2520Controller.html)
*   [User Model](module-User%2520Model.html)

### Classes

*   [App](App.html)
*   [Challenges](Challenges.html)
*   [GameHistory](GameHistory.html)
*   [Lobby](Lobby.html)
*   [Players](Players.html)
*   [Signin](Signin.html)
*   [Signup](Signup.html)

</nav>

<footer>Documentation generated by [JSDoc 3.4.2](https://github.com/jsdoc3/jsdoc) on Sun Oct 30 2016 18:04:20 GMT-0700 (PDT)</footer>

<script>prettyPrint();</script>