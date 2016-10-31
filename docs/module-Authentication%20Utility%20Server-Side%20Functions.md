<div id="main">

# Module: Authentication Utility Server-Side Functions

<section>

<header></header>

<article>

### Methods

#### <span class="type-signature">(inner)</span> checkAuth<span class="signature">(req, res, next)</span> <span class="type-signature">→ {boolean}</span>

<div class="description">This function is a middleware function to check authentication.</div>

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

<td class="description last">callback function to execute next</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [server/util.js](server_util.js.html), [line 53](server_util.js.html#line53)

</dd>

</dl>

##### Returns:

<dl>

<dt>Type</dt>

<dd><span class="param-type">boolean</span></dd>

</dl>

#### <span class="type-signature">(inner)</span> checkIsRealUser<span class="signature">(username, callback)</span> <span class="type-signature">→ {boolean}</span>

<div class="description">This function is used to check if a user is real user in the database.</div>

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

<td class="name">`username`</td>

<td class="type"><span class="param-type">string</span></td>

<td class="description last">username</td>

</tr>

<tr>

<td class="name">`callback`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">callback function to execute</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [server/util.js](server_util.js.html), [line 77](server_util.js.html#line77)

</dd>

</dl>

##### Returns:

<dl>

<dt>Type</dt>

<dd><span class="param-type">boolean</span></dd>

</dl>

#### <span class="type-signature">(inner)</span> getUserFromReq<span class="signature">(req, next)</span> <span class="type-signature">→ {object}</span>

<div class="description">This function is used to get the user from the database.</div>

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

<td class="description last">req object</td>

</tr>

<tr>

<td class="name">`next`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">callback function to execute next</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [server/util.js](server_util.js.html), [line 41](server_util.js.html#line41)

</dd>

</dl>

##### Returns:

<div class="param-desc">returns user object</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">object</span></dd>

</dl>

#### <span class="type-signature">(inner)</span> getUserIDFromUsername<span class="signature">(username, callback)</span><span class="type-signature"></span>

<div class="description">This function is used to find the userId from database given a username.</div>

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

<td class="name">`username`</td>

<td class="type"><span class="param-type">string</span></td>

<td class="description last">username</td>

</tr>

<tr>

<td class="name">`callback`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">callback function</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [server/util.js](server_util.js.html), [line 10](server_util.js.html#line10)

</dd>

</dl>

#### <span class="type-signature">(inner)</span> getUsernameFromReq<span class="signature">(req, next)</span><span class="type-signature"></span>

<div class="description">This function is used to get the username from the request object.</div>

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

<td class="description last">req object</td>

</tr>

<tr>

<td class="name">`next`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">callback function to execute next</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [server/util.js](server_util.js.html), [line 22](server_util.js.html#line22)

</dd>

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