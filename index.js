import alfy from 'alfy'
<<<<<<< Updated upstream

alfy.output([
	{
		title: alfy.input
=======
import { removeMaj } from "./helpers.js";

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
>>>>>>> Stashed changes
	},
	{
		title: 'Rainbow'
	}
]);
