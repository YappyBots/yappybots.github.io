(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{309:function(e,t,s){"use strict";s.r(t);var o=s(14),i=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"yappy-github-app-permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yappy-github-app-permissions"}},[e._v("#")]),e._v(" Yappy GitHub App Permissions")]),e._v(" "),t("p",[e._v("When setting up the bot through "),t("code",[e._v("/setup")]),e._v(", the site will ask you to sign in with GitHub.")]),e._v(" "),t("p",[e._v("This is temporary & allows the bot to confirm the user has perms in the repositories (enough to install an app!). Installing the app in repositories requires permissions so that the bot can receive events (webhooks) pertaining to those areas.  For example, if the bot doesn't have permission to read PRs in the repository, GitHub doesn't allow it to receive webhooks for PR-related activity.")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Dependabot Alerts")]),e._v(": dependabot vulnerability alerts")]),e._v(" "),t("li",[t("strong",[e._v("Code / Contents")]),e._v(": commit comment, create/delete branch, fork, gollum (wiki), push, release")]),e._v(" "),t("li",[t("strong",[e._v("Commit Statuses")]),e._v(": commit statuses (doesn't seem to include workflow commit statuses! likely only external apps)")]),e._v(" "),t("li",[t("strong",[e._v("Issues")]),e._v(": issue, milestone")]),e._v(" "),t("li",[t("strong",[e._v("Metadata")]),e._v(": meta, label, public, repository, star, watch")]),e._v(" "),t("li",[t("strong",[e._v("Pages")]),e._v(": GitHub pages failure events")]),e._v(" "),t("li",[t("strong",[e._v("Pull Requests")]),e._v(": pull requests")])]),e._v(" "),t("p",[e._v('This data is only "read" when receiving webhooks from GitHub (to convert into Discord embeds for the relevant channels) and when configuring the bot through the '),t("code",[e._v("/setup")]),e._v(" command.")]),e._v(" "),t("p",[e._v('The only API call ever made is during setup to obtain "Metadata" to retrieve the list of available repositories for an installation. The access token is stored for <30 minutes while the user uses the setup dashboard, and then forgotten. The bot then only stores the Github IDs and names of the installations (users / organizations) and repositories that the user has chosen to use with the bot.')]),e._v(" "),t("p",[e._v("See the "),t("RouterLink",{attrs:{to:"/docs/github/privacy.html"}},[e._v("privacy policy")]),e._v(" for more information.")],1)])}),[],!1,null,null,null);t.default=i.exports}}]);