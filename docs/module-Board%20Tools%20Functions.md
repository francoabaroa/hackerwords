<div id="main">

# Module: Board Tools Functions

<section>

<header></header>

<article>

### Methods

#### <span class="type-signature">(inner)</span> checkWord<span class="signature">(req, res, next)</span><span class="type-signature"></span>

<div class="description">This function is used to check to see if it is a real word.</div>

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

*   [server/board/BoardTools.js](server_board_BoardTools.js.html), [line 255](server_board_BoardTools.js.html#line255)

</dd>

</dl>

#### <span class="type-signature">(inner)</span> finalizeGame<span class="signature">(req, res, next)</span><span class="type-signature"></span>

<div class="description">This function is used to finalize the current game and save game results.</div>

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

*   [server/board/BoardTools.js](server_board_BoardTools.js.html), [line 140](server_board_BoardTools.js.html#line140)

</dd>

</dl>

#### <span class="type-signature">(inner)</span> generateRandomBoard<span class="signature">()</span> <span class="type-signature">→ {string}</span>

<div class="description">This function is used to generate a random board string.</div>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [server/board/BoardTools.js](server_board_BoardTools.js.html), [line 101](server_board_BoardTools.js.html#line101)

</dd>

</dl>

##### Returns:

<div class="param-desc">random game board string</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">string</span></dd>

</dl>

#### <span class="type-signature">(inner)</span> getGameHistory<span class="signature">(req, res, next)</span><span class="type-signature"></span>

<div class="description">This function is used to get a user's game history.</div>

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

*   [server/board/BoardTools.js](server_board_BoardTools.js.html), [line 62](server_board_BoardTools.js.html#line62)

</dd>

</dl>

#### <span class="type-signature">(inner)</span> initializeChallengeGame<span class="signature">(req, user, opponentName)</span><span class="type-signature"></span>

<div class="description">This function is used to start a challenge game.</div>

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

<td class="name">`user`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">user object</td>

</tr>

<tr>

<td class="name">`opponentName`</td>

<td class="type"><span class="param-type">string</span></td>

<td class="description last">name of opponent</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [server/board/BoardTools.js](server_board_BoardTools.js.html), [line 117](server_board_BoardTools.js.html#line117)

</dd>

</dl>

#### <span class="type-signature">(inner)</span> makeBoard<span class="signature">(req, res, next)</span><span class="type-signature"></span>

<div class="description">This function is used to make the board.</div>

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

*   [server/board/BoardTools.js](server_board_BoardTools.js.html), [line 173](server_board_BoardTools.js.html#line173)

</dd>

</dl>

#### <span class="type-signature">(inner)</span> makeChallengeGame<span class="signature">(req, res, next)</span><span class="type-signature"></span>

<div class="description">This function is used to make a challenge game for a fellow player.</div>

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

*   [server/board/BoardTools.js](server_board_BoardTools.js.html), [line 34](server_board_BoardTools.js.html#line34)

</dd>

</dl>

#### <span class="type-signature">(inner)</span> scoreWord<span class="signature">(word)</span> <span class="type-signature">→ {number}</span>

<div class="description">This function is used to assign points based on letters used in word played.</div>

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

<td class="name">`word`</td>

<td class="type"><span class="param-type">string</span></td>

<td class="description last">word string</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [server/board/BoardTools.js](server_board_BoardTools.js.html), [line 192](server_board_BoardTools.js.html#line192)

</dd>

</dl>

##### Returns:

<div class="param-desc">word score</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">number</span></dd>

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