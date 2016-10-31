<div id="main">

# Class: App

<section>

<header>

## App

<div class="class-description">Creates a new App component.</div>

</header>

<article>

<div class="container-overview">

## Constructor

#### <span class="type-signature"></span>new App<span class="signature">()</span><span class="type-signature"></span>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [client/gameComponents/App.jsx](client_gameComponents_App.jsx.html), [line 19](client_gameComponents_App.jsx.html#line19)

</dd>

</dl>

</div>

### Methods

#### <span class="type-signature"></span>backToLobby<span class="signature">()</span><span class="type-signature"></span>

<div class="description">This function is used to route the user back to lobby on button click.</div>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [client/gameComponents/App.jsx](client_gameComponents_App.jsx.html), [line 158](client_gameComponents_App.jsx.html#line158)

</dd>

</dl>

#### <span class="type-signature"></span>boardClick<span class="signature">(event)</span> <span class="type-signature">→ {boolean}</span>

<div class="description">This function is used to enforce the board rules and changes the class of currently selected letters for UI.</div>

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

<td class="name">`event`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">click event object</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [client/gameComponents/App.jsx](client_gameComponents_App.jsx.html), [line 237](client_gameComponents_App.jsx.html#line237)

</dd>

</dl>

##### Returns:

<div class="param-desc">true or false if rules are followed</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">boolean</span></dd>

</dl>

#### <span class="type-signature"></span>componentWillMount<span class="signature">()</span><span class="type-signature"></span>

<div class="description">componentWillMount() is invoked immediately before mounting occurs. This one checks for a valid session token and if the token is valid and the user plays a single player game, it makes a random game board for the user. If player is playing challenge mode, it will retrieve the appropriate board</div>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [client/gameComponents/App.jsx](client_gameComponents_App.jsx.html), [line 62](client_gameComponents_App.jsx.html#line62)

</dd>

</dl>

#### <span class="type-signature"></span>componentWillUnmount<span class="signature">()</span><span class="type-signature"></span>

<div class="description">componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. This one stops the timer.</div>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [client/gameComponents/App.jsx](client_gameComponents_App.jsx.html), [line 123](client_gameComponents_App.jsx.html#line123)

</dd>

</dl>

#### <span class="type-signature"></span>getClickIndexNumber<span class="signature">(ci)</span> <span class="type-signature">→ {number}</span>

<div class="description">This function is used to get the index of a particular index.</div>

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

<td class="name">`ci`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">an array with all letters (indexes) that have been clicked for current word</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [client/gameComponents/App.jsx](client_gameComponents_App.jsx.html), [line 143](client_gameComponents_App.jsx.html#line143)

</dd>

</dl>

##### Returns:

<div class="param-desc">the index number</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">number</span></dd>

</dl>

#### <span class="type-signature"></span>getLastClickIndex<span class="signature">()</span><span class="type-signature"></span>

<div class="description">This function is used to get the index of the last letter clicked.</div>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [client/gameComponents/App.jsx](client_gameComponents_App.jsx.html), [line 130](client_gameComponents_App.jsx.html#line130)

</dd>

</dl>

#### <span class="type-signature"></span>isInUsedIndexes<span class="signature">(clickIndex)</span> <span class="type-signature">→ {boolean}</span>

<div class="description">This function is used to check to see if letter has been clicked previously in current word.</div>

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

<td class="name">`clickIndex`</td>

<td class="type"><span class="param-type">number</span></td>

<td class="description last">index to check</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [client/gameComponents/App.jsx](client_gameComponents_App.jsx.html), [line 210](client_gameComponents_App.jsx.html#line210)

</dd>

</dl>

##### Returns:

<dl>

<dt>Type</dt>

<dd><span class="param-type">boolean</span></dd>

</dl>

#### <span class="type-signature"></span>logOut<span class="signature">()</span><span class="type-signature"></span>

<div class="description">This function is used to log the current user out.</div>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [client/gameComponents/App.jsx](client_gameComponents_App.jsx.html), [line 150](client_gameComponents_App.jsx.html#line150)

</dd>

</dl>

#### <span class="type-signature"></span>sendWord<span class="signature">()</span><span class="type-signature"></span>

<div class="description">This function is used to send the current finalized word to the server for verification.</div>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [client/gameComponents/App.jsx](client_gameComponents_App.jsx.html), [line 217](client_gameComponents_App.jsx.html#line217)

</dd>

</dl>

#### <span class="type-signature"></span>startTimer<span class="signature">()</span><span class="type-signature"></span>

<div class="description">This function is used to start the game timer.</div>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [client/gameComponents/App.jsx](client_gameComponents_App.jsx.html), [line 164](client_gameComponents_App.jsx.html#line164)

</dd>

</dl>

#### <span class="type-signature"></span>stopTimer<span class="signature">()</span><span class="type-signature"></span>

<div class="description">This function is used to stop the game timer.</div>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [client/gameComponents/App.jsx](client_gameComponents_App.jsx.html), [line 201](client_gameComponents_App.jsx.html#line201)

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