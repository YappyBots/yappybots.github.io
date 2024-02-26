(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{307:function(t,e,o){"use strict";o.r(e);var n=o(14),i=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"setting-up-yappy-github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-yappy-github"}},[t._v("#")]),t._v(" Setting Up Yappy GitHub")]),t._v(" "),e("p",[t._v("Invite the bot @ "),e("a",{attrs:{href:"https://yappy.dsev.dev/github",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://yappy.dsev.dev/github"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Follow the following steps to set up Yappy with any repo on GitHub.")]),t._v(" "),e("p",[t._v("By using the bot or sending webhooks to the bot, you agree to the "),e("RouterLink",{attrs:{to:"/docs/github/privacy.html"}},[t._v("privacy policy")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("These instructions are for the version that utilizes Discord slash commands.\nIt may not have been deployed yet.")])]),t._v(" "),e("ol",[e("li",[t._v("Go to the channel you want events in for a repo")]),t._v(" "),e("li",[t._v("Choose the method to connect your repos\n"),e("ul",[e("li",[t._v("Run the "),e("code",[t._v("/setup")]),t._v(" command to retrieve a time-limited link to the setup dashboard\n"),e("ul",[e("li",[t._v("This link will expire after 30 minutes")]),t._v(" "),e("li",[t._v("It will ask you to sign in with GitHub to confirm you have permissions in the repositories you want to use with the bot")]),t._v(" "),e("li",[t._v("It will then ask you to select the repositories you want to use with the bot")]),t._v(" "),e("li",[t._v("You will not have to manually create webhooks for each repo you want to have events for")])])]),t._v(" "),e("li",[t._v("OR Manually create a webhook that sends events to the channels you specify\n"),e("ul",[e("li",[e("em",[t._v("This method is not recommended, as it requires you to manually create webhooks for each repo you want to have events for")])]),t._v(" "),e("li",[e("em",[t._v("It also requires you to manually configure the webhooks to send the events you want to the channels you want")])]),t._v(" "),e("li",[t._v("You can retrieve the URL to send webhooks to by running "),e("code",[t._v("/setup")]),t._v(" and clicking the hook link")]),t._v(" "),e("li",[t._v("This will display a page with instructions on how to set up the webhook")]),t._v(" "),e("li",[t._v('You can test the webhook by, in Settings > Webhooks, scrolling down the webhook, finding the webhook pointing to the url mentioned above, clicking it, and clicking the "Test" button on the right.\n'),e("ul",[e("li",[t._v("Keep in mind you will need to have a commit or two in the repo, as it will simulate a push request.")])])])])])])]),t._v(" "),e("li",[t._v("Filter out events you don't want to see\n"),e("ul",[e("li",[t._v("Run the "),e("code",[t._v("/conf")]),t._v(" command to configure the events you want to see")]),t._v(" "),e("li",[t._v("You can also use the "),e("code",[t._v("/conf")]),t._v(" command to ignore events from specific users, branches, or repositories")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);