import alfy from 'alfy'
import { cssInJSToRegular } from "./helpers.js";

alfy.output([
	{
    uid: "css-in-js-to-css",
    title: "From CSS-in-JS to regular CSS",
    subtitle: "Transform CSSinJS to regular CSS",
    autocomplete: "From CSS-in-JS to regular CSS",
    text: {
      "copy": cssInJSToRegular(alfy.input),
      "largetype": cssInJSToRegular(alfy.input)
    }
	},
]);
